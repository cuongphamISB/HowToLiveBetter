import { readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, relative } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, read, bookFilesOnDisk } from './lib/book.mjs';

const errors = [];
function readdirDeep(dir) {
  const out=[];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (['.git','node_modules','dist'].includes(entry.name)) continue;
    const rel=relative(ROOT, resolve(dir, entry.name));
    if (entry.isDirectory()) out.push(...readdirDeep(resolve(dir, entry.name)));
    else out.push(rel);
  }
  return out;
}
const fields = ['Chi phí', 'Hiểu đơn giản', 'Lợi ích', 'Bằng chứng', 'Nguồn', 'Ghi chú'];
const han = /[\p{Unified_Ideograph}\u3007]/u;
const tracked = [...new Set([...execFileSync('git', ['ls-files', '-z'], { cwd: ROOT }).toString().split('\0').filter(Boolean), ...readdirDeep(ROOT)].map(path => path.replace(/\\/g, '/')))];
for (const path of tracked) {
  if (!existsSync(resolve(ROOT, path))) continue;
  if (han.test(path)) errors.push(`Tên file còn chữ Trung: ${path}`);
  if (!/\.(?:md|html|mjs|js|py|json|yml|yaml|xml|txt|typ|css)$|(?:^|\/)(?:LICENSE|robots\.txt)$/.test(path)) continue;
  const text = read(path);
  text.split('\n').forEach((line, i) => { if (han.test(line)) errors.push(`${path}:${i + 1}: còn chữ Trung`); });
  // Internal Markdown links must resolve after filenames change.
  const prose = text.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, '').replace(/(`+)[\s\S]*?\1/g, '');
  if (path.endsWith('.md')) for (const m of prose.matchAll(/\]\(([^)\n]+)\)/g)) {
    const href = m[1].replace(/^<|>$/g, '').split(/\s+"/)[0];
    if (/^(?:https?:|mailto:|#)/.test(href)) continue;
    let target;
    try { target = decodeURIComponent(href.split('#')[0]); }
    catch { errors.push(`${path}: liên kết mã hóa sai ${href}`); continue; }
    if (target && !existsSync(resolve(ROOT, dirname(path), target)) && !existsSync(resolve(ROOT, dirname(path), target, 'index.md'))) errors.push(`${path}: liên kết không tồn tại ${href}`);
  }
}
const files = bookFilesOnDisk();
let total = 0;
if (files.length !== 34) errors.push(`Phải có 34 chương, hiện có ${files.length}`);
for (const file of files) {
  const blocks = read(`book/${file}`).split(/^### /m).slice(1);
  blocks.forEach((block, i) => {
    total++;
    if (!block.startsWith(`${i + 1}. `)) errors.push(`${file}: số mục không liên tục tại ${i + 1}`);
    for (const field of fields) {
      const found = block.match(new RegExp(`^- ${field}:`, 'gm')) ?? [];
      if (found.length !== 1) errors.push(`${file}, mục ${i + 1}: trường ${field} xuất hiện ${found.length} lần`);
    }
    if (!/^- Bằng chứng: [ABC](?:\s|$)/m.test(block)) errors.push(`${file}, mục ${i + 1}: bằng chứng không hợp lệ`);
    if (/^- Ghi chú: (?:\*\*)?Còn tranh luận\b/im.test(block) && !/^- Ghi chú: (?:\*\*)?Còn tranh luận:/im.test(block)) errors.push(`${file}, mục ${i + 1}: nhãn tranh luận phải có dấu hai chấm`);
    if (!/<!-- cost: money=(?:0|low|high) time=(?:low|medium|high) effort=(?:no|some|yes) benefit=(?:large|medium|small) metric=(?:mortality|money|time|freedom) -->/.test(block)) errors.push(`${file}, mục ${i + 1}: metadata không hợp lệ`);
  });
}
if (total !== 649) errors.push(`Phải có 649 mục, hiện có ${total}`);
errors.forEach(error => console.error(error));
console.log(`Đã kiểm tra ngôn ngữ/tên file/liên kết và cấu trúc: ${files.length} chương, ${total} mục; ${errors.length} lỗi.`);
if (errors.length) process.exitCode = 1;

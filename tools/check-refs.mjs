import { writeFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, read, bookFilesOnDisk } from './lib/book.mjs';
const check = process.argv.includes('--check');
const sections = new Map();
const failures = [];
const targets = [];
for (const file of bookFilesOnDisk()) {
  const titles = new Map([...read(`book/${file}`).matchAll(/^### (\d+)\. (.*)$/gm)].map(m => [Number(m[1]), m[2]]));
  sections.set(Number(file.slice(0, 2)), { file, titles });
  targets.push({ file: `book/${file}`, chapter: Number(file.slice(0, 2)) });
}
for (const file of readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && !['doi-chieu-tham-chieu.md', 'Trích dẫn tham chiếu.md'].includes(f))) targets.push({ file: `docs/${file}`, chapter: null });
const spec = '\\d+(?:\\s*,\\s*\\d+)*(?:\\s*(?:đến|–|-)\\s*(?:mục\\s*)?\\d+)?';
const reference = new RegExp(`chương\\s*(\\d+)\\s*[,;]?\\s*mục\\s*(${spec})|mục\\s*(${spec})`, 'gi');
const expand = s => {
  const range = /^(\d+)\s*(?:đến|–|-)\s*(?:mục\s*)?(\d+)$/.exec(s.trim());
  if (range) return Array.from({ length: Math.max(0, Number(range[2]) - Number(range[1]) + 1) }, (_, i) => Number(range[1]) + i);
  return s.split(',').map(Number);
};
const table = ['# Đối chiếu tham chiếu', '', 'Tạo bằng `node tools/check-refs.mjs`. Bảng ghi tiêu đề đích của từng tham chiếu để phát hiện lệch số khi thêm hoặc xóa mục. Hồ sơ kiểm chứng ghi lịch sử nên không nằm trong phạm vi này.', '', '| Nơi trích | Tham chiếu | Tiêu đề đích | Ngữ cảnh |', '| --- | --- | --- | --- |'];
let count = 0;
for (const target of targets) {
  let current = 0;
  read(target.file).split('\n').forEach((line, i) => {
    const heading = /^### (\d+)\./.exec(line);
    if (heading) { current = Number(heading[1]); return; }
    if (/^##\s/.test(line)) current = 0;
    for (const m of line.matchAll(reference)) {
      if (/danh\s+$/i.test(line.slice(0, m.index))) continue;
      if (m[1] == null && /^- Nguồn:/.test(line)) continue;
      const chapter = m[1] == null ? target.chapter : Number(m[1]);
      if (chapter == null) { failures.push(`${target.file}:${i + 1}: tham chiếu '${m[0]}' thiếu chương`); continue; }
      for (const id of expand(m[2] ?? m[3])) {
        count++;
        const title = sections.get(chapter)?.titles.get(id);
        if (!title) failures.push(`${target.file}:${i + 1}: chương ${chapter}, mục ${id} không tồn tại`);
        if (chapter === target.chapter && id === current) failures.push(`${target.file}:${i + 1}: mục tự trích dẫn`);
        const safe = s => s.replace(/\|/g, '/').replace(/\[/g, '&#91;').replace(/\]/g, '&#93;');
        table.push(`| ${target.file}:${i + 1} | chương ${chapter}, mục ${id} | ${safe(title ?? '**không tồn tại**')} | ${safe(line.slice(Math.max(0, m.index - 100), m.index + m[0].length + 100))} |`);
      }
    }
  });
}
if (count < 200) failures.push(`Chỉ đọc được ${count} tham chiếu; cần kiểm tra parser và nội dung`);
const output = `${table.join('\n')}\n`;
if (check && read('docs/doi-chieu-tham-chieu.md') !== output) failures.push('Bảng tham chiếu chưa được cập nhật; chạy node tools/check-refs.mjs.');
failures.forEach(f => console.error(f));
if (!check) writeFileSync(resolve(ROOT, 'docs/doi-chieu-tham-chieu.md'), output);
console.log(`Đã kiểm tra ${count} tham chiếu trong ${targets.length} tệp; ${failures.length} lỗi.`);
if (failures.length) process.exitCode = 1;

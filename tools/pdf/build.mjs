import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Lời mở đầu\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## Mục lục/, '# Giới thiệu các chương'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Commit nội dung: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Thông tin phiên bản

PDF này được dàn trang từ nội dung Markdown trong kho. Thông tin của bản đang đọc:

- Thời gian tạo: ${STAMP} (UTC+7)
${commitLine}- Bản mới nhất, tra cứu và góp ý: ${REPO}
- Trang đọc (lọc theo từ khóa, chương, bằng chứng và chi phí; có bản HTML ngoại tuyến): ${SITE}

Liên kết giữa các chương mở ngay trong PDF. Hồ sơ kiểm chứng, giấy phép và tài liệu khác mở trên GitHub.

Nội dung theo CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Được chia sẻ, sửa đổi và sử dụng thương mại khi ghi nguồn tác giả eternity4719, tên sách Hướng dẫn sống hiệu quả và liên kết kho; bản sửa đổi phải ghi rõ việc chỉnh sửa. Đây là bản dịch Việt của cuongphamISB.`;
}
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`${p.src} thiếu tiêu đề cấp 1 để tạo liên kết nội bộ`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`Không tìm thấy ${cmd}; cài công cụ hoặc đặt biến ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} tới tệp thực thi`);
    throw new Error(`${cmd} thất bại:\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'không rõ'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Đã tạo ${OUT}: ${bookFiles.length} chương, ${entries} mục, ${docFiles.length} phụ lục; ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);

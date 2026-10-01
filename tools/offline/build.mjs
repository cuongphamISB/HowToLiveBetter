// Build a self-contained reader that works without fetch or external images.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, readBook, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.html');
const { readme, bookFiles, docFiles } = readBook();
const corpus = {
  readme,
  parts: Object.fromEntries(bookFiles.map(f => [f, read(f)])),
  docs: Object.fromEntries(docFiles.map(f => [f, read(f)])),
};
const json = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');
let html = read('index.html');
html = html.replace(/<script\b[^>]*src="[^" ]*(?:googletagmanager|google-analytics)[^"]*"[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<script>\s*window\.dataLayer[\s\S]*?<\/script>/gi, '')
  .replace(/<link[^>]*https:\/\/fonts\.[^>]*>/g, '');
if (/googletagmanager|google-analytics/.test(html)) throw new Error('Bản ngoại tuyến còn mã tải thống kê bên ngoài');
html = html.replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);
for (const [file, mime] of [['ads/mcyyy-side.webp', 'image/webp'], ['ads/wechat-reward.png', 'image/png']]) {
  const needle = `src="${file}"`;
  if (!html.includes(needle)) throw new Error(`Không tìm thấy ảnh ${file}`);
  html = html.replaceAll(needle, `src="data:${mime};base64,${readFileSync(resolve(ROOT, file)).toString('base64')}"`);
}
const commit = gitCommit();
html = html.replace('<div class="foot">', `<div class="foot">Bản ngoại tuyến tạo lúc ${buildStamp()} (UTC+7), commit ${commit.slice(0, 7)}. Xem nội dung mới nhất trên <a href="${SITE}">trang đọc</a>.<br>`);
const marker = '<script id="book-app">';
if (!html.includes(marker)) throw new Error('Thiếu điểm chèn dữ liệu trước script chính');
html = html.replace(marker, `<script>window.__CORPUS__=${json}</script>\n${marker}`);
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
console.log(`Đã tạo ${OUT}: ${bookFiles.length} chương, ${docFiles.length} bài dài; ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`);

// Shared helpers used by the EPUB, PDF and offline builders.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/cuongphamISB/HowToLiveBetter';
export const SITE = 'https://cuongphamISB.github.io/HowToLiveBetter/';
export const TITLE = 'Hướng dẫn sống hiệu quả';
export const RELEASE = `${REPO}/releases/download/epub-latest`;
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = values => [...new Set(values)];

export function gitCommit() {
  try { return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); }
  catch { return process.env.GITHUB_SHA ?? ''; }
}

export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Bangkok', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[[^\]]*(?:mục lục|Mục lục)[^\]]*\]\([^)]*\)\s*\n/, '');
}

export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const start = lines.findIndex(line => line.startsWith(from));
    const end = lines.findIndex((line, i) => i > start && line.startsWith(to));
    if (start < 0 || end < 0) throw new Error(`README thiếu phần ${from}`);
    return lines.slice(start, end).join('\n');
  };
  const description = '649 gợi ý giúp giữ sức khỏe, tiền bạc, thời gian và quyền tự do cá nhân, kèm chi phí, lợi ích và nguồn kiểm chứng.';
  const frontMd = between('## Những câu hỏi sách giúp trả lời', '## Mục lục');
  const contentsMd = between('## Mục lục', '## Nội dung');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1])).filter(f => !f.endsWith('doi-chieu-tham-chieu.md'));
  if (bookFiles.length !== 34) throw new Error(`README phải có 34 chương, hiện có ${bookFiles.length}`);
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}

export const bookFilesOnDisk = () => readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();

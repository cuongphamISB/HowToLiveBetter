import { readFileSync, readdirSync, appendFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > 0 ? Number(process.argv[limitArg + 1]) : Infinity;
const CONCURRENCY = 8;
const TIMEOUT = 20000;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const files = [
  ...readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).map(f => `book/${f}`),
  ...readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && f !== 'doi-chieu-tham-chieu.md').map(f => `docs/${f}`),
  'README.md',
];
const where = new Map();
for (const f of files) {
  readFileSync(resolve(ROOT, f), 'utf8').split(/\r?\n/).forEach((line, i) => {
    const found = [...line.matchAll(/<(https?:\/\/[^>\s]+)>/g)].map(m => m[1]);
    const rest = line.replace(/<https?:\/\/[^>\s]+>/g, '');
    for (const m of rest.matchAll(/https?:\/\/[^\s<>（）「」，。；、"'`\]]+/g)) {
      let url = m[0].replace(/[.,;:]+$/, '');
      while (url.endsWith(')') && (url.match(/\(/g) ?? []).length < (url.match(/\)/g) ?? []).length) url = url.slice(0, -1);
      found.push(url);
    }
    for (const url of found) if (!where.has(url)) where.set(url, `${f}:${i + 1}`);
  });
}
const SKIP = /img\.shields\.io|cuongphamISB\.github\.io|\/releases\/download\/|localhost/;
const TLS = /^(ERR_SSL_|UNABLE_TO_VERIFY|CERT_|SELF_SIGNED|DEPTH_ZERO)/;
const urls = [...where.keys()].filter(u => !SKIP.test(u)).slice(0, LIMIT);

const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('Hết thời gian chờ')), ms))]);

async function checkDoi(doi) {
  const r = await withTimeout(fetch(`https://doi.org/api/handles/${encodeURIComponent(doi)}`), TIMEOUT);
  if (r.status === 404) return { dead: true, why: 'doi.org không ghi nhận DOI này' };
  if (!r.ok) return { dead: false, why: `doi.org trả về ${r.status}` };
  return null;
}

async function checkUrl(url) {
  const doi = /^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i.exec(url);
  if (doi) return checkDoi(decodeURIComponent(doi[1]));
  const r = await withTimeout(fetch(url, { redirect: 'follow', headers: { 'User-Agent': UA, Accept: 'text/html,*/*' } }), TIMEOUT);
  r.body?.cancel().catch(() => {});
  if ([404, 410].includes(r.status)) return { dead: true, why: `${r.status}` };
  if (!r.ok) return { dead: false, why: `${r.status}` };
  return null;
}

const dead = [];
const flaky = [];
const tls = [];
let next = 0;
async function worker() {
  while (next < urls.length) {
    const url = urls[next++];
    try {
      const res = await checkUrl(url);
      if (res) (res.dead ? dead : flaky).push({ url, why: res.why, at: where.get(url) });
    } catch (e) {
      const why = e.cause?.code ?? e.message;
      (TLS.test(why) ? tls : flaky).push({ url, why, at: where.get(url) });
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const sortAt = a => a.sort((x, y) => x.at.localeCompare(y.at, 'vi'));
const lines = [
  `## Kiểm tra liên kết`,
  ``,
  `Đã kiểm tra ${urls.length} liên kết: ${dead.length} mất, ${flaky.length} chưa kết nối được, ${tls.length} lỗi tương thích TLS.`,
  ``,
  `### Xác nhận mất nguồn (404, 410 hoặc DOI không tồn tại)`,
  ``,
  ...(dead.length ? sortAt(dead).map(d => `- ${d.at} | ${d.why} | ${d.url}`) : ['Không có']),
  ``,
  `### Chưa kết nối được (hết thời gian, 403 hoặc 5xx; có thể bị chặn hoặc lỗi tạm thời)`,
  ``,
  ...(flaky.length ? sortAt(flaky).map(d => `- ${d.at} | ${d.why} | ${d.url}`) : ['Không có']),
  ``,
  `### TLS không tương thích (cần mở bằng trình duyệt để xác minh)`,
  ``,
  ...(tls.length ? sortAt(tls).map(d => `- ${d.at} | ${d.why} | ${d.url}`) : ['Không có']),
  ``,
];
console.log(lines.join('\n'));
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n');

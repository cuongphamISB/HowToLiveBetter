import { read, bookFilesOnDisk } from './lib/book.mjs';
const statOnly = process.argv.includes('--stat');
const errors = [];
let total = 0;
for (const file of bookFilesOnDisk()) {
  const text = read(`book/${file}`);
  const blocks = text.split(/^### /m).slice(1);
  for (const block of blocks) {
    total++;
    const title = block.split('\n')[0];
    const plain = /^- Hiểu đơn giản:\s*(.*)$/m.exec(block)?.[1];
    if (plain == null) { errors.push(`${file}, ${title}: thiếu Hiểu đơn giản`); continue; }
    const words = plain.trim().split(/\s+/).length;
    if (words > 120) errors.push(`${file}, ${title}: ${words} từ, quá 120`);
    const sentences = (plain.match(/[.!?](?:\s|$)/g) ?? []).length;
    if (sentences < 2 || sentences > 4) errors.push(`${file}, ${title}: ${sentences} câu, cần 2–4 câu`);
    const jargon = /\b(?:HR|RR|OR|CI|RCT|SMD|IRR|odds|hazard|cohort)\b|cỡ mẫu|nhóm đối chứng|thử nghiệm ngẫu nhiên|phân tích gộp|nghiên cứu đoàn hệ/i.exec(plain);
    if (jargon) errors.push(`${file}, ${title}: thuật ngữ nghiên cứu '${jargon[0]}'`);
  }
}
if (total !== 649) errors.push(`Phải kiểm tra 649 mục, thực tế ${total}`);
if (!statOnly) errors.forEach(error => console.error(error));
console.log(`Đã kiểm tra Hiểu đơn giản của ${total} mục; ${errors.length} lỗi.`);
if (errors.length && !statOnly) process.exitCode = 1;

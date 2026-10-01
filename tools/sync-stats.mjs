import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, read, bookFilesOnDisk } from './lib/book.mjs';
const check = process.argv.includes('--check');
const weights = { money: {0:0,low:1,high:2}, time:{low:0,medium:1,high:2}, effort:{no:0,some:1,yes:2} };
const grade = {A:0,B:0,C:0}, ratio = {'very-high':0,high:0,normal:0};
let entries=0, dispute=0, todo=0, links=0, tagged=0;
const files=bookFilesOnDisk();
for(const file of files) for(const line of read(`book/${file}`).split('\n')) {
  if(line.startsWith('### ')) entries++;
  const g=/^- Bằng chứng: ([ABC])/.exec(line); if(g) grade[g[1]]++;
  if(/^- Ghi chú: (?:\*\*)?Còn tranh luận:/i.test(line)) dispute++;
  if(/TODO|cần xác minh/i.test(line)) todo++;
  if(/^- (?:Nguồn|Ghi chú):/.test(line)) links+=(line.match(/https?:\/\//g)??[]).length;
  const t=/<!-- cost: money=(\S+) time=(\S+) effort=(\S+) benefit=(\S+) metric=/.exec(line);
  if(t) {
    const cost=weights.money[t[1]]+weights.time[t[2]]+weights.effort[t[3]];
    if(!Number.isFinite(cost)) throw new Error(`Metadata lỗi: ${file}: ${line}`);
    const r=t[4]==='large' ? (cost===0?'very-high':cost<=2?'high':'normal') : t[4]==='medium'&&cost===0?'high':'normal';
    ratio[r]++; tagged++;
  }
}
if(entries!==649 || files.length!==34 || tagged!==entries || Object.values(grade).reduce((a,b)=>a+b,0)!==entries) throw new Error(`Cấu trúc chưa đầy đủ: ${files.length} chương, ${entries} mục, ${tagged} metadata, ${JSON.stringify(grade)}`);
const order=['very-high','high','normal'];
const pct=Object.fromEntries(order.map(k=>[k,Math.floor(ratio[k]*100/entries)]));
const rem=100-Object.values(pct).reduce((a,b)=>a+b,0);
order.toSorted((a,b)=>(ratio[b]*100/entries%1)-(ratio[a]*100/entries%1)).slice(0,rem).forEach(k=>pct[k]++);
console.log(JSON.stringify({chapters:files.length,entries,grade,dispute,todo,links,ratio,pct},null,2));
const edits=[
 ['README.md',/\d+ gợi ý,/,`${entries} gợi ý,`],
 ['README.md',/So_muc-\d+-/,`So_muc-${entries}-`],
 ['README.md',/Bang_chung-A_\d+_%C2%B7_B_\d+_%C2%B7_C_\d+-/,`Bang_chung-A_${grade.A}_%C2%B7_B_${grade.B}_%C2%B7_C_${grade.C}-`],
 ['README.md',/Nguon-\d+_lien_ket-/,`Nguon-${links}_lien_ket-`],
 ['README.md',/lọc mức A, gồm \d+ mục/,`lọc mức A, gồm ${grade.A} mục`],
 ['README.md',/lọc “Rất cao”, gồm \d+ mục/,`lọc “Rất cao”, gồm ${ratio['very-high']} mục`],
 ['README.md',/\d+ mục gồm A: \d+, B: \d+, C: \d+; \d+ mục còn tranh luận và \d+ chỗ TODO/,`${entries} mục gồm A: ${grade.A}, B: ${grade.B}, C: ${grade.C}; ${dispute} mục còn tranh luận và ${todo} chỗ TODO`],
 ['README.md',/rất cao \d+ mục \(\d+%\), cao \d+ \(\d+%\), thông thường \d+ \(\d+%\)/,`rất cao ${ratio['very-high']} mục (${pct['very-high']}%), cao ${ratio.high} (${pct.high}%), thông thường ${ratio.normal} (${pct.normal}%)`],
 ['index.html',/Cẩm nang gồm \d+ gợi ý/g,`Cẩm nang gồm ${entries} gợi ý`],
 ['index.html',/"numberOfPages":\d+/,`"numberOfPages":${entries}`],
 ['tools/og.html',/<b>\d+<\/b> gợi ý/,`<b>${entries}</b> gợi ý`],
 ['tools/og.html',/Bằng chứng A: <b>\d+<\/b>/,`Bằng chứng A: <b>${grade.A}</b>`],
 ['tools/og.html',/<b>\d+<\/b> nguồn/,`<b>${links}</b> nguồn`],
];
const updated=new Map(); let stale=0;
for(const [file,regex,value] of edits) {
 const old=updated.get(file)??read(file);
 if(!regex.test(old)) throw new Error(`Không tìm thấy thống kê cần cập nhật trong ${file}: ${regex}`);
 const text=old.replace(regex,()=>value);
 if(text!==old) stale++;
 updated.set(file,text);
}
if(check) { console.log(`${stale} thống kê cần cập nhật.`); if(stale) process.exitCode=1; }
else { for(const [file,text] of updated) writeFileSync(resolve(ROOT,file),text); console.log('Đã đồng bộ thống kê. Tạo lại og.png nếu số thay đổi.'); }

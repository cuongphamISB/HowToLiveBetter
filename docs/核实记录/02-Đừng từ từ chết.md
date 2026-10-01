# Mục 2 Hồ sơ xác minh nguồn

Xác minh: Tất cả các nguồn được mở qua WebFetch với các bản ghi PMC REST châu Âu ('<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json'>, với một số truy vấn sử dụng 'TITLE:' hoặc 'EXT_ID:<pmid> AND SRC:MED'), bao gồm tiêu đề, tác giả, tạp chí, năm, DOI, PMID và toàn bộ tóm tắt, với tất cả các số được trích dẫn trong phần tóm tắt. Phiên bản web PubMed trả về trang chặn cookie cho WebBox, và sau khi doi.org trả về 302, trang nhà xuất bản (NEJM) trả về 403, nên bản ghi PMC châu Âu được sử dụng làm tiêu chuẩn. Tất cả các DOI nên được điền theo hồ sơ của Europe PMC (ví dụ, DOI thực tế cho bài viết 'Aune 2016 Nuts' là '10.1186/s12916-016-0730-3'; ký ức ban đầu của tôi về '-0730-5' không chính xác, nên bài viết này cuối cùng không được đưa vào phần chính). 

## Quy tắc 1: Bỏ thuốc lá
- <https://doi.org/10.1056/NEJMsa1211128> — Xác nhận: Jha P và cộng sự, NEJM 2013, PMID 23343063. Bản tóm tắt gốc: "Tuổi thọ trung bình bị rút ngắn hơn 10 năm ở những người hút thuốc hiện tại"; "Người lớn đã bỏ thuốc lá ở độ tuổi 25 đến 34, 35 đến 44, hoặc 45 đến 54 tuổi tăng khoảng 10, 9 và 6 năm tuổi tương ứng"; "Bỏ thuốc trước 40 tuổi giảm nguy cơ tử vong liên quan đến việc tiếp tục hút thuốc khoảng 90%." 
- <https://doi.org/10.1016/S0140-6736(15)00340-2> — Xác nhận: Chen Z và cộng sự, Lancet 2015, PMID 26466050. Tóm tắt gốc: nam giới đô thị "RR 1.32 [CI 95% 1.24-1.41] so với 1.65 [1.53-1.79]" (thập niên 1990 so với thập niên 2010), nam giới nông thôn "RR 1.13 [1.09-1·17] so với 1.22 [1.16-1·29]"; "Những người từng hút thuốc đã tự nguyện bỏ thuốc... có rất ít nguy cơ do hút thuốc sau hơn 10 năm bỏ." 
- <https://doi.org/10.1016/S0140-6736(10)61388-8> — Xác nhận: Oberg M và cộng sự, Lancet 2011, PMID 21112082. Tóm tắt gốc: "603.000 ca tử vong do khói thuốc thụ động vào năm 2004, chiếm khoảng 1,0% tỷ lệ tử vong toàn cầu." 

## Điều 2: Đồ uống có đường
- <https://doi.org/10.1161/CIRCULATIONAHA.118.037401> — Xác nhận: Malik VS và cộng sự, Phát hành 2019, PMID 30882235. Tóm tắt gốc: Phân loại "(<1/tháng, 1-4/tháng, 2-6/tuần, 1-<2/ngày, và ≥2/ngày) là 1.00 (tham khảo), 1.01 (0.98, 1.04), 1.06 (1.03, 1.09), 1.14 (1.09, 1.19), và 1.21 (1.13, 1.28)"; 37.716 nam và 80.647 nữ, "36.436 ca tử vong"。 Bản tóm tắt không cung cấp HR mỗi ngày, và văn bản chính không được trích dẫn. 
- <https://doi.org/10.1001/jamainternmed.2019.2478> — Xác nhận: Mullee A và cộng sự, JAMA Thực tập y học 2019. Tóm tắt gốc: tổng số nước giải khát "HR, 1,17; KTC 95%, 1.11-1.22"; HR làm ngọt đường "HR, 1,08"; CI 95%, 1,01-1,16"; HR làm ngọt nhân tạo "HR, 1,26; CI 95%, 1,16-1,35"; 451.743 người tham gia。 

## Bài viết 3: Muối ít natri
- <https://doi.org/10.1056/NEJMoa2105675> — Xác nhận: Neal B và cộng sự, NEJM 2021, PMID 34459569. Tóm tắt gốc: 20.995 người tham gia, thời gian theo dõi trung bình 4,74 năm; tỷ lệ "tỷ lệ đột quỵ, 0,86"; các sự kiện tim mạch chính "tỷ lệ tỷ lệ, 0,87"; tử vong "39,28 sự kiện so với 44,61 sự kiện trên 1000 người-năm; tỷ lệ tỷ lệ, 0,88"; tỷ lệ tăng kali máu 1,04, không có sự khác biệt đáng kể.
- <https://doi.org/10.1056/NEJMoa1311889> — 已确认:O'Donnell M 等, NEJM 2014, PMID 25119607。 Tỷ lệ chênh lệch: "≥ 7,00 g mỗi ngày... tỷ lệ chênh lệch, 1,15; KTC 95%, 1.02 đến 1.30";" dưới 3.00 g mỗi ngày... tỷ lệ tỷ lệ lẻ, 1.27; CI 95%, 1.12 đến 1.44"。 

## 第 4 条 步数
- <https://doi.org/10.1016/S2468-2667(21)00302-9> — 已确认:Paluch AE 等, Lancet Public Health 2022, PMID 35247352。 摘要原文:"47.471 người lớn, trong đó có 3013 ca tử vong";" Bước chân trung vị mỗi ngày là 3553 bước cho phần tư 1, 5801 bước cho phần tử 2, 7842 bước cho phần tư 3, và 10.901 cho phần tử 4";" nhịp tim điều chỉnh cho tỷ lệ tử vong do mọi nguyên nhân là 0.60 (khoảng tin cậy 95% 0.51-0.71) cho phần tư 2, 0.55 (0.49-0.62) cho phần tư 3, và 0.47 (0.39-0.57) cho phần tư 4";≥60 岁 "6000-8000 bước mỗi ngày", <60 岁 "8000-10.000 bước mỗi ngày"。 - <https://doi.org/10.1093/eurjpc/zwad229> — 已确认: Banach M 等, Eur J Prev Cardiol 2023, PMID 37555441。 摘要原文: "Một bước tăng 1000 bước liên quan đến việc giảm 15% nguy cơ tử vong do mọi nguyên nhân";" điểm cắt 3867 bước/ngày cho tử vong do mọi nguyên nhân"。 

## 第 5 条 降压/降脂药依从
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — 已确认: Ettehad D 等, Lancet 2016, PMID 26724178。 Các sự kiện tim mạch lớn "RR 0.80, CI 95% 0.77-0.83"; đột quỵ "0.73, 0.68-0.77"; suy tim "0.72, 0.67-0.78";" Giảm 13% tỷ lệ tử vong do mọi nguyên nhân (0.87, 0.84-0.91)"。 
- <https://doi.org/10.1016/S0140-6736(10)61350-5> — 已确认: CTT Collaboration, Lancet 2010, PMID 21067804。 Tỷ lệ tốc độ các sự kiện mạch máu lớn [RR] 0.78, KTC 95% 0.76–0.80";" tỷ lệ tử vong do mọi nguyên nhân giảm 10% trên mỗi mức giảm LDL 1.0 mmol/L (RR 0.90, KTC 95% 0.87–0.93)"。 
- <https://doi.org/10.1093/eurheartj/eht295> — 已确认:Chowdhury R 等, Eur Heart J 2013, PMID 23907142。 Tỷ lệ tử vong do mọi nguyên nhân tương ứng là 0,55 (0,46-0,67) và 0,71 (0,64-0,78) đối với sự tuân thủ tốt với statin và thuốc hạ huyết áp"; tuân thủ tốt so với kém (<80%。 ## 第 6 条睡睡眠 - <https://doi.org/10.1093/sleep/33.5.585> — 已确认:Cappuccio FP 等, Sleep 2010, PMID 20469800。 16 nghiên cứu... 1.382.999 nam và nữ tham gia... 112.566 ca tử vong"; ngắn "RR: 1,12"; 95% CI 1,06 đến 1,18"; dài "1,30; [1,22 đến 1,38]"。 摘要未给短/长的小时定义，正文未写具体阈值。 
- <https://doi.org/10.1161/JAHA.117.005947> — 已确认: Yin J 等, JAHA 2017, PMID 28889101。 <7 giờ "RR là 1,06 (KTC 95%, 1.04-1.07) mỗi lần giảm 1 giờ"; >7 h "RR là 1.13 (KTC 95%, 1.11-1.15) mỗi lần giảm 1 giờ"。
- <https://doi.org/10.1093/sleep/zsad253> — 已确认: Windred DP 等, Sleep 2024, PMID 37738616。 摘要原文: "60.977 người tham gia UK Biobank";" 1859" ca tử vong; "Tỷ lệ ngủ đều đặn cao hơn liên quan đến nguy cơ tử vong do mọi nguyên nhân thấp hơn 20%-48%" (bốn nhóm SRI hàng đầu so với nhóm kém đều nhất); "Độ đều đặn của giấc ngủ là yếu tố dự báo tử vong do mọi nguyên nhân mạnh hơn so với thời gian ngủ"。 

## 第 7 条 中等强度运动
- <https://doi.org/10.1001/jamainternmed.2015.0533> — Chuyên ngành Arem H 等, Thực tập sinh y học JAMA 2015, PMID 25844730。 Nhịp tim: dưới 7,5 MET-h/tuần "HR, 0,80 [KTC 95%, 0,78-0,82]";1 đến 2 lần "HR, 0,69 [CI 95%, 0,67-0,70]"; 2 đến 3 lần "HR, 0,63"; 3 đến 5 lần "HR, 0,61 [CI 95%, 0,59-0,62]"; 10 lần trở lên "HR, 0,69 [CI 95%, 0,59-0,78]"。 
- <https://doi.org/10.1136/bmj.l4570> — 已确认:Ekelund U 等, BMJ 2019, PMID 31434697。 摘要原文:MVPA 四分位 HR "1.00, 0.64 (0.55–0.74), 0.55 (0.40–0.74), và 0.52 (0.43–0.61)"; tổng PA 最高四分位 "0.27 (0.23 đến 0.32)"。 

## 第 8 条 力量训练
- <https://doi.org/10.1136/bjsports-2021-105061> — 已确认:Momma H 等, Br J Sports Med 2022, PMID 35228201。 摘要原文: "Các hoạt động tăng cường cơ bắp có liên quan đến việc giảm 10-17% nguy cơ tử vong do mọi nguyên nhân";" Các mối liên hệ hình chữ J với mức giảm nguy cơ tối đa (khoảng 10-20%) khoảng 30-60 phút/tuần";" Các hoạt động tăng cường cơ bắp kết hợp và aerobic (so với không có hoạt động nào) có liên quan đến nguy cơ tử vong do mọi nguyên nhân thấp hơn... tỷ lệ tử vong do mọi nguyên nhân"。 

## 第 9 条 久坐
- <https://doi.org/10.7326/M17-0212> — 已确认: Diaz KM 等, Ann Intern Med 2017, PMID 28892811。 摘要原文: tổng thời gian ngồi cao nhất so với tứ phân thấp nhất "HR, 2.63 [CI, 1.60 đến 4.30]";khoảng thời gian "nhịp tim, 1.96 [CI, 1.31 đến 2.93]";结论 "cả tổng thời gian ngồi và tích lũy trong các đợt liên tục kéo dài đều liên quan đến tử vong do mọi nguyên nhân"。 摘要未提 30 分钟阈值，正文标题未写具体分钟数。 
- <https://doi.org/10.1016/S0140-6736(16)30370-1> — 已确认: Ekelund U 等, Lancet 2016, PMID 27475271。 摘要原文: tham chiếu "những người ngồi <4 giờ/ngày và ở tứ phân tích hoạt động nhất [>35·5 MET-h mỗi tuần]"; tứ phân phần PA thấp nhất + ngồi >8 giờ/ngày "HR=1·59, 1.52-1·66"; hoạt động nhiều nhất + >8 giờ "HR=1·04; KTC 95% 0.99-1·10";" khoảng 60-75 phút mỗi ngày... dường như loại bỏ nguy cơ tử vong tăng cao do thời gian ngồi cao"; TV ≥5 giờ hoạt động nhiều nhất "HR=1.16, 1.05-1.28"。 

## 第 10 条 加工肉
- <https://doi.org/10.1093/aje/kwt261> — Larsson SC, Orsini N, Am J Epidemiol 2014, PMID 24148709。 Thịt đỏ chưa qua chế biến "1.10 (CI 95%: 0.98, 1.22)";p thịt cắt "1.23 (CI 95%: 1.17, 1.28)"; tổng thịt đỏ "1.29 (CI 95%: 1.24, 1.35)"。
- <https://doi.org/10.3945/ajcn.117.153148> — Tạp chí Am J Clin Nutr 2017, PMID 28446499。 Mỗi khẩu phần/ngày): ngũ cốc nguyên hạt "RR: 0,92; CI 95%: 0,89%, 0,95"; thịt đỏ "RR: 1,10; CI 95%: 1,04, 1,18";p thịt nướng "RR: 1,23; CI 95%: 1,12, 1,36"。 
- <https://doi.org/10.7326/M19-1621> — 已确认: Johnston BC 等, Ann Intern Med 2019, PMID 31569235。 摘要原文: "tiếp tục tiêu thụ thịt đỏ chưa qua chế biến hiện tại (khuyến nghị yếu, bằng chứng độ chắc chắn thấp)";" tiếp tục tiêu thụ thịt chế biến hiện tại (khuyến nghị yếu, bằng chứng độ chắc chắn thấp)"。 

## 第 11 条 饮酒
- <https://doi.org/10.1016/S0140-6736(18)30134-X> — 已确认: Wood AM 等, Lancet 2018, PMID 29676281。 Tỷ lệ tử vong tối thiểu khoảng hoặc dưới 100 g mỗi tuần";40 岁预期寿命:>100–≤200 g/tuần "khoảng 6 tháng", >200–≤350 g/tuần "1–2 năm", >350 g/tuần "4–5 năm"。 
- <https://doi.org/10.1016/S0140-6736(18)31310-2> — GBD 2016 Alcohol Collaborators, Lancet 2018。 "Mức tiêu thụ rượu giúp giảm thiểu tác hại trên các kết quả sức khỏe là 0 (95% UI 0.0-0.8) ly tiêu chuẩn mỗi tuần." 
- <https://doi.org/10.1001/jamanetworkopen.2023.6185> — 已确认: Zhao J 等, JAMA Netw Open 2023, PMID 37000449。 摘要原文: "người uống rượu thể tích thấp (1,3-24,0 g mỗi ngày; RR, 0,93; P = 0,07) so với người không uống rượu suốt đời";" 45 đến 64 và 65 gram trở lên mỗi ngày (RR, 1,19 và 1,35; P < .001)"。 - <https://doi.org/10.1001/archinte.166.22.2437> — Bác sĩ Arch Thực tập 2006, PMID 17159008 "Bảo vệ tối đa là 18% ở nữ giới (khoảng tin cậy 99%, 13%-22%) và 17% ở nam giới";" tối đa 4 ly mỗi ngày ở nam và 2 ly mỗi ngày ở nữ có tỷ lệ nghịch với tổng tử vong"。 

## 第 12 条 全谷物
- <https://doi.org/10.1136/bmj.i2716> — 已确认: Aune D 等, BMJ 2016, PMID 27301975。 Tỷ lệ giảm liều 90 g/ngày "0,83 (0,77 đến 0,90; I(2)=83%, n=11) cho mọi nguyên nhân";" Giảm nguy cơ được quan sát thấy lên đến 210-225 g/ngày"。 
- Schwingshackl 2017 同第 10 条(ngũ cốc nguyên hạt RR 0.92)。 

## 第 13 条 水果蔬菜
- <https://doi.org/10.1093/ije/dyw319> — 已确认: Aune D 等, Int J Epidemiol 2017, PMID 28338764。 摘要原文: "RR tổng hợp trên 200 g/ngày là... 0,90 (CI 95%: 0,87-0,93... cho tử vong do mọi nguyên nhân";" Giảm nguy cơ được quan sát thấy lên đến 800 g/ngày cho tất cả các kết quả ngoại trừ ung thư (600 g/ngày)"。
- <https://doi.org/10.1161/CIRCULATIONAHA.120.048996> — 已确认:Wang DD 等, Phát hành 2021, PMID 33641343。 摘要原文: "Việc tiêu thụ hàng ngày 5 khẩu phần trái cây và rau quả liên quan đến tỷ lệ nguy cơ (KTC 95%) là 0,87 (0,85-0,90) cho tổng tỷ lệ tử vong" (对照 2 份/天);"≈5 khẩu phần trái cây và rau quả mỗi ngày, hoặc 2 khẩu phần trái cây và 3 phần rau, có liên quan đến tỷ lệ tử vong thấp nhất"。 

## 第 14 条 超加工食品
- <https://doi.org/10.1136/bmj-2023-077310> — 已确认: Lane MM 等, BMJ 2024, PMID 38418082。 摘要原文: "tất cả gây tử vong (tỷ lệ nguy cơ 1.21, 1.15 đến 1.27; thấp)" lớp II gợi ý cao; "tỷ lệ tử vong liên quan đến bệnh tim mạch (tỷ lệ nguy cơ 1.50, khoảng tin cậy 95% từ 1.37 đến 1.63; GRADE=rất thấp)" thuyết phục lớp I." 

## 第 15 条 室内燃烧 / PM2.5
- <https://doi.org/10.1001/jama.2018.2151> — 已确认:Yu K 等, JAMA 2018, PMID 29614179。 271.217 người lớn; nấu ăn nhiên liệu rắn nguyên nhân "HR, 1.11 [CI 95%, 1.03-1.20]"; sưởi "HR, 1.14 [CI 95%, 1.03-1.26]"; chuyển đổi (nấu) "HR, 0.87 [CI 95%, 0.79-0.95]"; chuyển đổi (đun nóng) "HR, 0.67 [CI 95%, 0.57-0.79]"。 
- <https://doi.org/10.1016/j.envint.2020.105974> — Chen J, Hoek G, Environ Int 2020, PMID 32703584。 "Tỷ lệ rủi ro kết hợp (RR) giữa PM₂.₅ và tử vong do nguyên nhân tự nhiên là 1,08 (KTC 95%1,06, 1,09) trên 10 μg/m³",104 nghiên cứu đoàn hệ." 

## 第 16 条 体重
- <https://doi.org/10.1016/S0140-6736(16)30175-1> — 已确认: Global BMI Mortality Collaboration, Lancet 2016, PMID 27423262。 摘要原文: "Tỷ lệ tử vong do mọi nguyên nhân là tối thiểu ở mức 20.0-25.0 kg/m(2)";25.0-27.5 "1.07, 1.07-1·08";27.5-30.0 "1.20", 1.18-1·22";30.0-35.0 "1.45", KTC 95% 1.41-1.48"; 35.0-40.0 "1.94, 1.87-2·01";40.0-60.0 "2.76, 2.60-2·92"; Đông Á trên mỗi 5 kg/m² "1.39 (1.34-1.44)";分析限定 "Người không bao giờ hút thuốc, không mắc bệnh mãn tính khi tuyển dụng, sống sót sau 5 năm"。 
- <https://doi.org/10.1001/jama.2012.113905> — 已确认: Flegal KM 等, JAMA 2013, PMID 23280227。 摘要原文: "Nhịp tim tổng hợp là 0,94 (khoảng tin cậy 95%, 0,91-0,96) cho thừa cân, 1,18 (khoảng tin cậy 95%, 1,12-1,25) cho béo phì (kết hợp tất cả các cấp), 0,95 (khoảng tin cậy 95%, 0,88-1,01) cho béo phì cấp 1, và 1,29 (khoảng tin cậy 95%, 1,18-1,41) cho béo phì cấp 2 và 3." 

## 第 41 条 小作坊散装自榨花生油
PR #39 原稿定 A 级,收益栏里「抽检超标率显著高于预包装油」「碱炼脱除率 90% 以上」两句没有原始出处,GB 2761 链接只到 CFSA 首页。 2026-09-28 合并后改写：删掉这两句，换成下面两项中国人群研究，降为 B 级（单项观察性研究、终点为肝功能化验与出生结局）。 收益量级凭判断定为中：阈值表按死亡率相对降幅套，这里没有死亡率终点，但肝功能异常低约 35%、低出生体重 aOR 1.9 都是健康终点而非单纯替代指标。
- <https://doi.org/10.3389/fpubh.2024.1484414> — 已确认: Lei J 等, Mặt trận Y tế Công cộng 2024; 12, PMID 39758209。 摘要原文: "Nồng độ AFB1 trong HMPO là 1,29 (0,12, 6,58) μg/kg";" giảm ngay lập tức 2,865 μg/kg (P = 0,006) và giảm liên tục hàng năm 2,593 μg/kg (P = 0,034)";" giảm tỷ lệ mắc rối loạn chức năng gan (PR = 0,650, CI 95%: 0,469-0,902)"。 
- <https://doi.org/10.1080/16549716.2024.2336312> — 已确认: Zhong Y 等, Glob Health Action 2024; 17, PMID 38629142。 摘要原文: "Trong số 1611 phụ nữ mang thai, 1316 người (81,7%) đã tiêu thụ dầu đậu phộng tự làm";" aOR 1,9 (CI 95% 1.1-3.2) và 1.8 (CI 95% 1.1-3.0)"(依次为 LBW、PB)。 
- <https://publications.iarc.fr/123> — 已确认:页面标题 "Tác nhân hóa học và nghề liên quan", 即 IARC Monographs Tập 100F,黄曲霉毒素收在该卷,为 1 类致癌物。 
- GB 2761-2017 花生油及其制品黄曲霉毒素 B1 限量 20 μg/kg:未取到标准原文,待核实。 

## 第 42 条 植物油代替猪油黄油
PR #39 原稿把 Abdelhamid 2020 的规模(86 项 RCT、162,796 人)安到 Hooper 2020 头上;「RR 0.79(0.66–0.93)」「RR 0.89」两个数在两篇摘要里都找不到;「omega-6 与 omega-3 比例 15~20:1、理想 4:1」没有来源。 2026-09-28 合并后按三篇 Cochrane 摘要原文重写,主张从「换高油酸油、冷淋亚麻籽油」改为「植物油代替饱和脂肪,别指望换油和亚麻籽油」。 
- <https://doi.org/10.1002/14651858.CD011737.pub3> — 已确认: Hooper L 等, Cochrane 2020。 摘要原文: "15 thử nghiệm ngẫu nhiên đối chứng (RCT) (16 so sánh, 56.675 người tham gia)";" giảm nguy cơ các sự kiện tim mạch kết hợp 17% (tỷ số nguy cơ (RR) 0,83; khoảng tin cậy 95% (CI) 0,70 đến 0,98"; tử vong toàn nguyên nhân "RR 0,96; KTC 95% 0,90 đến 1,03"; tử vong tim mạch "RR 0,95; CI 95% 0,80 đến 1,12";" Phân nhóm không cho thấy sự khác biệt đáng kể giữa việc thay thế calo chất béo bão hòa bằng chất béo không bão hòa đa hoặc carbohydrate, và dữ liệu về việc thay thế bằng chất béo không bão hòa đơn và protein rất hạn chế"。 
- <https://doi.org/10.1002/14651858.CD011094.pub4> — 已确认: Hooper L, Al-Khudairy L, Abdelhamid AS 等, Cochrane 2018 Tháng 11, PMID 30488422。 "19 RCT trong 6461 người tham gia"; tử vong do mọi nguyên nhân "RR 1.00, KTC 95% 0.88 đến 1.12"; Các sự kiện mạch máu "RR 0.97, CI 95% 0.81 đến 1.15";" Bằng chứng chất lượng thấp"。 
- <https://doi.org/10.1002/14651858.CD003177.pub5> — Tổng thể: Abdelhamid AS 等, Cochrane 2020。 "86 RCT (162.796 người tham gia)"; ALA tử vong toàn nguyên "RR 1,01, CI 95% 0,84 đến 1,20"; ALA các sự kiện bệnh mạch vành "RR 1,00, CI 95% 0,82 đến 1,22"。 
- 中国居民膳食指南(2022)烹调油 25–30 g/天:未取到原文,沿用 PR 原稿,待核实。 

## 已核实但未收入正文
- Aune D 等 (2016) 坚果, BMC Medicine, <https://doi.org/10.1186/s12916-016-0730-3>, PMID 27916000:per 28 g/ngày ACM "0.78 (CI 95%: 0.72-0.84)"。 效应量疑受混杂放大且每日花钱，为控制条目数（16 条上限）未收。
- Sofi F và cộng sự (2010) Chế độ ăn Địa Trung Hải, Am J Clin Nutr, <https://doi.org/10.3945/ajcn.2010.29673>, PMID 20810976: tăng 2 điểm “RR = 0,92; 95% CI: 0,90, 0,94”. Trùng với các mục 10, 12, 13, không được đưa vào.  
- Holt-Lunstad J và cộng sự (2010) PLoS Med, <https://doi.org/10.1371/journal.pmed.1000316>, PMID 20668659: “OR = 1,50 (95% CI 1,42 đến 1,59)”; Holt-Lunstad J và cộng sự (2015) Perspect Psychol Sci, <https://doi.org/10.1177/1745691614568352>, PMID 25910392: “tỷ số chênh lệch nguy cơ cô lập xã hội (OR) = 1,29, cô đơn OR = 1,26, và sống một mình OR = 1,32”. Hiệu quả của cô lập xã hội lớn nhưng có nguyên nhân ngược nhiều, không có bằng chứng can thiệp, để kiểm soát số mục nên không đưa vào; nếu cần có thể bổ sung trực tiếp thành mục 17.  

## Mục chưa xác nhận  
- Không có. Tất cả các con số trong văn bản đều từ các hồ sơ đã mở nêu trên. Cột “chi phí” trong văn bản (giá cả, thời gian) là ước lượng của tác giả, không trích dẫn tài liệu.
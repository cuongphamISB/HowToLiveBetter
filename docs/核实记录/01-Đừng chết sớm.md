# Mục 1 Hồ sơ xác minh nguồn

Ngày xác minh: 2026-09-07. Hầu hết các trang web nhà xuất bản (NEJM, Elsevier, Wiley, BMJ, AHA) trả về 403 cho WebFetch. Các tài liệu này đọc toàn văn bản của cùng bản ghi DOI thông qua giao diện Europe PMC REST ('<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI: ">..."&resultType=core&format=json'); doi.org có thể tự phân tích cú pháp (302 đến nhà xuất bản). "Văn bản gốc" sau đây là câu gốc được lấy từ phần tóm tắt/văn bản chính. 

## 1. Dây an toàn
- <https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813573> — Đã mở (PDF được chuyển thành văn bản với pdftotext). Tiêu đề "Bảo vệ người ngồi trong xe chở khách: Dữ liệu năm 2022, DOT HS 813 573, tháng 5 năm 2024" khớp với nhau. 
  - Nguyên bản: "Năm mươi phần trăm hành khách trên xe chở khách tử vong trong các vụ tai nạn giao thông năm 2022 là không được giữ an toàn (dựa trên việc sử dụng hạn chế đã biết)." 
  - Nguyên bản: "Dây an toàn đùi/vai, khi sử dụng, giảm nguy cơ: gây thương tích tử vong cho người ngồi ghế trước trên xe khách xuống 45%; … gây thương tích tử vong cho những người ngồi ghế trước trên xe tải nhẹ lên tới 60 phần trăm" 
  - Bản gốc: "60 phần trăm những người ở hàng thứ hai không bị trói." 
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — Đã mở. Bản gốc: "Thắt dây an toàn có thể giảm nguy cơ tử vong cho người ngồi trong xe lên đến 50%." 
- <https://ghoapi.azureedge.net/api/RS_196?$filter=SpatialDim%20eq%20%27CHN%27> — Đã mở (WHO GHO API). Trung Quốc 2021:248.099 (CI 95% 233.685–262.513)。 RS_198 Phương pháp mở tương tự: 174.000 trên 100.000 vào năm 2021. 
  - Lưu ý: Khi giao diện GHO trả về, RS_196 cho ra các số tuyệt đối, RS_198 cho ra tốc độ, điều này trái ngược với số chỉ báo kỳ vọng của tôi; Các số này được lấy từ JSON trả về. 

## 2. Mũ bảo hiểm
- <https://doi.org/10.1002/14651858.CD004333.pub3> — doi.org Quyết định với Wiley (403), kỷ lục PMC châu Âu được xác nhận: Liu BC, 2008, "Mũ bảo hiểm để ngăn ngừa chấn thương cho người lái mô tô." 
  - Nguyên bản: "mũ bảo hiểm được ước tính giảm nguy cơ tử vong 42% (OR 0,58, CI 95% 0,50 đến 0,68)"; "giảm nguy cơ chấn thương đầu 69% (OR 0,31, CI 95% 0,25 đến 0,38)" 

## 3. Đầu báo khói / khí carbon monoxide
- <https://doi.org/10.1001/jama.279.20.1633> — Xác nhận hồ sơ PMC châu Âu: Marshall SW, Runyan CW và cộng sự, JAMA 1998, "Các vụ cháy dân cư chết người: ai chết và ai sống sót?" 
  - Bản gốc: "Tổng thể, một đầu báo khói hoạt động đã giảm nguy cơ tử vong (OR, 0,39; CI 95%, 0,18-0,83)." 
- <https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf> — Mở (PDF sang văn bản). Tiêu đề "Các vụ cháy chết người trong các tòa nhà dân cư (2018-2020), Loạt Báo cáo Cháy thời sự Tháng 6 năm 2022 Tập 22 Số 2" trùng khớp. 
  - Nguyên bản: "Báo động khói không xuất hiện trong 24% các vụ cháy chết người tại các tòa nhà dân cư có người ở."; "Yếu tố con người hàng đầu góp phần gây cháy chết người trong các tòa nhà dân cư là trạng thái 'ngủ' (41%)."
- <https://doi.org/10.46234/ccdcw2020.008> — doi.org các weekly.chinacdc.cn (只显示元数据),全文通过 Europe PMC PMC8392909 fullTextXML 读取。 作者 You J, Liu J, Zhou M, China CDC Weekly 2020。 
  - 原文: "Năm 2018, có 11.523 ca tử vong do ngộ độc khí carbon monoxide được báo cáo tại Trung Quốc";" tỷ lệ cao nhất xảy ra vào tháng 12 (72,59%), tháng 1 (67,42%) và tháng 2 (66,48%)" 
- 未采用:NFPA "Smoke Alarms in US Home Fires" 页面只返回标题,报告 PDF 返回 500,未能核实,故没有引用 NFPA 的「死亡率低 55%」数字。 

## 4. 血压
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — Elsevier 页面只显示 Chuyển hướng;Europe PMC 记录确认:Ettehad D, Lancet 2016。 
  - 原文: "nguy cơ tương đối [RR] 0.80, KTC 95% 0.77-0.83"(主要心血管事件);"đột quỵ (0.73, 0.68-0.77)";" suy tim (0.72, 0.67-0.78)";" giảm đáng kể 13% tỷ lệ tử vong do mọi nguyên nhân (0.87, 0.84-0.91)" 
  - 原文: "Chúng tôi xác định được 123 nghiên cứu với 613.815 người tham gia cho phân tích tổng hợp dạng bảng." 
- <https://doi.org/10.1016/S0140-6736(17)32478-9> — Châu Âu PMC 记录确认:Lu J, Lancet 2017, Dự án Triệu người PEACE Trung Quốc。 
  - 原文: "44.7% (CI 95% 44.6-44.8) mẫu bị tăng huyết áp, trong đó 44.7% (44.6-44.8) biết về chẩn đoán, 30.1% (30.0-30.2) đang dùng thuốc hạ huyết áp kê đơn, và 7.2% (7.1-7.2) đã đạt được kiểm soát" 

## 5. 不超速不酒驾
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — 已打开。 
  - 原文: "Mỗi lần tăng 1% tốc độ trung bình sẽ làm tăng 4% nguy cơ tai nạn tử vong.";" Nguy cơ tai nạn giao thông bắt đầu khi nồng độ cồn trong máu (BAC) thấp." 

## 6. 儿童安全座椅
- NHTSA 813573(同第 1 条)。 原文: "NHTSA ước tính rằng ghế ngồi ô tô giảm nguy cơ chấn thương chết người 71% đối với trẻ sơ sinh (dưới 1 tuổi) và 54% đối với trẻ nhỏ (1 đến 4 tuổi) trong xe chở khách." 
- WHO 道路交通 tờ thông tin (同上)。 原文: "Việc sử dụng thiết bị an toàn trẻ em có thể giúp giảm 71% số ca tử vong ở trẻ sơ sinh." 

## 7. 溺水
- <https://doi.org/10.1136/ip.2010.028688> — doi.org 解析到 injuryprevention.bmj.com(403);Europe PMC 记录确认:Cummings P, Mueller BA, Quan L. Phòng ngừa Chấn thương 2011; 17(3):156-159, PMID 20889519。 
  - 原文: "RR điều chỉnh là 0,51 (KTC 95% 0,35 đến 0,74)." 
  - 注意:我最初记的 DOI(... 028381)是错的,doi.org 返回 404,已改为 Europe PMC 给出的 ... 028688。 
- <https://doi.org/10.46234/ccdcw2023.198> — Các weekly.chinacdc.cn châu Âu PMC PMC10689961 Li Z, China CDC Weekly 2023。
- 原文: "tỷ lệ tử vong do đuối nước toàn quốc từ 6,60 trên 100.000 vào năm 2013 xuống còn 3,28 trên 100.000 vào năm 2021";" các vùng nông thôn có tỷ lệ tử vong gần gấp đôi so với các khu vực đô thị";" ở Trung Quốc, đây được coi là nguyên nhân chính gây tử vong ở trẻ em từ 1 đến 14 tuổi";" đạt đỉnh ở mức 3,95 trên 100.000 ở nhóm tuổi 15–19" 
- <https://doi.org/10.46234/ccdcw2024.057> — 解析到 weekly.chinacdc.cn;葘要经 Europe PMC 读取。 Zhou J, Trung Quốc CDC Weekly 2024。 
  - 原文: "Năm 2021, đuối nước và tai nạn giao thông là hai nguyên nhân hàng đầu gây tử vong do thương tích trẻ em, lần lượt giải thích 31,1% và 27,9% tổng số ca tử vong do thương tích." 
- 未采用:中国疾控中心网页 chinacdc.cn/.../t20210809_233793.html 返回 404。 

## 8. 老人防跌
- <https://doi.org/10.1002/14651858.CD012424.pub2> — Wiley 403;Europe PMC 记录确认:Sherrington C, 2019。 
  - 原文: "Tập thể dục giảm tỷ lệ giảm 23% (tỷ lệ tỷ lệ (RaR) 0,77, khoảng tin cậy 95% (CI) 0,71 đến 0,83";" giảm số người trải qua một hoặc nhiều lần rơi xuống 15% (tỷ lệ rủi ro (RR) 0,85, CI 95% 0,81 đến 0,89") 
  - 原文: "Chúng tôi bao gồm 108 RCT với 23.407 người tham gia sống trong cộng đồng tại 25 quốc gia." 
- <https://doi.org/10.1002/14651858.CD007146.pub3> — Europe PMC 记录确认:Gillespie LD, 2012。 
  - 原文: "Đánh giá an toàn tại nhà và can thiệp điều chỉnh hiệu quả trong việc giảm tỷ lệ ngã (RR 0,81, KTC 95% 0,68 đến 0,97; sáu thử nghiệm; 4208 người tham gia)";" Thái Cực Quyền đã giảm đáng kể nguy cơ té ngã (RR 0,71, CI 95% 0,57 đến 0,87...)" 
- <https://doi.org/10.46234/ccdcw2021.013> — PMC8393086weekly.chinacdc.cnTuần báo Trung Quốc CDC 2021 Lu Z, Trung Quốc CDC Tuần 2021。 
  - 原文: "Té ngã là nguyên nhân hàng đầu gây tử vong do chấn thương ở người từ 65 tuổi trở lên";" Nhà ở (55,97%), đường/phố (18,69%) và cơ sở dân cư công cộng (12,80%) là những địa điểm xảy ra ngã nhiều nhất" 

## 9. 乙肝
- <https://doi.org/10.1371/journal.pmed.1001774> — PLOS 重定向后未取到正文;Europe PMC 记录确认:Qu C, PLoS Medicine 2014。 
  - 原文: "hiệu quả 84% (khoảng tin cậy 95% 23%-97%)"(PLC 发病);"tiêm phòng bù đắp cho HBsAg tỷ lệ nhiễm huyết thanh ở tuổi trưởng thành là 21% (khoảng tin cậy 95% 10%-30%), yếu hơn đáng kể so với tiêm chủng sơ sinh (72%, CI 95% 68%-75%)" 
- <https://doi.org/10.3201/eid2305.161477> — Châu Âu PMC 记录确认:Cui F, Các bệnh truyền nhiễm mới nổi 2017。 
  - 原文: "Tỷ lệ nhiễm kháng nguyên bề mặt HBV giảm 46% vào năm 2006 và giảm 52% vào năm 2014";5 岁以下 "mức giảm là 97%" 

## 10. HPV 疫苗
- <https://doi.org/10.1056/NEJMoa1917338> — NEJM 403;Europe PMC 记录确认:Lei J, NEJM 2020。
- 原文: "tỷ lệ mắc là 0,12 (khoảng tin cậy 95%, 0,00 đến 0,34) ở phụ nữ đã tiêm chủng trước 17 tuổi và 0,47 (khoảng tin cậy 95%, 0,27 đến 0,75) ở phụ nữ tiêm chủng từ 17 đến 30 tuổi" 
  - 原文: "Theo dõi dân số mở gồm 1.672.983 bé gái và phụ nữ từ 10 đến 30 tuổi từ năm 2006 đến 2017" 

## 11. 宫颈癌筛查
- <https://doi.org/10.1056/NEJMoa0808516> — NEJM 403;Europe PMC 记录确认:Sankaranarayanan R, NEJM 2009。 
  - 原文: "tỷ lệ nguy cơ phát hiện ung thư tiến triển ở nhóm xét nghiệm HPV, 0,47; khoảng tin cậy 95% [CI], 0,32 đến 0,69";" 34 ca tử vong do ung thư trong nhóm xét nghiệm HPV, so với 64 ca ở nhóm đối chứng (tỷ lệ nguy cơ, 0,52; khoảng tin cậy 95%, 0,33 đến 0,83)" 

## 12. 结直肠癌筛查
- <https://doi.org/10.1002/14651858.CD001216.pub2> — Europe PMC 记录确认:Hewitson P, 2007。 
  - 原文: "giảm 16% nguy cơ tử vong do ung thư đại trực tràng (RR 0,84, CI: 0,78-0,90)";" Giảm 25% nguy cơ tương đối (RR 0,75, CI: 0,66 - 0,84) đối với những người tham gia ít nhất một vòng sàng lọc" 
- <https://doi.org/10.1056/NEJMoa2208375> — Hội đồng Quản trị châu Âu (PBC) 记录确认: Bretthauer M, NEJM 2022。 
  - 原文: "Nguy cơ ung thư đại trực tràng ở tuổi 10 là 0,98% ở nhóm được mời và 1,20% ở nhóm chăm sóc thông thường, giảm nguy cơ 18% (tỷ lệ nguy cơ, 0,82; khoảng tin cậy 95% [CI], 0,70 đến 0,93)";" Nguy cơ tử vong do ung thư đại trực tràng là 0,28% ở nhóm được mời và 0,31% ở nhóm chăm sóc thông thường (tỷ lệ nguy cơ, 0,90; khoảng tin cậy 95%, 0,64 đến 1,16)" 

## 13. 流感疫苗
- <https://doi.org/10.1161/CIRCULATIONAHA.121.057042> — AHA 403;Europe PMC 记录确认:Fröbert O, Circulation 2021 (IAMI)。 
  - 原文: "Tỷ lệ tử vong do mọi nguyên nhân là 2,9% và 4,9% (tỷ lệ nguy cơ, 0,59 [KTC 95%, 0,39-0,89]; P=0,010)";" Tỷ lệ tử vong do tim mạch là 2,7% và 4,5%, (tỷ lệ nguy cơ, 0,59 [KTC 95%, 0,39-0,90]" 
  - 原文: "2571 người tham gia được phân ngẫu nhiên tại 30 trung tâm trên 8 quốc gia";" Trong 12 tháng theo dõi, kết quả chính diễn ra trong..." 
- <https://doi.org/10.1001/jamanetworkopen.2022.8873> — JAMA 页面直接打开成功。 Behrouzi B, JAMA Network Open 2022。 
  - 原文: "vắc-xin cúm có liên quan đến nguy cơ các sự kiện tim mạch tổng hợp thấp hơn (3,6% so với 5,4%; RR, 0,66; KTC 95%, 0,53-0,83";" 1,7% người nhận vắc-xin tử vong do nguyên nhân tim mạch so với 2,5% người nhận giả dược hoặc đối chứng (RR, 0,74; khoảng tin cậy 95%, 0,42-1,30") 
- <https://doi.org/10.1002/14651858.CD004876.pub4> — Europe PMC 记录确认: Demicheli V, 2018。
- 原文: "có thể trải qua ít cúm hơn trong một mùa so với giả dược, từ 6% đến 2,4%"(độ chắc chắn thấp); "bằng chứng có độ chắc chắn rất thấp về ảnh hưởng đến tỷ lệ tử vong" 

## 14. 幽门螺杆菌
- <https://doi.org/10.1136/bmj.l5016> — BMJ 403;Europe PMC 记录确认:Li WQ, BMJ 2019。 
  - 原文: "Hiệu quả bảo vệ của điều trị H pylori đối với tỷ lệ mắc ung thư dạ dày vẫn tồn tại 22 năm sau can thiệp (tỷ lệ chênh lệch 0,48, khoảng tin cậy 95% 0,32 đến 0,71)";" Tỷ lệ nguy cơ điều chỉnh đầy đủ cho điều trị H pylori là 0,62 (khoảng tin cậy 95% 0,39 đến 0,99)" 

## 15. 低剂量 CT
- <https://doi.org/10.1056/NEJMoa1102873> — NEJM 403;Europe PMC 记录确认(PMID 21714641),并在 <https://pmc.ncbi.nlm.nih.gov/articles/PMC4356534/> 打开全文摘要。 
  - 原文: "53.454 người có nguy cơ cao ung thư phổi tại 33 trung tâm y tế Hoa Kỳ";" 24,2% chụp CT liều thấp và 6,9% chụp X-quang trong cả ba vòng";" 96,4% kết quả xét nghiệm dương tính ở nhóm CT liều thấp ... là kết quả dương tính giả";" 20,0% (khoảng tin cậy 95%, 6,8 đến 26,7; P = 0,004)";" 6,7% (khoảng tin cậy 95%, 1,2 đến 13,6; P = 0,02)" 
  - 入组标准(55–74 岁、≥30 包年、戒烟 ≤15 年)在 Europe PMC 摘要中确认。 

## 16. 心理危机
- <https://doi.org/10.1016/S2215-0366(16)30030-X> — Elsevier 页面只显示 Chuyển hướng;Europe PMC 记录确认:Zalsman G, Lancet Psychiatry 2016。 
  - 原文: "Bằng chứng về việc hạn chế tiếp cận các biện pháp gây chết người trong phòng ngừa tự tử đã được củng cố kể từ năm 2005";" tổng thể giảm 43% kể từ năm 2005"(镇痛药管控);"điểm nóng tự tử bằng cách nhảy (giảm 86% so với năm 2005, 79% xuống còn 91%)";" Các chương trình nâng cao nhận thức tại trường học đã được chứng minh là giảm tỷ lệ cố gắng tự tử (tỷ lệ chênh lệch [OR] 0.45, CI 95% 0.24-0.85" 
- <https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm> — 已打开。 标题「国家卫生健康委关于应用"12356"全国统一心理援助热线电话号码的通知」，国卫医政函〔2024〕259 号，2024-12-06。 
  - 原文："设置'12356'作为全国统一心理援助热线电话号码"；" 每日提供不少于18小时心理援助服务"；" 确保于2025年5月1日0时前，实现拨打'12356'电话号码接通心理援助热线的功能" 
  - nhc.gov.cn 原始链接返回 412,改引国务院政策文件库的同一文件。 

## 未确认 / 未采用
- NHTSA 网页 nhtsa.gov/risky-driving/seat-belts、car-seats-and-booster-seats:403,未确认,改用 crashstats 的官方 PDF。 
- NFPA 烟雾报警器报告:未确认,未引用。 
- Báo cáo tình trạng toàn cầu về an toàn giao thông đường bộ WHO 2023 Hồ sơ quốc gia PDF:404,未确认;中国道路死亡改用 GHO API。 
- Bảng thông tin WHO 溺水 (已打开,2026-05-01 版):无中国数字,未引用;"khoảng 300.000 ca tử vong do đuối nước hàng năm trên toàn thế giới" 未用到。 
- 收益栏里的试验规模数字(Ettehad 123 项/613,815 人、Sherrington 108 项/23,407 人、Lei 1,672,983 人、IAMI 2571 人)已在第二轮 Europe PMC 抓取中逐字核对,见各条原文。 
- 成本栏的价格（头盔、报警器、疫苗、检查费等）是作者按市价的粗估，不属于引用数字，未核实。
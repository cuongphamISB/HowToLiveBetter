# Hồ sơ kiểm chứng nguồn chương 1

Ngày kiểm chứng: 2026-09-07. Phần lớn trang nhà xuất bản (NEJM, Elsevier, Wiley, BMJ, AHA) trả 403 cho WebFetch. Dùng Europe PMC REST (`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:…&resultType=core&format=json`) để đọc tiêu đề, tác giả, tạp chí, năm và toàn bộ tóm tắt của cùng DOI. doi.org vẫn phân giải được, trả 302 đến nhà xuất bản. Các trích dẫn dưới đây lấy từ tóm tắt hoặc toàn văn.

## 1. Dây an toàn
- <https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813573>: đã mở, chuyển PDF bằng pdftotext. Khớp tiêu đề “Occupant Protection in Passenger Vehicles: 2022 Data, DOT HS 813 573, May 2024”. Trích: “Fifty percent of passenger vehicle occupants killed in traffic crashes in 2022 were unrestrained (based on known restraint use).” Dây ngang hông/vai giảm tử vong ghế trước ô tô con 45%, xe tải nhẹ 60%; “60 percent of those in the second row were unrestrained.”
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries>: đã mở. “Wearing a seat-belt can reduce the risk of death among vehicle occupants by up to 50%.”
- <https://ghoapi.azureedge.net/api/RS_196?$filter=SpatialDim%20eq%20%27CHN%27>: đã mở WHO GHO API. Trung Quốc 2021: 248,099, CI 95% 233,685–262,513. RS_198 đọc tương tự: 17.4/100000 năm 2021. RS_196 trả số tuyệt đối, RS_198 trả tỷ lệ, ngược với mã chỉ số dự kiến; số lấy từ JSON thực trả.

## 2. Mũ bảo hiểm
- <https://doi.org/10.1002/14651858.CD004333.pub3>: đến Wiley, 403; Europe PMC xác nhận Liu BC, 2008, “Helmets for preventing injury in motorcycle riders”. Trích: “helmets were estimated to reduce the risk of death by 42% (OR 0.58, 95% CI 0.50 to 0.68)”; “reduce the risk of head injury by 69% (OR 0.31, 95% CI 0.25 to 0.38)”.

## 3. Báo khói và carbon monoxide
- <https://doi.org/10.1001/jama.279.20.1633>: Europe PMC xác nhận Marshall SW, Runyan CW et al., JAMA 1998, “Fatal residential fires: who dies and who survives?”. Trích: “Overall, a functioning smoke detector lowered the risk of death (OR, 0.39; 95% CI, 0.18-0.83).”
- <https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf>: đã mở, chuyển PDF; khớp “Fatal Fires in Residential Buildings (2018-2020), Topical Fire Report Series June 2022 Vol 22 Issue 2”. Không có báo khói trong 24% vụ cháy chết người ở nhà có người ở; yếu tố con người hàng đầu góp phần phát cháy là đang ngủ, 41%.
- <https://doi.org/10.46234/ccdcw2020.008>: đến weekly.chinacdc.cn, chỉ metadata; đọc toàn văn Europe PMC PMC8392909 fullTextXML. You J, Liu J, Zhou M, China CDC Weekly 2020. Trích: “In 2018, there were 11,523 deaths caused by carbon monoxide poisoning reported in China”; “highest proportions occurring in December (72.59%), January (67.42%), and February (66.48%)”.
- Không dùng NFPA “Smoke Alarms in US Home Fires”: trang chỉ có tiêu đề, PDF 500, chưa kiểm chứng nên không dùng con số giảm tử vong 55%.

## 4. Huyết áp
- <https://doi.org/10.1016/S0140-6736(15)01225-8>: Elsevier chỉ “Redirecting”; Europe PMC xác nhận Ettehad D, Lancet 2016. Biến cố tim mạch chính RR 0.80, CI 95% 0.77–0.83; đột quỵ 0.73 (0.68–0.77); suy tim 0.72 (0.67–0.78); tử vong mọi nguyên nhân giảm 13%, 0.87 (0.84–0.91). “We identified 123 studies with 613,815 participants for the tabular meta-analysis.”
- <https://doi.org/10.1016/S0140-6736(17)32478-9>: Europe PMC xác nhận Lu J, Lancet 2017, China PEACE Million Persons Project. Trích: “44·7% (95% CI 44·6-44·8) of the sample had hypertension, of whom 44·7% (44·6-44·8) were aware of their diagnosis, 30·1% (30·0-30·2) were taking prescribed antihypertensive medications, and 7·2% (7·1-7·2) had achieved control”.

## 5. Không quá tốc độ, không lái sau uống rượu
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries>: đã mở. “Every 1% increase in mean speed produces a 4% increase in the fatal crash risk.” “The risk of a road traffic crash starts at low levels of blood alcohol concentration (BAC).”

## 6. Ghế an toàn trẻ em
- NHTSA 813573, như mục 1: ghế an toàn giảm tử vong 71% ở dưới 1 tuổi và 54% ở 1–4 tuổi trên ô tô con.
- WHO fact sheet giao thông trên: “The use of child restraints can lead to a 71% reduction in deaths among infants.”

## 7. Đuối nước
- <https://doi.org/10.1136/ip.2010.028688>: đến BMJ, 403; Europe PMC xác nhận Cummings P, Mueller BA, Quan L, Injury Prevention 2011;17(3):156-159, PMID 20889519. “The adjusted RR was 0.51 (95% CI 0.35 to 0.74).” DOI ban đầu …028381 sai, trả 404; sửa theo Europe PMC thành …028688.
- <https://doi.org/10.46234/ccdcw2023.198>: đến weekly.chinacdc.cn, đọc toàn văn PMC10689961. Li Z, China CDC Weekly 2023. Tử vong đuối nước toàn quốc giảm từ 6.60/100000 năm 2013 đến 3.28 năm 2021; nông thôn khoảng gấp đôi đô thị; là nguyên nhân tử vong hàng đầu ở trẻ 1–14 tuổi Trung Quốc; nhóm 15–19 có mức đỉnh 3.95/100000.
- <https://doi.org/10.46234/ccdcw2024.057>: tóm tắt Europe PMC, Zhou J, China CDC Weekly 2024. Năm 2021 đuối nước và tai nạn giao thông đứng đầu tử vong do thương tích trẻ, lần lượt 31.1% và 27.9%.
- Không dùng trang CDC Trung Quốc chinacdc.cn/…/t20210809_233793.html vì 404.

## 8. Phòng ngã người cao tuổi
- <https://doi.org/10.1002/14651858.CD012424.pub2>: Wiley 403, Europe PMC xác nhận Sherrington C, 2019. Tập luyện giảm tỷ lệ ngã 23%, RaR 0.77, CI 95% 0.71–0.83; giảm số người ngã ít nhất một lần 15%, RR 0.85 (0.81–0.89). 108 RCT, 23,407 người sống cộng đồng tại 25 nước.
- <https://doi.org/10.1002/14651858.CD007146.pub3>: Europe PMC xác nhận Gillespie LD, 2012. Đánh giá, sửa an toàn nhà giảm tỷ lệ ngã RR 0.81, CI 95% 0.68–0.97; sáu thử nghiệm, 4208 người. Thái cực quyền giảm nguy cơ ngã RR 0.71 (0.57–0.87).
- <https://doi.org/10.46234/ccdcw2021.013>: đọc toàn văn PMC8393086. Lu Z, China CDC Weekly 2021. Ngã là nguyên nhân hàng đầu tử vong do thương tích từ 65 tuổi; nơi ngã thường là nhà 55.97%, đường 18.69%, cơ sở cư trú công cộng 12.80%.

## 9. Viêm gan B
- <https://doi.org/10.1371/journal.pmed.1001774>: PLOS chuyển hướng, chưa lấy được toàn văn; Europe PMC xác nhận Qu C, PLoS Medicine 2014. Hiệu lực với mắc ung thư gan nguyên phát 84%, CI 95% 23%–97%; tiêm bù giảm hiện mắc HBsAg tuổi trưởng thành trẻ 21% (10%–30%), yếu hơn tiêm sơ sinh 72% (68%–75%).
- <https://doi.org/10.3201/eid2305.161477>: Europe PMC xác nhận Cui F, Emerging Infectious Diseases 2017. Hiện mắc HBsAg giảm 46% đến 2006 và 52% đến 2014; dưới 5 tuổi giảm 97%.

## 10. Vắc xin HPV
- <https://doi.org/10.1056/NEJMoa1917338>: NEJM 403, Europe PMC xác nhận Lei J, NEJM 2020. Tỷ số tỷ lệ mắc 0.12, CI 95% 0.00–0.34 nếu tiêm trước 17 tuổi, 0.47 (0.27–0.75) nếu tiêm 17–30 tuổi. Theo dõi quần thể mở 1,672,983 trẻ gái, phụ nữ 10–30 tuổi từ 2006–2017.

## 11. Sàng lọc ung thư cổ tử cung
- <https://doi.org/10.1056/NEJMoa0808516>: NEJM 403, Europe PMC xác nhận Sankaranarayanan R, NEJM 2009. HR phát hiện ung thư tiến triển nhóm xét nghiệm HPV 0.47, CI 95% 0.32–0.69; tử vong ung thư 34 so với 64 ở đối chứng, HR 0.52 (0.33–0.83).

## 12. Sàng lọc ung thư đại trực tràng
- <https://doi.org/10.1002/14651858.CD001216.pub2>: Europe PMC xác nhận Hewitson P, 2007. Giảm tử vong tương đối 16%, RR 0.84, CI 0.78–0.90; người tham gia ít nhất một đợt giảm 25%, RR 0.75 (0.66–0.84).
- <https://doi.org/10.1056/NEJMoa2208375>: Europe PMC xác nhận Bretthauer M, NEJM 2022. Nguy cơ mắc 10 năm 0.98% nhóm mời, 1.20% thông thường, giảm 18%, RR 0.82, CI 95% 0.70–0.93. Tử vong 0.28% so với 0.31%, RR 0.90 (0.64–1.16).

## 13. Vắc xin cúm
- <https://doi.org/10.1161/CIRCULATIONAHA.121.057042>: AHA 403, Europe PMC xác nhận Fröbert O, Circulation 2021, IAMI. Tử vong mọi nguyên nhân 2.9% và 4.9%, HR 0.59, CI 95% 0.39–0.89, P=0.010; tử vong tim mạch 2.7% và 4.5%, HR 0.59 (0.39–0.90). 2571 người ngẫu nhiên tại 30 trung tâm, tám nước; theo dõi 12 tháng.
- <https://doi.org/10.1001/jamanetworkopen.2022.8873>: mở JAMA trực tiếp được, Behrouzi B, 2022. Biến cố tim mạch gộp 3.6% so với 5.4%, RR 0.66, CI 95% 0.53–0.83; tử vong tim mạch 1.7% so với 2.5%, RR 0.74 (0.42–1.30).
- <https://doi.org/10.1002/14651858.CD004876.pub4>: Europe PMC xác nhận Demicheli V, 2018. Cúm một mùa có thể giảm từ 6% xuống 2.4%, độ chắc chắn thấp; bằng chứng tử vong rất thấp.

## 14. Helicobacter pylori
- <https://doi.org/10.1136/bmj.l5016>: BMJ 403, Europe PMC xác nhận Li WQ, BMJ 2019. Bảo vệ mắc ung thư dạ dày tồn tại 22 năm sau can thiệp, OR 0.48, CI 95% 0.32–0.71; HR hiệu chỉnh đầy đủ 0.62 (0.39–0.99).

## 15. CT liều thấp
- <https://doi.org/10.1056/NEJMoa1102873>: NEJM 403, Europe PMC xác nhận PMID 21714641, đọc tóm tắt toàn văn <https://pmc.ncbi.nlm.nih.gov/articles/PMC4356534/>. 53,454 người nguy cơ cao tại 33 trung tâm Hoa Kỳ; kết quả dương tính 24.2% CT so với 6.9% X-quang qua ba đợt; 96.4% dương tính CT là giả; giảm 20.0%, CI 95% 6.8–26.7, P=0.004; 6.7% (1.2–13.6), P=0.02. Tiêu chuẩn 55–74 tuổi, ≥30 gói-năm, bỏ ≤15 năm xác nhận trong tóm tắt Europe PMC.

## 16. Khủng hoảng tâm lý
- <https://doi.org/10.1016/S2215-0366(16)30030-X>: Elsevier chỉ chuyển hướng, Europe PMC xác nhận Zalsman G, Lancet Psychiatry 2016. Bằng chứng hạn chế tiếp cận phương tiện gây chết để phòng tự sát mạnh hơn từ 2005; kiểm soát thuốc giảm đau giảm chung 43% từ 2005; điểm nóng nhảy tự sát giảm 86% (79%–91%); chương trình nhận thức ở trường giảm cố gắng tự sát OR 0.45, CI 95% 0.24–0.85.
- <https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm>: đã mở, khớp Thông báo Ủy ban Y tế Quốc gia về số thống nhất 12356, Guoweiyizhenghan [2024] 259, ngày 2024-12-06. Thiết lập 12356, phục vụ ít nhất 18 giờ mỗi ngày, bảo đảm kết nối trước 0 giờ ngày 1 tháng 5 năm 2025. Trang nhc.gov.cn gốc 412 nên dùng cùng văn bản tại kho Quốc vụ viện.

## Chưa xác nhận hoặc không dùng
- NHTSA nhtsa.gov/risky-driving/seat-belts và car-seats-and-booster-seats trả 403; dùng PDF chính thức crashstats.
- Báo cáo báo khói NFPA chưa xác nhận, không dẫn.
- WHO Global status report on road safety 2023, PDF hồ sơ Trung Quốc trả 404; dùng GHO API cho tử vong giao thông.
- WHO fact sheet đuối nước đã mở, bản 2026-05-01, không có số Trung Quốc, không dẫn; khoảng 300000 tử vong toàn cầu/năm cũng không dùng.
- Quy mô Ettehad 123 nghiên cứu/613,815 người, Sherrington 108/23,407, Lei 1,672,983, IAMI 2571 đã đối chiếu từng chữ qua lượt Europe PMC thứ hai, xem các mục trên.
- Giá mũ, báo động, vắc xin, khám là tác giả ước thị trường, không thuộc số dẫn nghiên cứu và chưa kiểm chứng.

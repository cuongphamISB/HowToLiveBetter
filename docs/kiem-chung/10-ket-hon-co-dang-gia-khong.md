# Hồ sơ kiểm chứng chương 10: “Kết hôn có đáng giá không?” (2026-09-07)

Công cụ: WebFetch; trang không mở được hoặc chỉ hiện điều hướng được lấy HTML/PDF/JSON bằng curl qua proxy cục bộ rồi phân tích tại máy. WebSearch hết hạn mức 200 lượt giữa chương này; sau đó chỉ dùng WebFetch và curl.

## Thống kê chính thức

### Thông cáo thống kê phát triển công tác dân chính năm 2024 của Bộ Dân chính
- Trang <https://www.mca.gov.cn/n1288/n1294/n1554/c1662004999980006190/content.html>: WebFetch mở, công bố 2025-07-30; PDF nằm trong tệp đính kèm.
- PDF <https://www.mca.gov.cn/gdnps/n2445/n2451/n2458/n2681/c1662004999980006189/attr/400985.pdf>: curl tải 14 trang, dùng pypdf trích văn bản.
- Trang 13: “Năm 2024, cả nước có 4190 cơ sở và địa điểm đăng ký kết hôn, trong đó 1134 cơ quan đăng ký; đăng ký kết hôn hợp pháp 6.106 triệu cặp, giảm 20.5% so với năm trước. Tỷ lệ kết hôn 4.3‰, giảm 1.1 điểm phần nghìn. Hoàn tất thủ tục ly hôn 3.513 triệu cặp, gồm 2.622 triệu cặp ly hôn đăng ký tại cơ quan dân chính và 891,000 cặp ly hôn theo phán quyết hoặc hòa giải của tòa. Tỷ lệ ly hôn 2.5‰.”
- Chú thích trang 14: số ly hôn theo phán quyết/hòa giải lấy từ Tòa án Tối cao; tỷ lệ kết hôn/ly hôn = số cặp trong năm chia dân số bình quân năm ×1000‰. Tỷ lệ ly hôn trên số kết hôn khoảng 57.5% là phép chia do bài tính, không phải chỉ tiêu công bố.

### Điều tra sử dụng thời gian toàn quốc lần ba của Cục Thống kê
- Số 1 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957217.html>: phương pháp khảo sát 11–31/05/2024, 38,500 hộ và 107,000 người, không có số phân nhóm.
- Số 2 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957216.html>: cư dân dành việc nhà trung bình 1 giờ 17 phút/ngày, người có tham gia 1 giờ 59 phút, tỷ lệ tham gia 64.9%; chăm sóc, đồng hành người nhà 30 phút/ngày, người tham gia 1 giờ 46 phút, tỷ lệ 28.4%. Không có phân nhóm theo giới hoặc tình trạng hôn nhân.
- Số 3 <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957215.html>: người tham gia lao động không lương trung bình 2 giờ 45 phút/ngày; nam 1 giờ 52 phút, nữ 3 giờ 29 phút; tỷ lệ tham gia 75.6%, nam 67.5%, nữ 83.9%. Không có phân nhóm hôn nhân.
- Trả lời báo chí <https://www.stats.gov.cn/sj/sjjd/202410/t20241031_1957218.html>: người tham gia việc nhà 1 giờ 59 phút/ngày, giảm 28 phút so với 2018.

### Điều tra sử dụng thời gian toàn quốc năm 2018
- <https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1900224.html>: việc nhà bình quân 1 giờ 26 phút/ngày; nam 45 phút, nữ 2 giờ 6 phút; tỷ lệ tham gia 58.5%, nam 40.4%, nữ 75.6%. Chăm sóc con 36 phút; nam 17 phút, nữ 53 phút; tỷ lệ tham gia 18.9%, nam 12.3%, nữ 25.1%.

### Điều tra dân số lần thứ bảy
- <https://www.stats.gov.cn/sj/pcsj/rkpc/7rp/indexch.htm>: trang khung và chỉ mục mở được, nhưng các bảng 2-5 về tuổi kết hôn lần đầu và 5-1 về tình trạng hôn nhân là ảnh JPG không trích được số; không dẫn số tuổi kết hôn lần đầu hoặc tỷ lệ chưa kết hôn.

## Quy định pháp luật

### Bộ luật Dân sự
- Trang cơ sở dữ liệu pháp luật Nhân đại <https://flk.npc.gov.cn/detail?title=...&id=ff808081729d1efe01729d50b5c500bf> chỉ hiện ứng dụng một trang; API <https://flk.npc.gov.cn/law-search/search/flfgDetails?bbbs=ff808081729d1efe01729d50b5c500bf> xác nhận tên luật, cơ quan ban hành, ngày thông qua 2020-05-28, hiệu lực 2021-01-01 và các nút điều luật. API chỉ có số điều, PDF là ảnh nên dùng bản Tòa án Tối cao đăng lại <http://gongbao.court.gov.cn/Details/7f184078694d811fb3314f6af9accf.html> để đối chiếu chữ.
- Điều 1062: tài sản có trong hôn nhân gồm lương, thưởng, thù lao, lợi nhuận sản xuất/kinh doanh/đầu tư, lợi ích sở hữu trí tuệ, tài sản thừa kế hoặc được tặng trừ ngoại lệ Điều 1063, và tài sản khác; hai bên có quyền ngang nhau trong xử lý tài sản chung.
- Điều 1063: tài sản riêng gồm tài sản trước hôn nhân, bồi thường do tổn hại thân thể, tài sản di chúc/hợp đồng tặng chỉ cho một bên, đồ dùng riêng và tài sản khác thuộc riêng một bên.
- Điều 1065: hai bên có thể thỏa thuận bằng văn bản tài sản trong hôn nhân và trước hôn nhân thuộc riêng, chung hoặc một phần riêng/chung; nếu không thỏa thuận hoặc không rõ thì áp dụng Điều 1062–1063; thỏa thuận ràng buộc cả hai.
- Điều 1076: ly hôn tự nguyện phải lập thỏa thuận bằng văn bản và cùng đến cơ quan đăng ký; thỏa thuận ghi ý chí ly hôn và thống nhất về con, tài sản, nợ.
- Điều 1077: trong 30 ngày từ khi cơ quan nhận đơn, bên không muốn ly hôn có thể rút; sau đó trong 30 ngày, cả hai phải cùng xin giấy ly hôn, nếu không thì coi như rút đơn.
- Điều 1079: một bên yêu cầu ly hôn có thể hòa giải hoặc kiện trực tiếp; tòa phải hòa giải, nếu tình cảm thực sự tan vỡ và hòa giải không thành thì phải cho ly hôn. Các trường hợp gồm kết hôn trùng hoặc chung sống với người khác, bạo lực/ngược đãi/bỏ rơi, nghiện cờ bạc/ma túy không sửa, ly thân đủ hai năm vì bất hòa, hoặc lý do khác làm tan vỡ tình cảm. Sau khi tòa bác đơn mà hai bên ly thân thêm một năm, lần kiện lại phải được chấp nhận.
- Điều 1088: người làm nhiều hơn trong việc nuôi con, chăm người già hoặc hỗ trợ bên kia có quyền yêu cầu bồi thường khi ly hôn; mức do thỏa thuận hoặc tòa quyết định.

### Văn bản Min Fa [2020] số 116
- <https://www.gov.cn/zhengce/zhengceku/2020-12/04/content_5567010.htm>: đã mở; viện dẫn Điều 1076, 1077, 1078 và quy trình chờ 30 ngày, dùng làm nguồn bổ trợ cho thủ tục ly hôn, không chép lại toàn văn điều luật.

## Nghiên cứu tạp chí

- Manzoli 2007, Soc Sci Med 64:77–94, DOI 10.1016/j.socscimed.2006.08.031, Europe PMC PMID 17011690: gộp 53 so sánh, hơn 250,000 người cao tuổi; RR tử vong ở người kết hôn so với chưa kết hôn là 0.88 (95% CI 0.85–0.91), không thay đổi theo giới, chất lượng nghiên cứu hay châu Âu/Bắc Mỹ. So với người kết hôn, RR ở góa là 1.11 (1.08–1.14), ly hôn/ly thân 1.16 (1.09–1.23), chưa từng kết hôn 1.11 (1.07–1.15). Có dấu hiệu sai lệch công bố; hiệu chỉnh RR 0.94 (0.92–0.95).
- Roelfs 2011, Am J Epidemiol 174:379–389, DOI 10.1093/aje/kwr111: 641 ước lượng từ 95 công bố, hơn 500 triệu người; nhóm so sánh là người đang kết hôn. HR tử vong trung bình 1.24 (95% CI 1.19–1.30) trong các ước lượng đa biến chất lượng cao; HR tăng nhẹ theo thời gian, tăng nhanh hơn ở nữ, giảm theo tuổi; chất lượng nghiên cứu ảnh hưởng đáng kể.
- Wang 2020, Glob Health Res Policy 5:4, DOI 10.1186/s41256-020-00133-8: 21 nghiên cứu, 7,891,623 người và 1,888,752 ca tử vong; chưa kết hôn liên quan có ý nghĩa với tử vong mọi nguyên nhân, ung thư, tim mạch và bệnh mạch vành ở cả hai giới; liên quan với tử vong tim mạch và mọi nguyên nhân mạnh hơn ở nam. Tóm tắt ghi tiêu đề 7,881,040 người, không khớp số trong phần tóm tắt;nội dung chính dùng “hơn 7.89 triệu người”.
- Robles 2014, Psychol Bull 140:140–187, DOI 10.1037/a0031859: 126 bài, hơn 72,000 người; chất lượng hôn nhân cao liên quan sức khỏe tốt hơn, cỡ hiệu ứng r=.07–.21, gồm nguy cơ tử vong thấp hơn r=.11 và phản ứng tim mạch khi xung đột thấp hơn r=-.13; không liên quan rõ đến dốc cortisol hằng ngày; hiệu ứng nhỏ, một phần kết quả lâm sàng dễ chịu sai lệch công bố, thiết kế hạn chế suy luận nhân quả.
- Dhindsa 2020, Trends Cardiovasc Med 30:215–220, DOI 10.1016/j.tcm.2019.05.012: tổng quan nhiều đoàn hệ Mỹ và quốc tế, người chưa kết hôn (ly hôn, ly thân, góa hoặc chưa từng kết hôn) có tỷ lệ biến cố tim mạch xấu cao hơn; một số nghiên cứu cho thấy hôn nhân bảo vệ nam mạnh hơn nữ; bất mãn và chất lượng hôn nhân ảnh hưởng đáng kể nguy cơ tim mạch. Đây là tổng quan tường thuật, không có số gộp, xếp B.

## Không đưa vào
- Chi phí sinh con/nuôi con: không tìm được nguồn thống kê nhà nước hoặc nghiên cứu chính thức có thể đối chiếu, nên không ghi.
- Sính lễ và chi phí cưới: không có thống kê chính thức, không tự thêm số.

## Chi tiết đối chiếu bổ sung

Các trang thống kê đều đã mở bằng WebFetch. Số 3 của điều tra sử dụng thời gian còn được kiểm lại bằng curl. Trang thông cáo Bộ Dân chính công bố lúc 17:00 ngày 2025-07-30, là giao diện dành cho người cao tuổi; phần nội dung chính nằm trong PDF. Tỷ lệ ly hôn/kết hôn do bài tính đã được ghi rõ trong nội dung sách, không phải tỷ lệ một cuộc hôn nhân sẽ ly hôn.

Trong chỉ mục điều tra dân số, `left.htm` liệt kê bảng 2-5 “Dân số các dân tộc cả nước theo giới và tuổi kết hôn lần đầu” và bảng 5-1 “Dân số từ 15 tuổi trở lên theo địa phương, giới và tình trạng hôn nhân”. Chỉ mục có bảng nhưng ảnh JPG không cho trích số nên không dùng.

API cơ sở dữ liệu pháp luật trả `title` là Bộ luật Dân sự, `flxz` là luật, `zdjgName` là Nhân đại toàn quốc, `gbrq` 2020-05-28, `sxrq` 2021-01-01. Cây điều khoản có các Điều 1062–1066, 1076–1079 và 1088. Bản Công báo Tòa án Tối cao mang tiêu đề “Bộ luật Dân sự, tiếp theo”, nằm trong mục pháp luật; đã lấy bằng curl rồi phân tích tại máy. Các trang điều luật npc.gov.cn qua http/https chuyển về trang chủ hoặc lỗi TLS; gov.cn ngày 2020-06-01 content_5516649 và các biến thể đều 404, lưu lại để đối chiếu về sau.

Văn bản Min Fa [2020] số 116 ban hành 2020-11-24, không trích từng chữ các điều luật, chỉ làm chứng cứ bổ trợ quy trình chờ 30 ngày.

### Trạng thái truy cập các nghiên cứu

- Manzoli: <https://doi.org/10.1016/j.socscimed.2006.08.031> phân giải thành công, chuyển 302 đến linkinghub.elsevier.com chỉ có “Redirecting”, ScienceDirect trả 403. Europe PMC PMID 17011690 xác nhận tiêu đề, tác giả, tập/trang và DOI. Các so sánh không kết hôn bao gồm góa, ly hôn/ly thân và chưa từng kết hôn.
- Roelfs: <https://doi.org/10.1093/aje/kwr111> chuyển tới <https://academic.oup.com/aje/article-lookup/doi/10.1093/aje/kwr111>, WebFetch mở được trang nhà xuất bản. HR 1.24 là bình quân của các HR đã hiệu chỉnh đa biến có đánh giá chất lượng chủ quan cao. Phân tích hồi quy gộp ghi tăng theo thời gian ở cả hai giới, nhanh hơn đôi chút ở nữ.
- Wang: <https://doi.org/10.1186/s41256-020-00133-8> chuyển qua ghrp.biomedcentral.com đến link.springer.com; trang sau yêu cầu đồng ý cookie nên không hiển thị. Europe PMC tìm theo DOI xác nhận bài “Sex differences in the association between marital status and the risk of cardiovascular, cancer, and all-cause mortality: a systematic review and meta-analysis of 7,881,040 individuals”; tác giả Wang Y, Jiao Y, Nie J, O'Neil A, Huang W, Zhang L, Han J, Liu H, Zhu Y, Yu C, Woodward M. Tỷ số gộp so sánh nữ với nam cho thấy liên hệ của chưa từng kết hôn với tử vong đột quỵ và mọi nguyên nhân mạnh hơn ở nam lần lượt 31% và 9%. Yêu cầu ban đầu ghi “Wang 2020 Heart” nhưng không tìm được; PubMed 31204239 là Dhindsa 2020, không thuộc Heart.
- Robles: <https://doi.org/10.1037/a0031859> chuyển doi.apa.org rồi psycnet.apa.org, giao diện JavaScript chỉ hiện “Loading”. Europe PMC PMID 23527470 xác nhận thông tin thư mục. Tổng quan bao quát 50 năm. Chất lượng hôn nhân không liên quan với phản ứng cortisol trong xung đột ngoài việc không liên quan dốc cortisol hàng ngày. Cỡ hiệu ứng nhỏ tương tự liên hệ giữa hành vi sức khỏe như chế độ ăn và kết cục sức khỏe. Các nghiên cứu kiểm trực tiếp khác biệt giới có ít bằng chứng cho khác biệt giới.
- Dhindsa: <https://pubmed.ncbi.nlm.nih.gov/31204239/> chỉ trả thông báo cookie; Europe PMC PMID 31204239 cung cấp thông tin thư mục, tóm tắt và DOI. Bài không có số gộp nên chỉ làm nguồn bổ trợ B.

Chi phí sinh và nuôi con không đưa vào vì trước khi hết hạn mức WebSearch vẫn chưa tìm được nguyên bản từ Cục Thống kê hoặc cơ quan nghiên cứu chính thức, theo yêu cầu nhiệm vụ không viết. Sính lễ và chi phí cưới không có thống kê chính thức nên không ghi số.


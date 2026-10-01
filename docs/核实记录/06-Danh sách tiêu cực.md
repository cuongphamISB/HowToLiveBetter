# Mục 6 Hồ sơ xác minh nguồn

Giải thích phương pháp xác minh: doi.org Tất cả trả về các chuyển hướng 302; Các trang nhà xuất bản trên JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature trả về 403 cho WebBox, trong khi các trang PubMed chỉ trả về các yêu cầu cookie. Do đó, văn bản chính của tóm tắt được xác minh đồng nhất thông qua giao diện PMC REST chính thức của châu Âu ('<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json'> để trả về các tham chiếu thư mục từ PubMed và abstractText); Một số trường hợp sử dụng các tiện ích điện tử NCBI efetch. Các "URL thực sự đã mở" sau đây là các địa chỉ mà WebFetch trả về nội dung thành công trong quá trình xác minh. Tất cả các DOI tương ứng một-một với tiêu đề/tác giả/năm trong thư mục trả về bởi Europe PMC. 

## Mục 1 Vitamin tổng hợp

- Nguồn A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - Thực tế đã mở: Europe PMC REST (TRUY VẤN DOI). Tiêu đề khớp với "Đa vitamin trong phòng ngừa bệnh tim mạch ở nam giới: Nghiên cứu sức khỏe bác sĩ II thử nghiệm ngẫu nhiên có đối chứng," 2012, JAMA. Xác nhận. 
  - Số liệu tham chiếu (tóm tắt): "14.641 bác sĩ nam Mỹ," "theo dõi trung vị 11,2 năm," "các sự kiện tim mạch lớn ... HR, 1,01; CI 95%, 0,91-1,10; P = 0,91」「Tổng tử vong ... HR, 0,94; CIC 95%, 0,88-1,02; P = 0,13」
- Nguồn B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - Mở đầu thực tế: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (doi.org Nhảy mục tiêu, bắt trực tiếp thành công). Tiêu đề khớp với "Bổ sung vitamin, khoáng chất và đa vitamin để phòng ngừa bệnh tim mạch và ung thư: Tuyên bố khuyến nghị của Lực lượng Đặc nhiệm Dịch vụ Phòng ngừa Hoa Kỳ," 2022, JAMA 327(23). Xác nhận. 
  - Nguồn số trích dẫn: "Các thử nghiệm đa vitamin được xem xét: 9 thử nghiệm thử nghiệm với 51.550 người tham gia cho thấy không có mối liên hệ giữa việc bổ sung đa vitamin và tử vong do mọi nguyên nhân"; Xếp hạng viên đa vitamin I; β Carotene/Vitamin E Xếp hạng D ("khuyến cáo không sử dụng thực phẩm bổ sung beta carotene hoặc vitamin E để phòng ngừa bệnh tim mạch hoặc ung thư"); β Carotene "Tăng nguy cơ ung thư phổi (RR 1.18) ở người hút thuốc/công nhân tiếp xúc với amiăng" (phần này không trích dẫn trực tiếp số 1.18). 
- Mặt phủ định trong ghi chú: Gaziano JM và cộng sự 2012 JAMA, DOI 10.1001/jama.2012.14641
  - Thực tế đã mở: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (bản tóm tắt thành công của PubMed này đã trả về bản tóm tắt). Tiêu đề khớp với "Đa vitamin trong phòng ngừa ung thư ở nam giới: nghiên cứu sức khỏe của bác sĩ II, thử nghiệm ngẫu nhiên có kiểm soát." Xác nhận. 
  - Nguồn cho các số được trích dẫn: "tỷ lệ nguy cơ [HR], 0,92; KTC 95%, 0,86-0,998; P=.04」「HR, 0,88; CI 95%, 0,77-1,01; P=,07」

## Mục 2 Dầu cá

- Manson JE và cộng sự. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - Thực tế đã mở: Europe PMC REST (TRUY VẤN DOI). Tiêu đề khớp với "Axit béo biển n-3 và Phòng ngừa bệnh tim mạch và ung thư," 2019, NEJM. Xác nhận. 
  - Nguồn số liệu được trích dẫn: "25.871 người tham gia," "1 g/ngày," "theo dõi trung vị 5,3 năm," "các sự kiện tim mạch lớn ... tỷ lệ nguy cơ, 0,92; KTC 95%, 0,80 đến 1,06; P=0,24」「Tử vong do bất kỳ nguyên nhân nào ... tỷ lệ nguy cơ là 1,02 (KTC 95%, 0,90 đến 1,15)」
- Nhóm Hợp tác Nghiên cứu ASCEND 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - Tổng thể: Châu Âu PMC REST。 Tác động của thực phẩm bổ sung axit béo n-3 trong bệnh tiểu đường」, 2018, NEJM。 已确认。 
  - 引用数字出处: 「15.480 bệnh nhân tiểu đường không có bệnh tim mạch xơ vữa」「Viên nang 1 gram mỗi ngày」「Trung bình 7,4 năm」「tỷ lệ tỷ lệ, 0,97; KTC 95%, 0,87 đến 1,08; P=0,55」「Tỷ lệ tử vong toàn nguyên: tỷ lệ 0,95; KTC 95%, từ 0,86 đến 1,05」
- 反方:Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - 实际打开:<https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text>(Europe PMC 该条目无 abstractText,改用 NCBI efetch)。 标题匹配「Giảm Nguy cơ Tim mạch với Icosapent Ethyl cho Tăng triglyceride máu」, REDUCE-IT Investigators, NEJM 2019(PMID 30415628)。 已确认。 
  - Tỷ lệ nguy cơ là 0,75 (khoảng tin cậy 95%, 0,68–0,83; P<0,001)」「17,2% nhóm icosapent ethyl so với 22,0% nhóm giả dược」「2 g icosapent ethyl hai lần mỗi ngày (tổng liều hàng ngày, 4 g)「bệnh tim mạch hoặc tiểu đường đã xác định ... Liệu pháp statin, triglyceride lúc đói 135–499 mg/dL」「8.179 bệnh nhân」

## 条目 3 维生素 D

- Manson JE và cộng sự 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - Tạp chí châu Âu: PMC REST. Bổ sung Vitamin D và Phòng ngừa Ung thư và Bệnh tim mạch. 已确认。 
  - 引用数字出处: 「2000 IU mỗi ngày」「25,871」「Trung vị 5,3 năm」「Ung thư xâm lấn: tỷ lệ nguy cơ, 0,96; CI 95%, 0,88 đến 1,06; P=0,47」「Các sự kiện tim mạch chính: tỷ lệ nguy cơ, 0,97; CI 95%, 0,85 đến 1,12; P=0,69」「Tử vong do nguyên nhân nào: tỷ lệ nguy cơ là 0,99 (KTC 95%, 0,87 đến 1,12)」
- Neale RE và cộng sự 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - 实际打开:Europe PMC REST(按 DOI 查询返回空,改按 TIÊU ĐỀ: "D-Health Trial" VÀ AUTH:Neale 查询,返回的题录 DOI 字段为 10.1016/S2213-8587(21)00345-4,与所写 DOI 一致)。 标题匹配「Thử nghiệm D-Health: thử nghiệm ngẫu nhiên có kiểm soát về tác động của vitamin D đối với tử vong」,2022。 已确认。 
  - 引用数字出处: 「21 315 người tham gia, bao gồm 10.662 người thuộc nhóm vitamin D và 10.653 người nhóm giả dược」「60.000 IU mỗi tháng trong 5 năm」「1100 ca tử vong được ghi nhận (giả dược 538 [5.1%]; vitamin D 562 [5.3%])「HR ... 1.04 [KTC 95% 0.93 đến 1.18]; p=0·47」「Theo dõi trung vị 5.7 tuổi」「Người Úc từ 60 tuổi trở lên được tuyển chọn trên toàn quốc qua danh sách cử tri Khối Thịnh vượng chung」(第二次抓取逐字确认;正文据此写「60 岁以上」,不写具体上限)。 

## 条目 4 抗氧化补剂

- Bjelakovic G và cộng sự 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
- Tạp chí châu Âu: PMC REST châu Âu。 Các thực phẩm bổ sung chống oxy hóa để phòng ngừa tử vong ở người khỏe mạnh và bệnh nhân mắc nhiều bệnh khác nhau」, 2012, Cochrane Database Syst Rev。 已确认。 
  - 78 thử nghiệm, 296.707 người tham gia」「RR 1.02, CI 95% 0.98 đến 1.05 (hiệu ứng ngẫu nhiên)」「Thử nghiệm nguy cơ sai lệch thấp (56 thử nghiệm, 244.056 người tham gia): RR 1.04, CI 95% 1.01 đến 1.07」「Beta-carotene: RR 1.05, CI 95% 1.01 đến 1.09」「Vitamin E: RR 1.03, CI 95% 1.00 đến 1.05」
- Nhóm Nghiên cứu ATBC 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - 实际打开: Châu Âu PMC REST。 Tác động của vitamin E và beta carotene đến tỷ lệ mắc ung thư phổi và các loại ung thư khác ở nam giới hút thuốc」,1994,NEJM。 已确认。 
  - 引用数字出处: 「29.133 nam hút thuốc」「20 mg mỗi ngày」「Thay đổi tỷ lệ mắc bệnh, 18%; khoảng tin cậy 95%, từ 3 đến 36%」「cao hơn 8% (khoảng tin cậy 95%, 1 đến 16%)」
- Omenn GS và cộng sự. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - 实际打开: Châu Âu PMC REST。 Tác động của sự kết hợp beta carotene và vitamin A lên ung thư phổi và bệnh tim mạch」,1996,NEJM。 已确认。 
  - 引用数字出处: 「18.314 người hút thuốc, từng hút thuốc và công nhân tiếp xúc với amiăng」「Nguy cơ tương đối ung thư phổi là 1,28 (khoảng tin cậy 95%, 1,04 đến 1,57; P=0,02)」「Nguy cơ tử vong tương đối do bất kỳ nguyên nhân nào là 1,17 (khoảng tin cậy 95%, từ 1,03 đến 1,33)」
- 备注中的 USPSTF D 级:同条目 1 来源 B,已确认。 

## 条目 5 氨糖/软骨素

- Clegg DO và cộng sự 2006 NEJM, DOI 10.1056/NEJMoa052771
  - Tạp chí châu Âu PMC REST, Glucosamine, chondroitin sulfate, và hai loại kết hợp cho thoái hóa khớp gối」, 2006, NEJM。 已确认。 
  - 1.583 bệnh nhân」「giả dược (60,1%)「Glucosamine: cao hơn 3,9 điểm phần trăm (P=0,30)」「Chondroitin sulfate: cao hơn 5,3 điểm phần trăm (P=0,17)」「Điều trị kết hợp: cao hơn 6,5 điểm phần trăm (P=0,09)」「Celecoxib: tăng 10,0 điểm phần trăm (P=0,008)」「Đau từ trung bình đến nặng ở mức cơ bản ... 79,2% so với 54,3%, P=0,002」;第二次抓取逐字确认「... hoặc giả dược trong 24 tuần」和「Phân tích thăm dò cho thấy sự kết hợp của glucosamine và chondroitin sulfate có thể hiệu quả ở nhóm bệnh nhân bị đau đầu gối từ trung bình đến nặng」。 

## 条目 6 维生素 C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - Vitamin C để phòng ngừa và điều trị cảm lạnh thông thường」, 2013 已确认。
- Nguồn dẫn số liệu: 「pooled RR là 0,97 (khoảng tin cậy 95% (CI) 0,94 đến 1,00)」「29 so sánh thử nghiệm với 11.306 người tham gia」「Ở người lớn, cảm lạnh rút ngắn 8% (3% đến 12%); ở trẻ em rút ngắn 14% (7% đến 21%)」「Không thấy tác dụng đồng nhất của vitamin C lên thời gian hoặc mức độ nghiêm trọng của cảm lạnh trong các thử nghiệm điều trị」。Số liệu về nhóm người chịu áp lực thể lực cực đoan trong ghi chú lấy từ câu xác nhận nguyên văn lần thứ hai: 「Năm thử nghiệm với tổng cộng 598 vận động viên marathon, vận động viên trượt tuyết và binh sĩ trong các bài tập dưới Bắc Cực cho RR gộp là 0,48 (95% CI 0,35 đến 0,64)」.  

## Mục 7 PET-CT toàn thân / Chỉ dấu u

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926  
  - Thực tế mở: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (lần này mở thành công). Tiêu đề khớp với 「Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement」, 2018, JAMA, DOI 10.1001/jama.2017.21926. Đã xác nhận. (DOI ban đầu tôi nhớ là 10.1001/jama.2018.0938 sai, đã dùng WebSearch tìm DOI chính xác và xác minh.)  
  - Thực tế mở: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>. Đã xác nhận.  
  - Nguồn dẫn số liệu (nguyên văn trên trang chính thức): 「Không tìm thấy sự khác biệt về tử vong do ung thư buồng trứng … với 0,34% ở nhóm sàng lọc và 0,29% ở nhóm chăm sóc thông thường (tỷ lệ tương đối, 1,18 [95% CI, 0,82 đến 1,71])」「Phẫu thuật để điều tra kết quả xét nghiệm sàng lọc dương tính ở phụ nữ cuối cùng không bị ung thư buồng trứng xảy ra ở 0,2% người tham gia trong nhóm UK Pilot CA-125, 0,97% … 3,25% người tham gia trong nhóm siêu âm UKCTOCS và 3,17% người tham gia nhóm PLCO CA-125 cộng với siêu âm」「Đến 15% số phụ nữ này gặp biến chứng phẫu thuật nghiêm trọng」  
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741  
  - Thực tế mở: Europe PMC REST. Tiêu đề khớp với 「Whole-body CT screening: spectrum of findings and recommendations in 1192 patients」, 2005, Radiology. Đã xác nhận.  
  - Nguồn dẫn số liệu: 「1030 (86%) trong 1192 đối tượng có ít nhất một phát hiện bất thường」「Bốn trăm bốn mươi lăm (37%) bệnh nhân nhận ít nhất một khuyến nghị đánh giá thêm」「hầu hết các phát hiện được mô tả là lành tính và không cần đánh giá thêm」  

## Mục 8 Vòng đeo thông minh

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858  
  - Thực tế mở: Europe PMC REST. Tiêu đề khớp với 「Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial」, 2016, JAMA. Đã xác nhận.  
  - Nguồn dẫn số liệu: 「giảm cân trung bình ước tính, 3,5 kg [95% CI, 2,6-4,5] ở nhóm can thiệp nâng cao và 5,9 kg [95% CI, 5,0-6,8] ở nhóm can thiệp tiêu chuẩn; khác biệt, 2,4 kg [95% CI, 1,0-3,7]; P = .002」「471 người tham gia được phân ngẫu nhiên」  

## Mục 9 Thực phẩm hữu cơ
- Smith-Spangler C và cộng sự. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - 实际打开: Châu Âu PMC REST。 标题匹配「Thực phẩm hữu cơ có an toàn hoặc lành mạnh hơn so với các lựa chọn thay thế truyền thống không?: tổng quan hệ thống」, 2012, Annals of Internal Medicine。 已确认。 
  - 引用数字出处: 17 nghiên cứu trên người và 223 nghiên cứu về mức độ dinh dưỡng và chất ô nhiễm trong thực phẩm đáp ứng tiêu chí đưa vào」「Tài liệu công bố thiếu bằng chứng mạnh mẽ cho thấy thực phẩm hữu cơ giàu dinh dưỡng hơn đáng kể so với thực phẩm thông thường」「Chỉ có 30%」(农药残留)「Chỉ có 3 nghiên cứu trên người xem xét kết quả lâm sàng, không tìm thấy sự khác biệt đáng kể ... đối với kết quả dị ứng hoặc nhiễm trùng có triệu chứng。 Chênh lệch nguy cơ, 33%」,本节未引用。 「检出不等于超标」是我的措辞，摘要原文为残留检出风险差异，未提超标比例。 

## 条目 10 保健品

- 国家市场监督管理总局 新闻发布会页面
  - 实际打开:<https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>。 页面标题「市场监管总局就《保健食品标注警示用语指南》和《保健食品原料目录与保健功能目录管理办法》有关情况举办专题新闻发布会」,2019 年 8 月 20 日发布会,samr.gov.cn 官网。 已确认。 
  - 引用文字出处：「保健食品不是药物，不能代替药物治疗疾病」「警示区面积不少于其所在版面的20%」「补充膳食营养物质、维持改善机体健康状态或者降低疾病发生风险因素」
  - 未确认:公告原文页 <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> 连续 4 次 WebFetch 均「Socket is closed」,gov.cn 转载页 404,故来源只写成功打开的 samr.gov.cn 发布会页。 

## 条目 11 益生菌

- Khalesi S và cộng sự 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - Tạp chí châu Âu PMC REST. Tổng quan về bổ sung men vi sinh ở người trưởng thành khỏe mạnh: hữu ích hay thổi phồng?」, 2019, Tạp chí Dinh dưỡng Lâm sàng Châu Âu. 已确认。 
  - Tổng quan này không ủng hộ khả năng của men vi sinh gây thay đổi liên tục trong hệ vi sinh đường ruột hoặc cải thiện hồ sơ lipid ở người lớn khỏe mạnh」;菌群变化「Transient」;有小幅改善的指标「Độ đặc của phân, phân và nồng độ lactobacilli âm đạo」

## 条目 12 冷水澡

- Buijze GA và cộng sự 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - 实际打开:<https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>。 标题匹配「Ảnh hưởng của tắm nước lạnh đến sức khỏe và công việc: Một thử nghiệm có kiểm soát ngẫu nhiên」,2016。 已确认。 
  - Giảm 3.018 người」「30, 60 hoặc 90 giây」「giảm 29% ... (IRR: 0,71, P = 0,003)」「Đối với ngày ốm không có ảnh hưởng nhóm đáng kể」「Không có sự khác biệt lâm sàng đáng kể về chất lượng cuộc sống, năng suất làm việc, lo âu」
- Cain T và cộng sự 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
- Tổng quan và phân tích tổng hợp: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615> Tác động của ngâm nước lạnh đến sức khỏe và hạnh phúc: Tổng quan hệ thống và phân tích tổng hợp」, 2025。 已确认。 
  - 11 thử nghiệm ngẫu nhiên có đối chứng với tổng cộng 3.177 người tham gia」「tăng viêm đáng kể ngay lập tức... và 1 giờ sau CWI」「không có thay đổi miễn dịch tức thời hoặc muộn đáng kể」「giảm căng thẳng đáng kể... 12 giờ sau CWI」「cơ sở bằng chứng hiện tại bị giới hạn bởi rất ít RCT, kích thước mẫu nhỏ」

## 条目 13 排毒/碱性

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - Tổng quan cuối cùng của châu Âu: PMC REST。 Chế độ ăn giải độc để loại bỏ độc tố và quản lý cân nặng: đánh giá phê bình về bằng chứng」, 2015。 已确认。 
  - Mặc dù ngành giải độc đang phát triển mạnh, nhưng rất ít bằng chứng lâm sàng hỗ trợ việc sử dụng các chế độ ăn này」「Chưa có thử nghiệm ngẫu nhiên nào được tiến hành để đánh giá hiệu quả của chế độ giải độc thương mại ở người」
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - Tổng quan toàn diện: Europe PMC REST(DOI 查询)。 Tổng quan hệ thống về mối liên hệ giữa lượng axit trong thực phẩm, nước kiềm và ung thư」,2016, BMJ Open。 已确认。 (我最初记的 DOI 10.1136/bmjopen-2016-010438 是错的,doi.org 返回 404;WebSearch 与 Europe PMC 均给出 2015-010438,已按此改正。 ）
  - 引用文字出处:「8278 trích dẫn đã được xác định, và 252 bản tóm tắt đã được xem xét; 1 nghiên cứu đáp ứng tiêu chí đưa vào」「Không liên quan đến mức độ axit của chế độ ăn với ung thư bàng quang (OR=1,15: CI 95% 0,86 đến 1,55, p=0,36)」「Việc quảng bá chế độ ăn kiềm và nước kiềm cho công chúng để phòng ngừa hoặc điều trị ung thư là không hợp lý」

## 条目 14 每天 8 杯水

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - 实际打开:Europe PMC REST(journals.physiology.org 返回 403)。 标题匹配「"Uống ít nhất tám ly nước mỗi ngày." Thật sao? Có bằng chứng khoa học nào cho "8 x 8" không?」, Heinz Valtin,2002。 已确认。 
  - 引用文字出处:「Không tìm thấy nghiên cứu khoa học nào ủng hộ 8 x 8. Thay vào đó, các khảo sát về lượng thức ăn và nước uống của hàng ngàn người trưởng thành... cho thấy mạnh mẽ rằng lượng lớn như vậy không cần thiết」

## 未收录但曾考虑的候选

- 胶原蛋白口服：现有荟萃分析多为小样本且厂商资助，方向偏阳性，不符合「证据显示无效」的本节口径，未收。 
- 空气净化器/净水器：未做核实，也没有找到硬结局证据，未收。 
- 早起本身：与睡眠规律性难以拆开，未找到直接对照证据，未收。 
- 多任务/番茄钟：无直接证据，按要求不收。
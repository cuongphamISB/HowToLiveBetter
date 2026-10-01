# Hồ sơ kiểm chứng: bổ sung bốn mục về tai nạn lao động vào chương 19

Ngày kiểm chứng: 2026-09-07. Chương 19 tăng từ 6 → 10 mục, đổi tên từ “Bị sa thải và chủ động nghỉ việc” thành “Bị sa thải, nghỉ việc và tai nạn lao động”; toàn sách tăng từ 318 → 322 mục.

Tai nạn lao động trước đây là khoảng trống lớn nhất trong một chủ đề của sách. Chương 7, mục 3 có nói vụ việc tai nạn lao động thuộc phạm vi trợ giúp pháp lý, nhưng chưa có mục nào giải thích cách xác định, thời hạn và khoản tiền được hưởng. Khoản này có thể lớn hơn một bậc so với trợ cấp N khi mất việc, còn thời hạn lại chặt chẽ hơn.

Phương pháp: dùng `Invoke-WebRequest` lấy byte gốc của trang công báo gov.cn, giải mã bằng GB18030 rồi bỏ thẻ HTML; đối chiếu từng điều với nguyên văn pháp luật.

---

## I. Các điều đã đối chiếu nguyên văn

Tất cả lấy từ toàn văn “Điều lệ bảo hiểm tai nạn lao động” trong Công báo Chính phủ Trung Quốc, Lệnh Quốc vụ viện số 586, sửa đổi năm 2010: <https://www.gov.cn/gongbao/content/2011/content_1778064.htm>.

| Điều luật | Nội dung nguyên văn đã đối chiếu, dịch sang tiếng Việt | Dùng ở đâu |
|---|---|---|
| Điều 14 | Bảy trường hợp “phải được xác định là tai nạn lao động”. Khoản (6), theo bản sửa năm 2010: “Trong lúc đi làm hoặc về nhà, bị thương do tai nạn giao thông mà bản thân không chịu trách nhiệm chính, hoặc do tai nạn đường sắt đô thị, phà chở khách hay tàu hỏa.” | Mục 7: bị xe đâm trên đường đi làm cũng có thể được tính |
| Điều 15 | Ba trường hợp “được coi như tai nạn lao động”, gồm khoản (1): “Trong thời gian làm việc và tại vị trí làm việc, đột ngột phát bệnh rồi chết, hoặc chết trong vòng 48 giờ dù đã cấp cứu nhưng không thành công.” | Ghi chú mục 7 |
| Điều 16 | Không được xác định trong các trường hợp “(1) cố ý phạm tội; (2) say rượu hoặc sử dụng ma túy; (3) tự làm hại bản thân hoặc tự sát”. | Ghi chú mục 7 |
| Điều 17 | “Đơn vị phải nộp đơn đề nghị xác định tai nạn lao động trong 30 ngày kể từ ngày xảy ra thương tích do tai nạn hoặc được chẩn đoán, giám định mắc bệnh nghề nghiệp…”; “Nếu người sử dụng lao động không nộp đơn theo khoản trên, người lao động bị tai nạn hoặc người thân gần, tổ chức công đoàn có thể trực tiếp nộp đơn cho cơ quan hành chính bảo hiểm xã hội của khu vực quản lý quỹ nơi người sử dụng lao động đặt trụ sở, trong một năm kể từ ngày xảy ra thương tích hoặc được chẩn đoán, giám định mắc bệnh nghề nghiệp”; “Nếu người sử dụng lao động không nộp đơn trong thời hạn khoản 1, các chi phí liên quan đến quyền lợi tai nạn lao động phát sinh trong thời gian này và đáp ứng điều lệ do người sử dụng lao động chịu”. | Hai thời hạn ở mục 7 |
| Điều 18 | Ba loại hồ sơ: đơn đề nghị xác định tai nạn lao động, giấy tờ chứng minh quan hệ lao động, giấy chẩn đoán y khoa hoặc giấy chẩn đoán bệnh nghề nghiệp. | Chi phí mục 7 |
| Điều 19 | “Nếu người lao động hoặc người thân gần cho rằng đây là tai nạn lao động nhưng người sử dụng lao động không đồng ý, người sử dụng lao động chịu nghĩa vụ chứng minh.” | Mục 7 |
| Điều 20 | “Cơ quan hành chính bảo hiểm xã hội phải ra quyết định xác định tai nạn lao động trong 60 ngày kể từ ngày tiếp nhận đơn.” | Nguồn mục 7 |
| Điều 21, 22 | “Sau điều trị, khi thương tích tương đối ổn định mà vẫn còn khuyết tật ảnh hưởng khả năng lao động thì phải giám định khả năng lao động”; “Rối loạn chức năng lao động chia thành mười mức thương tật, nặng nhất là mức một, nhẹ nhất là mức mười.” | Mục 9 |
| Điều 36 | Mức năm và sáu: trợ cấp thương tật một lần bằng 18 và 16 tháng tiền lương của người đó. Nếu khó bố trí việc làm, trả trợ cấp thương tật hàng tháng bằng 70% và 60% tiền lương tương ứng. | Mục 9 |
| Điều 37 | Mức bảy đến mười: trợ cấp thương tật một lần bằng 13, 11, 9 và 7 tháng tiền lương. Khi hợp đồng hết hạn hoặc người lao động đề nghị chấm dứt, quỹ trả trợ cấp y tế tai nạn lao động một lần, đơn vị trả trợ cấp việc làm cho người bị thương tật một lần; chính quyền cấp tỉnh quy định tiêu chuẩn. | Mục 9 |
| Điều 39 | “(1) Trợ cấp mai táng bằng sáu tháng tiền lương bình quân tháng của người lao động trong khu vực quản lý quỹ ở năm trước; (2) trợ cấp cho thân nhân được nuôi dưỡng… vợ/chồng nhận 40% mỗi tháng, mỗi thân nhân khác 30%, người già neo đơn hoặc trẻ mồ côi được cộng 10% trên mức trên…; (3) trợ cấp tử vong do lao động một lần bằng 20 lần thu nhập khả dụng bình quân đầu người của cư dân thành thị cả nước ở năm trước.” | Mục 10 |
| Điều 62 | Khoản 2: “Nếu người lao động bị tai nạn tại đơn vị có nghĩa vụ tham gia bảo hiểm tai nạn lao động theo điều lệ nhưng chưa tham gia, người sử dụng lao động trả chi phí theo các hạng mục và mức quyền lợi quy định tại điều lệ.” Khoản 1: buộc tham gia và đóng bù trong thời hạn quy định, “thu thêm tiền chậm đóng mỗi ngày bằng 0.05%; nếu quá hạn vẫn không đóng, phạt từ một đến ba lần số tiền chưa đóng”. | Mục 8 |

## II. Nội dung chưa lấy được hoặc không sử dụng

| Nội dung cần tìm | Kết quả | Cách xử lý |
|---|---|---|
| Số tiền cụ thể của trợ cấp tử vong do lao động một lần trong năm hiện tại | Cần thu nhập khả dụng bình quân đầu người của cư dân thành thị cả nước năm 2025. Không tìm được bản thông cáo thống kê trong kho chính sách Quốc vụ viện; bài giải thích trên gov.cn chỉ ghi “thu nhập khả dụng bình quân đầu người của cư dân tăng thực tế 5.0% so với năm trước”, không có số tuyệt đối. Danh sách công bố mới nhất của stats.gov.cn cũng không có mục này. | Mục 10 chỉ ghi công thức theo bội số; số tiền ghi TODO |
| Tài liệu về tranh luận trong thực tiễn áp dụng quy định 48 giờ | Chỉ tìm thấy nhiều bình luận thứ cấp, chưa lấy được bản án hoặc cách giải thích chính thức có thể trích | Nội dung chính chỉ nêu nguyên văn điều luật, không bình luận thêm |

## III. Loại lợi ích và mức lợi ích

Cả bốn mục đo lợi ích bằng tiền. Áp dụng ngưỡng tiền dùng từ chương 8: trợ cấp thương tật một lần quy ra tháng lương, mức mười nhẹ nhất cũng bằng bảy tháng; trợ cấp tử vong bằng 20 lần thu nhập khả dụng bình quân đầu người của cư dân thành thị cả nước năm trước. Các khoản này đều từ hàng vạn CNY trở lên, nên cả bốn xếp lợi ích lớn. Xác định tai nạn và giám định không mất phí nhưng cần làm thủ tục, chờ kết luận, nên thời gian xếp vừa. Mục 8 về đơn vị chưa tham gia bảo hiểm còn ghi kiên trì=một phần, vì phía đơn vị nhiều khả năng không thừa nhận và người lao động phải theo vụ việc đến trọng tài.

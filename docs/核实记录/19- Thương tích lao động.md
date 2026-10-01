# Hồ sơ xác minh: Phụ lục Mục 19 4 (Tai nạn lao động)

Ngày xác minh: 2026-09-07. Mục 19, Điều 6 → 10, tiêu đề mục đã được đổi từ "Bị sa thải và tự nguyện từ chức" thành "Bị sa thải, từ chức và Chấn thương lao động," Điều 318 → 322 trong sách. 

Chấn thương lao động hóa ra là điểm trống lớn nhất: Mục 7, Điều 3 đề cập rằng các vụ tai nạn lao động thuộc phạm vi trợ giúp pháp lý, nhưng không đề cập đến 'cách xác định, thời hạn nào, hoặc số tiền nhận được.' Số tiền này lớn hơn nhiều so với việc sa thải nhân viên, và các điều khoản còn nghiêm ngặt hơn. 

Phương pháp: Sử dụng 'Invoke-WebRequest' để lấy byte gốc từ trang thông báo gov.cn, giải mã theo GB18030, xóa các thẻ và so sánh văn bản gốc của từng bài viết. 

--- 

## 1. Xác minh từng mục văn bản gốc

Tất cả các nguồn đều là toàn văn của 'Quy định Bảo hiểm Tai nạn Lao động' (Lệnh Nhà nước số 586, sửa đổi năm 2010) trong công báo chính thức của Chính phủ Trung Quốc <https://www.gov.cn/gongbao/content/2011/content_1778064.htm>. 

| Quy định pháp lý | Văn bản gốc đã được xác minh | Nơi sử dụng |
| --- | --- | --- |
| Điều 14 | Có bảy trường hợp "nên công nhận chấn thương lao động," trong đó có mục (6) là tuyên bố sửa đổi năm 2010: "Bị thương trong quá trình đi làm và về từ tai nạn giao thông không phải do cá nhân, hoặc do tai nạn tàu hỏa đô thị, phà hành khách, hoặc tàu hỏa" | Điều 7 (Va chạm trên đường đi làm cũng được tính) |
| Điều 15 | "(1) Tử vong đột ngột do ốm trong giờ làm việc và tại nơi làm việc, hoặc tử vong trong vòng 48 giờ sau các nỗ lực cứu hộ không thành công" và ba loại "chấn thương lao động được coi là" | Điều 7 Ghi chú |
| Điều 16 | "(1) Tội phạm cố ý; (2) Say rượu hoặc sử dụng ma túy; (3) Tự làm hại hoặc tự tử" không được công nhận | Điều 7 Ghi chú |
| Điều 17 | "Người sử dụng lao động phải nộp đơn xin công nhận tai nạn lao động trong vòng 30 ngày kể từ ngày xảy ra tai nạn hoặc từ ngày chẩn đoán hoặc đánh giá bệnh nghề nghiệp...... "Nộp đơn xin công nhận tai nạn lao động"; "Nếu người sử dụng lao động không nộp đơn xin công nhận tai nạn lao động như quy định tại đoạn trước, người lao động bị thương hoặc người thân gần gũi của họ, hoặc tổ chức công đoàn có thể trực tiếp nộp đơn xin công nhận tai nạn lao động lên phòng hành chính bảo hiểm xã hội của khu vực điều phối nơi người sử dụng lao động đặt trụ sở trong vòng một năm kể từ ngày xảy ra tai nạn hoặc ngày chẩn đoán hoặc đánh giá bệnh nghề nghiệp"; "Nếu người sử dụng lao động không nộp đơn công nhận tai nạn lao động trong thời hạn quy định tại đoạn đầu tiên của điều này, và bất kỳ chi phí liên quan nào phát sinh trong thời gian này đáp ứng các quy định của các quy định này sẽ do người sử dụng lao động chịu" | Hai thời hạn tại Điều 7 |
| Điều 18 | Ba tài liệu đăng ký: Mẫu đơn công nhận tai nạn lao động, bằng chứng quan hệ lao động, giấy chứng nhận chẩn đoán y tế hoặc giấy chứng nhận chẩn đoán bệnh nghề nghiệp | Điều 7 Phần chi phí |
| Điều 19 | "Nếu người lao động hoặc người thân gần gũi của họ tin rằng đó là tai nạn lao động nhưng người sử dụng lao động không tin, người sử dụng lao động phải chịu trách nhiệm chứng minh." Điều 7 |
| Điều 20 | "Phòng quản lý bảo hiểm xã hội phải ra quyết định về việc công nhận tai nạn lao động trong vòng 60 ngày kể từ ngày chấp nhận đơn xin công nhận tai nạn lao động" | Điều 7 Mục nguồn |
| Điều 21 và 22 | "Nếu có khuyết tật hoặc suy giảm ảnh hưởng đến năng lực làm việc sau khi chấn thương đã ổn định sau điều trị, sẽ tiến hành đánh giá năng lực lao động"; "Suy giảm chức năng lao động được chia thành mười mức độ khuyết tật, mức nặng nhất là Cấp độ 1 và mức nhẹ nhất là Cấp độ 10" | Điều 9 |
| Điều 36 | Cấp 5 và Cấp 6: Trợ cấp tàn tật một lần tương đương với 18 tháng hoặc 16 tháng lương của người lao động; Nếu khó sắp xếp công việc, trợ cấp tàn tật hàng tháng sẽ được chi trả, chiếm 70% hoặc 60% lương của người đó | Điều 9 |
| Điều 37 | Các cấp độ 7 đến 10: Trợ cấp khuyết tật một lần tương đương với mức lương 13, 11, 9 và 7 tháng; Khi hợp đồng hết hạn hoặc cá nhân yêu cầu chấm dứt, quỹ sẽ chi trả trợ cấp y tế thương tích lao động một lần, và người sử dụng lao động sẽ chi trả trợ cấp lao động khuyết tật một lần, với các tiêu chuẩn do chính quyền tỉnh quy định | Điều 9 |
| Điều 39 | "(1) Trợ cấp tang lễ là mức lương trung bình hàng tháng sáu tháng của người lao động trong khu vực phối hợp từ năm trước; (2) Lương hưu cho người thân phụ thuộc...... Vợ/chồng nhận 40% mỗi tháng, người thân khác nhận 30% mỗi người mỗi tháng, và người già hoặc trẻ mồ côi sống một mình hoặc trẻ mồ côi nhận thêm 10% mỗi người mỗi tháng ngoài tiêu chuẩn trên...... (3) Tiêu chuẩn trợ cấp tử vong một lần là gấp 20 lần mức thu nhập khả dụng trung bình quốc gia của cư dân đô thị năm trước." Điều 10 |
| Điều 62 | Khoản 2: "Nếu một nhân viên của người sử dụng lao động phải tham gia bảo hiểm tai nạn lao động nhưng không tham gia bảo hiểm theo các quy định này bị tai nạn lao động, người sử dụng lao động phải chi trả chi phí theo các quyền lợi và tiêu chuẩn bảo hiểm tai nạn lao động quy định trong các quy định này." Khoản 1: Lệnh tham gia và thanh toán bổ sung trong một khoảng thời gian quy định, "Phí trễ hạn 0,05% mỗi ngày sẽ được áp dụng; Nếu vẫn chưa thanh toán trong thời hạn, sẽ bị phạt ít nhất một lần và không quá ba lần số tiền nợ" | Điều 8 |

## 2. Không mua / Không được chấp nhận

| Bạn muốn gì | Kết quả | Xử lý |
| --- | --- | --- |
| Số tiền cụ thể của trợ cấp tử vong một lần cho năm hiện tại | Nó yêu cầu thu nhập khả dụng bình quân đầu người quốc gia của cư dân đô thị cho năm 2025. Bản tin thống kê chính không thể truy xuất từ cơ sở dữ liệu tài liệu chính sách của Hội đồng Nhà nước; bài viết giải thích của gov.cn chỉ nêu rằng thu nhập khả dụng bình quân đầu người của cư dân tăng 5,0% so với năm trước, không có giá trị tuyệt đối; danh sách mới nhất được công bố của stats.gov.cn cũng không bao gồm mục này | Điều 10 chỉ nêu công thức bội, và số tiền được liệt kê là TODO |
| Tài liệu tranh chấp về Điều khoản 48 giờ trong thực tế | Chỉ tìm thấy một số lượng lớn các đánh giá gián tiếp, mà không có tài liệu tòa án trích dẫn hoặc tuyên bố chính thức | Văn bản chính chỉ nêu quy định pháp lý gốc, không đánh giá thêm |

## 3. Thang đo và Tỷ lệ sản lượng

Cả bốn tiêu chí đều là thuật ngữ tài chính. Mức thu nhập được xác định dựa trên ngưỡng tiền tệ kể từ Mục 8: trợ cấp tàn tật một lần được tính dựa trên lương hàng tháng, với mức thấp nhất 10 vẫn tương đương với 7 tháng lương; Trợ cấp tử vong lao động là "gấp 20 lần thu nhập khả dụng bình quân đầu người quốc gia của cư dân đô thị năm trước," tất cả đều trên 10.000 nhân dân tệ, nên tất cả đều được coi là "lớn." Về chi phí, việc công nhận và thẩm định không tốn tiền, nhưng liên quan đến thủ tục và kết luận, với thời gian được đánh dấu là "trung bình"; Điều 8 (Người sử dụng lao động không được bảo hiểm) cũng ghi nhận "kiên trì = một phần" vì bên kia rất có khả năng từ chối và sẽ phải chờ đến trọng tài.
# Hồ sơ kiểm chứng: thêm hai mục chương 15 và bổ sung TODO bệnh án chương 24

Ngày 07/09/2026. Sách tăng từ 344 lên 346 mục; chương 24, mục 6 đổi từ C vì nguồn TODO thành A.

**Đợt này sửa một nhận định sai trong hai hồ sơ trước.** Khi tìm Quy định quản lý cho thuê nhà thương mại, quản lý môi giới bất động sản, phòng và giải quyết tranh chấp y tế, quản lý bệnh án trong kho chính sách Quốc vụ viện, kết quả trống khiến hai hồ sơ về bệnh mạn, bảo hiểm chăm sóc dài hạn, quyền thông tin và về khám bệnh, việc sau khi chết ghi rằng nguồn không có trong kho. Kết luận sai do dùng `searchfield=title|default`: tìm nội dung làm lẫn văn bản quy hoạch và đẩy kết quả đúng tiêu đề ra. Đổi `searchfield=title`, cả bốn trúng ngay. Các nhận định liên quan ở hai hồ sơ cũ không còn hiệu lực, lấy hồ sơ này làm chuẩn.

## 1. Nội dung đã đối chiếu

| Nguồn | Nội dung gốc | Dùng ở đâu |
|---|---|---|
| Quy định phòng ngừa và giải quyết tranh chấp y tế, Lệnh 701. <https://www.gov.cn/zhengce/zhengceku/2018-08/31/content_5318057.htm> | Điều 15 yêu cầu lập, giữ bệnh án theo Bộ Y tế, cấm sửa trái phép, giả, giấu, hủy, cướp bệnh án. Điều 16 cho bệnh nhân xem, sao hồ sơ ngoại trú, nội trú, nhiệt độ, y lệnh, xét nghiệm, ảnh y khoa, đồng ý xét nghiệm đặc biệt, phẫu thuật, hồ sơ mổ và gây mê, bệnh lý, điều dưỡng, chi phí và toàn bộ tài liệu thuộc bệnh án khác theo quy định. Cơ sở phải sao, đóng dấu xác nhận khi yêu cầu, có bệnh nhân hoặc thân nhân gần tại chỗ, có thể thu phí sao công khai. Khi bệnh nhân chết, thân nhân gần được xem và sao. | Bổ sung chương 24, mục 6 |
| Quy định quản lý bệnh án cơ sở y tế bản 2013. <http://www.gov.cn/gongbao/content/2014/content_2600084.htm> | Cơ sở chỉ định bộ phận hoặc người chuyên, kiêm nhiệm nhận đơn sao. Sao khi người nộp có mặt, hai bên xác nhận đúng rồi đóng dấu. Có thể thu phí theo quy định; liệt kê loại sao gồm ảnh, bệnh lý, xét nghiệm. | Cùng mục |
| Biện pháp quản lý môi giới bất động sản, Lệnh liên ngành 8, sửa bằng Lệnh 29 năm 2016. <http://www.gov.cn/gongbao/content/2011/content_1918920.htm> | Điều 24: nếu nhờ môi giới nhận, trả tiền giao dịch, phải qua tài khoản chuyên dụng thanh toán giao dịch khách mở tại ngân hàng. Điều 18 yêu cầu niêm yết rõ loại, nội dung, phí dịch vụ, giá và thông tin bất động sản. Điều 19: nhiều môi giới cùng một vụ chỉ thu hoa hồng một vụ, không tăng phí. Điều 17: giúp vay, đăng ký bất động sản hoặc việc khác phải giải thích nội dung, giá, có khách đồng ý rồi ký hợp đồng riêng. | Chương 15, mục tiền nhà cũ qua môi giới |
| Biện pháp quản lý cho thuê nhà thương mại, Lệnh 6. <http://www.gov.cn/gongbao/content/2011/content_1845070.htm> | Điều 8 lấy phòng thiết kế ban đầu làm đơn vị thuê nhỏ nhất, diện tích mỗi người không dưới mức địa phương; cấm cho thuê bếp, nhà vệ sinh, ban công, kho tầng hầm làm nơi ở. Điều 9 chủ nhà phải sửa theo hợp đồng, bảo đảm nhà và thiết bị an toàn; trong thời hạn thuê không được tùy ý tăng tiền một phía. | Chương 15, mục không thuê phòng chia vách |

## 2. Nguồn vẫn chưa lấy được

| Nội dung | Kết quả |
|---|---|
| Toàn văn Luật Bảo hiểm xã hội làm căn cứ thừa kế tài khoản hưu và trợ cấp thân nhân | Kho chỉ có hệ Quốc vụ viện, không có luật Đại hội; cổng Viện kiểm sát không lưu; URL đoán ở npc.gov.cn chỉ trả điều hướng. Giữ TODO chương 25. |
| Mức trợ cấp tang lễ, thân nhân | Văn bản nhân lực không trong kho, máy không truy cập mohrss.gov.cn. Giữ TODO chương 25. |
| Hạn mức bảo hiểm xe bắt buộc, thông báo xét nghiệm vi lượng trẻ, rút tiền gửi nhỏ của người chết đơn giản hóa | Tìm lại bằng `searchfield=title` vẫn không trúng. |

## 3. Loại và quy mô lợi ích

- Tài khoản chuyên dụng giao dịch nhà cũ xếp tiền, lớn, vì một lần hàng trăm nghìn đến vài triệu CNY, thuộc khoản đơn lẻ lớn nhất sách.
- Không thuê phòng chia vách xếp tiền, vừa: khi bị xử lý phải chuyển, mất đặt cọc và tiền đã trả, hàng trăm đến hàng nghìn CNY. Nguy cơ cháy ở ghi chú, không đổi sang quy mô lợi ích vì sách không quy đổi loại.
- Mục bệnh án chương 24 giữ tiền, vừa; chỉ tăng bằng chứng C→A.

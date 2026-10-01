# Thay đổi cách tính lợi ích: chia người hưởng lợi thành bốn nhóm · Hồ sơ (2026-09-09)

Nguồn nhiệm vụ: sau khi hoàn thành chương 13, mục 38 về gặp ẩu đả, một độc giả hỏi: “Người nằm dưới đất chẳng có quan hệ gì với tôi, cũng chẳng ảnh hưởng gì đến đời tôi, vì sao tôi phải can thiệp?” Câu hỏi chạm đến cách tính lợi ích của cả cuốn sách. Sách nói mỗi mục đều trả lời phải bỏ ra gì và đổi lại được gì, với người đọc là chủ thể mặc định. Nhưng ở một số mục trong chương 13, cột Lợi ích lại ghi tỷ lệ sống sót của người được cứu, tức đã đổi người hưởng lợi mà không nói rõ. Tác giả vì thế đặt ra quy tắc về người hưởng lợi.

## Quy tắc mới

Người hưởng lợi được chia thành bốn nhóm, theo khả năng lợi ích ấy sau này quay lại với người đọc, từ cao xuống thấp: ① bản thân người đọc; ② vợ/chồng và người thân trực hệ, gồm cha mẹ, con, ông bà nội ngoại và cháu nội ngoại; ③ bạn bè, đồng nghiệp và họ hàng khác, vì quan hệ có tính tương trợ và sự giúp đỡ hôm nay có thể được đáp lại; ④ người lạ. Nhóm cuối có lợi ích thấp nhất nhưng không phải bằng không: khả năng được đáp lại thấp, không biết tính cách đối phương, đồng thời có nguy cơ bị đổ lỗi, vu ngược hoặc trả đũa. Không cộng gộp các nhóm; khi viết về nhóm ④ phải nêu cả lợi ích lẫn rủi ro. Nhóm hưởng lợi không thay đổi mức lợi ích, vốn vẫn được xác định theo số liệu trong cột Lợi ích, mà chỉ ảnh hưởng đến việc có đáng bỏ chi phí hay không; cân nhắc này nằm trong Ghi chú.

Quy tắc được thêm vào CLAUDE.md, trong phần “Lợi ích thuộc về ai”, kèm cách viết ba bước cho các mục liên quan đến người khác, và vào hai đoạn sau phần “Cách đọc” của README. Trang tra cứu index.html được đồng bộ ở hai nơi: khối dự phòng `<noscript>` dành cho khi tắt JS và trình thu thập dữ liệu, và phụ đề `doc-head` người đọc thực sự nhìn thấy. Lần đầu chỉ sửa noscript, nên tác giả phản hồi rằng trên trang vẫn chỉ thấy “Mỗi mục trả lời hai câu hỏi”; sau đó mới sửa thêm doc-head. Theo thông lệ, câu ở doc-head không chứa số.

Bản đầu viết rằng chỉ tính bản thân và người thân trực hệ, còn bạn bè, đồng nghiệp, người lạ đều không tính. Đó là cách hiểu sai lời tác giả và đã được sửa ngay trong ngày thành bốn nhóm trên. Dấu vết của cách hiểu sai được xóa khỏi CLAUDE.md, README, index.html, lời dẫn chương 13 và ghi chú mục 2, 15. Trong thời gian hiểu sai, tiêu đề mục 38 bị bỏ phần gọi 110; lần này đã khôi phục thành “Nếu muốn báo công an, hãy lùi đến khoảng cách an toàn rồi gọi 110”. Câu “Bạn đang bảo vệ người nằm dưới đất, không phải chính mình” được đổi thành “Lợi ích thuộc nhóm hưởng lợi thấp nhất; có muốn dành thời gian đó hay không là điều bạn tự cân nhắc”.

## Kết quả rà soát toàn sách

Tìm trong tiêu đề của toàn bộ 471 mục các từ chỉ người khác, người lạ, người qua đường, đối phương, đồng nghiệp, bạn bè, hàng xóm, hành động cứu giúp và người quanh mình cho ra 37 mục. Sau khi đọc từng mục, hồ sơ ghi rằng chỉ 9 mục cần sửa.

- Phần lớn kết quả vốn đã nói về lợi ích của chính người đọc: tránh bị phạt hoặc lừa, chẳng hạn không chụp lén, không cho mượn căn cước, không mang đồ hộ người lạ, không nhận kẹo người lạ đưa, không chạy chương trình trên máy người khác và rời đi khi có người đưa đồ trong địa điểm vui chơi. Những mục này được giữ nguyên từng chữ.
- Các mục về ghế an toàn, bộ giới hạn cửa sổ, trẻ ở gần nước, cũng như các chương chăm sóc người già, nuôi con và mang thai, vốn phục vụ con cái hoặc cha mẹ, thuộc nhóm thứ hai nên không sửa.
- Chương 13, mục 40 về tiền hỗ trợ sau khi bị thương vì cứu người tính cách người đọc lấy lại tiền cho chính mình. Mục này cũng được giữ nguyên.

Danh sách thay đổi được ghi như sau:

| Vị trí | Cách sửa |
|---|---|
| Lời dẫn chương 13 | Thêm cách xác định người hưởng lợi: ưu tiên bản thân, vợ/chồng và người thân trực hệ; sau đó đến bạn bè, đồng nghiệp; người lạ vẫn có lợi ích nhưng thuộc nhóm thấp nhất, kèm nguy cơ bị đổ lỗi hoặc cuốn vào vụ việc. |
| Chương 13, mục 1, hồi sức tim phổi | Mở đầu Hiểu đơn giản bằng ý người bạn có khả năng phải ép tim nhất là người nhà, đồng thời thêm tỷ lệ ngừng tim tại nhà vào Lợi ích. |
| Chương 13, mục 2, người ngã gục hoặc người già bị ngã | Ghi chú nêu rằng cách đánh giá trước hết dành cho người già trong gia đình; với người lạ, phần còn lại là điều kiện miễn trách nhiệm và quy tắc không tùy tiện di chuyển họ. |
| Chương 13, mục 15, co giật | Ghi chú nêu đối tượng chính là người nhà bị động kinh; làm tương tự cho người lạ có mức lợi ích thấp hơn một nhóm nhưng cũng không phải chịu trách nhiệm. |
| Chương 13, mục 16, hạ đường huyết | Nêu đối tượng mặc định là bản thân hoặc người nhà mắc đái tháo đường. |
| Chương 13, mục 17, điện giật | Nêu rõ phải ngắt điện trước khi chạm vào người là quy tắc bảo vệ chính mình. |
| Chương 13, mục 26, đuối nước | Nêu rõ không xuống nước là quy tắc bảo vệ chính mình, và người thực sự muốn cứu thường là con mình. |
| Chương 13, mục 27, hóc nghẹn | Nêu rằng tình huống thường gặp nhất ở bàn ăn gia đình. |
| Chương 13, mục 38, gặp ẩu đả | Đổi tiêu đề thành “Lùi ra rồi rời đi…; nếu muốn báo công an, hãy lùi đến khoảng cách an toàn rồi gọi 110”. Phần nội dung để báo công an là lựa chọn do người đọc cân nhắc; ghi chú nêu lợi ích nằm ở nhóm thấp nhất. |
| Chương 8, mục 14, người quanh mình đe dọa gây hại | Nêu rằng lợi ích tính cho vợ/chồng, cha mẹ, con cái cùng sống chung, và pháp luật chỉ trao quyền đưa đi khám cho người thân gần. |

## Phần xác minh bổ sung

Tỷ lệ ngừng tim tại nhà lấy từ bài đã được dẫn trước đó: Zheng J và cộng sự (2023), BASIC-OHCA registry, The Lancet Public Health, <https://doi.org/10.1016/S2468-2667(23)00173-1>. Trong 38.227 trường hợp ngừng tim ngoài bệnh viện không do chấn thương, 30.282 trường hợp (79,2%) xảy ra tại nhà. Cùng bài ghi 7.121 trường hợp (20,3%) được người chứng kiến hồi sức tim phổi và 441 người trong 38.227 người (1,2%) sống sót. Trang PubMed lần này chỉ trả về thông báo cookie, nên các số được đối chiếu với `abstractText` từ API REST của Europe PMC.

## Những việc chưa làm

Không thêm Người hưởng lợi thành tiêu chí lọc, vì việc đó cần đổi định dạng nhãn chi phí, bộ phân tích và bảng lọc của index.html. Cũng không xóa mục nào: nhóm thấp nhất vẫn có lợi ích nên không có căn cứ xóa. Số mục và thống kê giữ nguyên: 471 mục; A 299 / B 123 / C 49; hiệu quả chi phí rất cao 83 / cao 236 / thông thường 152.

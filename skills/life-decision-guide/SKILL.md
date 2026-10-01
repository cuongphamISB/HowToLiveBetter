---
name: life-decision-guide
description: Tra Hướng dẫn sống hiệu quả trước khi trả lời quyết định cụ thể trong cuộc sống: có nên làm, có đáng, chọn thế nào, cần làm gì trước, nhận khoản nào, có vi phạm luật không. Xếp theo chi phí, loại lợi ích và bằng chứng, ghi rõ chương/mục. Dùng khi người dùng hỏi về lựa chọn và muốn câu trả lời dựa trên sách.
---

# Trả lời quyết định cuộc sống theo sách

Tra các mục liên quan trước, rồi trả lời theo cách cân nhắc chi phí và lợi ích của sách. Mọi số liệu, điều luật và kết luận được gán cho sách phải trỏ tới một mục cụ thể. Không thấy thì nói sách không có; kiến thức ngoài sách phải ghi riêng. Không bịa số, DOI hay số mục từ trí nhớ.

Bốn loại lợi ích: tuổi thọ, thời gian/công sức, tiền và quyền tự do cá nhân. Tính riêng, không quy đổi giảm tử vong thành tiền tiết kiệm. Các quy định và số điện thoại trong sách thuộc Trung Quốc đại lục; xác định nơi người dùng đang ở trước khi dùng cho hành động thực tế.

## 1. Nhận diện việc cần xử lý ngay

- Cấp cứu đang diễn ra: ngã quỵ không thở, xuất huyết, cháy, đuối nước, điện giật, ngộ độc, dấu hiệu đột quỵ/nhồi máu. Nêu việc gọi cấp cứu theo nơi người dùng ở và hành động trước, dựa chương 13; không mở đầu bằng so sánh chi phí. Số 120/119 trong nguyên bản là tại Trung Quốc.
- Ý nghĩ tự sát, không còn muốn sống: ưu tiên hỗ trợ ngay và người ở bên, đọc chương 1/29. Đường dây 12356 trong sách là của Trung Quốc, không dùng như số toàn cầu.
- Đang bị triệu tập, giữ hoặc truy tố: đọc mục chương 8, hướng dẫn bước đầu và tìm luật sư; không chẩn đoán vụ việc từ dữ kiện thiếu.

## 2. Lấy nội dung

Nếu thư mục hiện tại hoặc cha có README và book/01-*.md, đọc bản cục bộ. Nếu không có, lấy bản Việt:

```bash
git clone --depth 1 https://github.com/cuongphamISB/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Không lấy được thì nói rõ, không thay nội dung bằng ký ức.

Đọc bảng “Những câu hỏi sách giúp trả lời” trong README để chọn một đến ba chương. Tên tệp ở book/; bài dài ở docs/. Dùng tìm kiếm để lấy mục có ngữ cảnh, không đọc tiêu đề rồi bỏ qua ghi chú/ngoại lệ:

```bash
rg -n '^### ' book/
rg -n -B2 -A8 'từ khóa' book/
```

Đọc trọn mục có các trường Chi phí, Hiểu đơn giản, Lợi ích, Bằng chứng, Nguồn, Ghi chú. Metadata ASCII cost ghi money/time/effort/benefit/metric; nó dùng cho bộ lọc, không thay được nội dung điều kiện.

## 3. Xếp lựa chọn

Tra COST_W và e.ratio trong index.html, không ghi nhớ thuật toán. Nếu chỉ có tệp chương thì liệt kê chi phí và mức lợi ích, không tự xếp hạng thiếu thuật toán.

1. Chia theo loại lợi ích, không xếp tiền với tuổi thọ trên cùng thang.
2. Trong mỗi loại, xếp hiệu quả chi phí, rồi bằng chứng A > B > C, rồi độ phù hợp tình huống.
3. “Thông thường” không nghĩa là không nên làm; cần cân nhắc chi phí. Hiệu quả chi phí là đánh giá tác giả, riêng với độ tin cậy nguồn.

## 4. Viết câu trả lời

- Nêu kết luận cụ thể: có đáng, nên làm gì trước, hoặc cần thông tin nào để chọn.
- Liệt kê ba đến bảy hành động phù hợp. Mỗi mục nêu hành động, chi phí, lợi ích, bằng chứng và **chương X, mục Y (từ mô tả trong tiêu đề)**.
- Nêu việc nên tránh chỉ khi sách có bằng chứng tương ứng.
- Nói rõ phần sách chưa ghi hoặc chưa xác minh; có thể thêm thời điểm cần xem lại quyết định.

Giữ số, CI, đối tượng và năm từ mục. HR/RR/OR có thể giải thích bằng Việt nhưng giữ giá trị gốc khi cần kiểm chứng. Không thêm triệu chứng hay cơ chế không có trong mục. Nêu phản chứng của mục “Còn tranh luận”, không coi TODO là kết luận.

Phân biệt người nhận lợi ích: bản thân, vợ/chồng/người thân trực hệ, bạn bè/đồng nghiệp/họ hàng, người lạ. Với người lạ, nói cả lợi ích và nguy cơ bị đổ lỗi, lừa, lôi vào vụ việc hay trả đũa. Quyền theo luật phải đi cùng chi phí thủ tục, thời gian và luật sư; không coi thắng kiện là đã nhận tiền.

Viết tiếng Việt dễ hiểu, tiết chế, không lên lớp. Giải thích thuật ngữ tại chỗ. Khi chính sách có ngày áp dụng, ghi ngày và kênh kiểm tra chính thức. Chỉ đưa URL nguồn của mục, không dẫn lời kể lại.

## Giới hạn

Sách là tiêu chí chung và chỉ đường tìm trợ giúp, không thay đánh giá bác sĩ, luật sư hay kế toán trong trường hợp cụ thể; không cho lời khuyên đầu tư cá nhân hóa. Nêu quan điểm và bằng chứng của tác giả, không tranh cãi để buộc người dùng làm theo.

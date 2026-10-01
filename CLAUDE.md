# Hướng dẫn sống hiệu quả: quy tắc dự án

Các quy tắc áp dụng cho mọi công cụ AI làm việc trong kho.

## Mục tiêu và phạm vi

Sách xếp lựa chọn theo hiệu quả chi phí, giúp giữ bốn nguồn lực: tuổi thọ, thời gian/công sức, tiền và quyền tự do cá nhân. Mỗi mục ghi phải bỏ ra gì, đổi lại được gì. Việc chi phí thấp và lợi ích lớn đặt trước.

Đây là bản dịch Việt, không thay luật Trung Quốc bằng luật Việt Nam. Giữ quốc gia, cơ quan, CNY, đối tượng nghiên cứu, ngày áp dụng và điều kiện của nguyên bản. Bản dịch đối chiếu commit `6f6d969` của [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter), ngày 01/10/2026.

Mục lục và phạm vi từng chương ở README; 34 chương ở `book/`, bài dài ở `docs/`, hồ sơ kiểm chứng ở `docs/kiem-chung/`.

## Người hưởng lợi và quyền pháp lý

Xếp theo khả năng lợi ích quay lại với bạn: bản thân; vợ/chồng và người thân trực hệ; bạn bè, đồng nghiệp và họ hàng khác; người lạ. Không gộp các nhóm. Với người lạ, ghi cả lợi ích, rủi ro bị đổ lỗi/lừa/trả đũa, hành động tự bảo vệ và điều kiện miễn trách nhiệm. Nêu cách xử lý cho mình/gia đình trước, rồi mới bàn người khác. Nhóm hưởng lợi không đổi số lợi ích định lượng, nhưng ảnh hưởng cân nhắc chi phí.

Không coi quyền thắng kiện là khoản tiền chắc nhận. Nêu thủ tục, thời gian, phí luật sư và người trả. Theo luật trong sách, sơ thẩm thường sáu tháng (có thể gia hạn), rút gọn ba tháng. Phí luật sư không tự nằm trong án phí bên thua chịu. Miễn trách nhiệm dân sự không tự miễn hành chính/hình sự; quy tắc được viện dẫn phải điều chỉnh đúng rủi ro đang nói tới.

## Bằng chứng và trích nguồn

- A: số liệu từ phân tích gộp, nghiên cứu lớn, RCT; luật/chính sách có văn bản chính thức gốc.
- B: có nghiên cứu nhưng khó định lượng hoặc chỉ nghiên cứu nhỏ/đơn lẻ.
- C: kinh nghiệm tác giả hoặc đồng thuận, chưa có nghiên cứu trực tiếp.
- Mục A/B có phản chứng phải bắt đầu ghi chú bằng **Còn tranh luận:** và trình bày cả hai phía.
- Chỉ dùng nghiên cứu gốc, DOI/PubMed và báo cáo/văn bản chính thức; không trích lời kể lại từ mạng xã hội/trang tổng hợp.
- Chưa xác minh được số liệu thì ghi **TODO: cần xác minh**. Không bịa số, DOI, tên bài hay điều luật từ trí nhớ.
- Khi chỉ dịch/biên tập, giữ bằng chứng, nguồn và điều kiện gốc. Đổi kết luận chỉ khi có nguồn tốt hơn, kèm lý do.

Workflow kiểm tra URL hằng tuần. Lỗi kết nối/TLS không đồng nghĩa mất tài liệu. Chỉ sửa URL xác nhận 404/410/DOI không tồn tại; ưu tiên địa chỉ chính thức mới cùng tài liệu, nguồn chính thức xác nhận cùng nội dung, rồi bản lưu web có ngày lưu. Không âm thầm đổi bằng chứng.

## Định dạng

```markdown
### 1. Hành động cụ thể, bắt đầu bằng động từ
<!-- cost: money=0 time=low effort=no benefit=large metric=money -->
- Chi phí: ...
- Hiểu đơn giản: ...
- Lợi ích: ...
- Bằng chứng: A
- Nguồn: ...
- Ghi chú: ...
```

Metadata dùng ASCII: money=0/low/high; time=low/medium/high; effort=no/some/yes; benefit=large/medium/small; metric=mortality/money/time/freedom.

Tiền thấp là vài chục/vài trăm CNY hoặc khoản tháng nhỏ; cao là hàng nghìn hay chi dài hạn. Thời gian thấp là tiện tay/vài phút một lần; vừa là vài giờ mỗi tuần hoặc nhiều giờ một lần; cao là chiếm thời gian hằng ngày. Kiên trì thấp nhất là làm một lần; vừa là đổi thói quen/chịu chút khó chịu; cao là duy trì lâu dài.

Các lợi ích tính riêng, không quy đổi giữa loại. Tuổi thọ: giảm >=20% lớn, 10–20% vừa, <10% hoặc chỉ số trung gian nhỏ. Tiền: hàng vạn CNY lớn, hàng trăm/nghìn vừa, hàng chục nhỏ. Tự do: tránh hình sự lớn, hành chính/tạm giữ vừa, tranh chấp dân sự nhỏ. Thời gian: giờ/ngày lớn, giờ/tuần vừa, một lần nhỏ.

Điểm mỗi loại chi phí là 0/1/2. Lợi ích lớn + điểm 0 = rất cao; lớn + điểm <=2 hoặc vừa + điểm 0 = cao; còn lại = thông thường. Đây là đánh giá tác giả, độc lập với bằng chứng. Quy tắc trên trang và script thống kê phải đồng bộ.

## Viết tiếng Việt tự nhiên

Viết để người lớn không chuyên đọc một lần hiểu. Mỗi câu có chủ thể rõ và một ý chính; nối ý bằng vì/nhưng/nên khi hợp lý, tránh chuỗi câu cụt. Giải thích thuật ngữ tại chỗ và giữ tên chuyên môn để kiểm chứng.

Không còn chữ Trung trong nội dung, tên tệp, giao diện, chú thích mã hay bản xuất. Diễn giải thành ngữ và tên luật/cơ quan rõ bằng Việt. Không dịch từ khóa mã, HTML, lệnh shell, DOI hoặc tên tác giả quốc tế. URL ngoài ASCII phải mã hóa, không sửa địa chỉ nguồn.

“Hiểu đơn giản” gồm 2–4 câu, khoảng 120 từ trở xuống; nêu hành động, đối tượng, quy mô lợi ích. Không viết cỡ mẫu, thiết kế nghiên cứu, HR/RR/OR/CI ở đây. Không thêm số, triệu chứng hoặc cơ chế không có trong “Lợi ích”. Phần này phải tự đủ nghĩa.

“Lợi ích” giữ mọi số, CI, đối tượng và năm. Giữ HR/RR/OR gốc, giải thích ngắn, phân biệt nguy cơ tương đối với tuyệt đối, số lần biến cố với số người. Không biến quan sát thành nhân quả, hoặc OR phổ biến thành mức thay đổi xác suất chính xác.

Không lên lớp, động viên chung chung, thêm câu nâng tầm, dịch sát thành ngữ hoặc dùng “tầm cỡ/khẩu kính/đầu ra”. Nêu hành động, hậu quả, chi phí, ngoại lệ. Nguồn đặt trong “Nguồn”, kể cả phản chứng. Ghi chú giữ kết luận/điều kiện và tối đa một link bài dài. Quá dài thì chuyển giải thích sang docs.

## Cấu trúc và tham chiếu

Đầu chương: link về mục lục, dòng trống, `# N. Tên chương`; mục dùng `### N.`. Dịch giữ nguyên số. Thêm mục ưu tiên cuối chương. Chèn/xóa phải cập nhật mọi tham chiếu.

Sách dùng **chương X, mục Y**, hoặc **mục Y** cùng chương. Luật dùng **Điều Y** và tên văn bản. Kèm từ mô tả lấy từ tiêu đề đích, không dùng số trơ hoặc “mục trước/tiếp theo”. Bài dài luôn có số chương. Phạm vi có thể dùng “mục X đến Y”.

Sau sửa cấu trúc, tạo lại bảng bằng `node tools/check-refs.mjs`, xem diff: số không đổi mà tiêu đề đích đổi có thể là lệch. `--check` chỉ đọc. Hồ sơ kiểm chứng là lịch sử, không sửa số lịch sử theo sách mới.

README có một dòng câu hỏi/chương. Bộ xuất lấy danh sách từ README, không duy trì danh sách trùng. Bài dài phải gắn bốn nơi: bảng điều hướng, cuối mục lục, mô tả chương và doc-links trên trang. Link Markdown đúng và URL không có khoảng trắng chưa mã hóa.

## Kiểm tra và xuất sách

```bash
node tools/check-vietnamese.mjs
node tools/check-plain.mjs
node tools/check-refs.mjs --check
node tools/sync-stats.mjs --check
node tools/epub/build.mjs
node tools/offline/build.mjs
node tools/pdf/build.mjs
```

Bỏ `--check` ở sync-stats để cập nhật thống kê. EPUB cần `npm ci` trong tools/epub. PDF cần pandoc >=3.1, typst >=0.13 hoặc biến PANDOC/TYPST. Sản phẩm ở dist, không commit tệp xuất. Workflow tạo lại Release epub-latest trên main, PR chỉ xây/kiểm tra. Kiểm tra ngôn ngữ/tham chiếu/thống kê là job riêng.

HTML ngoại tuyến có window.__CORPUS__, không fetch sách. Sửa lấy dữ liệu phải giữ đường chạy này. Bài dài mở modal; thêm cú pháp Markdown phải cập nhật render. Bố cục PDF sửa trong template.typ, không chỉnh nội dung riêng. Bản xuất phải giữ dấu Việt.

Đồng bộ số mục, A/B/C, tranh luận, TODO, số nguồn và hiệu quả chi phí. Sửa số hay bố cục OG đều phải tạo lại ảnh; sửa bố cục phải xem ảnh. Không coi kiểm tra bỏ qua nhãn Việt hoặc đếm 0 là thành công.

## Chia việc cho agent

Chia theo file, không để hai agent sửa cùng file; từng agent xử lý mỗi file tuần tự. Prompt ghi phạm vi, nguồn, quy tắc, mục liên quan, đầu ra và tự kiểm tra.

Agent con không thay Git, không sửa README/trang/công cụ/chương khác, không chạy sync-stats hoặc check-refs chế độ ghi. Không Python/sed sửa hàng loạt văn bản sách, không gửi bản thảo ra dịch vụ ngoài. Viết/đọc lại từng đoạn từ nguyên bản. Chỉ báo hoàn thành file đã đọc và sửa đầy đủ; đổi nhãn không tính là dịch xong.

Tác vụ chính kiểm tra mẫu số/nguồn, link giữa chương, điều hướng, thống kê, toàn repo và bản xuất. Nội dung mới thiếu bằng chứng thì trả đánh giá thay vì cố viết. Chỉ tuyên bố xong khi có kiểm tra đầy đủ.

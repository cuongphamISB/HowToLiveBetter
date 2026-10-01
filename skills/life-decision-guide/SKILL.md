--- 
Tên: Life-Decision-Guide
Mô tả: Sử dụng văn bản chính của "Hướng dẫn Chi phí - Hiệu suất Cuộc sống" (github.com/eternity4719/HowToLiveBetter) để trả lời các quyết định cụ thể trong cuộc sống: bạn có nên làm không, có đáng không, cách lựa chọn, nên làm gì trước nếu có sự cố, bạn có thể nhận được bao nhiêu tiền, và liệu việc này có phạm pháp hay không. Trước tiên, xác định các mục liên quan trước khi trả lời, sắp xếp theo chi phí (tiền/thời gian/kiên trì), mức lợi ích và mức bằng chứng A/B/C, với mỗi mục chỉ rõ mục và vật phẩm đến từ đâu. Từ kích hoạt: Bạn có nên làm không, có đáng không? Bạn có muốn không? Có đáng không? Làm thế nào, giúp tôi quyết định, Điều này có bất hợp pháp không? Bạn có thể nhận được gì? Bạn nên làm gì trước, hiệu quả chi phí. 
--- 

# Quyết định cuộc sống: Hãy kiểm tra 'Hướng dẫn Cuộc sống Hiệu quả Chi phí' trước khi trả lời

## Kỹ năng này để làm gì?

Một số người hỏi cách xử lý một vấn đề cụ thể trong cuộc sống: trước tiên hãy tra cứu các mục liên quan trong "Hướng dẫn Chi phí - Hiệu suất Cuộc sống Cao", sau đó sắp xếp và trả lời theo phương pháp tính toán của cuốn sách. 

**Nếu bạn không tìm thấy, đừng trả lời. ** Mỗi con số, mọi điều luật và mọi kết luận trong câu trả lời của bạn nên chỉ về một văn bản chính nhất định; Nếu bạn không thể chỉ ra, chỉ cần nói rằng nó không được ghi trong sách. Bạn có thể đưa ra phán đoán theo lẽ thường, nhưng hãy chắc chắn đó là lẽ thường, không phải nội dung trong sách. Đừng điền số, DOI hoặc số mệnh đề dựa trên trí nhớ. 

Cuốn sách chia những thứ cần lấy lại thành bốn loại: tuổi thọ, thời gian và năng lượng, tiền bạc, và tự do cá nhân. **Bốn yếu tố này được tính riêng biệt và không quy đổi lẫn nhau** — "giảm 12% tổng tử vong" và "tiết kiệm 500 nhân dân tệ mỗi năm" không cùng một thang điểm. 

## Bước 0: Đầu tiên, xem bạn có muốn dừng ngay lập tức không

- **Khẩn cấp đang diễn ra** (ngã quỵ không thở, chảy máu nhiều, cháy, đuối nước, điện giật, ngộ độc, đột quỵ hoặc triệu chứng đau tim): Trước tiên, gọi 120/119 và hành động tại chỗ trước, lấy nguồn từ Mục 13, đừng chỉ nói về hiệu quả chi phí. 
- **Đề cập đến ý nghĩ tự tử và không thể sống sót**: Đầu tiên, gọi đường dây nóng hỗ trợ tâm lý quốc gia 12356, sau đó làm theo các mục trong mục 1 và 29, không phân tích thuyết phục hay đánh giá động cơ. 
- **Các thủ tục pháp lý đang diễn ra** (triệu tập, tạm giữ, truy tố): Trước tiên, tham khảo mục tương ứng trong Mục 8, và phần giải thích chỉ cung cấp các thuật ngữ chung; từng trường hợp cần luật sư. 
- Đối với phần còn lại của tình huống, hãy làm theo các bước dưới đây. 

## Bước 1: Lấy nội dung chính trong tay

**Cục bộ**: Nếu thư mục hiện tại hoặc thư mục cha chứa 'README.md' và 'book/01-don't die early.md', đây là chế độ cục bộ và đọc trực tiếp. 

**Từ xa**: Nếu bạn chưa có, chỉ cần lấy trực tiếp. Toàn bộ cuốn sách có dung lượng 1.3 MB, và phiên sao chép nông là tiện lợi nhất. Tất cả các lệnh tiếp theo có thể sử dụng như bình thường: 

'''bash
git clone --độ sâu 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb" 
```

Nếu bạn không thể dùng git, chỉ cần ghi tên tiếng Trung trực tiếp vào file (chỉ cần viết tên tiếng Trung trực tiếp): 

'''bash
curl -fsSL --nén "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/book/02-Don't Die Slowly.md" 
```

Nếu cả hai điểm này đều không hiệu quả, nghĩa là bạn không thể lấy được nội dung chính. Thành thật mà nói, hãy nói với người dùng đừng kể lại nội dung dựa trên ấn tượng. 

## Bước 2: Xác định vị trí đến phần

Đầu tiên, chọn các phần 1 đến 3: Đọc danh sách dưới mục 'README.md' trong thư mục gốc của kho lưu trữ dưới mục 'Các câu hỏi cần trả lời của cuốn sách này' (mỗi dòng một phần, chỉ định câu hỏi mà mỗi phần trả lời, và thêm tên tệp tương ứng với 'book/'), và đối chiếu các số theo câu hỏi của người dùng. Tất cả các bổ sung và xóa phần đều được phản ánh trong bảng đó; không còn danh sách riêng biệt nào ở đây. 

Tệp phần được đặt dưới mục 'book/'. Tên tệp bao gồm cả số phần và tên phần, và 'ls book/' cũng có thể được hiển thị đầy đủ. 

Bài viết dài trong 'docs': Hôn nhân có đáng giá không? Danh sách thiết bị khẩn cấp gia đình, những giấy chứng nhận cần đăng ký khi vận hành một nền tảng, và liệu bạn có nên dừng lại khi gặp người lạ không. 

## Bước 3: Truy xuất mục

Tệp phần lớn nhất là 110 KB; đừng đọc toàn bộ bài viết; dùng từ khóa để giải nén. Nếu bạn có các công cụ như Grep/Read, hãy dùng công cụ đó; nếu chỉ có shell, hãy dùng lệnh: 

'''bash
grep -rn '^### ' sách/ | grep -E 'keyword1|keyword2' # Trước tiên, kiểm tra tiêu đề bài viết nào có sẵn
grep -rn -B2 -A8 sách 'Từ khóa'/08-Đừng kéo bản thân vào It.md # Tìm kiếm trong văn bản chính, có ngữ cảnh
sed -n '/^### 16\. /,/^### 17\. /p' book/08-Đừng kéo mình vào it.md # Vẽ từng thanh một
```

**Đọc toàn bộ mục đã trích xuất**, đặc biệt là trong phần "Nhận xét"—nơi đã ghi rõ đối tượng mục tiêu, tranh cãi và ngoại lệ. Chỉ đọc tiêu đề sẽ loại bỏ các điều kiện. 

Một tác phẩm trông như thế này: 

'''giảm giá
### 5. Thay muối tại nhà bằng muối ít natri (muối kali)
<!-- Nhãn chi phí: Tiền = Ít thời gian hơn = Ít kiên trì hơn = Không có lợi ích = Cỡ trung bình = Tử vong -- >
- Chi phí: Đắt hơn vài nhân dân tệ cho mỗi túi
- Nói thẳng: ...... Xác suất tử vong thấp hơn khoảng 12%...... 
- Lợi ích: Đột quỵ giảm 14%, các sự kiện tim mạch giảm 13%, tỷ lệ tử vong tổng thể giảm 12% 
- Mức độ bằng chứng: A
- Nguồn: Neal B, và cộng sự (2021). NEJM. https://doi.org/10.1056/NEJMoa2105675
- Lưu ý: Tranh cãi. Những người bị suy thận đang dùng thuốc lợi tiểu tiết kiệm kali không nên sử dụng loại này. …… 
```

Dòng bình luận HTML đó là một chi phí để máy phải đọc: tiền 0/ít hơn/nhiều hơn, thời gian ít/trung bình/nhiều hơn, kiên trì không/có/có, lợi ích lớn/trung bình/nhỏ, tỷ lệ tử vong cỡ nòng/tiền/thời gian/tự do. 

## Bước 4: Sắp xếp

Sắp xếp theo thuật toán của cuốn sách, đừng dựa vào trực giác: 

1. Thuật toán cho bánh răng dựa trên 'index.html' trong thư mục gốc của kho lưu trữ. Đừng dựa vào việc ghi nhớ; chỉ cần trích xuất hai dòng đó và tính toán tương ứng: 

   '''bash
   grep -n 'COST_W = \|e\.tỷ lệ = ' index.html
   ```

   Hàng đầu tiên hiển thị trọng số của từng trong ba loại chi phí: điểm chi phí = tiền + thời gian + tổng sự kiên trì; hàng thứ hai cho thấy cách kết hợp quy mô doanh thu với điểm chi phí thành "rất cao / cao / trung bình."
2. Nếu bạn chỉ uốn cong văn bản chính theo file và không có 'index.html' trong tay, đừng liệt kê xếp hạng chi phí-hiệu suất thay vào đó. Thay vào đó, hãy liệt kê mức doanh thu và ba nhãn chi phí như hiện tại, để người dùng tự cân nhắc. 
3. Đầu tiên, dựa trên hiệu quả chi phí, sau đó dựa trên các cấp bằng chứng A > B > C, và cuối cùng là mức độ phù hợp với tình huống của người dùng. 
4. **Không có thứ tự giữa các đường kính khác nhau**. Các vật phẩm riêng biệt để đổi tiền và các vật phẩm trao đổi nhân thọ, mỗi thứ nằm ở một hàng riêng. 
5. "Trung bình" không có nghĩa là bạn không nên làm; chỉ là người dùng phải tự cân nhắc chi phí. Hiệu suất chi phí là đánh giá của tác giả; theo tiêu chuẩn của cuốn sách, nó chỉ được xếp hạng C, khác với mức độ bằng chứng. 

## Bước 5: Cách viết phản hồi này

Sau khi sắp xếp, hãy viết theo cấu trúc sau: 

1. **Kết luận một câu**: Liệu điều này có đáng không? Bạn có nên làm không? Bước đầu tiên là gì? 
2. **Làm các mục này trước** (mục 3 đến 7, theo thứ tự trên). Mỗi mục nên có từ một đến ba dòng: hành động (bắt đầu động từ), đã chi tiêu gì, đổi lấy gì, mức độ bằng chứng, nguồn ghi là "Mục 8, Khoản 17 (Giấy ghi nợ và Bảo đảm)". Các từ trong ngoặc đơn được lấy từ tiêu đề bài viết để người dùng tự dịch. 
3. **Đừng làm / Đừng làm**: Liệt kê những mục được ghi rõ trong sách là không đáng hoặc có bằng chứng trái ngược. 
4. **Những gì không được ghi trong sách**: Hãy thành thật, đừng dùng lẽ thường để truyền đạt nội dung sách. 
5. Nếu cần, thêm điểm kiểm tra lại: khi nào nên nhìn lại, hoặc thay đổi ý định mỗi khi có tín hiệu xuất hiện. 

Khi viết, hãy tuân thủ những điểm sau: 

- **Chỉ rõ ai là người nhận**. Cuốn sách chia người thụ hưởng thành bốn bậc, xếp từ khả năng cao đến thấp nhất để lợi ích trở lại cho bản thân: (1) Bản thân bạn; (2) Vợ/chồng và gia đình gần gũi; (3) Bạn bè, đồng nghiệp và người thân khác; (4) Người lạ. Khi viết về hồ sơ (4) (cứu người lạ, người bảo lãnh, hỗ trợ chuyển giao), bạn cần viết cả rủi ro và lợi ích: bị lừa đảo, tham gia vào vụ án, bị trả thù. Bạn không thể chỉ viết về lợi ích, cũng không nên viết 'chỉ đừng can thiệp.' 
- **Các vấn đề 'hỗ trợ pháp lý cho bạn' phải được thảo luận cùng với chi phí quy trình**. Chỉ nói về kết quả mà không nói về quy trình về cơ bản là coi tỷ lệ thắng kiện là một lợi ích. Bạn cần giải thích có nên ra tòa hay không, mất bao lâu (từ 6 tháng cho thủ tục sơ thẩm thông thường, có thể gia hạn, 3 tháng cho thủ tục tóm tắt), và ai sẽ trả phí luật sư (phí luật sư không bao gồm trong chi phí kiện tụng, và gánh nặng của bên thua không được tính). 
- **Số được sao chép từ mục**, không có con số nào thay đổi. Nếu mục ghi khoảng tin cậy, dân số và năm, hãy giữ chúng cùng nhau; Đối với HR, RR hoặc biểu thức, chỉ cần dịch thành 'thấp khoảng 28%' ngay tại chỗ, và không xóa giá trị gốc. Các số, triệu chứng hoặc cách giải thích cơ chế không có trong bài viết sẽ không được thêm vào. 
- **Thông thường**: Viết sao cho người lớn không có đào tạo chuyên môn có thể đọc một lần. Giải thích các thuật ngữ kỹ thuật bằng ngôn ngữ hàng ngày ngay tại chỗ, và các quy định pháp lý sẽ được trình bày là 'Hậu quả sẽ phát sinh và những gì nên làm.' Phần nguồn được cung cấp nguyên trạng để dễ dàng kiểm tra. 
- **Giọng điệu tiết chế**, không được giảng đạo, không dấu chấm than, tiếng Trung giản thể. Nếu người dùng không làm theo lời khuyên, đó là chuyện của họ, đừng chạy theo lời khuyên. 
- **Chính sách sẽ thay đổi**: Đối với các khoản tiền, thời hạn và danh sách trong các mục 7, 19, 21, 24, 31 và 32, văn bản chính ghi rõ hạn chót, phản hồi bao gồm ngày và nhắc người dùng kiểm tra các kênh chính thức. 
- Đối với các mục được đánh dấu là 'tranh cãi', hãy đề cập cả bằng chứng đối lập; Nếu nó được đánh dấu 'TODO đang chờ xác minh', đừng coi đó là kết luận. 
- Không trích dẫn các nguồn chuyển tiếp qua sử dụng từ Zhihu, tài khoản công khai hoặc Sohu; chỉ cung cấp các liên kết đã liệt kê trong phần 'nguồn' của bài viết. 

## Ranh giới

Cuốn sách này cung cấp các tiêu chuẩn chung và không thay thế bác sĩ, luật sư hay kế toán. Đối với các bệnh tật, trường hợp hoặc thuế cụ thể, hãy theo dõi các mục trong sách để cung cấp hướng dẫn và liên hệ với ai, mà không đưa ra đánh giá cho chuyên gia. Không có lời khuyên đầu tư cá nhân hóa. 

Quan điểm của cuốn sách là của tác giả, và việc phân loại theo hiệu quả chi phí cũng là đánh giá của tác giả. Khi người dùng không đồng ý với một quan điểm, chỉ cần trình bày bằng chứng của cuốn sách là đủ, không cần tranh luận.
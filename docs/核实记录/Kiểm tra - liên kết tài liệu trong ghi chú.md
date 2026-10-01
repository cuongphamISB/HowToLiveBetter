# Khắc phục sự cố: Liên kết tham khảo trong phần ghi chú · Hồ sơ (2026-09-21)

Nguồn nhiệm vụ: Người dùng đọc ghi chú về Mục 2, Điều 1 (Bỏ thuốc lá) trên trang tìm kiếm, chứa một chuỗi thư mục tiếng Anh, nói rằng, 'Tại sao vẫn còn cái này ở đây? Độc giả đều là người Trung Quốc, nên bạn chỉ cần để lại một danh sách dài những điều này.' 

Trước đó, hai mục đã được xử lý trong cùng một ngày (Mục 2, Điều 41 cho ca đêm, Mục 6 cho bữa sáng), nhưng chỉ có hai mục có nhiều liên kết nhất là được sửa chữa, không cần tra cứu sách toàn diện. Vòng bổ sung này. 

## Tiêu chí và Tiêu chuẩn

- **Tất cả tài liệu tham khảo phải được đặt trong phần 'Nguồn', không được ghi chú. ** Tối đa chỉ được để lại một liên kết trong phần nhận xét, và chỉ nên có liên kết đến tài liệu/văn bản dài. 
- Cơ sở: Quy tắc đơn giản của CLAUDE.md ghi rõ '**Ngoại trừ phần nguồn**, số thư mục và số mệnh đề phải được giữ nguyên để kiểm tra'—ngụ ý rằng thư mục tiếng Anh nên nằm trong phần nguồn. Các nhận xét dành cho độc giả tiếng Trung đọc, và nếu bạn chèn một chuỗi tiêu đề và DOI tiếng Anh, bạn sẽ không hiểu và cũng không nên đọc. 
- Lệnh Quét: 'grep -c http' Quét tất cả '- Lưu ý: ' Dòng. 

## Trước và sau điều trị

| | Trước khi xử lý | Sau khi xử lý |
|---|---|---|
| Các mục có liên kết trong chú thích | 19 mục (trong đó 11 là thư mục tiếng Anh hoàn chỉnh được nhúng bằng tiếng Trung) | **0 mục** |
| Số lượng liên kết tối đa trên mỗi nốt nhạc | 3 | 0 |
| Tổng số tài liệu tham khảo trong sách | 1234 | **1234 (không thay đổi)** |

Giữ nguyên tổng số liên kết là hằng số cốt lõi của vòng này: **Thư mục được chuyển từ phần ghi chú sang phần nguồn, không bị xóa**. Khi chuyển sang phần nguồn, hãy thêm một phần đuôi chữ Trung Quốc nhỏ vào mỗi mục để chỉ rõ tuyên bố mà nó ủng hộ (chẳng hạn như "(bên tranh chắc)" hoặc "(thử nghiệm dầu cá kê đơn độ tinh khiết cao trong phần ghi chú)"), để phần nguồn không bị biến thành một chuỗi các tham chiếu với mục đích không rõ ràng. 

## Danh sách kiểm tra từng mục

Mục 1: Điều 20 (vắc-xin cúm Cochrane), Điều 28 (PrEP, Fonner 2016), Điều 29 (Thời gian áp dụng, trang CDC Quảng Đông). 
Mục 2: Điều 1 (khói thuốc thụ động Oberg 2011), Điều 9 (bên tranh chấp muối ít natri PURE), Điều 19 (bên tranh chấp thịt chế biến theo hướng dẫn NutriRECS), Điều 20 (bên tranh chấp uống rượu Di Castelnuovo 2006), Điều 34 (bên tranh chấp BMI Flegal 2013), Điều 41 (ca đêm ung thư hai bài + tiếp xúc ánh sáng bởi Czeisler, đã xử lý trong vòng trước). 
Mục 3: Điều 9 (hai bên tranh chụp: Grubbs 2018, Prause & Pfaus 2015). 
Mục 5: Mục 17 (Các bên tranh chấp quỹ chỉ số Harvey & Liu 2022). 
Mục 6: Quy tắc 1 (Multivitamin Gaziano 2012), Quy tắc 2 (Fish Oil Bhatt 2019 REDUCE-IT), Quy tắc 26 (Bữa sáng thứ ba, đã đề cập trước đó). 
Mục 10: Điều 3 (Perilloux & Kurzban 2015), Điều 6 (Dargie 2015). 
Mục 20: Mục 12 (Thử nghiệm Trẻ sơ sinh Tổng quát EAT, Perkin 2016). 
Mục 29: Điều 4 (Kristensen 2012), Điều 9 (Stroebe 2007). 

## Tiêu đề bổ sung

Ban đầu có năm mục được viết tắt trong ghi chú (chỉ tác giả, năm, tạp chí), và khi chuyển vào phần nguồn, tiêu đề phải được thêm vào. **Không được ghi lại bằng trí nhớ**, truy xuất từng mục bằng Crossref và DOI: 

| DOI | Truy cập tiêu đề |
|---|---|
| 10.1097/QAD.0000000000001145 | Hiệu quả và an toàn của biện pháp phòng ngừa HIV đường uống cho tất cả các nhóm dân cư (AIDS, 2016) |
| 10.1001/jama.2012.14641 | Đa vitamin trong phòng ngừa ung thư ở nam giới (JAMA, 2012) |
| 10.1056/NEJMoa1812792 | Giảm nguy cơ tim mạch với Icosapent Ethyl cho Tăng triglyceride máu (NEJM, 2019) |
| 10.1007/s10508-018-1248-x | Vấn đề khiêu dâm do mâu thuẫn đạo đức: Mô hình tích hợp với tổng quan hệ thống và phân tích tổng hợp (Arch Sex Behaviour, **Crossref ghi năm là 2018, không phải 2019** gốc, và được viết là 2018)|
| 10.1002/sm2.58 | Xem các kích thích tình dục liên quan đến phản ứng tình dục cao hơn, không phải rối loạn cương dương (Y học tình dục, 2015) |

## Xác thực

- Toàn bộ cuốn sách '- Lưu ý:' Số dòng chứa http: **0**. 
- Sau khi xóa dấu ngoặc kép, tôi quét dấu câu và không để lại dấu chấm kép, dấu ngoặc trống, hay dấu "..." cô lập. 
- 'node tools/check-refs.mjs --check': Tất cả các tham chiếu ở điểm 454 đều được trỏ và neo đúng, số không thay đổi. 
- 'sync-stats.ps1': Mục 600, A 404, Link 1234, tám vị trí thống kê không thay đổi.
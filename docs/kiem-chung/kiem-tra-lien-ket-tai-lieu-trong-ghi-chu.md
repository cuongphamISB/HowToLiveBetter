# Rà soát các liên kết tài liệu trong Ghi chú · Hồ sơ (2026-09-21)

Nguồn nhiệm vụ: người dùng đọc ghi chú của chương 2, mục 1 về bỏ thuốc trên trang tra cứu và thấy cả chuỗi thông tin thư mục bằng tiếng Anh. Người dùng hỏi vì sao còn để đoạn ấy khi độc giả đều là người Trung Quốc.

Trước đó cùng ngày đã xử lý hai mục nhiều liên kết nhất: chương 2, mục 41 về làm ca đêm và chương 6, mục 26 về bữa sáng. Tuy nhiên, lần ấy chưa rà toàn sách. Đợt này hoàn tất phần còn thiếu.

## Tiêu chí và cách tính

- Tất cả liên kết nghiên cứu phải nằm trong Nguồn, không đặt trong Ghi chú. Ghi chú chỉ được giữ tối đa một liên kết tương đối dẫn đến bài dài trong docs/.
- Quy tắc viết dễ hiểu của CLAUDE.md đã nói rõ rằng Nguồn là ngoại lệ: phải giữ thông tin thư mục và số điều luật để đối chiếu. Vì vậy, thông tin thư mục tiếng Anh thuộc về Nguồn. Ghi chú là phần tiếng Trung viết cho độc giả Trung Quốc; chuỗi tên bài tiếng Anh và DOI ở đó không giúp họ hiểu nội dung.
- Lệnh rà soát là `grep -c http`, áp dụng cho tất cả dòng Ghi chú trong sách.

## Trước và sau khi xử lý

| Chỉ tiêu | Trước | Sau |
|---|---|---|
| Số mục có liên kết trong Ghi chú | 19 mục, trong đó 11 mục chen cả chuỗi thư mục tiếng Anh vào văn bản tiếng Trung | **0 mục** |
| Số liên kết nhiều nhất trong một Ghi chú | 3 | 0 |
| Tổng liên kết nghiên cứu của sách | 1234 | **1234, không đổi** |

Tổng số liên kết không đổi là điều cần giữ trong đợt này: chuyển thông tin thư mục từ Ghi chú sang Nguồn, không xóa tài liệu. Khi chuyển, thêm lời giải thích bằng tiếng Trung sau mỗi tài liệu để chỉ rõ nó hỗ trợ nhận định nào, chẳng hạn nguồn của phía có kết quả trái chiều hoặc thử nghiệm về dầu cá kê đơn có độ tinh khiết cao được nhắc trong ghi chú. Nhờ vậy Nguồn không chỉ là một chuỗi thư mục khó nhận ra mục đích.

## Danh sách từng mục

Chương 1: mục 20, vắc-xin cúm và Cochrane; mục 28, PrEP và Fonner 2016; mục 29, thời kỳ cửa sổ và trang của cơ quan kiểm soát bệnh tật Quảng Đông.

Chương 2: mục 1, khói thuốc thụ động và Oberg 2011; mục 9, muối ít natri và nghiên cứu PURE có kết quả trái chiều; mục 19, thịt chế biến và hướng dẫn NutriRECS có kết luận trái chiều; mục 20, uống rượu và Di Castelnuovo 2006; mục 34, BMI và Flegal 2013; mục 41, hai bài về ung thư khi làm ca đêm và bài Czeisler về ánh sáng, đã xử lý ở đợt trước.

Chương 3: mục 9, hai tài liệu có kết quả trái chiều của Grubbs 2018 và Prause & Pfaus 2015.

Chương 5: mục 17, quỹ chỉ số và tài liệu có kết quả trái chiều của Harvey & Liu 2022.

Chương 6: mục 1, vitamin tổng hợp và Gaziano 2012; mục 2, dầu cá và thử nghiệm REDUCE-IT của Bhatt 2019; mục 26, ba bài về bữa sáng, đã xử lý ở đợt trước.

Chương 10: mục 3, Perilloux & Kurzban 2015; mục 6, Dargie 2015.

Chương 20: mục 12, thử nghiệm EAT ở trẻ sơ sinh nói chung của Perkin 2016.

Chương 29: mục 4, Kristensen 2012; mục 9, Stroebe 2007.

## Bổ sung tên bài

Có 5 tài liệu trước đó được viết tắt trong Ghi chú, chỉ ghi tác giả, năm và tạp chí. Khi đưa vào Nguồn phải bổ sung tên bài. Không viết theo trí nhớ: từng tên bài được lấy từ Crossref theo DOI.

| DOI | Tên bài lấy được |
|---|---|
| 10.1097/QAD.0000000000001145 | Effectiveness and safety of oral HIV preexposure prophylaxis for all populations (AIDS, 2016). |
| 10.1001/jama.2012.14641 | Multivitamins in the Prevention of Cancer in Men (JAMA, 2012). |
| 10.1056/NEJMoa1812792 | Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (NEJM, 2019). |
| 10.1007/s10508-018-1248-x | Pornography Problems Due to Moral Incongruence: An Integrative Model with a Systematic Review and Meta-Analysis (Arch Sex Behav). **Crossref ghi năm 2018, không phải 2019 như bản trước; đã sửa thành 2018.** |
| 10.1002/sm2.58 | Viewing Sexual Stimuli Associated with Greater Sexual Responsiveness, Not Erectile Dysfunction (Sexual Medicine, 2015). |

## Kiểm tra

- Số dòng Ghi chú chứa http trong toàn sách là **0**.
- Đã rà dấu câu sau khi chuyển trích dẫn; không để lại hai dấu chấm liên tiếp, ngoặc rỗng hay dấu chấm đứng riêng.
- `node tools/check-refs.mjs --check` xác nhận toàn bộ 454 tham chiếu trỏ đúng đích và có neo; số tham chiếu không đổi.
- `sync-stats.ps1` ghi 600 mục, 404 mục A và 1234 liên kết; cả tám vị trí thống kê đều giữ nguyên.

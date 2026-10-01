# Chương 32: du học, tình trạng cư trú, làm thêm, bảo hiểm và công nhận bằng khi về nước · Hồ sơ kiểm chứng (2026-09-18)

Nguồn nhiệm vụ: issue #8 hỏi lời khuyên cho du học sinh ở các nước phổ biến như Mỹ, Canada, Anh, Australia, họ có quyền gì và bảo vệ thế nào.

Chương 21 đã nói đi nước ngoài và an toàn, gồm cảnh báo Bộ Ngoại giao, 12308, giới hạn bảo hộ lãnh sự, bảo hiểm y tế và vận chuyển, bẫy tuyển lương cao, nhưng chưa nói tình trạng du học sinh và học tập. Chương 23 nói lợi ích bằng cấp, chưa nói công nhận bằng nước ngoài. Vì vậy mở chương riêng, có chỉ dẫn qua lại để tránh lặp.

Thêm tệp chương 32 về du học gồm 10 mục. Theo câu hỏi, chỉ bao quát Mỹ, Canada, Anh, Australia và ghi số theo từng nước. **Mọi số chính sách nước ngoài chốt đến tháng 9-2026; đầu chương và nội dung đều yêu cầu độc giả tự kiểm tra link nguồn, không duy trì cập nhật dài hạn.**

Curl trên máy gặp lỗi phân đoạn; Invoke-WebRequest hết thời gian hoặc mất kết nối với canada.ca và cscse.edu.cn. Đổi sang Chrome không giao diện `--dump-dom` để lấy DOM sau dựng trang; jsj.moe.gov.cn và immi.homeaffairs.gov.au bắt buộc dùng cách này. Ngày 2026-09-18 kiểm tra từng 17 link ngoài, tất cả trả 200 trừ canada.ca. PowerShell không lấy được Canada nhưng Chrome lấy toàn văn, đã đối chiếu từng chữ.

## Mục 1: danh sách trường được công nhận

| URL | Đã kiểm chứng | Căn cứ |
|---|---|---|
| <http://yxcx.cscse.edu.cn/>, cổng tra trường được công nhận của Trung tâm Dịch vụ du học, lấy từ neo trang chủ cscse.edu.cn | Có. | Tra theo quốc gia, tên trường. |
| <https://jsj.moe.gov.cn/>, trang giám sát giáo dục có yếu tố nước ngoài của Bộ Giáo dục Trung Quốc | Có. | Có chính sách, cảnh báo và hợp tác đào tạo. |
| <http://rzzccx.crs.jsj.edu.cn/>, tra đăng ký công nhận bằng của chương trình hợp tác Trung Quốc–nước ngoài | Có. | Người nhập học từ 2008 có thể dùng tên, số căn cước để tra số đăng ký công nhận bằng nước ngoài. |

A: cổng tra và quy trình có thể đối chiếu nguyên văn trang chính thức. Lợi ích lớn theo tiền, vì học phí và một, hai năm vượt xa hàng vạn CNY. Khuyên danh sách thay đổi nên kiểm tra mỗi năm là lời thao tác, không phải văn bản gốc.

## Mục 2: thời hạn nhập cảnh cố định tại Mỹ và 30 ngày chuẩn bị rời đi

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2>, 8 CFR 214.2(f) trên eCFR | Có. | F-1 hoàn thành học và thực tập được phép có thêm 30 ngày chuẩn bị rời đi hoặc tìm tình trạng hợp pháp khác, tính từ ngày chương trình kết thúc, hạn nhập cảnh tối đa bốn năm hoặc hết OPT/STEM OPT. Kết thúc sớm học hay đào tạo phải rời đi hoặc tìm tình trạng khác trong 30 ngày. |
| <https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant>, quy tắc cuối cùng của Công báo Liên bang | Có. | API xác nhận publication_date 2026-07-17 và effective_on 2026-09-15. |

**Đính chính 2026-09-25, issue #32:** quy tắc **không** có hiệu lực ngày 2026-09-15. Ngày 2026-09-14, thẩm phán Saylor, tòa liên bang Massachusetts, trong Presidents' Alliance on Higher Education and Immigration v. DHS, No. 1:26-cv-13799-FDS, hoãn hiệu lực toàn quy tắc theo 5 U.S.C. § 705 trên cả nước. Yêu cầu hủy quy tắc và phán quyết rút gọn bị bác nhưng được nộp lại. Mục đã đổi thành quy tắc mới bị hoãn, hiện vẫn D/S và 60 ngày ân hạn.

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule>, Văn phòng Sinh viên, Học giả quốc tế Yale, 2026-09-14 | Có. | Tòa ra lệnh tạm ngăn DHS thực thi; D/S vẫn giữ, hiện không cần xin gia hạn lưu trú, chính quyền có thể kháng cáo. |
| <https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule>, Hiệp hội Luật sư di trú Mỹ | Có. | Biện pháp áp dụng toàn quốc, toàn quy tắc; chỉ hoãn, không hủy. Vẫn 60 ngày ân hạn, không có yêu cầu I-539 mới. Bác yêu cầu hủy và phán quyết rút gọn nhưng cho nộp lại; chính phủ có thể xin xem xét ở tòa phúc thẩm Khu vực Một. |
| <https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/>, hồ sơ tòa | Có. | Văn bản 50 ngày 2026-09-14 chấp nhận hoãn hiệu lực theo §705, bác yêu cầu hủy, phán quyết rút gọn hoặc biện pháp khác nhưng cho nộp lại. Văn bản 51 cùng ngày là lệnh tạm hoãn hiệu lực. Thông báo cùng ngày hẹn họp tình trạng vụ án 2026-10-02 lúc 12:00. Truy cập trực tiếp 403, proxy địa phương lấy được. |

Giữ giải thích phân cấp ban đầu dưới đây làm lịch sử; câu đã thay thế từ 2026-09-15 không còn đúng.

Phân cấp ban đầu A vì luật, ngày hiệu lực đối chiếu được. Đây được coi là cập nhật quan trọng nhất: eCFR ghi 30 ngày, trong khi 60 ngày và D/S học đến tốt nghiệp là chế độ cũ, được cho là thay thế từ 2026-09-15, chỉ ba ngày trước viết hồ sơ. Lợi ích lớn theo tự do, hậu quả cư trú trái phép và trục xuất được xếp tương tự tránh trách nhiệm hình sự. Thủ tục gia hạn ở (f)(7), nội dung chỉ dẫn chứ không mở rộng.

## Mục 3: giờ làm thêm ở bốn nước

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2>, 8 CFR 214.2(f)(9) | Có. | Làm trong trường và làm ngoài trường bán thời gian được duyệt tối đa 20 giờ/tuần khi học; nghỉ có thể toàn thời gian. |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student>, phụ lục Student, ST26.1 | Có. | Bậc bằng đại học trở lên với bên bảo trợ đúng chuẩn được 20 giờ/tuần trong kỳ; dưới bậc này 10 giờ; trường hợp còn lại, gồm mọi khóa bán thời gian, không được làm. ST26.5 cấm tự doanh, vận động viên, huấn luyện viên chuyên nghiệp và biểu diễn. |
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html>, IRCC | Có. | Tối đa 24 giờ/tuần; giấy phép cũ ghi 20 vẫn được 24 nếu đủ điều kiện, căn cứ IRPR 186(v). |
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500>, Bộ Nội vụ Australia, visa 500 | Có. | 48 giờ mỗi hai tuần khi học hoặc đào tạo. Thạc sĩ nghiên cứu, tiến sĩ và gia đình không giới hạn giờ. |

A vì nguồn cơ quan di trú hiện hành hoặc luật thành văn. Lợi ích lớn theo tự do: quá giờ vi phạm visa, có thể bị hủy và trục xuất.

## Mục 4: đang học toàn thời gian là điều kiện làm thêm

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> | Có. | Không làm ngoài trường khi nghỉ học được duyệt hoặc chuyển trường mà chưa học; chỉ làm lại sau tiếp tục học. |
| <https://studyinthestates.dhs.gov/students/work/working-in-the-united-states>, DHS | Có. | Làm trong trường chỉ cho F-1 có trạng thái Active trong SEVIS; làm ngoài trường phải được duyệt, không bắt đầu khi I-765 đang xét. |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student>, ST26.1 | Có. | Quyền làm phụ thuộc khóa học; bán thời gian không được làm. |

A; trang Canada rõ nhất, Mỹ, Anh hỗ trợ theo luật riêng. Lợi ích lớn với lý do như mục 3.

## Mục 5: báo đổi địa chỉ ở Mỹ trong 10 ngày

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1> | Có. | Người có nghĩa vụ đăng ký phải báo đổi và địa chỉ mới theo USCIS trong 10 ngày. |
| <https://www.uscis.gov/ar-11> | Có. | Trang mẫu AR-11 yêu cầu báo sớm để tránh văn thư gửi sai. |

A, hạn 10 ngày ghi rõ. Lợi ích vừa theo tránh phạt hành chính; nhận sai văn thư chủ yếu gây bất lợi thủ tục, chưa đến trách nhiệm hình sự.

## Mục 6: cảnh báo du học của Bộ Giáo dục Trung Quốc

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://jsj.moe.gov.cn/n2/2/2/2001.shtml> | Có. | Số 1/2025, 2025-04-09, luật giáo dục đại học một số bang Mỹ có điều khoản bất lợi liên quan Trung Quốc. |
| <https://jsj.moe.gov.cn/n2/2/2/2030.shtml> | Có. | Số 2, 2025-07-18, an ninh Philippines bất ổn, nhiều tội phạm nhắm công dân Trung Quốc. |
| <https://jsj.moe.gov.cn/n2/2/2/2035.shtml> | Có. | Số 3, 2025-08-30, cảnh báo Philippines lần nữa. |
| <https://jsj.moe.gov.cn/n2/2/2/2060.shtml> | Có. | Số 4, 2025-11-16, tình hình an ninh, môi trường du học Nhật không tốt, khuyên cân nhắc thận trọng. |

A, đã kiểm số, ngày, quốc gia từng cảnh báo. Nguồn trong sách chỉ ghi số 4, 1 và trang chủ để tránh dài. Lợi ích vừa vì cảnh báo không phải cấm, không có hậu quả định lượng trực tiếp. **Danh sách thay đổi theo tình hình, không duy trì lâu dài theo cùng thông lệ chương 21 trong CLAUDE.md.**

## Mục 7: OSHC Australia

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> | Có. | Phải có và duy trì OSHC suốt thời gian, trừ miễn; không có khoảng trống với bảo hiểm visa trước. Không chứng minh đã mua khi nhập cảnh có thể bị từ chối. Đến trước khóa thì bảo hiểm phải bắt đầu từ ngày tới Australia. |

A, lợi ích vừa theo tiền. Phí hàng nghìn đến trên vạn CNY nằm giữa mức vừa và lớn nên chọn vừa. Chi phí tiền=cao do trả một lần theo thời gian visa.

## Mục 8: phí visa và phụ phí y tế Anh

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.gov.uk/student-visa> | Có. | Xin từ ngoài Anh hoặc gia hạn, chuyển trong Anh đều £558. Từ 18 tuổi học bằng đại học trở lên thường ở tối đa 5 năm; bậc dưới 2 năm. |
| <https://www.gov.uk/healthcare-immigration-application> | Có. | Sinh viên, gia đình £776/năm, visa hai năm £1552; người khác £1035/năm. Trên sáu tháng dưới một năm tính trọn năm. |

A, số lấy đúng trang gov.uk lúc viết. Lợi ích vừa theo tiền, tổng hai khoản ở mức hàng nghìn CNY. Không quy đổi chính xác, chỉ ghi theo tỷ giá hiện tại khoảng hơn một vạn CNY để tránh số lỗi do tỷ giá.

## Mục 9: thời hạn công nhận của Trung tâm Dịch vụ du học

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <http://zwfw.cscse.edu.cn/>, cổng dịch vụ trực tuyến | Có. | Đăng ký, xác thực danh tính, nộp đơn và hồ sơ, thanh toán online, đánh giá, xét duyệt. Thời hạn 10–20 ngày làm việc. Hồ sơ gồm bằng, hộ chiếu hoặc giấy thông hành, thẻ cư trú hoặc visa, ảnh giấy tờ, tuyên bố ủy quyền; hệ thống lấy lịch sử xuất nhập cảnh. |

A vì hạn và hồ sơ ghi rõ. Lợi ích vừa theo thời gian là đánh giá: giảm nguy cơ lỡ hạn, không phải tiết kiệm mỗi ngày. Một lần lẽ ra nhỏ nhưng lỡ tuyển mùa thu hoặc thi công chức có ảnh hưởng cả đợt, nên chọn vừa, ghi rõ đây không áp ngưỡng máy móc theo CLAUDE.md.

## Mục 10: danh sách tăng cường xét công nhận

| URL | Đã kiểm chứng | Nội dung |
|---|---|---|
| <https://www.cscse.edu.cn/cscse/sy/tzgg/2025102809225023345/index.html> | Có. | Thông báo tăng cường xét công nhận bằng của một số trường nước ngoài, kỳ chín, công bố 2025-10-28. |
| <https://www.cscse.edu.cn/> | Có. | Mục thông báo có cảnh giác lừa đảo mượn công nhận bằng nước ngoài, xử lý một số giấy công nhận mất hiệu lực và tạm dừng nhận đơn công nhận bằng Đại học Phitsanulok Thái Lan. |

A vì đối chiếu được tên, kỳ, ngày. Lợi ích vừa theo tiền: công nhận bị cản hoặc chậm chưa chắc mất toàn học phí. Không nêu trường cụ thể ngoài tên đã công khai trong thông báo, tránh sai khi danh sách đổi.

## Nội dung chưa viết

- Chưa lấy được nguồn chính thức về nghĩa vụ thuế từng nước, như F-1 Mỹ không thu nhập vẫn nộp mẫu, nên không thêm.
- Hạn báo địa chỉ Canada, Anh, Australia khác nhau, chưa lấy nguyên văn từng nước; mục 5 chỉ Mỹ và nhắc ba nước còn lại theo quy định riêng.
- Không viết thủ tục cứu vãn khi visa bị từ chối hoặc tình trạng mất hiệu lực, như reinstatement Mỹ, vì chuyên biệt, vượt mục tiêu thông tin không biết sẽ thiệt.
- Nhật, New Zealand, Singapore và nơi khác ngoài phạm vi câu hỏi, không đưa vào.

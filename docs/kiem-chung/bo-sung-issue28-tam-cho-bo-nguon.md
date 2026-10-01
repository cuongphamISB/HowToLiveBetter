# Issue #28: bổ sung nguồn cho tám mục (2026-09-23)

Nguồn nhiệm vụ: GitHub issue #28 của dlgrv đề nghị nguồn gốc cho tám mục ghi kinh nghiệm tác giả, chưa kiểm chứng hoặc TODO, mỗi mục kèm trích dẫn và link. Trích dẫn issue chỉ là manh mối; mọi dòng dưới được tự lấy nguyên văn và đối chiếu từng chữ.

## Đối chiếu và xử lý từng nguồn

| Mục | Nguồn | Kiểm chứng | Nội dung nguyên văn | Xử lý |
|---|---|---|---|---|
| Chương 13, mục 18, điện giật | <https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html> | Có; curl trả 403, Chrome không giao diện lấy được. | Phần sơ cứu yêu cầu nhìn trước, không chạm vì người có thể còn tiếp xúc điện; tắt nguồn nếu được, nếu không thì dùng vật không dẫn điện bằng bìa, nhựa, gỗ chuyển nguồn ra xa mình và người bị nạn. Nếu nhịp thở hoặc mạch ngừng, chậm nguy hiểm hay nông thì hồi sức tim phổi ngay. | Tiếp nhận. |
| Cùng mục | <https://doi.org/10.7326/0003-4819-145-7-200610030-00011>, Spies & Trohman 2006 | Có, tóm tắt Europe PMC. | Người hồi sức thành công sau ngừng tim phổi thường có tiên lượng tốt. | Tiếp nhận. |
| Cùng mục | Moran 1986, JAMA, 10.1001/jama.1986.03370160055007 | Không. | Europe PMC không có tóm tắt, không đối chiếu được nội dung. | Không dùng. |
| Cùng mục | ERC 2021 về ngừng tim trong hoàn cảnh đặc biệt, 10.1016/j.resuscitation.2021.02.011 | Có, tóm tắt. | Danh sách nguyên nhân, hoàn cảnh và nhóm người đặc biệt trong tóm tắt không có điện giật; issue nói bản 2021 không có chương điện giật là đúng. | Xóa khỏi Nguồn vì mô tả cũ rằng có chương điện giật là sai. |
| Chương 20, mục 9, không rung lắc trẻ | <https://doi.org/10.15585/mmwr.mm6520a1>, MMWR 2016 | Có, tóm tắt. | Trong giai đoạn nghiên cứu, chấn thương đầu do ngược đãi gây gần 2250 ca chết ở trẻ cư trú tại Mỹ dưới 5 tuổi. | Tiếp nhận. |
| Cùng mục | <https://doi.org/10.1007/s00247-018-4149-1>, đồng thuận Choudhary 2018 | Có, tóm tắt. | Chấn thương đầu do ngược đãi là nguyên nhân hàng đầu của chấn thương đầu tử vong dưới 2 tuổi; nhiều tác nhân như rung lắc, rung lắc kèm va đập, va đập; có tụ máu dưới màng cứng và xuất huyết võng mạc phức tạp. | Tiếp nhận. |
| Cùng mục | Bản AAP tán thành, 10.1542/peds.2018-1504 | Chưa kiểm chứng. | Chỉ là tán thành cùng nội dung đồng thuận, không thêm riêng. | Không dùng. |
| Chương 13, mục 27, nơi hoang vắng | <https://www.nps.gov/articles/000/desertdrivingsafety.htm> | Có, curl trực tiếp. | Ở lại với xe là việc quan trọng nhất khi khẩn cấp; tuy không thường xảy ra, đã có người chết vì phơi mình ngoài môi trường khi cố đi bộ về đường trải nhựa. | Tiếp nhận, giữ cấp. |
| Chương 4, mục 15, giới hạn lướt màn hình | PDF báo cáo CNNIC lần 56 | Có, pdftotext trích được từng chữ tiếng Trung. | Dòng 821: đến tháng 6-2025, người dùng Internet Trung Quốc trung bình 30,6 giờ mỗi tuần, tăng 1,9 giờ so với tháng 12-2024. Dòng 94: người dùng video ngắn 1,068 tỷ, bằng 95,1% người dùng Internet. | Tiếp nhận, bỏ TODO. |
| Chương 5, mục 17, quỹ chỉ số | SPIVA U.S. Scorecard Year-End 2024 | Có; trang chính thức trả 403, Chrome bị từ chối, dùng bản Wayback 2025-05-12. | 65% quỹ cổ phiếu vốn hóa lớn Mỹ quản lý chủ động kém S&P 500, so với 60% năm 2023 và trung bình năm 64% trong lịch sử 24 năm. Trong 15 năm kết thúc tháng 12-2024, không nhóm nào có đa số nhà quản lý chủ động vượt chỉ số. | Tiếp nhận, bỏ TODO. Mục thiếu số dài hạn nên thêm trung bình 24 năm và kết luận 15 năm ngoài số một năm 65% của issue. |
| Cùng mục | PDF SPIVA Institutional Scorecard Year-End 2024 | Không sử dụng. | Nói tài khoản tổ chức và wrap, người đọc thường không mua được sản phẩm này. | Không dùng. |
| Chương 14, mục 2, mật khẩu email | <https://www.cisa.gov/secure-our-world/use-strong-passwords> | Có, curl trực tiếp. | Dùng trình quản lý mật khẩu tạo mật khẩu dài, ngẫu nhiên, riêng biệt; ít nhất 16 ký tự, dài hơn mạnh hơn; mỗi tài khoản dùng một mật khẩu mạnh khác. | Tiếp nhận, giữ cấp. |
| Chương 14, mục 3, PIN SIM | FCC DOC-398483A1, thông cáo 2023-11-15 | Có, pdftotext. | Yêu cầu nhà mạng xác minh trước chuyển số, đổi SIM, nhằm chống kẻ chưa từng có quyền kiểm soát điện thoại vật lý. | **Không dùng:** mục sách phòng mất điện thoại rồi SIM bị rút cắm máy khác, tức kẻ xấu đã có thẻ vật lý; hai tình huống khác nhau. |
| Chương 14, mục 4, mất điện thoại | <https://www.fcc.gov/consumers/guides/protect-your-mobile-device> | Có; curl 403, Chrome lấy được. | Dù nghĩ chỉ thất lạc vẫn nên khóa từ xa; bị trộm thì báo công an ngay kèm hãng, mẫu, số serial và IMEI/MEID/ESN; báo mất hoặc trộm ngay cho nhà mạng. | Tiếp nhận. Thứ tự bước vẫn là kinh nghiệm tác giả, ghi rõ trong Nguồn. |

## Phân cấp

Chỉ hai mục đổi cấp: chương 13, mục 18 và chương 20, mục 9 đều C → B. Mỗi mục hiện có hướng dẫn chính thức hoặc đồng thuận chuyên môn và một nghiên cứu hỗ trợ, nhưng chưa có số đổi trực tiếp thành mức giảm tử vong khi thực hiện, nên xếp B.

Những mục còn lại giữ cấp. Hướng dẫn thao tác của NPS, CISA, FCC không phải nghiên cứu nên theo thông lệ vẫn C; chương 13, mục 27 vốn đã được xử lý như vậy. Hai mục chương 4, 5 chỉ bỏ TODO và thêm số, không đổi cấp.

## Những đề nghị không làm theo

- Bản dịch không được nhập vào kho nguyên bản theo CLAUDE.md; đợt này chỉ xử lý đề nghị nguồn cho nội dung tiếng Trung.
- Issue đề nghị có thể mở PR trực tiếp. Nội dung đã sửa ở máy nên không cần PR.

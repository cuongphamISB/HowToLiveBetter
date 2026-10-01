# Bổ sung chương 11: kiểm thử bảo mật chưa được phép và báo cáo lỗ hổng (19/09/2026)

Người dùng chỉ ra thiếu nội dung về chuyên gia bảo mật mũ trắng, nêu vụ Thế Kỷ Giai Duyên năm 2016 của Viên Vĩ. Người này kiểm thử web, lấy một phần dữ liệu để chứng minh, gửi nền tảng lỗ hổng bên thứ ba; doanh nghiệp ban đầu xác nhận, cảm ơn rồi báo công an. Anh bị tạm giam, phê chuẩn bắt vì nghi lấy dữ liệu hệ thống máy tính trái phép, giữ vài tháng rồi thả, cuối cùng không bị kết án.

Chương 11, mục 4 nói thu thập dữ liệu tự động vượt bảo vệ và bán dữ liệu, mục 8 nói điều khiển trái phép thiết bị để đào tiền số hoặc điều khiển camera, điện thoại. Cả hai dẫn khoản 2 Điều 285 Bộ luật Hình sự và Điều 1 giải thích số 19 năm 2011, nhưng chưa bao phủ kiểm thử không được phép, vai trò thiện chí, không thu lợi, báo cáo sau đó, hay cách xử lý hợp pháp khi thấy lỗ hổng. Sách chưa nói Quy định quản lý lỗ hổng an toàn sản phẩm mạng.

Thêm chương 11, mục 9 và 10, chuyển 9–15 cũ thành 11–17. Tham chiếu tại dòng 32 book/09 đổi chương 11 mục 9→11; dòng 103 book/26 đổi mục 14→16. Sửa thêm nhãn chưa kiểm chứng còn sót ở nguồn mục 8.

Dùng WebSearch, WebFetch. Công báo Tòa án nhân dân tối cao hai lần trả 502; giải thích số 19 năm 2011 được đối chiếu chéo bản Công an Thâm Quyến đã dùng trong chương với bản Công an Quảng Đông, số khớp.

## Mục 9: Không kiểm thử bảo mật khi chưa được phép

| URL | Kiểm tra lại | Nội dung gốc |
|---|---|---|
| <https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/fl/11033925/index.html>, Bộ luật Hình sự hợp nhất do Công an giao thông Bắc Kinh đăng lại, chương đã dùng | Có | Khoản 1 Điều 285 về xâm nhập hệ thống trong lĩnh vực quốc gia, quốc phòng, khoa học kỹ thuật tiên tiến. Khoản 2 về xâm nhập hệ thống ngoài nhóm đó hoặc dùng phương tiện kỹ thuật khác lấy dữ liệu: nghiêm trọng tối đa 3 năm, đặc biệt nghiêm trọng 3–7 năm. |
| <https://ga.sz.gov.cn/ZWGK/ZCFG/ZCJD/content/post_1304363.html>, giải thích số 19 năm 2011, Công an Thâm Quyến đăng lại | Có | Điều 1 xác định nghiêm trọng khi có ít nhất 10 bộ xác thực dịch vụ tài chính, 500 bộ xác thực khác, điều khiển trái phép 20 hệ thống, thu lợi 5.000 CNY hoặc thiệt hại 10.000 CNY. Đặc biệt nghiêm trọng từ 5 lần các chuẩn đó. |
| <https://www.spp.gov.cn/spp/jczdal/201710/t20171017_202593.shtml>, nhóm án hướng dẫn thứ chín của Viện kiểm sát nhân dân tối cao | Có | Án hướng dẫn 36, Vệ Mộng Long, Cung Húc, Tiết Đông Đông: dùng tài khoản, mật khẩu vượt phạm vi cho phép để đăng nhập là xâm nhập hệ thống. Cung cung cấp tài khoản, mật khẩu, Token từ công việc; Vệ đăng nhập từ xa hệ thống quản lý phát triển nội bộ, tải dữ liệu ngoài công việc, giao Tiết bán mạng, thu lợi 37.000 CNY. Vệ 4 năm tù, phạt 40.000 CNY; Cung 3 năm 9 tháng, phạt 40.000 CNY; Tiết 4 năm, phạt 40.000 CNY. |

Xếp A vì ngưỡng hình sự và hình phạt đối chiếu từng chữ, vụ là án hướng dẫn. Lợi ích lớn theo tự do vì tránh trách nhiệm hình sự.

**Không đưa vụ Thế Kỷ Giai Duyên vào sách.** Vụ không tới bản án, không có thông báo hoặc văn bản đối chiếu từng chữ trên cơ sở bản án, Tòa án nhân dân tối cao hay Viện kiểm sát nhân dân tối cao. Thông tin lúc đó đều từ báo chí, nên theo quy tắc không dùng kể lại, không trích; giống xử lý vụ sạc điện miễn phí của hãng xe ở chương 9 và án vượt chặn mạng chương 11, mục 11. Sách chỉ viết luật, chuẩn phạt và ghi chú chưa tìm thấy án kiểm thử thiện chí chính thức đối chiếu được.

Ghi chú giới hạn án 36: đây là bán dữ liệu thu lợi, chỉ dùng cho nguyên tắc vượt phạm vi cho phép là xâm nhập, không suy mức án cho kiểm thử thiện chí. Nhận định động cơ và báo cáo sau không tự loại trừ tội là phân tích yếu tố cấu thành vì khoản 2 Điều 285 không có điều kiện mục đích, không phải kết luận vụ hay lời chính thức.

## Mục 10: Báo cáo lỗ hổng và giới hạn công bố

| URL | Kiểm tra lại | Nội dung gốc |
|---|---|---|
| <https://www.gov.cn/gongbao/content/2021/content_5641351.htm>, Công báo Quốc vụ viện, văn bản 66 năm 2021 của Bộ Công nghiệp và Công nghệ thông tin | Có | Điều 2 áp dụng cả tổ chức, cá nhân phát hiện, thu thập, công bố lỗ hổng. Điều 4 cấm dùng lỗ hổng gây hại an ninh mạng, thu thập, bán, công bố trái phép. Điều 9 có năm yêu cầu: không công bố trước biện pháp sửa, không công bố chi tiết lỗ hổng hệ thống đang dùng, không phóng đại hoặc khai thác ác ý để lừa, không công bố hay cung cấp công cụ chuyên khai thác lỗ hổng, khi công bố phải kèm sửa hoặc phòng. Cấm cung cấp lỗ hổng chưa công khai cho tổ chức, cá nhân nước ngoài ngoài nhà cung cấp sản phẩm. Điều 10 khuyến khích báo nền tảng chia sẻ đe dọa, lỗ hổng của Bộ, nền tảng của Trung tâm thông báo an ninh mạng và thông tin quốc gia, Trung tâm điều phối ứng cứu kỹ thuật mạng quốc gia và cơ sở lỗ hổng của Trung tâm đánh giá an toàn thông tin Trung Quốc. Điều 14 giao Bộ và Công an xử theo nhiệm vụ; thuộc Luật An ninh mạng thì theo luật. Hiệu lực 01/09/2021. |
| <https://wap.miit.gov.cn/jgsj/waj/wjfb/art/2021/art_96c2d3de7a6f400ea1d8522b7893db7a.html>, bản của Bộ, đối chiếu Điều 2, 4, 11–14 | Có | Khớp Công báo. |
| <https://www.cac.gov.cn/2025-12/29/c_1768735112911946.htm>, Luật An ninh mạng sửa 2025 | Có | Điều 28 yêu cầu chứng nhận, kiểm thử, đánh giá rủi ro, công bố lỗ hổng, virus, tấn công, xâm nhập tuân quy định nhà nước. Điều 65 yêu cầu sửa, cảnh cáo, có thể phạt 10.000–100.000 CNY; không sửa hoặc nghiêm trọng phạt 100.000–1 triệu CNY, có thể đình chỉ kinh doanh, đóng web hoặc ứng dụng, thu hồi giấy phép hoặc đăng ký kinh doanh; người quản lý trực tiếp và người chịu trách nhiệm phạt 10.000–100.000 CNY. |

Xếp A vì quy tắc và tiền phạt đối chiếu được; lợi ích vừa theo tự do vì tránh hành chính. Trách nhiệm hình sự nằm mục trước. Nguồn đã nói Điều 14 quy định lỗ hổng dẫn Điều 62 Luật An ninh mạng bản 2016, quy định chưa cập nhật; hiện tương ứng Điều 65.

## Sửa kèm nhãn chưa kiểm chứng ở nguồn mục 8

Nguồn cũ nói cấm hành nghề suốt đời là khoản 2 Điều 63 bản 2016, chưa kiểm từng số sau sửa. Lần này đã đối chiếu:

| Nội dung | Bản 2016 | Bản sửa 2025 |
|---|---|---|
| Cấm xâm nhập mạng, cản hoạt động và lấy dữ liệu trái phép | Điều 27 | Điều 29 |
| Phạt hành vi trên: tịch thu thu lợi, tạm giữ tối đa 5 ngày và phạt 50.000–500.000 CNY; nặng hơn tạm giữ 5–15 ngày, phạt 100.000–1 triệu CNY | Khoản 1 Điều 63 | Khoản 1 Điều 66 |
| Phạt tổ chức có hành vi trên | — | Khoản 2 Điều 66 |
| Cấm vị trí quản lý an ninh mạng và vận hành mạng then chốt: 5 năm sau xử phạt hành chính, suốt đời sau hình sự | Khoản 2 Điều 63 | **Khoản 3 Điều 66** |
| Chứng nhận, kiểm thử và công bố lỗ hổng phải tuân quy định | Điều 26 | Điều 28 |
| Phạt hành vi ngay trên | Điều 62 | Điều 65 |

Nguồn đổi thành Điều 29, 66; bản 2016 là 27, 63; cấm suốt đời là khoản 3 Điều 66 sau sửa, xóa chưa kiểm chứng từng Điều.

Trích Điều 65 bản sửa không có từ tịch thu thu lợi bất hợp pháp nên sách theo bản mới, không dùng lại câu cũ. Các chỗ khác dẫn Luật An ninh mạng như dòng 67 book/26 về danh tính, chương 11, mục 16 về lưu nhật ký, và bài giấy phép nền tảng đã dùng số mới trước đó, đợt này không sửa.

# Chương 28 “Đừng hại sức khỏe vì ngoại hình” · Hồ sơ kiểm chứng (2026-09-08)

Độc giả yêu cầu viết về việc không chạy theo trào lưu, không nhịn ăn giảm cân vì thấy mình xấu, không tùy tiện phẫu thuật thẩm mỹ, dùng hormone theo nội dung MTF trên mạng hoặc thuốc tăng cơ.

Trước đó sách hoàn toàn chưa đề cập vấn đề này. Tìm “giảm cân”, “hormone”, “thẩm mỹ y tế”, “phẫu thuật tạo hình”, “ăn kiêng”, “steroid” chỉ có ba chỗ không trực tiếp liên quan: chương 2 mục 28 nói BMI và tử vong, chương 5 mục 21 nói thẻ gym trả trước, chương 13 mục 18 nói hormone tác dụng chậm trong phản vệ. Các phương pháp giảm cân, tư cách cơ sở thẩm mỹ, lạm dụng thuốc và hình ảnh cơ thể vẫn trống.

Người dùng xác nhận mở chương 28, `book/28-ngoai-hinh-va-suc-khoe.md`, ở cuối sách. Không chia vào chương 2 và 6: 16 mục chương 6 đều là thực phẩm bổ sung hoặc sản phẩm gần như không lợi ích, trong khi nhóm này có thể thực sự gây chết người. Ghép chung sẽ làm ranh giới chương 6 khó nhận thấy.

## Quyết định viết về MTF

Không viết theo hướng khuyên tránh chuyển giới. Mục 7 yêu cầu thuốc hormone giới tính chỉ dùng theo đơn và khám định kỳ, không mua trên mạng hoặc tự tăng liều. Có ba lý do:

1. Bằng chứng nói về cách dùng thuốc, không nói về động cơ. Getahun 2018 đo khác biệt biến cố mạch giữa phụ nữ chuyển giới và đối chứng thuận giới, ủng hộ theo dõi mạch dài hạn ở người dùng estrogen, không chứng minh họ không nên dùng. Dùng số đó để khuyên từ bỏ là nói điều nghiên cứu không kết luận.
2. Trung Quốc có đường điều trị chính quy qua nội tiết hoặc chuyên khoa phù hợp để đánh giá, kê đơn, theo dõi. Đánh đồng đường này với chợ đen có thể đẩy người dùng sang con đường rủi ro nhất.
3. Quy tắc đơn thuốc và tái khám cũng áp dụng cho tự tăng thuốc tránh thai, hormone mãn kinh, testosterone, và steroid đồng hóa ở mục 5. Cách này chính xác và gọn hơn chia theo từng nhóm người.

Mở đầu nói rõ không đánh giá một người muốn có ngoại hình nào. Phạm vi là khác biệt rủi ro giữa có đơn, cơ sở đủ tư cách, theo dõi, với mua mạng, cơ sở không chính quy và tự tăng liều. Nội dung “thấy mình xấu” được đưa vào mục 8 về đánh giá rối loạn ám ảnh ngoại hình, có nghiên cứu định lượng.

## Số liệu và tệp được cập nhật

- README thêm hàng câu hỏi và chương 28; số mục A 277 → 282, hiệu quả chi phí rất cao 75 → 78, số tệp 27 → 28. Bảng thuật ngữ từ 38 → 40, thêm tỷ số tử vong chuẩn hóa và chênh lệch nguy cơ trước khi dùng ở mục 1 và 7.
- index.html đổi thanh bên từ 27 → 28 tệp. Danh sách chương đọc từ README nên không cần sửa riêng.
- CLAUDE.md thêm chương 28 vào cấu trúc.

Đếm lại các nhãn cho kết quả 282 mục A và 78 mục có tiền=0, thời gian=ít, kiên trì=không, lợi ích=lớn.

### Bổ sung cùng ngày: đồng bộ thống kê và tạo lại ảnh OG

Độc giả nhắc OG chưa cập nhật. Lần đầu chỉ sửa hai số trong đoạn README, bỏ sót huy hiệu, meta/OG/JSON-LD và og.png. Có ba thế hệ số cũ: tools/og.html ghi 404 mục, huy hiệu README và index ghi 413, đoạn README ghi A260/B105/C48. Tính lại theo `parse()` của index.html và đồng bộ:

| Chỉ tiêu | Giá trị cũ | Giá trị mới |
|---|---|---|
| Chương | 26 ở đoạn index | 28 |
| Mục | 404 hoặc 413 | 440 |
| Bằng chứng | Huy hiệu A255/B101/C48; đoạn A260/B105/C48 | A282/B110/C48 |
| Tranh luận/TODO | 42/36 | 43/36 |
| Liên kết trong Nguồn/Ghi chú | 767 huy hiệu, 787 og | 845 |
| Rất cao/cao/thông thường | 72/210/131 | 78 (18%)/219 (50%)/143 (32%) |

Script lấy nhãn chi phí sau mỗi `###`, tính cs bằng tiền, thời gian, kiên trì, mỗi loại chấm 0/1/2. Lợi ích lớn và cs=0 là rất cao, cs≤2 là cao; lợi ích vừa và cs=0 là cao; còn lại thông thường. Tổng ba mức và tổng A/B/C đều bằng 440. Liên kết đếm http(s) ở dòng Nguồn và Ghi chú theo chú thích tools/og.html.

Sửa README dòng 8, các huy hiệu, đoạn bằng chứng/hiệu quả chi phí; index meta description, og/twitter, WebSite.description, Book.abstract, numberOfPages và đoạn đầu; ba số tools/og.html. Tạo lại og.png bằng Chrome không giao diện 1200×630 theo lệnh ở chú thích, đã xem ảnh hiển thị 440/282/845.

## Nguồn đã đối chiếu

| URL | Trạng thái | Nội dung nguyên văn, dịch sang tiếng Việt |
|---|---|---|
| <https://doi.org/10.1001/archgenpsychiatry.2011.74>, Europe PMC, PMID 21727255 | Có | 36 nghiên cứu định lượng; theo dõi AN 166,642 năm-người. Tỷ suất chết trên 1000 năm-người: AN 5.1, BN 1.7, EDNOS 3.3. Tỷ số tử vong chuẩn hóa tương ứng 5.86, 1.93, 1.92. Một trong năm người AN đã chết là do tự sát. |
| <https://doi.org/10.1136/bmj.318.7186.765>, Europe PMC, PMID 10082698 | Có | Học sinh ban đầu 14–15 tuổi ở 44 trường Victoria, Australia, theo dõi ba năm với sáu đợt. Rối loạn ăn uống mới trên 1000 năm-người: nữ 21.8, nam 6.0. Nữ ăn kiêng nặng có nguy cơ gấp 18 lần người không ăn kiêng, mức vừa gấp năm. Sau hiệu chỉnh ăn kiêng và bệnh tâm thần trước đó, BMI, lượng vận động và giới không dự đoán mắc mới. Kiểm soát cân bằng vận động thay hạn chế ăn có vẻ ít nguy cơ hơn ở thanh thiếu niên. |
| <http://www.gov.cn/gongbao/content/2003/content_62198.htm>, Công báo 2003 số 1, Lệnh Bộ Y tế 19 | Có | Điều 2 định nghĩa thẩm mỹ y tế bằng mổ, thuốc, thiết bị hoặc kỹ thuật xâm lấn để sửa ngoại hình. Điều 8 cần đăng ký và giấy phép cơ sở. Điều 11 cần bác sĩ được cấp phép, đăng ký; phẫu thuật có sáu năm kinh nghiệm, nha khoa năm năm, đông y và da liễu ba năm. Điều 16 phải thực hiện tại cơ sở hoặc khoa thẩm mỹ phù hợp. Điều 20 báo bằng văn bản chỉ định, chống chỉ định, nguy cơ, lưu ý và lấy chữ ký người khám hoặc giám hộ; người mất/hạn chế năng lực không được làm khi chưa có giám hộ đồng ý. Điều 24 cấm cung cấp nếu chưa giấy phép và phê duyệt chuyên môn. |
| <https://www.spp.gov.cn/spp/fl/201802/t20180206_364975.shtml>, bản Hình sự 1997 | Có | Điều 336: hành nghề y không bằng, nghiêm trọng thì tù tối đa ba năm, câu lưu hoặc quản chế, kèm/chỉ phạt; gây hại sức khỏe nặng thì ba đến mười năm và phạt; gây chết thì trên mười năm và phạt. Sửa đổi lần 11 thêm Điều 336-1 về phôi chỉnh gene/clone, không thay khoản 1 Điều 336 nên dùng bản 1997. |
| <https://doi.org/10.1093/asj/sjz053>, Europe PMC, PMID 30805636 | Có | 48 ca mới mất một phần/toàn bộ thị lực sau filler, tìm tháng 1/2015–9/2018. Vị trí nguy cơ cao: mũi 56.3%, giữa mày 27.1%, trán 18.8%, nếp mũi-môi 14.6%. HA gây 81.3% ca; biến đổi da 43.8%, biến chứng thần kinh trung ương 18.8%. Mười ca, 20.8%, hồi hoàn toàn; tám ca, 16.7%, hồi một phần. Không cách điều trị nào thành công nhất quán. |
| <https://doi.org/10.1056/NEJMoa1003114>, Europe PMC, PMID 20818901 | Có | Tuyển 10,744 người thừa cân/béo từ 55 tuổi có bệnh tim mạch, đái tháo đường 2 hoặc cả hai; 9804 ngẫu nhiên, dùng trung bình 3.4 năm. Sibutramine giảm thêm và giữ 1.7 kg. Biến cố chính 11.4% so placebo 10.0%, HR1.16 (1.03–1.31), P=.02. Nhồi máu không chết 4.1% so3.2%, HR1.28 (1.04–1.57); đột quỵ không chết2.6% so1.9%, HR1.36 (1.04–1.77). Tử vong tim mạch và mọi nguyên nhân không tăng. |
| <https://scjg.tj.gov.cn/tjsscjdglwyh_52651/hdpt/cjwtyxfts/202007/t20200720_2972549.html>, Quản lý thị trường Thiên Tân | Có | Cơ quan dược cũ đánh giá sibutramine rủi ro lớn hơn lợi, thông báo năm2010 ngừng sản xuất, bán, dùng chế phẩm và nguyên liệu. Sibutramine hydrochloride và phenolphthalein không thuộc thực phẩm kiêm dược liệu, cấm thêm vào thức ăn kể cả thực phẩm sức khỏe; phát hiện sẽ xử nghiêm, nghi tội chuyển công an. Phenolphthalein quá liều hoặc lạm dụng lâu có thể rối loạn điện giải, nặng gây loạn nhịp. |
| <https://www.nmpa.gov.cn/directory/web/nmpa/xxgk/fgwj/gzwj/gzwjyp/20101030110901266.html>, Guo Shi Yao Jian Ban [2010] 432 | Chưa lấy | NMPA luôn HTTP412; Invoke-WebRequest và WebFetch thử mỗi cái một lần đều412, khớp ghi nhớ. Dùng nguồn Thiên Tân kiểm việc cấm, giữ liên kết gốc và ghi số văn bản/lỗi truy cập. |
| <https://doi.org/10.1111/joim.12850>, Europe PMC, PMID30460728 | Có | 545 nam AAS dương ở gym Đan Mạch từ2006-01-03 đến2018-03-01, ghép5450 đối chứng. Kiểm lặp644 người bị phạt vì từ chối xét, ghép6440. HR tử vong3.0 (1.3–7.0). Liên hệ bệnh viện trung vị.81/năm so.36, P<.0001. Mụn, vú to, rối cương ở trên10% người dùng, cao hơn đối chứng, P<.0001. Kết quả lặp được. |
| <http://www.gov.cn/gongbao/content/2004/content_63129.htm>, Lệnh398 | Có | Điều7 quản chặt chất cấm, không được sản xuất/bán/xuất nhập trái phép. Điều9 áp dụng thuốc kê đơn cho steroid đồng hóa, hormone peptide và chất cấm khác. |
| <https://www.gov.cn/gongbao/2023/issue_10846/202311/content_6917322.html>, Lệnh84 | Có | Nhà thuốc bán thuốc kê đơn bằng đơn, lưu ít nhất năm năm. Dược sĩ vắng phải treo thông báo; không được bán trước khi người đủ chuyên môn duyệt. Thuốc kê đơn không bày để tự lấy. |
| <https://www.gov.cn/gongbao/content/2022/content_5717002.htm>, Lệnh58 | Có | Điều8 cấm bán mạng vắc-xin, máu, gây mê, hướng thần, độc, phóng xạ, tiền chất thuốc và thuốc quản đặc biệt. Điều9 đơn phải thật, tin cậy, danh tính thật. Điều10 cảnh báo rõ phải có đơn và dược sĩ hướng dẫn; trước duyệt không cho hướng dẫn hoặc dịch vụ mua. |
| <https://doi.org/10.7326/M17-2785>, Europe PMC, PMID29987313 | Có | 2842 nữ chuyển giới và2118 nam chuyển giới, theo dõi4.0/3.6 năm; ghép48,686 nam và48,775 nữ thuận giới. Chênh VTE ở hai/tám năm so nam4.1 (1.6–6.7)/16.7 (6.4–27.5) mỗi1000; so nữ3.4 (1.1–5.6)/13.7 (4.1–22.7). Tổng thể đột quỵ thiếu máu và MI tương tự; khác VTE/đột quỵ mạnh hơn trong nhóm bắt đầu hormone khi theo dõi. Chưa đủ kết luận nam chuyển giới. Hạn chế không biết ai dùng hormone ngoài hệ. Cần theo dõi mạch dài với estrogen chuyển giới. |
| <https://doi.org/10.1007/s00266-017-0869-0>, Europe PMC, PMID28411353 | Có | 33 công bố. BDD ở bệnh nhân tạo hình15.04%, khoảng2.21–56.67%; tuổi34.54±12.41, nữ74.38%. Da liễu12.65%, khoảng4.52–35.16%; tuổi27.79±9.03, nữ76.09%. Bác sĩ phải đánh giá để nhận biết người nguy cơ và bố trí chăm sóc đa chuyên khoa. |

## Bằng chứng và mức lợi ích

| Mục | Mức | Cơ sở |
|---|---|---|
|1 ăn kiêng cực | A | Phân tích gộp và đoàn hệ lớn, SMR5.86 và18 lần đúng nguồn. Mức tử vong vượt ngưỡng20% nên lợi lớn. |
|2 kiểm hai giấy phép | A | Luật rõ kinh nghiệm6/5/3 năm và ba mức tù. Tránh hình sự là lợi cho người hành nghề; độc giả tránh thương tật không hồi phục, nên đo sức khỏe/tử vong và xếp lớn. |
|3 filler | B | Tổng hợp ca không mẫu số, không tính xác suất mù mỗi tiêm; chỉ tỷ lệ thành phần. Chỉ20.8% hồi hoàn toàn, hậu quả không đảo nên xếp lớn bằng đánh giá. |
|4 thuốc giảm cân | A | SCOUT là RCT, số đầy đủ; MI không chết tăng28%, đột quỵ36%, vượt20%, lợi lớn. |
|5 steroid | A | Đoàn hệ ghép lớn và kiểm lặp, HR3.0, lợi lớn; ghi còn tranh luận về quan sát và CI rộng. |
|6 thuốc theo đơn | B | Luật rõ nhưng chưa định lượng mức giảm sự cố so tự mua, thuộc khó định lượng theo CLAUDE; không số áp ngưỡng nên vừa. |
|7 hormone theo đơn | A | Đoàn hệ4960 và97,461 đối chứng, chênh/CI rõ; chỉ chênh tuyệt đối16.7/1000 trong8 năm, không áp giảm tương đối. Theo dõi chỉ giảm không loại rủi ro nên vừa. |
|8 đánh giá hình ảnh cơ thể | B | Gộp tỷ lệ nhưng khoảng2.21–56.67% rất rộng, công cụ không thống nhất, thuộc mẫu nhỏ/khác biệt lớn; không kết cục định lượng nên vừa. |

Mục1–3 là không làm hoặc kiểm giấy, tiền0/thời gianít/không kiên trì, thêm ba mục rất cao,75→78. Mục4–5 không tiền nhưng kiên trì một phần để chống cám dỗ hiệu quả nhanh. Mục6–8 phải khám và đi lại, tiềnít/thời gianvừa.

## Nội dung chưa làm

Không viết riêng mạng xã hội và bất mãn ngoại hình: phân tích gộp chủ yếu tương quan cắt ngang, r nhỏ, chưa rõ nhân quả, chỉ C không cùng độ mạnh. Mở đầu nói quyết định thường từ so với người khác, không thêm mục. Không viết chỉ định/lạm dụng GLP-1 như semaglutide vì thay đổi nhanh và chỉ định/bảo hiểm Trung Quốc đang đổi; mục6 đã khuyên theo đơn/bác sĩ, muốn riêng phải tra giấy phép và hướng dẫn hiện hành. Không đưa ví dụ chính thức thẩm mỹ trái phép: CLAUDE chỉ yêu cầu chương9, không bắt buộc ở đây, Bộ Công an luôn521 nên không lấy thông báo gốc.

# Hồ sơ kiểm chứng chương 12: khởi nghiệp và kinh doanh (2026-09-07)

Phương pháp: tìm URL bằng kho chính sách Quốc vụ viện, mở bằng WebFetch, tải văn bản dài bằng curl và đối chiếu từng điều. Một số trang Bộ Nhân lực bị chống thu thập; dùng cookie do script tính. Hệ thống nhượng quyền của Bộ Thương mại lỗi chứng chỉ nên curl -k. DOI của Camuffo trả 403, dùng Crossref và Semantic Scholar để xác nhận.

## Nguồn đã xác nhận

1. **Bộ luật Dân sự**, <https://www.spp.gov.cn/spp/fl/202006/t20200602_463888.shtml>: Điều 56, hộ kinh doanh chịu trách nhiệm bằng tài sản cá nhân hoặc gia đình; Điều 184, cứu trợ khẩn cấp tự nguyện gây thiệt hại thì người cứu không chịu dân sự; Điều 469, hợp đồng có thể bằng văn bản, lời nói hoặc hình thức khác; Điều 585, phạt vi phạm có thể tăng/giảm theo thiệt hại; Điều 586–588, đặt cọc tối đa 20%, bên vi phạm mất cọc hoặc trả gấp đôi, chọn áp dụng phạt hay cọc; Điều 668, hợp đồng vay nên bằng văn bản; Điều 681, 687, 688, bảo lãnh thông thường và liên đới; Điều 1064, nợ chung vợ chồng chỉ khi cùng ký, công nhận hoặc dùng cho gia đình.
2. **Luật Công ty 2023**, <https://www.gov.cn/yaowen/liebiao/202312/content_6923395.htm>: trách nhiệm hữu hạn trong vốn góp; lạm dụng tư cách pháp nhân để trốn nợ có thể phải liên đới; vốn đăng ký phải góp đủ trong năm năm; góp thiếu phải bồi thường; cổ đông sáng lập liên đới phần thiếu; cấm rút vốn; khi công ty không trả nợ, có thể buộc cổ đông đến hạn góp sớm.
3. **Luật Doanh nghiệp hợp danh 2006**, <http://www.gov.cn/gongbao/content/2006/content_413955.htm>: hợp danh thường chịu trách nhiệm vô hạn liên đới; thành viên hợp danh của hợp danh hữu hạn cũng vô hạn, thành viên hữu hạn chịu trong vốn cam kết.
4. **Điều lệ quản lý nhượng quyền thương mại**, <https://www.gov.cn/zhengce/zhengceku/2008-03/28/content_4179.htm>: bên nhượng quyền phải có ít nhất hai cửa hàng trực tiếp hoạt động trên một năm; đăng ký trong 15 ngày từ hợp đồng đầu tiên; hợp đồng phải cho bên nhận quyền quyền đơn phương chấm dứt trong thời hạn nhất định; phải công bố 12 nhóm thông tin gồm phí, tiền đặt cọc, số lượng/phân bố bên nhận quyền, báo cáo tài chính hai năm và tranh chấp năm năm; giấu hoặc nói sai thông tin cho phép chấm dứt; không đăng ký phạt 10,000–100,000 CNY.
5. **Biện pháp công bố thông tin nhượng quyền**, <http://www.gov.cn/gongbao/content/2012/content_2177025.htm>: phải công bố vốn đầu tư, doanh số, chi phí, lãi gộp, lãi ròng của bên nhận quyền; giấu thông tin ảnh hưởng mục đích hợp đồng hoặc công bố sai cho phép chấm dứt.
6. **Hệ thống thông tin nhượng quyền Bộ Thương mại**, <https://txjy.syggs.mofcom.gov.cn/>: WebFetch lỗi tên miền/chứng chỉ, curl -k trả 200; xác nhận đây là nền tảng đăng nhập, đăng ký và tra cứu thông tin đã đăng ký.
7. **Biện pháp xử lý kinh doanh không phép**, <https://www.gov.cn/zhengce/zhengceku/2017-08/23/content_5219861.htm>: chưa có giấy phép hoặc đăng ký kinh doanh bị cơ quan có thẩm quyền xử lý; nếu không có mức riêng thì buộc dừng, tịch thu lợi và phạt đến 10,000 CNY.
8. **Biện pháp cấp phép và đăng ký kinh doanh thực phẩm**, <https://www.gov.cn/gongbao/2023/issue_10606/202307/content_6894763.html>: bán thực phẩm và dịch vụ ăn uống phải có giấy phép, trừ chỉ bán thực phẩm đóng gói sẵn.
9. **Bộ luật Hình sự 1997**, <https://www.spp.gov.cn/spp/fl/201802/t20180206_364975.shtml>: Điều 205 về hóa đơn VAT giả, tù đến 3 năm hoặc 3–10 năm hoặc trên 10 năm; Điều 225 về kinh doanh trái phép, tù đến 5 năm hoặc trên 5 năm, phạt 1–5 lần lợi bất hợp pháp.
10. **Thông báo miễn/giảm VAT doanh nghiệp nhỏ 2023 số 19**, <https://www.gov.cn/zhengce/zhengceku/202308/content_6896287.htm>: doanh thu tháng không quá 100,000 CNY được miễn VAT; doanh thu chịu thuế theo mức 3% giảm còn 1%; áp dụng đến 2027-12-31.
11. **Luật Hợp đồng lao động**: phải ký hợp đồng trong một tháng; hợp đồng ghi lương và bảo hiểm; trả lương đúng đủ; quá một tháng chưa ký phải trả gấp đôi lương mỗi tháng.
12. **Luật Bảo hiểm xã hội sửa 2018**, <https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/202011/t20201102_394629.html>: đơn vị đăng ký bảo hiểm trong 30 ngày, tự kê khai và đóng đủ; không đăng ký phạt 1–3 lần tiền phải đóng và 500–3000 CNY cho người phụ trách; chậm đóng thêm 0.05%/ngày, quá hạn phạt 1–3 lần.
13. **Camuffo 2020 RCT**, DOI 10.1287/mnsc.2018.3249: 116 startup Ý, 16 mốc trong khoảng một năm; nhóm làm việc như nhà khoa học hoạt động tốt hơn, pivot nhiều hơn, không bỏ cuộc nhiều hơn; giảm khả năng theo đuổi dự án có kết quả dương giả.
14. **Quy định chứng nhận sản phẩm bắt buộc**, <http://www.gov.cn/gongbao/content/2010/content_1533513.htm>: sản phẩm thuộc danh mục phải chứng nhận và gắn dấu trước khi bán; chưa chứng nhận bị xử theo Điều 67 điều lệ chứng nhận.
15. **Điều lệ y tá**, <http://www.gov.cn/zhengce/zhengceku/2008-03/28/content_6169.htm>: y tá phải báo bác sĩ khi bệnh nhân nguy kịch, trong cấp cứu được làm cứu hộ cần thiết trước; nếu y lệnh trái luật/phác đồ phải báo.
16. **Điều lệ đăng ký chủ thể thị trường**, <https://www.gov.cn/zhengce/zhengceku/2021-08/24/content_5632964.htm>: giải thể/phá sản phải xin xóa đăng ký; thanh lý xong nộp trong 30 ngày; thủ tục đơn giản áp dụng khi không có nợ hoặc đã trả hết, công khai 20 ngày, hộ kinh doanh không cần công khai; đang trong danh sách bất thường không được dùng thủ tục đơn giản.
17. **Hướng dẫn xóa doanh nghiệp 2025**, <https://www.gov.cn/zhengce/zhengceku/202512/content_7053238.htm>: doanh nghiệp không nợ hoặc đã trả hết có thể xóa đơn giản, trừ doanh nghiệp trong danh sách bất thường hoặc vi phạm nghiêm trọng.
18. **Luật Phá sản doanh nghiệp**, <http://www.gov.cn/gongbao/content/2006/content_413952.htm>: pháp nhân không trả nợ đến hạn, tài sản thiếu hoặc mất khả năng trả thì thanh lý; có thể xin tái tổ chức, hòa giải hoặc phá sản; công ty đã giải thể nhưng chưa thanh lý mà tài sản thiếu phải xin phá sản.
19. **Điều lệ công khai thông tin doanh nghiệp**, <https://www.gov.cn/zhengce/zhengceku/2014-08/23/content_9038.htm>: không công khai báo cáo năm bị đưa vào danh sách bất thường; ba năm không sửa bị đưa vào danh sách vi phạm nghiêm trọng, người đại diện bị cấm làm đại diện doanh nghiệp khác ba năm. Việc đổi tên cơ quan quản lý theo Lệnh 777 đã đối chiếu; sửa đổi riêng năm 2024 ghi TODO.

## Chưa kiểm chứng/không dẫn

Chưa có số chính thức về tỷ lệ sống hoặc tuổi thọ doanh nghiệp; chưa định vị được Điều 24 Giải thích Luật Công ty III về đứng tên hộ cổ phần; Điều 23 Luật Bác sĩ 2021; Điều 31 Luật Nhãn hiệu; quy định phá sản cá nhân Thâm Quyến; Điều 122 Luật An toàn thực phẩm. Các mục tương ứng ghi TODO hoặc không dẫn điều chưa kiểm được.

## Chi tiết nguyên văn và trạng thái nguồn bổ sung

Phương pháp tìm nguồn dùng `sousuo.www.gov.cn/search-gov/data` chỉ để tìm URL, không làm nguồn. Toàn văn tải vào scratchpad `s12/page_*.html` rồi bỏ thẻ và tìm từng điều. Nguồn Bộ Nhân lực dùng cookie tính từ script, đã kiểm tên trang và phiên bản; hệ thống Bộ Thương mại dùng `curl -k` vì chứng chỉ không khớp tên miền.

### 1. Bộ luật Dân sự

WebFetch và tìm tại máy cùng xác nhận tiêu đề, thông qua ngày 2020-05-28 tại kỳ họp thứ ba Nhân đại khóa XIII.

- Điều 56: nếu không phân biệt được kinh doanh cá nhân hay gia đình, nợ hộ kinh doanh do tài sản gia đình chịu.
- Điều 469 định nghĩa hình thức văn bản gồm hợp đồng, thư, điện báo, telex, fax và hình thức thể hiện hữu hình nội dung.
- Điều 585: các bên có thể thỏa thuận số tiền phạt theo vi phạm; thấp hơn thiệt hại thì tòa/trọng tài có thể tăng theo yêu cầu, quá cao thì giảm phù hợp.
- Điều 586: hợp đồng đặt cọc có hiệu lực khi giao tiền thực tế; phần vượt 20% giá trị hợp đồng chính không có hiệu lực đặt cọc.
- Điều 587: bên giao cọc không thực hiện nghĩa vụ thì không được đòi cọc; bên nhận không thực hiện thì trả gấp đôi. Điều 588: cùng có phạt và cọc thì bên kia được chọn một cơ chế.
- Điều 668: vay giữa cá nhân có thỏa thuận khác thì không bắt buộc văn bản. Nội dung thường gồm loại vay, đồng tiền, mục đích, số tiền, lãi, thời hạn, cách trả.
- Điều 681: bảo lãnh là hợp đồng giữa người bảo lãnh và chủ nợ, người bảo lãnh thực hiện nghĩa vụ khi con nợ không trả đến hạn hoặc xảy ra điều kiện thỏa thuận.
- Điều 687: bảo lãnh thông thường cho phép từ chối trước khi hợp đồng chính được xử hoặc trọng tài và cưỡng chế tài sản con nợ vẫn không đủ.
- Điều 688: bảo lãnh liên đới cho phép chủ nợ đòi con nợ hoặc người bảo lãnh trong phạm vi bảo lãnh khi nợ đến hạn không trả.
- Điều 1064: nợ một bên đứng tên vượt nhu cầu sinh hoạt gia đình không là nợ chung, trừ khi chủ nợ chứng minh dùng cho sinh hoạt chung, sản xuất/kinh doanh chung hoặc dựa trên ý chí chung.

### 2–3. Công ty và hợp danh

Luật Công ty được sửa lần hai ngày 2023-12-29, kỳ họp thứ bảy Ủy ban Thường vụ Nhân đại khóa XIV, đã kiểm WebFetch và tại máy. Điều 4 phân biệt cổ đông công ty trách nhiệm hữu hạn chịu trong vốn cam kết, cổ đông công ty cổ phần chịu trong cổ phần mua. Điều 23: công ty chỉ một cổ đông, nếu không chứng minh tài sản tách biệt, cổ đông chịu liên đới. Điều 47 ghi vốn đăng ký là tổng cam kết, góp trong năm năm từ thành lập theo điều lệ. Điều 49 phải góp đúng đủ; Điều 50 cổ đông sáng lập khác liên đới với người thiếu trong phần thiếu. Điều 53 người rút vốn phải hoàn trả. Điều 54 công ty hoặc chủ nợ đến hạn có quyền yêu cầu góp sớm.

Luật Hợp danh: Công báo Quốc vụ viện 2006 số 29, Lệnh Chủ tịch nước số 55; sửa thông qua 2006-08-27, hiệu lực 2007-06-01, đã xác nhận WebFetch và tại máy.

### 4–6. Nhượng quyền

Điều lệ, Lệnh Quốc vụ viện 485, thông qua 2007-01-31 tại họp thường kỳ 167, hiệu lực 2007-05-01; đã xác nhận WebFetch và tại máy. Điều 22 cụ thể: loại/số tiền/cách trả phí, có bảo đảm hay không và điều kiện/cách hoàn; số bên nhận quyền, phân bố, đánh giá kinh doanh trong Trung Quốc; tóm tắt báo cáo tài chính và kiểm toán của hãng kế toán hai năm gần nhất; kiện và trọng tài liên quan năm năm. Điều 25: không đăng ký buộc đăng ký và phạt 10,000–50,000 CNY; quá hạn vẫn không làm phạt 50,000–100,000 CNY, công khai.

Biện pháp công bố thông tin là Lệnh Bộ Thương mại 2012 số 2, Công báo 2012 số 19, hiệu lực 2012-04-01. Điều 5(8)2 đòi cả nguồn của số liệu đầu tư, doanh số bình quân, chi phí, lãi gộp/ròng. Điều 9: giấu thông tin ảnh hưởng thực hiện khiến không đạt mục đích hợp đồng hoặc thông tin giả thì bên nhận được chấm dứt.

Hệ thống Bộ Thương mại tên trang “Nền tảng nghiệp vụ thống nhất – quản lý thông tin nhượng quyền thương mại”, có liên kết đăng nhập, đăng ký và thông tin đã khai báo; đã xác nhận là hệ thống chính thức.

### 7–12. Giấy phép, thuế và lao động

- Nguồn 7 Lệnh Quốc vụ viện 684, hiệu lực 2017-10-01. Điều 5 cơ quan theo luật/pháp quy/quyết định xử kinh doanh thiếu phép; Điều 6 cơ quan chức năng công thương xử thiếu đăng ký; Điều 13 buộc dừng, tịch thu và phạt tối đa 10,000 khi luật không có mức riêng.
- Nguồn 8 Công báo 2023 số 21, Lệnh Tổng cục Quản lý thị trường 78, hiệu lực 2023-12-01; Điều 4 ngoại lệ chỉ bán thực phẩm đóng gói sẵn không cần giấy phép.
- Nguồn 9 bản Hình sự 1997, WebFetch và tại máy xác nhận. Điều 205: hóa đơn VAT đặc biệt giả hoặc hóa đơn dùng gian lận hoàn thuế xuất khẩu/khấu trừ, mức đầu tù tối đa ba năm hoặc câu lưu, phạt 20,000–200,000; nặng hơn ba đến mười năm, phạt 50,000–500,000; đặc biệt nặng trên mười năm hoặc chung thân. Bao gồm làm giả cho người khác, bản thân, nhờ người khác hoặc giới thiệu. Bản 1997 còn khoản tử hình đã bị sửa đổi lần tám bỏ; không dẫn khoản đó. Điều 225(1): kinh doanh không phép hàng độc quyền hoặc hạn chế; khoản (3): chứng khoán, kỳ hạn, bảo hiểm hoặc thanh toán trái phép, trang ghi sửa theo lần bảy.
- Nguồn 10 xác nhận tiêu đề thông báo VAT doanh nghiệp nhỏ, Bộ Tài chính/Tổng cục Thuế 2023 số 19, WebFetch và tại máy.
- Nguồn 11 URL đầy đủ: <https://www.gov.cn/gongbao/content/2007/content_711013.htm>, thông qua 2007-06-29, hiệu lực 2008-01-01. Điều 10 hợp đồng trong một tháng; Điều 17(6),(7) lương và bảo hiểm; Điều 30 trả đủ đúng hạn, có thể xin lệnh thanh toán nếu nợ/thiếu; Điều 82 gấp đôi lương nếu quá một tháng và chưa đủ một năm không ký.
- Nguồn 12 curl lấy toàn văn 93 KB, danh sách gốc <https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/>. Phiên bản thông qua 2010-10-28, sửa 2018-12-29. Điều 58 đăng ký trong 30 ngày; Điều 60 không được hoãn/giảm trừ bất khả kháng hoặc lý do luật định; Điều 84 không đăng ký bị buộc sửa trong hạn, quá hạn mới áp dụng phạt; Điều 86 buộc đóng hoặc bổ sung và tiền chậm từ ngày thiếu, quá hạn vẫn thiếu mới phạt 1–3 lần.

### 13–19. Nghiên cứu và đóng doanh nghiệp

Camuffo: <https://doi.org/10.1287/mnsc.2018.3249> chuyển 302 đến <https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3249>, trả 403. Crossref `api.crossref.org/works/10.1287/mnsc.2018.3249` xác nhận “A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial”, Management Science 66(2):564-586, tháng 2/2020, Camuffo, Cordova, Gambardella, Spina. Semantic Scholar lấy tóm tắt. Chỉ ghi nội dung tóm tắt, không cỡ hiệu ứng.

Chứng nhận sản phẩm: Lệnh Tổng cục Chất lượng/Giám sát/Kiểm nghiệm/Kiểm dịch 117, Công báo 2010 số 5, hiệu lực 2009-09-01. Điều 2 phải chứng nhận và gắn dấu trước xuất xưởng, bán, nhập hoặc dùng kinh doanh; Điều 49 cơ quan chất lượng địa phương xử theo Điều 67.

Điều lệ y tá Lệnh 517, thông qua 2008-01-23 tại họp thường kỳ 206, hiệu lực 2008-05-12. Bản gốc 2008; chưa tìm bản chính thức sửa 2020. Điều 17: phát hiện y lệnh trái luật, quy định hoặc chuẩn kỹ thuật phải báo người ra y lệnh, cần thì báo trưởng khoa hoặc người quản lý y tế.

Điều lệ chủ thể thị trường Lệnh 746, hiệu lực 2022-03-01. Điều 33 liệt kê phải thanh toán hết phí thanh lý, lương, bảo hiểm xã hội, bù luật định, thuế, tiền chậm và phạt; toàn bộ nhà đầu tư cam kết bằng văn bản. Hộ kinh doanh không phải công khai, nếu cơ quan liên quan không phản đối trong mười ngày thì xóa trực tiếp. Danh sách bất thường không dùng thủ tục đơn giản.

Hướng dẫn xóa 2025, thông báo sáu cơ quan số 52 năm 2025: ngoại lệ còn gồm công ty cổ phần niêm yết, không dùng thủ tục đơn giản.

Luật Phá sản, Lệnh Chủ tịch 54, Công báo 2006 số 29, hiệu lực 2007-06-01, đã xác nhận WebFetch và tại máy. Điều 2: không đủ trả toàn bộ nợ hoặc rõ ràng thiếu khả năng trả; Điều 7 người có nghĩa vụ thanh lý phải nộp phá sản nếu pháp nhân đã giải thể nhưng chưa thanh lý hoàn tất và tài sản thiếu.

Điều lệ công khai thông tin Lệnh 654, hiệu lực 2014-10-01. Lệnh 777: <https://www.gov.cn/zhengce/zhengceku/202403/content_6939591.htm> đổi “cơ quan quản lý công thương” thành “cơ quan quản lý thị trường” ở Điều 2, khoản 1 Điều 5/6, Điều 7, khoản 1 Điều 8, khoản 2 Điều 10, khoản 1 Điều 13, Điều 14/15/24, không liệt kê Điều 17. Có sửa riêng 2024 hay không còn TODO.

## Chi tiết các nguồn chưa kiểm chứng

- Thống kê sống sót/tuổi thọ doanh nghiệp: tìm stats.gov.cn và API gov.cn không có nguyên bản, không ghi số.
- Giải thích Luật Công ty III Điều 24: URL đoán court.gov.cn trả 404, kho giải thích Viện Kiểm sát không có; mục 4 TODO, B.
- Luật Bác sĩ 2021 Điều 23: Ủy ban Y tế trả 412 khi script truy cập, kho chính sách không lưu luật Nhân đại, không dẫn.
- Luật Nhãn hiệu sửa 2019 Điều 31 về nộp trước: chưa định vị được toàn văn trên cơ quan sở hữu trí tuệ, mục 12 chỉ nhắc, không dẫn.
- Phá sản cá nhân Thâm Quyến: chưa định vị nguyên bản, mục 14 chỉ nói một số địa phương thí điểm.
- Luật An toàn thực phẩm Điều 122: chưa định vị toàn văn, mục 6 thay bằng quy định kinh doanh thiếu phép và cấp phép thực phẩm.


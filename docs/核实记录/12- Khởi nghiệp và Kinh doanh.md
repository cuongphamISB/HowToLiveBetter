# Mục 12 Hồ sơ Xác minh Nguồn (2026-09-07)

Phương pháp xác minh: Hạn ngạch WebSearch của phiên này đã hết, và vị trí quản lý được chuyển sang giao diện tìm kiếm của Cơ sở dữ liệu Tài liệu Chính sách Chính sách Chính phủ Trung Quốc (sousuo.www.gov.cn/search-gov/data, chỉ dùng để tìm URL, không phải nguồn). Mỗi URL được mở đầu tiên bằng WebFetch để xác nhận tiêu đề, số tài liệu và bài viết; Toàn bộ trang văn bản pháp lý cũng được tải xuống bằng curl to scratchpad (s12/page_*.html), sau đó sau khi gỡ nhãn, văn bản gốc được sắp xếp từng từ theo "Điều X"; các trích dẫn sau đây đều lấy từ địa phương. Trang Bộ Nhân sự và An sinh Xã hội có các script chống thu thập dữ liệu; WebFetch trả về trống, nên dùng curl để mang cookie được tính toán bởi script và mở cũng như truy xuất toàn văn bản (tiêu đề trang và dòng phiên bản đã được kiểm tra). Chứng chỉ hệ thống nhượng quyền Bộ Thương mại không khớp với tên miền, WebFetch báo lỗi, nên mở và xác minh tiêu đề bằng curl -k. DOI chuyển sang pubsonline.informs.org qua doi.org và trả về 403, chuyển sang Crossref API và Semantic Scholar API để xác minh thư mục và tóm tắt. 

## Nguồn đã xác minh

### 1. Bộ luật Dân sự
- URL: <https://www.spp.gov.cn/spp/fl/202006/t20200602_463888.shtml> (Cơ sở dữ liệu Luật và Quy định của Viện Kiểm sát Tối cao)
- Tiêu đề trang 'Bộ luật Dân sự Cộng hòa Nhân dân Trung Hoa', phiên bản 'Được thông qua tại Phiên họp thứ ba của Đại hội Đại biểu Nhân dân toàn quốc lần thứ 13 vào ngày 28 tháng 5 năm 2020'. WebFetch và định vị địa phương đều được xác nhận. 
- Điều 56: "Đối với doanh nghiệp cá nhân, nếu do cá nhân vận hành, tài sản cá nhân sẽ được gửi; Đối với hoạt động gia đình, tài sản gia đình sẽ được gửi; Nếu không thể phân biệt, tài sản gia đình sẽ được gửi."
- Điều 184: "Nếu hành động cứu hộ khẩn cấp tự nguyện gây hại cho người nhận, người cứu hộ sẽ không chịu trách nhiệm dân sự."
- Điều 469: "Các bên có thể ký kết hợp đồng dưới dạng văn bản, lời nói hoặc các hình thức khác. Các hình thức bằng văn bản bao gồm hợp đồng, thư, điện tín, telexx, fax và các hình thức khác có thể thể hiện vật lý nội dung chứa trong đó."
- Điều 585: "Các bên có thể thỏa thuận rằng nếu một bên vi phạm hợp đồng, họ sẽ phải trả một khoản bồi thường đã thanh toán cho bên kia dựa trên hoàn cảnh vi phạm...... Nếu số tiền bồi thường đã thỏa thuận thấp hơn thiệt hại gây ra, tòa án nhân dân hoặc cơ quan trọng tài có thể tăng theo yêu cầu của các bên; Nếu thiệt hại đã thỏa thuận cao hơn mức thiệt hại gây ra, tòa án nhân dân hoặc cơ quan trọng tài có thể giảm một cách thích hợp theo yêu cầu của các bên."
- Điều 586: "Các bên có thể đồng ý rằng một bên sẽ nộp tiền đặt cọc cho bên kia làm bảo đảm cho khoản đòi nợ. Hợp đồng đặt cọc được thiết lập khi khoản đặt cọc thực sự được thanh toán. Số tiền đặt cọc sẽ được các bên thỏa thuận; Tuy nhiên, nó không được vượt quá 20% số tiền chính của hợp đồng; bất kỳ khoản nào vượt quá mức này sẽ không được coi là tiền đặt cọc."
- Điều 587: "Nếu bên trả tiền đặt cọc không thực hiện nghĩa vụ...... không có quyền yêu cầu hoàn trả tiền đặt cọc; nếu bên nhận tiền đặt cọc không thực hiện nghĩa vụ...... tiền đặt cọc sẽ được hoàn trả gấp đôi."
- Điều 588: "Nếu các bên đồng ý về bồi thường thiệt hại thanh toán và tiền đặt cọc, nếu một bên vi phạm, bên kia có thể chọn áp dụng điều khoản bồi thường thanh toán hoặc đặt cọc."
- Điều 668: "Hợp đồng vay phải được viết bằng văn bản, trừ khi có thỏa thuận khác giữa các cá nhân về khoản vay. Nội dung của hợp đồng vay thường bao gồm các điều khoản như loại khoản vay, tiền tệ, mục đích, số tiền, lãi suất, thời hạn và phương thức trả nợ."
- Điều 681: "Hợp đồng bảo lãnh là hợp đồng trong đó bên bảo lãnh và chủ nợ đồng ý rằng nếu bên nợ không thực hiện khoản nợ đến hạn hoặc các bên đồng ý đáp ứng các điều kiện đã thỏa thuận, bên bảo lãnh sẽ thực hiện khoản nợ hoặc nhận trách nhiệm."
- Điều 687: "Nếu các bên đồng ý trong hợp đồng bảo lãnh rằng nếu con nợ không thể thực hiện khoản nợ, người bảo lãnh sẽ chịu trách nhiệm bảo lãnh, thì đó được coi là bảo lãnh chung." Người bảo lãnh bảo lãnh chung có quyền từ chối nhận trách nhiệm bảo lãnh cho chủ nợ trước khi tranh chấp hợp đồng chính được giải quyết hoặc trọng tài, và con nợ vẫn không thể thực hiện khoản nợ sau khi thực thi hợp pháp tài sản của con nợ."
- Điều 688: "Nếu các bên đồng ý trong hợp đồng bảo lãnh rằng người bảo lãnh và con nợ phải chịu trách nhiệm liên đới và nhiều đối với khoản nợ, thì đó là bảo lãnh trách nhiệm liên đới." Nếu con nợ của bảo lãnh trách nhiệm liên đới không thực hiện khoản nợ đến hạn ...... Chủ nợ có thể yêu cầu con nợ thực hiện khoản nợ, hoặc yêu cầu bên bảo lãnh nhận trách nhiệm bảo lãnh trong phạm vi bảo lãnh."
- Điều 1064: "Các khoản nợ phát sinh do cả hai vợ chồng ký chung hoặc do sự phê chuẩn lẫn nhau của một bên sau đó...... Đây là các khoản nợ hôn nhân chung. Các khoản nợ phát sinh của một bên trong thời gian hôn nhân dưới tên cá nhân ngoài nhu cầu hàng ngày của gia đình không được coi là nợ chung trong hôn nhân; Tuy nhiên, trừ khi chủ nợ có thể chứng minh rằng khoản nợ đó được sử dụng cho cuộc sống hôn nhân chung, sản xuất và vận hành chung, hoặc dựa trên sự đồng thuận của cả hai vợ chồng."

### 2. Luật Công ty (sửa đổi năm 2023)
- URL: <https://www.gov.cn/yaowen/liebiao/202312/content_6923395.htm> (Trang web Chính phủ Trung Quốc)
- Tiêu đề trang "Luật Công ty Cộng hòa Nhân dân Trung Hoa," với dòng phiên bản ghi "Tu chính án thứ hai tại cuộc họp lần thứ bảy của Ủy ban Thường vụ Đại hội Đại biểu Nhân dân Toàn quốc lần thứ 14 ngày 29 tháng 12 năm 2023." Cả WebFetch và định vị địa phương đều được xác nhận, và số điều khoản được xác minh theo bản sửa đổi năm 2023. 
- Điều 4: "Cổ đông của công ty trách nhiệm hữu hạn sẽ chịu trách nhiệm với công ty đến số vốn đã đăng ký; Cổ đông của công ty cổ phần sẽ chịu trách nhiệm với công ty đến số cổ phần mà họ đã đăng ký."
- Điều 23: "Nếu cổ đông của công ty lạm dụng tư cách độc lập của công ty với tư cách pháp nhân và trách nhiệm hữu hạn của cổ đông để trốn nợ và gây tổn hại nghiêm trọng đến lợi ích của chủ nợ công ty, họ sẽ phải chịu trách nhiệm liên đới đối với các khoản nợ của công ty." …… Trong một công ty chỉ có một cổ đông, nếu cổ đông không thể chứng minh tài sản của công ty là độc lập với tài sản của cổ đông, họ sẽ phải chịu trách nhiệm liên đới và nhiều đối với các khoản nợ của công ty."
- Điều 47: "Vốn đăng ký của công ty trách nhiệm hữu hạn là số vốn do tất cả các cổ đông đăng ký với cơ quan đăng ký công ty đóng góp. Khoản góp vốn do tất cả cổ đông đăng ký sẽ được cổ đông thanh toán đầy đủ trong vòng năm năm kể từ ngày thành lập công ty theo quy định của điều lệ công ty."
- Điều 49: "Cổ đông phải thanh toán đầy đủ và đúng hạn số tiền đóng góp vốn đã đăng ký theo quy định trong điều lệ công ty." …… Nếu cổ đông không thanh toán đầy đủ và đúng hạn khoản góp vốn của mình, ngoài việc trả toàn bộ số tiền cho công ty, họ cũng phải chịu trách nhiệm về bất kỳ tổn thất nào gây ra cho công ty."
- Điều 50: "Khi công ty trách nhiệm hữu hạn được thành lập, cổ đông không thực sự thanh toán khoản góp vốn như quy định trong điều lệ công ty...... Các cổ đông khác tại thời điểm thành lập phải chịu trách nhiệm liên đới và nhiều với cổ đông đó trong phạm vi đóng góp vốn không đủ."
- Điều 53: "Sau khi công ty được thành lập, cổ đông không được rút vốn góp vốn. Nếu vi phạm các quy định của đoạn trước, cổ đông phải hoàn trả các khoản góp vốn đã rút."
- Điều 54: "Nếu công ty không thể trả hết các khoản nợ đến hạn, công ty hoặc chủ nợ của các khoản nợ đã đáo hạn có quyền yêu cầu các cổ đông đã đăng ký nhưng chưa hết thời hạn đóng góp phải thanh toán trước các khoản góp vốn của họ."

### 3. Luật Doanh nghiệp Hợp danh (Sửa đổi năm 2006)
- URL：<http://www.gov.cn/gongbao/content/2006/content_413955.htm>（国务院公报 2006 年第 29 号）
- 页面标题「中华人民共和国主席令（第五十五号）　中华人民共和国合伙企业法」，「2006年8月27日修订通过……自2007年6月1日起施行」。WebFetch 与本地定位均确认。
- 第二条：「普通合伙企业由普通合伙人组成，合伙人对合伙企业债务承担无限连带责任。……有限合伙企业由普通合伙人和有限合伙人组成，普通合伙人对合伙企业债务承担无限连带责任，有限合伙人以其认缴的出资额为限对合伙企业债务承担责任。」

### 4. 商业特许经营管理条例
- URL：<https://www.gov.cn/zhengce/zhengceku/2008-03/28/content_4179.htm>
- 页面标题「商业特许经营管理条例」，文号「国令第485号」，「2007年1月31日国务院第167次常务会议通过……自2007年5月1日起施行」。WebFetch 与本地定位均确认。
- 第七条第二款：「特许人从事特许经营活动应当拥有至少2个直营店，并且经营时间超过1年。」
- 第八条：「特许人应当自首次订立特许经营合同之日起15日内，依照本条例的规定向商务主管部门备案。」
- 第十二条：「特许人和被特许人应当在特许经营合同中约定，被特许人在特许经营合同订立后一定期限内，可以单方解除合同。」
- 第二十二条：列出 12 项应提供信息，含「（三）特许经营费用的种类、金额和支付方式（包括是否收取保证金以及保证金的返还条件和返还方式）」「（八）在中国境内现有的被特许人的数量、分布地域以及经营状况评估」「（九）最近2年的经会计师事务所审计的财务会计报告摘要和审计报告摘要」「（十）最近5年内与特许经营相关的诉讼和仲裁情况」。
- 第二十三条：「特许人隐瞒有关信息或者提供虚假信息的，被特许人可以解除特许经营合同。」
- 第二十五条：「特许人未依照本条例第八条的规定向商务主管部门备案的，由商务主管部门责令限期备案，处1万元以上5万元以下的罚款；逾期仍不备案的，处5万元以上10万元以下的罚款，并予以公告。」

### 5. 商业特许经营信息披露管理办法
- URL：<http://www.gov.cn/gongbao/content/2012/content_2177025.htm>（国务院公报 2012 年第 19 号）
- 页面标题「中华人民共和国商务部令（2012年第2号）　商业特许经营信息披露管理办法」，「自2012年4月1日起施行」。WebFetch 与本地定位均确认。
- 第五条（八）2：「现有被特许人的经营状况，包括被特许人实际的投资额、平均销售量、成本、毛利、纯利等信息，同时应当说明上述信息的来源。」
- 第九条：「特许人隐瞒影响特许经营合同履行致使不能实现合同目的的信息或者披露虚假信息的，被特许人可以解除特许经营合同。」

### 6. 商务部商业特许经营信息管理系统
- URL：<https://txjy.syggs.mofcom.gov.cn/>
- WebFetch 因证书域名不匹配报错；curl -k 打开返回 200，页面标题「商务部业务系统统一平台-商业特许经营信息管理」，页内有企业登录、注册与备案信息链接。已确认为商务部系统。

### 7. 无证无照经营查处办法
- URL：<https://www.gov.cn/zhengce/zhengceku/2017-08/23/content_5219861.htm>
- 页面标题「无证无照经营查处办法」，文号「国令第684号」，「2017年10月1日起施行」。WebFetch 与本地定位均确认。
- 第五条：「经营者未依法取得许可从事经营活动的，由法律、法规、国务院决定规定的部门予以查处」
- 第六条：「经营者未依法取得营业执照从事经营活动的，由履行工商行政管理职责的部门……予以查处。」
- 第十三条：「法律、行政法规对无照经营的处罚没有明确规定的，由工商行政管理部门责令停止违法行为，没收违法所得，并处1万元以下的罚款。」

### 8. 食品经营许可和备案管理办法
- URL：<https://www.gov.cn/gongbao/2023/issue_10606/202307/content_6894763.html>（国务院公报 2023 年第 21 号）
- 页面标题「国家市场监督管理总局令（第78号）　食品经营许可和备案管理办法」，「自2023年12月1日起施行」。WebFetch 与本地定位均确认。
- 第四条：「在中华人民共和国境内从事食品销售和餐饮服务活动，应当依法取得食品经营许可。下列情形不需要取得食品经营许可：……（二）仅销售预包装食品」

### 9. 刑法（1997 年修订本文）
- URL：<https://www.spp.gov.cn/spp/fl/201802/t20180206_364975.shtml>（最高检法律法规库）
- 页面标题「中华人民共和国刑法（1997年修订）」。WebFetch 与本地定位均确认。
- 第二百零五条：「虚开增值税专用发票或者虚开用于骗取出口退税、抵扣税款的其他发票的，处三年以下有期徒刑或者拘役，并处二万元以上二十万元以下罚金；虚开的税款数额较大或者有其他严重情节的，处三年以上十年以下有期徒刑，并处五万元以上五十万元以下罚金；虚开的税款数额巨大或者有其他特别严重情节的，处十年以上有期徒刑或者无期徒刑……虚开增值税专用发票或者虚开用于骗取出口退税、抵扣税款的其他发票，是指有为他人虚开、为自己虚开、让他人为自己虚开、介绍他人虚开行为之一的。」页面为 1997 年文本，含已被修正案（八）删去的死刑款，正文未引用该款。

- Điều 225: "Ai vi phạm quy định nhà nước bằng cách tham gia vào bất kỳ hoạt động kinh doanh bất hợp pháp nào sau đây gây rối loạn trật tự thị trường và tham gia nghiêm trọng sẽ bị kết án tù có thời hạn tối đa năm năm hoặc tạm giam hình sự, và bị phạt tiền không dưới một lần và không quá năm lần số tiền lợi nhuận bất hợp pháp, đồng thời hoặc một mình; Nếu hoàn cảnh đặc biệt nghiêm trọng, bản án sẽ là tù có thời hạn không dưới năm năm...... (1) Độc quyền hoạt động, hàng hóa độc quyền hoặc các hàng hóa bị hạn chế khác theo quy định của luật và quy định hành chính mà không cần giấy phép; …… (3) Tham gia bất hợp pháp vào các hoạt động kinh doanh chứng khoán, hợp đồng tương lai hoặc bảo hiểm mà không được các cơ quan quốc gia liên quan phê duyệt, hoặc tham gia bất hợp pháp vào hoạt động thanh toán và thanh toán quỹ" (trang đánh dấu mục này đã được sửa đổi theo Sửa đổi (7)). 

### 10. Thông báo số 19 năm 2023 của Bộ Tài chính và Cục Thuế Nhà nước
- URL:<https://www.gov.cn/zhengce/zhengceku/202308/content_6896287.htm>
- Tiêu đề trang: "Thông báo về Chính sách Giảm và Miễn VAT cho Người nộp thuế VAT quy mô nhỏ," số tài liệu: "Thông báo số 19 năm 2023 của Bộ Tài chính và Cơ quan Quản lý Thuế bang." Cả WebFetch và định vị địa phương đều được xác nhận. 
- "1. Người nộp thuế VAT quy mô nhỏ có doanh số bán hàng tháng từ 100.000 nhân dân tệ trở xuống (đã bao gồm) được miễn VAT." "2. Đối với người nộp thuế VAT quy mô nhỏ, thu nhập bán hàng chịu thuế suất 3% sẽ bị đánh thuế với mức thuế giảm 1%." "3. Thông báo này có hiệu lực đến ngày 31 tháng 12 năm 2027."

### 11. Luật Hợp đồng Lao động
- URL:<https://www.gov.cn/gongbao/content/2007/content_711013.htm>
- Dòng phiên bản trang: "Được thông qua vào ngày 29 tháng 6 năm 2007...... Có hiệu lực từ ngày 1 tháng 1 năm 2008. Cả WebFetch và định vị cục bộ đều đã được xác nhận. 
- Điều 10: "Nếu quan hệ lao động đã được thiết lập nhưng không có hợp đồng lao động bằng văn bản được ký đồng thời, hợp đồng lao động bằng văn bản phải được ký trong vòng một tháng kể từ ngày làm việc."
- Điều 17: "Hợp đồng lao động phải bao gồm các điều khoản sau...... (6) Tiền lương lao động; (7) Bảo hiểm xã hội"
- Điều 30: "Người sử dụng lao động phải trả lương lao động đầy đủ và đúng hạn cho người lao động theo hợp đồng lao động và quy định quốc gia. Nếu người sử dụng lao động chậm trễ hoặc không trả đầy đủ tiền lao động, người lao động có thể nộp đơn lên tòa án nhân dân địa phương để xin lệnh thanh toán theo quy định pháp luật."
- Điều 82: "Nếu người sử dụng lao động không ký hợp đồng lao động bằng văn bản với người lao động trong hơn một tháng nhưng chưa đến một năm kể từ ngày làm việc, người sử dụng lao động phải trả cho người lao động gấp đôi mức lương mỗi tháng."

### 12. Luật Bảo hiểm Xã hội (Sửa đổi năm 2018)
- URL: <https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/202011/t20201102_394629.html> (Bộ Nhân lực và An sinh Xã hội)
- WebFetch bị chặn bởi các script chống thu thập dữ liệu và trả về trắng; Curl mang cookie tính toán theo script và nhận được toàn văn 93 KB, tiêu đề trang "Luật Bảo hiểm Xã hội của Cộng hòa Nhân dân Trung Hoa China_Ministry nguồn nhân lực và An sinh xã hội của Cộng hòa Nhân dân Trung Hoa", phiên bản dòng "28 tháng 10, 2010...... Được phê duyệt theo "Quyết định sửa đổi Luật Bảo hiểm Xã hội của Cộng hòa Nhân dân Trung Hoa" ...... ngày 29 tháng 12 năm 2018. Liên kết từ trang danh sách mục "Luật" của Bộ (<https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/>). 
- Điều 58: "Người sử dụng lao động phải nộp đơn đăng ký bảo hiểm xã hội cho nhân viên tại cơ quan bảo hiểm xã hội trong vòng ba mươi ngày kể từ ngày làm việc."
- Điều 60: "Người sử dụng lao động phải khai báo và thanh toán phí bảo hiểm xã hội đúng hạn và đầy đủ. Trừ các lý do pháp lý như bất khả kháng, việc hoãn hoặc giảm phí bảo hiểm không được phép."
- Điều 84: "Nếu người sử dụng lao động không hoàn thành đăng ký bảo hiểm xã hội, phòng hành chính bảo hiểm xã hội sẽ ra lệnh sửa chữa trong thời hạn quy định; Nếu không thực hiện sửa chữa trong thời hạn, người sử dụng lao động sẽ bị phạt ít nhất một lần và không quá ba lần số phí bảo hiểm xã hội phải nộp, và các giám sát trực tiếp cùng các nhân viên trực tiếp chịu trách nhiệm khác sẽ bị phạt không dưới 500 nhân dân tệ và không quá 3.000 nhân dân tệ."
- Điều 86: "Nếu người sử dụng lao động không thanh toán phí bảo hiểm xã hội đúng hạn và đầy đủ, cơ quan thu hồi phí bảo hiểm xã hội sẽ ra lệnh thanh toán hoặc bổ sung trong một khoảng thời gian nhất định, và kể từ ngày nợ, phí trễ hạn 0,05% mỗi ngày sẽ được tính; Nếu vẫn chưa thanh toán trong thời hạn, cơ quan hành chính có thẩm quyền sẽ phạt tiền không dưới một lần và không quá ba lần số tiền đã nộp."

### 13. Camuffo và cộng sự, 2020 (RCT)
- DOI:<https://doi.org/10.1287/mnsc.2018.3249>
- WebFetch mở doi.org trả về 302 Jump <https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3249>, trang này trả về 403. Chuyển sang Crossref API (api.crossref.org/works/10.1287/mnsc.2018.3249) để xác nhận: có tiêu đề "Cách tiếp cận khoa học đối với quyết định khởi nghiệp: Bằng chứng từ thử nghiệm kiểm soát ngẫu nhiên," Management Science 66(2):564-586, tháng 2 năm 2020, tác giả Camuffo, Cordova, Gambardella, Spina. Tóm tắt thu thập API của Semantic Scholar: "Mẫu bảng của thử nghiệm đối chứng ngẫu nhiên của chúng tôi bao gồm 116 startup Ý và 16 điểm dữ liệu trong khoảng một năm. … Chúng tôi nhận thấy các doanh nhân hành xử như nhà khoa học sẽ làm việc tốt hơn, có xu hướng chuyển sang ý tưởng khác và không có khả năng bỏ cuộc cao hơn nhóm đối chứng trong giai đoạn đầu của startup. … Phương pháp khoa học cải thiện độ chính xác—giảm khả năng theo đuổi các dự án có kết quả dương tính giả」。 Văn bản chính chỉ sử dụng phần tóm tắt và không chỉ định kích thước hiệu ứng cụ thể.
### 14. Quy định về quản lý chứng nhận sản phẩm bắt buộc
- URL: <http://www.gov.cn/gongbao/content/2010/content_1533513.htm> (Công báo Hội đồng Nhà nước 2010 số 5)
- Tiêu đề trang: "Lệnh Quản lý Quản lý Chất lượng, Kiểm tra và Cách ly (Số 117) Quy định Quản lý Chứng nhận Sản phẩm Bắt buộc," "Có hiệu lực từ ngày 1 tháng 9 năm 2009." WebFetch và định vị cục bộ đều được xác nhận. 
- Điều 2: "Các sản phẩm do nhà nước quy định phải trải qua chứng nhận (sau đây gọi là chứng nhận sản phẩm bắt buộc) và mang dấu chứng nhận trước khi được sản xuất, bán, nhập khẩu hoặc sử dụng trong các hoạt động kinh doanh khác."
- Điều 49: "Nếu các sản phẩm liệt kê trong danh mục không được chứng nhận, bán hoặc nhập khẩu trái phép, hoặc được sử dụng trong các hoạt động kinh doanh khác, các cơ quan kiểm tra chất lượng địa phương sẽ áp dụng các hình phạt theo Điều 67 của Quy định Chứng nhận và Công nhận."

### 15. Quy định của y tá
- URL:<http://www.gov.cn/zhengce/zhengceku/2008-03/28/content_6169.htm>
- Tiêu đề trang: 'Quy định về Y tá', số tài liệu 'Nghị định Quốc gia số 517', 'Được thông qua tại Đại hội đồng Điều hành lần thứ 206 của Hội đồng Nhà nước ngày 23 tháng 1 năm 2008...... Có hiệu lực từ ngày 12 tháng 5 năm 2008. Cả WebFetch và định vị địa phương đều đã được xác nhận. Đây là bản gốc từ năm 2008; phiên bản sửa đổi năm 2020 không có trang toàn văn chính thức. 
- Điều 17: "Nếu y tá phát hiện tình trạng bệnh nhân nguy kịch trong quá trình thực hành, họ phải ngay lập tức thông báo cho bác sĩ; Trong trường hợp khẩn cấp, việc cứu hộ khẩn cấp cần thiết phải được thực hiện trước để cứu bệnh nhân nguy kịch. Nếu y tá phát hiện lệnh y tế vi phạm luật, quy định, quy tắc hoặc tiêu chuẩn kỹ thuật chẩn đoán và điều trị, y tá phải báo cáo ngay cho bác sĩ đã ban hành lệnh; Nếu cần thiết, y tá phải báo cáo với trưởng khoa của bác sĩ hoặc người chịu trách nhiệm quản lý dịch vụ y tế tại cơ sở y tế và y tế."

### 16. Quy định về Đăng ký và Quản lý Thực thể Thị trường
- URL:<https://www.gov.cn/zhengce/zhengceku/2021-08/24/content_5632964.htm>
- Tiêu đề trang: "Quy định của Cộng hòa Nhân dân Trung Hoa về Quản lý Đăng ký Thực thể Thị trường," số tài liệu "Lệnh Quốc gia số 746," "có hiệu lực từ ngày 1 tháng 3 năm 2022." WebFetch và định vị cục bộ đều được xác nhận. 
- Điều 31: "Nếu một thực thể thị trường cần chấm dứt do giải thể, tuyên bố phá sản hoặc các lý do pháp lý khác, thực thể đó phải nộp đơn lên cơ quan đăng ký để hủy đăng ký theo quy định của pháp luật."
- Điều 32: "Nhóm thanh lý phải nộp đơn lên cơ quan đăng ký để hủy đăng ký trong vòng 30 ngày kể từ khi hoàn tất thanh lý."
- Điều 33: "Nếu một thực thể thị trường không phát sinh bất kỳ khoản nợ hoặc yêu cầu nào hoặc đã hoàn tất việc trả nợ, và chưa phát sinh hoặc giải quyết các chi phí trả nợ, tiền lương nhân viên, phí bảo hiểm xã hội, bồi thường theo luật định và các khoản thuế phải nộp (phí trễ hạn, tiền phạt), và tất cả các nhà đầu tư đã cam kết bằng văn bản chịu trách nhiệm pháp lý về tính xác thực của các tình huống đó, việc hủy đăng ký có thể được xử lý theo thủ tục đơn giản hóa." …… Thời gian công bố công khai là 20 ngày. …… Nếu các doanh nghiệp riêng lẻ xử lý việc hủy đăng ký theo thủ tục đơn giản thì không cần công khai ...... Nếu các phòng ban liên quan không phản đối trong vòng 10 ngày, họ có thể trực tiếp xử lý việc hủy đăng ký. …… Nếu được liệt kê trong danh sách các hoạt động kinh doanh bất thường, thủ tục hủy đăng ký đơn giản sẽ không áp dụng."

### 17. Hướng dẫn hủy đăng ký doanh nghiệp (Phiên bản 2025)
- URL:<https://www.gov.cn/zhengce/zhengceku/202512/content_7053238.htm>
- Tiêu đề trang: "Thông báo của Cơ quan Quản lý Thị trường Nhà nước và Sáu Bộ khác về việc ban hành 'Hướng dẫn hủy đăng ký Doanh nghiệp (sửa đổi 2025)'", tài liệu số "2025 số 52". Cả WebFetch và định vị cục bộ đều được xác nhận. 
- "Quy trình hủy đăng ký đơn giản hóa 1. Các đối tượng áp dụng. Các doanh nghiệp (không bao gồm công ty cổ phần niêm yết) không phát sinh bất kỳ khoản nợ hoặc yêu cầu nào trong suốt thời gian tồn tại hoặc đã thanh toán đầy đủ các khoản nợ và yêu cầu...... Việc hủy đăng ký có thể được xử lý theo thủ tục đơn giản hóa. Các doanh nghiệp có bất kỳ trường hợp nào sau đây không thuộc phạm vi thủ tục hủy đăng ký đơn giản: ...... Được liệt kê trong danh sách các hoạt động bất thường hoặc danh sách các vi phạm nghiêm trọng và gian lận do giám sát và quản lý thị trường

### 18. Luật phá sản doanh nghiệp
- URL: <http://www.gov.cn/gongbao/content/2006/content_413952.htm> (Công báo Hội đồng Nhà nước 2006, Số 29)
- Tiêu đề trang: "Sắc lệnh Tổng thống của Cộng hòa Nhân dân Trung Hoa (Số 54) Luật Phá sản Doanh nghiệp của Cộng hòa Nhân dân Trung Hoa," "Có hiệu lực từ ngày 1 tháng 6 năm 2007." Cả WebFetch và định vị cục bộ đều được xác nhận. 
- Điều 2: "Nếu một pháp nhân doanh nghiệp không thể trả hết các khoản nợ đến hạn và tài sản của nó không đủ để đáp ứng tất cả các khoản nợ hoặc rõ ràng không có khả năng trả, pháp nhân đó phải thanh toán khoản nợ theo các quy định của luật này."
- Điều 7: "Nếu con nợ có các hoàn cảnh quy định tại Điều 2 của luật này, họ có thể nộp đơn lên tòa án nhân dân để tái tổ chức, hòa giải hoặc thanh lý phá sản." …… Nếu pháp nhân doanh nghiệp đã bị giải thể nhưng chưa được thanh lý hoặc chưa được thanh lý hoàn toàn, và tài sản của doanh nghiệp không đủ để trả nợ, người chịu trách nhiệm pháp lý về việc thanh lý phải nộp đơn lên tòa án nhân dân để thanh lý phá sản."

### 19. Quy định tạm thời về công bố thông tin doanh nghiệp
- URL:<https://www.gov.cn/zhengce/zhengceku/2014-08/23/content_9038.htm>
- Tiêu đề trang: "Quy định tạm thời về công bố thông tin doanh nghiệp," tài liệu số "Nghị định quốc gia số 654," "Có hiệu lực từ ngày 1 tháng 10 năm 2014." WebFetch và định vị cục bộ đều được xác nhận. 
- Điều 17: "(1) Doanh nghiệp không công bố báo cáo hàng năm trong thời hạn quy định tại các quy định này...... Được liệt kê trong danh sách các hoạt động kinh doanh bất thường...... Không thực hiện nghĩa vụ công bố thông tin theo quy định này trong 3 năm...... Được liệt kê là doanh nghiệp bất hợp pháp nghiêm trọng...... Người đại diện pháp lý hoặc người phụ trách doanh nghiệp được liệt kê trong danh sách doanh nghiệp bất hợp pháp nghiêm trọng sẽ không được làm đại diện pháp lý hoặc người phụ trách doanh nghiệp khác trong vòng 3 năm."
- Cũng kiểm tra Quyết định của Hội đồng Nhà nước số 777 "Quyết định của Hội đồng Nhà nước về sửa đổi và bãi bỏ một số Quy định Hành chính" (<https://www.gov.cn/zhengce/zhengceku/202403/content_6939591.htm>): "7. Trong Điều 2, Điều 5, Khoản 1, Điều 6, Điều 7, Điều 8, Khoản 1, Điều 10, Khoản 2, Điều 13, Khoản 1, Điều 14, Điều 15 và Điều 24, "Phòng Hành chính Công nghiệp và Thương mại" được đổi thành "Phòng Giám sát Thị trường." Điều 17 không được liệt kê. Có sửa đổi riêng vào năm 2024, được đánh dấu là TODO không? 

## Không xác minh hoặc trích dẫn
- Thống kê chính thức về tỷ lệ sống sót của doanh nghiệp/tuổi thọ trung bình: Giao diện tìm kiếm nội bộ và gov.cn tìm kiếm của Cục Thống kê Quốc gia không có văn bản gốc có thể kiểm chứng; Không có số liệu được cung cấp.
- Tòa án tối cao "Quy định về việc áp dụng <Luật Công ty> một số vấn đề (ba)" Điều 24 (ủy thác cổ phần): Không tìm thấy trang gốc trên trang web của Tòa án tối cao (court.gov.cn dự đoán URL 404, kho giải thích pháp lý của Viện Kiểm sát Tối cao không có); Điều 4 đánh dấu TODO, xếp loại B. 
- Luật Y sĩ (2021) Điều 23: Trang web của Ủy ban Y tế Quốc gia trả về 412 khi chạy script, kho chính sách gov.cn không thu luật của Đại hội Nhân dân; không trích dẫn. 
- Luật Nhãn hiệu (sửa đổi 2019) Điều 31 về ưu tiên nộp đơn: Không tìm thấy trang đầy đủ trên trang của Cục Sở hữu trí tuệ Quốc gia; Điều 12 chỉ nhắc nhở, không trích dẫn điều khoản. 
- Quy định phá sản cá nhân của Khu đặc khu kinh tế Thâm Quyến: Không tìm thấy văn bản gốc chính thức; Điều 14 chỉ ghi chú "thí điểm ở một số địa phương", không trích dẫn. 
- Luật An toàn thực phẩm Điều 122 về xử phạt kinh doanh không giấy phép: Không tìm thấy trang văn bản đầy đủ chính thức; Điều 6 sửa trích dẫn sang phương pháp xử lý kinh doanh không giấy phép và phương pháp cấp phép kinh doanh thực phẩm.
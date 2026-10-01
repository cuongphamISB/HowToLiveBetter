# Bảng đối chiếu

Tệp này được tạo bởi 'node tools/check-refs.mjs'; không chỉnh sửa thủ công. 

Trong văn bản chính, 'Điều X' chỉ ghi lại số mệnh đề, không ghi nội dung. Việc chèn hoặc xóa các mục sẽ khiến các trích dẫn tiếp theo bị lệch với nhau, 
Và số lượng mục nhập không khớp thường vẫn nằm trong phạm vi, chỉ kiểm tra ranh giới thôi cũng không phát hiện được. Vì vậy, với mỗi tài liệu tham khảo, **tiêu đề thực tế** 
Trải rộng ra và ghi vào đây rồi thêm vào cơ sở dữ liệu: Sau khi chỉnh sửa mục, tạo lại nó. Trong 'git diff', bất kỳ số mục nào không thay đổi nhưng tiêu đề đã thay đổi, 
Đó là một câu nói đã bị lệch nhịp bởi khoảng thời gian kéo dài. 

Phạm vi quét: văn bản chính và phần giới thiệu của mỗi phần dưới 'book/', cộng với văn bản dài dưới 'docs/'. Không bao gồm trong văn bản dài
Trong phần này, 'Điều N' trần luôn bị bỏ qua như một quy định pháp lý, vì vậy các trích dẫn dài nên bao gồm 'Phần X, Điều Y'. 
Trong cột 'Nguồn', ghi 'Mục N' ở đầu, ghi 'Đầu mục' ở đầu, và trong các bài viết dài, viết tiêu đề con gần đây nhất. 

Một biện pháp an toàn khác là **điểm neo**: mỗi trích dẫn phải có một từ trong ngữ cảnh phù hợp với tiêu đề bài viết mục tiêu
("Hỗ trợ y tế" trong "xem Mục 11", hoặc được viết rõ ràng là "Xem Mục 16 (Giấy nợ và Bảo đảm)"). 
'node tools/check-refs.mjs --check' sẽ đánh dấu một số thanh trần không có điểm neo là thất bại — tham chiếu như vậy một lần
Nếu nó bị loại ra, vi sai trong bảng so sánh không thể cho thấy bất thường nào, nên bạn chỉ có thể dựa vào điểm neo để bắt kịp. Tham chiếu khoảng ("Xem Mục 8, Mục 11 đến
14 mục) là ngoại lệ: nó chỉ toàn bộ một bài viết, và bạn không thể gán điểm neo cho mọi mục trong khối, chỉ dựa vào các túi khác nhau. 

Việc điểm neo có được tính hay không phụ thuộc vào độ dài và khoảng cách: toàn bộ câu có ba ký tự Trung Quốc liên tiếp khớp với tiêu đề ("đồ uống có đường," "bảo hiểm y tế cư trú"), 
Hoặc nếu hai ký tự tiếng Trung trong mệnh đề dấu phẩy nơi mệnh đề được dẫn thẳng hàng với nhau, nó được tính là điểm neo rắn; Chỉ có hai ký tự Trung phổ biến va chạm bên ngoài mệnh đề
('Tôi' hoặc 'Công ty') được coi là không có điểm neo. Hành động nghiêm ngặt hơn này được thêm vào ngày 20-09-2026: Mục 31 khi chèn mục
「…… Các khoản vay được liệt kê tại Điều 15 của mục này. Mục mới 'Làm việc từ xa cho các công ty nước ngoài tại nhà...... Tự nộp thuế thu nhập cá nhân' 
Chữ 'bạn vẫn là chính mình' được ngăn cách bởi hai dấu phẩy giả vờ là điểm neo, '--check' vào thời điểm đó báo cáo đã qua. 

Tổng cộng có 794 trích dẫn. 

## 01 - Đừng chết trẻ

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 13 | Điều 17, Điều 9 | Nếu đục thủy tinh thể của người cao tuổi đã ảnh hưởng đến thị lực, hãy đến bác sĩ nhãn khoa để đánh giá và phẫu thuật; Nếu cả hai mắt đều bị, đừng trì hoãn quá lâu lần thứ hai | … Nếu bạn không nhìn rõ đường, bạn có thể bị ngã nhiều hơn; đục thủy tinh thể ảnh hưởng đến tầm nhìn của bạn... |
| Điều 13 | Điều 39 của mục này | Phụ nữ trên 65 tuổi nên trải qua xét nghiệm mật độ xương bằng tia X năng lượng kép; các yếu tố nguy cơ loãng xương sau mãn kinh không cần phải chờ đến tuổi 65 | … Liệu xương có chịu được cú đánh hay không, xem phần này... |
| Điều 16 | Điều 18 của mục này | Phụ nữ trên 30 tuổi nên được sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | … Ngay cả sau khi tiêm vắc-xin, sàng lọc ung thư cổ tử cung vẫn cần thiết. Vắc-xin không thể thay thế sàng lọc, xem... |
| Điều 25 | Điều 32 của phần này | Khi ý nghĩ tự tử xuất hiện, trước tiên hãy nói với ai đó gần đó và trao cho tôi vài chục phút đó | … Để biết dữ liệu về khoảng thời gian này, cũng như kết quả dài hạn sau khi thử nghiệm, xem phần này... |
| Điều 25 | Điều 33 của phần này | Đừng lấy 'tiết kiệm' trở thành một mạng lưới an toàn: sau khi uống thuốc trừ sâu hoặc hít khí, điều trị khẩn cấp có thể cứu sống bạn, nhưng không cứu được phổi và não bộ của bạn | … Những gì sẽ còn lại sau khi được cứu? Xem phần này... |
| Điều 26 | Mục 13, Điều 12 | Đối với chảy máu nhiều, trước tiên ấn chặt vết thương bằng tay; nếu không thể giữ các chi, hãy quấn garô và đồng thời tiêm 120 | … Xem thêm về việc sử dụng garô... |
| Điều 26 | Điều 3 của phần này | Lắp đặt đầu báo khói; Lắp đặt đầu báo khí carbon monoxide cho đốt than trong nhà hoặc sưởi bằng gas vào mùa đông | … Các thiết bị báo khói và báo động khí carbon monoxide có thể được tìm thấy trong mục này... |
| Điều 28 | Điều 7 của phần này | Đo huyết áp; nếu huyết áp cao, hãy dùng thuốc để hạ xuống mức mục tiêu | … Những gì cần tra cứu và phần này... |
| Điều 28 | Điều 8 của mục này | Sau 35 tuổi, miễn là bạn thừa cân, hãy kiểm tra đường huyết lúc đói một lần; ngay cả khi bình thường, hãy kiểm tra lại mỗi ba năm | … Cần tra cứu gì và phần này... |
| Điều 28 | Điều 29 của mục này | Giảm cân, bỏ thuốc lá, kiểm soát huyết áp và đường huyết có thể cải thiện chức năng cương dương | … Để cải thiện, xem phần này... |
| Điều 28 | Điều 27 của mục này | Nếu có máu rõ ràng trong nước tiểu, dù không đau và ngày hôm sau đã sạch, bạn vẫn nên kiểm tra một lần | … Phần này... |
| Điều 29 | Mục 2, Điều 1 | Bỏ thuốc lá, càng sớm càng tốt | … Bỏ thuốc lá và xem sao... |
| Điều 29 | Mục 2, Điều 32 | Giữ chỉ số BMI trong khoảng 20–25 và giảm cân | … Để bỏ thuốc lá, xem Mục 2, Điều 1 (bỏ thuốc lá, càng sớm càng tốt). Để giảm cân, xem... |
| Điều 29 | Mục 28, Điều 4 | Không mua thuốc giảm cân, cà phê giảm cân, kẹo giảm cân, hoặc mận enzyme hứa hẹn 'giảm cân nhanh' | … Các 'thực phẩm bổ sung sức khỏe' trực tuyến thường bí mật thêm các thành phần này, với liều lượng không rõ ràng. Cách phân biệt chúng là... |
| Điều 29 | Điều 7 của mục này | Đo huyết áp; nếu huyết áp cao, dùng thuốc để hạ xuống mức mục tiêu | … Bỏ thuốc lá (bỏ thuốc lá, càng sớm càng tốt), giảm cân (giữ chỉ số BMI trong khoảng 20–25), huyết áp xem phần này... |
| Điều 32 | Mục 3, Điều 18 | Khi cảm thấy buồn, hãy làm những việc tiết kiệm chi phí nhất trước: vận động, tắm nắng, đi ngủ đúng giờ, nói chuyện với ai đó, gọi 12356 | … Một vài việc cần làm trước khi cảm thấy buồn... |
| Điều 32 | Điều 8, Điều 15 | Nếu ai đó xung quanh bạn nói 'Không ai dễ dàng' hoặc 'Hãy đưa đứa trẻ đi cùng', đừng coi đó là lời tức giận: người thân gần gũi có thể được đưa trực tiếp đến bệnh viện, nhưng cảnh sát phải can thiệp khi nhận được báo cáo | … Bạn có thể làm gì khi ai đó xung quanh bạn thể hiện suy nghĩ này? Xem này... |
| Điều 32 | Điều 25 của mục này | Gọi 12356 khi trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Di chuyển các phương pháp gây chết người ra xa và 12356 Xem phần này... |
| Điều 32 | Điều 33 của mục này | Đừng dùng 'tiết kiệm' như một mạng lưới an toàn: sau khi uống thuốc trừ sâu hoặc hít khí, các lần khám khẩn cấp có thể cứu sống bạn, nhưng không cứu được phổi và não bộ của bạn | … Những hậu quả sau khi được cứu được trình bày chi tiết trong phần này... |
| Điều 33 | Mục 13, Điều 19 | Khi chuông báo khí carbon monoxide vang lên, hoặc nếu mọi người trong phòng đều bị đau đầu và buồn nôn cùng lúc, hãy ra ngoài trước rồi gọi | … Dịch vụ xử lý carbon monoxide tại chỗ có thể được tìm thấy tại... |
| Điều 33 | Mục 13, Điều 20 | Không gây nôn nếu vô tình uống phải chất tẩy rửa, thuốc trừ sâu hoặc thuốc; mang theo bình và đi khám bác sĩ ngay lập tức; Nếu nước bắn vào mắt hoặc da, hãy rửa sạch với nhiều nước ít nhất 15 phút | … Nếu vô tình uống phải thuốc trừ sâu hoặc thuốc, không được gây nôn trước; hãy mang một chai đến bác sĩ để được chăm sóc y tế, xem... |
| Điều 33 | Điều 25 của mục này | Gọi 12356 khi bị trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn không tích trữ thuốc trừ sâu hoặc thuốc ngủ tại nhà, hãy xem phần này... |
| Điều 34 | Điều 17, Điều 8 | Nếu ai đó phải nằm liệt giường lâu dài, hãy coi loét do áp lực là kẻ thù số một của bạn: lên nệm hơi điện, xoay người thường xuyên và kiểm tra vùng xương nhô ra mỗi ngày | … Trong thời gian dài nằm nghỉ, loét áp lực quan trọng nhất cần chú ý là quan sát... |
| Điều 34 | Điều 13, Điều 11 | Nếu chân đột ngột sưng, cảm thấy căng hoặc đau khi ấn vào, hãy đi khám bác sĩ càng sớm càng tốt; Nếu bạn đột nhiên khó thở hoặc đau ngực, hãy gọi ngay số 120 | … Có thể thấy huyết khối tĩnh mạch sâu và thuyên tắc phổi... |
| Điều 34 | Điều 32 của phần này | Khi ý nghĩ tự tử xuất hiện, trước tiên hãy nói với ai đó gần đó và trao cho tôi vài chục phút đó | … Làm gì khi có suy nghĩ, xem phần này... |
| Điều 34 | Điều 33 của phần này | Đừng dùng 'tiết kiệm lại' như một mạng lưới an toàn: sau khi uống thuốc trừ sâu hoặc hít khí, các lần khám khẩn cấp có thể cứu sống bạn, nhưng không cứu được phổi và não bộ của bạn | … Hậu quả của ngộ độc được giải thích trong phần này... |
| Điều 35 | Điều 9, Điều 22 | Đừng tự bán nội tạng của mình, và đừng giúp người khác tìm người hiến tặng: Nếu bạn mua một quả thận với giá trên 20.000 nhân dân tệ, nhưng lại bán lại cùng một quả với giá 200.000, số tiền đó sẽ bị tịch thu và bạn sẽ bị phạt gấp 10 đến 20 lần số tiền giao dịch | … Các hạn chế về quyên góp hợp pháp, phạt tiền và trách nhiệm hình sự có thể được tìm thấy trong... |
| Điều 35 | Mục 16, Điều 1 | Uống đầy đủ liều thuốc theo đơn; đừng ngừng chỉ vì cảm thấy khá hơn | … Đối với những người đã trải qua chạy thận, định cư trực tiếp xuyên tỉnh và dùng thuốc lâu dài có thể được xem xét... |
| Điều 35 | Mục 16, Điều 2 | Trước tiên, nộp đơn xin chứng nhận ngoại trú cho bệnh mãn tính và bệnh đặc biệt, sau đó nộp hồ sơ liên vùng; tăng huyết áp, tiểu đường, xạ trị và hóa trị, chạy thận và chống đào thải có thể được giải quyết trực tiếp tại một địa điểm khác | … Đối với những người đã trải qua chạy thận, có thể nhận được việc định cư trực tiếp xuyên tỉnh và dùng thuốc lâu dài... |
| Điều 37 | Mục 9, Điều 13 | Có thể chơi Mahjong và poker, nhưng không được đặt cược hoặc chia bài, không có trò chơi để thu tiền, và không được đánh bạc trực tuyến | … Ranh giới pháp lý cho cờ bạc có thể được nhìn thấy... |
| Điều 37 | Điều 8, Điều 44 | Nếu một thành viên trong gia đình nợ cờ bạc, đừng vội vàng trả nợ: Nợ cờ bạc không được pháp luật bảo vệ, và tiền vay để cờ bạc không được coi là nợ chung trong hôn nhân | … Gia đình có nên trả nợ cờ bạc cho anh ấy không? Xem ... |
| Điều 37 | Điều 32 của phần này | Khi ý nghĩ tự tử xuất hiện, trước tiên hãy nói với ai đó gần đó và giao cho tôi vài chục phút này | … Phải làm gì nếu có ý nghĩ tự tử xuất hiện? Xem phần này... |
| Điều 38 | Mục 13, Điều 38 | Có thể tiếp xúc với HIV, hãy dùng thuốc chặn trong vòng 72 giờ, càng sớm càng tốt | … Hành vi rủi ro cao đã xảy ra; các biện pháp khắc phục có thể được tìm thấy tại... |
| Điều 38 | Điều 30 của mục này | Sử dụng bao cao su trong suốt các hoạt động quan hệ, không chia sẻ kim tiêm với người khác | … Nó không ngăn ngừa giang mai, lậu và các bệnh lây truyền qua đường tình dục khác; vẫn phải sử dụng bao cao su, xem phần này... |
| Điều 39 | Điều 13 của mục này | Thực hành thăng bằng và sức mạnh chân cho người trên 60 tuổi, và cải tạo phòng tắm, cầu thang tại nhà | … Bài này nói về việc liệu xương có chịu được cú ngã hay không, nên một cú ngã ít đi thì... |
| Điều 39 | Điều 40 của mục này | Nếu được chẩn đoán loãng xương, hoặc nếu có gãy xương do ngã nhẹ, hãy nhờ bác sĩ kê thuốc chống loãng xương và tiếp tục sử dụng; không thay thế bằng canxi bổ sung | … Phải làm gì sau khi chẩn đoán loãng xương? Xem ... |
| Điều 40 | Điều 39 của mục này | Phụ nữ trên 65 tuổi nên trải qua xét nghiệm mật độ xương bằng tia X năng lượng kép; những người có yếu tố nguy cơ loãng xương sau mãn kinh không cần phải chờ đến 65 tuổi | … Làm thế nào để phát hiện loãng xương? Xem ... |

## 02 - Đừng chết chậm rãi

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Điều 3 của phần này | Đừng chỉ dựa vào sức bền để bỏ thuốc lá; hãy đi lấy thuốc trước: tỷ lệ thành công của bạn có thể tăng hơn gấp đôi | …… |
| Điều 1 | Điều 4 của mục này | Đặt ngày bỏ thuốc và ngừng hút thuốc ngay lập tức trong ngày đó; đừng bắt đầu bằng cách giảm dần | … Điều 3 (Thuốc cai thuốc lá) 、... |
| Điều 1 | Điều 5 của mục này | Hãy đến thăm phòng khám cai thuốc lá, hoặc gọi số 12320 để hỏi xem có dịch vụ cai thuốc tại địa phương không | … Điều 3 (Thuốc cai thuốc lá), Điều 4 (Đặt ngày cai thuốc lá) 、... |
| Điều 1 | Điều 6 của mục này | Nếu bạn không thể bỏ thuốc lá điện tử trở lại, hãy tránh những người không hút thuốc trước đây | … Điều 3 (Thuốc cai thuốc lá), Điều 4 (Đặt ngày cai thuốc), Điều 5 (Đến phòng khám cai thuốc lá) 、... |
| Điều 2 | Điều 1 của mục này | Bỏ thuốc lá, càng sớm càng tốt | … Hãy bỏ thuốc lá, xem phần này... |
| Điều 3 | Điều 4 của mục này | Đặt ngày nghỉ và dừng lại ngay lập tức vào ngày đó; đừng bắt đầu bằng cách giảm dần | … Thuốc chỉ giải quyết sự khó chịu trong những tuần cai nghiện, không phải nhu cầu "hút thuốc", vì vậy phần này liên quan đến... |
| Điều 3 | Điều 5 của mục này | Hãy đến thăm phòng khám cai thuốc lá, hoặc gọi số 12320 để hỏi xem có dịch vụ cai thuốc tại địa phương không | … Thuốc chỉ xử lý sự khó chịu trong vài tuần cai thuốc, không phải lúc bạn muốn hút thuốc, vì vậy cần 、... theo Điều 4 của phần này (xác định ngày cai).
| Điều 5 | Điều 3 của phần này | Đừng chỉ dựa vào sức bền để bỏ thuốc lá; hãy đi lấy thuốc trước: tỷ lệ thành công của bạn có thể tăng gấp đôi | … Các loại thuốc cần chuẩn bị có thể tìm thấy trong phần này... |
| Điều 6 | Điều 22, Điều 4 | Không được ăn kẹo hoặc đồ ăn nhẹ do người lạ tặng, không uống đồ uống đã khuất tầm mắt, không nhận viên thuốc lá do người khác đưa cho bạn | … Đây là cách các 'thuốc lá điện tử hàng đầu' kết hợp với cannabinoid tổng hợp rò rỉ, xem thêm... |
| Điều 6 | Điều 3 của phần này | Đừng chỉ dựa vào sức bền để bỏ thuốc lá; hãy đi lấy thuốc trước: tỷ lệ thành công của bạn có thể tăng gấp đôi | … Theo thứ tự, hãy thử phần này trước... |
| Điều 13 | Điều 38 của mục này | Sau khi thức khuya, ngủ bù đêm này qua đêm khác; đừng tiết kiệm cho đến cuối tuần | … Cách bù đắp sau khi thức khuya có thể tìm thấy trong phần này... |
| Điều 19 | Điều 21 của phần này | Nếu bạn muốn uống ít hơn, trước tiên hãy đếm lượng bạn đã uống trong một tuần, sau đó trao đổi với bác sĩ vài phút | … Làm gì nếu bạn muốn uống ít hơn, xem phần này... |
| Điều 19 | Điều 20 của phần này | Nếu bạn uống rượu mỗi ngày và cảm thấy lo lắng mỗi lần dừng lại, đừng ép bản thân phải bỏ rượu | … Những người uống rượu mỗi ngày không thể ép mình bỏ; xem phần này... |
| Điều 20 | Điều 19 của mục này | Uống ít hoặc không uống rượu | … Lượng nước uống mỗi tuần được xem là nhiều, xem phần này... |
| Điều 20 | Điều 21 của mục này | Nếu bạn muốn uống ít hơn, trước tiên hãy đếm lượng nước bạn đã uống trong một tuần, sau đó trao đổi với bác sĩ vài phút | … Uống bao nhiêu nước mỗi tuần được coi là nhiều, xem mục 19 (uống ít hơn hoặc không uống). Phải làm gì nếu bạn muốn uống ít hơn? Xem phần này... |
| Điều 21 | Điều 20 của phần này | Nếu bạn uống rượu mỗi ngày và cảm thấy lo lắng mỗi lần dừng lại, đừng ép bản thân phải bỏ rượu | … Đối với những ai đã từng trải qua triệu chứng cai nghiện, hãy xem phần này... |
| Điều 28 | Điều 7 của phần này | Không uống đồ uống có đường; chuyển sang đồ uống không đường cũng không phải là giải pháp | … Thứ hai, nó liên quan đến đồ uống nhiều đường và thịt chế biến (... |
| Điều 28 | Điều 18 của mục này | Ăn ít thịt chế biến hơn (thịt nguội, thịt xông khói, xúc xích, thịt ăn trưa) | … Thứ hai, nó liên quan đến đồ uống nhiều đường và thịt chế biến (... |
| Điều 28 | Điều 7 của mục này | Không uống đồ uống có đường, chuyển sang đồ không đường cũng không phải là giải pháp | … Vậy trước tiên, chúng ta đi thôi... |
| Điều 28 | Điều 18 của mục này | Ăn ít thịt chế biến hơn (giăm bông, thịt xông khói, xúc xích, thịt ăn trưa) | … Vậy trước tiên, chúng ta sẽ... |
| Điều 32 | Mục 6, Điều 26 | Đừng mong đợi bữa sáng hay nhịn ăn nhẹ 16:8 sẽ giúp bạn kiểm soát cân nặng; hãy chọn thời gian ăn mà bạn có thể duy trì lâu dài | … Những người muốn giảm cân không cần lo lắng về bữa ăn; bữa sáng và nhịn ăn gián đoạn 16:8 không mang lại lợi ích bổ sung nào, xem... |
| Điều 37 | Mục 3, Điều 11 | Nếu bạn mệt vào buổi chiều, hãy ngủ trưa 10 phút, không phải nửa tiếng | … Cách làm mới bản thân bằng một giấc ngủ ngắn... |
| Điều 37 | Điều 13 của mục này | Ngủ khoảng 7 tiếng mỗi đêm, duy trì thói quen cố định | … Thời gian bạn ngủ vào ban đêm có thể được tìm thấy trong phần này... |
| Điều 38 | Mục 3, Điều 2 | Thời gian thức dậy cố định, áp dụng vào cuối tuần | … Vào cuối tuần, tôi cũng cố gắng dậy một thứ duy nhất... |
| Điều 38 | Điều 13 của mục này | Ngủ khoảng 7 tiếng mỗi đêm, duy trì thói quen cố định | … Việc cố định 'làm việc vào ngày thường, bổ sung vào cuối tuần' thành nhịp hàng tuần được gọi là lệch múi giờ xã hội, liên quan đến bệnh tim mạch. Xem phần này... |
| Điều 39 | Điều 1 của mục này | Bỏ thuốc lá, càng sớm càng tốt | … Xem phần này để từ bỏ thuốc lá... |
| Điều 39 | Điều 12 của mục này | Nếu bạn bị tăng huyết áp hoặc cholesterol cao, hãy dùng thuốc theo chỉ định và không được tự ý ngừng thuốc | … Bỏ thuốc lá như quy định tại Điều 1 của phần này (bỏ thuốc lá, còn sớm càng tốt). Huyết áp và mức lipid được liệt kê trong phần này... |
| Điều 39 | Điều 38 của mục này | Sau khi thức khuya, ngủ bù đêm này qua đêm khác; đừng tiết kiệm cho cuối tuần | … Huyết áp và lipid được liệt kê ở mục 12 của phần này (nếu bạn bị tăng huyết áp hoặc lipid máu cao, hãy dùng thuốc theo chỉ định). Cách bổ sung giấc ngủ sau ca đêm được trình bày trong phần này... |
| Điều 42 | Điều 29 của mục này | Nấu ăn và sưởi ấm, không đốt than hoặc củi; thay thế bằng điện hoặc khí | … Khi nấu ăn, không đốt than hoặc củi. Xem phần này... |

## 03 - Đừng lãng phí năng lượng

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Giới thiệu phần | Điều 19 của phần này | Hãy đối xử với cảnh sát, bác sĩ và nhân viên giao dịch như những người tuân thủ quy tắc, chứ không phải vai trò: Điều thúc đẩy tiến trình là tài liệu và thời hạn, không phải cảm xúc | …… |
| Giới thiệu phần | Điều 15 của phần này | Hãy xem những suy nghĩ như 'mọi thứ chắc chắn sẽ tệ hơn' như triệu chứng, chứ không phải sự thật | …… |
| Giới thiệu phần | Điều 22 của phần này | Hãy xem 'Người khác đòi hỏi tôi phải hoàn hảo' như một triệu chứng, không phải là sự thật | … Điều 15 (Xem bi quan như một triệu chứng) và... |
| Điều 2 | Điều 2, Điều 38 | Sau khi thức khuya, ngủ bù đêm này qua đêm khác; đừng để dành cho cuối tuần | … Làm thế nào để bổ sung sau khi thỉnh thoảng thức khuya? Xem thêm... |
| Điều 3 | Mục 2, Điều 13 | Ngủ khoảng 7 giờ mỗi đêm, với lịch trình cố định | … Mối quan hệ giữa thời gian bạn ngủ và nguy cơ tử vong được tính riêng biệt, xem... |
| Điều 4 | Điều 3 của phần này | Ngủ từ 7 đến 8 giờ mỗi đêm; đừng nghĩ 6 giờ là đủ | … Uống ít caffeine đổi lấy thời gian ngủ lâu hơn, và...
| Điều 6 | Mục 1 | Tắt các thông báo không cần thiết và giữ điện thoại khuất tầm nhìn khi làm việc | … Nhóm sau nên được phối hợp... |
| Điều 6 | Điều 5 của phần này | Thay đổi email và tin nhắn sang xử lý theo lô nhiều lần trong ngày | … Loại sau nên được phối hợp với Điều 1 (tắt các thông báo không cần thiết) và... |
| Điều 9 | Điều 3 của phần này | Ngủ từ 7 đến 8 giờ mỗi đêm, đừng nghĩ 6 giờ là đủ | … Chi phí thức khuya được giải thích trong phần này... |
| Điều 11 | Mục 2, Điều 37 | Giữ giấc ngủ trưa dưới nửa giờ, không quá một giờ. Nếu bạn phải ngủ một hoặc hai tiếng để vượt qua, hãy điều tra nguyên nhân | … Ngủ trưa thêm một giờ thực sự liên quan đến tỷ lệ tử vong cao hơn và nguy cơ bệnh tim mạch vành, xem thêm... |
| Điều 18 | Mục 22, Điều 6 | Khi cảm thấy buồn, hãy đi bộ hoặc chạy; kích thước tác dụng chống trầm cảm (mức độ lớn) tỷ lệ thuận với cường độ | … Đối với trầm cảm, đi bộ nhanh và chạy bộ là hiệu quả nhất; cường độ càng cao thì càng hiệu quả. Chi tiết có thể được tìm thấy tại ... |
| Điều 18 | Mục 1, Điều 25 | Gọi 12356 khi cảm thấy trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn có ý nghĩ tự tử từ mức vừa đến nặng và đang có ý định tự tử, bạn nên gọi số 12356 trước (xem... |).
| Điều 19 | Mục 8, Điều 39 | Biên nhận nhận vụ việc phải có ngay tại chỗ khi báo cáo với cảnh sát; nếu không nộp, cần có thông báo bằng văn bản: trong vòng 7 ngày, có thể nộp đơn xin xem xét lại, và sau 7 ngày nữa, có thể yêu cầu xem xét lại. Viện kiểm sát có thể thông báo cho an ninh công cộng để nộp đơn khiếu nại | … Tất cả các số liệu được trích dẫn trong bài viết này đều đến từ... |
| Điều 19 | Mục 24, Điều 7 | Chấn thương nghiêm trọng và chấn thương nên chuyển thẳng đến quầy phân loại trước khám khẩn cấp; không xếp hàng tại quầy đăng ký | … Các ưu tiên pháp lý được nêu rõ, ví dụ, các khoa cấp cứu được phân loại theo bệnh tật, không phải theo người được phục vụ trước (... |).
| Điều 19 | Điều 24, Điều 11 | Cảm ơn bác sĩ đã cứu bạn, gửi thư cảm ơn, biểu ngữ và đánh giá hài lòng, nhưng đừng gửi phong bao đỏ: quy định cấm tiền, không cấm biết ơn | … Nếu bạn muốn cảm ơn bác sĩ đã cứu bạn, chỉ cần viết thư cảm ơn và đánh giá hài lòng, xem... |
| Điều 19 | Điều 8, Điều 40 | Không cấp tiền hoặc thẻ cho những người xử lý vụ việc hoặc cơ quan thực thi pháp luật: Nếu bạn hối lộ chính mình, bạn sẽ bị xét xử, nhưng đối với nhân viên giám sát, thực thi pháp luật hoặc tư pháp, hối lộ nên được xử lý nghiêm khắc hơn | … Cố gắng 'cho thứ gì đó để khiến họ chú ý hơn' bị coi là hối lộ cho những người xử lý vụ án và lực lượng thực thi pháp luật, và hình phạt rõ ràng nghiêm khắc hơn, xem... |
| Điều 20 | Mục 4, Điều 15 | Đặt giới hạn cứng cho video ngắn và chiếu màn hình không mục đích | … Tổng thời gian sử dụng màn hình là đây... |
| Điều 20 | Mục 4, Điều 16 | Không xem TV hoặc tin tức liên tục; thông tin bạn cần nên được xem vào các thời điểm định kỳ | … Tổng thời gian sử dụng màn hình là đây... |
| Điều 20 | Mục 6, Điều 23 | Đừng mong mua sắm sẽ cải thiện tâm trạng hay cảm giác nhận diện của bạn | … Lấy lại cảm giác bản sắc qua việc mua sắm... |
| Điều 20 | Mục 6, Điều 24 | Đừng bỏ thêm tiền để nâng cấp ngôi nhà, xe hơi hay vòng tròn chỉ để 'thăng tiến trong số những người xung quanh' | … Chi thêm tiền để "lên một bậc" nhằm khám phá...
| Điều 20 | Điều 18 của phần này | Khi cảm thấy buồn, hãy làm những việc tiết kiệm chi phí nhất trước: vận động, tắm nắng, đi ngủ đúng giờ, nói chuyện với ai đó, gọi 12356 | … Điều đầu tiên cần làm khi cảm thấy buồn, xem phần này... |
| Điều 22 | Mục 1, Điều 25 | Gọi 12356 khi trầm cảm hoặc có ý nghĩ tự tử; không tích trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn có ý nghĩ tự tử, trước tiên hãy gọi 12356. Di chuyển phương pháp gây chết người ra xa, xem... |
| Điều 22 | Điều 8, Điều 15 | Nếu ai đó xung quanh bạn nói 'Không ai dễ dàng' hoặc 'Hãy đưa đứa trẻ đi cùng', đừng coi đó là lời tức giận: người thân gần gũi có thể được đưa thẳng đến bệnh viện, nhưng cảnh sát cũng phải can thiệp khi nhận được báo cáo | … Bạn có thể làm gì khi ai đó xung quanh bạn thể hiện kiểu suy nghĩ này? Xem này... |
| Điều 22 | Mục 30, Điều 8 | Trẻ em từ 12 đến 18 tuổi nên trải qua sàng lọc trầm cảm; không sử dụng đánh giá tâm lý học đường làm chẩn đoán | … Để sàng lọc trầm cảm ở trẻ em, xem... |
| Điều 22 | Điều 15 của phần này | Hãy xem những suy nghĩ như 'mọi thứ chắc chắn sẽ tệ hơn' như triệu chứng, chứ không phải sự thật | … Nó và... |
| Điều 23 | Điều 22, Điều 8 | Nếu bạn muốn hồi phục ngay tại chỗ, hãy sử dụng 5 phút 'thở dài vòng tròn': hít vào thành hai giai đoạn, thở ra kéo dài hơn | … Phương pháp có thể áp dụng ngay tại chỗ là xem... |
| Điều 23 | Mục 22, Điều 6 | Khi cảm thấy buồn, hãy đi bộ hoặc chạy bộ; kích thước tác dụng chống trầm cảm (mức độ lớn) tỷ lệ thuận với cường độ | … Về lâu dài, nó có hiệu quả trong việc giảm cảm giác chán nản, xem... |
| Điều 23 | Điều 8, Điều 43 | Bạo lực gia đình: trước tiên phải báo cáo với cảnh sát để lưu giữ hồ sơ cảnh sát, sau đó nộp đơn lên tòa án để xin lệnh bảo vệ an toàn cá nhân. Không cần ly hôn trước, và không tính phí | … Lúc đó, không phải là xử lý cảm xúc, mà là gặp gỡ... |
| Điều 23 | Điều 17 của mục này | Khi tức giận, hãy rời đi trước; đối xử với người kia như thời tiết, không phải kẻ thù | … Xem các phương pháp có sẵn ngay tại chỗ (thở dài liên tục), và cả phần này... |
| Điều 24 | Mục 1, Điều 25 | Gọi 12356 khi bị trầm cảm hoặc có ý định tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Càng viết nhiều, tình hình càng tệ hơn, nên tôi dừng lại và gọi 12356, xem này... |

## 04 - Đừng lãng phí thời gian

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 2 | Điều 3 của phần này | Khi quyết định có tiếp tục hay không, chỉ xem xét các khoản đầu tư trong tương lai và lợi nhuận tương lai, không phải số tiền đã đầu tư | … Khi đưa ra đánh giá, chỉ nên xem xét các khoản đầu tư tương lai và lợi nhuận tương lai, xem... |
| Điều 9 | Điều 1 của phần này | Viết 'kế hoạch làm' thành 'tại thời điểm nào, ở đâu, bất cứ điều gì xảy ra, làm bất cứ điều gì bạn gặp' | … Các hành động cụ thể trong phần này... |
| Điều 9 | Điều 7 của phần này | Chia nhỏ các nhiệm vụ lớn thành các nhiệm vụ con, đánh giá lại và bắt đầu lại | … Các hành động cụ thể được mô tả trong Điều 1 của phần này (viết là "Thời gian, địa điểm, bất cứ điều gì bạn gặp phải")、... |
| Điều 9 | Điều 8 của phần này | Tự đặt ngày cho các vấn đề không có hạn chót bên ngoài | … Mục 1 (viết là "ở đâu, ở đâu, bất cứ thứ gì bạn gặp"), Điều 7 (chia nhỏ các nhiệm vụ chính thành các nhiệm vụ phụ) 、... |
| Điều 10 | Mục 3, Điều 1 | Tắt các thông báo không cần thiết và giữ điện thoại khuất tầm mắt khi làm việc | … Ai đó đã thử nghiệm trực tiếp việc để điện thoại khuất tầm nhìn, xem này... |
| Điều 11 | Mục 2, Điều 3 | Đừng chỉ dựa vào sức bền để bỏ thuốc lá; hãy đi lấy thuốc trước: tỷ lệ thành công của bạn có thể tăng gấp đôi | … Làm thế nào để tự bỏ thuốc lá... |
| Điều 12 | Điều 1 của phần này | Viết 'kế hoạch làm' thành 'thời gian, ở đâu, bất cứ điều gì xảy ra, làm bất cứ điều gì bạn gặp' | … Để lặp lại, hãy liên kết hành động với một cảnh cố định, xem phần này... |
| Điều 13 | Mục 3, Điều 18 | Khi cảm thấy buồn, hãy làm những việc tiết kiệm chi phí nhất trước: vận động, tắm nắng, đi ngủ đúng giờ, nói chuyện với ai đó, gọi 12356 | … Sự trì hoãn đi kèm với tâm trạng thấp hoặc lo âu rõ ràng, nên lần nhấn đầu tiên ... |
| Điều 13 | Điều 10 của phần này | Giữ những vật dụng bạn cần gần bên mình, tránh xa những thứ bạn không muốn chạm vào, và đừng mong giữ lại ngay tại chỗ | … Kiểm soát kích thích cũng nằm trong phần này... |
| Điều 15 | Mục 3, Điều 20 | Đừng biến "Người khác thế nào" thành tài liệu bắt buộc phải đọc hàng ngày: Giới hạn hoặc tắt các ứng dụng tăng cường hoạt động đồng nghiệp | … Trong số đó, đối với các chủ đề như "người khác đang làm thế nào," các thử nghiệm ngẫu nhiên đã đo lường mức độ cứu được và mức độ thay đổi cảm xúc. Xem thêm... |

## 05 - Đừng lãng phí tiền

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 8 | Điều 9 của mục này | Khi trẻ sử dụng điện thoại di động để nạp tiền và đưa tiền tip, các khoản chi lớn trên tám tuổi sẽ không được phụ huynh theo đuổi hoặc phê duyệt và có thể được yêu cầu hoàn tiền | … Các văn bản gốc của Điều 19 và 145 Bộ luật Dân sự đã được tìm thấy trong... |
| Điều 10 | Mục 8, Điều 2 | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán; đừng tự điều tra bản thân trước | … Số tiền bị lừa bởi kẻ lừa đảo không áp dụng cho điều khoản đó; nó chỉ có thể được thực hiện theo... |
| Điều 10 | Mục 8, Điều 3 | Hãy nhớ các quy tắc chống gian lận nghiêm ngặt: không tin tưởng cuộc gọi, không tiết lộ thông tin, không nhấp vào liên kết, xác minh nhiều lần chuyển khoản—bảy chiêu lừa đảo phổ biến nhất đều có dạng này | … Một phiên bản người lớn của việc giả danh người quen, cộng thêm AI hoán đổi khuôn mặt, xem... |
| Điều 10 | Mục 8, Điều 4 | Nhìn thấy khuôn mặt trong video hoặc nghe giọng nói trên điện thoại không được tính là xác minh. Đối với chuyển khoản, hãy cúp máy trước và gọi lại bằng số cũ trong sổ địa chỉ của bạn | … Phiên bản người lớn của việc giả danh người quen, cộng với AI hoán đổi khuôn mặt, xem... |
| Điều 10 | Điều 9 của phần này | Khi trẻ em sử dụng điện thoại di động để nạp tiền và đưa tiền tip, các chi phí lớn trên tám tuổi sẽ được yêu cầu hoàn trả mà không cần sự đồng ý của phụ huynh | … Chúng ta phải ở bên nhau với... |
| Điều 12 | Mục 16, Điều 3 | Các lần khám tiếp theo nên được thực hiện theo khoảng thời gian do bác sĩ quy định, và mỗi lần nên ghi dấu các ngón tay trong cùng một cuốn sổ tay | … Thứ hai, sau khi đổi thuốc cho các bệnh mãn tính, đừng đánh giá dựa trên trực giác, hãy tiếp tục... |
| Điều 16 | Điều 7 của phần này | Không có khoản trả tối thiểu thẻ tín dụng, không có kế hoạch trả góp hoặc khoản vay tiêu dùng để tiêu dùng | … Việc sử dụng các khoản vay tiêu dùng hoặc thẻ tín dụng để rút tiền đầu tư cũng là một hình thức đòn bẩy ngụy trang. Lãi suất của chúng được trình bày trong phần này... |
| Điều 19 | Điều 17 của phần này | Sử dụng các quỹ chỉ số rộng thay vì quỹ chủ động làm vị thế đáy dài hạn (giữ phần tiền không thay đổi dài hạn) | … Mua các quỹ chỉ số toàn diện (xem phần này... |).
| Điều 20 | Điều 27 của mục này | Trước tiên, dành một quỹ khẩn cấp cho chi phí sinh hoạt từ 3 đến 6 tháng và giữ ở nơi bạn có thể mang theo bất cứ lúc nào | … Đừng khóa quỹ khẩn cấp chỉ để 'mua một món hời' (xem quỹ khẩn cấp... |
| Điều 20 | Mục 17 của mục này | Sử dụng các quỹ chỉ số toàn diện thay vì quỹ quản lý chủ động làm vị thế cơ sở dài hạn (phần tiền giữ cho dài hạn) | … Quy tắc lựa chọn sản phẩm và phần này... |
| Điều 20 | Điều 18 của mục này | Các quỹ tương tự được ưu tiên cho những quỹ có mức phí thấp hơn | … Quy tắc lựa chọn sản phẩm và phần này... |
| Điều 20 | Điều 2 của mục này | Từ tháng 3 đến tháng 6 hàng năm, tiến hành đối chiếu thuế thu nhập cá nhân và điền các khoản khấu trừ bổ sung cụ thể cần được điền | … Một phương pháp là khấu trừ thuế khi trả lương trong cùng năm, và phương pháp còn lại là khấu trừ lại trong năm thanh toán thứ hai (xem phần đối chiếu để biết chi tiết... |).
| Điều 27 | Điều 7 của mục này | Không có khoản trả nợ thẻ tín dụng tối thiểu, không có kế hoạch trả góp hoặc khoản vay tiêu dùng để tiêu dùng | … Để biết lãi suất trả nợ tối thiểu hàng năm cho các khoản vay tiêu dùng và thẻ tín dụng, xem phần này... |
| Điều 29 | Điều 32 của phần này | Trước khi mua các mặt hàng lớn, trước tiên hãy kiểm tra các thông báo kiểm tra quốc gia, chứng nhận 3C và nhãn hiệu quả năng lượng | … Chỉ có kết quả kiểm tra ngẫu nhiên tổng thể mới được tìm thấy (xem... |).
| Điều 29 | Điều 23 của mục này | Thời gian làm mát 24 giờ áp dụng cho các giao dịch mua hàng lớn không thiết yếu; mua sắm trực tuyến nên tận dụng tốt chính sách trả hàng không lý do trong bảy ngày | … Trả hàng không lý do trong bảy ngày, xem phần này... |
| Điều 31 | Điều 8, Điều 22 | Nếu bạn bị lừa đảo trong mua sắm trực tuyến hoặc giao dịch đã qua sử dụng, trước tiên hãy khiếu nại với nền tảng, sau đó báo cảnh sát, rồi tính xem có đáng để kiện hay không | … Nếu thương nhân cứng đầu từ chối thừa nhận, lựa chọn duy nhất còn lại là kiện. Làm thế nào để tính các vụ kiện tranh chấp nhỏ... |
| Điều 31 | Mục 12, Điều 8 | Khi làm thực phẩm, trước tiên hãy xem xét bạn thuộc nhóm nào: sản xuất và phục vụ ăn uống yêu cầu giấy phép; chỉ cần đăng ký sản phẩm đóng gói sẵn; thịt và rau tươi không cần giấy phép | … Chi tiết có thể xem thêm... |
| Điều 31 | Mục 12, Điều 9 | Bán hàng đóng gói là thực phẩm đóng gói sẵn: ngày sản xuất, thời hạn sử dụng và danh sách thành phần trên nhãn không được bỏ sót | … Chi tiết có thể xem tại... |
| Điều 31 | Mục 12, Điều 10 | Thực phẩm thông thường không được tuyên bố có thể chữa bệnh: nhãn, hướng dẫn, quảng cáo và kịch bản phát trực tiếp đều được tính | … Chi tiết xem... |
| Điều 31 | Điều 12, Điều 11 | Ngành công nghiệp thực phẩm có giới hạn hình sự: bán thịt bị bệnh hoặc thịt chết hoặc vượt quá tiêu chuẩn được coi là tội phạm; nếu trộn lẫn các chất độc hại hoặc có hại, số tiền sẽ không được tính, và mức án là năm năm | … Chi tiết có thể xem tại... |
| Điều 31 | Điều 29 của phần này | Mua sắm trực tuyến công nhận các quy tắc và luật của nền tảng, nhưng không công nhận chủ nhà hoặc 'đánh giá tích cực' | … Đối với hàng hóa thông thường, gian lận được bồi thường gấp ba lần; đối với số tiền dưới 500 nhân dân tệ, tính là 500 nhân dân tệ. Xem phần này... |
| Điều 34 | Điều 32 của phần này | Trước khi mua các mặt hàng lớn, trước tiên hãy kiểm tra các thông báo kiểm tra quốc gia, chứng nhận 3C và nhãn hiệu quả năng lượng | … Để biết các phương pháp tổng quát để kiểm tra các vật thể lớn, xem phần này... |
| Điều 34 | Điều 29 của phần này | Mua sắm trực tuyến công nhận các quy tắc và luật của nền tảng, không công nhận chủ nhà hoặc 'đánh giá tích cực' | … Bạn nên tìm đến ai khi có sự cố trong livestream? Nhìn này... |
| Điều 34 | Điều 30 của phần này | Nếu một sản phẩm mua trong phòng livestream gặp vấn đề, nền tảng phải yêu cầu thông tin về người bán và người bán trước. Nền tảng phải cung cấp | … Bạn nên tìm đến ai khi có sự cố trong livestream? Nhìn này... |
| Điều 35 | Mục 6, Điều 23 | Đừng mong mua đồ sẽ cải thiện tâm trạng hay cảm giác địa vị của bạn | ...Chu kỳ 'mua sắm phai nhạt sau khi xử lý, rồi lại tiếp tục mua' nhìn thấy... |
| Điều 35 | Điều 9 của phần này | Khi trẻ em sử dụng điện thoại di động để nạp tiền và đưa tiền tip, các khoản chi lớn trên tám tuổi sẽ được yêu cầu hoàn trả mà không cần sự đồng ý của cha mẹ | … Làm thế nào để được hoàn tiền cho trẻ em đã nạp tiền điện thoại hoặc bo tiền cho chúng? Xem phần này... |
| Điều 35 | Điều 23 của mục này | Thời gian làm mát 24 giờ áp dụng cho các giao dịch mua hàng lớn không thiết yếu; mua sắm trực tuyến nên tận dụng tốt việc trả hàng không hỏi trong bảy ngày | … Thời gian làm mát 24 giờ cho các khoản mua lớn không thiết yếu, xem... |
| Điều 36 | Mục 12, Điều 9 | Hàng đóng gói là thực phẩm đóng gói sẵn: ngày sản xuất, thời hạn sử dụng và danh sách thành phần trên nhãn phải được bỏ qua | … Bạn nên dán nhãn cửa hàng thực phẩm đóng túi của mình như thế nào khi mở cửa hàng? Xem thêm... |
| Điều 37 | Điều 15 của phần này | Tránh giao dịch cổ phiếu thường xuyên, và tránh mua trong thời gian thị trường biến động | … Quy định này điều chỉnh 'có nên bán' hay không,... |
| Điều 37 | Điều 19 của mục này | Đừng đặt cược tiền của bạn vào cổ phiếu, nền tảng hoặc nhà cái | … Sai lầm là xem nó như một cách để xoay chuyển tình thế. Tác động thực tế của nó là số tiền bạn đặt cược vào cổ phiếu này sẽ tăng lên, xem... |
| Điều 38 | Điều 21, Điều 6 | Rút tiền mặt ra nước ngoài không được vượt quá 100.000 RMB mỗi năm, tính bằng cách gộp tất cả các thẻ dưới tên tôi | … Có giới hạn bổ sung cho việc rút tiền mặt ra nước ngoài, xem... |
| Điều 38 | Điều 17 của phần này | Sử dụng quỹ chỉ số rộng rãi thay vì quỹ chủ động làm vị thế cơ sở dài hạn (giữ phần tiền không thay đổi trong dài hạn) | … Khi mua QDII, nhấn cùng một ... |
| Điều 38 | Điều 19 của phần này | Không đặt cược tiền vào cổ phiếu, nền tảng hoặc nhà cái | … Việc mua QDII cũng được thực hiện theo Điều 17 (quỹ chỉ số đa dạng) và... |
| Điều 39 | Mục 7, Điều 20 | Trước khi mắc bệnh nặng, hãy thêm bảo hiểm y tế một năm hoặc bảo hiểm bệnh hiểm nghèo bên cạnh bảo hiểm y tế cơ bản, và hiểu rõ cụm từ "gia hạn đảm bảo" | … Bảo hiểm y tế một năm khi... |
| Điều 39 | Điều 21, Điều 4 | Mua bảo hiểm bao gồm chuyển giao y tế và y tế ở nước ngoài, không chỉ bảo hiểm trễ chuyến bay | … Đối với những ai đi nước ngoài, hẹn gặp lại... |
| Điều 39 | Điều 26 của mục này | Mua bảo hiểm bên thứ ba đầy đủ: Giới hạn bảo hiểm giao thông bắt buộc được thống nhất trên toàn quốc và không cao; bất kỳ khoản khấu trừ nào có thể được chi trả từ chính hộ gia đình của bạn | … Nếu bạn có xe, xem phần này... |
| Điều 39 | Điều 40 của mục này | Nếu ai đó trong gia đình bạn sống dựa vào thu nhập của bạn, hãy mua bảo hiểm nhân thọ có thời hạn trước cho người có thu nhập, không phải cho con cái trước | … Nếu ai đó trong gia đình bạn sống dựa vào thu nhập của bạn, xem phần này... |
| Điều 39 | Mục 7, Điều 9 | Bảo hiểm y tế cư trú là 400 nhân dân tệ mỗi năm, không bị gián đoạn; các hộ gia đình gặp khó khăn có thể được giảm thuế | … Bảo hiểm y tế cơ bản là bảo hiểm xã hội; nếu bạn không chọn theo phương pháp này, bạn vẫn phải chi trả, xem... |
| Điều 39 | Điều 27 của mục này | Đầu tiên, gửi quỹ khẩn cấp tương đương chi phí sinh hoạt từ 3 đến 6 tháng và giữ nó luôn sẵn sàng sử dụng bất cứ lúc nào | … Làm thế nào để dựa vào những tổn thất nhỏ? Xem phần này... |
| Điều 40 | Mục 7, Điều 20 | Trước khi mắc bệnh nặng, thêm bảo hiểm y tế một năm hoặc bảo hiểm bệnh hiểm nghèo bên cạnh bảo hiểm y tế cơ bản; hiểu rõ cụm từ "gia hạn đảm bảo" | … Thông báo trung thực và đảm bảo cách gia hạn bảo hành, xem... |
| Điều 41 | Điều 25 của mục này | Ưu tiên cho chính sách bảo hiểm tiêu dùng, coi 'lợi nhuận' và 'cổ tức' là các phần không được đảm bảo | … Bảo hiểm tiết kiệm và tham gia trả rất cao, vì vậy thời gian do dự là đáng giá nhất. Xem phần này... |
| Điều 42 | Điều 41 của mục này | Nếu bạn có bảo hiểm cá nhân hơn một năm và hối hận, hãy hủy trong thời gian hạ nhiệt, và cơ bản hoàn trả phí bảo hiểm | … Nếu đã ký, trong vòng 15 ngày theo mục này... |
| Điều 42 | Điều 43 của mục này | Nếu bạn muốn hủy hợp đồng, hãy tự đến công ty bảo hiểm. Đừng sử dụng 'đại lý hủy hợp đồng' và cảm thấy bị lừa dối. Gọi 12378 để khiếu nại | … Nếu bạn cảm thấy bị lừa dối, làm sao bạn có thể khiếu nại? Xem phần này... |
| Điều 43 | Điều 41 của mục này | Nếu bạn có bảo hiểm cá nhân hơn một năm và cảm thấy hối hận, hãy hủy trong thời gian hạ nhiệt, và cơ bản hoàn toàn toàn bộ phí bảo hiểm | … Nếu bạn rút lui trong thời gian do dự, xem phần này... |
| Điều 44 | Điều 25, Điều 9 | Tiền rải rác khắp khu vực phải được rút từng khoản một: số dư quỹ nhà ở, trợ cấp an sinh xã hội, trợ cấp tai nạn lao động | … Sau khi người đó rời đi, lần lượt đi thu tiền từ từng nơi, xem |
| Điều 44 | Điều 29, Điều 13 | Đừng xem bảo hiểm nhân thọ như một cách để trả nợ: bảo hiểm nhân thọ trong vòng hai năm sẽ không thanh toán, tai nạn lao động không được công nhận, nhưng các khoản nợ vẫn được khấu trừ từ tài sản trước | … Con đường trả nợ bằng cái chết không hiệu quả, xem này... |

## 06 - Danh sách tiêu cực

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 10 | Mục 1, Điều 20 | Người mắc bệnh tim mạch và người cao tuổi nên tiêm vắc-xin cúm hàng năm | … Đi cùng người cao tuổi tiêm vắc-xin cúm hàng năm, xem... |
| Điều 10 | Mục 1, Điều 21 | Vắc-xin zona sau tuổi 50 | … Đối với vắc-xin zona sau 50 tuổi, xem ... |
| Điều 10 | Mục 1, Điều 22 | Tiêm phòng phế cầu cho người trên 65 tuổi | … Đối với những người trên 65 tuổi, vắc-xin phế cầu có thể được tìm thấy ở... |
| Điều 10 | Mục 1, Điều 7 | Đo huyết áp; nếu huyết áp cao, dùng thuốc để hạ xuống mức mục tiêu | … Mua máy đo huyết áp, theo dõi anh ấy uống tất cả thuốc hạ huyết áp theo chỉ định, và giữ huyết áp ở mức mục tiêu, xem thêm... |
| Điều 10 | Mục 1, Điều 13 | Thực hành thăng bằng và sức mạnh chân cho người trên 60 tuổi, và cải tạo phòng tắm cùng cầu thang tại nhà | … Cải tạo phòng tắm và cầu thang tại nhà, huấn luyện nó thăng bằng và sức mạnh chân, xem... |
| Điều 10 | Mục 1, Điều 17 | Phụ nữ nên bắt đầu sàng lọc ung thư vú ở tuổi 40, chụp nhũ ảnh mỗi hai năm một lần | … Khi anh ấy lớn lên, hãy đi cùng anh ấy đi tầm soát ung thư, xem... |
| Điều 10 | Mục 1, Điều 18 | Phụ nữ trên 30 tuổi nên được sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | … Khi anh ấy lớn lên, hãy đi cùng anh ấy đi tầm soát ung thư, xem... |
| Điều 10 | Mục 1, Điều 19 | Từ 45 đến 50 tuổi, sàng lọc ung thư đại trực tràng được thực hiện, bao gồm các xét nghiệm miễn dịch hóa chất phân cho máu ẩn trong phân hoặc nội soi đại tràng | … Khi con lớn hơn, hãy đi khám xét nghiệm ung thư cùng con, xem |
| Điều 10 | Điều 17, Điều 7 | Nếu người cao tuổi phải nằm liệt giường lâu hoặc bị tàn tật nặng, hãy đăng ký bảo hiểm chăm sóc dài hạn tại phòng bảo hiểm y tế địa phương; Bảo hiểm này không chỉ được cấp cho người cao tuổi | … Đối với người cao tuổi phải nằm liệt giường lâu dài, bảo vệ loét do áp lực và bảo hiểm chăm sóc dài hạn có thể tìm thấy tại... |
| Điều 10 | Mục 17, Điều 8 | Khi ai đó phải nằm liệt giường lâu dài, loét do áp lực là kẻ thù số một của họ: hãy lên nệm hơi điện, lật người thường xuyên và kiểm tra vùng xương nhô ra mỗi ngày | … Đối với người cao tuổi phải nằm liệt giường lâu dài, bảo hiểm bảo vệ loét do áp lực và chăm sóc dài hạn có thể tìm thấy tại... |
| Điều 10 | Điều 17, Điều 5 | Không được động vào bất kỳ "nghỉ hưu đầu tư" nào yêu cầu người cao tuổi phải trả trước: đăng ký thẻ, mua giường, mua căn hộ cho người cao tuổi, sống trong thời gian nghỉ hưu hoặc mua sản phẩm cho người cao tuổi đều là hành vi gây quỹ bất hợp pháp | … Một loại là hưu trí đầu tư, nơi bạn trả trước, loại còn lại là thay thế cho thuốc. Xem thêm... |
| Điều 16 | Mục 19, Điều 10 | Thiệt hại do bụi, tiếng ồn và độc tố hóa học gây ra là không thể phục hồi: thiết bị phải được cung cấp thiết bị; các hoạt động không có biện pháp bảo vệ có thể bị từ chối | … Việc che chắn ánh sáng dựa vào kính bảo hộ và khẩu trang, không phải kính chắn ánh sáng xanh, xem này... |
| Mục 16 | Mục 13, Điều 6 | Một mắt bị sưng, đau và đỏ; ánh sáng hiện ra một vòng cầu vồng, kèm theo đau đầu, buồn nôn và buồn nôn. Ngày hôm đó tôi đã đến khoa cấp cứu nhãn khoa | … Đau đầu, buồn nôn và nôn mửa là các cơn tăng nhãn áp cấp tính do đóng góc, có thể chèn ép dây thần kinh thị giác chỉ trong vài ngày. Bạn cần đến khoa cấp cứu nhãn khoa trong cùng ngày để kiểm tra... |
| Điều 16 | Điều 30, Điều 4 | Cho phép trẻ em ở ngoài trời ít nhất 2 giờ mỗi ngày hiện là phương pháp duy nhất được hỗ trợ bởi các thử nghiệm ngẫu nhiên để ngăn ngừa cận thị | … Cách trẻ em và thanh thiếu niên có thể phòng ngừa cận thị, xem... |
| Điều 16 | Mục 30, Điều 12 | Nếu phát hiện thị lực kém, hãy đến bệnh viện để đo khúc xạ mắt giãn rộng, sau đó theo dõi theo các khoảng thời gian do bác sĩ chỉ định | … Cách trẻ em và thanh thiếu niên có thể phòng ngừa cận thị, xem... |
| Điều 16 | Điều 30, Điều 9 | Không mua các sản phẩm và dịch vụ tuyên bố 'chữa cận thị' hoặc 'giảm đơn thuốc' | … Cách trẻ em và thanh thiếu niên có thể phòng ngừa cận thị, xem... |
| Điều 18 | Mục 1, Điều 7 | Đo huyết áp; nếu huyết áp cao, dùng thuốc để hạ xuống mức mục tiêu | … Có thể thấy huyết áp, đường huyết, viêm gan B... |
| Điều 18 | Mục 1, Điều 8 | Sau 35 tuổi, miễn là bạn thừa cân, bạn nên kiểm tra đường huyết lúc đói một lần, và ngay cả khi bình thường, hãy kiểm tra lại mỗi ba năm | … Có thể thấy huyết áp, đường huyết, viêm gan B... |
| Điều 18 | Mục 1, Điều 14 | Viêm gan B được xét nghiệm hai cặp rưỡi; nếu không có kháng thể, hãy tiêm phòng | … Có thể thấy huyết áp, đường huyết, viêm gan B... |
| Điều 18 | Mục 1, Điều 17 | Phụ nữ nên bắt đầu sàng lọc ung thư vú ở tuổi 40, với mục tiêu molypden mỗi hai năm | … Tuyến vú, cổ tử cung, tuyến đại trực tràng... |
| Điều 18 | Mục 1, Điều 18 | Phụ nữ trên 30 tuổi nên được sàng lọc ung thư cổ tử cung, ưu tiên xét nghiệm HPV | … Tuyến vú, cổ tử cung và tuyến đại trực tràng... |
| Điều 18 | Mục 1, Điều 19 | Từ 45 đến 50 tuổi, sàng lọc ung thư đại trực tràng được thực hiện, bao gồm xét nghiệm miễn dịch hóa chất phân cho máu ẩn hoặc nội soi đại tràng | … Tuyến vú, cổ tử cung và tuyến đại trực tràng... |
| Điều 18 | Mục 1, Điều 23 | Phát hiện Helicobacter pylori, loại bỏ kết quả dương tính | … Helicobacter pylori và chụp CT liều thấp có thể được quan sát... |
| Điều 18 | Mục 1, Điều 24 | Người hút thuốc nặng nên chụp CT ngực liều thấp mỗi năm một lần | … Helicobacter pylori và chụp CT liều thấp có thể nhìn thấy... |
| Điều 18 | Mục 1, Điều 39 | Phụ nữ trên 65 tuổi nên trải qua xét nghiệm mật độ xương bằng tia X năng lượng kép; các yếu tố nguy cơ loãng xương sau mãn kinh không cần phải chờ đến 65 tuổi | … Kiểm tra mật độ xương cho phụ nữ trên 65 tuổi, xem... |
| Điều 18 | Mục 1, Điều 31 | Nếu bạn có hành vi nguy cơ cao, hãy xét nghiệm AIDS một lần; CDC miễn phí, kết quả bảo mật | … Nếu bạn có bất kỳ hành vi nguy cơ cao nào, hãy điều tra, xem... |
| Điều 18 | Điều 7 của mục này | Không thực hiện "PET-CT toàn thân" hoặc "gói dấu hiệu khối u" trên bản thân mà không có triệu chứng | … Những vật dụng không có bằng chứng phổ biến nhất trong bao bì là các dấu ấn khối u và hình ảnh toàn thân, xem phần này... |
| Điều 18 | Điều 19 của phần này | Đừng bắt đầu dùng thuốc giảm axit uric chỉ vì khám sức khỏe cho thấy axit uric cao nhưng chưa từng bị đau … Phải làm gì nếu axit uric cao nhưng không gây hại, hoặc sỏi mật nhưng không gây hại? Xem phần này... |
| Điều 18 | Điều 20 của phần này | Không nên phẫu thuật cắt túi mật phòng ngừa chỉ vì khám lâm sàng phát hiện sỏi mật nhưng chưa từng bị đau | … Phải làm gì nếu axit uric cao nhưng không gây hại, hoặc sỏi mật nhưng không gây hại? Xem mục 19 (axit uric cao không triệu chứng) và... |
| Điều 19 | Mục 16, Điều 9 | Sau khi được chẩn đoán bệnh gout, sử dụng thuốc giảm axit uric lâu dài để ức chế axit uric trong máu dưới 360 μmol/L và duy trì liên tục | … Xem chi tiết tại... |
| Điều 19 | Mục 16, Điều 9 | Nếu được chẩn đoán gout, thuốc giảm axit uric lâu dài sẽ được dùng để ức chế nồng độ axit uric trong máu dưới 360 μmol/L và duy trì liên tục | … Trước khi bạn thực sự bắt đầu ăn, hãy kiểm tra kiểu gen này, xem... |
| Điều 21 | Mục 16, Điều 8 | Nếu bạn bị sỏi thận, hãy uống 2,5–3 lít nước mỗi ngày và giảm lượng muối tiêu thụ xuống dưới 6 gram | … Uống nhiều nước hơn, xem... |
| Điều 22 | Mục 5, Điều 33 | Vòng tay, ngọc bích, đồng hồ xa xỉ và các món đồ sưu tầm thời thượng được xem là "tiền đã chi", không phải "tiền tiết kiệm" | … Cách kiểm tra vật liệu và chứng chỉ, và lý do tại sao việc coi đó là khoản đầu tư không hiệu quả về chi phí, xem... |
| Điều 22 | Mục 5, Điều 34 | Chỉ các báo cáo kiểm tra mang dấu CMA mới được công nhận đối với trang sức và ngọc bích, và việc kiểm tra được thực hiện trên trang web chính thức của cơ quan cấp phép | … Cách kiểm tra vật liệu và chứng chỉ, và lý do tại sao việc coi đó là khoản đầu tư không hiệu quả về chi phí, xem... |
| Điều 22 | Điều 15 của phần này | Không tiêu tiền cho việc xem bói, xem tarot hay các cung hoàng đạo để đưa ra quyết định | … Chi tiền cho việc xem bói để lấy chi tiết trong phần này... |
| Điều 23 | Điều 24 của phần này | Đừng chi thêm tiền cho một ngôi nhà, xe hơi hay vòng tròn chỉ để 'thăng tiến trong số những người xung quanh' | … Ngân sách được thêm vào "vượt trội hơn người khác" có thể được tìm thấy trong phần này... |
| Điều 24 | Mục 4, Điều 18 | Khi lựa chọn chỗ ở, hãy ưu tiên thời gian đi lại và rút ngắn thời gian đi làm một chiều | … Nên phân loại nhà ở như thế nào? Xem |
| Điều 24 | Mục 3, Điều 20 | Đừng biến 'Cách người khác làm' thành tài liệu bắt buộc phải đọc hàng ngày: Giới hạn hoặc vô hiệu hóa các ứng dụng cung cấp cập nhật ngang hàng | … Trên mạng, mọi người cứ liên tục tìm kiếm... |
| Điều 24 | Điều 23 của phần này | Đừng mong mua sắm sẽ cải thiện tâm trạng hay cảm giác về bản sắc của bạn | … Mức năng suất được đặt là "trung bình", tiếp tục từ phần này... |
| Điều 24 | Điều 23 của mục này | Đừng mong mua sắm sẽ cải thiện tâm trạng hay cảm giác địa vị của bạn | … Mua sắm để nâng cao tâm trạng có thể được xem trong phần này... |
| Điều 25 | Mục 4, Điều 10 | Giữ những gì bạn cần gần bên mình, di chuyển những thứ bạn không muốn chạm vào, đừng mong giữ lại ngay tại chỗ | … Các phương pháp thực sự được hỗ trợ bởi các thử nghiệm ngẫu nhiên là các phương pháp sửa đổi môi trường và viết lại, xem... |
| Điều 25 | Mục 4, Điều 1 | Viết 'kế hoạch làm' thành 'thời gian, địa điểm, bất cứ điều gì xảy ra, làm bất cứ điều gì bạn gặp' | … Thực sự được hỗ trợ bởi các thử nghiệm ngẫu nhiên là môi trường và phương pháp viết lại, xem Mục 4, Mục 10 (Di chuyển khu vực không mong muốn ra xa) và... |
| Điều 26 | Mục 1, Điều 23 | Phát hiện Helicobacter pylori, Kết quả dương tính loại bỏ | … Nguyên nhân chính gây viêm dạ dày và loét dạ dày không phải do nhịn ăn mà là do Helicobacter pylori và việc sử dụng thuốc giảm đau lâu dài. Bạn nên tìm hiểu thêm thông tin... |
| Điều 26 | Mục 2, Điều 27 | Ăn 5 khẩu phần (khoảng 400 g) trái cây và rau quả mỗi ngày | … Nếu bạn muốn kiểm soát cân nặng, bằng chứng thực sự là bạn ăn gì và lượng bao nhiêu, xem... |
| Điều 26 | Mục 2, Điều 28 | Ăn ít thực phẩm siêu chế biến (khoai tây chiên, mì ăn liền, bánh ngọt, thức ăn nhanh) | … Bằng chứng thực sự là nên ăn gì và ăn bao nhiêu, xem Mục 2, Điều 27 (Ăn 5 khẩu phần trái cây và rau củ mỗi ngày) 、... |
| Điều 26 | Mục 2, Điều 32 | Giữ chỉ số BMI trong khoảng 20–25, và giảm cân nếu thừa cân | … Mục 27 (Ăn 5 khẩu phần trái cây và rau củ mỗi ngày), Mục 2, Mục 28 (Ăn ít thực phẩm siêu chế biến), và... |
| Điều 26 | Mục 28, Điều 1 | Không kiểm soát cân nặng bằng cách ăn kiêng quá mức, nhịn ăn hoặc nôn mửa; nếu bạn muốn giảm cân, hãy bắt đầu từ phía tập thể dục | … Nhịn ăn cực độ và nôn do nôn là hai chuyện khác nhau, xem... |
| Điều 26 | Điều 20 của mục này | Không nên phẫu thuật cắt túi mật phòng ngừa chỉ vì khám lâm sàng phát hiện sỏi mật nhưng chưa từng bị đau | … Bạn nên làm gì nếu phát hiện sỏi mật trong quá trình khám lâm sàng nhưng chưa từng cảm thấy đau? Xem phần này... |
| Điều 27 | Mục 3, Điều 9 | Đi ngủ đúng giờ, không thức khuya để chơi game, xem video ngắn hoặc nội dung khiêu dâm | … Thức khuya, hẹn gặp lại... |
| Điều 27 | Mục 1, Điều 28 | Nếu chức năng cương dương gặp vấn đề, hãy kiểm tra tim mạch trước; đừng xem đó chỉ là "vấn đề liên quan" | … Lo lắng rằng phim khiêu dâm có thể tiết lộ các vấn đề cương cứng, lần xuất bản đầu tiên... |
| Điều 27 | Mục 9, Điều 4 | Tự xem video khiêu dâm; không đăng chúng trong nhóm, không bán "tài nguyên", không tạo nhóm | … Hậu quả pháp lý của việc đăng tải hoặc bán tài nguyên trong nhóm có thể thấy rõ... |
| Điều 28 | Điều 30, Điều 15 | Nếu một đứa trẻ nói rằng chúng thích cùng giới, đừng mắng mỏ, đừng đuổi chúng đi, và đừng gửi đi 'sửa lỗi': Thái độ của gia đình liên quan đến việc liệu chúng có thể tự tử hay không | … Gia đình nên làm gì sau khi đứa trẻ nói ra? Xem ... |

## 07 - Làm thế nào để sống khi bạn không có tiền?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Điều 19, Điều 7 | Không được ký "tự nguyện từ chức vì lý do cá nhân," hoặc một khi đã ký sẽ không còn N | … Do đó, khi từ chức, đừng ký "Từ chức vì lý do cá nhân" thay vào đó... |
| Điều 1 | Điều 19, Điều 17 | Khi nghỉ việc, hãy yêu cầu người sử dụng lao động cung cấp giấy chứng nhận nghỉ việc, nêu rõ thời hạn hợp đồng, ngày nghỉ việc, vị trí và số năm làm việc | … Đăng ký yêu cầu giấy chứng nhận nghỉ việc do người sử dụng lao động cấp, xem... |
| Điều 1 | Mục 11, Điều 12 | Nếu thỏa thuận không cạnh tranh được ký kết và công ty không cung cấp thù lao hàng tháng sau khi từ chức, có thể phát hành giấy nhắc nhở bằng văn bản; nếu không được thanh toán trong vòng 3 tháng, hợp đồng có thể bị chấm dứt; Các vị trí không tiếp xúc trước với bí mật kinh doanh có thể yêu cầu xác nhận rằng điều khoản này không có hiệu lực | … Có nên tôn trọng thỏa thuận không cạnh tranh và phải làm gì nếu công ty từ chối trả thù lao, xem... |
| Điều 2 | Điều 22 của mục này | Nếu bạn được trả lương, trước tiên hãy phân biệt ai là người thuê bạn: các xưởng và tổ trưởng không có giấy phép vẫn nên yêu cầu kiểm tra lao động, và chỉ ra tòa nếu họ làm việc tư nhân cho gia đình hoặc cá nhân | … Làm công việc cá nhân cho gia đình hoặc cá nhân, như bảo mẫu, không được tính là quan hệ lao động; bạn phải ra tòa và xem... |
| Điều 7 | Điều 9 của mục này | Bảo hiểm y tế cư trú không nên bị cắt giảm 400 nhân dân tệ mỗi năm; các hộ gia đình gặp khó khăn có thể được giảm hoặc miễn trừ | … Việc đóng góp vào bảo hiểm y tế cư trú được trợ cấp (xem bảo hiểm y tế cư trú... |).
| Điều 7 | Điều 10 của mục này | Nếu bạn mắc bệnh nặng, trước tiên hãy tham gia bảo hiểm y tế, bảo hiểm bệnh nặng, hỗ trợ y tế và nộp hồ sơ liên vùng; không động vào các khoản vay trực tuyến | … Việc đóng góp vào bảo hiểm y tế cư trú đi kèm với các khoản trợ cấp (xem Điều 9), và có thể sử dụng hỗ trợ y tế (xem hỗ trợ y tế... |).
| Điều 7 | Điều 3 của phần này | Nếu bạn không đủ khả năng khởi kiện, hãy nộp đơn xin trợ giúp pháp lý; các vụ như yêu cầu tiền lương, trợ cấp nuôi dưỡng và thương tích lao động đã nằm trong phạm vi điều kiện | … Có thể tìm kiếm trợ giúp y tế (xem Điều 10 về trợ giúp y tế), và khó khăn tài chính không được kiểm tra khi xin trợ giúp pháp lý (trợ giúp pháp lý xem... |).
| Điều 10 | Điều 24, Điều 8 | Không có tiền, không có giấy tờ tùy thân, không thể tiết lộ danh tính, phòng cấp cứu phải tiết kiệm trước | … Dù bạn trả 120 nhân dân tệ, bệnh viện cũng không được từ chối, tránh né hoặc trì hoãn điều trị. Phí cấp cứu cho phần đó do Quỹ Cứu trợ Khẩn cấp Dịch bệnh chi trả, xem... |
| Điều 10 | Điều 15 của phần này | Không đặt cọc, không gửi tài liệu, không ký 'khoản vay đào tạo', không tham gia vào các mô hình kim tự tháp, không có khoản vay với lãi suất cao | … Tòa án chỉ bảo vệ tối đa 4 lần hạn mức LPR một năm (không vay mượn lãi suất cao... |).
| Điều 18 | Điều 9 của mục này | Bảo hiểm y tế cư trú là 400 nhân dân tệ mỗi năm không gián đoạn; các hộ gia đình gặp khó khăn có thể được giảm hoặc miễn trừ | … Sau khi nộp lại bảo hiểm, đã có một khoảng thời gian không được hoàn trả chi phí điều trị y tế (xem bảo hiểm y tế cư trú... |).
| Điều 20 | Mục 5, Điều 39 | Chỉ mua bảo hiểm cho những tổn thất bạn không thể chịu đựng được, và chi trả tổn thất bằng quỹ khẩn cấp | … Những tổn thất nào đáng để sử dụng làm bảo hiểm? Xem thêm... |
| Điều 20 | Điều 9 của mục này | Bảo hiểm y tế cư trú không nên bị cắt giảm 400 nhân dân tệ mỗi năm; các hộ gia đình gặp khó khăn có thể được giảm hoặc miễn trừ | … Đầu tiên, bảo hiểm y tế cư trú (... |
| Điều 21 | Điều 4 của mục này | Khi bạn không còn nơi nào để đi, hãy đến trạm cứu trợ, có sẵn thức ăn, chỗ ở và vé tàu khứ hồi | …… |
| Điều 22 | Điều 8, Điều 22 | Nếu bạn bị lừa trong mua sắm trực tuyến hoặc giao dịch đã qua sử dụng, trước tiên hãy khiếu nại với nền tảng, sau đó báo cảnh sát, rồi tính xem có đáng để kiện hay không | … Nếu bạn có giấy nợ, bạn có thể nộp đơn xin lệnh thanh toán trước; với số tiền nhỏ hơn, hãy tiến hành kiện tại các vụ kiện nhỏ, xem... |
| Điều 22 | Mục 8, Điều 19 | Có thời hạn bảo vệ quyền: 3 năm cho tranh tụng dân sự, 1 năm cho trọng tài lao động. Chỉ cần một 'thời hiệu quá hạn' từ bên kia là đủ | … Thời hiệu khởi kiện là 3 năm, xem... |
| Điều 22 | Điều 2 của mục này | Nếu còn nợ tiền lương, trước tiên hãy nộp đơn khiếu nại lên thanh tra lao động, sau đó nộp đơn cho trọng tài lao động. Cả hai con đường đều miễn phí, và hầu hết các vụ việc đều có kết quả trong vài tháng | … Tài khoản tiền lương riêng và nhà thầu chính tại công trường xây dựng nên được thanh toán trước, xem... |
| Điều 22 | Điều 3 của mục này | Nếu bạn không đủ khả năng kiện tụng, hãy nộp đơn xin trợ giúp pháp lý; các trường hợp như yêu cầu tiền lương, trợ cấp nuôi dưỡng và tai nạn lao động đã được bảo hiểm | … Phí luật sư không bao gồm trong chi phí kiện tụng mà tòa án trao cho người thua kiện. Bạn phải tự trả phí luật sư. Nếu bạn không đủ khả năng, bạn có thể xin trợ giúp pháp lý. Xem thêm... |

## 08 - Đừng tự kéo mình xuống

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 3 | Điều 2 của mục này | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán. Đừng tự điều tra bản thân trước | … Số tiền ngừng thanh toán có thể thu hồi được phụ thuộc vào việc tiền còn trong tài khoản khi báo cáo của cảnh sát hay không. Cách dừng thanh toán phụ thuộc vào cách thực hiện... |
| Điều 4 | Điều 2 của phần này | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán. Đừng tự kiểm tra trước | … Tiền đã được chuyển, xem phần này... |
| Điều 5 | Điều 33 của mục này | Nếu ai đó bịa đặt sự thật để làm báo cáo, bạn có thể bị truy cứu trách nhiệm: bị giam giữ 5 ngày nếu đủ để nhận hình phạt an ninh công cộng, tối đa 3 năm đối với tội phạm | … Ba mục mở rộng có thể được tìm thấy trong phần này... |
| Điều 5 | Điều 34 của phần này | Nên tuyên bố không đủ bằng chứng, và lời khai bằng lời nói nên bị loại trừ; Nếu phán quyết được đưa ra, sẽ có kháng cáo và xét xử lại | … Ba nội dung được trình bày chi tiết có thể được tìm thấy tại Điều 33 của mục này (Buộc Bên chịu trách nhiệm về việc làm giả sự thật) 、... |
| Điều 5 | Điều 35 của mục này | Nếu một vụ án bị rút lại, không truy tố hoặc được tuyên trắng án sau khi bị giam giữ, bạn có thể xin bồi thường nhà nước, và số tiền sẽ được tính theo ngày | … Xem Điều 33 của mục này (Truy tố bên đã làm giả sự thật), Điều 34 (Bằng chứng không đủ nên được trắng án và xét xử lại khi kháng cáo) 、... |
| Điều 6 | Điều 1 của mục này | Khi xảy ra tai nạn giao thông, hãy dừng trước, cứu người, gọi cảnh sát, đừng chạy trốn | … Việc đầu thú sau đó vẫn được coi là tự nguyện ra thú, nhưng mức phạt pháp lý nặng hơn được dùng làm chuẩn mực, sau đó quyết định có giảm hay giảm bao nhiêu hay không. Xem phần này về cách tiến hành... |
| Điều 6 | Điều 5 của mục này | Nếu bị buộc tội hoặc bị triệu tập, trước tiên hãy thuê luật sư, không được dàn xếp riêng tư, không xóa hồ sơ | … Trước tiên, xin hãy tham khảo ý kiến luật sư và thú nhận một cách trung thực, như đã trình bày chi tiết trong phần này... |
| Điều 11 | Điều 13, Điều 37 | Nếu gặp phải một nhóm đánh nhau, hãy lùi lại và rời đi; không được tiến lên để can thiệp, không tụ tập lại, và không nhặt đồ vật trên mặt đất; Nếu bạn cần gọi cảnh sát, hãy lùi lại một khoảng an toàn và gọi số 110 | … Nhưng can thiệp tay trắng trong một cuộc chiến giữa người lạ lại mang một rủi ro khác, bạn thấy không... |
| Điều 11 | Điều 10 của mục này | Nếu xảy ra xung đột và bạn gọi cảnh sát trước nhưng không hành động, người tấn công trước hầu như luôn phải chịu thiệt hại | … Hành động mặc định là... |
| Điều 11 | Điều 5 của mục này | Nếu bị buộc tội hoặc bị triệu tập, trước tiên hãy thuê luật sư; không được dàn xếp riêng tư hoặc xóa hồ sơ | … Thứ ba, trước khi bị cảnh sát thẩm vấn chính thức, hãy thuê luật sư trước, xem... |
| Điều 11 | Điều 35 của mục này | Nếu một vụ án bị rút lại, không được truy tố hoặc được tuyên trắng án sau khi bị giam giữ, bạn có thể yêu cầu bồi thường nhà nước, với khoản thanh toán được tính theo ngày | … Nếu vụ án cuối cùng bị rút lại, không bị truy tố hoặc trắng án, những ngày bị tạm giam có thể được sử dụng hàng ngày để xin bồi thường nhà nước. Xem ... |
| Điều 12 | Mục 7, Điều 2 | Nếu bạn được trả lương, trước tiên hãy nộp đơn khiếu nại lên thanh tra lao động, sau đó nộp đơn cho trọng tài lao động. Cả hai lựa chọn đều miễn phí, và hầu hết các vụ việc đều có kết quả trong vài tháng … Làm thế nào để khiếu nại về nợ lương và làm thế nào để nộp đơn cho trọng tài lao động? Xem... |
| Điều 12 | Mục 7, Điều 22 | Nếu bạn nợ lương, trước tiên hãy phân biệt ai đã thuê bạn: các xưởng và nhà thầu không có giấy phép vẫn thuê thanh tra lao động, và chỉ ra tòa nếu họ làm việc cá nhân cho gia đình hoặc cá nhân | … Nếu bạn còn nợ tiền cho gia đình hoặc công việc cá nhân mà vẫn còn nợ, bạn vẫn phải ra tòa, xem... |
| Điều 12 | Mục 7, Điều 2 | Nếu bạn được trả lương, trước tiên hãy nộp đơn khiếu nại lên thanh tra lao động, sau đó nộp đơn cho trọng tài lao động. Cả hai lựa chọn đều không được tính phí, và hầu hết các vụ việc đều có kết quả trong vài tháng | … Nếu bạn được hưởng lương, cách khiếu nại hoặc trọng tài để biết chi tiết, xem... |
| Điều 12 | Điều 9, Điều 15 | Khi thu nợ, không giữ lại, không giữ lại ai, không theo họ về nhà và từ chối để họ rời đi | … Ranh giới đỏ cho việc thu hồi nợ đã được nhìn thấy... |
| Điều 13 | Điều 14 của phần này | Khi những suy nghĩ như 'kéo ai đó xuống cùng bạn' hoặc 'cùng chết đi' xuất hiện, khi xử lý tình huống khẩn cấp: hãy rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, rồi gọi 12356 | … Ý nghĩ đã đến mức này, nhìn này... |
| Điều 14 | Mục 1, Điều 25 | Gọi 12356 khi cảm thấy trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn muốn làm đau bản thân, xem... |
| Điều 14 | Mục 3, Điều 18 | Khi cảm thấy buồn, hãy làm những việc tiết kiệm chi phí nhất trước: vận động, tắm nắng, đi ngủ đúng giờ, nói chuyện với ai đó, gọi 12356 | … Bạn nên làm gì đầu tiên khi cảm thấy buồn? Xem này... |
| Điều 16 | Điều 37 của phần này | Bị bắt nạt trên mạng: trước tiên kích hoạt bảo vệ, xác minh bằng chứng, sau đó chọn giữa nền tảng, lệnh cấm và cảnh báo | … Cách đối mặt với bản thân sau khi bị bắt nạt trên mạng, xem phần này... |
| Điều 19 | Mục 19, Điều 1 | Tiền lương làm thêm giờ được tính theo ba cấp: 1,5 lần, 2 lần và 3 lần. Nếu không được trả lương, khiếu nại lên thanh tra lao động; nếu không trả lương, trả thêm 50% đến 100% | … Tiền làm thêm giờ và tiền nghỉ phép năm chưa sử dụng cũng áp dụng phương pháp trọng tài lao động tương tự, xem... |
| Điều 19 | Mục 19, Điều 2 | Ngày nghỉ phép hàng năm được tính dựa trên số năm làm việc tích lũy cho 5, 10 và 15 ngày; nếu không sử dụng, sẽ được giảm 300% mức lương hàng ngày | … Tiền làm thêm giờ và tiền nghỉ phép năm chưa sử dụng đều tuân theo quy trình trọng tài lao động giống nhau, xem... |
| Điều 19 | Điều 18 của mục này | Ghi rõ giấy nợ khi vay tiền; trước khi bảo lãnh cho ai đó, hãy cân nhắc kỹ xem bạn có sẵn sàng trả nợ hay không | … Các khoản nợ và bảo lãnh có thể được tìm thấy tại... |
| Điều 19 | Điều 20 của mục này | Nếu bị kiện hoặc bị cưỡng chế, hãy báo cáo tài sản của bạn một cách trung thực và hoàn trả tối đa có thể; không chuyển nhà hoặc tiền của bạn cho người thân, bạn bè hoặc công ty | … Giai đoạn thực thi là khi... |
| Điều 20 | Mục 7, Điều 19 | Dù bạn đã từng vào tù, phá sản hay bị liệt kê là không trung thực, bạn có thể bắt đầu lại hợp pháp — chỉ cần hoàn thành các thủ tục trước | … Làm thế nào để khôi phục sau khi hoàn thành? Xem... |
| Điều 20 | Điều 21 của mục này | Nếu tiêu thụ bị hạn chế hoặc liệt kê trong danh sách gian dối, trước tiên hãy làm rõ điều khoản nào bao gồm mục đó và yêu cầu sửa nếu có thể | … Phải làm gì sau khi bị liệt kê hoặc bị hạn chế sử dụng? Xem... |
| Điều 21 | Mục 7, Điều 19 | Dù bạn đã từng vào tù, phá sản hay bị đưa vào danh sách không trung thực, bạn vẫn có cơ hội hợp pháp để bắt đầu lại. Hoàn thành các thủ tục trước | … Cả hai điều này đều không đồng nghĩa với hồ sơ tín dụng; việc xóa chúng khỏi danh sách sẽ không làm thay đổi báo cáo tín dụng của bạn, xem... |
| Điều 25 | Điều 10, Điều 11 | Khi cha mẹ trả tiền mua nhà, hãy nêu rõ đó là khoản vay hay quà tặng khi chuyển tiền | … Làm thế nào để nói rõ liệu cha mẹ trả tiền cho một ngôi nhà là mượn hay cho đi, xem... |
| Điều 31 | Điều 9, Điều 18 | Nếu bên kia dưới 14 tuổi, họ không được quan hệ tình dục; 'cô ấy đồng ý' không phải là lý do | … Để xác định độ tuổi, xem... |
| Điều 31 | Mục 9, Điều 18 | Nếu bên kia dưới 14 tuổi, họ không thể có quan hệ quan hệ; 'cô ấy đồng ý' không phải là lý do | … Điều khoản này cũng quy định rằng nếu một bé gái dưới mười bốn tuổi bị cưỡng hiếp, sẽ bị coi là hiếp dâm và bị trừng phạt nghiêm khắc hơn. Cách nhận dạng một bé gái được thấy trong ... |
| Điều 31 | Điều 13, Điều 42 | Sau khi bị tấn công tình dục, trước tiên hãy đến nơi an toàn và gọi 110; Trước khi khám thương tích, không tắm, không giặt giũ, không dọn phòng; đến bệnh viện trong vòng 72 giờ | … Nếu bạn là nạn nhân, bạn nên làm gì trước tiên... |
| Điều 31 | Điều 32 của mục này | Sau khi có quan hệ hoặc trò chuyện khỏa thân, bên kia gọi cảnh sát, gửi ảnh, bảo công ty bạn yêu cầu tiền, không trả một xu nào, không xóa bất kỳ hồ sơ nào, và báo cáo trực tiếp với cảnh sát | … Khi bạn uống đến cạn, nguy cơ bị buộc tội và bị tống tiền tồn tại cùng lúc. Xem phần này... |
| Điều 32 | Điều 5 của mục này | Nếu bị buộc tội hoặc triệu tập, trước tiên hãy thuê luật sư, không được dàn xếp riêng tư, không xóa hồ sơ | … Đừng xóa lịch sử trò chuyện, ảnh, xóa tài khoản hoặc chặn bản thân — điều đó cũng là xóa bằng chứng của chính bạn. Xem phần này... |
| Điều 32 | Điều 36 của phần này | Nếu bạn là nạn nhân và nộp đơn khiếu nại, hãy đến 12315, nộp đơn kiện hoặc trở thành luật sư. Đừng tham dự cuộc hẹn của bên kia một mình, và đừng kết hợp "cho tiền" với "tôi sẽ không phơi bày bạn" thành một câu duy nhất | … Ngược lại, nếu bạn là nạn nhân và đã nộp đơn khiếu nại đối với bên vi phạm, số tiền lớn không nhất thiết đồng nghĩa với việc tống tiền. Xem phần này... |
| Điều 33 | Điều 34 của mục này | Bằng chứng không đủ nên dẫn đến việc trắng án; việc ép buộc khai miệng nên bị loại trừ; Sau khi tuyên án, vẫn cần kháng cáo và xét xử lại | … Để biết bằng chứng và biện pháp khắc phục sau khi bị buộc tội, xem phần này... |
| Điều 33 | Điều 35 của mục này | Nếu một vụ án bị rút lại, không truy tố hoặc được tuyên trắng án sau khi bị giam giữ, người nộp đơn có thể yêu cầu bồi thường nhà nước, với khoản thanh toán được tính theo ngày | … Để biết bằng chứng và biện pháp khắc phục sau khi bị buộc tội, xem phần này... |
| Điều 34 | Điều 5 của mục này | Nếu bị buộc tội hoặc bị triệu tập, trước tiên hãy thuê luật sư, không được dàn xếp riêng tư, không xóa hồ sơ | … Những người gặp khó khăn về tài chính có thể xin trợ giúp pháp lý; xem phần này... |
| Điều 34 | Điều 5 của mục này | Nếu bị buộc tội hoặc bị triệu tập, trước tiên hãy thuê luật sư, không được dàn xếp riêng tư, không xóa hồ sơ | … Trước tiên, sau cuộc thẩm vấn đầu tiên, giao cho luật sư, xem phần này... |
| Điều 35 | Điều 36 của mục này | Nếu bạn là nạn nhân và đến yêu cầu bồi thường, hãy đến 12315, nộp đơn kiện hoặc trở thành luật sư. Đừng tham dự cuộc hẹn của bên kia một mình, và đừng kết hợp "cho tiền" với "tôi sẽ không phơi bày bạn" trong một câu | … Để tính toán thực tế, bạn có thể tham khảo phần này... |
| Điều 36 | Điều 5 của mục này | Nếu bị buộc tội hoặc bị triệu tập, trước tiên hãy thuê luật sư, không được dàn xếp riêng tư, không xóa hồ sơ | … Cách xử lý các vụ việc sau khi nộp hồ sơ, xem phần này... |
| Điều 36 | Điều 34 của mục này | Bằng chứng không đủ nên dẫn đến việc tuyên trắng án; lời khai bằng lời ép buộc nên bị loại trừ; Nếu bị kết tội, vẫn có thể kháng cáo và xét xử lại | … Cách xử lý các vụ việc sau khi nộp, xem phần này... |
| Điều 36 | Điều 35 của mục này | Nếu một vụ án bị hủy bỏ, không được truy tố, hoặc được tuyên trắng án sau khi bị giam giữ, vụ án sẽ bị rút lại và vụ án không được truy tố, và phí được tính theo ngày | … Cách xử lý các vụ việc sau khi nộp hồ sơ có thể được tìm thấy trong phần này... |
| Điều 36 | Điều 32 của phần này | Sau khi có quan hệ hoặc trò chuyện khỏa thân, bên kia sẽ báo cảnh sát, gửi ảnh, nói với công ty bạn rằng họ đang yêu cầu tiền, không trả một xu nào, không xóa bất kỳ hồ sơ nào, và báo cáo trực tiếp với cảnh sát | … Đối với các trường hợp bên kia sử dụng đòn bẩy để tống tiền bạn, xem phần này... |
| Điều 37 | Mục 1, Điều 25 | Gọi 12356 khi bị trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn không thể nhận, hãy gọi 12356, xem ... |
| Điều 37 | Mục 14, Điều 8 | Bạn có quyền xem, sao chép, chỉnh sửa và xóa thông tin cá nhân của mình; nếu bị từ chối, bạn có thể bị kiện | … Yêu cầu nền tảng xóa thông tin cá nhân của bạn, xem... |
| Điều 37 | Điều 16 của mục này | Không được xúc phạm, lan truyền tin đồn hoặc chia sẻ những vấn đề chưa được xác minh trực tuyến; Nếu bị quấy rối trực tuyến, hãy để lại bằng chứng trước khi báo cảnh sát | … Trước tiên, đừng xúc phạm tôi; nếu bạn phản kháng, bạn sẽ trở nên khó chịu đấy... |
| Điều 38 | Điều 9, Điều 21 | Không bịa đặt tai nạn, không phóng đại tổn thất để đánh lừa yêu cầu bồi thường: đây là gian lận bảo hiểm. Những người làm chứng, sửa xe của bạn và giúp bạn định giá sẽ được tính chung | … Gian lận bảo hiểm không liên quan đến tính mạng con người, như làm giả tai nạn và phóng đại thiệt hại, cũng là tội phạm. Ngay cả những người giúp làm chứng cũng được tính chung, xem... |
| Điều 38 | Điều 14 của phần này | Khi những suy nghĩ như "kéo ai đó xuống cùng tôi" hoặc "cùng chết đi" xuất hiện trong trường hợp khẩn cấp: hãy rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, rồi gọi 12356 | … Những xung động làm tổn thương thành viên gia đình nên được xem như những trường hợp khẩn cấp, xem phần này... |
| Điều 38 | Điều 15 của mục này | Nếu ai đó xung quanh bạn nói, 'Không ai có thể dễ dàng hơn' hoặc 'Hãy đưa con bạn đi cùng', đừng coi đó là lời tức giận: người thân gần gũi có thể được đưa thẳng đến bệnh viện, nhưng cảnh sát cũng phải can thiệp khi nhận được báo cáo | … Cảm giác muốn làm tổn thương thành viên trong gia đình nên được xem như một trường hợp khẩn cấp, xem phần này... |
| Điều 39 | Điều 2 của mục này | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán; đừng điều tra trước | … Quy trình dừng thanh toán sau khi bị lừa đảo có thể được tìm thấy trong phần này... |
| Điều 39 | Điều 37 của mục này | Bị bắt nạt trên mạng: trước tiên kích hoạt bảo vệ, xác minh bằng chứng trước, sau đó chọn giữa nền tảng, cấm và cảnh sát | … Bị lạm dụng trực tuyến, xem phần này... |
| Điều 40 | Mục 24, Điều 11 | Cảm ơn bác sĩ đã cứu bạn, gửi thư cảm ơn, băng rôn và đánh giá hài lòng, nhưng đừng gửi phong bao đỏ: quy định cấm tiền, không cấm biết ơn | … Phong bì đỏ trong bệnh viện lại thuộc một bộ quy tắc khác, xem... |
| Điều 40 | Điều 39 của mục này | Biên nhận vụ việc phải được nhận ngay tại chỗ khi báo cáo với cảnh sát; nếu không nộp, cần có thông báo bằng văn bản: trong vòng 7 ngày, có thể nộp đơn xin xem xét lại, và thêm 7 ngày nữa có thể được yêu cầu xem xét. Viện kiểm sát có thể thông báo cho cảnh sát để nộp đơn | … Nếu bên kia thực sự đòi quyền lợi, hãy tiếp tục... |
| Điều 41 | Điều 19, Điều 8 | Trước khi nghỉ việc, hãy lưu lại phiếu lương, điểm danh, hợp đồng lao động, hồ sơ an sinh xã hội và nhật ký trò chuyện | … Tài liệu cần lưu giữ trước khi từ chức có thể được tìm thấy trong... |
| Điều 41 | Điều 16 của mục này | Không được xúc phạm, lan truyền tin đồn hoặc chia sẻ các vấn đề chưa được xác minh trực tuyến; Nếu bị quấy rối trực tuyến, hãy để lại bằng chứng trước khi báo cảnh sát | … Ghi âm các bản ghi âm cho tòa án, ủy ban trọng tài hoặc sử dụng của cảnh sát. Không đăng tải trực tuyến. Việc chia sẻ công khai lời nói của người khác có thể gây tranh chấp về quyền riêng tư và uy tín. Xem phần này... |
| Điều 42 | Điều 1 của mục này | Trong trường hợp xảy ra tai nạn giao thông, hãy dừng trước, cứu người, gọi cảnh sát, không chạy trốn | … Những việc cần làm tại hiện trường tai nạn giao thông có thể được tìm thấy trong phần này... |
| Điều 43 | Điều 41 của mục này | Đối với các cuộc gọi điện thoại hoặc phỏng vấn có nguy cơ xảy ra mâu thuẫn, hãy bắt đầu ghi âm trực tiếp: nếu bạn tự tham gia cuộc trò chuyện, bạn không cần sự đồng ý của bên kia trước | … Bản ghi âm có sẵn trong mục này... |
| Điều 43 | Điều 10 của mục này | Nếu xảy ra xung đột và người đầu tiên gọi cảnh sát nhưng không hành động, người tấn công trước gần như luôn chịu thiệt hại | … Đừng cố gắng can ngăn cuộc ẩu đả—hãy xem lý do trong phần này... |
| Điều 44 | Điều 10, Điều 12 | Nếu một trong hai vợ chồng vay một khoản tiền lớn mà không ký hoặc phê chuẩn, thì khoản nợ đó không tự động trở thành nợ của bạn | … Thông báo này được ban hành theo Luật Hôn nhân vào thời điểm đó. Làm thế nào để xác định các khoản nợ hôn nhân chung sau khi Bộ luật Dân sự có hiệu lực? Xem |
| Điều 44 | Điều 9, Điều 15 | Khi thu hồi nợ, không giữ lại, không giữ ai, không theo họ về nhà và từ chối cho họ rời đi | … Các chủ nợ đến để chặn hoặc giam giữ người khác, xem |
| Điều 44 | Mục 1, Điều 37 | Nếu bạn đã vay tiền để trả nợ cờ bạc và vẫn cảm thấy buồn, trước tiên hãy gọi 12356, sau đó giao thẻ ngân hàng và mật khẩu thanh toán cho gia đình bạn | … Nếu chính anh ta đã đánh cược đến mức muốn chết, thì xem này...

## 09 - Những ranh giới pháp lý mà người dân bình thường dễ dàng vượt qua

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 3 | Mục 11 Điều 11 | Không bán công cụ VPN, tài khoản VPN hoặc thiết lập các node này cho người khác | … Công cụ vượt qua bị phạt như thế nào? Xem ... |
| Điều 3 | Điều 1 của phần này | Không chuyển tiếp các báo cáo thảm họa, dịch bệnh hoặc cảnh sát chưa được xác minh trong nhóm; không chỉnh sửa hình ảnh hoặc sử dụng AI để tạo hình ảnh cảnh | … Nếu bạn không chắc chắn về sự thật, đừng theo dõi. Xem phần này... |
| Điều 5 | Mục 8, Điều 8 | Không cho mượn thẻ ngân hàng, thẻ di động hoặc tài khoản thanh toán cho bất kỳ ai; "chạy ghi điểm" không phải là công việc bán thời gian | … Hậu quả của việc cho vay thẻ ngân hàng hoặc giúp ai đó 'chạy trốn' có thể thấy rõ trong... |
| Điều 6 | Mục 8, Điều 9 | Kiểm tra báo cáo tín dụng của bạn hai lần mỗi năm miễn phí để xem có khoản vay hoặc thẻ nào bạn chưa đăng ký không | … Đối với việc rút tiền và chuyển tiền, xem Điều 5 của mục này ("công việc bán thời gian" yêu cầu bạn sử dụng thẻ của chính mình để nhận tiền). Làm thế nào để biết ai đó đã vay tiền dưới tên người khác? Xem |
| Điều 6 | Điều 5 của phần này | "Làm việc bán thời gian" yêu cầu bạn phải sử dụng thẻ của mình để nhận tiền, rút tiền mặt hoặc chuyển tiền, và dù bạn có trả bao nhiêu tiền thưởng cũng sẽ không làm vậy | … Đối với việc rút tiền và chuyển tiền mặt thay mặt người khác, xem phần này... |
| Điều 8 | Mục 11, Điều 3 | Không được viết, không bán vé, bán nhanh chóng, đơn hàng giả mạo hoặc lợi dụng kịch bản giá rẻ, ngay cả khi chỉ là "nhấn nút tự động" | … Tự viết kịch bản hoặc bán kịch bản, xem... |
| Điều 8 | Mục 8, Điều 8 | Không cho bất kỳ ai mượn thẻ ngân hàng, thẻ di động hoặc tài khoản thanh toán; "so sánh điểm số" không phải là bán thời gian | … Để tự viết hoặc bán kịch bản, xem Mục 11, Điều 3; để bán thẻ và tài khoản, xem... |
| Điều 8 | Điều 16 của mục này | Không cho người khác mượn thẻ căn cước, không sử dụng thẻ căn cước của người khác, cũng không sử dụng giấy tờ tùy thân của người khác để đăng ký, cấp thẻ hoặc mua vé | … Tự viết kịch bản và bán kịch bản; bán thẻ và tài khoản (thẻ ngân hàng cho vay) và phần này... |
| Điều 15 | Điều 8, Điều 18 | Viết giấy nợ rõ ràng khi vay tiền; trước khi bảo lãnh cho ai đó, hãy cân nhắc kỹ xem bạn có sẵn sàng trả nợ cho họ hay không | … Cách viết IOU, xem... |
| Điều 16 | Mục 8, Điều 28 | Không hành động như một "pháp nhân danh nghĩa", không cho ai mượn thẻ căn cước để đăng ký công ty | … Hệ quả của hai điều này có thể thấy rõ trong... |
| Điều 16 | Mục 8, Điều 8 | Không cho mượn thẻ ngân hàng, thẻ di động hoặc tài khoản thanh toán cho bất kỳ ai; "so sánh chuẩn" không phải là công việc bán thời gian | … Hệ quả của hai điều này có thể thấy rõ trong... |
| Điều 19 | Điều 8, Điều 10 | Nếu xảy ra xung đột và bạn gọi cảnh sát trước nhưng không hành động, người khởi xướng hầu như luôn phải chịu thiệt hại | … Làm thế nào để tránh xung đột, tại sao tấn công trước lại là bất lợi, ranh giới của phòng thủ hợp pháp nằm ở đâu? Xem thêm... |
| Điều 19 | Mục 8, Điều 11 | Nếu bạn không thể tránh được mối đe dọa không thể tránh khỏi, bạn có thể phản kháng, nhưng chỉ đánh vào người đang đánh nó. Nếu họ dừng lại, thì dừng lại | … Để xả giận, hắn đã tấn công ai đó, xem này... |
| Điều 19 | Mục 8, Điều 12 | Nếu bạn có mối thù với ai đó — bị trả lương không trả, bị sa thải hoặc bị lừa mất tiền — hãy tiến hành khiếu nại, trọng tài hoặc kiện tụng. Đừng truy đuổi ai đó | … Trút giận bằng cách tấn công ai đó, xem ... |
| Điều 19 | Điều 8, Điều 13 | Dù bạn ghét ai đến đâu, đừng bao giờ làm hại người không liên quan: lái xe vào đám đông hoặc gây bạo lực ở nơi công cộng bị kết án gây nguy hiểm cho an toàn công cộng bằng các biện pháp nguy hiểm, với mức án ba năm; nếu ai đó chết, đó là án tử hình | … Để xả giận, anh ta đã tấn công ai đó, xem này... |
| Điều 19 | Mục 8, Điều 14 | Khi những suy nghĩ như "kéo ai đó xuống cùng tôi" hay "cùng xuống cùng" xuất hiện, khi xử lý tình huống khẩn cấp: hãy rời khỏi hiện trường, giao chìa khóa xe và dao cho người khác, rồi gọi 12356 | … Trút giận bằng cách tấn công ai đó, xem này... |
| Điều 20 | Mục 27, Điều 7 | Ghi nhớ danh sách kiểm tra 'đến bệnh viện ngay lập tức' này, tính trong thời kỳ mang thai và trong vòng một năm sau sinh | … Danh sách các lần nhập viện ngay trong thai kỳ và sau sinh, xem... |
| Điều 20 | Mục 27, Điều 16 | Đừng bỏ qua buổi kiểm tra sau sinh 42 ngày; nó cũng là một phương pháp sàng lọc trầm cảm sau sinh | … Theo dõi sau 42 ngày sau sinh cũng là một cuộc sàng lọc trầm cảm sau sinh, xem... |
| Điều 20 | Mục 1, Điều 25 | Gọi 12356 khi bạn bị trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn có ý nghĩ tự tử, hãy gọi 12356, xem ... |
| Điều 21 | Mục 5, Điều 26 | Bảo hiểm bên thứ ba đầy đủ: Giới hạn bảo hiểm bắt buộc được thống nhất trên toàn quốc và không cao; bất kỳ khoản khấu trừ nào sẽ được chi trả từ chính hộ gia đình của bạn | … Làm thế nào để mua bảo hiểm xe hơi? Xem ... |
| Điều 21 | Điều 8, Điều 38 | Con đường 'mua bảo hiểm trước khi hành động' bị chặn về mặt pháp lý ngay từ đầu: nếu bạn không nhận được một xu nào, bạn sẽ bị xử lý như tội giết người cố ý và gian lận bảo hiểm, và nhiều tội danh sẽ được kết hợp lại | … Nếu một thành viên trong gia đình được bảo hiểm và sau đó cố ý gây ra cái chết của họ, luật pháp quy định rõ ràng rằng nhiều tội phạm phải bị trừng phạt cùng lúc. Xem ... |
| Điều 21 | Mục 5, Điều 13 | Bằng cách hoàn thành hợp đồng hỗ trợ lẫn nhau gia đình trên ứng dụng bảo hiểm y tế, số tiền từ tài khoản bảo hiểm y tế cá nhân của nhân viên có thể được sử dụng để chi trả cho điều trị y tế và thuốc men cho vợ/chồng, cha mẹ và con cái | … Bảo hiểm y tế có một bộ quy định khác: sử dụng thẻ bảo hiểm y tế và rút tiền từ tài khoản bảo hiểm y tế cá nhân của bạn được coi là lừa đảo, xem... |
| Điều 22 | Mục 1, Điều 35 | Đừng đánh đổi "mất một quả thận không phải chuyện lớn" lấy tiền: người còn lại phải làm việc cho hai quả, và 86% những người bán thận sau này cho biết sức khỏe của họ xấu đi | … Chi phí cho cơ thể sau khi cắt bỏ thận có thể được tìm thấy tại... |
| Điều 22 | Mục 1, Điều 35 | Đừng đánh đổi "mất một quả thận không phải chuyện lớn" lấy tiền: người còn lại phải làm việc cho hai quản, và 86% những người bán thận sau này cho biết sức khỏe của họ xấu đi | … Cơ thể phải trả giá gì sau khi cắt bỏ thận? Xem thêm... |
| Điều 22 | Điều 6 của phần này | Nếu ai đó lôi bạn đến khoản vay 'vật liệu đóng gói', họ sẽ chia hoa hồng dựa trên số tiền vay, nhưng bạn sẽ không làm bất cứ khoản nào trong số đó | … Những rủi ro của các khoản vay trực tuyến và khoản vay "vật liệu đóng gói" có thể được tìm thấy trong phần này... |
| Điều 23 | Mục 1, Điều 30 | Sử dụng bao cao su trong suốt các hoạt động tình dục, không chia sẻ kim tiêm với người khác | … Nguy cơ mắc các bệnh lây truyền qua đường tình dục và AIDS, xem... |
| Điều 23 | Điều 13, Điều 38 | Nếu bạn có thể đã tiếp xúc với HIV, hãy mua thuốc ức chế trong vòng 72 giờ—càng sớm càng tốt … Nguy cơ mắc các bệnh lây truyền qua đường tình dục và HIV/AIDS được mô tả trong Mục 1, Điều 30 (Bao cao su trong suốt hoạt động tình dục) và... |
| Điều 23 | Điều 18 của mục này | Nếu bên kia dưới 14 tuổi, họ không được quan hệ tình dục; "cô ấy đồng ý" không phải là lý do | … Tội ác ngủ với các cô gái trẻ đã bị loại bỏ trong Tu chính án (IX) năm 2015 của Luật Hình sự. Hiện nay, những trường hợp như vậy bị trừng phạt trực tiếp như hiếp dâm và bị xử phạt nghiêm khắc hơn, xem phần này... |

## 10 - Hẹn hò và kết hôn có đáng không?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 4 | Điều 17 của phần này | Xem chất lượng các mối quan hệ như một tài liệu sức khỏe: tranh luận về vấn đề, không phải con người, không xúc phạm hay chế giễu | … Sự cân bằng giữa mối quan hệ và sức khỏe gắn liền với phần này... |
| Điều 12 | Điều 11 của mục này | Khi cha mẹ trả tiền mua nhà, hãy nêu rõ đó là khoản vay hay quà tặng khi chuyển tiền | … Vậy điều còn hữu ích hơn nữa là... |
| Điều 12 | Điều 8, Điều 18 | Viết giấy nợ rõ ràng khi vay tiền; trước khi bảo lãnh cho ai đó, hãy cân nhắc kỹ xem bạn có sẵn sàng trả nợ cho họ hay không | … Các quy định chung về IOU và bảo lãnh có thể được tìm thấy trong... |
| Điều 16 | Điều 8 của mục này | Các quyền lợi sức khỏe được bao gồm, nhưng được giảm trừ dựa trên dữ liệu quan sát | … Nhưng điều đó không tự động chuyển thành lợi ích sức khỏe của bạn (... |
| Điều 16 | Điều 4 của phần này | Việc một mối quan hệ có tốt hay không chủ yếu phụ thuộc vào cảm nhận của bạn, chứ không phải điều kiện của người kia | … Nhưng điều này không tự động chuyển thành lợi ích sức khỏe (Điều 8) hay chất lượng quan hệ (... |).
| Điều 16 | Điều 9 của mục này | Tài khoản chấm công được tính là 'lao động không được trả lương'; sau khi làm rõ phân công lao động, giấy chứng nhận được cấp | … Và cuốn sổ thời gian (... |
| Điều 16 | Điều 10 của phần này | Về tài khoản tài chính, trước tiên tham khảo các quy định pháp lý mặc định, sau đó quyết định có lập thỏa thuận bằng văn bản hay không | … Về tài khoản thời gian (Điều 9), tài khoản tiền (... |).
| Điều 16 | Điều 11 của mục này | Khi cha mẹ trả tiền mua nhà, hãy nêu rõ đó là khoản vay hay quà tặng khi chuyển tiền | … Còn về sổ cái thời gian (Điều 9), sổ cái tiền (... |).
| Điều 16 | Điều 12 của mục này | Nếu một người vợ/chồng vay một khoản tiền lớn mà không có chữ ký hoặc phê chuẩn của bạn, thì khoản nợ đó không tự động trở thành nợ của bạn | … Về tài khoản thời gian (Điều 9), tài khoản tiền (... |).
| Điều 16 | Điều 15 của mục này | Tính toán chi phí rời đi: thời gian hạ nhiệt 30 ngày cho ly hôn theo thỏa thuận chung, điều kiện pháp lý cho ly hôn kiện tụng | … Trong khi đó, sổ cái thời gian (Điều 9), tài khoản tiền (mục 10 đến 12), và chi phí thoát (... |).
| Điều 17 | Điều 8, Điều 43 | Nạn nhân bạo lực gia đình: trước tiên báo cáo với cảnh sát và để lại hồ sơ cảnh sát, sau đó nộp đơn lên tòa án để xin lệnh bảo vệ an toàn cá nhân. Không cần ly hôn trước, và không tính phí nào | … Nếu cuộc tranh cãi leo thang thành bạo lực thể chất, hoặc có sự xúc phạm hay đe dọa kéo dài, thì đó không còn là vấn đề giao tiếp nữa—mà là bạo lực gia đình. Xem thêm... |
| Điều 17 | Điều 20 của phần này | Khi mối quan hệ bị mắc kẹt trong những cuộc cãi vã lặp đi lặp lại và chiến tranh lạnh, hai người cùng đi trị liệu cặp đôi: Chờ đợi một cách thờ ơ về cơ bản sẽ không khá hơn một mình | … Họ cãi nhau dữ dội nhưng không thể thay đổi, nên hai người cùng đi trị liệu cặp đôi. Xem phần này... |
| Điều 17 | Điều 15 của mục này | Tính toán chi phí rời đi: Thời gian hạ nhiệt 30 ngày đối với ly hôn thỏa thuận chung, với các điều kiện pháp lý cho ly hôn kiện tụng | … Hãy suy nghĩ kỹ về việc có nên rời đi hay không; chi phí rút lui được giải thích trong phần này... |
| Điều 18 | Điều 17, Điều 2 | Khi di chúc được lập, hãy nhớ hủy bỏ di chúc đến sau, hủy bỏ di chúc đến trước, và di chúc công chứng sẽ không còn được ưu tiên | … Nhiều di chúc đã được lập, trong đó di chúc cuối cùng là tài liệu chủ đạo, xem... |
| Điều 18 | Mục 17, Khoản 1 | Khi người cao tuổi thức, một chỉ định bằng văn bản về người giám hộ tương lai | … Phải làm gì về quyền giám hộ được chỉ định? Xem ... |
| Điều 19 | Điều 18 của mục này | Các cặp đôi cùng giới nên hoàn thành giấy ủy quyền, quyền giám hộ dự định và di chúc khi cả hai bên đều tỉnh táo: về mặt pháp lý, bạn không phải là người thân gần, nên nếu không đăng ký, bạn không có quyền ký hoặc thừa kế | … Nếu cả hai bên trong một cuộc hôn nhân chính thức đều có bạn đời cùng giới, các đối tác không được luật hôn nhân bảo vệ và tài sản phải được ghi rõ riêng biệt. Xem phần này... |
| Điều 19 | Điều 15 của mục này | Tính toán chi phí rời đi: Thời gian làm mát 30 ngày cho ly hôn thỏa thuận chung, kèm theo các điều kiện pháp lý cho ly hôn kiện tụng | … Đối với một cuộc hôn nhân chính thức và ly hôn, bạn vẫn cần trải qua giai đoạn hạ nhiệt 30 ngày hoặc ra tòa. Xem phần này... |
| Điều 20 | Mục 8, Điều 43 | Bạo lực gia đình: trước tiên báo cáo với cảnh sát để lưu giữ hồ sơ cảnh sát, sau đó nộp đơn lên tòa án để xin lệnh bảo vệ an toàn cá nhân. Không cần ly hôn trước, không phí | … Nếu bị trúng đạn, hãy nhìn nó trước... |
| Điều 20 | Điều 17 của phần này | Xem chất lượng các mối quan hệ như một tài liệu sức khỏe: tranh luận về vấn đề, không phải con người, không xúc phạm hay chế giễu | … Cách Nói Khi Tranh Luận nằm trong phần này... |
| Điều 20 | Điều 15 của mục này | Tính chi phí rời đi: thời gian làm mát 30 ngày cho ly hôn thỏa thuận chung, điều kiện pháp lý cho ly hôn kiện tụng | … Cách nói trong lúc tranh luận được trình bày tại Điều 17 của phần này (Tranh luận tập trung vào vấn đề, không phải con người). Hãy suy nghĩ kỹ về việc có nên xem phần này hay không... |

## 11 - Ranh giới đỏ mà lập trình viên và kỹ thuật viên dễ dàng vượt qua

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Giới thiệu mục | Điều 1 của mục này | Trước khi hành động, hãy đặt ba câu hỏi: lợi ích của ai bị tổn hại, khả năng của bên kia theo đuổi trách nhiệm giải trình ra sao, và tôi còn bao nhiêu bằng chứng; Nếu bị truy cứu trách nhiệm, hãy ngay lập tức tìm luật sư hình sự | …… |
| Điều 2 | Điều 3 của phần này | Không được viết, không bán vé, bán nhanh chóng, làm giả đơn hàng hoặc lấy kịch bản giảm giá, ngay cả khi chỉ là "nhấn nút tự động" | … Nhưng... |
| Điều 4 | Điều 3 của phần này | Không được viết, không bán vé, bán nhanh chóng, làm giả đơn hàng hoặc lợi dụng kịch bản giảm giá, ngay cả khi chỉ là "nhấn nút tự động" | … Vượt qua bảo vệ để lấy dữ liệu từ hệ thống, kết án và... |
| Điều 7 | Điều 13 của mục này | Trong giờ làm việc và mã nguồn được viết bằng tài nguyên công ty, công ty thuộc về công ty. Các dự án mã nguồn mở của chúng tôi được thực hiện bằng thời gian và thiết bị của riêng mình, và mã nguồn công ty không bị trộn lẫn với công ty. ...Bản quyền của 'mã do chính bạn viết' cũng thuộc về công ty, như được trình bày trong... |
| Điều 9 | Điều 8 của phần này | Không chạy chương trình của bạn trên máy tính, máy chủ hoặc camera của người khác; không sử dụng máy của công ty để khai thác | … Ngay cả những người không đạt đến mức hình sự cũng sẽ phải chịu các hình phạt hành chính, và sẽ có lệnh cấm lao động, với các khoản phạt tương đương về số tiền và thời hạn... |
| Điều 9 | Điều 10 của mục này | Các lỗ hổng phải được báo cáo theo yêu cầu; chi tiết không được tiết lộ trước khi vá lỗi, không được tiết lộ công cụ khai thác, và không công cụ nào được tiết lộ ra nước ngoài | … Làm thế nào để xử lý các lỗ hổng sau khi phát hiện chúng? Xem thêm... |
| Điều 10 | Điều 9 của phần này | Không có sự cho phép bằng văn bản, hệ thống không kiểm tra người khác không phải là "thiện chí" và "báo cáo sau đó" không phải là cơ sở để có tội | … Bạn có đủ điều kiện để tham gia kỳ thi hay không, xem... |
| Điều 15 | Điều 4 của phần này | Trình thu thập dữ liệu chỉ thu thập các trang công khai không yêu cầu đăng nhập, không bỏ qua hoặc đảo ngược dữ liệu, không chạm vào thông tin cá nhân và không bán dữ liệu mà chúng thu thập | … Nếu việc bán hoặc cung cấp thông tin cá nhân cấu thành tội phạm, xem... |
| Điều 16 | Điều 26, Điều 4 | Nếu máy chủ được đặt trong nước, chúng phải được đăng ký; các nhà cung cấp truy cập phải có giấy phép viễn thông giá trị gia tăng riêng | … Cách nộp hồ sơ, mức phạt nếu không đăng ký số đăng ký là bao nhiêu, cách kiểm tra xem nhà cung cấp dịch vụ có đủ điều kiện hay không, xem... |

## 12 - Khởi nghiệp và Kinh doanh

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 2 | Điều 8, Điều 18 | Viết giấy nợ rõ ràng khi vay tiền; trước khi bảo lãnh cho ai đó, hãy cân nhắc kỹ xem bạn có sẵn sàng trả nợ cho họ hay không | … Quy định chung về IOU và thư bảo đảm, xem... |
| Điều 2 | Điều 1 của phần này | Chỉ bắt đầu kinh doanh với số tiền bạn có thể chấp nhận mất, đừng động vào tài sản gia đình, đừng vay tiền để khởi nghiệp | … Bạn vẫn có thể vay tiền, nhưng trước khi ký, bạn cần làm rõ những gì đã ký trên trang này, sau đó nhấn số tiền bảo lãnh vào... |
| Điều 4 | Mục 8, Điều 28 | Không hành động như một "pháp nhân danh nghĩa", không cho ai mượn thẻ căn cước để đăng ký công ty | … Các rủi ro khi có đại diện pháp lý danh nghĩa có thể được tìm thấy trong... |
| Điều 6 | Điều 3 của mục này | Chọn đúng thực thể trước khi mở cửa: Chỉ khi từng doanh nghiệp và đối tác bồi thường đầy đủ thì trách nhiệm hữu hạn mới được giới hạn | … Số vốn đăng ký không ảnh hưởng đến mặt tiền cửa hàng; nó chỉ xác định giới hạn trách nhiệm tối đa của bạn và phải thanh toán đầy đủ trong vòng 5 năm. Xem phần này... |
| Điều 6 | Điều 7 của phần này | Các doanh nghiệp cần giấy phép không thể mở nếu không có giấy phép | … Nếu phạm vi kinh doanh bao gồm các mặt hàng được cấp phép, doanh nghiệp không thể mở nếu không có giấy phép. Xem phần này... |
| Điều 7 | Điều 8 của phần này | Khi làm thực phẩm, trước tiên hãy xem xét bạn thuộc nhóm nào: sản xuất và phục vụ ăn uống cần giấy phép; chỉ cần đăng ký sản phẩm đóng gói sẵn; bán thịt và rau tươi không cần giấy phép | … Các cấp độ khác nhau trong ngành thực phẩm là gì, và bạn có cần giấy phép để bán thịt và rau tươi không? Xem ... |
| Điều 8 | Điều 5, Điều 31 | Nếu bạn mua thực phẩm không an toàn, ngoài việc hoàn tiền, bạn còn có thể bị tính phí gấp mười lần. Nếu khoản bồi thường bổ sung dưới 1.000 nhân dân tệ, sẽ được tính là 1.000 nhân dân tệ | … Người mua có thể yêu cầu bồi thường bao nhiêu? Xem thêm... |
| Điều 8 | Điều 6 của mục này | Trước khi đăng ký, tên gọi, trụ sở kinh doanh, phạm vi kinh doanh và vốn đăng ký phải được xác định; khi tất cả các tài liệu đã sẵn sàng, giấy phép có thể được cấp ngay tại chỗ | … Thân máy chính và giấy phép có thể được tìm thấy tại... |
| Điều 8 | Điều 7 của mục này | Doanh nghiệp cần giấy phép không thể mở nếu không có giấy phép | … Thực thể và giấy phép được liệt kê tại Điều 6 (tên, cơ sở và phạm vi kinh doanh phải được xác định trước khi đăng ký). Liệu các ngành nghề khác có yêu cầu chứng nhận hay không... |
| Điều 9 | Mục 5, Điều 31 | Nếu bạn mua thực phẩm không an toàn, ngoài việc hoàn tiền, bạn còn có thể bị tính phí gấp mười lần giá trị. Nếu khoản bồi thường bổ sung dưới 1.000 nhân dân tệ, sẽ được tính là 1.000 nhân dân tệ | … Hơn nữa, người mua cũng có thể yêu cầu bạn bồi thường gấp mười lần giá thực phẩm, với số tiền dưới 1.000 nhân dân tệ được tính là 1.000 nhân dân tệ (xem... |).
| Điều 10 | Mục 6, Điều 10 | Không chi nhiều tiền cho các loại thực phẩm bổ sung, kem dưỡng hoặc thuốc bổ để "điều hòa cơ thể" | … Cách người mua có thể nhận diện các loại kịch bản này, xem... |
| Điều 11 | Điều 8 của mục này | Khi làm thực phẩm, trước tiên hãy xem xét bạn thuộc nhóm nào: sản xuất và phục vụ ăn uống cần giấy phép; chỉ bán sản phẩm đóng gói sẵn mới cần đăng ký; bán thịt và rau tươi không cần giấy phép | … Nhấn ... |
| Điều 11 | Điều 8 của mục này | Khi làm thực phẩm, trước tiên hãy xem xét bạn thuộc nhóm nào: sản xuất và phục vụ ăn uống cần giấy phép; chỉ bán các sản phẩm đóng gói sẵn cần đăng ký; bán thịt và rau tươi không cần giấy phép | … Tuyến phòng thủ dễ nhất là... |
| Điều 12 | Điều 23 của mục này | Nếu bạn mất tiền, hãy rời đi theo thủ tục: hủy đăng ký nếu có thể; nếu bạn mất khả năng thanh toán, hãy phá sản, đừng chỉ làm ngơ | … Nếu bạn để nó không được quản lý trong ba tháng, tài khoản sẽ trở thành tài khoản bất thường, hóa đơn bị vô hiệu hóa, và ngay cả khi bạn muốn hủy, bạn cũng không thể thực hiện các thủ tục đơn giản hóa. Xem phần này... |
| Điều 14 | Mục 8, Điều 2 | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán. Đừng tự điều tra bản thân trước | … Nếu thanh toán đã được thực hiện hoặc chuyển giao, nhấn đến... |
| Điều 19 | Điều 20 của mục này | Để lại một lô hóa đơn và thông tin cho mỗi lần mua; không mua hàng có giá mua thấp hơn đáng kể so với giá thị trường; nếu nhân viên mua hàng giả, sếp sẽ bị phạt | … Sử dụng nhãn hiệu và đường đỏ của người khác trong mẫu, xem ... |
| Điều 19 | Điều 21 của phần này | Thiết kế trên sản phẩm, bao bì, thẻ và hình ảnh quảng cáo phải tự làm hoặc mua với sự ủy quyền; thay đổi màu sắc hoặc thêm biểu tượng không bị coi là "chỉnh sửa quá mức" | … Sử dụng nhãn hiệu và đường đỏ của người khác trong mẫu, xem... |
| Điều 20 | Điều 21 của phần này | Thiết kế trên sản phẩm, bao bì, thẻ và hình ảnh quảng cáo phải tự làm hoặc mua với sự ủy quyền; thay đổi màu sắc hoặc thêm biểu tượng không được coi là "chỉnh sửa quá mức" | … Dùng mẫu của người khác để xem... |
| Điều 21 | Điều 19 của mục này | Sau khi sản xuất mẫu, trước tiên hãy xem xét danh sách sản xuất hàng loạt trước khi thảo luận về việc bắt đầu công việc | … Kiểm tra nhãn hiệu trước khi sản xuất... |

## 13 - Khẩn cấp

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Bắt đầu phần | Phần 8, Điều 3 | Hãy nhớ các quy tắc chống gian lận nghiêm ngặt: không tin tưởng cuộc gọi, không tiết lộ thông tin, không nhấp vào liên kết và xác minh chuyển khoản thường xuyên hơn — đây là bảy chiêu trò lừa đảo phổ biến nhất | … Quy định cứng nhắc chống gian lận và bảy vụ lừa đảo có tỷ lệ cao xem... |
| Phần bắt đầu | Mục 8, Điều 32 | Sau khi quan hệ tình dục hoặc trò chuyện khỏa thân, bên kia gọi cảnh sát, gửi ảnh, bảo công ty bạn yêu cầu tiền, không trả một xu nào, không xóa bất kỳ hồ sơ nào, và báo cáo trực tiếp với cảnh sát | … Ai đó đòi tiền cho ảnh riêng tư và video chat khỏa thân... |
| Bắt đầu phần | Phần 8, Điều 2 | Nếu bạn nhận ra mình đã bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán—đừng tự kiểm tra bản thân trước | … Tiền đã được chuyển rồi, vì vậy hãy gọi ngay 110 hoặc 96110 để yêu cầu dừng thanh toán, xem... |
| Điều 1 | Điều 44 của mục này | Đối với trẻ sơ sinh dưới 1 tuổi không có phản ứng hoặc thở bình thường, hãy gọi 120 qua loa ngoài để thực hiện CPR cho trẻ sơ sinh: nhịn 30 lần và thở 2 lần | … Trẻ dưới 1 tuổi có các kỹ thuật khác nhau và cần thổi; xem phần này... |
| Điều 2 | Điều 1 của mục này | Nếu ai đó nằm trên mặt đất mà không thở, hãy ngay lập tức ấn ngực để ai đó gọi 120 và tìm máy AED | … Đầu tiên, kiểm tra xem có thở không; nếu không, nhấn ... |
| Điều 2 | Mục 1, Điều 13 | Thực hành thăng bằng và sức mạnh chân cho những người trên 60 tuổi, và cải tạo phòng tắm cùng cầu thang tại nhà bạn | … Phòng ngừa ngã cũng có thể thấy rõ... |
| Điều 2 | Điều 8, Điều 16 | Không được xúc phạm, lan truyền tin đồn hoặc chia sẻ những vấn đề chưa được xác minh trên mạng; Nếu bị lạm dụng trên mạng, trước tiên cung cấp bằng chứng trước khi báo cảnh sát | … Cách để lại bằng chứng cho việc bắt nạt trực tuyến và báo cáo với cảnh sát... |
| Điều 2 | Điều 10 của mục này | Sau khi người cao tuổi cúi đầu quá nhiều, từ hai đến ba tuần đến vài tháng và đi lại không vững, uể oải, buồn ngủ hoặc yếu một bên, họ nên thực hiện chụp CT sọ não … Các triệu chứng muộn sau khi người cao tuổi cúi đầu được thể hiện trong phần này... |
| Điều 2 | Điều 39 của mục này | Nếu bạn bị thương hoặc mất tiền khi cứu ai đó, trước tiên hãy tìm thủ phạm và bảo hiểm y tế, sau đó tuyên bố xác nhận lòng dũng cảm | … Tiền sau khi cứu ai đó bị thương trong phần này... |
| Điều 4 | Điều 3 của phần này | Nếu miệng bạn đột nhiên bị méo, một tay cảm thấy yếu hoặc bạn khó nói rõ, hãy gọi 120 ngay lập tức. Đừng chần chừ hay tự lái xe | … Trong ba hành động 'nghiêng mặt, giơ tay lên và nói' (... |
| Điều 6 | Mục 6, Điều 16 | Đừng mua kính chống ánh sáng xanh để "bảo vệ thị lực," cũng không nghĩ rằng "chỉ vài tháng tiếp xúc với màn hình là sẽ làm hỏng mắt bạn," nhưng sưng, đau và đỏ mắt nên được xử lý như một trường hợp khẩn cấp | … Liệu kính chống ánh sáng xanh có hữu ích hay không, xem... |
| Điều 6 | Điều 5 của phần này | Một mắt đột ngột chuyển sang màu đen như thể có rèm kéo lại; ngay cả khi nó tự lành trong vài phút, bạn vẫn nên đến phòng cấp cứu để chẩn đoán đột quỵ trong ngày hôm đó | … Không đau hay đỏ lên, việc vô hình trong một mắt lại là chuyện khác, nhìn thấy... |
| Điều 10 | Mục 1, Điều 13 | Thực hành thăng bằng và sức mạnh chân cho những người trên 60 tuổi, và cải tạo phòng tắm cùng cầu thang tại nhà bạn | … Ngăn ngừa té ngã... |
| Điều 16 | Điều 2 của mục này | Nếu người cao tuổi bị ngã hoặc ai đó ngã, hãy ngồi xổm và gọi họ hoặc gọi số 120. Đừng vội giúp họ đứng dậy; Người lạ có thể đi bộ ra ngoài là hợp pháp; nếu bạn dừng lại, đừng cố di chuyển họ … Việc làm tương tự sẽ giảm khả năng quyền lợi quay lại với bạn, nhưng cũng ngăn bạn bị quy trách nhiệm. (Điều 184 của Bộ luật Dân sự, xem phần này... |).
| Điều 18 | Điều 1 của phần này | Nếu ai đó ngã quỵ và không thở, hãy ngay lập tức ấn ngực họ để ai đó gọi 120 và tìm máy AED | … Nếu không có nhịp thở sau khi ngắt kết nối, hãy nhấn ngay ... |
| Điều 18 | Điều 1 của phần này | Nếu ai đó nằm trên mặt đất mà không thở, hãy ngay lập tức ấn ngực để ai đó gọi 120 và tìm máy AED | … Nếu không thở sau khi ngắt nguồn, hãy làm theo phần này... |
| Điều 19 | Mục 1, Điều 3 | Lắp đặt đầu báo khói; Lắp đặt máy báo khí carbon monoxide cho đốt than trong nhà hoặc sưởi bằng gas vào mùa đông | … Cách lắp đặt báo động... |
| Điều 20 | Mục 19 | Khi báo động khí carbon monoxide vang lên, hoặc khi cả phòng bị đau đầu và buồn nôn, hãy ra ngoài trước rồi gọi | … Có thể thấy khí carbon monoxide... |
| Điều 20 | Điều 14 của mục này | Sau khi bị bỏng, ngay lập tức rửa bằng nước lạnh chảy trong 20 phút; không bôi kem đánh răng hoặc nước tương | … Carbon monoxide được liệt kê trong Điều 19, bỏng và bỏng nước nằm trong... |
| Điều 20 | Điều 21 của phần này | Nếu axit, kiềm hoặc các hóa chất khác bắn lên cơ thể, hãy ngay lập tức cởi bỏ quần áo bị nhiễm bẩn và rửa bằng nhiều nước chảy. Phải mở mắt để rửa bằng mí mắt, và chỉ rời đi sau khi đủ thời gian | … Khi các hóa chất như axit và kiềm bắn lên cơ thể bạn, bạn cởi quần áo như thế nào và giặt bao lâu? Xem thêm... |
| Điều 21 | Mục 19, Điều 9 | Trước khi vào các vị trí liên quan đến bụi, tiếng ồn hoặc hóa chất, trước tiên kiểm tra xem hợp đồng có đề cập đến nguy cơ hay không; Ba cuộc kiểm tra sức khỏe nghề nghiệp do người sử dụng lao động tổ chức và tài trợ | … Bảo vệ trước khi làm việc và khám sức khỏe có thể được tìm thấy tại... |
| Điều 21 | Điều 19, Điều 10 | Thiệt hại do bụi, tiếng ồn và độc tố hóa học gây ra là không thể phục hồi: thiết bị phải được cung cấp thiết bị; các hoạt động không có biện pháp bảo vệ có thể bị từ chối | … Bảo vệ trước khi tuyển dụng và khám sức khỏe có thể được tìm thấy tại... |
| Điều 21 | Điều 20 của mục này | Không gây nôn ngay sau khi vô tình uống phải chất tẩy rửa, thuốc trừ sâu hoặc thuốc; mang theo chai và đi khám bác sĩ ngay lập tức; Nếu bị bắn lên mắt hoặc da, hãy rửa lại với nhiều nước ít nhất 15 phút | … Đối với chất tẩy rửa gia đình và việc nuốt phải vô tình, xem... |
| Điều 23 | Điều 22 của mục này | Nếu bạn cảm thấy chóng mặt, buồn nôn, đổ mồ hôi hoặc mất ý thức khi nhiệt độ cao, hãy ngay lập tức di chuyển đến nơi có bóng râm, cởi quần áo và vẩy nước để làm mát. Nếu bất tỉnh, không cho nước hoặc gọi 120 | …… |
| Điều 25 | Mục 1, Điều 12 | Trẻ em nên ở gần nước và giữ tầm nhìn sát mắt; mặc áo phao khi chèo thuyền hoặc bơi ngoài trời | … Nếu bạn thực sự muốn cứu chính con mình, làm sao bạn có thể ngăn chặn điều đó... |
| Điều 26 | Điều 43 của mục này | Đối với trẻ dưới 1 tuổi bị nghẹt thở và không thể phát ra âm thanh, nằm úp mặt và vỗ lưng 5 lần, sau đó lật người và ấn ngực 5 lần, luân phiên giữa các lần, không ấn bụng | … Đối với trẻ dưới 1 tuổi, thay vì ấn bụng, nên ấn ngực. Xem phần này... |
| Điều 31 | Điều 13 của mục này | Nếu bị chó hoặc mèo cắn hoặc cào, trước tiên rửa bằng nước xà phòng và nước chảy luân phiên trong 15 phút, sau đó tiêm phòng trong ngày | … Bị chó cào và cắn... |
| Điều 31 | Điều 13 của mục này | Nếu bị chó hoặc mèo cắn hoặc cào, hãy rửa luân phiên bằng nước xà phòng và nước chảy trong 15 phút, sau đó tiêm phòng trong cùng ngày | … Bị chó cắn, đấm... |
| Điều 36 | Điều 8, Điều 32 | Sau khi có quan hệ hoặc trò chuyện khỏa thân, bên kia sẽ báo cảnh sát, gửi ảnh, nói với chủ lao động rằng họ yêu cầu tiền, không trả một xu nào, không xóa bất kỳ hồ sơ nào, và báo cáo trực tiếp với cảnh sát | … Khi mọi người trực tuyến đòi tiền cho ảnh riêng tư hoặc video trò chuyện khỏa thân, thực tế ngược lại—không cho phép một xu nào, xem... |
| Điều 37 | Điều 8, Điều 10 | Nếu xảy ra xung đột và cảnh sát được gọi trước nhưng không gọi về thể chất, người khởi xướng hầu như luôn chịu thiệt thòi | … Bị cuốn vào cuộc xung đột, hẹn gặp lại... |
| Điều 37 | Điều 36 của phần này | Nếu một người lạ đòi tiền trong vùng hoang dã, hãy đưa tiền cho họ, không hành động, ghi lại đặc điểm và báo cảnh sát sau khi trốn thoát | … Bị cuốn vào xung đột, bị ép phải dùng tiền của người lạ, xem phần này... |
| Điều 37 | Điều 39 của mục này | Nếu bạn cứu ai đó bị thương hoặc mất tiền, trước tiên hãy tìm thủ phạm và bảo hiểm y tế, sau đó tuyên bố hành động dũng cảm | … Nếu bạn bị vướng vào xung đột hoặc bị người lạ yêu cầu tiền, xem Điều 36 của phần này, và sau khi bị thương khi cứu ai đó, xem phần này... |
| Điều 38 | Mục 1, Điều 30 | Sử dụng bao cao su trong suốt các hoạt động tình dục, không chia sẻ kim tiêm với người khác | … Chất chẹn chỉ là biện pháp khắc phục; phòng ngừa và xét nghiệm hàng ngày có thể được tìm thấy trong... |
| Điều 38 | Mục 1, Điều 31 | Nếu bạn có hành vi nguy cơ cao, hãy xét nghiệm AIDS một lần; CDC miễn phí, kết quả bảo mật | … Chất chẹn chỉ là biện pháp khắc phục; phòng ngừa và xét nghiệm hàng ngày có thể được tìm thấy trong... |
| Điều 39 | Điều 19, Điều 14 | Sau khi chấn thương ổn định, một đánh giá năng lực lao động được tiến hành và mức độ tàn tật được chuyển trực tiếp thành tiền | … Cách chuyển đổi tiêu chuẩn quốc gia và mức độ khuyết tật của trợ cấp tử vong một lần thành tiền, xem... |
| Điều 39 | Điều 19, Điều 15 | Ba loại tiền cho tử vong liên quan đến công việc cần được phân biệt: trợ cấp tang lễ, lương hưu người thân phụ thuộc, và trợ cấp tử vong liên quan đến công việc một lần | … Cách chuyển đổi tiêu chuẩn quốc gia và mức độ khuyết tật của trợ cấp tử vong một lần thành tiền, xem... |
| Điều 39 | Điều 7, Điều 3 | Nếu bạn không đủ khả năng khởi kiện, hãy nộp đơn xin trợ giúp pháp lý; các trường hợp như yêu cầu tiền lương, trợ cấp nuôi dưỡng và tai nạn lao động đã được bảo hiểm | … Cách nộp đơn xin trợ giúp pháp lý... |
| Điều 40 | Mục 24, Điều 7 | Chấn thương nghiêm trọng và chấn thương nên được chuyển thẳng đến quầy phân loại trước khám khẩn cấp; không xếp hàng tại quầy đăng ký | … Đây là cấp độ bạn cần vào phòng cấp cứu ngay lập tức; đừng xếp hàng chờ ở quầy đăng ký (xem... |).
| Điều 40 | Điều 12 của mục này | Đối với chảy máu nhiều, trước tiên ấn chặt vết thương bằng tay; nếu không thể ấn các chi, hãy dùng garô và đồng thời tiêm 120 | … Cách ấn và đặt garô khi chảy máu nhiều... |
| Điều 41 | Điều 24, Điều 9 | Đánh giá khuyết tật chỉ nên được thực hiện sau khi hoàn thành điều trị; nếu làm quá sớm, mức đánh giá sẽ bị hạ xuống | … Sau khi điều trị, dù là để trải qua đánh giá khuyết tật hay giấy chứng nhận khuyết tật, xem... |
| Điều 41 | Mục 24, Điều 10 | Sau khi điều trị, nếu xác nhận bị suy giảm chức năng, hãy nộp đơn xin giấy chứng nhận khuyết tật tại Liên đoàn Người khuyết tật cấp huyện nơi bạn đăng ký hộ gia đình | … Sau khi điều trị, dù là để trải qua đánh giá khuyết tật hay xin giấy chứng nhận khuyết tật, xem... |
| Điều 41 | Điều 2 của mục này | Nếu người cao tuổi bị ngã hoặc ai đó bị ngã, hãy ngồi xổm và gọi họ hoặc gọi số 120. Đừng vội giúp họ đứng dậy; Người lạ có thể đi ra ngoài là hợp pháp; nếu bạn dừng lại, đừng cố di chuyển họ | … Những điều cấm kỵ di chuyển dành cho người cao tuổi nghi ngờ gãy xương sau khi ngã có thể được tìm thấy trong... |
| Điều 41 | Điều 11 của mục này | Nếu chân đột nhiên sưng, cảm thấy căng hoặc đau khi ấn vào, hãy đi khám bác sĩ ngay lập tức; Nếu bạn đột nhiên khó thở hoặc đau ngực, hãy gọi 120 ngay lập tức | … Nếu một chân bị sưng sau khi bó bột hoặc nghỉ ngơi trên giường, hãy cảnh giác với cục máu đông, xem... |
| Điều 42 | Điều 38 của phần này | Nếu bạn có thể đã tiếp xúc với HIV, hãy mua thuốc chống chẹn trong vòng 72 giờ—càng sớm càng tốt | … Một liệu trình thuốc chẹn có giá hơn một nghìn nhân dân tệ; việc có nên dùng hay không là tùy thuộc vào bác sĩ. Xem phần này... |
| Điều 42 | Điều 8, Điều 41 | Đối với các cuộc gọi điện thoại và phỏng vấn có nguy cơ xảy ra mâu thuẫn, hãy bắt đầu ghi âm trực tiếp: nếu bạn tự mình tham gia cuộc trò chuyện, bạn không cần sự đồng ý của bên kia trước | … Bản ghi âm có thể được tìm thấy tại... |
| Điều 42 | Điều 8, Điều 32 | Sau khi quan hệ tình dục hoặc trò chuyện khỏa thân, nếu bên kia báo cảnh sát, gửi ảnh hoặc nói với chủ lao động rằng họ yêu cầu tiền, họ sẽ không trả cho bạn một xu nào, không xóa bất kỳ hồ sơ nào, chỉ báo trực tiếp với cảnh sát | … Nếu bên kia sau đó đe dọa bạn bằng ảnh hoặc báo cảnh sát, đó cũng là tội phạm, xem... |
| Điều 43 | Điều 26 của phần này | Một số người bị nghẹn và không thể nói, nên họ đứng sau lưng, thực hiện 5 cái vỗ lưng và 5 lần đẩy bụng, sau đó thực hiện CPR khi ngã | … Trẻ em trên 1 tuổi và người lớn nên chuyển sang massage bụng, xem phần này... |
| Điều 43 | Điều 44 của mục này | Đối với trẻ sơ sinh dưới 1 tuổi không có phản ứng hoặc thở bình thường, hãy gọi 120 qua loa ngoài để thực hiện hồi sức tim phổi cho trẻ sơ sinh: 30 lần với 2 hơi thở | … Phải làm gì nếu con bạn không phản ứng? Xem phần này... |
| Điều 44 | Điều 1 của mục này | Nếu ai đó ngã quỵ và không thở, hãy ngay lập tức ấn ngực họ để ai đó gọi 120 và tìm máy điện tử (AED) | … Và phần này... |
| Điều 44 | Điều 43 của mục này | Dành cho trẻ sơ sinh dưới 1 tuổi bị nghẹt thở và không thể khóc, nằm úp mặt và vỗ lưng 5 lần, sau đó lật người và ấn ngực 5 lần, thay phiên nhau nhưng không ấn bụng | … Nếu nghẹt thở do nghẹn, hãy nhìn vào miệng trước khi thổi; chỉ loại bỏ các vật thể lạ có thể nhìn thấy, xem phần này... |

## 14 - Bảo mật tài khoản và thông tin

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 5 | Mục 8, Điều 2 | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán; đừng tự điều tra bản thân trước | … Bạn đã bị lừa tự chuyển tiền, nên bạn cần thử cách khác, xem này... |
| Điều 5 | Điều 1 của phần này | Kích hoạt xác minh phụ cho email, thanh toán và tài khoản mạng xã hội, với cửa sổ bật lên trên điện thoại trước, sau đó là mã xác minh SMS | … Vì vậy, mật khẩu không được chia sẻ với người khác, và mã xác minh không được chuyển tiếp cho người khác (xem... |).
| Điều 9 | Điều 8 của mục này | Bạn có quyền xem, sao chép, chỉnh sửa và xóa thông tin cá nhân của mình; nếu bị từ chối, bạn có thể khởi kiện | … Quyền xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình có thể được tìm thấy tại... |

## 15 - Thuê và Mua Nhà

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 7 | Điều 6 của mục này | Trước khi ký, hãy kiểm tra giấy chứng nhận quyền sở hữu và tình trạng thế chấp; tất cả các khoản tiền phải được chuyển qua chuyển khoản ngân hàng kèm theo ghi chú mục đích | … Tất cả các khoản tiền được chuyển qua chuyển khoản với mục đích được ghi rõ, xem... |

## 16 - Làm thế nào để sống sau khi phát triển bệnh mãn tính?
| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 8 | Mục 6, Điều 21 | Không bỏ canxi chỉ để phòng ngừa sỏi thận | … Đừng bỏ canxi chỉ để phòng ngừa sỏi, xem... |
| Điều 8 | Mục 1, Điều 27 | Nếu có máu rõ ràng trong nước tiểu, dù không đau và đã sạch vào ngày hôm sau, bạn vẫn nên đi xét nghiệm | … Nếu không có đau, còn có những thứ khác cần kiểm tra trong nước tiểu, xem... |
| Điều 9 | Mục 6, Điều 19 | Đừng bắt đầu dùng thuốc giảm axit uric chỉ vì khám sức khỏe cho thấy mức axit uric cao nhưng chưa từng bị đau … Khám lâm sàng cho thấy axit uric cao nhưng không bao giờ xảy ra, đó là chuyện khác. Xem ... |
| Điều 9 | Mục 2, Điều 7 | Không uống đồ uống có đường, chuyển sang đồ không đường cũng không phải là giải pháp | … Bạn có thể thấy đồ uống có đường và đồ uống có cồn... |
| Điều 9 | Mục 2, Điều 19 | Uống ít hơn hoặc không uống gì cả | … Đồ uống có đường và rượu, xem... |

## 17 - Người cao tuổi ở nhà

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 4 | Điều 3 của mục này | Tiền của người cao tuổi được giữ trong một tài khoản riêng, và các khoản chi lớn cần quy tắc xác nhận hai người | … Và... |
| Điều 5 | Điều 8, Điều 2 | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán. Đừng tự điều tra bản thân trước | … Khi bạn đã thanh toán, hãy ngay lập tức tiếp tục... |
| Điều 5 | Điều 3 của mục này | Tiền của người cao tuổi được giữ riêng biệt, và các khoản chi lớn cần quy định xác nhận hai người | … Điều có thể ngăn chặn là bước trả tiền, phối hợp... |
| Điều 5 | Điều 6 của phần này | Ngoại trừ bảo hiểm hưu trí thế chấp ngược của công ty bảo hiểm, không được động vào các "khoản thế chấp chuyển đổi vốn chủ sở hữu" khác và không bao giờ thế chấp nhà để mua quản lý tài sản | … Chuyển đổi thế chấp là một con đường khác, xem... |
| Điều 6 | Mục 8, Điều 17 | Đọc toàn bộ tài liệu trước khi ký, không ký thay người khác, và không ký trên giấy trắng | … Các quy tắc chung về ký kết và hợp đồng trống có thể được tìm thấy trong... |
| Điều 6 | Điều 8, Điều 2 | Nếu bạn phát hiện mình bị lừa đảo, hãy gọi ngay 110 hoặc 96110 để dừng thanh toán—đừng tự kiểm tra bản thân trước | … Để biết các quy tắc chung về ký hợp đồng và hợp đồng trắng, xem Mục 8, Điều 17. Để biết cách ngừng thanh toán sau khi bị lừa đảo, xem... |
| Điều 7 | Mục 7, Điều 8 | Người giữ giấy chứng nhận khuyết tật có thể nộp đơn xin hai loại trợ cấp khuyết tật | … Số tiền này và trợ cấp điều dưỡng trong hai khoản trợ cấp khuyết tật là hai bộ thủ tục và hai khoản thanh toán, nên chúng không mâu thuẫn. Xem |
| Điều 8 | Mục 13, Điều 11 | Nếu chân đột ngột sưng, cảm thấy căng hoặc đau khi ấn vào, hãy đi khám bác sĩ càng sớm càng tốt; Nếu bạn đột nhiên khó thở hoặc đau ngực, hãy gọi ngay số 120 | … Đột nhiên, một chân bị sưng, được điều trị như huyết khối tĩnh mạch sâu, xem... |
| Điều 8 | Mục 1, Điều 34 | Đừng đặt cược rằng 'chỉ nằm vài ngày' sẽ rơi từ độ cao: Hầu hết những người nhập viện ICU chấn thương đều sống sót, nhưng chi phí được tính hàng năm | … Phần anh ấy phải nằm liệt giường lâu vì ngã hoặc chấn thương nặng, xem... |
| Điều 8 | Điều 7 của mục này | Nếu người cao tuổi tại nhà phải nằm liệt giường lâu dài hoặc bị tàn tật nặng, hãy đăng ký bảo hiểm chăm sóc dài hạn tại phòng bảo hiểm y tế của địa điểm được bảo hiểm; Bảo hiểm này không chỉ được cấp cho người cao tuổi | … Dịch vụ chăm sóc được bảo hiểm chăm sóc dài hạn chi trả có thể được tìm thấy trong phần này... |
| Điều 9 | Mục 1, Điều 13 | Thực hành thăng bằng và sức mạnh chân cho người trên 60 tuổi, và cải tạo phòng tắm và cầu thang tại nhà | … Phẫu thuật là về việc bạn có thể nhìn rõ hay không, và bạn cần giảm thiểu việc ngã... |
| Điều 9 | Mục 1, Điều 39 | Phụ nữ trên 65 tuổi nên trải qua xét nghiệm mật độ xương bằng tia X năng lượng kép; các yếu tố nguy cơ loãng xương sau mãn kinh không cần phải chờ đến 65 tuổi | … Nếu xương có thể chịu được một cú đánh, xem... |
| Điều 9 | Mục 1, Điều 40 | Nếu phát hiện loãng xương, hoặc nếu gãy xương do ngã nhẹ, hãy nhờ bác sĩ kê thuốc chống loãng xương và tiếp tục sử dụng; không thay thế bằng bổ sung canxi | … Việc xương có thể chịu được một lần rơi hay không có thể được xem ở mục 1, khoản 39 (kiểm tra mật độ xương) và... |

## 19 - Từ chức và chấn thương công việc

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Mục 8, Điều 19 | Thời hạn bảo vệ quyền: Thời hiệu khởi kiện dân sự 3 năm, Trọng tài lao động 1 năm; thông qua tuyên bố của bên kia về 'vượt quá thời hiệu khởi kiện' là đủ | … Thời hiệu khởi kiện trọng tài trong tranh chấp có thể được tìm thấy tại... |
| Điều 3 | Điều 12, Điều 16 | Ký hợp đồng bằng văn bản trong tháng đầu tiên làm việc và hoàn tất đăng ký bảo hiểm xã hội trong vòng 30 ngày | … Thứ ba, "không đóng bảo hiểm xã hội trong thời gian thử việc," với nghĩa vụ an sinh xã hội tính từ ngày đầu tiên làm việc và không liên quan đến thử việc. Nghĩa vụ của người sử dụng lao động như sau... |
| Điều 3 | Điều 6 của mục này | Nếu công ty chấm dứt hợp pháp trái phép, khoản bồi thường sẽ gấp đôi tiêu chuẩn bồi thường kinh tế | … Đối với việc hủy hợp pháp, nút bấm... |
| Điều 4 | Điều 18 của mục này | Khi nhận trợ cấp thôi việc, trước tiên hãy kiểm tra thuế thu nhập cá nhân: tối đa ba lần mức lương trung bình của nhân viên địa phương năm trước được miễn thuế; bất kỳ khoản vượt quá nào sẽ được tính riêng và không được tính vào lương của năm hiện tại | … Nếu số tiền này cần được nộp bằng thuế thu nhập cá nhân, xem phần này... |
| Điều 8 | Điều 17 của mục này | Khi nghỉ việc, hãy yêu cầu người sử dụng lao động cung cấp giấy chứng nhận nghỉ việc, nêu rõ thời hạn hợp đồng, ngày nghỉ việc, vị trí và số năm làm việc | … Khi nghỉ việc, bạn vẫn cần tìm nhà tuyển dụng để lấy giấy chứng nhận nghỉ việc, xem phần này... |
| Điều 9 | Điều 11 của mục này | Nếu bạn bị thương tại nơi làm việc hoặc bị va chạm trên đường đi làm và về nhà, việc đầu tiên cần làm là xác định về tai nạn lao động. Nếu người sử dụng lao động không báo cáo, bạn nên tự báo cáo | … Bệnh nghề nghiệp được coi là chấn thương lao động, và việc điều trị phụ thuộc vào... |
| Điều 10 | Mục 13, Điều 21 | Nếu axit, kiềm hoặc các hóa chất khác bắn lên cơ thể, hãy ngay lập tức cởi bỏ quần áo bị nhiễm bẩn và rửa bằng nhiều nước chảy. Mắt nên mở ra để rửa bằng mí mắt, và chỉ rời đi sau khi đủ thời gian | … Việc xử lý tại chỗ các vết tràn hóa chất trên cơ thể có thể được tìm thấy tại ... |
| Điều 10 | Điều 9 của mục này | Trước khi vào vị trí liên quan đến bụi, tiếng ồn hoặc hóa chất, trước tiên kiểm tra xem hợp đồng có đề cập đến nguy cơ hay không; Ba lần kiểm tra sức khỏe nghề nghiệp do người sử dụng lao động tổ chức và tài trợ | … Do đó, việc khám sức khỏe khi nghỉ việc đặc biệt quan trọng (xem... |).
| Điều 16 | Điều 8, Điều 41 | Đối với các cuộc gọi điện thoại và phỏng vấn mà bạn có thể trở nên thù địch, hãy bắt đầu ghi âm trực tiếp: nếu bạn tự tham gia cuộc trò chuyện, bạn không cần phải có sự đồng ý của bên kia trước | … Bước một: bắt đầu ghi hình từ hôm nay, các bản ghi có thể được tìm thấy tại... |
| Điều 16 | Mục 1, Điều 25 | Gọi 12356 khi cảm thấy trầm cảm hoặc có ý nghĩ tự tử; không tích trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Tôi không thể giữ thêm nữa, nên tôi sẽ gọi 12356 trước, xem sao... |
| Điều 16 | Điều 7 của mục này | Không ký "từ chức vì lý do cá nhân", nếu không một khi ký sẽ không có N | … Bước bốn: Những người bị buộc phải rời đi do không được trả lương hoặc trợ cấp bảo hiểm xã hội nên làm theo phần này... |
| Điều 16 | Điều 8 của mục này | Trước khi nghỉ việc, hãy lưu lại phiếu lương, điểm danh, hợp đồng lao động, hồ sơ bảo hiểm xã hội và hồ sơ trò chuyện | … Bước bốn: Nếu bạn buộc phải rời đi do không được trả lương hoặc bảo hiểm xã hội, hãy tuân theo Điều 7 của mục này (không ký từ chức tự nguyện) và... |
| Điều 16 | Điều 4 của mục này | Giải quyết việc sa thải đầu tiên N: một tháng lương cho mỗi năm đầy đủ; nếu dưới sáu tháng, nửa tháng | … Khoản bồi thường kinh tế được tính như thế nào? Xem phần này... |
| Điều 17 | Mục 7, Điều 1 | Nếu thất nghiệp, hãy nộp đơn xin trợ cấp thất nghiệp trực tuyến trước | … Làm thế nào để nhận trợ cấp bảo hiểm thất nghiệp? Xem ... |
| Điều 17 | Điều 7 của mục này | Không được ký "tự nguyện từ chức vì lý do cá nhân," hoặc một khi đã ký sẽ không còn N | … Giấy chứng nhận ghi rõ 'tự nguyện từ chức vì lý do cá nhân,' nhưng thực tế không phải vậy. Hãy xuất trình tại chỗ, và lý do sẽ được trình bày trong phần này... |
| Điều 18 | Điều 4 của mục này | Giải quyết việc sa thải đầu tiên N: một tháng lương cho mỗi năm đầy đủ; nếu dưới sáu tháng, nửa tháng | … Cách tính toán bù đắp, xem phần này... |
| Điều 18 | Điều 5 của mục này | Công ty sa thải bạn mà không thông báo trước 30 ngày và phải trả thêm một tháng lương | … Cách tính khoản bồi thường có thể được tìm thấy trong Điều 4 của phần này (Thanh toán N trước sau khi bị sa thải)、... |
| Điều 18 | Điều 6 của mục này | Nếu công ty chấm dứt hợp pháp trái phép, khoản bồi thường sẽ gấp đôi tiêu chuẩn bồi thường kinh tế | … Cách tính toán bồi thường có thể được tìm thấy tại Điều 4 của mục này (Thanh toán N trước khi bị sa thải), Điều 5 (không cần thông báo trước 30 ngày), và... |

## 20 - Cách chăm sóc trẻ sơ sinh

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 3 | Điều 2 của mục này | Liều đầu tiên của vắc-xin viêm gan B trong vòng 24 giờ sau khi sinh | … Liều đầu tiên của viêm gan B đã vào... |
| Điều 4 | Điều 12 của phần này | Nếu con bạn bị chàm nặng hoặc dị ứng trứng, đừng tránh xa đậu phộng; làm theo hướng dẫn của bác sĩ và cho ăn sớm, nhưng không bao giờ cho trẻ ăn nguyên hạt | … Nếu con bạn bị chàm nặng hoặc dị ứng trứng, bạn có nên tránh đậu phộng không? Xem phần này... |
| Điều 12 | Mục 13, Điều 26 | Một số người nghẹn ngào và không thể nói, nên đứng sau lưng và thực hiện 5 cái vỗ lưng cộng 5 lần đẩy bụng, sau đó ngã và thực hiện CPR | … Nếu bị nghẹn thì phải làm gì? Hẹn gặp lại... |
| Điều 12 | Điều 4 của mục này | Trong 6 tháng đầu, chỉ cho con bú, không cần cho uống nước; từ 6 tháng trở đi, các thực phẩm bổ sung được bổ sung và tiếp tục cho con bú con | … LEAP bắt đầu từ 4 tháng tuổi, trong khi ở Trung Quốc thức ăn bổ sung bắt đầu từ 6 tháng tuổi, xem phần này... |
| Điều 13 | Điều 27, Điều 13 | Không từ chối kiểm tra máu gót chân và thính lực trẻ sơ sinh | … Sàng lọc trẻ sơ sinh có thể được tìm thấy tại... |
| Điều 13 | Điều 3 của mục này | Tiêm chủng đầy đủ theo chương trình tiêm chủng quốc gia, miễn phí; nếu bạn quên liều, chỉ cần bổ sung liều chưa sử dụng | … Bản thân bệnh vàng da không làm chậm việc tiêm chủng; xem phần này... |

## 21 - Du lịch nước ngoài và An toàn ở nước ngoài

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 4 | Điều 3 của mục này | Biết bảo hộ lãnh sự có thể và không thể làm gì: được thăm gặp, không được cứu hộ, và chi phí phải tự chi trả | … Bảo hộ lãnh sự cũng không làm tăng số tiền này (xem... |
| Điều 6 | Điều 14, Điều 5 | Nếu thẻ của bạn bị quẹt gian lận, trước tiên hãy báo cáo thiệt hại và đóng băng thẻ, sau đó báo cảnh sát, rồi yêu cầu bồi thường từ ngân hàng: Chứng minh 'bạn tự thanh toán' là trách nhiệm của ngân hàng | … Phải làm gì nếu thẻ của bạn bị mất, bị nuốt hoặc quẹt gian lận? Xem |
| Điều 7 | Điều 2 của mục này | Lưu số lãnh sự quán 12308 và đại sứ quán hoặc lãnh sự quán địa phương vào điện thoại của bạn, tạo một bản sao khác và bỏ vào ví, đừng chờ đến khi có sự cố mới tìm thấy | … Lối vào đại sứ quán hoặc lãnh sự quán là... |

## 22 - Cách thư giãn

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 4 | Mục 8, Điều 29 | Không giúp người lạ mang đồ khi nhập cảnh hoặc xuất cảnh vào nước, cũng không nhận các kiện hàng không rõ nguồn gốc thay cho người khác | … Mang đồ cho ai đó xem... |
| Điều 4 | Điều 3 của mục này | Nếu ai đó tại địa điểm giao 'thứ gì đó', hãy rời đi ngay lập tức; cả việc tiếp nhận lẫn cung cấp đều không phải là 'giúp đỡ bạn bè' | … Bạn nên làm gì nếu ai đó trong địa điểm lấy ra một loại bột, viên nén hoặc hộp mực không rõ danh tính? Xem phần này... |

## 23 - Những kỹ năng nào đáng để học?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Giới thiệu phần | Điều 2 của phần này | Đặt 'Đọc có hữu ích không' trong tài khoản tỷ lệ tử vong: Mỗi năm học bổ sung, nguy cơ tử vong ở người trưởng thành giảm khoảng 1,9% | … Phần này nói về tiền bạc và thời gian,... |
| Phần bắt đầu | Điều 1 của phần này | Người dưới 16 tuổi không có lựa chọn "đi làm": nhà tuyển dụng bạn sẽ bị phạt 5000 nhân dân tệ mỗi tháng, và những người sẵn sàng tuyển đều là lao động không có giấy tờ | …… |
| Giới thiệu phần | Điều 2 của phần này | Bao gồm 'Đọc có hữu ích không?' vào tỷ lệ tử vong: Mỗi năm học bổ sung, nguy cơ tử vong ở người trưởng thành giảm khoảng 1,9% | … Điều 1: Thứ nhất, đoạn nào bị luật gạch bỏ,... |
| Giới thiệu phần | Điều 3 của phần này | Trước khi đánh giá liệu 'trình độ học thuật có bị giảm giá trị hay không,' hãy xem xét cấu trúc giáo dục quốc gia: chỉ có 15.467 trên mỗi 100.000 người có trình độ đại học | … Điều 1 trước tiên xác định điều khoản nào bị loại bỏ, và Điều 2 tính toán mối quan hệ giữa việc đọc và tuổi thọ,... |
| Khởi đầu phần | Điều 4 của phần này | "Không đủ khả năng học tập" trước tiên tính theo chính sách: phần lớn học phí nghề được miễn, học bổng là 2.300 nhân dân tệ, và khoản vay sinh viên lên đến 20.000 nhân dân tệ mỗi năm | …… |
| Phần bắt đầu | Điều 5 của phần này | Không được nhận vào một trường trung học phổ thông không có nghĩa là con đường của bạn bị cắt đứt: Các trường nghề cung cấp thông qua tuyển sinh và các kỳ thi riêng biệt, và các vị trí kỹ năng có thể giảm yêu cầu giáo dục | … Điều 4 thảo luận về những hỗ trợ tài chính ,... có thể cung cấp khi bạn không đủ khả năng đọc sách
| Giới thiệu phần | Phần 6 | Xem 'Học hoặc Làm việc' như một vấn đề: Mức lương nhận được ba năm trước đó là sự chênh lệch thu nhập hàng năm trong các thập kỷ tiếp theo | … Mục 4 nói về hỗ trợ tài chính khi bạn không đủ khả năng học, và điểm 5 nói về các con đường có sẵn nếu bạn không vào được trường trung học phổ thông,... |
| Giới thiệu phần | Điều 14 của phần này | Sau khi hoàn thành, hãy đóng sách lại và tự kiểm tra; đừng quay lại đọc lại | …… |
| Bắt đầu phần | Điều 15 của phần này | Phân bổ cùng một khoảng thời gian trong nhiều ngày, đừng hoàn thành tất cả một lần | …… |
| Giới thiệu phần | Phần 16 | Không xem việc nhấn mạnh, đọc lặp đi lặp lại hoặc viết tóm tắt là phương pháp học chính | …… |
| Phần Lời nói đầu | Điều 17 của phần này | Luyện tập nhiều loại câu hỏi kết hợp với nhau, nhưng làm hai mươi câu liên tiếp thay vì một câu | …… |
| Giới thiệu phần | Điều 18 của phần này | Đừng chọn các phương pháp học như 'Tôi thuộc kiểu thị giác, anh ấy là kiểu thính giác' | …… |
| Giới thiệu phần | Điều 19 của phần này | Hãy kiểm tra bản thân với nội dung bạn cần ghi nhớ, dựa trên việc sử dụng trong tương lai; đừng chỉ ghi nhớ nguyên bản và thế là xong | …… |
| Phần bắt đầu | Điều 20 của phần này | Khi đánh giá các chức danh chuyên môn, trước tiên hãy làm rõ bạn thuộc chuỗi và cấp độ nào, sau đó tìm các kênh ứng tuyển dựa trên tính chất của tổ chức | …… |
| Bắt đầu | Điều 21 của mục này | Các bằng nghề nghiệp cấp nhập môn và trung cấp trong kế toán được lấy thông qua kỳ thi thống nhất quốc gia. Trước tiên, đăng ký dựa trên trình độ học vấn và số năm làm việc của bạn | …… |
| Bắt đầu phần | Điều 22 của phần này | Không thuê trung gian để đánh giá, không mua bài viết để viết thuê, không làm giả tài liệu: nếu được xác minh, danh hiệu nghề nghiệp của bạn sẽ bị thu hồi và hồ sơ liêm chính của bạn sẽ được ghi nhận trong 3 năm | …… |
| Phần bắt đầu | Điều 23 của phần này | Việc có chức danh chuyên môn không đồng nghĩa với việc tăng lương: trước tiên hãy làm rõ liệu nhà tuyển dụng có đánh giá các vị trí dựa trên tỷ lệ vị trí hay việc đánh giá không đảm bảo được tuyển dụng | …… |
| Điều 1 | Điều 10 của phần này | Khi lựa chọn kỹ năng, hãy ưu tiên "có nên làm hay không và có nên đánh giá ngay tại chỗ hay không" — đây là những kỹ năng khó thay thế bằng tự động hóa nhất | … Nhưng vị trí dành cho một người 16 tuổi chưa có trình độ học vấn chính quy lại chính là lựa chọn phù hợp cho bộ phận này... |
| Điều 2 | Điều 4 của mục này | "Không đủ khả năng học tập" trước tiên tính theo chính sách: hầu hết học phí các trường nghề được miễn, học bổng là 2.300 nhân dân tệ, và khoản vay sinh viên lên đến 20.000 nhân dân tệ mỗi năm | … Đó là về việc dành thêm nhiều năm thời gian và công sức để học tập. Phần học phí có thể được xem trong phần này... |
| Điều 3 | Điều 6 của mục này | Xem 'Học tập hoặc Làm việc' như một vấn đề: Sự khác biệt giữa ba năm thu nhập và thu nhập hàng năm trong các thập kỷ tiếp theo | … Việc một cá nhân cụ thể có đáng để học hay không sẽ được xác định theo phần này... |
| Điều 5 | Điều 10 của mục này | Khi lựa chọn kỹ năng, ưu tiên "có nên thực hành hay không và có đánh giá tại chỗ hay không"—đây là những kỹ năng khó thay thế bằng tự động hóa | … Khi chọn chuyên ngành nghề, hãy sử dụng phần này... |
| Điều 5 | Điều 8 của mục này | Trước khi chi tiền cho chứng chỉ, trước tiên hãy kiểm tra xem chứng chỉ này có được liệt kê trong Danh bạ Trình độ Nghề nghiệp Quốc gia hoặc danh sách các cơ quan đánh giá được nộp cho Bộ Nhân lực và An sinh Xã hội hay không | … Giấy chứng nhận được cấp sẽ được tái cấp... |
| Điều 6 | Điều 7 của mục này | Trước tiên, hãy nhớ đến cơ sở: với một năm học nữa, lợi nhuận cá nhân trung bình toàn cầu (phần thu nhập được tính vào thu nhập của một người) khoảng 9% mỗi năm | … Trung bình toàn cầu có thể được tìm thấy trong phần này... |
| Điều 6 | Điều 4 của mục này | "Không đủ khả năng học tập" trước tiên tính theo chính sách: hầu hết học phí nghề được miễn, học bổng 2.300 nhân dân tệ, và khoản vay sinh viên lên đến 20.000 nhân dân tệ mỗi năm | … Trước khi tính toán, hãy loại trừ phần này... |
| Điều 6 | Điều 2 của phần này | Bao gồm 'Đọc có hữu ích không?' vào tỷ lệ tử vong: Mỗi năm giáo dục bổ sung, nguy cơ tử vong ở người trưởng thành giảm khoảng 1,9% | … Trước khi tính toán, trước tiên hãy trừ học phí và hỗ trợ tài chính được miễn theo Điều 4 (Trường Trung học Nghề) trong phần này. Ngoài ra, phần này... |
| Điều 6 | Mục 7 của mục này | Hãy nhớ điểm cơ sở trước: sau một năm học tập nữa, lợi nhuận cá nhân trung bình toàn cầu (phần thu nhập được chuyển vào thu nhập của chính một người) khoảng 9% mỗi năm | … Phần này... |
| Điều 6 | Điều 5 của phần này | Không được nhận vào một trường trung học thông thường không có nghĩa là con đường của bạn bị cắt đứt: các trường nghề có tuyển sinh tích hợp và các kỳ thi riêng biệt, và đối với các vị trí có kỹ năng, yêu cầu giáo dục có thể được giảm nhẹ | … Các bằng cấp học thuật pháp lý có thể được tìm thấy trong phần này... |
| Điều 6 | Điều 10 của phần này | Khi lựa chọn kỹ năng, hãy ưu tiên "làm trực tiếp hay chấm điểm tại chỗ"; đây là những kỹ năng khó thay thế nhất bằng tự động hóa | … Khả năng kháng thay thế, xem... |
| Điều 14 | Điều 15 của mục này | Trải đều khoảng thời gian trong vài ngày, đừng hoàn thành tất cả một lần | … Tự kiểm tra và... |
| Điều 15 | Điều 14 của phần này | Sau khi hoàn thành, hãy đóng sách lại và tự kiểm tra; đừng đọc lại | … Và... |
| Điều 16 | Điều 14 của phần này | Sau khi hoàn thành, hãy đóng sách lại và tự kiểm tra; đừng đọc lại | … Các nước đi thay thế có thể được tìm thấy trong ... |
| Điều 16 | Điều 15 của phần này | Phân bổ cùng một khoảng thời gian trong vài ngày, đừng học hết một lần | … Các hành động thay thế có thể được tìm thấy trong Điều 14 (tự kiểm tra khi đóng sách) và... |
| Điều 17 | Điều 16 của phần này | Đừng xem việc nhấn mạnh, đọc đi đọc lại hoặc viết tóm tắt là phương pháp học chính của bạn | …… |
| Điều 18 | Điều 9 của phần này | Đào tạo nên ưu tiên các khoản trợ cấp của chính phủ; đừng đăng ký lớp hạng thương gia với chi phí của bạn ngay lập tức | … Tiêu chí lựa chọn đào tạo có thể được tìm thấy trong... |
| Mục 18 | Mục 13 | Với cùng số tiền và thời gian, ưu tiên các dự án ngắn hạn có thể khởi động trực tiếp | … Tiêu chí lựa chọn đào tạo được thể hiện trong Điều 9 (đào tạo được ưu tiên thông qua các kênh trợ cấp của chính phủ) và... |
| Điều 19 | Điều 16 của phần này | Đừng xem việc nhấn mạnh, đọc đi đọc lại hoặc viết tóm tắt là phương pháp học chính của bạn | … Hạng mục đầu tiên có điểm số thấp nhất trong tổng quan về mười phương pháp học xếp hàng. Nếu bạn muốn xem điểm số trực tiếp... |
| Điều 19 | Điều 14 của phần này | Sau khi hoàn thành, đóng sách lại và tự kiểm tra; đừng đọc lại | … Đóng sách lại và chủ động ghi nhớ; xem chi tiết để... |
| Điều 19 | Điều 15 của phần này | Phân bổ cùng một khoảng thời gian trong vài ngày, đừng học hết một lần | … Đóng sổ và chủ động nhớ lại. Xem mục 14 (tự đánh giá khi đóng sách), và nên thực hiện trong vài ngày, xem... |

## 24 - Đi khám bác sĩ

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Mục 16, Điều 5 | Đối với các bệnh mãn tính với tình trạng ổn định, thuốc có thể được kê đơn lên đến 12 tuần một lần tại các bệnh viện cộng đồng | … Các dịch vụ ngoại trú chung như vậy tại các bệnh viện lớn sẽ dần được giảm bớt, và cộng đồng có thể kê đơn thuốc trong 12 tuần mỗi lần, xem... |
| Điều 6 | Điều 5 của mục này | Sau mỗi lần khám bệnh, hãy lưu lại một bản sao hồ sơ y tế, báo cáo khám và hình ảnh của bạn | … Sao chép là việc bạn nên thực hiện thường xuyên, xem thêm... |
| Điều 8 | Mục 7, Điều 10 | Nếu bạn mắc bệnh nặng, hãy đến bảo hiểm y tế, bảo hiểm bệnh hiểm nghèo, hỗ trợ y tế và đăng ký ở nơi khác; không động vào các khoản vay trực tuyến | … Phần tiền tôi tự trả sau đó vẫn quá nặng, nên tôi đã qua cấp cứu y tế, xem này... |
| Điều 9 | Điều 10 của mục này | Nếu vẫn còn suy giảm chức năng sau khi điều trị, hãy nộp đơn xin giấy chứng nhận khuyết tật tại Liên đoàn Người khuyết tật cấp quận nơi bạn đăng ký hộ gia đình | … Để hưởng quyền lợi chính sách của người khuyết tật, bạn phải có giấy chứng nhận khuyết tật riêng biệt (xem... |
| Điều 9 | Điều 5 của mục này | Sau mỗi lần khám, hãy giữ một bản sao hồ sơ y tế, báo cáo khám và hình ảnh của bạn | … Trước khi nhận dạng, chuẩn bị tất cả hồ sơ y tế, hồ sơ phẫu thuật và hình ảnh theo dõi (xem... |
| Điều 10 | Mục 7, Điều 8 | Người nộp đơn có giấy chứng nhận khuyết tật có thể nộp đơn xin hai loại trợ cấp khuyết tật | … Người khuyết tật trong các gia đình thu nhập thấp nhận trợ cấp sinh hoạt, cấp độ 1 và cấp độ 2 nhận trợ cấp điều dưỡng cần chăm sóc dài hạn, xem... |
| Điều 10 | Điều 9 của mục này | Đánh giá khuyết tật chỉ nên được thực hiện sau khi hoàn thành điều trị; nếu thực hiện quá sớm, mức đánh giá sẽ bị hạ thấp | … Đó là ba nhóm yếu tố không thể thiếu và không thể thay thế bằng mức độ khuyết tật được đánh giá qua đánh giá của tòa án và đánh giá năng lực lao động đối với chấn thương lao động (xem... |).
| Điều 11 | Điều 8, Điều 40 | Không được đưa tiền hoặc thẻ cho nhân viên xử lý vụ án hoặc nhân viên thực thi pháp luật: Nếu bạn nhận hối lộ, bạn sẽ bị xét xử, nhưng đối với giám sát, lực lượng thực thi pháp luật hoặc tư pháp, hối lộ nên được xử lý nghiêm khắc hơn | … Phong bì đỏ thuộc phạm vi kỷ luật ngành và quản lý bệnh viện. Việc đưa tài sản cho nhân viên xử lý vụ án hoặc thực thi pháp luật bị coi là hối lộ theo luật hình sự. Hai vụ này không cùng quy mô, và vụ sau có thể thấy... |
| Điều 11 | Điều 6 của mục này | Nếu có nghi ngờ về chẩn đoán hoặc điều trị, yêu cầu niêm phong hồ sơ y tế tại chỗ; cả hai bên phải có mặt, lập danh sách và mỗi người giữ một bản sao | … Nếu có nghi ngờ về chẩn đoán và điều trị, họ sẽ yêu cầu niêm phong hồ sơ y tế ngay tại chỗ (xem phần này... |).
| Điều 11 | Điều 5 của mục này | Sau mỗi lần khám, hãy giữ một bản sao hồ sơ y tế, báo cáo xét nghiệm và hình ảnh của bạn | … Nếu có nghi ngờ về chẩn đoán và điều trị, hãy yêu cầu niêm phong hồ sơ y tế ngay tại chỗ (xem Điều 6 của mục này, niêm phong hồ sơ y tế), và giữ lại hồ sơ cùng hình ảnh (... |

## 25-Làm gì sau khi ai đó rời đi?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Điều 2 của mục này | Giấy chứng tử là chìa khóa cho mọi việc tiếp theo: ai điều trị cho bạn sẽ cấp; đối với các trường hợp tử vong bình thường tại nhà, hãy đến dịch vụ y tế cộng đồng và cấp trong vòng một ngày | … Ai xử lý giấy chứng tử sẽ cấp nó, xem... |
| Điều 3 | Điều 6 của mục này | Dịch vụ tang lễ được chia thành các hạng mục cơ bản và phi cơ bản. Các hạng mục cơ bản có danh sách kiểm tra và phí được quy định theo quy định pháp luật | … Bản thân việc nhận hàng là một dự án cơ bản có giá cả, xem... |
| Điều 5 | Điều 9 của phần này | Tiền được phân bổ ở nhiều nơi phải được rút từng khoản một: số dư quỹ nhà ở, trợ cấp an sinh xã hội, trợ cấp tai nạn lao động | … Số tiền ít ỏi đó, hẹn gặp lại... |

## 26 - Tạo website hoặc nền tảng

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 4 | Điều 5 của phần này | Khi người dùng đến bán sản phẩm, nền tảng phải xác minh đăng ký, gửi thông tin và lưu giữ trong vòng ba năm | … Nhưng người dùng là trong nước, tiền là trong nước, phần này... |
| Điều 4 | Điều 6 của phần này | Bạn phải quản lý nội dung do người dùng đăng: cơ chế xem xét, cổng báo cáo, ngay lập tức ngừng chia sẻ và báo cáo vi phạm | … Nhưng người dùng ở trong nước, tiền là trong nước, phần này... |
| Điều 4 | Điều 7 của mục này | Khi cung cấp dịch vụ xuất bản thông tin hoặc nhắn tin tức thời, người dùng phải cung cấp thông tin nhận dạng thật của mình | … Nhưng người dùng ở trong nước, tiền là trong nước, phần này... |
| Điều 4 | Điều 8 của mục này | Không phát trực tiếp đối với người dưới 16 tuổi; tiền tip được phân chia theo nhóm tuổi | … Nhưng người dùng ở trong nước, tiền là trong nước, phần này... |
| Điều 4 | Điều 9 của mục này | Khi nhận được thông báo vi phạm, phải xử lý nhanh chóng; nếu không có phản hồi trong vòng 15 ngày kể từ khi gửi thông báo, vấn đề sẽ được khôi phục | … Nhưng người dùng ở trong nước, tiền là trong nước, phần này... |
| Điều 4 | Điều 10 của mục này | Không được tùy tiện đưa thông tin người dùng ra nước ngoài; có các điều kiện pháp lý và ngưỡng để xuất cảnh khỏi nước | … Nhưng người dùng là trong nước, tiền là trong nước, phần này... |
| Điều 11 | Mục 11, Điều 16 | Trước khi ra mắt các trang web hoặc ứng dụng, phải hoàn tất đăng ký ICP, và nhật ký phải được lưu giữ ít nhất 6 tháng theo các yêu cầu bảo vệ bí mật | … Các yêu cầu pháp lý về trình độ và việc nộp hồ sơ của nhà cung cấp dịch vụ được quy định tại Điều 4 của phần này. Lưu trữ nhật ký trong 6 tháng và nghĩa vụ bảo vệ được phân loại như sau... |

## 27 - Mang thai và Sinh nở

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 3 | Mục 20, Điều 2 | Liều đầu tiên vắc-xin viêm gan B trong vòng 24 giờ sau khi sinh | … Nếu mẹ có kháng nguyên bề mặt viêm gan B dương tính, trẻ sơ sinh nên được tiêm cả vắc-xin viêm gan B và globulin miễn dịch viêm gan B ngay khi sinh (xem... |).
| Điều 11 | Mục 18, Điều 2 | Nghỉ thai sản 98 ngày, trợ cấp thai sản được quỹ bảo hiểm thai sản chi trả dựa trên mức lương trung bình hàng tháng của người lao động năm trước | … Cách tính ngày nghỉ thai sản và trợ cấp thai sản... |
| Điều 16 | Điều 7 của mục này | Ghi nhớ danh sách kiểm tra "đến bệnh viện ngay lập tức" này, tính trong thời kỳ mang thai và trong vòng một năm sau sinh | …… |
| Điều 16 | Điều 9, Điều 20 | Nếu một đứa trẻ được sinh ra và không thể nuôi dưỡng, lựa chọn pháp lý duy nhất là đăng ký dân sự: việc lấy tiền để giao đứa trẻ cho ai đó có thể bị buộc tội buôn người, bỏ rơi đứa trẻ bất kể tội bỏ rơi con là gì | … Khi đứa trẻ được sinh ra và thực sự không thể nuôi dưỡng, hãy tìm cách hợp pháp để giải quyết... |

## 28 - Đừng phá hủy cơ thể chỉ vì vẻ ngoài

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Điều 1 | Mục 2, Điều 32 | Giữ chỉ số BMI trong khoảng 20–25, và giảm cân nếu thừa cân | … Mối quan hệ giữa BMI và tỷ lệ tử vong có thể được tìm thấy trong... |
| Điều 3 | Điều 2 của phần này | Hai điều cần kiểm tra trước khi tiêm, chèn chỉ hoặc phẫu thuật: giấy phép của cơ sở có 'thẩm mỹ y khoa' không và người thực hiện thủ thuật có phải là bác sĩ điều trị hay không | … Trước khi bắt đầu, vui lòng làm theo phần này... |
| Điều 5 | Điều 4 của phần này | Không mua thuốc giảm cân, cà phê ăn kiêng, kẹo giảm cân, hoặc mận enzyme hứa hẹn 'giảm cân nhanh' | … Phương pháp đánh giá giống như phương pháp đối với các sản phẩm giảm cân (... |
| Điều 6 | Điều 5 của phần này | Không sử dụng steroid đồng hóa ("thuốc tăng cơ" hoặc "thuốc uống") để xây dựng cơ bắp | … Phần này... |
| Điều 6 | Điều 7 của mục này | Thuốc hormone giới tính chỉ nên được sử dụng theo đơn của bác sĩ và theo dõi định kỳ; không mua trực tuyến hoặc tự tăng liều | … Phần này... |

## 29 - Sau một cú đánh lớn

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Bắt đầu | Điều 9 của mục này | Đừng bắt đầu bằng việc chi tiền cho tư vấn tâm lý đau buồn; trước tiên hãy kiểm tra xem nỗi đau của bạn có thực sự bị mắc kẹt không (Các triệu chứng được liệt kê ở mục 8) | … Đừng bắt đầu bằng cách chi tiền cho tư vấn tâm lý đau buồn (... |
| Bắt đầu | Điều 11 của mục này | Gọi 12356 để nói chuyện với ai đó, gọi 12355 cho trẻ vị thành niên và thanh thiếu niên, và để gặp bác sĩ cũng như đăng ký phòng khám tâm lý | … Đừng bắt đầu bằng việc chi tiền cho tư vấn tâm lý (Điều 9), gọi 12356, hoặc gọi đến phòng khám tâm lý (... |).
| Giới thiệu mục | Điều 12 của mục này | Trong ba tháng đầu sau một sự cố, tất cả các quyết định lớn không thể đảo ngược phải được hoãn lại | … Tham vấn (Điều 9), gọi số 12356 và đăng ký phòng khám tâm lý (Điều 11), trì hoãn các quyết định lớn không thể đảo ngược (... |
| Phần bắt đầu | Điều 13 của phần này | Đừng xem việc trả nợ như một cách để trả nợ: Bảo hiểm nhân thọ không được chi trả trong vòng hai năm, tai nạn lao động không được công nhận, và các khoản nợ vẫn được khấu trừ từ tài sản trước | … Bổ nhiệm tư vấn tâm lý (Điều 11), hoãn các quyết định lớn không thể đảo ngược (Điều 12), không coi cái chết là cách trả nợ (... |
| Bắt đầu | Điều 6 của phần này | Nếu bạn không có gia đình hoặc bạn bè, hãy thay 'người đang theo dõi bạn' bằng ba điều: hàng xóm có thể vào nhà bạn, danh sách khách tham quan cộng đồng, và các liên hệ khẩn cấp trên điện thoại của bạn | … Khi không có gia đình hay bạn bè để tìm kiếm, cụm từ 'tìm người để theo dõi' lại có thể phù hợp như thế nào... |
| Mục 1 | Mục 1, Điều 25 | Gọi 12356 khi bạn bị trầm cảm hoặc có ý nghĩ tự tử; không tích trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu bạn có ý nghĩ tự tử, hãy gọi 12356 trước để hỏi... |
| Mục 1 | Mục 1, Điều 32 | Khi ý nghĩ tự tử xuất hiện, trước tiên hãy nói với ai đó gần đó và trao cho họ vài chục phút đó | … Khi có ý nghĩ tự tử, hãy gọi 12356 trước. Xem Mục 1, Điều 25. Khoảng thời gian của ý nghĩ là... |
| Giới thiệu mục | Mục 1, Điều 33 | Không sử dụng 'cứu hộ' như một vỏ bọc an toàn: Sau khi uống thuốc trừ sâu hoặc hít khí, các lần đến cấp cứu cứu sống người, không cứu được phổi và não bộ | … Xem Mục 1, Mục 25; thang thời gian suy nghĩ được tìm thấy trong Mục 1, Mục 32; hậu quả sau khi được cứu... |
| Mục 1 | Mục 6 | Nếu bạn không có gia đình hoặc bạn bè, hãy thay 'người đang theo dõi bạn' bằng ba thứ: hàng xóm có thể vào nhà bạn, danh sách khách tham quan cộng đồng và các liên hệ khẩn cấp trên điện thoại của bạn | … Không ai có thể giao lại hộp thuốc; dạo này bạn định phải ở một mình trong phòng. Xem phần này... |
| Điều 2 | Điều 6 của phần này | Nếu bạn không có gia đình hoặc bạn bè, hãy thay 'người đang theo dõi bạn' bằng ba điều: hàng xóm có thể vào nhà bạn, danh sách khách tham quan cộng đồng và các liên hệ khẩn cấp trên điện thoại của bạn | … Nếu bạn không tìm được ai đi cùng, hãy xem phần này... |
| Điều 4 | Mục 1, Điều 25 | Gọi 12356 khi trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Làm thế nào để xử lý những suy nghĩ tự tử khi bạn có chúng... |
| Điều 5 | Điều 6 của phần này | Nếu bạn không có gia đình hoặc bạn bè, hãy thay 'người đang theo dõi bạn' bằng ba điều: hàng xóm có thể vào nhà bạn, danh sách khách tham quan cộng đồng và các liên hệ khẩn cấp trên điện thoại của bạn | … Nếu bạn không tìm được người như vậy (sống một mình, mất đứa con duy nhất, hoặc mất con), hãy để việc này cho cộng đồng và điện thoại của bạn. Xem phần này... |
| Điều 6 | Điều 13, Điều 1 | Ai đó ngã quỵ và không thở, ngay lập tức ép ngực, có người gọi 120 và tìm máy điện tử (AED) | ...Tại sao việc "có người trong nhà" lại có giá trị? Nhìn này... |
| Điều 6 | Điều 22, Điều 9 | Xem 'gặp gỡ mọi người thường xuyên' như một khoản chi phí y tế; đừng chỉ tìm kiếm sự giúp đỡ khi bạn cảm thấy buồn | … Tỷ lệ tử vong của những người sống một mình cao hơn khoảng 30% so với 1,32, xem... |
| Điều 6 | Điều 11 của mục này | Gọi 12356 nếu bạn muốn ai đó nói chuyện với bạn, gọi 12355, trẻ vị thành niên và thanh thiếu niên gọi 12355, gặp bác sĩ và đăng ký phòng khám tâm lý | … Đây là một trong những tài liệu yêu cầu nhân viên lưới điện và nhân viên xã hội "kịp thời xác định các rủi ro khủng hoảng tâm lý như biến động gia đình, thất nghiệp và bỏ học" (xem phần này... |).
| Điều 6 | Điều 11 của mục này | Nếu bạn muốn ai đó nói chuyện với bạn, gọi 12356; trẻ vị thành niên và thanh thiếu niên gọi 12355; nếu bạn cần gặp bác sĩ hoặc tư vấn sức khỏe tâm thần | … Đường dây nóng có thể được gọi nhiều lần, không chỉ một lần (xem phần này... |).
| Điều 9 | Điều 8 của mục này | Nếu bạn đau buồn nửa năm mà vẫn ở yên và không thể tiếp tục, hãy đăng ký vào khoa tâm thần hoặc tâm lý lâm sàng | … Trước tiên, hãy so sánh... |
| Điều 9 | Điều 4 của phần này | Nếu người thân qua đời do tự tử, tai nạn hoặc giết người, đừng mong đợi phải đối mặt trực tiếp—hãy chủ động tìm kiếm sự giúp đỡ chuyên nghiệp | …… |
| Điều 9 | Điều 8 của phần này | Nếu bạn đau buồn nửa năm mà vẫn ở lại và không thể tiếp tục, hãy đến khoa tâm thần hoặc tâm lý lâm sàng để đăng ký | … Điều 4 (Cái chết của người thân do tự tử, tai nạn hoặc giết người) Tang lễ nguy cơ cao trong các 、... |
| Điều 11 | Mục 1, Điều 25 | Gọi 12356 khi cảm thấy trầm cảm hoặc có ý nghĩ tự tử; không tích trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Thời gian kích hoạt cho 12356 và thời gian trả lời cuộc gọi mỗi ngày sẽ được theo dõi... |
| Điều 12 | Điều 11 của mục này | Gọi 12356 để nói chuyện với ai đó, gọi 12355 cho trẻ vị thành niên và thanh thiếu niên, đi khám bác sĩ và đăng ký phòng khám tâm lý | … Nếu bạn không có người thờ ơ như vậy xung quanh, chỉ cần gọi 12356 và giải thích lại (xem phần này... |).
| Điều 13 | Điều 4 của phần này | Nếu người thân qua đời do tự tử, tai nạn hoặc giết người, đừng mong đợi sẽ dễ dàng — hãy chủ động tìm kiếm sự giúp đỡ chuyên nghiệp | … Họ cũng phải chịu đựng phần này... |
| Điều 13 | Mục 1, Điều 25 | Gọi 12356 khi trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Tôi nên làm gì khi ý nghĩ đó xuất hiện... |
| Điều 13 | Mục 1, Điều 32 | Khi ý nghĩ tự tử xuất hiện, trước tiên hãy nói với ai đó gần đó và giao cho họ vài chục phút này | … Bạn nên làm gì khi ý nghĩ đó xuất hiện... |
| Điều 13 | Mục 1, Điều 33 | Đừng sử dụng 'cứu hộ' như một mạng lưới an toàn: sau khi uống thuốc trừ sâu hoặc hít khí, các lần khám khẩn cấp có thể cứu sống bạn, nhưng không cứu được phổi và não bộ của bạn | … Phải làm gì khi có suy nghĩ xuất hiện xem Mục 1, Điều 25 và 32; hậu quả sau khi được cứu có thể được tìm thấy trong... |
| Điều 13 | Điều 19, Điều 15 | Ba loại tiền cho tử vong liên quan đến công việc cần được phân biệt: trợ cấp tang lễ, lương hưu người thân phụ thuộc, và trợ cấp tử vong liên quan đến công việc một lần | … Tiêu chuẩn cho ba khoản tiền tử vong liên quan đến công việc có thể được tìm thấy trong... |
| Điều 13 | Mục 25, Điều 9 | Tiền phân bổ ở nhiều nơi phải được rút lần lượt: số dư quỹ hưu trí, trợ cấp an sinh xã hội, trợ cấp tai nạn lao động | … Để biết các thủ tục cụ thể liên quan đến thừa kế và nợ, xem... |
| Điều 13 | Điều 4 của phần này | Nếu người thân qua đời do tự tử, tai nạn hoặc ngộ mạng, đừng mong đợi sẽ dễ dàng — hãy chủ động tìm kiếm sự giúp đỡ chuyên nghiệp | … Chi phí y tế của các thành viên trong gia đình có thể được tìm thấy trong phần này... |

## 30 - Trẻ em sau khi bắt đầu đi học

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Bắt đầu | Điều 12 của mục này | Nếu phát hiện thị lực kém, hãy đến bệnh viện để giãn và khúc xạ, sau đó kiểm tra lại định kỳ theo chỉ định của bác sĩ | … Tám bài viết đầu tiên 、... |
| Khởi đầu phần | Điều 13 của phần này | Bịt kín khe hố sau khi răng hàm vĩnh viễn mọc lên | … Tám điều đầu tiên và Điều 12 (khúc xạ giãn đồng tử) 、... |
| Giới thiệu phần | Điều 15 của phần này | Nếu một đứa trẻ nói rằng chúng thích cùng giới, đừng mắng mắng, đừng đuổi chúng đi, đừng gửi chúng đi 'chỉnh sửa': thái độ của gia đình liên quan đến việc liệu chúng có thể tự tử hay không | … Tám bài đầu tiên, 12 (khúc xạ giãn nở), 13 (tắc hố và khe nứt), và... |
| Giới thiệu phần | Điều 16 của phần này | Kiểm soát con bạn để chúng không đánh đập, la hét, hoặc gọi là ngu ngốc: Trẻ thường xuyên bị đánh đập và mắng mỏ có nhiều vấn đề về hành vi và cảm xúc hơn | … Tám điều đầu tiên, Điều 12 (khúc xạ giãn nở), Điều 13 (chất bịt kín hố và khe nứt), và... |
| Bắt đầu | Điều 17 của mục này | Trẻ em khó kiểm soát và không thể không mắng mỏ hoặc đánh chính mình; tham gia lớp học dành cho phụ huynh dạy các phương pháp cụ thể | … Tám điều đầu tiên, Điều 12 (khúc xạ giãn nở), Điều 13 (chất bịt lỗ và vết nứt), và... |
| Giới thiệu phần | Điều 16 của phần này | Kiểm soát con bạn để không đánh đập, la hét, hoặc gọi là ngu ngốc: Trẻ thường bị đánh đập và mắng có nhiều vấn đề về hành vi và cảm xúc hơn | … Trong số đó... |
| Bắt đầu | Điều 17 của mục này | Trẻ em khó kiểm soát và không thể không mắng mỏ hoặc tự đánh mình; tham gia lớp phụ huynh dạy các phương pháp cụ thể | … Trong số đó... |
| Giới thiệu phần | Điều 9 của phần này | Không mua các sản phẩm và dịch vụ tuyên bố 'chữa cận thị' hoặc 'giảm đơn thuốc' | …… |
| Phần bắt đầu | Điều 10 của phần này | Giấc ngủ, bài tập về nhà, thể thao và bảng xếp hạng đều được quy định rõ ràng; các trường không thể tuân thủ có thể nộp đề xuất | …… |
| Phần bắt đầu | Điều 11 của phần này | Nếu một đứa trẻ không thể tiếp tục học, các em có thể nghỉ học, nhưng tình trạng học sinh phải được trường giữ lại, tối đa 1 năm | … Điều 10 (Quy định rõ ràng về xếp hạng phân bổ giấc ngủ trong thể thao) 、... |
| Giới thiệu phần | Điều 14 của phần này | Nếu con bạn thích chơi game, trước tiên hãy kiểm tra xem giấc ngủ, bài tập về nhà và các buổi ra ngoài có đông người không. Đừng chỉ tập trung vào thời gian chơi của trẻ | … Điều 10 (Quy định rõ ràng về xếp hạng thể thao phân công giấc ngủ), Điều 11 (Giữ lại tình trạng sinh viên khi nghỉ phép), và... |
| Điều 2 | Điều 7 của mục này | Bạn phải tự xem xét báo cáo kiểm tra sức khỏe sinh viên của sinh viên đó mỗi năm; bất kỳ bất thường nào phải được đưa đến bệnh viện để kiểm tra trong năm đó | … Wan đưa ra ví dụ vì nó có bài kiểm tra xổ số và phân nhóm, có khoảng thời gian rõ ràng, và là một trong những mục quan trọng trong các bài kiểm tra sức khỏe học sinh (xem... |).
| Điều 2 | Điều 11 của mục này | Nếu một đứa trẻ không thể chịu đựng được nữa, các em có thể nghỉ học, nhưng trường phải giữ tình trạng học sinh tối đa 1 năm | … Để tránh nghỉ học, bạn có thể nghỉ phép trong thời gian học bắt buộc lên đến một năm, và tình trạng sinh viên của bạn sẽ được giữ nguyên. Xem thêm... |
| Điều 5 | Mục 4 | Cho phép trẻ em ở ngoài trời ít nhất 2 giờ mỗi ngày hiện là phương pháp duy nhất được hỗ trợ bởi các thử nghiệm ngẫu nhiên để ngăn ngừa cận thị | … Sự hỗ trợ thực sự cho thí nghiệm xổ số là... |
| Điều 5 | Điều 12 của mục này | Nếu phát hiện thị lực kém, hãy đến bệnh viện để đo khúc xạ giãn nở và kiểm tra phản kháng, sau đó theo dõi theo các khoảng thời gian do bác sĩ chỉ định | … Nó quy định rằng nên thực hiện sàng lọc khúc xạ định kỳ sau 1~3, 4~6 và 7 tuổi để xem còn bao nhiêu dự trữ viễn thị. Để biết các phương pháp, xem... |
| Điều 6 | Mục 4 | Giữ trẻ em ở ngoài trời ít nhất 2 giờ mỗi ngày hiện là phương pháp duy nhất được hỗ trợ bởi các thử nghiệm ngẫu nhiên để ngăn ngừa cận thị | … Bạn không cần phải tự làm gì cả; điều bạn cần làm là... |
| Điều 6 | Điều 5 của phần này | Trẻ em từ 0 đến 3 tuổi không được sử dụng màn hình; trẻ từ 3 đến 6 tuổi nên tránh sử dụng màn hình càng nhiều càng tốt; học sinh tiểu học và trung học không được vượt quá 1 giờ mỗi ngày cho mục đích không học tập | … Bạn không cần phải làm gì cả, nhưng điều bạn cần làm là... |
| Điều 6 | Điều 12 của mục này | Nếu phát hiện thị lực kém, hãy đến bệnh viện để đo khúc xạ mắt giãn tử, sau đó theo dõi theo các khoảng thời gian do bác sĩ chỉ định | … Làm thế nào để được khám lại sau khi được chẩn đoán... |
| Điều 6 | Điều 9 của mục này | Không mua các sản phẩm hoặc dịch vụ tuyên bố "chữa cận thị" hoặc "giảm đơn thuốc" | … Đừng mua các sản phẩm tuyên bố có khả năng chữa bệnh, xem... |
| Điều 7 | Mục 12 | Nếu phát hiện thị lực kém, hãy đến bệnh viện để đo khúc xạ mắt giãn rộng, sau đó khám lại theo các khoảng thời gian do bác sĩ chỉ định | … Nếu bạn có thị lực kém, bạn cần đến bác sĩ nhãn khoa để kiểm tra khúc xạ mắt giãn (... |
| Điều 7 | Điều 2 của phần này | Đừng hoãn điều trị chỉ để "chờ kết thúc khám"; một số thời điểm theo tuổi xương, không theo lịch khám | … Nếu bạn có độ cong cột sống bất thường, bạn nên đến bác sĩ chỉnh hình hoặc phẫu thuật cột sống (... |
| Điều 8 | Mục 1, Điều 25 | Gọi 12356 khi bạn trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Để xử lý ý nghĩ tự tử, xem... |
| Điều 9 | Điều 4 của phần này | Cho phép trẻ em ở ngoài trời ít nhất 2 giờ mỗi ngày hiện là phương pháp duy nhất được hỗ trợ thử nghiệm ngẫu nhiên để phòng ngừa cận thị | … Có hai vấn đề thực sự được chứng minh... |
| Điều 9 | Điều 12 của mục này | Nếu phát hiện thị lực kém, hãy đến bệnh viện để thực hiện giãn khúc xạ và kiểm tra repertometry, sau đó theo dõi định kỳ theo chỉ định của bác sĩ | … Có hai điều thực sự được chứng minh trong Điều 4 (Ngoài trời) và...
| Điều 12 | Điều 7 của mục này | Bạn phải xem xét báo cáo kiểm tra sức khỏe sinh viên cho mỗi năm, và mang bất kỳ bất thường nào đến bệnh viện để kiểm tra trong năm đó | … Tình trạng 'thị lực kém' được phát hiện trong khám lâm sàng của sinh viên chỉ là kết quả của lần sàng lọc ban đầu; họ vẫn cần được đưa đến bệnh viện để khám mắt toàn diện, xem thêm... |
| Điều 13 | Điều 7 của phần này | Bạn phải tự xem báo cáo kiểm tra sức khỏe sinh viên từ cuộc kiểm tra sức khỏe hàng năm, và bất kỳ bất thường nào nên được đưa đến bệnh viện để kiểm tra trong năm đó | … Sâu răng cũng là yếu tố then chốt trong khám sức khỏe của sinh viên, xem... |
| Điều 14 | Mục 5, Điều 9 | Khi trẻ em sử dụng điện thoại di động để nạp tiền và cung cấp tiền tip, các khoản chi lớn trên tám tuổi sẽ được yêu cầu hoàn trả mà không cần sự đồng ý của cha mẹ | … Chi tiết nạp tiền và hoàn tiền có thể được tìm thấy tại... |
| Điều 14 | Điều 10 của phần này | Giấc ngủ, bài tập về nhà, giáo dục thể chất và xếp hạng đều được quy định rõ ràng; nếu trường không thể tuân thủ, có thể nộp | … Yêu cầu rõ ràng về giấc ngủ có thể được tìm thấy trong phần này... |
| Điều 14 | Mục 4 | Cho phép trẻ em ở ngoài trời ít nhất 2 giờ mỗi ngày hiện là phương pháp duy nhất được hỗ trợ bởi các thử nghiệm ngẫu nhiên để ngăn ngừa cận thị | … Các yêu cầu rõ ràng về giấc ngủ được nêu trong Điều 10 của phần này (giấc ngủ, bài tập về nhà, thể thao). Đối với các hoạt động ngoài trời, xem phần này... |
| Điều 14 | Điều 5 của mục này | Trẻ em từ 0 đến 3 tuổi không được sử dụng màn hình; trẻ từ 3 đến 6 tuổi nên tránh sử dụng màn hình càng nhiều càng tốt; học sinh tiểu học và trung học không nên vượt quá 1 giờ mỗi ngày cho mục đích phi học thuật | … 10 mục (ngủ, bài tập, thể thao), hoạt động ngoài trời nằm trong phần này. Điều 4 (2 giờ ngoài trời mỗi ngày) về thời gian sử dụng màn hình nằm trong phần này... |
| Điều 15 | Mục 1, Điều 25 | Gọi 12356 khi trầm cảm hoặc có ý nghĩ tự tử; không dự trữ thuốc ngủ hoặc thuốc trừ sâu tại nhà | … Nếu trẻ cảm thấy buồn và nói rằng không muốn sống nữa, hãy gọi 12356 trước để kiểm tra... |
| Điều 15 | Mục 6, Điều 28 | Không chi tiền cho "điều chỉnh xu hướng tính dục" hoặc "liệu pháp đồng tính", và không gửi người thân đến bệnh viện | ...Tại sao không chạm vào "điều chỉnh"? Xem này... |
| Điều 15 | Điều 8 của mục này | Trẻ em từ 12 đến 18 tuổi nên trải qua sàng lọc trầm cảm; không sử dụng đánh giá tâm lý học đường làm chẩn đoán | … Bạn cũng có thể theo dõi phần này... |
| Điều 16 | Điều 17 của phần này | Nếu con bạn khó kiểm soát và không thể không tự đánh hoặc tự trách mình, hãy đến lớp phụ huynh dạy các phương pháp cụ thể | … Để biết phương pháp quản lý phù hợp, xem phần này... |
| Điều 16 | Điều 8, Điều 43 | Nạn nhân của bạo lực gia đình: trước tiên báo cáo với cảnh sát để lưu giữ hồ sơ cảnh sát, sau đó nộp đơn xin lệnh bảo vệ an toàn cá nhân tại tòa. Không cần ly hôn trước, không mất phí | … Nếu ai đó ở nhà đánh con bạn, hãy báo cảnh sát và xin lệnh bảo vệ... |
| 第 17 条 | 本节第 8 条 | 12 到 18 岁的孩子做一次抑郁筛查，别拿学校的心理测评当诊断 | …孩子已经有严重的情绪问题，带去精神科或儿童心理科，见本节… |

## 31-十八岁之后有哪几条路

| 出处 | 引用 | 指向的条目 | 引用处的上下文 |
| --- | --- | --- | --- |
| 第 1 条 | 本节第 11 条 | 不进单位就是灵活就业：养老和医疗要自己在就业地参保，户籍限制已经放开 | …平台接单和灵活就业没有法定学历门槛，自己参保和职业伤害保障的依据见本节… |
| 第 1 条 | 本节第 12 条 | 送外卖、跑网约车、拉同城货运，平台按单给你交职业伤害保障费，自己不缴 | …平台接单和灵活就业没有法定学历门槛，自己参保和职业伤害保障的依据见本节… |
| 第 1 条 | 第 23 节第 5 条 | 没考上普高不等于路断了：中职有贯通招生和单独考试，技能岗位招聘还可以降学历要求 | …中职、技工院校和职教贯通招生的入口见… |
| 第 1 条 | 第 23 节第 4 条 | 「读不起」先按政策算一遍：中职学费大多已免，助学金 2300 元，助学贷款每年最高 2 万 | …中职、技工院校和职教贯通招生的入口见第 23 节第 5 条，家里供不起时的资助见… |
| 第 1 条 | 本节第 16 条 | 不进单位自己干，起步钱先看创业担保贷款：个人最高 30 万、财政贴一半利息 | …起步钱能不能借到国家替你出一部分利息的贷款，见本节… |
| 第 1 条 | 本节第 13 条 | 高考填志愿那天就能锁定编制的两条路：公费师范生和定向医学生，代价是 6 年履约 | …公费师范生和定向医学生这两条，在高考填志愿那天就定下了，代价写在… |
| 第 1 条 | 本节第 14 条 | 想出国打工，先查这家公司有没有对外劳务合作经营资格：它不得向你收押金 | …出国打工的门槛不在你身上，在公司有没有资质上，怎么认见… |
| 第 2 条 | 本节第 3 条 | 应征之后拒服兵役，两年内不准出境或升学复学，还进不了公务员和国企 | …两年内不准出境那一串惩戒，只罚应征之后反悔的人，见… |
| 第 3 条 | 本节第 2 条 | 十八岁那年 10 月 31 日前要做兵役登记；义务兵服现役就是两年 | …光是没做兵役登记的不在里面，兵役登记见… |
| 第 10 条 | 第 23 节第 8 条 | 花钱考证之前，先查这张证在不在国家职业资格目录或人社部备案的评价机构名单里 | …花钱买的「快速拿证」和山寨证书见… |
| 第 11 条 | 第 7 节第 18 条 | 社保断缴不要慌：养老按累计算，医保按规则补 | …社保断缴之后怎么补、年限怎么累计，见… |
| 第 12 条 | 本节第 11 条 | 不进单位就是灵活就业：养老和医疗要自己在就业地参保，户籍限制已经放开 | …这份文件的文号是人社部发〔2021〕56 号，灵活就业那条也引了它，见… |
| 第 12 条 | 本节第 11 条 | 不进单位就是灵活就业：养老和医疗要自己在就业地参保，户籍限制已经放开 | …医保和养老那一块还得自己参保，灵活就业参保见… |
| 第 14 条 | 第 21 节第 5 条 | 「境外高薪招聘」一律当诈骗看，被骗去做电诈回来还要被限制出境 | …境外高薪招聘骗局和电诈园区见… |
| 第 15 条 | 本节第 14 条 | 想出国打工，先查这家公司有没有对外劳务合作经营资格：它不得向你收押金 | …真的出境到境外给境外雇主干活是另一套，见本节… |
| 第 16 条 | 第 12 节第 1 条 | 只拿亏得起的钱创业，不动家底、不借钱开张 | …本书在… |
| 第 16 条 | 第 7 节第 13 条 | 失业期间去领职业培训补贴、就业见习补贴和社保补贴，别自费上培训班 | …失业期间的培训补贴、社保补贴和就业见习，见… |

## 33-残疾之后怎么活

| 出处 | 引用 | 指向的条目 | 引用处的上下文 |
| --- | --- | --- | --- |
| 节首 | 第 24 节第 10 条 | 治完之后确实留下功能障碍，去户籍地县级残联申请残疾人证 | …残疾人证怎么办、七个类别和一到四级怎么评，见… |
| 节首 | 第 24 节第 9 条 | 伤残鉴定要等治疗终结之后再做，做早了等级会评低 | …伤残鉴定要等到什么时候做，见… |
| 节首 | 第 7 节第 8 条 | 持残疾人证的去申请残疾人两项补贴 | …残疾人两项补贴怎么领，见… |
| 节首 | 第 19 节第 14 条 | 伤情稳定后去做劳动能力鉴定，伤残等级直接换算成钱 | …工伤的劳动能力鉴定和伤残等级换算成多少钱，见… |
| 节首 | 第 17 节第 7 条 | 家里老人长期卧床或重度失能，去参保地医保部门申请长期护理保险；它不是只发给老人 | …重度失能的长期护理保险怎么申请，见… |
| 第 2 条 | 第 29 节第 11 条 | 要人陪着说话打 12356，未成年人和青少年打 12355，要看医生挂心理门诊 | …要人陪着说话打 12356，见… |
| 第 2 条 | 第 1 节第 25 条 | 抑郁或有自杀念头时打 12356，家里不囤安眠药和农药 | …家里别囤安眠药和农药，见… |
| 第 2 条 | 第 29 节第 8 条 | 哀伤过了半年还在原地、日子过不下去，去精神科或临床心理科挂号 | …哀伤和情绪卡住半年还在原地，去精神科或临床心理科挂号，见… |
| 第 4 条 | 第 16 节第 1 条 | 药按医嘱吃满，别感觉好了就停 | …照护者自己的慢性病别停药，见… |

| Điều 5 | Mục 17, Điều 8 | Nếu ai đó phải nằm liệt giường lâu dài, coi loét do tỳ đè như kẻ thù số một: hãy lên nệm hơi điện, lật người thường xuyên và kiểm tra vùng xương nhô ra mỗi ngày | … Để biết nghỉ ngơi dài hạn, bảo vệ loét do áp lực, giường nệm hơi và thời gian xoay người theo lịch, xem... |
| Điều 5 | Điều 7 của mục này | Sau khi nhận được giấy chứng nhận khuyết tật, hãy đến Liên đoàn Người khuyết tật cấp huyện để yêu cầu tất cả các vật dụng cần thiết cùng lúc | … Cách đăng ký trợ cấp cấu hình cho các thiết bị hỗ trợ cơ bản, xem phần này... |
| Điều 6 | Mục 6, Điều 10 | Không chi nhiều tiền cho các thực phẩm bổ sung sức khỏe, kem dưỡng hoặc thuốc bổ để "điều hòa cơ thể" | … Quảng cáo bán thực phẩm bổ sung sức khỏe cũng theo logic tương tự, xem ... |
| Điều 6 | Mục 5, Điều 29 | Mua sắm trực tuyến công nhận các quy tắc và luật của nền tảng, nhưng không công nhận chủ nhà hoặc 'đánh giá tích cực' | … Nếu bạn đã mua và muốn hoàn tiền, hãy làm theo các phương thức mua sắm trực tuyến và thanh toán trả trước, xem... |
| Điều 7 | Mục 7, Điều 8 | Những người có giấy chứng nhận khuyết tật có thể nộp đơn xin hai loại trợ cấp khuyết tật | … Thứ nhất, trợ cấp sinh hoạt cho người khuyết tật gặp khó khăn và trợ cấp điều dưỡng cho người khuyết tật nặng, xem... |
| Điều 7 | Điều 8 của phần này | Trẻ em dưới 7 tuổi cũng có khuyết tật hoặc tự kỷ có thể nộp đơn xin hỗ trợ phục hồi chức năng tại Liên đoàn Người khuyết tật cấp quận | … Thứ hai, hỗ trợ phục hồi chức năng cho trẻ em khuyết tật, xem phần này... |
| Điều 7 | Điều 9 của mục này | Việc cải tạo dốc, tay vịn và nhà vệ sinh có thể được xin trợ cấp từ chính quyền cấp huyện hoặc cao hơn | … Thứ tư, trợ cấp cho việc cải tạo cơ sở nhà ở không rào cản, xem phần này... |
| Điều 7 | Điều 10 của mục này | Chủ động khai báo chứng chỉ của bạn khi tìm việc; các công ty tuyển dụng bạn có thể bù đắp một khoản tiền | … Thứ năm, việc làm tỷ lệ và dịch vụ việc làm, xem phần này... |
| Điều 7 | Điều 11 của mục này | Thuế thu nhập cá nhân cho người khuyết tật có thể được giảm; giảm bao nhiêu? Gọi cho cơ quan thuế tỉnh | … Thứ sáu, giảm thuế thu nhập cá nhân, xem phần này... |
| Điều 7 | Mục 24, Điều 10 | Nếu sau điều trị vẫn còn suy giảm chức năng, hãy nộp đơn xin giấy chứng nhận khuyết tật tại Liên đoàn Người khuyết tật cấp quận nơi bạn đăng ký | … Quy trình cấp chứng chỉ có thể được tìm thấy tại ... |
| Điều 8 | Điều 6 của mục này | Không mua các liệu pháp hoặc thiết bị có thể chữa liệt, mù lòa hoặc điếc | … Các tổ chức cam kết "đảm bảo tốt" nên tuân theo phần này... |
| Điều 10 | Mục 7, Điều 12 | Sau khi đăng ký thất nghiệp, cố gắng được công nhận là người gặp khó khăn trong việc làm, và nhận trợ cấp an sinh xã hội hoặc các vị trí phúc lợi công cộng | … Để xác định khó khăn trong việc làm và trợ cấp an sinh xã hội, xem... |
| Điều 10 | Mục 7, Điều 13 | Trong thời gian thất nghiệp, hãy nộp đơn xin trợ cấp đào tạo nghề, trợ cấp thực tập việc làm và trợ cấp an sinh xã hội; không tự chi trả chi phí cho các lớp đào tạo | … Trợ cấp đào tạo nghề có thể được tìm thấy ở... |
| Điều 13 | Điều 14 của mục này | Các trường học không được từ chối nhập học cho trẻ khuyết tật khi nộp đơn; Nếu không thể tham gia, cục giáo dục sẽ sắp xếp sinh tại nhà | … Trong giai đoạn tuyển sinh, trường không được từ chối bất kỳ nội dung nào trong số này. Xem phần này... |
| Điều 14 | Điều 30, Điều 3 | Nếu một đứa trẻ bị bắt nạt, hãy báo cáo với trường trong ngày và yêu cầu hành động bằng văn bản; nếu liên quan đến hành hung, cướp bóc hoặc tung tin đồn, hãy báo trực tiếp cho cảnh sát | … Làm thế nào để lại bằng chứng về việc bắt nạt tại trường, và các quy trình mà trường phải tuân theo? Xem |
| Điều 14 | Điều 13 của mục này | Người khuyết tật có thể xin hỗ trợ hợp lý để tham gia kỳ thi tuyển sinh đại học, với thời gian thi cộng thêm một nửa so với kỳ thi Braille | … Sự tiện lợi hợp lý cho kỳ thi tuyển sinh đại học có thể được tìm thấy trong phần này... |
| Điều 16 | Mục 24, Điều 1 | Các bệnh thông thường được điều trị trước tiên trong cộng đồng, sau đó chuyển từng bước qua cấp cơ sở, và khoản khấu trừ nhập viện được tính toán | … Làm thế nào để chuyển đổi giữa bệnh viện chính và bệnh viện cấp ba, và khoản khấu trừ được tính như thế nào? Xem... |
| Điều 16 | Điều 7 của mục này | Sau khi nhận được giấy chứng nhận khuyết tật, hãy đến Liên đoàn Người khuyết tật cấp huyện và yêu cầu tất cả các vật dụng có sẵn cùng lúc | … Cấu hình phục hồi chức năng cộng đồng và thiết bị hỗ trợ có thể được tìm thấy trong phần này... |
| Điều 17 | Điều 13 của mục này | Người khuyết tật có thể xin các hỗ trợ hợp lý để tham gia kỳ thi tuyển sinh đại học, với thời gian thi Braille được giảm một nửa | … Thí sinh khiếm thính có thể được miễn nghe ngoại ngữ trong kỳ thi tuyển sinh đại học, xem phần này... |
| Điều 17 | Điều 15 của mục này | Ngay cả khi bạn mất phải hoặc cả hai chi dưới, bạn vẫn có thể lấy bằng lái xe. Phương tiện được phép là C5 | … Người khiếm thính nên đeo máy trợ thính khi lái xe. Xem phần này... |
| Điều 18 | Điều 19 của mục này | Người giám hộ của người trưởng thành sẽ được xác định theo quy định pháp luật; Nếu người giám hộ gây thương tích cho người khác, người giám hộ sẽ bồi thường | … Cách xác định người giám hộ có thể được tìm thấy trong phần này... |
| Điều 19 | Mục 17, Khoản 1 | Khi người cao tuổi còn tỉnh táo, một chỉ định bằng văn bản về người giám hộ tương lai | … Tận dụng tình hình khi mọi người tỉnh táo để hoàn thiện ứng viên bằng văn bản có thể tránh được phần lớn tranh chấp sau này. Để biết chi tiết, xem... |
| Điều 20 | Mục 19, Điều 8 | Trước khi từ chức, hãy lưu lại phiếu lương, điểm danh, hợp đồng lao động, hồ sơ bảo hiểm xã hội và nhật ký trò chuyện | … Đối với những người đã có việc làm, tranh chấp lao động sẽ được giải quyết thông qua trọng tài. Để biết về lưu giữ bằng chứng và thời hiệu khởi kiện, xem... |

## 34 - Đừng lo lắng về việc uống thuốc gia đình

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Mục 13 Điều 20 | Không gây nôn ngay nếu bạn vô tình uống phải chất tẩy rửa, thuốc trừ sâu hoặc thuốc; mang theo bình và đi khám bác sĩ ngay lập tức; Nếu nước bắn lên mắt hoặc da, hãy rửa sạch với nhiều nước ít nhất 15 phút | … Phải làm gì đầu tiên nếu bạn vô tình uống thuốc hoặc chất tẩy rửa? Xem ... |
| Mục 16, Điều 1 | Uống đầy đủ thuốc theo chỉ định, đừng ngừng chỉ vì cảm thấy khá hơn | … Đối với các bệnh mãn tính, hãy dùng đầy đủ thuốc theo chỉ định, xem... |
| Mục 1 | Mục 28, Điều 6 | Nếu bạn muốn uống thuốc giảm cân, hãy đến bệnh viện để lấy đơn thuốc; đừng mua từ các cửa hàng trực tuyến giao hàng không có đơn | … Để mua thuốc theo đơn trực tuyến, trước tiên bạn phải vượt qua bài kiểm tra kê đơn, xem... |
| Điều 2 | Điều 20, Điều 8 | Nếu trẻ dưới 3 tháng tuổi có nhiệt độ 38°C, hãy đến bệnh viện ngay mà không cần theo dõi tại nhà | … Nếu trẻ dưới 3 tháng tuổi bị sốt, hãy đến bệnh viện ngay để kiểm tra... |
| Điều 4 | Điều 20, Điều 6 | Không cho trẻ dưới 1 tuổi uống mật ong | … Trong bài tổng quan đó, có một thử nghiệm cho thấy mật ong tốt hơn giả dược, nhưng mật ong không nên cho trẻ dưới 1 tuổi, xem... |
| Điều 4 | Điều 1 của mục này | Trước khi dùng hai loại thuốc cảm hoặc thuốc giảm đau cùng lúc, hãy kiểm tra danh sách thành phần. Acetaminophen chỉ có thể dùng cho một loại duy nhất | … Nhiều trong số 14 loại này có chữ 'aminophenol' trong tên và cũng chứa acetaminophen. Nếu bạn dùng chúng cùng với thuốc trị sốt, nó sẽ lặp lại, xem phần này... |
| Điều 5 | Mục 27, Điều 5 | Đối với những người có yếu tố nguy cơ cao đối với tiền sản giật, hãy bắt đầu dùng viên aspirin liều thấp hàng ngày sau 12 tuần thai kỳ | … Aspirin liều thấp ngăn ngừa tiền sản giật, xem... |
| Điều 10 | Mục 13, Điều 20 | Không gây nôn mửa bằng cách vô tình nuốt phải chất tẩy rửa, thuốc trừ sâu hoặc thuốc; mang theo bình và đi khám bác sĩ ngay lập tức; Nếu văng lên mắt hoặc da, hãy rửa kỹ với nhiều nước trong ít nhất 15 phút | … Đặt phần thuốc còn lại vào hộp ban đầu, không đổ vào hộp thuốc hoặc các lọ khác, và để ngoài tầm với của trẻ. Xem... |
| Điều 10 | Điều 7 của mục này | Không nên tìm đến bác sĩ kháng sinh cho cảm lạnh thông thường | … Cũng đừng dùng kháng sinh thừa tại nhà; xem phần này... |
| Điều 11 | Mục 1 | Trước khi dùng hai loại thuốc cảm lạnh hoặc thuốc giảm đau cùng lúc, hãy kiểm tra danh sách thành phần. Acetaminophen chỉ có thể dùng trong một loại | … Không uống rượu khi đang dùng acetaminophen, xem phần này... |

## tài liệu/Cần những chứng chỉ nào để vận hành một nền tảng?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Điều 5 | Khi người dùng đến bán sản phẩm, nền tảng phải xác minh đăng ký, gửi thông tin và lưu giữ trong vòng ba năm | …… |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Điều 6 | Bạn phải quản lý nội dung do người dùng đăng: cơ chế xem xét, cổng báo cáo, dừng ngay lập tức và báo cáo vi phạm | …… |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Khoản 7 | Để cung cấp dịch vụ xuất bản thông tin và nhắn tin tức thời, người dùng phải cung cấp thông tin danh tính thực | …… |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Điều 8 | Không phát trực tiếp cho người dưới 16 tuổi; tiền tip được phân cấp theo độ tuổi | …… |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Điều 9 | Khi nhận được thông báo vi phạm, hãy xử lý ngay lập tức; nếu không có phản hồi trong vòng 15 ngày kể từ khi chuyển tiếp thông báo, hãy khôi phục | …… |
| 3. Chọn máy chủ: Cách chọn ba cấp độ | Mục 26, Khoản 10 | Không được tùy tiện đưa thông tin người dùng ra nước ngoài; có các điều kiện pháp lý và số lượng tối thiểu để xuất cảnh khỏi quốc gia | …… |

## bác sĩ/Sau khi chẩn đoán bệnh mãn tính

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Tuần chẩn đoán | Mục 29, Điều 2 | Tuần mà bạn được thông báo về bệnh nghiêm trọng, đừng đi một mình để lấy báo cáo; hoãn các quyết định khác ngoài điều trị | … Xem này... |
| Tuần chẩn đoán | Mục 16, Điều 1 | Uống đầy đủ thuốc theo chỉ định, đừng ngừng chỉ vì cảm thấy khá hơn | … Xem này... |
| Tuần sau khi được chẩn đoán | Mục 2, Điều 12 | Nếu bạn bị tăng huyết áp hoặc cholesterol cao, hãy dùng thuốc theo chỉ định và không nên tự ý ngừng thuốc | … Xem này... |
| Tuần chẩn đoán | Mục 1, Điều 7 | Đo huyết áp; nếu huyết áp cao, dùng thuốc để hạ xuống mức mục tiêu | … Xem này... |
| Tuần chẩn đoán | Mục 5, Điều 12 | Ưu tiên dành cho các thuốc generic đã vượt qua đánh giá tính nhất quán và các thuốc được lựa chọn thông qua thu mua tập trung | … Xem này... |
| Tuần sau khi được chẩn đoán | Mục 16, Điều 7 | Nếu được chẩn đoán tiểu đường, hãy kiểm tra đáy mắt, sau đó kiểm tra theo các khoảng thời gian do bác sĩ chỉ định; Khám chân mỗi năm một lần | … Xem này... |
| Tuần sau khi được chẩn đoán | Mục 16, Điều 9 | Sau khi được chẩn đoán mắc gout, bệnh nhân đã dùng thuốc giảm axit uric lâu dài để ức chế axit uric trong máu dưới 360 μmol/L và duy trì liên tục | … Xem này... |
| Tuần sau khi được chẩn đoán | Mục 16, Điều 9 | Sau khi được chẩn đoán mắc gout, bệnh nhân đã dùng thuốc giảm axit uric lâu dài để ức chế axit uric trong máu dưới 360 μmol/L và duy trì liên tục | … Xem này... |
| Tuần chẩn đoán | Mục 6, Điều 19 | Đừng bắt đầu dùng thuốc giảm axit uric chỉ vì khám sức khỏe cho thấy axit uric cao nhưng chưa từng bị đau | … Xem này... |
| Tuần sau khi được chẩn đoán | Mục 2, Điều 4 | Đặt ngày cai thuốc và ngừng hút thuốc ngay lập tức trong ngày đó; đừng chỉ bắt đầu bằng cách giảm dần | … Xem... |
| Tuần chẩn đoán | Mục 2, Điều 3 | Đừng chỉ dựa vào sức bền để bỏ thuốc lá—hãy đi lấy thuốc trước: tỷ lệ thành công của bạn có thể tăng gấp đôi | … Xem này... |
| Ba tháng đầu tiên | Mục 16, Khoản 3 | Các lần kiểm tra tái khám được thực hiện theo khoảng thời gian do bác sĩ chỉ định, và mỗi lần đều ghi dấu các ngón tay trong cùng một cuốn sổ tay | … Xem này... |
| Ba tháng đầu tiên | Mục 24, Khoản 5 | Sau mỗi lần khám, hãy giữ một bản sao hồ sơ y tế, báo cáo xét nghiệm và hình ảnh của bạn | … Xem này... |
| Ba tháng đầu tiên | Mục 16, Điều 2 | Trước tiên, nộp đơn xin chứng nhận ngoại trú cho bệnh mãn tính và bệnh đặc biệt, sau đó nộp hồ sơ liên vùng; tăng huyết áp, tiểu đường, xạ trị và hóa trị, chạy thận và chống thải bỏ có thể được giải quyết trực tiếp tại một địa điểm khác | … Xem này... |
| Ba tháng đầu tiên | Mục 5, Điều 13 | Bằng cách đăng ký hỗ trợ lẫn nhau gia đình trên ứng dụng bảo hiểm y tế, số tiền từ tài khoản bảo hiểm y tế cá nhân của nhân viên có thể được sử dụng để chi trả cho điều trị y tế và thuốc men cho vợ/chồng, cha mẹ và con cái | … Xem này... |
| Ba tháng đầu tiên | Mục 16, Điều 6 | Trước khi ký hợp đồng với bác sĩ gia đình trong cộng đồng, hãy hỏi rõ những gì được bảo hiểm y tế chi trả và những gì tự chi trả | … Xem này... |
| Ba tháng đầu tiên | Mục 2, Khoản 9 | Thay thế muối tại nhà bằng muối ít natri (kali) | … Xem này... |
| Tam cá nguyệt đầu tiên| Mục 2, Mục 11 | Đi bộ 7.000–8.000 bước mỗi ngày, hoặc tích lũy 150–300 phút đi bộ nhanh mỗi tuần | … Xem này... |
| Tam cá nguyệt đầu tiên | Mục 2, Điều 19 | Uống ít hoặc không uống rượu | … Xem này... |
| Ba tháng đầu tiên | Mục 2, Điều 20 | Nếu bạn uống rượu mỗi ngày và cảm thấy lo lắng mỗi lần dừng lại, đừng bỏ thuốc quá mạnh | … Xem này... |
| Ba tháng đầu tiên | Mục 16, Điều 4 | Đừng ngừng điều trị chính thức chỉ để thử các phương pháp tại nhà hoặc thực phẩm bổ sung sức khỏe | … Xem này... |
| Ba tháng đầu tiên | Mục 6, Điều 10 | Đừng chi quá nhiều tiền cho các loại thực phẩm bổ sung, kem dưỡng hoặc thuốc bổ để 'điều hòa cơ thể' | … Xem này... |
| Ba tháng đầu tiên | Mục 16, Điều 9 | Sau khi được chẩn đoán gout, việc sử dụng thuốc giảm axit uric lâu dài đã được sử dụng để ức chế axit uric trong máu dưới 360 μmol/L và duy trì ổn định | … Xem này... |
| Ba tháng đầu tiên | Mục 34, Mục 1 | Trước khi dùng hai loại thuốc cảm lạnh hoặc thuốc giảm đau cùng lúc, hãy kiểm tra danh sách thành phần; acetaminophen chỉ có thể dùng trong một loại | … Xem này... |
| Ba tháng đầu tiên | Mục 34, Khoản 3 | Người trên 60 tuổi, từng bị chảy máu dạ dày hoặc đang dùng thuốc chống đông hoặc hormone, nên tham khảo ý kiến bác sĩ trước khi dùng thuốc giảm đau như ibuprofen | … Xem này... |
| Sau khi tình trạng ổn định | Mục 16, Điều 5 | Đối với các bệnh mãn tính có tình trạng ổn định, có thể kê đơn đơn thuốc duy nhất lên đến 12 tuần tại bệnh viện cộng đồng | … Xem này... |
| Sau khi tình trạng ổn định | Mục 16, Điều 3 | Các lần khám tiếp theo nên được thực hiện theo khoảng thời gian do bác sĩ chỉ định, và mỗi lần các ngón tay được ghi lại trong cùng một sổ tay | … Xem này... |
| Sau khi tình trạng ổn định | Mục 5, Điều 12 | Ưu tiên được dành cho các thuốc generic đã vượt qua đánh giá tính nhất quán và các thuốc được lựa chọn thông qua thu mua tập trung | … Xem này... |
| Sau khi tình trạng ổn định | Mục 16, Điều 7 | Nếu được chẩn đoán tiểu đường, hãy kiểm tra đáy mắt, sau đó kiểm tra định kỳ theo chỉ định của bác sĩ; Kiểm tra bàn chân mỗi năm một lần | … Xem này... |
| Sau khi tình trạng ổn định | Mục 16, Điều 9 | Sau khi được chẩn đoán gout, thuốc giảm axit uric lâu dài được dùng để ức chế nồng độ axit uric trong máu dưới 360 μmol/L và duy trì liên tục | … Xem này... |
| Sau khi tình trạng ổn định | Mục 16, Điều 8 | Nếu bạn bị sỏi thận, hãy uống 2,5–3 lít nước mỗi ngày và giảm lượng muối xuống dưới 6 gram | … Xem này... |
| Sau khi tình trạng ổn định | Mục 1, Điều 20 | Người mắc bệnh tim mạch và người cao tuổi nên tiêm vắc-xin cúm hàng năm | … Xem này... |
| Sau khi tình trạng ổn định | Mục 24, Điều 1 | Các bệnh thông thường được điều trị trước tiên trong cộng đồng, sau đó chuyển từng bước qua cấp cơ sở, và mức khấu trừ nhập viện được tính lại | … Xem này... |
| Sau khi tình trạng ổn định | Mục 24, Điều 2 | Trong cùng khu vực chung (nơi bảo hiểm y tế được bảo hiểm), mức càng thấp thì tỷ lệ hoàn trả càng cao, với sự chênh lệch khoảng 10 điểm phần trăm | … Xem này... |
| Sau khi tình trạng ổn định | Mục 24, Điều 3 | Hãy đến bệnh viện lớn, qua trung tâm giới thiệu từ cơ sở hoặc bệnh viện, đừng đến những kẻ buôn người | … Xem này... |
| Sau khi tình trạng ổn định | Mục 24, Điều 4 | Trước khi tìm kiếm điều trị y tế giữa các tỉnh, hãy hỏi địa phương; về nguyên tắc, mức độ cần thiết nên được đánh giá bởi bác sĩ trưởng liên kết hoặc cấp trên | … Xem này... |

## Tài liệu/Những việc nên làm trước và sau khi sinh con

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| 1. Khi chuẩn bị cho thai kỳ | Mục 27, Điều 1 | Bắt đầu chuẩn bị thụ thai bằng cách dùng 0,4 mg axit folic mỗi ngày cho đến 3 tháng đầu của thai kỳ | … Xem này... |
| 1. Khi chuẩn bị mang thai | Mục 27, Điều 11 | Xác nhận đăng ký bảo hiểm thai sản trước khi mang thai; vợ/chồng thất nghiệp cũng có thể yêu cầu chi phí y tế thai sản | … Xem này... |
| 1. Khi chuẩn bị cho thai kỳ | Mục 2, Điều 2 | Không hút thuốc tại nhà hoặc trong xe, và không cho phép khách hút thuốc tại nhà | … Xem này... |
| 1. Khi chuẩn bị mang thai | Mục 5, Điều 40 | Nếu ai đó trong gia đình bạn sống dựa vào thu nhập của bạn, hãy mua bảo hiểm nhân thọ có thời hạn trước cho người kiếm tiền, không phải cho con cái trước | … Xem này... |
| 2. Sau thai kỳ và trước khi sinh | Mục 27, Điều 2 | Trước tuần thứ 13 của thai kỳ, hãy đến trung tâm dịch vụ y tế cộng đồng để tạo 'Sổ tay Sức khỏe Mẹ và Trẻ em' và sử dụng hạn ngạch kiểm tra trước sinh miễn phí | … Xem này... |
| 2. Sau thai kỳ và trước khi sinh | Mục 27, Điều 3 | Lần kiểm tra thai sản đầu tiên sẽ sàng lọc AIDS, giang mai và viêm gan B, và kiểm tra miễn phí nếu phát hiện | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 4 | Trong suốt thai kỳ, không được hút thuốc hoặc uống một ngụm rượu nào, và các thành viên trong gia đình không nên hút thuốc trong nhà | … Xem này... |
| 2. Sau thai kỳ và trước khi sinh | Mục 27, Mục 5 | Đối với những người có yếu tố nguy cơ cao đối với tiền sản giật, bắt đầu dùng liều thấp hàng ngày của aspirin sau 12 tuần thai kỳ | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 6 | Khám xét tiểu đường thai kỳ ở tuần thứ 24 trở lên—Đừng ngại uống nước đường là phiền phức | … Xem... |
| 2. Sau khi mang thai và trước khi sinh | Mục 34, Điều 5 | Sau 20 tuần mang thai, không nên tự dùng thuốc giảm đau như ibuprofen | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 7 | Ghi nhớ danh sách kiểm tra 'Đến bệnh viện ngay lập tức' này—đếm thai kỳ và năm đầu tiên sau khi sinh | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 9 | Nếu bạn muốn sinh con không đau, chỉ cần nói rằng nó không làm tăng nguy cơ mổ lấy thai | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 10 | Nếu không có chỉ định y tế, đừng chủ động yêu cầu mổ lấy thai, và không thực hiện phẫu thuật chỉ để chọn ngày | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 11 | Xác nhận đăng ký bảo hiểm thai sản trước khi mang thai; vợ/chồng thất nghiệp cũng có thể yêu cầu chi phí y tế thai sản | … Xem này... |
| II. Sau khi mang thai và trước khi sinh | Mục 18, Điều 2 | Nghỉ thai sản là 98 ngày, và trợ cấp thai sản được quỹ bảo hiểm thai sản chi trả dựa trên mức lương trung bình hàng tháng của nhân viên năm trước | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 18, Điều 3 | Biết quy tắc này: Bạn không được giảm lương hoặc bị sa thải do mang thai, sinh nở hoặc cho con bú | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 20, Khoản 11 | Đối với các mặt hàng lớn, hãy cân nhắc thứ tự 'mượn, mua đồ cũ, mua mới'; đừng mua hết cùng một lúc | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 20, Điều 10 | Tã không chỉ nhìn vào thương hiệu, hãy xem ba điều: liệu chúng có vừa vặn không, có thay thường xuyên không, và có được báo cáo để kiểm tra ngẫu nhiên không | … Xem này... |
| 2. Sau khi mang thai và trước khi sinh | Mục 27, Điều 12 | Trước khi xuất viện, hãy lấy 'Giấy chứng nhận sinh y tế' và nghĩ tên trước — đừng gõ lỗi chính tả | … Xem này... |
| 3. Trong thời gian nhập viện và sinh nở | Mục 27, Điều 8 | Nếu nước ối vỡ, hãy nằm thẳng tại chỗ, nâng hông lên, gọi 120, không di chuyển, và không tắm rửa | … Xem này... |
| 3. Trong quá trình sinh tại bệnh viện | Mục 20, Khoản 4 | Trong 6 tháng đầu, chỉ cho con bú mẹ, không cần uống nước; từ 6 tháng trở đi, tiếp tục cho ăn bổ sung và cho con bú con | … Xem này... |
| 3. Trong thời gian nằm viện và sinh nở | Mục 20, Điều 2 | Liều đầu tiên vắc-xin viêm gan B trong vòng 24 giờ sau khi sinh | … Xem này... |
| 3. Trong thời gian nhập viện và sinh nở | Mục 20, Điều 7 | Tiêm vitamin K khi sinh là cần thiết | … Xem này... |
| 3. Trong thời gian nhập viện và sinh nở | Mục 27, Khoản 13 | Không từ chối xét nghiệm máu gót chân hoặc kiểm tra thính lực trẻ sơ sinh | … Xem này... |
| IV. Trước khi xuất viện | Mục 27, Điều 12 | Trước khi xuất viện, hãy lấy 'Giấy chứng nhận sinh y tế' và nghĩ tên trước — đừng mắc sai lầm | … Xem này... |
| 4. Trước khi xuất viện | Mục 27, Điều 14 | Sau khi nhận được giấy khai sinh, hãy đăng ký bảo hiểm y tế cư trú cho con bạn—đừng chờ đến khi đăng ký hộ gia đình hoàn tất | … Xem này... |
| IV. Trước khi xuất viện | Mục 1, Điều 10 | Sử dụng ghế an toàn cho trẻ dưới 4 tuổi; không bế trẻ trong tay | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Điều 27, Điều 15 | Đăng ký sinh tại đồn cảnh sát trong vòng một tháng sau khi trẻ chào đời | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 18, Điều 1 | Trước tiên, hãy đếm số tiền bạn có thể nhận: trợ cấp chăm sóc trẻ em quốc gia là 3.600 nhân dân tệ mỗi trẻ mỗi năm, chi trả đến 3 tuổi | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 20, Khoản 1 | Để trẻ ngủ nằm ngửa, trên bề mặt cứng phẳng, chia sẻ phòng nhưng dùng giường riêng, và không đặt bất kỳ vật mềm nào lên giường | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 20, Điều 5 | Dùng nước trên 70°C để pha sữa công thức, để nguội trước khi cho ăn, và loại bỏ sữa thừa | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 20, Điều 8 | Nếu em bé dưới 3 tháng tuổi có nhiệt độ 38°C, hãy đến bệnh viện ngay mà không cần theo dõi tại nhà | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 20, Điều 9 | Dù bạn có mệt hay tức giận đến đâu, đừng lắc em bé | … Xem này... |
| 5. Tháng đầu tiên sau khi sinh | Mục 27, Điều 7 | Ghi nhớ danh sách kiểm tra 'đến bệnh viện ngay lập tức' — đếm thai kỳ và năm đầu tiên sau sinh | … Xem này... |
| 6. Từ trăng tròn đến một tuổi | Mục 27, Khoản 16 | Đừng bỏ qua kiểm tra sau sinh 42 ngày — nó cũng là một phương pháp sàng lọc trầm cảm sau sinh | … Xem này... |
| 6. Từ một tháng đến một tuổi | Mục 20, Điều 3 | Tiêm chủng đầy đủ theo chương trình tiêm chủng quốc gia, miễn phí; nếu bỏ sót, chỉ bổ sung liều chưa hoàn thành | … Xem này... |
| 6. Từ tháng đầy đủ đến một tuổi · Mục 20, Điều 4 | Trong 6 tháng đầu, chỉ cho con bú, không cần cho uống nước; từ 6 tháng trở đi, tiếp tục cho ăn bổ sung và cho con bú | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Mục 20, Điều 6 | Không cho trẻ dưới một tuổi uống mật ong | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Mục 20, Điều 12 | Nếu con bạn bị chàm nặng hoặc dị ứng trứng, đừng tránh đậu phộng. Hãy làm theo hướng dẫn của bác sĩ để thêm đậu phộng sớm, nhưng không bao giờ cho ăn nguyên hạt | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Điều 34, Điều 4 | Nếu trẻ dưới 2 tuổi bị cảm lạnh, không nên tự uống thuốc cảm pha chế hoặc thuốc ho | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Mục 1, Điều 11 | Nếu có trẻ em ở nhà, hãy lắp bộ giới hạn trên cửa sổ và ban công; màn không được coi là bảo vệ | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Mục 30, Điều 5 | Không sử dụng màn hình cho trẻ từ 0 đến 3 tuổi, tốt nhất không dành cho trẻ từ 3 đến 6 tuổi, và cho học sinh tiểu học, trung học không quá 1 giờ mỗi ngày | … Xem... |
| 6. Từ tháng đầy đủ đến một tuổi · Mục 18, Khoản 3 | Biết điều này: Không giảm lương hoặc sa thải do mang thai, sinh con hoặc cho con bú | … Xem này... |
| 6. Từ một tháng tuổi đến một tuổi | Mục 5, Điều 13 | Bằng cách đăng ký hỗ trợ lẫn nhau gia đình ràng buộc trên ứng dụng bảo hiểm y tế, số tiền từ tài khoản bảo hiểm y tế cá nhân của nhân viên có thể được sử dụng để chi trả cho chăm sóc y tế và thuốc men cho vợ/chồng, cha mẹ và con cái | … Xem này... |
| 6. Từ tháng đầy đủ đến năm đầu tiên | Mục 5, Điều 2 | Từ tháng 3 đến tháng 6 hàng năm, tiến hành đối chiếu thuế thu nhập cá nhân và điền các khoản khấu trừ bổ sung cụ thể cần điền | … Xem này... |

## tài liệu/Danh sách kiểm tra thiết bị khẩn cấp tại nhà

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Danh sách kiểm tra thiết bị khẩn cấp tại nhà: Nên mua gì, cất giữ ở đâu và kiểm tra bao lâu một lần | Mục 1, Điều 26 | Chuẩn bị bình chữa cháy, chăn chống cháy, mặt nạ thở khẩn cấp và bộ sơ cứu, và kiểm tra mỗi năm một lần | … Tương ứng với README ... |
| Danh sách kiểm tra thiết bị khẩn cấp tại nhà: Nên mua gì, lưu trữ ở đâu, kiểm tra bao lâu một lần | Mục 1, Khoản 3 | Lắp đặt đầu báo khói; Lắp lại đầu báo khí carbon monoxide cho đốt than hoặc sưởi gas trong nhà vào mùa đông | … Làm thế nào để lựa chọn và lắp đặt thiết bị báo khói và thiết bị báo khí carbon monoxide? Xem thêm... |
| Danh sách kiểm tra thiết bị khẩn cấp tại nhà: Nên mua gì, lưu trữ ở đâu, kiểm tra bao lâu một lần | Mục 1, Điều 4 | Ống dẫn khí và bếp nên được thay thế khi hết hạn; nếu bạn không tự chỉnh sửa ống, công ty gas có thể trực tiếp từ chối bán hàng tận nhà | … Ống dẫn khí và bếp có thể được nhìn thấy ở... |
| 2. Ba yếu tố thiết yếu trong chữa cháy | Mục 13, Điều 24 | Khi có cháy, hãy bò sát mặt đất, cảm nhận cửa trước khi mở, không mở nếu trời nóng, đi cầu thang nhưng không đi thang máy, và đừng ngoái lại sau khi rời đi | … Cách thoát ra (bò sát mặt đất, cảm nhận cửa trước khi mở, đi cầu thang thay vì thang máy), xem... |
| 2. Bộ ba phòng cháy chữa cháy | Mục 1, Khoản 3 | Lắp đặt đầu báo khói; Lắp đặt báo động carbon monoxide cho đốt than hoặc sưởi gas trong nhà vào mùa đông | … Kiểm tra đầu báo khói... |
| 3. Nên để gì trong bộ sơ cứu | Mục 13, Điều 12 | Đối với chảy máu nhiều, trước tiên ấn chặt vết thương bằng tay; nếu không thể nâng đỡ các chi, hãy đeo garô và tiêm 120 cùng lúc | … Cách sử dụng garô, khi nào không nên dùng, và tại sao "không nới lỏng để lộ máu", xem... |
| 3. Nên để gì vào bộ sơ cứu | Mục 13, Điều 14 | Sau khi bị bỏng, ngay lập tức rửa bằng nước lạnh chảy trong 20 phút; không bôi kem đánh răng hoặc nước tương | … Không cần thuốc mỡ, chỉ cần một việc tại chỗ: rửa bằng nước máy mát trong 20 phút, xem... |
| 3. Nên để gì vào bộ sơ cứu | Mục 13, Điều 15 | Nếu bạn đột nhiên xuất hiện phát ban, khó thở hoặc cảm thấy chóng mặt, hãy coi như sốc phản vệ. Gọi 120 ngay lập tức và giải thích rõ ràng | … Đây là thuốc kê đơn, bạn cần đi khám bác sĩ để kê đơn, xem... |
| 5. Kiểm tra mỗi năm một lần, mười phút | Mục 1, Điều khoản 3 | Lắp đặt đầu báo khói; Vào mùa đông, lắp đặt đầu báo khí carbon monoxide cho đốt than trong nhà hoặc sưởi bằng gas | … Thay pin mỗi năm một lần, xem... |
| 6. Những Thứ Bạn Không Cần Mua | Mục 13, Điều 1 | Nếu ai đó ngã quỵ và không thở được, hãy ngay lập tức ấn ngực họ, nhờ ai đó gọi 120 và tìm máy điện tử (AED) | … Trong trường hợp ngừng tim, bạn nên ngay lập tức nhấn nút, gọi 120 và đến nơi công cộng gần nhất để lấy AED, xem... |
| 6. Những mặt hàng bạn không cần mua | Mục 5, Điều 24 | Không tích trữ cho 'giá đã đánh dấu' hoặc các chương trình khuyến mãi lớn | … Phần dự trữ dư thừa hầu như sẽ bị loại bỏ khi hết hạn, xem thêm... |

## docs/Đồng hồ sinh học và ca đêm

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Cơ thể nhận biết thời gian như thế nào, và tại sao ca đêm lại gây hại cho con người? | Mục 2, Điều 39 | Làm ca đêm càng lâu, nguy cơ tim mạch càng cao. Nếu bạn có thể chuyển việc, hãy chuyển sớm … Đây là... |
| 2. Chiếc đồng hồ này sử dụng ánh sáng để phù hợp với đồng hồ, không phải theo lộ trình 'nhìn thấy' | Mục 3, Điều 2 | Đặt giờ thức dậy, tương tự vào cuối tuần | … Điều này cũng... |
| 9. Những điều bài viết này sẽ không đề cập | Mục 2, Điều 39 | Bạn làm ca đêm càng lâu, nguy cơ tim mạch càng cao. Nếu bạn có thể chuyển việc, hãy làm càng sớm càng tốt … Ca đêm thực sự làm tăng nguy cơ tim mạch đến mức nào, và nó được tính toán hàng năm như thế nào? Trong... |
| 9. Những điều bài viết này không đề cập | Mục 2, Điều 38 | Sau khi thức khuya, ngủ bù vào đêm hôm sau, đừng để dành cho cuối tuần | … Làm thế nào để ngủ bù sau khi thức khuya, trong... |
| 9. Những điều bài viết này không đề cập | Mục 2, Điều 13 | Ngủ khoảng 7 tiếng mỗi đêm, duy trì thói quen đều đặn | … Bạn ngủ bao lâu vào ban đêm, lịch trình không đều đặn, và nhiều điều khác... |
| 9. Những Điều Bài Viết Không Đề Cập | Mục 3, Điều 2 | Thời gian thức dậy cố định, giữ nguyên vào cuối tuần | … Vào buổi sáng, nhìn thấy ánh sáng và thức dậy đều đặn, trong... |

## tài liệu/Làm gì trước khi bị sa thải

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Bạn nên làm gì đầu tiên sau khi bị sa thải | Mục 7, Điều 2 | Nếu bạn được hưởng lương, trước tiên nộp đơn khiếu nại lên thanh tra lao động, sau đó nộp đơn cho trọng tài lao động. Cả hai lựa chọn đều miễn phí, và hầu hết các vụ việc đều có kết quả trong vài tháng | … Chỉ là những khoản lương còn nợ hoặc chưa rời đi, hãy nhìn thẳng vào... |
| Vào ngày: Trước khi ký | Điều 19, Khoản 7 | Không ký "từ chức vì lý do cá nhân"; một khi đã ký, sẽ không còn N | … Xem này... |
| Vào ngày: Trước khi ký | Điều 19, Khoản 7 | Không ký "từ chức vì lý do cá nhân"; một khi đã ký, sẽ không còn N | … Xem này... |
| Vào ngày: Trước khi ký | Mục 8, Điều 41 | Đối với các cuộc gọi điện thoại và phỏng vấn có thể gây bất lợi cho bạn, hãy bắt đầu ghi âm trực tiếp: Nếu bạn tự tham gia cuộc trò chuyện, bạn không cần phải xin ý kiến của bên kia trước | … Xem này... |
| Cùng ngày: Trước khi ký | Mục 19, Điều 8 | Lưu lại phiếu lương, điểm danh, hợp đồng lao động, hồ sơ bảo hiểm xã hội và nhật ký trò chuyện trước khi từ chức | … Xem này... |
| Vào ngày: Trước khi ký kết | Mục 11, Điều 7 | Khi từ chức, không lấy đi mã nguồn, danh sách khách hàng hoặc tài liệu kỹ thuật, không tải lên ổ đĩa đám mây cá nhân, và không tái sử dụng chúng tại công ty tiếp theo | … Xem này... |
| Vào ngày: Trước khi ký kết | Mục 11, Điều 6 | Khi từ chức, hãy giao nộp tất cả quyền tài khoản, không xóa cơ sở dữ liệu, không để lại cửa hậu hoặc thay đổi hệ thống khóa mật khẩu, ngay cả khi công ty nợ bạn tiền | … Xem này... |
| Từ ngày đến vài ngày đầu tiên: thanh toán tiền | Mục 19, Điều 4 | Thanh toán danh sách trước sau khi bị sa thải N: Một tháng lương cho mỗi năm đầy đủ, nửa tháng cho chưa đến sáu tháng | … Xem này... |
| Từ ngày đến vài ngày đầu tiên: thanh toán tiền | Mục 19, Điều 4 | Thanh toán danh sách trước sau khi bị sa thải N: Một tháng lương cho mỗi năm đầy đủ, nửa tháng cho chưa đến sáu tháng | … Xem này... |
| Từ ngày đến vài ngày đầu: Thanh toán số tiền | Điều 19, Điều 5 | Nếu công ty sa thải bạn mà không thông báo trước 30 ngày, bạn vẫn phải trả thêm một tháng lương | … Xem này... |
| Từ ngày đến vài ngày đầu tiên: Thanh toán tiền | Điều 19, Điều 6 | Nếu công ty giải thể trái phép, khoản bồi thường gấp đôi mức bồi thường kinh tế | … Xem này... |
| Từ ngày nghỉ đến vài ngày đầu: Thanh toán tiền | Mục 19, Điều 2 | Ngày nghỉ phép hàng năm được tính dựa trên số năm làm việc tích lũy là 5, 10 và 15 ngày; nếu không nghỉ, sẽ trừ 300% lương hàng ngày | … Xem này... |
| Từ cùng ngày đến vài ngày đầu tiên: thanh toán tiền | Điều 19, Điều 1 | Tiền lương làm thêm giờ được tính theo ba cấp: 1,5, 2x và 3x. Nếu không trả lương, khiếu nại với thanh tra lao động; nếu quá hạn, trả thêm 50% đến 100% | … Xem này... |
| Tuần đầu tiên | Mục 7, Điều 1 | Nếu thất nghiệp, trước tiên hãy nộp đơn xin trợ cấp thất nghiệp trực tuyến | … Xem này... |
| Tuần đầu tiên | Mục 7, Điều 5 | Khi tìm việc, hãy bắt đầu với dịch vụ việc làm công miễn phí và thị trường giật, đừng tìm các công ty môi giới trả phí | … Xem này... |
| Tuần đầu tiên | Mục 7, Điều 1 | Nếu thất nghiệp, trước tiên hãy nộp đơn xin trợ cấp thất nghiệp trực tuyến | … Xem này... |
| Tuần đầu tiên | Mục 7, Điều 1 | Nếu thất nghiệp, trước tiên hãy nộp đơn xin trợ cấp thất nghiệp trực tuyến | … Xem này... |
| Tuần đầu tiên | Mục 7, Điều 3 | Nếu bạn không đủ khả năng khởi kiện, hãy nộp đơn xin trợ giúp pháp lý; các trường hợp như yêu cầu tiền lương, trợ cấp nuôi dưỡng và tai nạn lao động đã nằm trong phạm vi điều kiện | … Xem này... |
| Tuần đầu tiên | Mục 11, Điều 12 | Nếu thỏa thuận không cạnh tranh được ký kết, sau khi từ chức, công ty sẽ không trả thù lao hàng tháng và sẽ phát hành thư nhắc nhở bằng văn bản; nếu không được thanh toán trong vòng 3 tháng, hợp đồng có thể bị chấm dứt; Các vị trí chưa tiếp xúc trước với bí mật kinh doanh có thể yêu cầu xác nhận rằng điều khoản này không có hiệu lực | … Xem này... |
| Tuần đầu tiên | Mục 29, Điều 3 | Sau khi mất việc, trước tiên hãy thiết lập một lịch trình cố định cho thói quen, bảo hiểm y tế và tìm việc—đừng ở nhà cả ngày | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 2 | Nếu bạn còn nợ lương, trước tiên hãy nộp đơn khiếu nại lên thanh tra lao động, sau đó nộp đơn cho trọng tài lao động. Cả hai lựa chọn đều miễn phí, và hầu hết các vụ việc đều có kết quả trong vài tháng | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 22 | Nếu bạn nợ lương, trước tiên hãy xác định ai là người thuê bạn: xưởng và tổ trưởng không có giấy phép vẫn thuê thanh tra lao động, chỉ ra tòa khi làm việc cá nhân cho gia đình hoặc cá nhân | … Xem này... |
| Tháng đầu tiên | Mục 8, Điều 19 | Bảo vệ quyền lợi có giới hạn thời gian: 3 năm cho tranh tụng dân sự, 1 năm cho trọng tài lao động. Nếu bên kia nói 'làm thêm giờ' là đủ, thì như vậy là đủ … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 5 | Khi tìm việc, trước tiên hãy sử dụng các dịch vụ việc làm công miễn phí và thị trường gig, không phải các đại lý trả lương | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 14 | Đừng chỉ nộp hồ sơ khi tìm việc; Sử dụng các phương pháp có hệ thống: Học kỹ thuật, đặt mục tiêu, tìm kiếm sự trợ giúp | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 15 | Không có tiền đặt cọc, không có giấy tờ đặt cọc, không ký 'khoản vay đào tạo', không tham gia vào các mô hình kim tự tháp, không có khoản vay lãi suất cao | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 13 | Trong thời gian thất nghiệp, hãy đi xin trợ cấp đào tạo nghề, trợ cấp thực tập lao động và trợ cấp an sinh xã hội; không tự chi trả chi phí cho các lớp đào tạo | … Xem này... |
| Tháng đầu tiên | Mục 7, Điều 12 | Sau khi đăng ký xin trợ cấp thất nghiệp, cố gắng đạt khó khăn trong việc làm, nhận trợ cấp an sinh xã hội hoặc các vị trí phúc lợi công cộng | … Xem này... |
| Trong những tháng tiếp theo | Mục 5, Điều 27 | Dành một quỹ khẩn cấp cho chi phí sinh hoạt từ 3 đến 6 tháng và giữ nó có thể truy cập bất cứ lúc nào | … Xem này... |
| Các tháng sau | Mục 29, Điều 12 | Trong ba tháng đầu sau một biến động, tất cả các quyết định lớn không thể đảo ngược đều bị hoãn lại | … Xem này... |
| Các tháng sau | Mục 7, Điều 9 | Bảo hiểm y tế cư trú là 400 nhân dân tệ mỗi năm, không bị gián đoạn; các hộ gia đình gặp khó khăn có thể được giảm hoặc miễn trừ | … Xem này... |
| Các tháng sau | Mục 7, Điều 18 | Đừng hoảng loạn nếu các khoản thanh toán an sinh xã hội của bạn bị gián đoạn: lương hưu được tính theo tích lũy, phụ phí bảo hiểm y tế theo quy định | … Xem này... |
| Các tháng sau | Mục 7, Điều 7 | Nộp đơn xin trợ cấp sinh hoạt nếu thu nhập của bạn dưới ngưỡng trợ cấp tối thiểu địa phương | … Xem này... |
| Trong những tháng tiếp theo | Mục 29, Điều 11 | Gọi 12356 nếu bạn muốn nói chuyện, gọi 12355 cho trẻ vị thành niên và thanh thiếu niên, đi khám bác sĩ và đăng ký phòng khám tâm lý | … Xem này... |
| Các tháng sau | Điều 8, Điều 19 | Bảo vệ quyền lợi có thời hạn: 3 năm cho tranh tụng dân sự, 1 năm cho trọng tài lao động; chỉ cần một câu từ bên kia nói 'thời hiệu khởi kiện' là đủ | … Xem này... |

## tài liệu/Bạn có nên dừng lại khi gặp người lạ và gây rắc rối không?

| Nguồn | Trích dẫn | Mục được trỏ đến | Bối cảnh của trích dẫn |
| --- | --- | --- | --- |
| Gặp người lạ gặp tai nạn trên đường, nên đi tiếp hay dừng lại | Điều 2, Mục 13 | Người già té ngã, có người ngã, hãy quỳ xuống gọi họ, gọi 120, đừng vội nâng người; với người lạ, đi tiếp cũng hợp pháp, dừng lại thì đừng tự ý nâng | …đây là… |
| Chi phí có thể phát sinh sau khi dừng lại, từ nhẹ đến nặng | Điều 6, Mục 19 | Công ty sa thải trái pháp luật, tiền bồi thường là gấp đôi chuẩn kinh tế | …nếu công ty đuổi bạn vì chuyện này, thường là sa thải trái pháp luật, tiền bồi thường tính theo 2N (… |
| Chi phí có thể phát sinh sau khi dừng lại, từ nhẹ đến nặng | Điều 15, Mục 8 | Người xung quanh nói "ai cũng đừng tưởng sẽ yên ổn" "dắt con đi cùng", đừng coi là lời nóng giận: người thân trực tiếp có thể đưa đi khám, công an khi nhận tin báo cũng phải xử lý | …cách tự mình lưu bằng chứng, cách gọi cảnh sát, xem… |
| Chi phí có thể phát sinh sau khi dừng lại, từ nhẹ đến nặng | Điều 25, Mục 1 | Khi trầm cảm hoặc có ý nghĩ tự tử gọi 12356, ở nhà không tích trữ thuốc ngủ và thuốc trừ sâu | …đường dây hỗ trợ tâm lý 12356, xem… |
| Hai trường hợp khiến việc “đi tiếp” không còn miễn phí | Điều 1, Mục 8 | Khi xảy ra tai nạn giao thông, trước tiên dừng xe, cứu người, báo cảnh sát, đừng bỏ chạy | …lúc này điều cần quan tâm không phải là có giúp người khác hay không, mà là xử lý tai nạn giao thông và bỏ chạy gây tai nạn, xem… |
| Cách đơn giản nhất khi quyết định dừng lại | Điều 1, Mục 13 | Có người ngã không thở, ngay lập tức ấn mạnh vào ngực, cho người bên cạnh gọi 120 và tìm AED | …không thở thì ấn mạnh lên ngực người đó, xem… |
| Cách đơn giản nhất khi quyết định dừng lại | Điều 39, Mục 13 | Khi cứu người bị thương, tốn tiền, trước tiên tìm người gây ra tai nạn và bảo hiểm y tế, sau đó đăng ký xác nhận hành vi dũng cảm | …muốn lấy lại số tiền này, xem… |
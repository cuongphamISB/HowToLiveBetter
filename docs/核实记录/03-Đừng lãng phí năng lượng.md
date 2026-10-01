# 第 3 节来源核实记录

说明：绝大多数出版社页面（APA psycnet、Elsevier、SAGE、PNAS、Springer、PubMed）对本机 WebFetch 返回 403 / 验证码 / 仅 cookie 提示，所以核实路径是：先用 <https://doi.org/>... 解析确认 DOI 存在并看重定向目标（确认出版社与期刊），再用 Europe PMC REST API / Crossref API / OpenAlex API / PMC 全文页 / 作者或大学官方 PDF 拿到标题、作者、年份与摘要原文。每条列出实际打开的 URL 与引用数字的原文位置。

## 条目 1

- <https://doi.org/10.1037/xhp0000100> → 302 到 doi.apa.org，DOI 存在；psycnet 页 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/xhp0000100&format=json&resultType=core> → 已确认：Stothart C, Mitchum A, Yehnert C (2015) The attentional cost of receiving a cell phone notification. J Exp Psychol Hum Percept Perform
  - 摘要原文："cellular phone notifications alone significantly disrupted performance on an attention-demanding task, even when participants did not directly interact with a mobile device during the task. The magnitude of observed distraction effects was comparable in magnitude to those seen when users actively used a mobile phone, either for voice calls or text messaging."
- <https://doi.org/10.1086/691462> → 302 到 journals.uchicago.edu，DOI 存在；出版社页 403
- <https://api.crossref.org/works/10.1086/691462> → 已确认：Ward AF, Duke K, Gneezy A, Bos MW (2017) Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. J Assoc Consum Res 2(2):140-154
- <https://api.openalex.org/works/doi:10.1086/691462> → 摘要原文："Results from two experiments indicate that even when people are successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the mere presence of these devices reduces available cognitive capacity. Moreover, these costs are highest for those in smartphone dependence."
  - 「桌上/口袋/另一房间」三种条件与「工作记忆、流体智力」两项指标来自我对该论文的记忆，摘要只写了 two experiments 和 available cognitive capacity，这两处细节**未在原文中逐字确认**（正文未能打开），已从条目中删去，条目只保留摘要原文支持的表述

## 条目 2

- <https://doi.org/10.1038/s41598-017-03171-4> → 302 到 nature.com，DOI 存在；nature 页需授权跳转
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1038/s41598-017-03171-4&format=json&resultType=core> → 已确认：Phillips AJK, Clerx WM, O'Brien CS, Sano A, Barger LK, Picard RW, Lockley SW, Klerman EB, Czeisler CA (2017) Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Sci Rep

- 摘要原文: "Chúng tôi đã nghiên cứu 61 sinh viên đại học trong 30 ngày ... DLMO xuất hiện sau đó (00:08 ± 1:54 so với 21:32 ± 1:48; trang < 0.003); nhịp sinh nhật của xu hướng ngủ hàng ngày đạt đỉnh sau đó (06:33 ± 0:19 so với 04:45 ± 0:11; trang < 0.005) ... Một mối tương quan dương (r = 0,37; p < 0,004) giữa thành tích học tập và SRI đã được quan sát thấy ... Sự khác biệt giữa nhóm không đều và đều trong thời gian sinh học có thể chủ yếu do các mẫu tiếp xúc ánh sáng khác nhau của họ." - 「约 2.5 小时」「约 1.8 小时」是我由上述时刻差算出的近似值 ## 条目 3 - <https://doi.org/10.1093/sleep/26.2.117> → 302 到 academic.oup.com,随后 <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/26.2.117> 打开成功
  - 已确认: Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003) Chi phí tích lũy của sự tỉnh táo bổ sung: Ảnh hưởng liều-đáp ứng lên chức năng thần kinh hành vi và sinh lý giấc ngủ từ việc hạn chế giấc ngủ mãn tính và thiếu ngủ hoàn toàn. Giấc ngủ 26(2):117-126
  - 摘要原文(OUP 页 + Europe PMC 两处一致):"Tổng cộng n = 48 người trưởng thành khỏe mạnh (từ 21-38 tuổi)";" Việc hạn chế thời gian ngủ kéo dài xuống còn 4 giờ hoặc 6 giờ mỗi đêm trong 14 ngày liên tiếp dẫn đến các khiếm khuyết tích lũy đáng kể phụ thuộc liều lượng trong hiệu suất nhận thức ở tất cả các nhiệm vụ";" Việc hạn chế ngủ mãn tính ở 6 giờ hoặc ít hơn mỗi đêm gây ra các suy giảm hiệu suất nhận thức tương đương với tối đa 2 đêm bị thiếu ngủ hoàn toàn";" Đánh giá cảm giác buồn ngủ chủ quan cho thấy phản ứng cấp tính với việc hạn chế giấc ngủ nhưng chỉ tăng nhẹ thêm vào các ngày tiếp theo, và không phân biệt đáng kể điều kiện 6 giờ và 4 giờ." 
- <https://doi.org/10.1037/a0018883> → 302 到 doi.apa.org,DOI 存在
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0018883&format=json&resultType=core> → 已确认:Lim J, Dinges DF (2010) Một phân tích tổng hợp về tác động của thiếu ngủ ngắn hạn lên các biến nhận thức. Psychol Bull
  - 摘要原文: "thiếu ngủ tổng cộng ngắn hạn (<48 giờ)";" 70 bài viết chứa 147 bài kiểm tra nhận thức";" Thiếu chú ý đơn giản: g = -0,776, khoảng tin cậy 95% [-0,96, -0,60], p <,001";" độ chính xác lý luận: g = -0,125, khoảng tin cậy 95% [-0,27, 0,02]" 

## 条目 4

- <https://doi.org/10.5664/jcsm.3170> → 302,DOI 存在;jcsm.aasm.org 证书错误、springer 需授权
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5664/jcsm.3170&format=json&resultType=core> → 已确认: Drake C, Roehrs T, Shambroom J, Roth T (2013) Ảnh hưởng của caffeine lên giấc ngủ được dùng 0, 3 hoặc 6 giờ trước khi đi ngủ. J Clin Sleep Med; PMID 24235903, PMCID PMC3805807
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/> → Toàn văn mở thành công
  - Văn bản gốc: "Đối với TST, giảm thời lượng so với giả dược là đáng kể tại từng thời điểm sử dụng caffeine, giảm TST từ 1,1 đến 1,2 giờ."; "Caffeine được dùng 6 giờ trước khi đi ngủ làm giảm tổng thời gian ngủ đi 41 phút, gần đạt mức ý nghĩa (p = 0,08)." (nhật ký); "chỉ số đo khách quan phát hiện sự khác biệt khi caffeine được dùng 6 giờ trước khi đi ngủ"
- <https://doi.org/10.1016/j.smrv.2023.101764> → 302 đến linkinghub.elsevier.com, DOI tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.smrv.2023.101764&format=json&resultType=core> → Đã xác nhận: Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL (2023) Tác động của caffeine đối với giấc ngủ sau đó: Tổng quan hệ thống và phân tích gộp. Sleep Med Rev
  - Tóm tắt gốc: "Việc tiêu thụ caffeine làm giảm tổng thời gian ngủ 45 phút và hiệu quả ngủ 7%"; "cà phê (107 mg mỗi 250 mL) nên được tiêu thụ ít nhất 8,8 giờ trước khi đi ngủ"

## Mục 5

- <https://doi.org/10.1016/j.chb.2014.11.005> → 302 đến linkinghub.elsevier.com, DOI tồn tại; sciencedirect 403
- <https://api.crossref.org/works/10.1016/j.chb.2014.11.005> → Đã xác nhận: Kushlev K, Dunn EW (2015) Kiểm tra email ít hơn giúp giảm căng thẳng. Comput Hum Behav 43:220-228
- <https://dunn.psych.ubc.ca/wp-content/uploads/2010/11/kushlev-dunn-email-and-stress-in-press1.pdf> (PDF bản chấp nhận từ trang chính thức của phòng thí nghiệm tác giả, trích xuất pdftotext tại chỗ)
  - Tóm tắt gốc: "Trong một tuần, 124 người lớn được phân ngẫu nhiên để giới hạn việc kiểm tra email ba lần một ngày; trong tuần còn lại, người tham gia có thể kiểm tra email số lần không giới hạn mỗi ngày."
  - Văn bản gốc: "người tham gia cảm thấy ít căng thẳng hàng ngày hơn trong điều kiện giới hạn so với điều kiện email không giới hạn, F(1, 121) = 4,18, p = .04, Cohen's d = .37"; "số lần trung bình mà mọi người báo cáo kiểm tra email vào một ngày làm việc bình thường là 15,48 vào thời điểm ban đầu (SD = 8,69)"; "không có sự khác biệt đáng kể giữa các điều kiện về số lượng email nhận được (Mlimited = 16,64 so với Munlimited = 16,04 ...) hoặc phản hồi"

## Mục 6

- <https://doi.org/10.1037/a0030986> → 302 đến doi.apa.org, DOI tồn tại
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0030986&format=json&resultType=core> → Đã xác nhận: Altmann EM, Trafton JG, Hambrick DZ (2014) Những gián đoạn thoáng qua có thể làm lệch chuỗi suy nghĩ. J Exp Psychol Gen
- 摘要原文: "Các lần gián đoạn trung bình dài 4,4 giây đã làm tăng gấp ba lần tỷ lệ lỗi chuỗi trong các lần thử sau gián đoạn so với các lần thử ban đầu. Các lần ngắt quãng trung bình dài 2,8 giây — khoảng thời gian thực hiện một bước trong tác vụ bị gián đoạn — đã làm tăng gấp đôi tỷ lệ lỗi trình tự." 
- <https://www.ics.uci.edu/~gmark/CHI2005.pdf>(作者 UCI 官方主页 PDF,本地 pdftotext 抽取)
  - 摘要原文: "quan sát chi tiết 24 nhân viên thông tin";" 57% phạm vi làm việc của họ bị gián đoạn";正文:"11 phút 4 giây." (切换前在中心/外围工作主题的平均时长);"Khi mọi người tiếp tục làm việc trong cùng một ngày, thời gian trung bình mất 25 phút 26 giây (sd=54 phút 48 giây) ... trước khi tiếp tục làm việc, người cung cấp thông tin của chúng tôi làm việc trong trung bình 2,26 (sd=2,79) lĩnh vực làm việc." 
  - DOI 核实:我最初记的 10.1145/1054972.1054989 经 OpenAlex 查证是另一篇(Marshall & Bly),已改。 <https://api.crossref.org/works/10.1145/1054972.1055017> 与 与 <https://api.openalex.org/works/doi:10.1145/1054972.1055017> 均确认为 Mark, Gonzalez, Harris (2005) Không có nhiệm vụ nào bị bỏ lại phía sau? Xem xét bản chất của công việc phân mảnh. CHI 2005 trang 321-330
- <https://www.ics.uci.edu/~gmark/chi08-mark.pdf>(作者官方 PDF,本地抽取)
  - 摘要原文: "mọi người hoàn thành các nhiệm vụ bị gián đoạn trong thời gian ngắn hơn mà không có sự khác biệt về chất lượng ... nhưng điều này đi kèm với cái giá: phải chịu nhiều căng thẳng hơn, thất vọng hơn, áp lực thời gian và nỗ lực hơn."; 正文: "Bốn mươi tám đối tượng tham gia." 
  - <https://api.crossref.org/works/10.1145/1357054.1357072> → 已确认: Mark G, Gudith D, Klocke U (2008) Chi phí của công việc gián đoạn: tăng tốc độ và áp lực. CHI 2008 tr.107-110
  - 备注里「约一半打断是自己发起」来自我对该论文的记忆，未在抽取文本中逐字核对，已从条目备注中删去

## 条目 7

- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Task%20switching%22%20AND%20AUTH:Monsell%20AND%20PUB_YEAR:2003&format=json&resultType=core> → 已确认:Monsell S (2003) Chuyển đổi nhiệm vụ. Xu hướng Cogn Sci;DOI 10.1016/s1364-6613(03)00028-7;PMID 12639695
  - 摘要原文: "Phản ứng của đối tượng chậm hơn đáng kể và thường dễ mắc lỗi hơn ngay sau khi chuyển nhiệm vụ." 
  - 注:直接用 DOI 查 Europe PMC 返回 0 条(括号编码问题),改用标题+作者查到
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.0903620106&format=json&resultType=core> → 已确认:Ophir E, Nass C, Wagner AD (2009) Kiểm soát nhận thức trong người đa nhiệm truyền thông. PNAS
  - 摘要原文: "Người đa nhiệm phương tiện nặng dễ bị nhiễu bởi các kích thích môi trường không liên quan và từ các biểu diễn không liên quan trong bộ nhớ ... Người đa nhiệm phương tiện nặng hoạt động kém hơn trong bài kiểm tra khả năng chuyển đổi nhiệm vụ"
- Lưu ý: DOI này chưa mở trực tiếp trên doi.org, xác nhận dựa vào đăng ký của Europe PMC
- Thêm kiểm tra <https://api.crossref.org/works/10.1037/0096-1523.27.4.763> xác nhận Rubinstein, Meyer & Evans (2001) tồn tại, nhưng không lấy được tóm tắt, cuối cùng không trích dẫn trong mục

## Mục 8

- <https://doi.org/10.1073/pnas.1418490112> → 302 đến pnas.org, DOI tồn tại; pnas.org 403
- Xác nhận qua Europe PMC: Chang AM, Aeschbach D, Duffy JF, Czeisler CA (2015) Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS; PMCID PMC4313820
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC4313820/> → Mở toàn văn thành công
  - Nội dung gốc: "took longer to fall asleep ... 25.65 ± 18.78 min vs. 15.75 ± 13.09 min"; "suppressed evening levels of melatonin by 55.12 ± 20.12%"; "Dim light melatonin onset was >1.5 h later on the day following the LE-eBook condition (22:31 ± 0:42) than in the print-book condition (21:01 ± 0:49)"; "feeling sleepier the morning after reading an LE-eBook ... it took them hours longer to fully wake up"
  - Trong ghi chú, "độ sáng tối đa, đọc liên tục trong vài giờ" là kí ức của tôi về thiết lập thí nghiệm, chưa đối chiếu từng chữ, đã gỡ khỏi ghi chú mục

## Mục 9

- <https://doi.org/10.1093/sleep/29.6.831> → 302, sau đó <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/29.6.831> mở thành công
  - Xác nhận: Brooks A, Lack L (2006) A Brief Afternoon Nap Following Nocturnal Sleep Restriction: Which Nap Duration is Most Recuperative? Sleep 29(6):831-840
  - Tóm tắt gốc: "The 5-minute nap produced few benefits in comparison with the no-nap control."; "The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these benefits maintained for as long as 155 minutes."; 20 phút: cải thiện xuất hiện sau 35 phút ngủ ngắn, kéo dài đến 125 phút; "The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap."

## Mục 10

- <https://doi.org/10.1016/j.jenvp.2011.07.002> → 302 đến linkinghub.elsevier.com, DOI tồn tại; sciencedirect 403; PubMed không có bài này (không phải tạp chí MEDLINE)
- <https://api.crossref.org/works/10.1016/j.jenvp.2011.07.002> → Xác nhận: Jahncke H, Hygge S, Halin N, Green AM, Dimberg K (2011) Open-plan office noise: Cognitive performance and restoration. J Environ Psychol 31(4):373-382
- <http://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A434794&dswid=2269> (hồ sơ chính thức của Đại học Gävle) → Mở thành công, tiêu đề/tác giả/tạp chí/DOI一致
- Tóm tắt nguyên văn: "Mức âm nền tăng 12 dB, từ 39 lên 51 dB LAeq."; "Hiệu suất ghi nhớ từ giảm, mệt mỏi tăng và thiếu động lực khi mức âm nền tăng."; "Một khoảng nghỉ với phim thiên nhiên kèm âm thanh tương ứng làm tăng đánh giá năng lượng so với chỉ nghe âm thanh sông hoặc tiếng ồn văn phòng." 
  - N = 47, mỗi lần làm việc 2 giờ: trích xuất từ WebSearch, chưa từng xem trực tiếp trên trang diva, đã xóa khỏi mục

## Mục 11

- <https://doi.org/10.1111/ecoj.12166> → 302 đến academic.oup.com/ej/article/125/589/2052-2076/5078088, DOI tồn tại; trang OUP chỉ hiện điều hướng
- <https://api.crossref.org/works/10.1111/ecoj.12166> → đã xác nhận: Pencavel J (2015) Năng suất của giờ làm việc. The Economic Journal 125(589):2052-2076
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/ecoj.12166> → tóm tắt nguyên văn: "dưới một ngưỡng giờ làm, sản lượng tỉ lệ thuận với số giờ; vượt ngưỡng, sản lượng tăng với tốc độ giảm khi số giờ tăng."
- <https://docs.iza.org/dp8129.pdf> (IZA DP No. 8129, phiên bản working paper cùng bài báo, trang chính thức cơ quan; trích xuất pdftotext cục bộ)
  - Nguyên văn: "dưới 49 giờ hàng tuần, biến động sản lượng tỉ lệ với biến động giờ; với các quan sát từ 49 giờ trở lên, sản lượng tăng với giờ theo tốc độ giảm và sản lượng tối đa xảy ra khoảng 63 giờ. Sản lượng ở 70 giờ khác ít so với sản lượng ở 56 giờ"; Kết luận: "Ngưỡng tuần làm việc cho công nhân đạn dược được xem xét trong bài này là 48 giờ, nhưng với các công nhân khác có thể nhiều hơn hoặc ít hơn."
  - Ghi chú: phân tích trong nội dung dùng 49 giờ làm mốc, kết luận viết 48 giờ; mục lấy 49. Số liệu đối chiếu dùng phiên bản working paper, bản chính thức chưa mở được

## Mục 12

- <https://doi.org/10.1111/j.1745-6924.2008.00088.x> → 302 đến journals.sagepub.com, DOI tồn tại; trang SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1111/j.1745-6924.2008.00088.x&format=json&resultType=core> → đã xác nhận: Nolen-Hoeksema S, Wisco BE, Lyubomirsky S (2008) Suy ngẫm lại về Suy tư lặp đi lặp lại. Perspect Psychol Sci
  - Nguyên văn tóm tắt: "suy tư lặp đi lặp lại làm trầm trọng thêm trầm cảm, tăng suy nghĩ tiêu cực, làm suy giảm khả năng giải quyết vấn đề, cản trở hành vi công cụ, và xói mòn hỗ trợ xã hội"; thêm "lo âu, ăn uống bốc đồng, uống rượu bốc đồng, và tự làm hại bản thân"

## Mục 13

- <https://api.crossref.org/works/10.1037/0022-3514.46.5.1097> → đã xác nhận: Rook KS (1984) Mặt tiêu cực của tương tác xã hội: Ảnh hưởng đến sức khỏe tâm lý. J Pers Soc Psychol 46(5):1097-1108
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22The%20negative%20side%20of%20social%20interaction%22%20AND%20AUTH:Rook&format=json&resultType=core> → PMID 6737206, DOI 10.1037//0022-3514.46.5.1097
  - 摘要原文: "kết quả xã hội tiêu cực có liên quan nhất quán và mạnh mẽ hơn đến hạnh phúc so với kết quả xã hội tích cực";样本 120 名 60-89 岁丧偶女性
- 注:<https://doi.org/10.1037/0022-3514.46.5.1097> 本身未直接点开(同类 APA 旧 DOI 均跳 psycnet 403),但 Crossref 与 Europe PMC 两个独立库均登记该 DOI

## 条目 14

- <https://api.crossref.org/works/10.1037/0022-3514.74.5.1252> → 已确认: Baumeister RF, Bratslavsky E, Muraven M, Tice DM (1998) Sự cạn kiệt cái tôi: Liệu bản ngã chủ động có phải là một nguồn lực hạn chế? J Pers Soc Psychol 74:1252-1265
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Ego%20depletion%3A%20is%20the%20active%20self%20a%20limited%20resource%22&format=json&resultType=core> → PMID 9599441,摘要原文: "Sự lựa chọn, phản ứng chủ động, tự điều chỉnh và các ý chí khác đều có thể dựa trên một nguồn lực nội tại chung." 
- <https://doi.org/10.1177/1745691616652873> → 302 到 SAGE,DOI 存在;SAGE 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/1745691616652873&format=json&resultType=core> → 已确认: Hagger MS, Chatzisarantis NLD, Alberts H, và cộng sự (2016) Một bản sao ghi nhận trước đa phòng thí nghiệm của hiệu ứng cạn kiệt cái tôi. Perspect Psychol Sci
  - 摘要原文:23 个实验室、2141 人;"kích thước của hiệu ứng cạn kiệt cái tôi nhỏ với khoảng tin cậy 95% (CI) bao gồm không (d = 0,04, 95% CI [-0,07, 0,15]" 
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0956797621989733&format=json&resultType=core> → 已确认: Vohs KD, Schmeichel BJ, Lohmann S, et al. (2021) Một bài kiểm tra mô hình đa điểm đã đăng ký trước về hiệu ứng cạn kiệt cái tôi. Psychol Sci
  - 摘要原文: "dự án đa phòng thí nghiệm đã đăng ký trước (k = 36; N = 3.531) ... Các xét nghiệm xác nhận cho kết quả không có ý nghĩa (d = 0,06)" 
  - 注:该 DOI 未经 doi.org 直接点开,靠 Europe PMC 登记确认

## 未确认项汇总

- 条目 1 原稿曾写「桌上/口袋/另一房间」「工作记忆与流体智力」，因未能在可打开的原文中逐字核对，已从条目中删去，只保留摘要原文支持的表述
- 条目 6 备注原稿「约一半打断是自己发起的」、条目 8 备注「最大亮度、连续数小时」、条目 10 「N = 47、工作 2 小时」同样因未逐字核对而删去
- 现版本 14 条「收益」栏的全部数字均有上列原文出处;没有条目需要标 TODO / 待核实
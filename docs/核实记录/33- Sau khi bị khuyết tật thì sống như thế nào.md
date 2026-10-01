# 第 33 节：残疾之后怎么活

2026-09-21。起因是读者提出全书缺残疾这一块，问要不要补身体、心理、生活三方面。

先查了已有覆盖：全书跟残疾有关的只有四处，且全在「证明和钱」这一侧——第 24 节第 10、11 条（伤残鉴定时机、残疾人证），第 7 节第 9 条（两项补贴），第 19 节（工伤劳动能力鉴定），第 17 节第 7、8 条（长期护理保险、长期卧床压疮，写的是老人不是残疾人）。也就是说书里回答了「怎么把残疾证明出来、能领哪笔钱」，完全没回答「证办下来之后日子怎么过」。缺的是康复、并发症、辅具、无障碍、就业、教育、心理、照护者、精神与智力残疾的监护这几块。和用户确认后新开第 33 节，五块全写，共 21 条。

定位：只写残疾已经发生之后。怎么防住致残在第 1、13 节，不重复。四种口径并行（死亡率、金钱、时间、人身自由），不做跨口径换算。

## 来源逐条核对

取数路径沿用本仓库的老办法：国务院政策文件库 JSON 接口（`searchfield=title`）取行政法规和部门文件，`flk.npc.gov.cn` 的搜索 API + docx 下载取全国人大制定的法律并用 `sxx` 字段确认现行有效，Europe PMC REST 取英文文献题录与摘要原文。Europe PMC 本轮多次返回 500/503，按精确标题重试可通。

### 中文法规（全部逐字取到全文并核对条款号）

| 文件 | 现行版本核实 | 用在 | 核对到的原文要点 |
| --- | --- | --- | --- |
| 精神卫生法 | flk `sxx=3`（有效），2018-04-27 修正；附则「本法自2013年5月1日起施行」 | 第 3 条 | 第三十条「精神障碍的住院治疗实行自愿原则」+ 两项情形逐字；第三十一条监护人同意；第三十二条三日内要求再次诊断、二名初次诊断医师以外的精神科执业医师、可自主委托鉴定；第三十五条不得实施住院治疗；第七十八条第一项赔偿责任。另取第二十八条（近亲属、所在单位、公安机关应当立即制止并送诊；医疗机构不得拒绝诊断）与第七十五条（医疗机构责任）写进备注 |
| 无障碍环境建设法 | flk `sxx=3`，2023-06-28 公布、2023-09-01 施行 | 第 10、13 条 | 第十八条既有设施改造计划；第十九条「对符合条件的残疾人、老年人家庭应当给予适当补贴」；第三十五条紧急呼叫系统无障碍功能；第四十六条导盲犬、导听犬、辅助犬；第六十二条投诉举报「应当及时处理并予以答复」；第六十三条检察建议与公益诉讼 |
| 残疾人保障法 | flk `sxx=3`，2018-10-26 修正 | 第 11、12、13、21 条 | 第三条禁止基于残疾的歧视；第三十六条税收优惠与免除行政事业性收费；第三十八条招用转正晋级等不得歧视、单位应改造劳动场所；第五十条盲人免费乘市内公交、免费携带随身必备辅助器具；第六十四条责令改正与可提起诉讼 |
| 民法典 | flk `sxx=3`，2021-01-01 施行 | 第 19、20 条 | 第二十一、二十二、二十三、二十四条（行为能力认定与恢复、有关组织清单）；第二十八条监护人法定顺序；第三十一条争议指定与临时监护；第三十三条意定监护；第一千一百八十八、一千一百八十九条监护人侵权责任与委托监护 |
| 法律援助法 | flk `sxx=3`，2021-08-20 公布、2022-01-01 施行 | 第 21 条 | 第四十二条第一项「无固定生活来源的未成年人、老年人、残疾人等特定群体」免予核查经济困难状况；第四十五条无障碍设施设备和服务 |
| 广告法 | flk `sxx=3`，2021-04-29 修正 | 第 6 条 | 第四条虚假或引人误解；第十六条四项禁止内容逐字；第十七条非医疗广告禁止涉及疾病治疗功能 |
| 道路交通安全法 | flk `sxx=3`，2021-04-29 修正 | 第 16 条备注 | 第五十八条残疾人机动轮椅车在非机动车道内最高时速不得超过十五公里；第一百一十九条第四项把残疾人机动轮椅车列入非机动车 |
| 个人所得税法 | flk `sxx=3`，2018-08-31 修正、2019-01-01 施行 | 第 12 条 | 第五条第一项「残疾、孤老人员和烈属的所得」可减征，幅度和期限由省级政府规定并报同级人大常委会备案 |
| 残疾预防和残疾人康复条例 | gov.cn 政策库，国务院令第 675 号，附则「本条例自2017年7月1日起施行」 | 第 7、9 条 | 第二十条社区康复的具体内容；第二十六条残疾儿童康复救助制度、重度残疾人护理补贴、「对基本型辅助器具配置给予补贴」 |
| 残疾人教育条例 | gov.cn 政策库，国务院令第 674 号，附则「本条例自2017年5月1日起施行」 | 第 15 条 | 第七条不得拒绝招收；第二十条残疾人教育专家委员会与评估、评估结果属隐私；第二十三条随班就读可适用普通课程但学习要求有适度弹性；第二十九条普通职业学校不得拒收；第五十二条国家教育考试的合理便利；送教上门与纳入学籍管理 |
| 残疾人就业条例 | gov.cn 政策库，国务院令第 488 号，附则「本条例自2007年5月1日起施行」 | 第 11、21 条 | 第四条禁止就业歧视；第八条「比例不得低于本单位在职职工总数的1.5%」；第九条达不到比例应缴纳保障金；第十三条在职残疾职工不得歧视 |
| 残疾人就业保障金征收使用管理办法 | gov.cn 政策库，财税〔2015〕72 号 | 第 11 条 | 第六条 1.5%；第八条保障金年缴纳额公式逐字；第十六条注册 3 年内、在职职工 20 人以下小微企业免征 |

| Ý kiến của Hội đồng Nhà nước về việc thiết lập hệ thống hỗ trợ phục hồi chức năng cho trẻ em khuyết tật | Cơ sở dữ liệu chính sách gov.cn, Guo Fa [2018] Số 20 | Điều 9 | Đối tượng nhận hỗ trợ: Năm nhóm trẻ khuyết tật từ 0–6 tuổi, trẻ tự kỷ, và ba loại gia đình, với phạm vi theo nghĩa đen; "Ở các vùng có điều kiện phù hợp, độ tuổi nhận hỗ trợ phục hồi chức năng cho trẻ khuyết tật có thể được mở rộng, và các hạn chế về điều kiện kinh tế của gia đình người nhận cũng có thể được nới lỏng"; Tiêu chuẩn đảm bảo tài trợ sẽ được xác định và điều chỉnh động bởi chính quyền địa phương ở cấp quận trở lên; Hệ thống giám sát nhập học và xuất cảnh cũng như danh sách đen cho các cơ sở được chỉ định |
| Quy định về quản lý các kỳ thi thống nhất quốc gia đối với tuyển sinh vào các cơ sở giáo dục đại học chính quy dành cho người khuyết tật | Cơ sở dữ liệu Chính sách gov.cn, Giảng dạy [2017] Số 4, ban hành và thực hiện ngày 07-04-2017 (Phiên bản tạm thời sửa đổi 2015) | Điều 14 | Điều 5: Mười hai mục thuận tiện hợp lý nguyên văn nguyên văn; Điều 6: Mở rộng 50%/30% trong hai trường hợp, nộp đơn nguyên văn từng văn bản; Điều 7: Thủ tục đăng ký và giấy chứng nhận khuyết tật thế hệ thứ hai trở lên; Điều 8: Xem xét lại với các phòng ban hành chính giáo dục tỉnh; Điều 9: Công thức chuyển đổi để miễn nghe ngoại ngữ; Điều 18: Các kỳ thi giáo dục quốc gia khác có thể tham chiếu đến |
| Quy định về việc đăng ký và sử dụng giấy phép lái xe cơ giới | gov.cn Công báo, Lệnh Bộ An ninh Công cộng số 172, "Có hiệu lực từ ngày 1 tháng 1 năm 2025" | Điều 16 | Phụ lục 1 Tình trạng thể chất Các mục 5, 6 và 8 nguyên văn (C5 tình trạng chi dưới và trên, mất một bàn tay hoặc mất chi dưới bên trái có thể áp dụng cho C2); Nhóm thị lực: Suy giảm một mắt, mắt xuất sắc 5.0 với trường nhìn ngang 150 độ; Loại thính lực 1: Máy trợ thính có thể áp dụng cho C1/C2 và phải đeo; Điều 78: Thân xe phải được trang bị biển hiệu đặc biệt cho người khuyết tật; Điều 85: Giấy chứng nhận tình trạng thể chất phải được cấp bởi các cơ quan y tế chuyên môn được các sở y tế tỉnh công nhận; Nộp trong vòng 30 ngày sau khi kết thúc chu kỳ khám sức khỏe và chấm điểm ba năm một lần |
| Kế hoạch thực hiện đẩy nhanh việc thiết lập hệ thống bảo hiểm chăm sóc dài hạn | Cơ sở dữ liệu chính sách gov.cn, do tám phòng ban trong đó có Cơ quan An ninh Y tế Quốc gia phát hành năm 2026 | Điều 8 | Mục tiêu bảo hiểm, Khuyết tật kéo dài 6 tháng, không có tiêu chuẩn khấu trừ, tỷ lệ thanh toán 50%/70%, giới hạn hàng năm không vượt quá 50% thu nhập khả dụng bình quân đầu người của cư dân đô thị và nông thôn năm trước, thời gian chờ cố định là 6 tháng. Tài liệu này giống với Điều 7 của Mục 17, và kết luận xác minh là nhất quán |

**Tại sao Điều 8 dám nói 'không chỉ dành cho người cao tuổi'**: Tài liệu này hoàn toàn nói về 'người được bảo hiểm' và 'người khuyết tật', không có ngưỡng tuổi trong văn bản; các yêu cầu về trình độ duy nhất là đóng góp bảo hiểm, khuyết tật kéo dài hơn 6 tháng, và đánh giá cũng như công nhận. Điều 7 của Mục 17 gọi đây là mục dành cho người cao tuổi vì mục đó nhắm vào người cao tuổi, không phải vì tài liệu giới hạn tuổi. 

### Văn học Anh (Tóm tắt gốc PMC châu Âu và so sánh tóm tắt, chi tiết)

| Tài liệu | Sử dụng trong | Số lượng đã được xác minh |
| --- | --- | --- |
| Krassioukov 2009, Arch Phys Med Rehabil 90(4):682-695, doi:10.1016/j.APMR.2008.10.017 | Bài 1 | Tìm kiếm trên Medline/CINAHL/EMBASE/PsycINFO bao gồm 31 nghiên cứu trong đó có 6 RCT; Quản lý không dùng thuốc trong giai đoạn cấp tính (tư thế ngồi thẳng, nới lỏng quần áo bó, loại bỏ các kích thích kích thích) là bằng chứng cấp độ 5; Prazosin cấp độ 1, nifedipine và prostaglandin E2 cấp độ 2; Các chiến lược phòng ngừa chủ yếu bao gồm cấp độ 4 và cấp độ 5 |
| Savic 2018, Spinal Cord 56(1):2-6, doi:10.1038/sc.2017.98 | Điều 2 | 2.304 trường hợp tSCI nhập viện từ 1991 đến 2010, sống sót trong năm đầu sau chấn thương, với các khiếm khuyết thần kinh khi xuất viện, theo dõi đến ngày 31-12-2014; 63 trường hợp (2,7%) bị thương do cố gắng tự tử; 533 ca tử vong, 4,2% do tự tử, 91% trong 10 năm đầu sau chấn thương; Tỷ lệ tử vong do tự tử chuẩn hóa theo độ tuổi là 62,5 trên 100.000 người mỗi năm (KTC 95% 36,4–88,6), so với 12,2 trên 100.000 ở Anh và xứ Wales năm 2014; Tỷ lệ tự tử dẫn đến chấn thương OR 4,32, tự tử OR 9,46, cả hai đều P<0,001 |
| Schulz & Beach 1999, JAMA 282(23):2215-2219, doi:10.1001/jama.282.23.2215 | Điều 4 | 1993–1998, với thời gian theo dõi trung bình 4,5 năm, bốn cộng đồng Mỹ, 392 người chăm sóc + 427 người không chăm sóc, từ 66–96 tuổi, tất cả sống cùng vợ/chồng; 103 ca tử vong (12,6%) trong vòng bốn năm; RR phụ thuộc chăm sóc 1,63 (khoảng tin cậy 95% 1,00–2,65), RR không lo âu 1,08 (0,61–1,90), vợ/chồng khuyết tật nhưng không chăm sóc RR 1,37 (0,73–2,58).
| Brienza 2010, J Am Geriatr Soc 58(12):2308-2314, doi:10.1111/j.1532-5415.2010.03168.x | Điều 5 | 12 viện dưỡng lão, tuyển 232 người từ 2004-06 đến 2008-05, ≥ 65 tuổi, ≥ 6 giờ ngồi xe lăn mỗi ngày, Braden ≤18; Tất cả đều được phân công xe lăn trước, sau đó được đào tạo ngẫu nhiên; Loét do gầy xương chóp: nhóm SFC 8 ca (6,7%) so với nhóm SPC: 1 ca (0,9%), P=.04; tổng cộng đau thần kinh tọa + cùng cụt 21 ca (17,6%) so với 12 ca (10,6%), P=.14 |
| Langhorne & Ramachandra 2020, Cơ sở dữ liệu Cochrane Syst Rev 4:CD000197, doi:10.1002/14651858.CD000197.pub4 | Điều 17 | 29 thử nghiệm, 5.902 người tham gia; Theo dõi cuối cùng (trung vị 1 năm): kết quả kém OR 0,77 (0,69–0,87), tử vong OR 0,76 (0,66–0,88), tử vong hoặc phụ thuộc OR 0,75 (0,66–0,85), đều chất lượng trung bình; Sự khác biệt tuyệt đối: "cứ 100 người tham gia... thêm hai người sống sót, sáu người sống tại nhà, và sáu người khác sống độc lập」 |
| Nhóm hợp tác thử nghiệm AVERT 2015, Lancet 386(9988):46-55, doi:10.1016/S0140-6736(15)60690-0 | Điều 17 | 56 đơn vị đột quỵ cấp trên 5 quốc gia, 2.104 bệnh nhân; Kết quả tốt trong 3 tháng (mRS 0–2): 480 (46%) so với 525 (50%), điều chỉnh OR 0,73 (0,59–0,90), P=0,004; Tử vong: 88 so với 72, OR 1,34 (0,93–1,93), P=0,113 |
| Lin 2023, Lancet 402(10404):786-797, doi:10.1016/S0140-6736(23)01406-X | Điều 18 | ACHIEVE, 4 cộng đồng tại Hoa Kỳ, 977 người, từ 70–84 tuổi, mất thính lực chưa được điều trị; 3 năm thay đổi nhận thức tổng thể: nhóm can thiệp −0.200 (−0.256 đến −0.144) so với nhóm đối chứng −0.202 (−0.258 đến −0.145), sự khác biệt 0.002 (−0.077 đến 0.081), P=0.96; phân tích nhạy cảm trước khi mắc các tương tác giữa hai quần thể nguồn P=0.010; không có tác dụng phụ nghiêm trọng liên quan đến nghiên cứu |
| WHO. Khuyết tật và sức khỏe (bảng thông tin) | Giới thiệu | 「Ước tính có khoảng 1,3 tỷ người trải qua khuyết tật đáng kể. Con số này chiếm 16% dân số thế giới, tức 1 trong 6 chúng ta.」「Một số người khuyết tật tử vong sớm hơn đến 20 năm so với người không khuyết tật.」「Người khuyết tật có nguy cơ mắc các bệnh như trầm cảm, hen suyễn, tiểu đường, đột quỵ, béo phì hoặc sức khỏe răng miệng kém gấp đôi.」 |

**Tuyên bố trực tuyến rằng "máy trợ thính giảm suy giảm nhận thức 48%" không được đưa vào văn bản chính**. Con số này đến từ nhóm ARIC của ACHIEVE, với kết quả chính là không có sự khác biệt giữa hai nhóm (P=0,96). Mục 18 được ghi là kết quả chính và nguồn gốc của tuyên bố này được nêu trong phần nhận xét, được đánh dấu là "Gây tranh cãi." 

## Hướng dẫn phân loại

- Điều 1 Định nghĩa B: Ba hành động tại chỗ chỉ có dữ liệu đồng thuận lâm sàng và sinh lý học (Cấp độ 5). Bản tổng quan cho biết hầu hết các can thiệp chỉ được hỗ trợ bởi các nghiên cứu không kiểm soát. Thang lợi ích là 'lớn'—nó ngăn ngừa các hậu quả tử vong như xuất huyết não do tăng huyết áp kéo dài; Chi phí là bằng không, nhưng kết hợp thành 'cực kỳ cao'. 
- Điều 4 quy định A (Hàng đợi dự kiến, với các số có thể định lượng), nhưng được đánh dấu là 'Gây tranh cãi': RR 1.63 có giới hạn dưới KTC 95% chính xác là 1.00. 
- Điều 5 Bối cảnh B: Mẫu 232 người, điểm cuối chính P = 0,04 vừa vượt qua ranh giới, không có sự khác biệt giữa các điểm cuối phụ, và dân số là cư dân cao tuổi của viện dưỡng lão. Lý do phân loại giống như Điều 8 (Vết loét do áp lực) trong Mục 17. 
- Điều 10 quy định B: Luật chỉ quy định 'trợ cấp thích hợp sẽ được cấp'; không có con số quốc gia thống nhất; số tiền và điều kiện nhận trợ cấp hoàn toàn do chính quyền địa phương quyết định. 
- Điều 17 và 18 Mục A và được đánh dấu "Tranh cãi": Bản thân bằng chứng là một RCT lớn và một đánh giá Cochrane, với các điểm gây tranh cãi là "bằng chứng đột quỵ được suy rộng sang các nguyên nhân khuyết tật khác" và "kết quả chính âm tính nhưng số lượng nhóm con lưu hành." 
- Điều 12: Thang trợ cấp được định nghĩa là "Nhỏ": Luật không quy định con số; mức giảm ở mỗi tỉnh chủ yếu dao động từ vài trăm đến vài nghìn nhân dân tệ. 
- Tất cả các quy định khác của Trung Quốc đều là A: Các điều khoản có thể được kiểm tra nguyên văn. 

## Quy mô dân số người thụ hưởng

Mạch chính của phần này là khuyết tật do bản thân hoặc thành viên gia đình gây ra, thuộc các nhóm (1) và (2). Ba ký hiệu riêng biệt: người thụ hưởng mục 4 (người chăm sóc) là chính người đọc; Người thụ hưởng mục 9 và 15 (hỗ trợ phục hồi chức năng, nhập viện) là trẻ em, thuộc nhóm (2). Không có mục nào liên quan đến mục (3) hoặc (4). 

## Trích dẫn và Thống kê

Tất cả 21 mục trong phần này đều được thêm vào cuối tệp và không được chèn vào các chương hiện có, do đó số mục cho các phần khác sẽ không bị hoãn lại. 'node tools/check-refs.mjs --check' đã vượt qua, tất cả các tham chiếu ở 383 đều chỉ đúng và có các neo; 'docs/reference-reference.md' khác biệt không thay đổi ngoại trừ dòng được thêm vào ở cuối và tổng số dòng, xác nhận không có tham chiếu hiện có bị lệnh. 

Trong quá trình soạn thảo, ba điểm neo đã được thay đổi: Điều 11 của phần này ban đầu được viết là "(Việc làm tương xứng)", không có trong tiêu đề mục tiêu; nó được đánh giá như một số bài viết sơ sài bằng '--check' và đổi thành "(Giải thích Chủ động về Chứng nhận)"; Các điểm neo cho Điều 7 "(Danh sách Liên đoàn Người Khuyết tật)" và Điều 10 "(Cải tạo Tiếp cận Nhà ở)" là yếu, nên cả hai đều được thay đổi thành cách diễn đạt gốc trong tiêu đề. 

Cuốn sách có 552 → 573 mục: cấp A 366 → 384, cấp B 136 → 139, cấp C 50 không thay đổi, tranh chấp → 51, TODO → 38, liên kết 1144 → 1173. Hiệu suất chi phí cực cao 103 → 105 (18%), → cao 265 (46%), trung bình → 203 (36%). Bảng câu hỏi README thêm một dòng (32 dòng so với 32 thành 33 dòng), mục lục thêm mục 33, thay "32 tài liệu" thành 33; đổi "32 phần" thành "33 phần" trong index.html, và đổi "32 tài liệu" thành "33 tài liệu." 

Ngoài ra, hai thay đổi đã được thực hiện đối với 'tools/sync-stats.ps1': Thứ nhất, chế độ khớp cho các mục tiêu đề ban đầu cố định số lượng phần ở 32, nên việc thêm phần mới sẽ gây lỗi và đã thay đổi để tính số lượng tệp từ 'book/*.md' là '$sections'; Thứ hai, phần trăm trong ba mức hiệu suất chi phí ban đầu được làm tròn, nhưng vòng này tính 18+46+35=99, và chuyển sang phương pháp phần dư tối đa để đảm bảo tổng số là chính xác 100. 

## Những điều không được viết trong

- **Nhiễm trùng đường tiết niệu và quản lý bàng quang**: Một biến chứng phổ biến sau chấn thương tủy sống, nhưng tôi không tìm được nguồn gốc có thể xác minh từng chữ và cung cấp con số, nên tôi sẽ không đề cập đến vòng này và sẽ không dùng các giải thích thông thường trong bài đánh giá để bổ sung các con số.
- **Dịch vụ nhận nuôi và chăm sóc tạm thời**: Luật Bảo đảm Quyền lợi Người Khuyết tật chỉ có câu "Nhà nước khuyến khích và hỗ trợ các lực lượng xã hội mở các cơ sở nuôi dưỡng, chăm sóc người khuyết tật" và câu cơ sở chăm sóc không được xúc phạm, ngược đãi hoặc bỏ rơi, không có đường dẫn và tiêu chuẩn để thực hiện, viết vào cũng chỉ như một câu ngắn. Chương trình Sunshine Home của Liên đoàn Người khuyết tật Trung Quốc thuộc dự án bộ ngành, không được lưu trong kho chính sách. 
- **Căn cứ quản lý các phương pháp điều trị "chữa khỏi" như tế bào gốc**: 《Quy định về nghiên cứu lâm sàng tế bào gốc》 không thể tra cứu trong kho chính sách gov.cn, toàn bộ trang nhc.gov.cn báo lỗi 412, không thể lấy được văn bản gốc để so sánh từng chữ. Điều 6 nên tham chiếu từ Điều 16, 17 của 《Luật Quảng cáo》, các căn cứ mà độc giả có thể dùng (xem họ có dám nói hết hay không) lại trực tiếp hơn. 
- **Tổng số người khuyết tật ở Trung Quốc**: Con số thường được trích dẫn là 85 triệu xuất phát từ ước tính khảo sát mẫu lần hai năm 2006, đã quá lâu. Tại buổi họp báo của Văn phòng Thông tin Quốc vụ viện ngày 27-07-2026 có nhắc đến 《Báo cáo thống kê phát triển sự nghiệp người khuyết tật năm 2025》 với "Năm 2025 cả nước có thêm 448.000 người khuyết tật có giấy chứng nhận được tuyển dụng" và "80% người khuyết tật sống ở nông thôn", nhưng toàn bộ báo cáo thống kê không tìm được trong kho chính sách. Vì vậy, phần dẫn nhập chỉ dùng số liệu toàn cầu của WHO, không ghi tổng số của Trung Quốc.
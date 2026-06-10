// 1. KHO DỮ LIỆU TỔNG HỢP
const allQuizzes = {
   "van-lang": [
        { question: "Vị vua đầu tiên của nước Văn Lang là ai?", options: ["Kinh Dương Vương", "Hùng Vương", "An Dương Vương", "Lạc Long Quân"], correct: 1, explanation: "Hùng Vương là người lập ra nhà nước Văn Lang - nhà nước đầu tiên trong lịch sử Việt Nam." },
        { question: "Kinh đô của nước Văn Lang được đặt tại đâu?", options: ["Phong Châu (Phú Thọ)", "Cổ Loa (Hà Nội)", "Hoa Lư (Ninh Bình)", "Phú Xuân (Huế)"], correct: 0, explanation: "Vua Hùng đóng đô ở Phong Châu (nay thuộc tỉnh Phú Thọ)." },
        { question: "Nước Văn Lang trải qua bao nhiêu đời vua Hùng?", options: ["10 đời", "12 đời", "18 đời", "20 đời"], correct: 2, explanation: "Lịch sử ghi chép nước Văn Lang có 18 đời vua Hùng nối ngôi nhau trị vì." },
        { question: "Sự tích nào giải thích nguồn gốc 'Con Rồng Cháu Tiên'?", options: ["Sơn Tinh Thủy Tinh", "Bánh chưng bánh giầy", "Thạch Sanh", "Lạc Long Quân và Âu Cơ"], correct: 3, explanation: "Sự tích Lạc Long Quân (Rồng) và Âu Cơ (Tiên) đẻ ra bọc trăm trứng là nguồn gốc của dân tộc ta." },
        { question: "Người đứng đầu các bộ trong nhà nước Văn Lang gọi là gì?", options: ["Lạc hầu", "Lạc tướng", "Bồ chính", "Quan lang"], correct: 1, explanation: "Dưới vua là Lạc hầu (văn), Lạc tướng (võ). Người đứng đầu các bộ là Lạc tướng." },
        { question: "Ai lãnh đạo Âu Lạc đánh bại quân xâm lược nhà Tần?", options: ["Thục Phán", "Hùng Vương", "Hai Bà Trưng", "Lý Bí"], correct: 0, explanation: "Thục Phán đã lãnh đạo người dân Tây Âu và Lạc Việt đánh bại quân Tần xâm lược." },
        { question: "Thục Phán lên ngôi lấy hiệu là gì?", options: ["Hùng Vương", "An Dương Vương", "Triệu Đà", "Đinh Tiên Hoàng"], correct: 1, explanation: "Sau khi thắng quân Tần, Thục Phán lên ngôi vua, lấy hiệu là An Dương Vương." },
        { question: "Tên nước ta dưới thời An Dương Vương là gì?", options: ["Văn Lang", "Đại Việt", "Âu Lạc", "Vạn Xuân"], correct: 2, explanation: "An Dương Vương hợp nhất hai vùng đất Lạc Việt và Tây Âu, đặt tên nước là Âu Lạc." },
        { question: "Thành Cổ Loa có kiến trúc độc đáo theo hình gì?", options: ["Hình vuông", "Hình tròn", "Hình xoáy trôn ốc", "Hình tam giác"], correct: 2, explanation: "Thành Cổ Loa được xây dựng với các vòng thành xoáy như hình trôn ốc." },
        { question: "Loại vũ khí huyền thoại gắn liền với An Dương Vương?", options: ["Gươm thần", "Nỏ thần (Nỏ Liên Châu)", "Thương bạc", "Súng thần công"], correct: 1, explanation: "An Dương Vương nhờ có Nỏ Liên Châu (Nỏ thần) của Cao Lỗ chế tạo mà giữ được đất nước." },
        { question: "Di chỉ khảo cổ tiêu biểu của thời đại kim khí Việt Nam?", options: ["Đồ đá cũ", "Văn hóa Đông Sơn", "Văn hóa Sa Huỳnh", "Văn hóa Óc Eo"], correct: 1, explanation: "Văn hóa Đông Sơn là đỉnh cao của thời đại kim khí với kỹ thuật đúc đồng tinh xảo." },
        { question: "Vật phẩm là biểu tượng quyền lực văn hóa thời bấy giờ?", options: ["Trống đồng Ngọc Lũ", "Cồng chiêng", "Tượng gỗ", "Ấm trà"], correct: 0, explanation: "Trống đồng là biểu tượng quyền lực và trình độ kỹ thuật tuyệt vời của người Việt cổ." },
        { question: "Nghề chính của cư dân Văn Lang - Âu Lạc là gì?", options: ["Săn bắt", "Thủ công nghiệp", "Trồng lúa nước", "Buôn bán"], correct: 2, explanation: "Người Việt cổ cư trú ở đồng bằng sông Hồng, làm nghề chính là trồng lúa nước." },
        { question: "Sự tích chống giặc ngoại xâm thời Hùng Vương thứ 6?", options: ["Sự tích Trầu Cau", "Thánh Gióng", "Sự tích Dưa Hấu", "Sự tích quả bầu"], correct: 1, explanation: "Thánh Gióng đại diện cho tinh thần quật cường chống giặc Ân thời vua Hùng thứ 6." },
        { question: "Con gái của An Dương Vương trong truyền thuyết là ai?", options: ["Mỵ Nương", "Mỵ Châu", "Tiên Dung", "Ngọc Hoa"], correct: 1, explanation: "Mỵ Châu là con gái An Dương Vương, gắn liền với mối tình bi kịch với Trọng Thủy." },
        { question: "Ai là người đã mưu hại Mỵ Châu để lấy cắp nỏ thần?", options: ["Trọng Thủy", "Triệu Đà", "Cao Lỗ", "Lý Ông Trọng"], correct: 0, explanation: "Trọng Thủy là con trai Triệu Đà, lợi dụng tình cảm của Mỵ Châu để đánh tráo nỏ thần." },
        { question: "Nhà nước Văn Lang ra đời vào khoảng thời gian nào?", options: ["Thế kỷ VII TCN", "Thế kỷ III TCN", "Năm 938", "Năm 40 TCN"], correct: 0, explanation: "Nhà nước Văn Lang được hình thành vào khoảng thế kỷ thứ 7 trước Công nguyên." },
        { question: "Tục làm bánh chưng, bánh giầy có từ đời vua Hùng thứ mấy?", options: ["Đời thứ 1", "Đời thứ 6", "Đời thứ 18", "Đời thứ 10"], correct: 1, explanation: "Tục này gắn liền với Lang Liêu vào thời vua Hùng thứ 6 sau khi thắng giặc Ân." },
        { question: "Người chế tạo ra Nỏ thần giúp An Dương Vương là ai?", options: ["Trần Hưng Đạo", "Cao Lỗ", "Yết Kiêu", "Thạch Sanh"], correct: 1, explanation: "Cao Lỗ là vị tướng giỏi đã giúp An Dương Vương chế tạo ra nỏ bắn một lần được nhiều phát." },
        { question: "Lễ hội mùng 10 tháng 3 âm lịch hàng năm là gì?", options: ["Lễ hội Gióng", "Giỗ Tổ Hùng Vương", "Lễ hội chùa Hương", "Lễ hội gò Đống Đa"], correct: 1, explanation: "'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba'." },
        { question: "Loại trang phục phổ biến của nam giới thời Văn Lang?", options: ["Mặc áo dài", "Ở trần, đóng khố", "Mặc comple", "Mặc áo tứ thân"], correct: 1, explanation: "Do khí hậu nóng ẩm, nam giới thời bấy giờ thường ở trần và đóng khố." },
        { question: "Cư dân Văn Lang thường ở loại nhà nào?", options: ["Nhà tầng", "Nhà biệt thự", "Nhà sàn", "Nhà hang"], correct: 2, explanation: "Nhà sàn giúp tránh thú dữ và ẩm thấp, là kiến trúc tiêu biểu trên mặt trống đồng." },
        { question: "Sự tích 'Mai An Tiêm' gắn liền với loại quả nào?", options: ["Quả bưởi", "Quả dưa hấu", "Quả khế", "Quả cam"], correct: 1, explanation: "Mai An Tiêm bị đày ra đảo hoang và đã tìm thấy giống dưa hấu quý." },
        { question: "Thành Cổ Loa hiện nay thuộc huyện nào của Hà Nội?", options: ["Đông Anh", "Sóc Sơn", "Gia Lâm", "Ba Vì"], correct: 0, explanation: "Khu di tích thành Cổ Loa hiện nay nằm ở huyện Đông Anh, Hà Nội." },
        { question: "Tín ngưỡng chính của người Việt cổ là gì?", options: ["Phật giáo", "Thiên chúa giáo", "Thờ cúng tổ tiên", "Hồi giáo"], correct: 2, explanation: "Thờ cúng tổ tiên và thờ các vị thần tự nhiên là tín ngưỡng lâu đời nhất của người Việt." },
        { question: "Sơn Tinh dùng gì để cưới được Mỵ Nương?", options: ["Vàng bạc", "Voi 9 ngà, Gà 9 cựa, Ngựa 9 hồng mao", "Kim cương", "Trân châu"], correct: 1, explanation: "Đây là các lễ vật quý hiếm mà vua Hùng yêu cầu để gả công chúa Mỵ Nương." },
        { question: "Nước Âu Lạc bị Triệu Đà thôn tính vào năm nào?", options: ["Năm 179 TCN", "Năm 111 TCN", "Năm 208 TCN", "Năm 40"], correct: 0, explanation: "Triệu Đà đã dùng kế 'con rể' để lấy cắp bí mật nỏ thần và đánh chiếm Âu Lạc năm 179 TCN." },
        { question: "Người đứng đầu các bản làng thời Văn Lang gọi là gì?", options: ["Lạc tướng", "Quan lang", "Bồ chính", "Thổ tù"], correct: 2, explanation: "Bồ chính là người đứng đầu các đơn vị làng xã thời Văn Lang." },
        { question: "Bánh giầy có hình tròn tượng trưng cho cái gì?", options: ["Đất", "Trời", "Mặt trăng", "Sự đoàn kết"], correct: 1, explanation: "Theo quan niệm xưa, bánh giầy hình tròn tượng trưng cho Trời, bánh chưng hình vuông tượng trưng cho Đất." },
        { question: "Vị thần giúp An Dương Vương xây thành Cổ Loa?", options: ["Thần Mặt Trời", "Thần Kim Quy", "Thần núi", "Thần biển"], correct: 1, explanation: "Thần Kim Quy (Rùa Vàng) đã giúp vua trừ yêu quái để xây thành và tặng móng nỏ." }
    ],
   "bac-thuoc": [
        { question: "Cuộc khởi nghĩa Hai Bà Trưng diễn ra vào năm nào?", options: ["Năm 40", "Năm 938", "Năm 248", "Năm 542"], correct: 0, explanation: "Hai Bà Trưng phất cờ khởi nghĩa tại Hát Môn vào năm 40 để đền nợ nước, trả thù nhà." },
        { question: "Ai là người lãnh đạo cuộc khởi nghĩa năm 248 chống lại quân Ngô?", options: ["Trưng Trắc", "Bà Triệu", "Lý Bí", "Mai Thúc Loan"], correct: 1, explanation: "Bà Triệu (Triệu Thị Trinh) lãnh đạo nhân dân khởi nghĩa chống quân Ngô tại vùng núi Nưa." },
        { question: "Lý Bí lên ngôi hoàng đế, đặt tên nước là gì?", options: ["Đại Việt", "Vạn Xuân", "Âu Lạc", "Đại Cồ Việt"], correct: 1, explanation: "Năm 544, sau khi thắng quân Lương, Lý Bí lên ngôi và đặt tên nước là Vạn Xuân." },
        { question: "Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?", options: ["Khúc Thừa Dụ", "Dương Đình Nghệ", "Ngô Quyền", "Lê Hoàn"], correct: 2, explanation: "Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng, kết thúc nghìn năm Bắc thuộc." },
        { question: "Nghệ thuật quân sự đặc sắc nhất của Ngô Quyền trên sông Bạch Đằng là gì?", options: ["Hỏa công", "Vây thành", "Cắm cọc gỗ đầu nhọn", "Đánh giáp lá cà"], correct: 2, explanation: "Lợi dụng thủy triều, Ngô Quyền đã cho cắm cọc gỗ đầu bịt sắt dưới lòng sông để tiêu diệt thuyền địch." },
        { question: "Ai được nhân dân tôn xưng là 'Dạ Trạch Vương'?", options: ["Triệu Quang Phục", "Lý Nam Đế", "Phùng Hưng", "Mai Hắc Đế"], correct: 0, explanation: "Triệu Quang Phục chọn vùng đầm lầy Dạ Trạch làm căn cứ kháng chiến chống quân Lương." },
        { question: "Cuộc khởi nghĩa của Mai Thúc Loan còn được gọi là gì?", options: ["Khởi nghĩa Lam Sơn", "Khởi nghĩa Mai Hắc Đế", "Khởi nghĩa Bãi Sậy", "Khởi nghĩa Tây Sơn"], correct: 1, explanation: "Mai Thúc Loan có nước da đen, khi lên ngôi được tôn là Mai Hắc Đế (Vua Đen nhà Mai)." },
        { question: "Phùng Hưng được nhân dân suy tôn là gì?", options: ["Bình Tây Đại Nguyên Soái", "Bố Cái Đại Vương", "Thiên vương", "Hưng Đạo Vương"], correct: 1, explanation: "Bố Cái Đại Vương có nghĩa là cha mẹ của nhân dân, thể hiện sự kính trọng với Phùng Hưng." },
        { question: "Chính sách cai trị thâm độc nhất của các triều đại phong kiến phương Bắc là gì?", options: ["Thuế nặng", "Bắt đi lính", "Đồng hóa văn hóa", "Cống nạp sản vật"], correct: 2, explanation: "Đồng hóa văn hóa nhằm biến người Việt thành người Hán là chính sách nguy hiểm nhất." },
        { question: "Nghề thủ công nào mới xuất hiện và phát triển mạnh thời Bắc thuộc?", options: ["Đúc đồng", "Làm giấy, làm gốm tráng men", "Dệt vải mùng", "Đan lát"], correct: 1, explanation: "Tiếp thu kỹ thuật từ phương Bắc, nghề làm giấy và gốm tráng men đã phát triển trong thời kỳ này." },
        { question: "Khúc Thừa Dụ đã tận dụng cơ hội nào để giành quyền tự chủ năm 905?", options: ["Nhà Đường suy yếu", "Nhà Hán sụp đổ", "Nhà Tần diệt vong", "Nhà Minh rút quân"], correct: 0, explanation: "Nhân lúc nhà Đường suy yếu, Khúc Thừa Dụ chiếm thành Đại La, tự xưng Tiết độ sứ." },
        { question: "Ai là người khởi xướng cuộc khởi nghĩa chống quân Lương năm 542?", options: ["Triệu Túc", "Lý Bí", "Tinh Thiều", "Phạm Tu"], correct: 1, explanation: "Lý Bí (Lý Nam Đế) phất cờ khởi nghĩa khiến hào kiệt khắp nơi kéo về hưởng ứng." },
        { question: "Trưng Trắc và Trưng Nhị là con gái của ai?", options: ["Lạc tướng Mê Linh", "Vua Hùng", "An Dương Vương", "Thái thú Tô Định"], correct: 0, explanation: "Hai Bà Trưng là dòng dõi Lạc tướng Mê Linh, thừa hưởng tinh thần yêu nước quật cường." },
        { question: "Địa danh nào là căn cứ chính của cuộc khởi nghĩa Bà Triệu?", options: ["Núi Nưa (Thanh Hóa)", "Dạ Trạch", "Đường Lâm", "Hát Môn"], correct: 0, explanation: "Bà Triệu đã xây dựng căn cứ và chỉ huy các trận đánh tại vùng núi Nưa (Triệu Sơn, Thanh Hóa)." },
        { question: "Mai Thúc Loan chọn vùng đất nào làm căn cứ?", options: ["Sa Nam (Nghệ An)", "Phong Châu", "Mê Linh", "Cổ Loa"], correct: 0, explanation: "Khởi nghĩa Mai Thúc Loan nổ ra ở vùng Sa Nam (Nghệ An) rồi lan rộng ra cả nước." },
        { question: "Ai là người đã giết chết thái thú Tô Định?", options: ["Trưng Nhị", "Trưng Trắc", "Không ai cả (hắn bỏ chạy)", "Thi Sách"], correct: 2, explanation: "Thái thú Tô Định tham sống sợ chết, cắt tóc cạo râu chạy trốn về phương Bắc." },
        { question: "Tên gọi khác của Lý Bí là gì?", options: ["Lý Phật Tử", "Lý Thiên Bảo", "Lý Bôn", "Lý Công Uẩn"], correct: 2, explanation: "Lý Bí còn có tên gọi khác là Lý Bôn, xuất thân từ hào trưởng địa phương." },
        { question: "Sau khi giành độc lập năm 938, Ngô Quyền đóng đô ở đâu?", options: ["Hoa Lư", "Cổ Loa", "Đại La", "Phú Xuân"], correct: 1, explanation: "Ngô Quyền chọn Cổ Loa làm kinh đô, khẳng định nối tiếp truyền thống từ thời An Dương Vương." },
        { question: "Cuộc khởi nghĩa Hai Bà Trưng nhận được sự ủng hộ chủ yếu từ ai?", options: ["Chỉ có nam giới", "Chỉ có binh lính", "Đông đảo nhân dân, đặc biệt là phụ nữ", "Quân đội nhà Hán"], correct: 2, explanation: "Khởi nghĩa Hai Bà Trưng quy tụ rất nhiều nữ tướng và được nhân dân khắp nơi ủng hộ." },
        { question: "Dưới thời Bắc thuộc, vùng đất nước ta bị chia thành các gì?", options: ["Tỉnh", "Quận, huyện", "Bang", "Tiểu quốc"], correct: 1, explanation: "Nhà Hán chia nước ta thành các quận, huyện để dễ bề cai trị và bóc lột." },
        { question: "Trận quyết chiến chiến lược trên sông Bạch Đằng năm 938 đánh tan quân nào?", options: ["Quân Nam Hán", "Quân Tống", "Quân Nguyên", "Quân Thanh"], correct: 0, explanation: "Trận Bạch Đằng năm 938 đại bại quân Nam Hán, mở ra kỷ nguyên độc lập lâu dài." },
        { question: "Ai đã dâng sớ xin vua Đường giảm nhẹ thuế khóa cho dân Việt?", options: ["Mai Thúc Loan", "Khúc Thừa Dụ", "Phùng Hưng", "Khúc Hạo"], correct: 3, explanation: "Họ Khúc (đặc biệt là Khúc Hạo) đã có nhiều chính sách khoan thư sức dân, giảm nhẹ tô thuế." },
        { question: "Chức vụ mà Khúc Thừa Dụ tự xưng năm 905 là gì?", options: ["Hoàng đế", "Tiết độ sứ", "Vương", "Thái thú"], correct: 1, explanation: "Ông tự xưng Tiết độ sứ, một chức quan của nhà Đường nhưng thực chất là giành quyền tự chủ." },
        { question: "Câu nói: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ' là của ai?", options: ["Trưng Trắc", "Bà Triệu", "Thái hậu Dương Vân Nga", "Bùi Thị Xuân"], correct: 1, explanation: "Câu nói hào hùng của Bà Triệu khẳng định ý chí chiến đấu không chịu làm tì thiếp cho người." },
        { question: "Anh em nhà họ Khúc đã thực hiện chính sách gì để khoan thư sức dân?", options: ["Tăng thuế", "Chia lại ruộng đất, giảm tô thuế", "Bắt đi phu", "Cấm buôn bán"], correct: 1, explanation: "Chính sách của họ Khúc nhằm bồi đắp sức dân sau nhiều năm bị đô hộ bóc lột." },
        { question: "Cuộc khởi nghĩa Phùng Hưng diễn ra ở đâu?", options: ["Mê Linh", "Đường Lâm (Hà Nội)", "Thanh Hóa", "Nghệ An"], correct: 1, explanation: "Phùng Hưng là người làng Đường Lâm, Hà Nội, phất cờ khởi nghĩa chống quân Đường." },
        { question: "Vị tướng quân nào của Nam Hán tử trận trên sông Bạch Đằng?", options: ["Hoằng Tháo", "Ô Mã Nhi", "Thoát Hoan", "Liễu Thăng"], correct: 0, explanation: "Lưu Hoằng Tháo - con trai vua Nam Hán - đã tử trận khi thuyền va vào bãi cọc gỗ." },
        { question: "Triều đại phương Bắc nào đầu tiên đô hộ nước ta?", options: ["Nhà Tần", "Nhà Hán", "Nhà Triệu (theo quan điểm mới)", "Nhà Tùy"], correct: 1, explanation: "Nhà Hán là triều đại bắt đầu thời kỳ Bắc thuộc dài đằng đẵng sau khi chiếm Âu Lạc." },
        { question: "Lý Nam Đế xây dựng chùa gì ở Hà Nội?", options: ["Chùa Một Cột", "Chùa Trấn Quốc (Khai Quốc)", "Chùa Hương", "Chùa Bái Đính"], correct: 1, explanation: "Chùa Khai Quốc (nay là chùa Trấn Quốc) được xây dựng dưới thời Lý Nam Đế." },
        { question: "Chiến thắng Bạch Đằng năm 938 có ý nghĩa gì?", options: ["Mở ra thời kỳ độc lập lâu dài", "Kết thúc nhà Lý", "Bắt đầu thời Bắc thuộc", "Đánh bại quân Mỹ"], correct: 0, explanation: "Đây là cột mốc vĩ đại kết thúc hơn 1000 năm nô lệ phong kiến phương Bắc." }
    ],
  "ly-tran": [
        { question: "Lý Thường Kiệt lãnh đạo cuộc kháng chiến chống quân xâm lược nào?", options: ["Quân Tống", "Quân Nguyên", "Quân Thanh", "Quân Minh"], correct: 0, explanation: "Lý Thường Kiệt là linh hồn của cuộc kháng chiến chống quân Tống xâm lược (1075 - 1077)." },
        { question: "Người thầy giáo được mệnh danh là 'Vạn thế sư biểu' thời Trần là ai?", options: ["Nguyễn Hiền", "Chu Văn An", "Lê Văn Hưu", "Mạc Đĩnh Chi"], correct: 1, explanation: "Chu Văn An là nhà giáo mẫu mực, được tôn vinh là 'Người thầy của muôn đời'." },
        { question: "Vị vua cuối cùng của triều đại nhà Lý là ai?", options: ["Lý Huệ Tông", "Lý Cao Tông", "Lý Chiêu Hoàng", "Lý Anh Tông"], correct: 2, explanation: "Lý Chiêu Hoàng là nữ hoàng duy nhất, sau đó bà nhường ngôi cho chồng là Trần Cảnh, kết thúc triều Lý." },
        { question: "Bộ luật thành văn đầu tiên của nước ta thời Lý có tên là gì?", options: ["Luật Gia Long", "Luật Hồng Đức", "Hình thư", "Quốc triều hình luật"], correct: 2, explanation: "Năm 1042, nhà Lý ban hành bộ 'Hình thư', bộ luật thành văn đầu tiên của Việt Nam." },
        { question: "Thái sư có công lớn trong việc thành lập nhà Trần là ai?", options: ["Trần Thủ Độ", "Trần Quang Khải", "Trần Nhật Duật", "Trần Quốc Toản"], correct: 0, explanation: "Trần Thủ Độ là người đạo diễn cuộc chuyển giao quyền lực từ nhà Lý sang nhà Trần năm 1226." },
        { question: "Lý Thường Kiệt đã sử dụng chiến thuật gì khi đánh quân Tống năm 1075?", options: ["Vây thành", "Tiên phát chế nhân", "Vườn không nhà trống", "Du kích"], correct: 1, explanation: "Chiến thuật đánh sang đất Tống để phá hủy kho tàng của giặc được gọi là 'Tiên phát chế nhân'." },
        { question: "Vị trạng nguyên trẻ tuổi nhất lịch sử Việt Nam (13 tuổi) thời Trần là ai?", options: ["Mạc Đĩnh Chi", "Nguyễn Hiền", "Lương Thế Vinh", "Lê Quý Đôn"], correct: 1, explanation: "Nguyễn Hiền đỗ Trạng nguyên năm 1247 khi mới 13 tuổi, được gọi là Trạng Hiền." },
        { question: "Tướng giặc nào đã phải chui vào ống đồng để chạy trốn về nước?", options: ["Toa Đô", "Ô Mã Nhi", "Thoát Hoan", "Liễu Thăng"], correct: 2, explanation: "Thoát Hoan kinh hãi trước sức mạnh quân Trần nên phải chui vào ống đồng để lính khiêng chạy trốn." },
        { question: "Công chúa nhà Trần nào đã được gả cho vua Chăm-pa để đổi lấy hai châu Ô, Lý?", options: ["Công chúa Ngọc Hân", "Công chúa Huyền Trân", "Công chúa An Tư", "Công chúa Thiên Thành"], correct: 1, explanation: "Huyền Trân Công Chúa đã vì đại nghĩa mà gả cho vua Chế Mân, giúp bờ cõi mở thêm hai châu Ô và Lý." },
        { question: "Ai là người chỉ huy trận chiến trên sông Bạch Đằng năm 1288?", options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Quốc Tuấn", "Trần Quang Khải"], correct: 2, explanation: "Hưng Đạo Vương Trần Quốc Tuấn đã tái hiện chiến thắng cọc gỗ trên sông Bạch Đằng đánh tan quân Nguyên." },
        { question: "Tên nước ta dưới thời nhà Lý và nhà Trần là gì?", options: ["Đại Cồ Việt", "Đại Việt", "Đại Nam", "Việt Nam"], correct: 1, explanation: "Năm 1054, vua Lý Thánh Tông đổi tên nước từ Đại Cồ Việt thành Đại Việt." },
        { question: "Câu nói: 'Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo' là của ai?", options: ["Trần Bình Trọng", "Trần Thủ Độ", "Trần Quốc Tuấn", "Yết Kiêu"], correct: 1, explanation: "Đây là câu trả lời đanh thép của Trần Thủ Độ khi vua Trần Thái Tông hỏi về kế sách đánh giặc." },
        { question: "Chùa Một Cột (Liên Hoa Đài) được xây dựng dưới triều đại nào?", options: ["Nhà Đinh", "Nhà Lý", "Nhà Trần", "Nhà Lê"], correct: 1, explanation: "Chùa Một Cột được vua Lý Thái Tông cho xây dựng theo giấc mơ thấy Phật Bà Quan Âm." },
        { question: "Vị vua nào nhà Trần đã đi tu và trở thành Sơ tổ thiền phái Trúc Lâm?", options: ["Trần Thái Tông", "Trần Nhân Tông", "Trần Thánh Tông", "Trần Anh Tông"], correct: 1, explanation: "Vua Trần Nhân Tông sau khi dẹp giặc đã nhường ngôi và đi tu tại núi Yên Tử." },
        { question: "Hội nghị Bình Than được tổ chức nhằm mục đích gì?", options: ["Bàn kế hoạch dời đô", "Bàn kế sách đánh giặc Nguyên Mông", "Bầu vua mới", "Phân chia ruộng đất"], correct: 1, explanation: "Hội nghị Bình Than quy tụ các vương hầu, tướng lĩnh bàn cách chống quân Nguyên lần 2." },
        { question: "Tác giả của bộ sử 'Đại Việt sử ký' đầu tiên là ai?", options: ["Ngô Sĩ Liên", "Lê Văn Hưu", "Phan Huy Chú", "Trần Trọng Kim"], correct: 1, explanation: "Lê Văn Hưu là người biên soạn bộ quốc sử đầu tiên của nước ta năm 1272." },
        { question: "Ai là người có công dẹp loạn 12 sứ quân, mở đường cho sự ổn định trước thời Lý?", options: ["Đinh Bộ Lĩnh", "Lê Hoàn", "Ngô Quyền", "Lý Công Uẩn"], correct: 0, explanation: "Đinh Bộ Lĩnh đã dẹp loạn 12 sứ quân, thống nhất đất nước và lập ra nhà Đinh." },
        { question: "Trận đánh tiêu biểu nhất trên sông Như Nguyệt gắn liền với ai?", options: ["Trần Hưng Đạo", "Lý Thường Kiệt", "Ngô Quyền", "Lê Lợi"], correct: 1, explanation: "Phòng tuyến Như Nguyệt là nơi Lý Thường Kiệt chặn đứng quân Tống xâm lược." },
        { question: "Câu nói: 'Thà làm quỷ nước Nam còn hơn làm vương đất Bắc' là của ai?", options: ["Trần Bình Trọng", "Trần Hưng Đạo", "Trần Quang Khải", "Nguyễn Trung Trực"], correct: 0, explanation: "Câu nói bất hủ của Trần Bình Trọng khi bị quân Nguyên bắt và dụ dỗ đầu hàng." },
        { question: "Tướng quân nào thời Trần nổi tiếng với biệt tài bơi lặn?", options: ["Yết Kiêu", "Dã Tượng", "Phạm Ngũ Lão", "Trần Khánh Dư"], correct: 0, explanation: "Yết Kiêu có biệt tài bơi lặn, thường đục thuyền giặc trong cuộc kháng chiến chống Nguyên Mông." }
    ],
    "le-nguyen": [
        { question: "Quân Lam Sơn đã đánh bại quân xâm lược nào?", options: ["Quân Tống", "Quân Nguyên", "Quân Minh", "Quân Thanh"], correct: 2, explanation: "Khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo đã đánh tan quân xâm lược nhà Minh sau 10 năm." },
        { question: "Vị vua nào được coi là vị vua anh minh nhất thời Lê Sơ?", options: ["Lê Thái Tổ", "Lê Thánh Tông", "Lê Thái Tông", "Lê Hiển Tông"], correct: 1, explanation: "Lê Thánh Tông đã đưa nước ta lên đỉnh cao về chính trị, quân sự và văn hóa (Thời Hồng Đức)." },
        { question: "Hội thề nào thể hiện sự gắn kết giữa Lê Lợi và các tướng lĩnh?", options: ["Hội thề Lũng Nhai", "Hội thề Đông Quan", "Hội thề Bình Than", "Hội thề Diên Hồng"], correct: 0, explanation: "Năm 1416, Lê Lợi cùng 18 người bạn chiến đấu đã tổ chức Hội thề Lũng Nhai để quyết tâm đánh giặc." },
        { question: "Vương hiệu của Nguyễn Huệ sau khi lên ngôi hoàng đế là gì?", options: ["Thái Đức", "Quang Trung", "Cảnh Thịnh", "Gia Long"], correct: 1, explanation: "Nguyễn Huệ lên ngôi hoàng đế năm 1788, lấy niên hiệu là Quang Trung để tiến quân ra Bắc." },
        { question: "Vua Lê Thánh Tông đã cho biên soạn bộ luật nổi tiếng nào?", options: ["Luật Gia Long", "Luật Hồng Đức", "Hình thư", "Luật Hình dân"], correct: 1, explanation: "Luật Hồng Đức là bộ luật tiến bộ, có nhiều điều khoản bảo vệ quyền lợi phụ nữ thời bấy giờ." },
        { question: "Chiến thắng nào đã kết thúc hoàn toàn 20 năm đô hộ của nhà Minh?", options: ["Trận Tốt Động - Chúc Động", "Trận Chi Lăng - Xương Giang", "Trận Rạch Gầm - Xoài Mút", "Trận Ngọc Hồi - Đống Đa"], correct: 1, explanation: "Chiến thắng Chi Lăng - Xương Giang buộc nhà Minh phải rút quân, công nhận độc lập của nước ta." },
        { question: "Nguyễn Huệ đã đánh tan quân Xiêm trong trận chiến nào?", options: ["Trận Bạch Đằng", "Trận Rạch Gầm - Xoài Mút", "Trận Ngọc Hồi", "Trận Đống Đa"], correct: 1, explanation: "Năm 1785, Nguyễn Huệ đã lập nên chiến thắng vang dội tiêu diệt 5 vạn quân Xiêm tại Rạch Gầm - Xoài Mút." },
        { question: "Kinh đô của nước ta dưới thời vua Quang Trung đặt tại đâu?", options: ["Thăng Long", "Phú Xuân (Huế)", "Cổ Loa", "Hoa Lư"], correct: 1, explanation: "Vua Quang Trung chọn Phú Xuân (Huế) làm kinh đô để thuận tiện cai quản cả hai miền Nam - Bắc." },
        { question: "Triều đại nào đã tiến hành cuộc cải cách hành chính chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên?", options: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Nguyễn (Vua Minh Mạng)", "Nhà Mạc"], correct: 2, explanation: "Cuộc cải cách hành chính quy mô lớn này được vua Minh Mạng thực hiện vào những năm 1831 - 1832." },
        { question: "Ai là người được vua Quang Trung tin tưởng giao trọng trách soạn thảo các văn bản ngoại giao?", options: ["Nguyễn Nhạc", "Ngô Thì Nhậm", "Bùi Thị Xuân", "Trần Quang Diệu"], correct: 1, explanation: "Danh sĩ Ngô Thì Nhậm là người giúp vua Quang Trung trong các kế sách đối ngoại với nhà Thanh." },
        { question: "Vị nữ tướng tiêu biểu nhất của nhà Tây Sơn là ai?", options: ["Trưng Trắc", "Bùi Thị Xuân", "Bà Triệu", "Huyền Trân Công Chúa"], correct: 1, explanation: "Đô đốc Bùi Thị Xuân là nữ tướng nổi tiếng về lòng dũng cảm và tài luyện voi chiến." },
        { question: "Nguyễn Trãi đã viết tác phẩm nào để vạch trần tội ác của quân Minh?", options: ["Bạch Đằng giang phú", "Bình Ngô đại cáo", "Ức Trai thi tập", "Quốc âm thi tập"], correct: 1, explanation: "'Bình Ngô đại cáo' được coi là bản Tuyên ngôn Độc lập thứ hai của dân tộc Việt Nam." },
        { question: "Vua Quang Trung mất vào năm nào?", options: ["1789", "1792", "1802", "1785"], correct: 1, explanation: "Vua Quang Trung đột ngột qua đời năm 1792 khi còn rất nhiều dự định cải cách dở dang." },
        { question: "Ai là người khởi xướng phong trào Cần Vương?", options: ["Nguyễn Trung Trực", "Hàm Nghi và Tôn Thất Thuyết", "Phan Đình Phùng", "Hoàng Hoa Thám"], correct: 1, explanation: "Sau khi kinh thành Huế thất thủ, Tôn Thất Thuyết nhân danh vua Hàm Nghi ra chiếu Cần Vương." },
        { question: "Tòa thành nào được xây dựng kiên cố tại Huế dưới thời nhà Nguyễn?", options: ["Thành Cổ Loa", "Thành Tây Đô", "Kinh thành Huế", "Thành Điện Hải"], correct: 2, explanation: "Kinh thành Huế là công trình kiến trúc phòng thủ và cung điện quy mô nhất triều Nguyễn." },
        { question: "Triều đại nào là triều đại phong kiến cuối cùng của Việt Nam?", options: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Nguyễn", "Nhà Mạc"], correct: 2, explanation: "Nhà Nguyễn (1802 - 1945) là triều đại phong kiến cuối cùng, kết thúc khi vua Bảo Đại thoái vị." },
        { question: "Trận Ngọc Hồi - Đống Đa diễn ra vào mùa nào?", options: ["Mùa Hè", "Mùa Thu", "Mùa Xuân (Tết Kỷ Dậu)", "Mùa Đông"], correct: 2, explanation: "Vua Quang Trung đã thần tốc tiến quân đánh tan quân Thanh ngay trong dịp Tết năm 1789." },
        { question: "Vua cuối cùng của triều Nguyễn là ai?", options: ["Duy Tân", "Hàm Nghi", "Bảo Đại", "Khải Định"], correct: 2, explanation: "Vua Bảo Đại thoái vị ngày 30/8/1945 tại kinh đô Huế, nộp ấn kiếm cho cách mạng." }
    ],
    "khang-chien-phap": [
        { question: "Chiến thắng Điện Biên Phủ lừng lẫy năm châu diễn ra vào năm nào?", options: ["1945", "1954", "1975", "1930"], correct: 1, explanation: "Chiến thắng Điện Biên Phủ ngày 7/5/1954 đã kết thúc thắng lợi 9 năm kháng chiến chống Pháp." },
        { question: "Ai là người đọc Bản Tuyên ngôn Độc lập tại quảng trường Ba Đình?", options: ["Võ Nguyên Giáp", "Hồ Chí Minh", "Phạm Văn Đồng", "Trường Chinh"], correct: 1, explanation: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa." },
        { question: "Vị đại tướng tài ba lãnh đạo chiến dịch Điện Biên Phủ là ai?", options: ["Văn Tiến Dũng", "Võ Nguyên Giáp", "Nguyễn Chí Thanh", "Lê Trọng Tấn"], correct: 1, explanation: "Đại tướng Võ Nguyên Giáp là Tổng tư lệnh trực tiếp chỉ huy chiến dịch Điện Biên Phủ." },
        { question: "Ngày Quốc khánh của nước Việt Nam Dân chủ Cộng hòa là ngày nào?", options: ["30/04", "02/09", "19/05", "22/12"], correct: 1, explanation: "Ngày 2/9 là ngày Quốc khánh của nước ta, kỷ niệm sự kiện Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập năm 1945." },
        { question: "Phương châm của chiến dịch Điện Biên Phủ đã thay đổi từ 'Đánh nhanh thắng nhanh' sang gì?", options: ["Đánh lâu dài", "Đánh chắc tiến chắc", "Vừa đánh vừa đàm", "Tổng tiến công"], correct: 1, explanation: "Đại tướng Võ Nguyên Giáp đã có quyết định lịch sử khi chuyển sang phương châm 'Đánh chắc tiến chắc'." },
        { question: "Ai là người anh hùng đã lấy thân mình lấp lỗ châu mai?", options: ["Phan Đình Giót", "Tô Vĩnh Diện", "Bế Văn Đàn", "La Văn Cầu"], correct: 0, explanation: "Anh hùng Phan Đình Giót đã hy sinh thân mình lấp lỗ châu mai để đồng đội xông lên trong trận Him Lam." },
        { question: "Hiệp định nào được ký kết sau chiến thắng Điện Biên Phủ?", options: ["Hiệp định Pa-ri", "Hiệp định Giơ-nê-vơ", "Hiệp định Sơ bộ", "Hòa ước Nhâm Tuất"], correct: 1, explanation: "Hiệp định Giơ-nê-vơ (1954) được ký kết, lập lại hòa bình ở Đông Dương." },
        { question: "Chiến thắng Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm?", options: ["45 ngày đêm", "55 ngày đêm", "56 ngày đêm", "60 ngày đêm"], correct: 2, explanation: "Chiến dịch Điện Biên Phủ bắt đầu từ 13/3 và kết thúc vào 7/5/1954, tổng cộng 56 ngày đêm." },
        { question: "Chủ tịch Hồ Chí Minh ra đi tìm đường cứu nước từ bến cảng nào?", options: ["Cảng Hải Phòng", "Cảng Nhà Rồng", "Cảng Đà Nẵng", "Cảng Ba Son"], correct: 1, explanation: "Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành đã rời bến cảng Nhà Rồng." },
        { question: "Ngày thành lập Quân đội Nhân dân Việt Nam là ngày nào?", options: ["19/08", "02/09", "22/12", "30/04"], correct: 2, explanation: "Ngày 22/12 hàng năm là ngày thành lập Quân đội và cũng là Ngày hội Quốc phòng toàn dân." }
    ],
    "khang-chien-my": [
        { question: "Chiến dịch Hồ Chí Minh lịch sử kết thúc vào ngày tháng năm nào?", options: ["30/04/1975", "02/09/1945", "19/05/1890", "22/12/1944"], correct: 0, explanation: "Đúng 11h30 ngày 30/4/1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, kết thúc kháng chiến chống Mỹ." },
        { question: "Phong trào 'Đồng khởi' bắt đầu từ tỉnh nào ở miền Nam?", options: ["Bến Tre", "Cà Mau", "Tây Ninh", "Quảng Nam"], correct: 0, explanation: "Phong trào Đồng khởi (1960) nổ ra mạnh mẽ nhất và giành thắng lợi đầu tiên tại tỉnh Bến Tre." },
        { question: "Tên gọi của tuyến đường vận tải chiến lược chi viện cho miền Nam?", options: ["Đường Hồ Chí Minh", "Đường số 1", "Đường 9 Nam Lào", "Đường Trường Sơn Đông"], correct: 0, explanation: "Đường Hồ Chí Minh (Đường Trường Sơn) là tuyến huyết mạch huyền thoại chi viện cho tiền tuyến miền Nam." },
        { question: "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân diễn ra vào năm nào?", options: ["1960", "1965", "1968", "1972"], correct: 2, explanation: "Cuộc tập kích chiến lược Tết Mậu Thân 1968 đã buộc Mỹ phải xuống thang chiến tranh." },
        { question: "Trận 'Điện Biên Phủ trên không' năm 1972 diễn ra chủ yếu ở đâu?", options: ["Sài Gòn", "Huế", "Hà Nội và Hải Phòng", "Đà Nẵng"], correct: 2, explanation: "Đây là tên gọi ca ngợi chiến thắng 12 ngày đêm chống cuộc tập kích bằng máy bay B-52 của Mỹ vào Hà Nội, Hải Phòng." },
        { question: "Hiệp định Pa-ri được ký kết năm nào?", options: ["1970", "1972", "1973", "1975"], correct: 2, explanation: "Hiệp định Pa-ri được ký ngày 27/1/1973, buộc Mỹ phải rút toàn bộ quân đội về nước." },
        { question: "Thành phố nào là nơi đầu tiên được giải phóng trong chiến dịch mùa Xuân 1975?", options: ["Huế", "Đà Nẵng", "Buôn Ma Thuột", "Sài Gòn"], correct: 2, explanation: "Trận Buôn Ma Thuột (10/3/1975) là trận then chốt mở màn cho đại thắng mùa Xuân năm 1975." },
        { question: "Chiếc xe tăng mang số hiệu nào đã húc đổ cổng Dinh Độc Lập?", options: ["Xe tăng 390", "Xe tăng 843", "Xe tăng 555", "Xe tăng 123"], correct: 0, explanation: "Xe tăng 390 là chiếc đầu tiên húc đổ cổng chính Dinh Độc Lập trưa 30/4/1975." },
        { question: "Tổng thống cuối cùng của chính quyền Sài Gòn là ai?", options: ["Ngô Đình Diệm", "Nguyễn Văn Thiệu", "Dương Văn Minh", "Nguyễn Cao Kỳ"], correct: 2, explanation: "Đại tướng Dương Văn Minh đã tuyên bố đầu hàng không điều kiện vào trưa ngày 30/4/1975." },
        { question: "Năm 1976, Thành phố Sài Gòn - Gia Định chính thức được đổi tên thành gì?", options: ["Thành phố Hòa Bình", "Thành phố Hồ Chí Minh", "Thành phố Phương Nam", "Thành phố Thủ Đô"], correct: 1, explanation: "Để vinh danh công lao vĩ đại của Bác, thành phố đã được mang tên Người." }
    ]
};

let currentQuiz = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const quizContainer = document.querySelector('.quiz');
const urlParams = new URLSearchParams(window.location.search);
const topicParam = urlParams.get('topic');
const currentTopic = (topicParam && allQuizzes[topicParam]) ? topicParam : "van-lang";
let quizData = allQuizzes[currentTopic];

function startTimer() {
    timeLeft = 15;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        const timerDisplay = document.getElementById('timer');
        if (timerDisplay) {
            timerDisplay.innerText = timeLeft;
            if (timeLeft <= 5) {
                timerDisplay.style.color = '#dc3545';
                timerDisplay.style.fontWeight = '900';
            } else {
                timerDisplay.style.color = '#8B0000';
                timerDisplay.style.fontWeight = '700';
            }
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1);
        }
    }, 1000);
}

function loadQuiz() {
    if (!quizContainer) return;
    const currentQuizData = quizData[currentQuiz];
    if (!currentQuizData) return;

    const labels = ['A', 'B', 'C', 'D'];
    quizContainer.innerHTML = `
        <div class="quiz-card">
            <div class="scroll-top"></div>
            <div class="quiz-card-body">
                <div class="quiz-header">
                    <div class="quiz-header-left">
                        <span class="quiz-icon">📜</span>
                        <span class="quiz-counter">Câu hỏi <strong>${currentQuiz + 1}</strong>/${quizData.length}</span>
                    </div>
                    <div class="timer-box">
                        <span>⏳</span>
                        <span id="timer">15</span>s
                    </div>
                    <div class="quiz-header-right">
                        <span class="quiz-icon">🏆</span>
                        <span class="quiz-score">Điểm: <strong>${score}</strong></span>
                    </div>
                </div>
                <div class="quiz-divider-line"></div>
                <h2 class="quiz-question">${currentQuizData.question}</h2>
                <div class="quiz-divider-line"></div>
                <div class="quiz-options">
                    ${currentQuizData.options.map((option, index) => `
                        <button class="option-btn" onclick="checkAnswer(${index})">
                            <span class="option-label">${labels[index]}</span>
                            <span class="option-text">${option}</span>
                        </button>
                    `).join('')}
                </div>
                <div id="feedback" class="feedback"></div>
            </div>
            <div class="scroll-bottom"></div>
        </div>
    `;
    startTimer();
}

function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        if (type === 'correct') {
            o.frequency.setValueAtTime(523, ctx.currentTime);
            o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            o.start(); o.stop(ctx.currentTime + 0.5);
        } else if (type === 'wrong') {
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(200, ctx.currentTime);
            o.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            o.start(); o.stop(ctx.currentTime + 0.4);
        } else {
            o.type = 'triangle';
            o.frequency.setValueAtTime(300, ctx.currentTime);
            o.frequency.setValueAtTime(200, ctx.currentTime + 0.2);
            g.gain.setValueAtTime(0.2, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            o.start(); o.stop(ctx.currentTime + 0.5);
        }
    } catch(e) {}
}

window.checkAnswer = (selectedIndex) => {
    clearInterval(timerInterval);
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.option-btn');
    if (buttons.length === 0) return;

    const currentQuizData = quizData[currentQuiz];
    const correctIndex = currentQuizData.correct;
    const labels = ['A', 'B', 'C', 'D'];

    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedIndex === correctIndex) {
        score += 10;
        buttons[selectedIndex].classList.add('correct');
        playSound('correct');
        if (typeof confetti !== "undefined") {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
        feedback.innerHTML = `
            <div class="feedback-box feedback-correct">
                <div class="feedback-top">
                    <span class="feedback-icon-circle feedback-icon-ok">✓</span>
                    <span class="feedback-title">Chính xác!</span>
                </div>
                <div class="feedback-divider"></div>
                <div class="feedback-explain">
                    <span class="feedback-bulb">💡</span>
                    <div>
                        <strong>Giải thích:</strong><br>
                        ${currentQuizData.explanation || "Chúc mừng bạn đã trả lời đúng!"}
                    </div>
                </div>
            </div>
        `;
    } else {
        if (selectedIndex !== -1) buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        playSound(selectedIndex === -1 ? 'timeout' : 'wrong');
        const wrongMsg = selectedIndex === -1 ? "Đã hết thời gian." : "Bạn đã chọn sai rồi.";
        const correctLabel = labels[correctIndex];
        feedback.innerHTML = `
            <div class="feedback-box feedback-wrong">
                <div class="feedback-top">
                    <span class="feedback-icon-circle feedback-icon-x">✕</span>
                    <div>
                        <span class="feedback-title">Tiếc quá!</span>
                        <span class="feedback-subtitle">${wrongMsg}</span>
                    </div>
                </div>
                <div class="feedback-divider"></div>
                <div class="feedback-explain">
                    <span class="feedback-bulb">💡</span>
                    <div>
                        <strong>Giải thích:</strong><br>
                        ${currentQuizData.explanation || "Hãy ôn lại kiến thức này nhé!"}
                    </div>
                </div>
            </div>
        `;
    }

    setTimeout(() => {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }, 4000);
};

function showResult() {
    const percent = Math.round((score / (quizData.length * 10)) * 100);
    let medal = '🥉'; let msg = 'Cố gắng hơn nhé!';
    if (percent >= 80) { medal = '🥇'; msg = 'Xuất sắc! Bạn là Sử gia thực thụ!'; }
    else if (percent >= 60) { medal = '🥈'; msg = 'Khá tốt! Tiếp tục ôn luyện nhé!'; }

    quizContainer.innerHTML = `
        <div class="quiz-card result-card">
            <div style="font-size:4rem;margin-bottom:12px;">${medal}</div>
            <h2 style="color:#8B0000;font-family:'Georgia',serif;margin-bottom:8px;">Hoàn thành!</h2>
            <p style="color:#666;margin-bottom:20px;">${msg}</p>
            <div style="font-size:3rem;font-weight:900;color:#8B0000;margin-bottom:4px;">${score}</div>
            <div style="color:#999;margin-bottom:24px;">điểm / ${quizData.length * 10} điểm tối đa</div>
            <div style="display:flex;gap:12px;justify-content:center;">
                <button onclick="location.reload()" style="padding:12px 28px;border:2px solid #8B0000;border-radius:30px;background:#fff;color:#8B0000;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;">🔄 Làm lại</button>
                <button onclick="window.location.href='index.html'" style="padding:12px 28px;border:none;border-radius:30px;background:#8B0000;color:#fff;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;">🏠 Trang chủ</button>
            </div>
        </div>
    `;
    if (typeof confetti !== "undefined") {
        confetti({ particleCount: 300, spread: 160 });
    }
}

window.loadTopic = function(topic, event) {
    const topicNames = {
        'van-lang': 'Văn Lang', 'bac-thuoc': 'Bắc Thuộc',
        'ly-tran': 'Lý - Trần', 'le-nguyen': 'Lê - Nguyễn',
        'khang-chien-phap': 'Chống Pháp', 'khang-chien-my': 'Chống Mỹ'
    };
    const topicIcons = {
        'van-lang': 'images/icon-van-lang2.png',
        'bac-thuoc': 'images/icon-bac-thuoc.png',
        'ly-tran': 'images/icon-ly-tran.png',
        'le-nguyen': 'images/icon-le-nguyen.png',
        'khang-chien-phap': 'images/icon-phap.png',
        'khang-chien-my': 'images/icon-my.png'
    };
    document.getElementById('ready-title').textContent = topicNames[topic] || topic;
    document.getElementById('ready-icon').src = topicIcons[topic] || 'images/icon-van-lang.png';
    document.getElementById('ready-screen').style.display = 'flex';
    document.getElementById('quiz-section').style.display = 'none';

    if (allQuizzes[topic]) {
        currentQuiz = 0;
        score = 0;
        quizData = allQuizzes[topic];
        document.getElementById('ready-count').textContent = allQuizzes[topic].length;
    }

    // Cập nhật active nav
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
};

window.changeQuestion = function(step) {
     if (document.getElementById('quiz-section').style.display === 'none') return;
    clearInterval(timerInterval);
    currentQuiz += step;
    if (currentQuiz < 0) currentQuiz = quizData.length - 1;
    if (currentQuiz >= quizData.length) currentQuiz = 0;
    loadQuiz();
};

window.scrollNav = function(direction) {
    const nav = document.getElementById('navScroll');
    if (!nav) return;
    nav.scrollBy({ left: direction * 200, behavior: 'smooth' });
};

function startQuizNow() {
    document.getElementById('ready-screen').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'flex';
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
    // Không auto loadQuiz — hiện ready screen trước
});
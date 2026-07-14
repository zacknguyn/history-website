// ========== GAME 1: ĐOÁN NHÂN VẬT ==========
const g1Data = [
  
   {
    img: 'ngoquyen.jpg',
    name: 'Ngô Quyền',
    clue: 'Năm 938, vị tướng này cắm cọc sắt dưới lòng sông, đánh tan quân Nam Hán và chấm dứt 1000 năm Bắc thuộc.',
    options: ['Ngô Quyền', 'Trần Hưng Đạo', 'Đinh Bộ Lĩnh', 'Lê Lợi'],
    answer: 'Ngô Quyền'
  },
  {
    img: 'images/hungdao.jpg',
    name: 'Trần Hưng Đạo',
    clue: 'Đại nguyên soái 3 lần đánh bại quân Nguyên Mông. Ông viết "Hịch tướng sĩ" để khích lệ quân sĩ.',
    options: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Lê Lợi', 'Quang Trung'],
    answer: 'Trần Hưng Đạo'
  },
  {
    img: 'images/haibatrung.jpg',
    name: 'Hai Bà Trưng',
    clue: 'Năm 40 sau CN, hai chị em này khởi nghĩa chống lại ách đô hộ của Đông Hán, trở thành biểu tượng bất khuất của người Việt.',
    options: ['Bà Triệu', 'Hai Bà Trưng', 'Nguyễn Thị Định', 'Võ Thị Sáu'],
    answer: 'Hai Bà Trưng'
  },
  {
    img: 'images/quangtrung.jpg',
    name: 'Quang Trung',
    clue: '"Anh hùng áo vải" xuất thân từ Bình Định, đại phá 20 vạn quân Thanh chỉ trong 5 ngày Tết Kỷ Dậu 1789.',
    options: ['Lê Lợi', 'Nguyễn Huệ (Quang Trung)', 'Phan Bội Châu', 'Võ Nguyên Giáp'],
    answer: 'Nguyễn Huệ (Quang Trung)'
  },
  {
    img: 'images/HCM.jpg',
    name: 'Hồ Chí Minh',
    clue: 'Ngày 2/9/1945, người đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    options: ['Võ Nguyên Giáp', 'Phan Bội Châu', 'Hồ Chí Minh', 'Trần Phú'],
    answer: 'Hồ Chí Minh'
  },
  {
    img: 'images/VoNguyenGiap.jfif',
    name: 'Võ Nguyên Giáp',
    clue: 'Đại tướng này chỉ huy trận Điện Biên Phủ năm 1954, đánh bại thực dân Pháp, được thế giới gọi là "Vị tướng huyền thoại".',
    options: ['Nguyễn Chí Thanh', 'Lê Duẩn', 'Võ Nguyên Giáp', 'Hoàng Văn Thái'],
    answer: 'Võ Nguyên Giáp'
  },
  {
    img: 'images/LyThuongKiet.jpg',
    name: 'Lý Thường Kiệt',
    clue: 'Danh tướng nhà Lý, tác giả bài thơ "Nam quốc sơn hà" — được coi là bản Tuyên ngôn Độc lập đầu tiên của Việt Nam.',
    options: ['Lý Thái Tổ', 'Lý Thường Kiệt', 'Trần Quốc Tuấn', 'Nguyễn Trãi'],
    answer: 'Lý Thường Kiệt'
  },
  {
    img: 'images/LeLoi.jpg',
    name: 'Lê Lợi',
    clue: 'Người khởi xướng cuộc khởi nghĩa Lam Sơn năm 1418, sau 10 năm kháng chiến đã đánh đuổi quân Minh, lập ra nhà Hậu Lê.',
    options: ['Lê Lợi', 'Nguyễn Trãi', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'],
    answer: 'Lê Lợi'
  },
  {
    img: 'images/DinhBoLinh.jpg',
    name: 'Đinh Bộ Lĩnh',
    clue: 'Người dẹp loạn 12 sứ quân, thống nhất đất nước năm 968, đặt quốc hiệu là Đại Cồ Việt — vị hoàng đế đầu tiên của Việt Nam.',
    options: ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Hoàn', 'Lý Thái Tổ'],
    answer: 'Đinh Bộ Lĩnh'
  },
  {
    img: 'images/BaTrieu.jpg',
    name: 'Bà Triệu',
    clue: 'Năm 248, người phụ nữ này cưỡi voi xung trận, khởi nghĩa chống quân Đông Ngô với câu nói bất hủ về chí khí của mình.',
    options: ['Bà Triệu', 'Hai Bà Trưng', 'Võ Thị Sáu', 'Nguyễn Thị Định'],
    answer: 'Bà Triệu'
  },
  {
    img: 'images/NguyenTrai.jpg',
    name: 'Nguyễn Trãi',
    clue: 'Quân sư tài ba của Lê Lợi, tác giả "Bình Ngô đại cáo" — áng văn tuyên bố nền độc lập sau khi đuổi quân Minh.',
    options: ['Lê Lợi', 'Ngô Thì Nhậm', 'Nguyễn Trãi', 'Trần Quốc Tuấn'],
    answer: 'Nguyễn Trãi'
  },
  {
    img: 'images/VoThiSau.jpg',
    name: 'Võ Thị Sáu',
    clue: 'Nữ anh hùng trẻ tuổi nhất, hy sinh năm 19 tuổi tại Côn Đảo năm 1952, biểu tượng của tinh thần bất khuất chống Pháp.',
    options: ['Nguyễn Thị Định', 'Võ Thị Sáu', 'Bà Triệu', 'Hai Bà Trưng'],
    answer: 'Võ Thị Sáu'
  },
  {
  img: 'images/LyThaito.jpg',
  name: 'Lý Thái Tổ',
  clue: 'Năm 1010, vị vua này dời đô từ Hoa Lư về Đại La, đổi tên thành Thăng Long, mở ra thời kỳ phát triển rực rỡ.',
  options: ['Lý Thái Tổ', 'Đinh Bộ Lĩnh', 'Lê Lợi', 'Trần Nhân Tông'],
  answer: 'Lý Thái Tổ'
},
{
  img: 'images/PhanBoiChau.jpg',
  name: 'Phan Bội Châu',
  clue: 'Nhà yêu nước đầu thế kỷ 20, khởi xướng phong trào Đông Du đưa thanh niên sang Nhật học để cứu nước.',
  options: ['Phan Châu Trinh', 'Phan Bội Châu', 'Nguyễn Thái Học', 'Hoàng Hoa Thám'],
  answer: 'Phan Bội Châu'
},
{
  img: 'images/NguyenThiDinh.jpg',
  name: 'Nguyễn Thị Định',
  clue: 'Nữ tướng đầu tiên của Quân đội Nhân dân Việt Nam, lãnh đạo phong trào Đồng Khởi tại Bến Tre.',
  options: ['Võ Thị Sáu', 'Nguyễn Thị Định', 'Bà Triệu', 'Hai Bà Trưng'],
  answer: 'Nguyễn Thị Định'
},
{
  img: 'images/LeHoan.jpg',
  name: 'Lê Hoàn',
  clue: 'Vị vua lập ra nhà Tiền Lê, đánh tan quân Tống xâm lược năm 981, bảo vệ nền độc lập dân tộc.',
  options: ['Lê Hoàn', 'Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'],
  answer: 'Lê Hoàn'
},
{
  img: 'images/TranNhanTong.jpg',
  name: 'Trần Nhân Tông',
  clue: 'Vị vua nhà Trần 2 lần lãnh đạo kháng chiến chống Nguyên Mông, sau xuất gia lập thiền phái Trúc Lâm Yên Tử.',
  options: ['Trần Thái Tông', 'Trần Nhân Tông', 'Trần Hưng Đạo', 'Trần Quang Khải'],
  answer: 'Trần Nhân Tông'
},
{
  img: 'images/HoangHoaTham.jpg',
  name: 'Hoàng Hoa Thám',
  clue: 'Thủ lĩnh khởi nghĩa Yên Thế, lãnh đạo cuộc kháng chiến chống Pháp dài nhất — gần 30 năm tại vùng rừng núi Bắc Giang.',
  options: ['Phan Bội Châu', 'Hoàng Hoa Thám', 'Nguyễn Thái Học', 'Phan Đình Phùng'],
  answer: 'Hoàng Hoa Thám'
},
{
  img: 'images/NguyenTraiImg.jpg',
  name: 'Chu Văn An',
  clue: 'Nhà giáo nổi tiếng thời Trần, được tôn là "Vạn thế sư biểu", dâng Thất trảm sớ đòi chém 7 tên gian thần.',
  options: ['Nguyễn Trãi', 'Chu Văn An', 'Lê Văn Hưu', 'Ngô Sĩ Liên'],
  answer: 'Chu Văn An'
},
{
  img: 'images/NguenVanTroi.jpg',
  name: 'Nguyễn Văn Trỗi',
  clue: 'Anh hùng chống Mỹ, hy sinh năm 24 tuổi tại Sài Gòn năm 1964 với câu nói bất hủ: "Hãy nhớ lấy lời tôi!".',
  options: ['Nguyễn Văn Trỗi', 'Phan Đình Giót', 'Bế Văn Đàn', 'La Văn Cầu'],
  answer: 'Nguyễn Văn Trỗi'
},
];

let g1Index = 0, g1Score = 0, g1Lives = 3;
let g1Timer = null, g1TimeLeft = 20;

function showG1Play() {
  document.getElementById('g1-play').style.display = 'block';
  document.getElementById('g1-gameover').classList.remove('show');
  document.getElementById('g1-complete').classList.remove('show');
}

function renderG1() {
  showG1Play();
  const q = g1Data[g1Index];
  document.getElementById('g1-score').textContent = g1Score;
  document.getElementById('g1-current').textContent = g1Index + 1;
  document.getElementById('g1-lives').textContent = g1Lives;
 const silBox = document.getElementById('sil-box');
silBox.className = 'silhouette-box mystery';
silBox.innerHTML = `<img src="${q.img}" alt="${q.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;filter:brightness(0.15) blur(2px);transition:filter 0.5s ease;">`;
  document.getElementById('g1-clue').textContent = q.clue;
  document.getElementById('g1-result').className = 'result-msg';
  document.getElementById('g1-next').className = 'next-btn';
document.getElementById('g1-hint-btn').disabled = false;
document.getElementById('g1-hint-extra').style.display = 'none';
  const grid = document.getElementById('g1-options');
  grid.innerHTML = '';
  [...q.options].sort(() => Math.random() - 0.5).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectG1(opt, q.answer);
    grid.appendChild(btn);
  });
  clearInterval(g1Timer);
g1TimeLeft = 20;
document.getElementById('g1-timer').textContent = '⏱ 20s';
g1Timer = setInterval(() => {
  g1TimeLeft--;
  document.getElementById('g1-timer').textContent = '⏱ ' + g1TimeLeft + 's';
  if (g1TimeLeft <= 5) document.getElementById('g1-timer').style.color = '#e74c3c';
  if (g1TimeLeft <= 0) { clearInterval(g1Timer); selectG1('__timeout__', g1Data[g1Index].answer); }
}, 1000);
}

function selectG1(chosen, correct) {
  clearInterval(g1Timer);
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
    if (b.textContent === chosen && chosen !== correct) b.classList.add('wrong');
  });
 const silBox = document.getElementById('sil-box');
silBox.className = 'silhouette-box revealed';
const img = silBox.querySelector('img');
if (img) {
  img.style.transition = 'filter 1.2s ease, transform 1s ease';
  img.style.filter = 'brightness(1) blur(0)';
  img.style.transform = 'scale(1.08)';
  setTimeout(() => { img.style.transform = 'scale(1)'; }, 1200);
}

  const res = document.getElementById('g1-result');
  if (chosen === correct) {
    res.className = 'result-msg success show';
      playCorrectSound();
     res.textContent = '🎉 Chính xác! +20 XP';

    g1Score += 20; addXP(20);
  } else {
    res.className = 'result-msg fail show';
     playWrongSound();
    res.textContent = `❌ Sai rồi! Đáp án đúng là: ${correct}`;
    g1Lives--;
    document.getElementById('g1-lives').textContent = g1Lives;
  }
  document.getElementById('g1-score').textContent = g1Score;
  document.getElementById('g1-next').className = 'next-btn show';
}

function nextG1() {
  // FIX 1: check game over first
  if (g1Lives <= 0) {
    showG1GameOver();
    return;
  }
  g1Index++;
  // FIX 2: show summary screen instead of silent reset
  if (g1Index >= g1Data.length) {
    showG1Complete();
    return;
  }
  renderG1();
}

function showG1GameOver() {
  document.getElementById('g1-play').style.display = 'none';
  document.getElementById('g1-complete').classList.remove('show');
  document.getElementById('g1-gameover-score').textContent = g1Score + ' điểm';
  document.getElementById('g1-gameover').classList.add('show');
}

function showG1Complete() {
  
  document.getElementById('g1-play').style.display = 'none';
  document.getElementById('g1-gameover').classList.remove('show');

  const pct = g1Score / (g1Data.length * 20);
  let trophy = '🏆', title = 'Xuất sắc!', sub = 'Bạn nhớ rất giỏi các nhân vật lịch sử!';
  if (pct < 0.4)      { trophy = '📚'; title = 'Cần cố gắng hơn!'; sub = 'Hãy ôn tập thêm và thử lại nhé!'; }
  else if (pct < 0.7) { trophy = '🎖️'; title = 'Khá tốt!'; sub = 'Bạn đang trên đà tiến bộ!'; }
  else if (pct < 1)   { trophy = '🥈'; title = 'Rất giỏi!'; sub = 'Chỉ còn một bước nữa thôi!'; }

  document.getElementById('g1-complete-trophy').textContent = trophy;
  document.getElementById('g1-complete-title').textContent = title;
  document.getElementById('g1-complete-sub').textContent = sub;
  document.getElementById('g1-complete-score').textContent = g1Score + ' điểm';
  document.getElementById('g1-complete').classList.add('show');
  showToast('🏅 Hoàn thành Game 1!', '🏅');
saveProgress('g1_best', Math.max(g1Score, loadProgress('g1_best', 0)));
// Thẻ 1: đạt 100đ
if (g1Score >= 100) unlockCard('ngo-quyen');
// Thẻ 2: đạt 200đ
if (g1Score >= 200) unlockCard('tran-hung-dao');
// Thẻ 3: đạt 320đ
if (g1Score >= 320) unlockCard('hai-ba-trung');
}

function restartG1() {
  g1Index = 0; g1Score = 0; g1Lives = 3;
  renderG1();
}
function buyHint() {
  if (totalXP < 15) { showToast('Không đủ XP!', '❌'); return; }
  const q = g1Data[g1Index];
  addXP(-15);
  document.getElementById('g1-hint-extra').style.display = 'block';
  const hints = [
    '🏛️ Triều đại: ' + (q.clue.includes('Lý') ? 'Nhà Lý' : q.clue.includes('Trần') ? 'Nhà Trần' : q.clue.includes('Lê') ? 'Nhà Lê' : q.clue.includes('Tây Sơn') ? 'Tây Sơn' : 'Thời kỳ hiện đại'),
    '⚔️ Nổi tiếng vì: ' + (q.clue.includes('đánh') ? 'chiến công quân sự' : q.clue.includes('viết') || q.clue.includes('tác giả') ? 'văn chương, trí tuệ' : q.clue.includes('khởi nghĩa') ? 'lãnh đạo khởi nghĩa' : 'cống hiến cho dân tộc'),
    '🔢 Số ký tự trong tên: ' + q.name.length + ' chữ cái',
  ];
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  document.getElementById('g1-hint-extra').textContent = '🔍 ' + randomHint;
  document.getElementById('g1-hint-btn').disabled = true;
}

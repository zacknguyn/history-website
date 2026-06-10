// ========== GAME 3: QUIZ ==========
const quizData = [
  { q: 'Ngô Quyền đánh tan quân Nam Hán trên sông nào?', opts: ['Sông Hồng', 'Sông Bạch Đằng', 'Sông Cả', 'Sông Mã'], ans: 1, explain: 'Năm 938, Ngô Quyền đóng cọc nhọn xuống sông Bạch Đằng, nhử thuyền địch vào rồi đánh tan khi thủy triều rút.', topic: 'Chống ngoại xâm' },
  { q: 'Trận Điện Biên Phủ kết thúc vào năm nào?', opts: ['1945', '1950', '1954', '1968'], ans: 2, explain: 'Ngày 7/5/1954, chiến dịch Điện Biên Phủ kết thúc thắng lợi, buộc Pháp ký Hiệp định Genève.', topic: 'Thời hiện đại' },
  { q: 'Ai là người đọc Tuyên ngôn Độc lập ngày 2/9/1945?', opts: ['Võ Nguyên Giáp', 'Trần Phú', 'Hồ Chí Minh', 'Lê Duẩn'], ans: 2, explain: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội ngày 2/9/1945.', topic: 'Danh nhân' },
  { q: 'Nhà nước đầu tiên của người Việt cổ tên là gì?', opts: ['Âu Lạc', 'Văn Lang', 'Đại Việt', 'Đại Cồ Việt'], ans: 1, explain: 'Văn Lang là nhà nước đầu tiên, do các Vua Hùng thành lập khoảng 2879 TCN.', topic: 'Triều đại' },
  { q: 'Quang Trung đại phá quân Thanh vào năm nào?', opts: ['1785', '1789', '1802', '1771'], ans: 1, explain: 'Tết Kỷ Dậu 1789, Nguyễn Huệ (Quang Trung) hành quân thần tốc, đại phá 29 vạn quân Thanh trong 5 ngày.', topic: 'Chống ngoại xâm' },
  { q: 'Trần Hưng Đạo đánh bại quân Nguyên Mông mấy lần?', opts: ['1 lần', '2 lần', '3 lần', '4 lần'], ans: 2, explain: 'Nhà Trần dưới sự chỉ huy của Trần Hưng Đạo đã 3 lần đánh bại quân Nguyên Mông vào các năm 1258, 1285, 1288.', topic: 'Chống ngoại xâm' },
  { q: 'Khởi nghĩa Lam Sơn do ai lãnh đạo?', opts: ['Nguyễn Trãi', 'Lê Lợi', 'Đinh Bộ Lĩnh', 'Lý Thái Tổ'], ans: 1, explain: 'Lê Lợi dấy binh khởi nghĩa tại Lam Sơn (Thanh Hóa) năm 1418, chống quân Minh đô hộ suốt 10 năm.', topic: 'Chống ngoại xâm' },
  { q: 'Hai Bà Trưng khởi nghĩa chống lại ách đô hộ của nước nào?', opts: ['Tần', 'Hán', 'Đường', 'Tống'], ans: 1, explain: 'Năm 40 SCN, Hai Bà Trưng khởi nghĩa chống lại ách đô hộ của nhà Hán (Đông Hán).', topic: 'Chống ngoại xâm' },
  { q: '"Hịch tướng sĩ" là tác phẩm của ai?', opts: ['Nguyễn Trãi', 'Lý Thường Kiệt', 'Trần Hưng Đạo', 'Ngô Thì Nhậm'], ans: 2, explain: 'Trần Hưng Đạo viết Hịch tướng sĩ để khích lệ tinh thần chiến đấu trước cuộc xâm lăng của Nguyên Mông.', topic: 'Văn học-Văn hóa' },
  { q: 'Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?', opts: ['30/4/1975', '2/9/1945', '7/5/1954', '21/7/1954'], ans: 0, explain: 'Ngày 30/4/1975, xe tăng quân giải phóng tiến vào Dinh Độc Lập, đất nước hoàn toàn thống nhất.', topic: 'Thời hiện đại' },
  { q: 'An Dương Vương xây thành nào để bảo vệ đất nước?', opts: ['Thành Thăng Long', 'Thành Cổ Loa', 'Thành Hoa Lư', 'Thành Đại La'], ans: 1, explain: 'An Dương Vương xây thành Cổ Loa hình xoắn ốc tại Đông Anh, Hà Nội — một công trình quân sự độc đáo thời cổ đại.', topic: 'Triều đại' },
  { q: '"Nam quốc sơn hà" được coi là bản Tuyên ngôn Độc lập đầu tiên, do ai sáng tác?', opts: ['Nguyễn Trãi', 'Lý Thái Tổ', 'Lý Thường Kiệt', 'Trần Hưng Đạo'], ans: 2, explain: 'Lý Thường Kiệt được cho là tác giả bài thơ "Nam quốc sơn hà", đọc tại đền Trương Hống, Trương Hát trong cuộc kháng Tống năm 1077.', topic: 'Văn học-Văn hóa' },
  { q: 'Nhà Lý dời đô từ Hoa Lư về đâu vào năm 1010?', opts: ['Phú Xuân', 'Thăng Long', 'Đại La', 'Cổ Loa'], ans: 1, explain: 'Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long (nay là Hà Nội).', topic: 'Triều đại' },
  { q: 'Đinh Bộ Lĩnh dẹp loạn bao nhiêu sứ quân để thống nhất đất nước?', opts: ['8 sứ quân', '10 sứ quân', '12 sứ quân', '15 sứ quân'], ans: 2, explain: 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân năm 968, lập ra nhà Đinh, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư.', topic: 'Triều đại' },
  { q: 'Khởi nghĩa Yên Thế do ai lãnh đạo chống thực dân Pháp?', opts: ['Phan Bội Châu', 'Hoàng Hoa Thám', 'Phan Châu Trinh', 'Nguyễn Thái Học'], ans: 1, explain: 'Hoàng Hoa Thám (Đề Thám) lãnh đạo khởi nghĩa Yên Thế (1884–1913) — cuộc kháng chiến dài nhất chống Pháp thời đó.', topic: 'Danh nhân' },
  { q: 'Hiệp định Genève năm 1954 chia cắt Việt Nam tại vĩ tuyến bao nhiêu?', opts: ['Vĩ tuyến 16', 'Vĩ tuyến 17', 'Vĩ tuyến 18', 'Vĩ tuyến 19'], ans: 1, explain: 'Hiệp định Genève tháng 7/1954 tạm thời chia đôi Việt Nam tại vĩ tuyến 17 (sông Bến Hải, Quảng Trị).', topic: 'Thời hiện đại' },
  { q: 'Ai là vị vua sáng lập nhà Nguyễn, triều đại phong kiến cuối cùng của Việt Nam?', opts: ['Nguyễn Ánh (Gia Long)', 'Nguyễn Huệ', 'Minh Mạng', 'Tự Đức'], ans: 0, explain: 'Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long, thống nhất đất nước và lập ra nhà Nguyễn.', topic: 'Triều đại' },
  { q: 'Chiến thắng nào đã chấm dứt sự xâm lược của quân Nguyên Mông lần thứ 3?', opts: ['Trận Tây Kết', 'Trận Bạch Đằng 1288', 'Trận Đống Đa', 'Trận Chi Lăng'], ans: 1, explain: 'Năm 1288, trận Bạch Đằng do Trần Hưng Đạo chỉ huy đã tiêu diệt hoàn toàn đạo quân Nguyên Mông lần thứ 3.', topic: 'Chống ngoại xâm' },
  { q: '"Bình Ngô đại cáo" là tác phẩm của ai?', opts: ['Lê Lợi', 'Nguyễn Trãi', 'Ngô Sĩ Liên', 'Lê Thánh Tông'], ans: 1, explain: 'Nguyễn Trãi soạn Bình Ngô đại cáo năm 1428, thay Lê Lợi tuyên bố nền độc lập sau khi đuổi quân Minh ra khỏi đất nước.', topic: 'Văn học-Văn hóa' },
  { q: 'Việt Nam tuyên bố độc lập hoàn toàn, thống nhất đất nước vào năm nào?', opts: ['1973', '1975', '1976', '1977'], ans: 1, explain: 'Ngày 30/4/1975, miền Nam hoàn toàn giải phóng. Năm 1976, nước Cộng hòa Xã hội Chủ nghĩa Việt Nam chính thức thành lập.', topic: 'Thời hiện đại' },
];

let qIndex = 0, qScore = 0;
let q3Timer = null, q3TimeLeft = 20;
let activeQuizData = [];
let selectedTopic = 'Tất cả';
let quizMode = '1player'; // '1player' | '1v1'
let currentPlayer = 1;
let p1Score = 0, p2Score = 0;
function buildActiveQuiz() {
  const pool = selectedTopic === 'Tất cả'
    ? quizData
    : quizData.filter(q => q.topic === selectedTopic);
  activeQuizData = pool.sort(() => Math.random() - 0.5).slice(0, 10);
}
function renderQuiz() {
 if (qIndex >= activeQuizData.length) { showQuizResult(); return; }
 const q = activeQuizData[qIndex];
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-card').style.display = 'block';

  // Progress dots
  const prog = document.getElementById('quiz-progress');
  prog.innerHTML = '';
  activeQuizData.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'progress-dot' + (i < qIndex ? ' done' : i === qIndex ? ' current' : '');
    prog.appendChild(d);
  });

  document.getElementById('quiz-question').innerHTML = `<span class="q-num">${qIndex+1}</span>${q.q}`;
  document.getElementById('quiz-correct').textContent = qScore;
  document.getElementById('quiz-explain').className = 'quiz-explain';

  // FIX 4: use class toggle only
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.classList.remove('show');

  const letters = ['A', 'B', 'C', 'D'];
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.innerHTML = `<div class="opt-letter">${letters[i]}</div>${opt}`;
    btn.onclick = () => selectQuiz(i, q.ans, q.explain);
    opts.appendChild(btn);
  });
  clearInterval(q3Timer);
q3TimeLeft = 20;
document.getElementById('g3-timer').textContent = '⏱ 20s';
q3Timer = setInterval(() => {
  q3TimeLeft--;
  document.getElementById('g3-timer').textContent = '⏱ ' + q3TimeLeft + 's';
  if (q3TimeLeft <= 5) document.getElementById('g3-timer').style.color = '#e74c3c';
  if (q3TimeLeft <= 0) { clearInterval(q3Timer); selectQuiz(-1, activeQuizData[qIndex].ans, activeQuizData[qIndex].explain); }
}, 1000);
}

function selectQuiz(chosen, correct, explain) {
  clearInterval(q3Timer);
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('show-correct');
    if (i === chosen && chosen !== correct) b.classList.add('selected-wrong');
    if (i === chosen && chosen === correct) b.classList.add('selected-correct');
  });

  const exp = document.getElementById('quiz-explain');
  exp.textContent = (chosen === correct ? '✅ ' : '📖 ') + explain;
  exp.className = 'quiz-explain show';

 if (chosen === correct) {
  if (quizMode === '1v1') {
    if (currentPlayer === 1) p1Score++; else p2Score++;
  } else { qScore++; }
  addXP(15); playCorrectSound();
} else { playWrongSound(); }

// Cập nhật hiển thị điểm
if (quizMode === '1v1') {
  document.getElementById('quiz-correct').textContent = `P1: ${p1Score} — P2: ${p2Score}`;
} else {
  document.getElementById('quiz-correct').textContent = qScore;
}
 

  // FIX 4: class toggle only
  document.getElementById('quiz-next').classList.add('show');
}

function nextQuiz() {
  if (quizMode === '1v1') {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    showToast(`🎮 Lượt của Người chơi ${currentPlayer}!`, '🎮');
  }
  qIndex++;
  renderQuiz();
}

function showQuizResult() {
  document.getElementById('quiz-card').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

 // Tìm (trong showQuizResult):
const pct = qScore / activeQuizData.length;
let trophy = '🏆', title = 'Xuất sắc!', sub = 'Bạn là bậc thầy Lịch Sử!';
if (pct < 0.4) { trophy = '📚'; title = 'Cần cố gắng hơn!'; sub = 'Hãy ôn tập và thử lại nhé!'; }
else if (pct < 0.7) { trophy = '🎖️'; title = 'Khá tốt!'; sub = 'Bạn đang trên đà tiến bộ!'; }
else if (pct < 1) { trophy = '🥈'; title = 'Rất giỏi!'; sub = 'Chỉ còn một bước nữa thôi!'; }

  document.getElementById('result-trophy').textContent = trophy;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub;
document.getElementById('final-score').textContent = `${qScore}/10`;

  const badges = [];
  if (qScore >= 8)  badges.push('🏅 Nhà Sử Học Tập Sự');
if (qScore >= 14) badges.push('🥇 Sử Học Giỏi');
if (qScore === 20) badges.push('👑 Bậc Thầy Lịch Sử');
if (qScore >= 5)  badges.push('🔥 Tinh thần học hỏi');


  const bg = document.getElementById('badge-grid');
  bg.innerHTML = badges.map(b => `<div class="badge">${b}</div>`).join('');

  addXP(qScore * 5);
saveProgress('g3_best', Math.max(qScore, loadProgress('g3_best', 0)));
// Thẻ 10: Quiz tuyệt đối 10/10
if (qScore >= 10) unlockCard('quang-trung');
// Thẻ 11: hoàn thành tất cả game (kiểm tra qua saveProgress)
const allDone = loadProgress('g1_best',0) > 0 && loadProgress('g2_best',0) > 0
  && loadProgress('g4_best',0) > 0 && loadProgress('g5_correct',0) > 0;
if (allDone) unlockCard('ho-chi-minh');
// Thẻ 12: mở khi có 11 thẻ trước
if (loadProgress('unlocked_cards',[]).length >= 11) unlockCard('vo-nguyen-giap');
}

function restartQuiz() {
  qIndex = 0; qScore = 0; p1Score = 0; p2Score = 0; currentPlayer = 1;
  buildActiveQuiz();
  renderQuiz();
}

// ========== LEADERBOARD ==========
const lbData = [
  { name: '🧑 Minh Tuấn', xp: 340 },
  { name: '👧 Lan Anh', xp: 290 },
  { name: '🧑 Đức Huy', xp: 210 },
  { name: '👦 Bảo Nam', xp: 180 },
  { name: '👧 Thu Hà', xp: 150 },
];
const ranks = ['🥇', '🥈', '🥉', '4.', '5.'];

function updateLeaderboard() {
  const myEntry = { name: '⭐ Bạn', xp: totalXP };
  const allEntries = [...lbData, myEntry].sort((a, b) => b.xp - a.xp).slice(0, 5);
  const lb = document.getElementById('lb-list');
  lb.innerHTML = allEntries.map((e, i) => `
    <div class="lb-item">
      <div class="lb-rank">${ranks[i] || (i+1)+'.'}</div>
      <div class="lb-name">${e.name}</div>
      <div class="lb-xp">⚡ ${e.xp} XP</div>
    </div>
  `).join('');
}
function setQuizMode(mode) {
  quizMode = mode;
  document.getElementById('quiz-1v1-banner').style.display = mode === '1v1' ? 'block' : 'none';
  restartQuiz();
}
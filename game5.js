// ========== GAME 5: VÒNG QUAY LỊCH SỬ ==========
const wheelSegments = [
  { label: '⚔️\nChiến trận', color: '#C0392B', qSet: 'battle' },
  { label: '👑\nTriều đại', color: '#8E44AD', qSet: 'dynasty' },
  { label: '🌟\nNhân vật', color: '#F39C12', qSet: 'person' },
  { label: '📅\nNăm tháng', color: '#2980B9', qSet: 'year' },
  { label: '🗺️\nĐịa danh', color: '#27AE60', qSet: 'place' },
  { label: '📜\nVăn hóa', color: '#E67E22', qSet: 'culture' },
];

const wheelQuestions = {
  battle: [
    { q: 'Trong trận Bạch Đằng 938, Ngô Quyền dùng gì để bẫy thuyền giặc?', opts: ['Xích sắt', 'Cọc nhọn', 'Lửa', 'Đá tảng'], ans: 1, exp: 'Ngô Quyền cắm cọc nhọn bịt sắt xuống lòng sông, khi thủy triều rút thuyền địch bị cọc đâm thủng.' },
    { q: 'Trận Chi Lăng – Xương Giang năm 1427 tiêu diệt đạo viện binh của nhà nào?', opts: ['Nguyên', 'Minh', 'Thanh', 'Tống'], ans: 1, exp: 'Lê Lợi và Nguyễn Trãi dùng kế mai phục tiêu diệt 10 vạn quân Minh tiếp viện tại Chi Lăng.' },
    { q: 'Chiến thắng Điện Biên Phủ 1954 kết thúc sự đô hộ của nước nào tại Việt Nam?', opts: ['Mỹ', 'Anh', 'Pháp', 'Nhật'], ans: 2, exp: 'Sau thất bại Điện Biên Phủ, Pháp ký Hiệp định Genève, chấm dứt gần 100 năm đô hộ.' },
  ],
  dynasty: [
    { q: 'Triều đại nào xây dựng Văn Miếu – Quốc Tử Giám đầu tiên?', opts: ['Trần', 'Lý', 'Lê Sơ', 'Nguyễn'], ans: 1, exp: 'Năm 1070, vua Lý Thánh Tông cho xây Văn Miếu thờ Khổng Tử; năm 1076 lập Quốc Tử Giám.' },
    { q: 'Nhà Nguyễn đóng đô ở đâu?', opts: ['Hà Nội', 'Huế', 'Đà Nẵng', 'Hội An'], ans: 1, exp: 'Gia Long thống nhất đất nước năm 1802, chọn Phú Xuân (Huế) làm kinh đô.' },
    { q: 'Đinh Bộ Lĩnh lập nước tên gì sau khi dẹp loạn 12 sứ quân?', opts: ['Đại Việt', 'Đại Cồ Việt', 'Văn Lang', 'Âu Lạc'], ans: 1, exp: 'Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt quốc hiệu là Đại Cồ Việt.' },
  ],
  person: [
    { q: 'Ai là tác giả của "Bình Ngô đại cáo"?', opts: ['Lê Lợi', 'Trần Hưng Đạo', 'Nguyễn Trãi', 'Ngô Thì Nhậm'], ans: 2, exp: 'Nguyễn Trãi viết Bình Ngô đại cáo theo lệnh Lê Lợi năm 1428, tuyên bố nền độc lập sau 20 năm chống Minh.' },
    { q: 'Trần Nhân Tông sau khi nhường ngôi đã trở thành ai?', opts: ['Trạng nguyên', 'Thiền sư', 'Đại tướng', 'Sứ thần'], ans: 1, exp: 'Trần Nhân Tông xuất gia, sáng lập Thiền phái Trúc Lâm Yên Tử — dòng thiền mang bản sắc Việt Nam.' },
    { q: 'Võ Thị Sáu quê ở tỉnh nào?', opts: ['Bà Rịa – Vũng Tàu', 'Bình Dương', 'Đồng Nai', 'Long An'], ans: 0, exp: 'Võ Thị Sáu sinh tại Đất Đỏ, Bà Rịa – Vũng Tàu, anh hùng liệt sĩ trẻ nhất Việt Nam.' },
  ],
  year: [
    { q: 'Năm nào Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long?', opts: ['968', '1010', '1075', '1054'], ans: 1, exp: 'Năm 1010, vua Lý Thái Tổ viết Chiếu dời đô, chuyển kinh đô từ Hoa Lư về Đại La (đổi tên Thăng Long).' },
    { q: 'Hiệp định Paris về Việt Nam được ký vào năm nào?', opts: ['1968', '1972', '1973', '1975'], ans: 2, exp: 'Ngày 27/1/1973, Hiệp định Paris ký kết, Mỹ rút quân khỏi Việt Nam.' },
    { q: 'Năm nào Pháp nổ súng tấn công Đà Nẵng mở đầu xâm lược Việt Nam?', opts: ['1858', '1862', '1867', '1873'], ans: 0, exp: 'Ngày 1/9/1858, liên quân Pháp – Tây Ban Nha nổ súng vào Đà Nẵng, mở đầu cuộc xâm lược.' },
  ],
  place: [
    { q: 'Kinh đô của nước Văn Lang (thời Hùng Vương) ở đâu?', opts: ['Hoa Lư', 'Phong Châu', 'Cổ Loa', 'Thăng Long'], ans: 1, exp: 'Phong Châu (nay thuộc Phú Thọ) là kinh đô của nước Văn Lang thời các Vua Hùng.' },
    { q: 'Đại bản doanh khởi nghĩa Lam Sơn của Lê Lợi ở tỉnh nào?', opts: ['Nghệ An', 'Thanh Hóa', 'Ninh Bình', 'Hà Tĩnh'], ans: 1, exp: 'Lam Sơn thuộc huyện Thọ Xuân, tỉnh Thanh Hóa — nơi Lê Lợi phát động khởi nghĩa năm 1418.' },
    { q: 'Trận Bạch Đằng 1288 diễn ra trên con sông chảy qua tỉnh nào hiện nay?', opts: ['Hải Phòng & Quảng Ninh', 'Thái Bình & Nam Định', 'Hà Nam & Hưng Yên', 'Bắc Giang & Lạng Sơn'], ans: 0, exp: 'Sông Bạch Đằng chảy qua Hải Phòng và Quảng Ninh, là nơi diễn ra 3 trận thủy chiến lịch sử.' },
  ],
  culture: [
    { q: 'Chữ Nôm được dùng để viết tác phẩm nổi tiếng nào?', opts: ['Đại Việt sử ký', 'Truyện Kiều', 'Bình Ngô đại cáo', 'Hịch tướng sĩ'], ans: 1, exp: 'Nguyễn Du viết Truyện Kiều bằng chữ Nôm — một kiệt tác văn học của dân tộc Việt Nam.' },
    { q: 'Lễ hội Đền Hùng (Giỗ Tổ Hùng Vương) diễn ra vào ngày mấy tháng 3 Âm lịch?', opts: ['Mùng 1', 'Mùng 3', 'Mùng 5', 'Mùng 10'], ans: 3, exp: 'Giỗ Tổ Hùng Vương diễn ra ngày 10/3 Âm lịch hàng năm, là ngày Quốc lễ của Việt Nam.' },
    { q: 'Trống đồng Đông Sơn là biểu tượng văn hóa của nền văn minh nào?', opts: ['Óc Eo', 'Sa Huỳnh', 'Đông Sơn', 'Đồng Nai'], ans: 2, exp: 'Trống đồng Đông Sơn (3000–2000 năm trước) là đỉnh cao của văn minh lúa nước miền Bắc Việt Nam cổ đại.' },
  ],
};

let g5Score = 0, g5Correct = 0, g5Wrong = 0; let g5Timer = null, g5TimeLeft = 15;
let g5SpinCount = 0;
const G5_MAX_SPINS = 10;
let wheelSpinning = false;
let currentWheelAngle = 0;
let currentQSet = null;

function drawWheel(angle) {
  const canvas = document.getElementById('spin-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 140, cy = 140, r = 130;
  const segAngle = (2 * Math.PI) / wheelSegments.length;
  ctx.clearRect(0, 0, 280, 280);

  wheelSegments.forEach((seg, i) => {
    const start = angle + i * segAngle;
    const end = start + segAngle;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + segAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px Nunito, sans-serif';
    const lines = seg.label.split('\n');
    lines.forEach((line, li) => {
      ctx.fillText(line, r - 12, (li - (lines.length-1)/2) * 14 + 2);
    });
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, 2*Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#DDD';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#1A2A4A';
  ctx.font = 'bold 18px Nunito';
  ctx.textAlign = 'center';
  ctx.fillText('🎡', cx, cy + 6);
}

function spinWheel() {
  if (wheelSpinning) return;
  if (g5SpinCount >= G5_MAX_SPINS) return;
  wheelSpinning = true;
  document.getElementById('spin-btn').disabled = true;
  document.getElementById('wheel-qbox').classList.remove('show');

  const extraSpins = 4 + Math.random() * 4; // 4-8 full rotations
  const randSeg = Math.floor(Math.random() * wheelSegments.length);
  const segAngle = (2 * Math.PI) / wheelSegments.length;
  // Target: pointer (top = -π/2) lands in middle of chosen segment
  const targetAngle = -Math.PI/2 - (randSeg * segAngle + segAngle/2);
  const totalRotation = extraSpins * 2 * Math.PI + ((targetAngle - currentWheelAngle) % (2*Math.PI));

  const startAngle = currentWheelAngle;
  const endAngle = startAngle + totalRotation;
  const duration = 3000;
  const startTime = performance.now();

  function ease(t) {
    // Ease out cubic
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    currentWheelAngle = startAngle + (endAngle - startAngle) * ease(progress);
    drawWheel(currentWheelAngle);
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentWheelAngle = endAngle % (2 * Math.PI);
      wheelSpinning = false;
      currentQSet = wheelSegments[randSeg].qSet;
      showWheelQuestion(randSeg);
    }
  }
  requestAnimationFrame(animate);
}

function showWheelQuestion(segIndex) {
  const seg = wheelSegments[segIndex];
  const pool = wheelQuestions[seg.qSet];
  const q = pool[Math.floor(Math.random() * pool.length)];

  document.getElementById('wheel-category').textContent = seg.label.replace('\n', ' ');
  document.getElementById('wheel-qtext').textContent = q.q;

  const opts = document.getElementById('wheel-opts');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'wheel-opt';
    btn.innerHTML = `<strong>${letters[i]}.</strong> ${opt}`;
    btn.onclick = () => answerWheel(i, q.ans, q.exp, btn);
    opts.appendChild(btn);
  });

  const qbox = document.getElementById('wheel-qbox');
if (qbox) { qbox.style.display = 'block'; }
clearInterval(g5Timer);
g5TimeLeft = 15;
document.getElementById('g5-timer').textContent = '⏱ 15s';
g5Timer = setInterval(() => {
  g5TimeLeft--;
  document.getElementById('g5-timer').textContent = '⏱ ' + g5TimeLeft + 's';
  if (g5TimeLeft <= 5) document.getElementById('g5-timer').style.color = '#e74c3c';
  if (g5TimeLeft <= 0) { clearInterval(g5Timer); answerWheel(-1, -1, 'Hết giờ!', null); }
}, 1000);
}

function answerWheel(chosen, correct, explain, btn) {
  clearInterval(g5Timer);
  document.querySelectorAll('.wheel-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('w-correct');
    if (i === chosen && chosen !== correct) b.classList.add('w-wrong');
  });

  if (chosen === correct) {
    g5Score += 25; g5Correct++;
    addXP(25); playCorrectSound();
    showToast('+25 XP ⚡', '⚡');
  } else {
    g5Wrong++;
    playWrongSound();
  }

  // Show explain
  const exp = document.createElement('div');
  exp.style.cssText = 'margin-top:12px;padding:12px 14px;background:rgba(255,255,255,0.12);border-radius:10px;font-size:0.85rem;line-height:1.5;color:rgba(255,255,255,0.9);';
  exp.textContent = (chosen === correct ? '✅ ' : '📖 ') + explain;
  document.getElementById('wheel-opts').appendChild(exp);

  document.getElementById('g5-score').textContent = g5Score;
  g5SpinCount++;
const left = G5_MAX_SPINS - g5SpinCount;
const spinEl = document.getElementById('g5-spins-left');
if (spinEl) spinEl.textContent = left > 0 ? `🎡 Còn ${left} lượt quay` : '🏁 Hết lượt!';
if (g5SpinCount >= G5_MAX_SPINS) { setTimeout(showG5Result, 1800); }
  document.getElementById('g5-correct').textContent = g5Correct;
  document.getElementById('g5-wrong').textContent = g5Wrong;
saveProgress('g5_correct', g5Correct);
// Thẻ 8: đúng 7/10
if (g5Correct >= 7) unlockCard('ba-trieu');
// Thẻ 9: đúng 9/10
if (g5Correct >= 9) unlockCard('vo-thi-sau');
  // Re-enable spin after 1.5s
  setTimeout(() => {
    document.getElementById('spin-btn').disabled = false;
  }, 1500);
}
function showG5Result() {
  document.getElementById('spin-btn').disabled = true;
  const pct = Math.round((g5Correct / G5_MAX_SPINS) * 100);
  let trophy = pct >= 80 ? '🏆' : pct >= 60 ? '🥈' : pct >= 40 ? '🎖️' : '📚';
  let msg = pct >= 80 ? 'Bậc thầy lịch sử!' : pct >= 60 ? 'Rất giỏi!' : pct >= 40 ? 'Khá tốt!' : 'Cần cố gắng hơn!';
  const qbox = document.getElementById('wheel-qbox');
  if (qbox) {
    qbox.style.display = 'block';
    qbox.querySelector('div').innerHTML = `
      <div style="text-align:center;padding:20px 0;">
        <div style="font-size:3rem;">${trophy}</div>
        <div style="font-family:'Baloo 2',cursive;font-size:1.4rem;font-weight:800;margin:8px 0;">${msg}</div>
        <div style="font-size:1rem;opacity:0.8;margin-bottom:16px;">✅ ${g5Correct}/${G5_MAX_SPINS} câu đúng · ⚡ ${g5Score} XP</div>
        <button onclick="resetG5()" style="background:#F39C12;border:none;border-radius:50px;padding:12px 28px;font-family:'Baloo 2',cursive;font-size:1rem;font-weight:700;color:#1A2A4A;cursor:pointer;">🔄 Chơi lại</button>
      </div>
    `;
  }
  saveProgress('g5_best', Math.max(g5Correct, loadProgress('g5_best', 0)));

}

function resetG5() {
  g5Score = 0; g5Correct = 0; g5Wrong = 0; g5SpinCount = 0;
  document.getElementById('g5-score').textContent = 0;
  document.getElementById('g5-correct').textContent = 0;
  document.getElementById('g5-wrong').textContent = 0;
  document.getElementById('g5-spins-left').textContent = `🎡 Còn ${G5_MAX_SPINS} lượt quay`;
  document.getElementById('spin-btn').disabled = false;
  document.getElementById('wheel-qbox').style.display = 'none';
}
// Init wheel on load
window.addEventListener('load', () => {
  drawWheel(0);
});

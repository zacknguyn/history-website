// ========== GAME 4: HÀNH TRÌNH XUYÊN THỜI GIAN ==========
const journeyRounds = [
  {
    events: [
      { id: 'j1', text: 'Hai Bà Trưng khởi nghĩa', year: 40 },
      { id: 'j2', text: 'Ngô Quyền — Bạch Đằng', year: 938 },
      { id: 'j3', text: 'Đinh Bộ Lĩnh thống nhất', year: 968 },
      { id: 'j4', text: 'Lý Công Uẩn dời đô', year: 1010 },
    ]
  },
  {
    events: [
      { id: 'j5', text: 'Lý Thường Kiệt — sông Như Nguyệt', year: 1077 },
      { id: 'j6', text: 'Trần Hưng Đạo — Bạch Đằng lần 3', year: 1288 },
      { id: 'j7', text: 'Lê Lợi lập nhà Lê Sơ', year: 1428 },
      { id: 'j8', text: 'Nguyễn Hoàng vào trấn thủ Thuận Hóa', year: 1558 },
    ]
  },
  {
    events: [
      { id: 'j9',  text: 'Quang Trung đại phá quân Thanh', year: 1789 },
      { id: 'j10', text: 'Pháp tấn công Đà Nẵng', year: 1858 },
      { id: 'j11', text: 'Tuyên ngôn Độc lập 2/9', year: 1945 },
      { id: 'j12', text: 'Chiến thắng Điện Biên Phủ', year: 1954 },
    ]
  },
  {
    events: [
      { id: 'j13', text: 'Pháp chiếm Nam Kỳ (6 tỉnh)', year: 1867 },
      { id: 'j14', text: 'Phong trào Cần Vương nổ ra', year: 1885 },
      { id: 'j15', text: 'Đảng Cộng sản Việt Nam thành lập', year: 1930 },
      { id: 'j16', text: 'Cách mạng Tháng Tám', year: 1945 },
    ]
  },
  {
    events: [
      { id: 'j17', text: 'Mỹ ném bom miền Bắc lần đầu', year: 1964 },
      { id: 'j18', text: 'Tết Mậu Thân', year: 1968 },
      { id: 'j19', text: 'Hiệp định Paris ký kết', year: 1973 },
      { id: 'j20', text: 'Thống nhất đất nước', year: 1975 },
    ]
  },
];

let g4Round = 0, g4Score = 0, g4Combo = 0;
let g4Selected = []; // list of event ids in order clicked
let g4Events = [];
let g4Locked = false;

function renderJourney() {
  g4Selected = [];
  g4Locked = false;
  g4Events = [...journeyRounds[g4Round].events].sort(() => Math.random() - 0.5);

  document.getElementById('g4-score').textContent = g4Score;
  document.getElementById('g4-round').textContent = g4Round + 1;
  document.getElementById('g4-combo').textContent = g4Combo;
  document.getElementById('g4-result').className = 'result-msg';
  document.getElementById('g4-chips-wrap').innerHTML = '';

  const grid = document.getElementById('g4-grid');
  grid.innerHTML = '';
  g4Events.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'journey-event-card';
    card.id = 'jcard-' + ev.id;
    card.innerHTML = `<div style="font-size:1.1rem;margin-bottom:6px;">📜</div>${ev.text}`;
    card.onclick = () => selectJourneyEvent(ev.id, card);
    grid.appendChild(card);
  });
}

function selectJourneyEvent(id, card) {
  if (g4Locked) return;
  if (g4Selected.includes(id)) return;

  g4Selected.push(id);
  card.classList.add('selected');
  const badge = document.createElement('div');
  badge.className = 'order-badge';
  badge.textContent = g4Selected.length;
  card.appendChild(badge);

  // Update chips display
  updateJourneyChips();

  // Auto check when all selected
  if (g4Selected.length === g4Events.length) {
    setTimeout(checkJourney, 300);
  }
}

function updateJourneyChips() {
  const wrap = document.getElementById('g4-chips-wrap');
  wrap.innerHTML = '';
  g4Selected.forEach((id, i) => {
    const ev = g4Events.find(e => e.id === id);
    if (!ev) return;
    if (i > 0) {
      const arrow = document.createElement('span');
      arrow.className = 'journey-arrow';
      arrow.textContent = '→';
      wrap.appendChild(arrow);
    }
    const chip = document.createElement('div');
    chip.className = 'journey-chip';
    chip.innerHTML = `<span class="chip-num">${i+1}</span>${ev.text}`;
    wrap.appendChild(chip);
  });
}
 function showTimelineVisual(correctOrder) {
  const wrap = document.getElementById('g4-chips-wrap');
  wrap.innerHTML = '<div style="font-size:0.8rem;font-weight:700;color:#999;margin-bottom:8px;width:100%;letter-spacing:1px;">📅 DÒNG THỜI GIAN</div>';
  
  const tl = document.createElement('div');
  tl.className = 'timeline-visual';
  
  correctOrder.forEach((id, i) => {
    const ev = g4Events.find(e => e.id === id);
    if (!ev) return;
    
    // Node
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-node-text">${ev.text}</div>
      <div class="timeline-node-year">${ev.year}</div>
    `;
    tl.appendChild(node);
    
    // Line giữa các node
    if (i < correctOrder.length - 1) {
      const line = document.createElement('div');
      line.className = 'timeline-line';
      tl.appendChild(line);
    }
  });
  
  wrap.appendChild(tl);
}
  g4Locked = true;

function checkJourney() {
  if (g4Locked || g4Selected.length < g4Events.length) {
    if (g4Selected.length < g4Events.length) {
      showToast('Hãy chọn tất cả sự kiện!', '⚠️');
    }
    return;
  }
 
  const correctOrder = [...g4Events].sort((a, b) => a.year - b.year).map(e => e.id);
  let allCorrect = true;

  g4Selected.forEach((id, i) => {
    const card = document.getElementById('jcard-' + id);
    if (card) {
      card.classList.remove('selected');
      card.classList.add('locked');
      if (id === correctOrder[i]) {
        card.classList.add('correct-order');
        // Show year label
        const ev = g4Events.find(e => e.id === id);
        if (ev) {
          const yearTag = document.createElement('div');
          yearTag.style.cssText = 'font-size:0.75rem;color:var(--green);margin-top:4px;font-weight:800;';
          yearTag.textContent = 'Năm ' + ev.year;
          card.appendChild(yearTag);
        }
      } else {
        card.classList.add('wrong-order');
        allCorrect = false;
      }
    }
  });

  const res = document.getElementById('g4-result');
  if (allCorrect) {
    showTimelineVisual(correctOrder);
    g4Combo++;
    const bonus = g4Combo > 1 ? g4Combo * 5 : 0;
    const points = 30 + bonus;
    g4Score += points;
    res.className = 'result-msg success show';
    res.textContent = `🎉 Xuất sắc! +${points} XP${g4Combo > 1 ? ` (Combo x${g4Combo}!)` : ''}`;
    addXP(points);
    playCorrectSound();
    launchConfetti();
  } else {
    g4Combo = 0;
    res.className = 'result-msg fail show';
    // Show correct order
    const correctNames = correctOrder.map(id => {
      const ev = g4Events.find(e => e.id === id);
      return ev ? `${ev.text} (${ev.year})` : '';
    });
    res.innerHTML = `❌ Chưa đúng! Thứ tự đúng:<br><small>${correctNames.join(' → ')}</small>`;
    playWrongSound();
  }

  document.getElementById('g4-combo').textContent = g4Combo;
  document.getElementById('g4-score').textContent = g4Score;

  // Show next round button
  const checkBtn = document.getElementById('g4-check-btn');
  checkBtn.textContent = g4Round < journeyRounds.length - 1 ? '➜ Vòng tiếp theo' : '🏁 Xem kết quả';
  checkBtn.onclick = nextJourneyRound;
}

function nextJourneyRound() {
  g4Round++;
  if (g4Round >= journeyRounds.length) {
  document.getElementById('g4-result').className = 'result-msg success show';
  document.getElementById('g4-result').innerHTML = `🏆 Hoàn thành tất cả 5 vòng! Tổng điểm: <strong>${g4Score}</strong>`;
  document.getElementById('g4-check-btn').textContent = '🔄 Chơi lại';
  document.getElementById('g4-check-btn').onclick = resetJourney;
  showToast('🏅 Hoàn thành Game 4!', '🏅');
  saveProgress('g4_best', Math.max(g4Score, loadProgress('g4_best', 0)));
  unlockCard('le-loi'); // hoàn thành 5/5 vòng
  return;
}

// Mở thẻ 6 sau vòng 3
if (g4Round === 3) unlockCard('ly-thuong-kiet');
  document.getElementById('g4-check-btn').textContent = '✅ Xác nhận thứ tự';
  document.getElementById('g4-check-btn').onclick = checkJourney;
  renderJourney();
}

function resetJourney() {
  g4Round = 0; g4Score = 0; g4Combo = 0;
  document.getElementById('g4-check-btn').textContent = '✅ Xác nhận thứ tự';
  document.getElementById('g4-check-btn').onclick = checkJourney;
  renderJourney();
}

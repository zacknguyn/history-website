// ========== GAME 2: KÉO THẢ ==========
const ALL_DRAG_EVENTS = [
  { id:'e1',  text:'Hai Bà Trưng khởi nghĩa',           year:'40'   },
  { id:'e2',  text:'Chiến thắng Bạch Đằng — Ngô Quyền', year:'938'  },
  { id:'e3',  text:'Đinh Bộ Lĩnh thống nhất đất nước',  year:'968'  },
  { id:'e4',  text:'Nhà Lý dời đô về Thăng Long',        year:'1010' },
  { id:'e5',  text:'Khởi nghĩa Lam Sơn thắng lợi',      year:'1428' },
  { id:'e6',  text:'Đại phá quân Thanh — Quang Trung',   year:'1789' },
  { id:'e7',  text:'Tuyên ngôn Độc lập 2/9',             year:'1945' },
  { id:'e8',  text:'Chiến thắng Điện Biên Phủ',          year:'1954' },
  { id:'e9',  text:'Thống nhất đất nước',                year:'1975' },
  { id:'e10', text:'Nhà Trần đánh bại Mông Cổ lần 1',   year:'1258' },
  { id:'e11', text:'Chiến thắng Bạch Đằng — Trần Hưng Đạo', year:'1288' },
  { id:'e12', text:'Nguyễn Huệ lên ngôi Hoàng đế',      year:'1788' },
  { id:'e13', text:'Pháp chiếm thành Hà Nội lần đầu',   year:'1873' },
  { id:'e14', text:'Khởi nghĩa Yên Bái',                year:'1930' },
 
  { id:'e15', text:'Hiệp định Paris ký kết',             year:'1973' },
  { id:'e16', text:'Việt Nam gia nhập ASEAN',            year:'1995' },
  { id:'e17', text:'Lý Thường Kiệt phá Tống',           year:'1075' },
  { id:'e18', text:'Trận Chi Lăng — tiêu diệt quân Minh', year:'1427'},
  { id:'e19', text:'Hội nghị Thành Đô',                 year:'1990' },
  { id:'e20', text:'Nam Quốc Sơn Hà — Lý Thường Kiệt', year:'1077' },
  { id:'e21', text:'Đất nước gia nhập WTO',             year:'2007' },
  
  { id:'e22', text:'Nhà Nguyễn thành lập',              year:'1802' },
];

let dragEvents = [];

let usedEventSets = [];

let dragState = {};
let dragTimer = null;
let dragTimeLeft = 90;
let draggedId = null;
let touchGhost = null; // FIX 3: ghost element for touch drag

function initDrag() {
  dragState = {};
  draggedId = null;
  // Chọn 9 sự kiện ngẫu nhiên chưa dùng
  let available = ALL_DRAG_EVENTS.filter(e => !usedEventSets.includes(e.id));
  if (available.length < 9) { usedEventSets = []; available = [...ALL_DRAG_EVENTS]; }
  dragEvents = available.sort(() => Math.random() - 0.5).slice(0, 9);
  usedEventSets.push(...dragEvents.map(e => e.id));

  // Đếm ngược
  clearInterval(dragTimer);
  dragTimeLeft = 90;
  updateTimerDisplay();
  dragTimer = setInterval(() => {
    dragTimeLeft--;
    updateTimerDisplay();
    if (dragTimeLeft <= 0) { clearInterval(dragTimer); checkDrag(); }
  }, 1000);
  if (touchGhost) { touchGhost.remove(); touchGhost = null; }

  const pool = document.getElementById('events-pool');
  pool.innerHTML = '';
  const slots = document.getElementById('timeline-slots');
  slots.innerHTML = '';

  const shuffled = [...dragEvents].sort(() => Math.random() - 0.5);
  shuffled.forEach(ev => {
    const el = document.createElement('div');
    el.className = 'drag-event';
    el.id = 'drag-' + ev.id;
    el.textContent = ev.text;
    el.draggable = true;

    // Mouse drag
    el.addEventListener('dragstart', () => {
      draggedId = ev.id;
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));

    // FIX 3: Touch drag with ghost + touchend to drop
    el.addEventListener('touchstart', e => {
      draggedId = ev.id;
      const touch = e.touches[0];
      // create ghost
      touchGhost = document.createElement('div');
      touchGhost.className = 'drag-ghost';
      touchGhost.textContent = ev.text;
      touchGhost.style.left = touch.clientX + 'px';
      touchGhost.style.top = touch.clientY + 'px';
      document.body.appendChild(touchGhost);
    }, { passive: true });

    el.addEventListener('touchmove', e => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touchGhost) {
        touchGhost.style.left = touch.clientX + 'px';
        touchGhost.style.top = touch.clientY + 'px';
      }
      // highlight slot under finger
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const el2 = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = el2 && el2.closest('.timeline-slot');
      if (slot) slot.classList.add('drag-over');
    }, { passive: false });

    el.addEventListener('touchend', e => {
      if (touchGhost) { touchGhost.remove(); touchGhost = null; }
      document.querySelectorAll('.timeline-slot').forEach(s => s.classList.remove('drag-over'));
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const slot = target && target.closest('.timeline-slot');
      if (slot && draggedId) {
        dropToSlot(slot, slot.dataset.year);
      }
      draggedId = null;
    }, { passive: true });

    pool.appendChild(el);
  });

  dragEvents.forEach(ev => {
    const slot = document.createElement('div');
    slot.className = 'timeline-slot';
    slot.dataset.year = ev.year;
    slot.dataset.eventId = '';
    slot.innerHTML = `<div class="slot-year">${ev.year}</div><div class="slot-content"><span class="slot-empty">Kéo sự kiện vào đây...</span></div>`;
    slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
    slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('drag-over'); dropToSlot(slot, ev.year); });
    slots.appendChild(slot);
  });

  document.getElementById('g2-result').className = 'result-msg';
}

function dropToSlot(slot, year) {
  if (!draggedId) return;
  const ev = dragEvents.find(e => e.id === draggedId);
  if (!ev) return;

  // Remove from any previous slot
  Object.keys(dragState).forEach(k => { if (dragState[k] === draggedId) delete dragState[k]; });

  // Return old occupant to pool if slot taken
  const existing = slot.dataset.eventId;
  if (existing && existing !== draggedId) {
    const pool = document.getElementById('events-pool');
    const el = document.getElementById('drag-' + existing);
    if (el) pool.appendChild(el);
  }

  dragState[year] = draggedId;
  slot.dataset.eventId = draggedId;
  slot.querySelector('.slot-content').innerHTML = `<strong>${ev.text}</strong>`;
  slot.className = 'timeline-slot';

  const dragEl = document.getElementById('drag-' + draggedId);
  if (dragEl) dragEl.remove();
  draggedId = null;
}

function checkDrag() {
   clearInterval(dragTimer);
  let correct = 0;
  document.querySelectorAll('.timeline-slot').forEach(slot => {
    const year = slot.dataset.year;
    const eventId = slot.dataset.eventId;
    const expected = dragEvents.find(e => e.year === year);
    if (expected && eventId === expected.id) {
      slot.classList.add('correct-slot'); correct++;
    } else if (eventId) {
      slot.classList.add('wrong-slot');
    }
  });
  const res = document.getElementById('g2-result');
  const xp = correct * 15;
  if (correct === dragEvents.length) {
    res.className = 'result-msg success show';
    res.textContent = `🎉 Hoàn hảo! Tất cả ${correct}/${dragEvents.length} đúng! +${xp} XP`;
    saveProgress('g2_best', Math.max(correct, loadProgress('g2_best', 0)));
    checkG2Collection();
    addXP(xp);
  } else {
    res.className = 'result-msg fail show';
    res.textContent = `📊 Đúng ${correct}/${dragEvents.length}. Bạn đã nhận +${xp} XP. Thử lại để đạt điểm tuyệt đối!`;
    if (xp > 0) addXP(xp);
  }
}

function resetDrag() { clearInterval(dragTimer); initDrag(); }
function updateTimerDisplay() {
  let el = document.getElementById('g2-timer');
  if (!el) return;
  const m = Math.floor(dragTimeLeft / 60);
  const s = dragTimeLeft % 60;
  el.textContent = `⏱ ${m}:${s.toString().padStart(2,'0')}`;
  el.style.color = dragTimeLeft <= 15 ? '#e74c3c' : '#1A2A4A';
}
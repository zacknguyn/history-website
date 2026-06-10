// ===== INTRO STARS =====
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('intro-stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'intro-star';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--delay:${Math.random()*4}s;`;
    container.appendChild(s);
  }
});

// ===== PARTICLES (chạy sau khi intro đóng) =====
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const SYMBOLS = ['⚔', '🛡', '★', '✦', '◆', '▲'];
  const particles = Array.from({length: 38}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.4, vy: -0.2-Math.random()*0.4,
    size: 8+Math.random()*14,
    sym: SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)],
    alpha: 0.1+Math.random()*0.3,
    color: Math.random()>0.5 ? '#F39C12' : '#C0392B',
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.sym, p.x, p.y);
      p.x += p.vx; p.y += p.vy;
      if (p.y < -20) { p.y = H+10; p.x = Math.random()*W; }
      if (p.x < -20) p.x = W+10;
      if (p.x > W+20) p.x = -10;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#C0392B','#F39C12','#F1C40F','#27AE60','#2980B9','#fff','#E74C3C'];
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random()*colors.length)];
    const size = 6+Math.random()*10;
    el.style.cssText = `
      left:${Math.random()*100}vw;
      width:${size}px; height:${size}px;
      background:${color};
      --dur:${2+Math.random()*2}s;
      --delay:${Math.random()*0.8}s;
      --dx:${(Math.random()-0.5)*120}px;
      --br:${Math.random()>0.5?'50%':'2px'};
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3800);
  }
}

// ===== ÂM THANH (Web Audio API — không cần file mp3) =====
let audioCtx = null;

function playIntroSound() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Chuỗi nốt nhạc "heroic" đơn giản
    const notes = [261.6, 329.6, 392, 523.3, 659.3];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, audioCtx.currentTime + i*0.12);
      gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + i*0.12 + 0.05);
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + i*0.12 + 0.25);
      osc.start(audioCtx.currentTime + i*0.12);
      osc.stop(audioCtx.currentTime + i*0.12 + 0.3);
    });
  } catch(e) {}
}

function playCorrectSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = 'triangle'; osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
  } catch(e) {}
}

function playWrongSound() {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = 'sawtooth'; osc.frequency.value = 180;
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.35);
    osc.start(); osc.stop(audioCtx.currentTime + 0.35);
  } catch(e) {}
}

// ===== BẮT ĐẦU (nút intro) =====
function startGame() {
  playIntroSound();
  launchConfetti();
  document.getElementById('intro-screen').classList.add('hide');
  initParticles();
}

// ===== localStorage HELPERS =====
function saveProgress(key, value) {
  try { localStorage.setItem('suviet_' + key, JSON.stringify(value)); } catch(e) {}
}
function loadProgress(key, fallback) {
  try {
    const v = localStorage.getItem('suviet_' + key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}

// ===== XP & LEVEL =====
let totalXP = loadProgress('xp', 0);

const LEVEL_NAMES = [
  'Sử Học Sinh', 'Học Trò Lịch Sử', 'Chiến Binh Sử', 
  'Dũng Sĩ Lịch Sử', 'Hiệp Sĩ Sử Học', 'Đại Nhân Lịch Sử',
  'Bậc Thầy Sử Học', 'Huyền Thoại Lịch Sử'
];

function getLevelInfo(xp) {
  const level = Math.floor(xp / 100) + 1;
  const capped = Math.min(level, LEVEL_NAMES.length);
  return {
    level: capped,
    name: LEVEL_NAMES[capped - 1],
    progress: xp % 100
  };
}

function addXP(amount) {
  const oldLevel = getLevelInfo(totalXP).level;
  totalXP += amount;
  saveProgress('xp', totalXP);

  const info = getLevelInfo(totalXP);

  const xpEl = document.getElementById('xp-count');
  if (xpEl) xpEl.textContent = totalXP;

  const fillEl = document.getElementById('xp-fill');
  if (fillEl) fillEl.style.width = info.progress + '%';

  const levelEl = document.getElementById('level-count');
  if (levelEl) levelEl.textContent = info.level + ' — ' + info.name;

  // Level up toast
  if (info.level > oldLevel) {
    showToast(`🎊 Lên cấp ${info.level}: ${info.name}!`, '🎊');
    launchConfetti();
  }

  updateLeaderboard();
}

function initXPDisplay() {
  const info = getLevelInfo(totalXP);
  const xpEl = document.getElementById('xp-count');
  if (xpEl) xpEl.textContent = totalXP;
  const fillEl = document.getElementById('xp-fill');
  if (fillEl) fillEl.style.width = info.progress + '%';
  const levelEl = document.getElementById('level-count');
  if (levelEl) levelEl.textContent = info.level + ' — ' + info.name;
}

// ===== TOAST =====
let toastTimer = null;

function showToast(msg, icon = '⚡') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const msgEl = document.getElementById('toast-msg');
  const iconEl = document.getElementById('toast-icon');

  if (msgEl) msgEl.textContent = msg;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// ===== TAB / GAME SWITCH =====
function showGame(id, btn) {
  document.querySelectorAll('.game-panel').forEach(p => {
    p.classList.remove('active');
  });

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
  });

  const game = document.getElementById(id);

  if (game) game.classList.add('active');
  if (btn) btn.classList.add('active');
}



// ===== START GAME =====
document.addEventListener('DOMContentLoaded', () => {
  initXPDisplay();

  if (typeof renderG1 === 'function') renderG1();
  if (typeof initDrag === 'function') initDrag();
  if (typeof buildActiveQuiz === 'function') buildActiveQuiz();
if (typeof renderQuiz === 'function') renderQuiz();
  if (typeof renderJourney === 'function') renderJourney();
  if (typeof renderCollection === 'function') renderCollection();
  updateLeaderboard();
});
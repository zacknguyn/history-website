// ========== THẺ SƯU TẬP NHÂN VẬT ==========

const allCards = [
  {
    id: 'ngo-quyen',
    order: 1,
    name: 'Ngô Quyền',
    title: 'Anh hùng sông Bạch Đằng',
    year: '938',
    img: 'images/ngo-quyen.jpg',
    rarity: 'rare',
    rarityLabel: '⚔️ Hiếm',
    desc: 'Đánh tan quân Nam Hán, chấm dứt 1000 năm Bắc thuộc.',
    unlockHint: 'Hoàn thành Game 1',
    quote: '"Một cọc sắt dưới lòng sông có thể nhấn chìm vạn thuyền giặc."',
    detail: 'Ngô Quyền (898–944) xuất thân từ Đường Lâm, Hà Nội. Ông lấy con gái Dương Đình Nghệ và sau đó đánh bại quân Nam Hán trên sông Bạch Đằng năm 938, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ.',
  },
  {
    id: 'tran-hung-dao',
    order: 2,
    name: 'Trần Hưng Đạo',
    title: 'Đại Nguyên Soái',
    year: '1288',
    img: 'images/hungdao.jpg',
    rarity: 'epic',
    rarityLabel: '🐉 Sử Thi',
    desc: '3 lần đánh bại quân Nguyên Mông, tác giả Hịch tướng sĩ.',
    unlockHint: 'HGame 1 đạt 200 điểm',
    quote: '"Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước đã."',
    detail: 'Trần Hưng Đạo (1228–1300) tên thật Trần Quốc Tuấn. Ông 3 lần đánh bại đế quốc Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ. Tác phẩm Hịch tướng sĩ của ông được coi là áng văn chương bất hủ.',
  },
  {
    id: 'hai-ba-trung',
    order: 3,
    name: 'Hai Bà Trưng',
    title: 'Biểu Tượng Bất Khuất',
    year: '40 SCN',
    img: 'images/haibatrung.jpg',
    rarity: 'rare',
    rarityLabel: '🌺 Hiếm',
    desc: 'Khởi nghĩa chống Đông Hán, hai nữ anh hùng đầu tiên của Việt Nam.',
    unlockHint: 'Game 1 đạt 320 điểm',
    quote: '"Một xin rửa sạch nước thù, hai xin đem lại nghiệp xưa họ Hùng."',
    detail: 'Hai Bà Trưng (? – 43 SCN) gồm Trưng Trắc và Trưng Nhị, quê Mê Linh. Năm 40 SCN phất cờ khởi nghĩa, xưng vương, làm chủ 65 thành trì. Là hai nữ anh hùng đầu tiên trong lịch sử Việt Nam.',
  },
  {
    id: 'dinh-bo-linh',
    order: 4,
    name: 'Đinh Bộ Lĩnh',
    title: 'Hoàng Đế Đầu Tiên',
    year: '968',
    img: 'images/DinhBoLinh.jpg',
    rarity: 'rare',
    rarityLabel: '🏰 Hiếm',
    desc: 'Dẹp loạn 12 sứ quân, lập Đại Cồ Việt — nhà nước phong kiến đầu tiên.',
    unlockHint: 'Game 2 đúng 7/9',
    quote: '"Dẹp loạn mười hai sứ quân, non sông thu về một mối."',
    detail: 'Đinh Bộ Lĩnh (924–979) quê Hoa Lư, Ninh Bình. Dẹp loạn 12 sứ quân năm 968, thống nhất đất nước, lập Đại Cồ Việt — nhà nước phong kiến trung ương tập quyền đầu tiên của Việt Nam.',
  },
  {
    id: 'nguyen-trai',
    order: 5,
    name: 'Nguyễn Trãi',
    title: 'Danh Nhân Văn Hóa',
    year: 'TK XV',
    img: 'images/NguyenTrai.jpg',
    rarity: 'epic',
    rarityLabel: '✍️ Sử Thi',
    desc: 'Soạn Bình Ngô đại cáo, quân sư tài ba của Lê Lợi.',
    unlockHint: 'Game 2 đúng 9/9',
    quote: '"Việc nhân nghĩa cốt ở yên dân, quân điếu phạt trước lo trừ bạo."',
    detail: 'Nguyễn Trãi (1380–1442) hiệu Ức Trai. Quân sư tài ba của Lê Lợi, soạn Bình Ngô đại cáo năm 1428. Được UNESCO công nhận là Danh nhân Văn hóa Thế giới năm 1980.',
  },
  {
    id: 'ly-thuong-kiet',
    order: 6,
    name: 'Lý Thường Kiệt',
    title: 'Danh Tướng Nhà Lý',
    year: '1077',
    img: 'images/LyThuongKiet.jpg',
    rarity: 'rare',
    rarityLabel: '📜 Hiếm',
    desc: 'Tác giả Nam quốc sơn hà — Tuyên ngôn Độc lập đầu tiên.',
    unlockHint: 'Game 4 hoàn thành vòng 3',
    quote: '"Nam quốc sơn hà Nam đế cư — Tiệt nhiên định phận tại thiên thư."',
    detail: 'Lý Thường Kiệt (1019–1105) tên thật Ngô Tuấn. Ông chủ động tấn công Tống năm 1075 và đọc bài thơ "Nam quốc sơn hà" — được coi là bản Tuyên ngôn Độc lập đầu tiên của Việt Nam.',
  },
  {
    id: 'le-loi',
    order: 7,
    name: 'Lê Lợi',
    title: 'Bình Định Vương',
    year: '1428',
    img: 'images/LeLoi.jpg',
    rarity: 'epic',
    rarityLabel: '🔥 Sử Thi',
    desc: 'Lãnh đạo khởi nghĩa Lam Sơn 10 năm, lập nhà Hậu Lê.',
    unlockHint: 'Game 4 hoàn thành 5/5 vòng',
    quote: '"Mười năm nếm mật nằm gai — Lam Sơn khởi nghĩa dựng xây sơn hà."',
    detail: 'Lê Lợi (1385–1433) quê Thanh Hóa. Phát động khởi nghĩa Lam Sơn năm 1418, kiên trì kháng chiến 10 năm, đánh đuổi hoàn toàn quân Minh năm 1428, lập ra nhà Hậu Lê kéo dài 360 năm.',
  },
  {
    id: 'ba-trieu',
    order: 8,
    name: 'Bà Triệu',
    title: 'Nữ Tướng Cưỡi Voi',
    year: '248',
    img: 'images/BaTrieu.jpg',
    rarity: 'rare',
    rarityLabel: '🌿 Hiếm',
    desc: 'Cưỡi voi xung trận chống quân Đông Ngô năm 248.',
    unlockHint: 'Game 5 trả lời đúng 7/10',
    quote: '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông."',
    detail: 'Bà Triệu (226–248) tên thật Triệu Thị Trinh, quê Thanh Hóa. Năm 19 tuổi cưỡi voi xung trận chống quân Đông Ngô với câu nói nổi tiếng bất hủ về chí khí của người Việt.',
  },
  {
    id: 'vo-thi-sau',
    order: 9,
    name: 'Võ Thị Sáu',
    title: 'Anh Hùng Trẻ Tuổi',
    year: '1952',
    img: 'images/VoThiSau.jpg',
    rarity: 'rare',
    rarityLabel: '💫 Hiếm',
    desc: 'Hy sinh năm 19 tuổi tại Côn Đảo, biểu tượng bất khuất.',
    unlockHint: 'Game 5 trả lời đúng 9/10',
    quote: '"Tôi không có tội gì. Đả đảo thực dân Pháp! Việt Nam độc lập muôn năm!"',
    detail: 'Võ Thị Sáu (1933–1952) quê Bà Rịa–Vũng Tàu. Tham gia kháng chiến từ năm 14 tuổi, bị bắt và hy sinh tại Côn Đảo năm 19 tuổi. Là người đầu tiên được truy tặng danh hiệu Anh hùng Lực lượng Vũ trang.',
  },
  {
    id: 'quang-trung',
    order: 10,
    name: 'Quang Trung',
    title: 'Anh Hùng Áo Vải',
    year: '1789',
    img: 'images/quangtrung.jpg',
    rarity: 'epic',
    rarityLabel: '🏹 Sử Thi',
    desc: 'Đại phá 20 vạn quân Thanh trong 5 ngày Tết Kỷ Dậu.',
    unlockHint: 'Game 3 Quiz đúng 10/10',
    quote: '"Đánh cho để dài tóc — Đánh cho để đen răng — Đánh cho nó chích luân bất phản!"',
    detail: 'Quang Trung — Nguyễn Huệ (1753–1792) quê Bình Định. Lãnh đạo phong trào Tây Sơn, đánh tan 20 vạn quân Thanh chỉ trong 5 ngày Tết 1789. Được sử sách đánh giá là thiên tài quân sự xuất chúng nhất Việt Nam.',
  },
  {
    id: 'ho-chi-minh',
    order: 11,
    name: 'Hồ Chí Minh',
    title: 'Cha Già Dân Tộc',
    year: '1945',
    img: 'images/HCM.jpg',
    rarity: 'legendary',
    rarityLabel: '👑 Huyền Thoại',
    desc: 'Đọc Tuyên ngôn Độc lập 2/9/1945, khai sinh nước Việt Nam.',
    unlockHint: 'Hoàn thành tất cả 5 game',
    quote: '"Không có gì quý hơn độc lập, tự do."',
    detail: 'Hồ Chí Minh (1890–1969) tên khai sinh Nguyễn Sinh Cung, quê Nghệ An. Bôn ba 30 năm tìm đường cứu nước, sáng lập Đảng Cộng sản Việt Nam năm 1930, đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
  },
  {
    id: 'vo-nguyen-giap',
    order: 12,
    name: 'Võ Nguyên Giáp',
    title: 'Vị Tướng Huyền Thoại',
    year: '1954',
    img: 'images/vonguyengiap.jfif',
    rarity: 'legendary',
    rarityLabel: '⭐ Huyền Thoại',
    desc: 'Chỉ huy Điện Biên Phủ, đại tướng lừng danh thế giới.',
    unlockHint: 'Mở khóa 11 thẻ trước',
    quote: '"Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."',
    detail: 'Võ Nguyên Giáp (1911–2013) quê Quảng Bình. Tự học binh pháp, trở thành Đại tướng đầu tiên của Quân đội Nhân dân Việt Nam. Chiến thắng Điện Biên Phủ 1954 được thế giới ca ngợi là thiên tài quân sự.',
  },
];

const RARITY_COLORS = {
  rare:      { bg: 'linear-gradient(135deg,#1A2A4A,#2C3E6B)', border: '#4A90D9', glow: 'rgba(74,144,217,0.4)' },
  epic:      { bg: 'linear-gradient(135deg,#4A0E6B,#7B2D9B)', border: '#C39BD3', glow: 'rgba(195,155,211,0.4)' },
  legendary: { bg: 'linear-gradient(135deg,#7B4A00,#C0392B)', border: '#F39C12', glow: 'rgba(243,156,18,0.5)' },
};

// ===== UNLOCK SYSTEM (có kiểm tra thứ tự) =====
function unlockCard(id) {
  const unlocked = loadProgress('unlocked_cards', []);

  if (unlocked.includes(id)) return; // đã mở rồi thì bỏ qua

  const card = allCards.find(c => c.id === id);
  if (!card) return;

  // Kiểm tra thẻ liền trước (order - 1) đã mở chưa
  if (card.order > 1) {
    const prevCard = allCards.find(c => c.order === card.order - 1);
    if (prevCard && !unlocked.includes(prevCard.id)) {
      showToast(`🔒 Hãy mở thẻ "${prevCard.name}" trước!`, '⚠️');
      return;
    }
  }

  unlocked.push(id);
  saveProgress('unlocked_cards', unlocked);
  showToast(`🃏 Mở khóa: ${card.name}!`, '🃏');
  launchConfetti();
  renderCollection();
}

function isUnlocked(id) {
  const unlocked = loadProgress('unlocked_cards', []);
  return unlocked.includes(id);
}

// ===== RENDER COLLECTION TAB =====
function renderCollection() {
  const wrap = document.getElementById('collection-grid');
  if (!wrap) return;

  const unlocked = loadProgress('unlocked_cards', []);
  if (unlocked.length === 0) {
    unlocked.push('ngo-quyen');
    saveProgress('unlocked_cards', unlocked);
  }
  const total = allCards.length;
  const got = unlocked.length;

  // Update counter
  const counter = document.getElementById('collection-counter');
  if (counter) {
    counter.textContent = `${got}/${total} thẻ đã mở khóa`;
    counter.style.background = got === total
      ? 'linear-gradient(135deg,#F39C12,#C0392B)'
      : 'rgba(255,255,255,0.15)';
  }

  wrap.innerHTML = '';

  // Sắp xếp theo order để hiển thị đúng thứ tự
  const sortedCards = [...allCards].sort((a, b) => a.order - b.order);

  sortedCards.forEach(card => {
    const locked = !unlocked.includes(card.id);
    const rc = RARITY_COLORS[card.rarity];

    const el = document.createElement('div');
    el.className = 'coll-card' + (locked ? ' locked' : ' unlocked');
    el.style.cssText = `
      background: ${locked ? '#1a1a2e' : rc.bg};
      border: 2.5px solid ${locked ? '#333' : rc.border};
      box-shadow: ${locked ? 'none' : `0 0 18px ${rc.glow}`};
    `;

    if (locked) {
      // Hiện thẻ trước cần mở nếu có
      const prevCard = allCards.find(c => c.order === card.order - 1);
    const blockMsg = (card.order > 1 && prevCard && !unlocked.includes(prevCard.id))
  ? `🔓 Mở "${prevCard.name}" trước`
  : card.unlockHint;

     el.innerHTML = `
  <div class="coll-lock">🔒</div>
  <div class="coll-locked-name">???</div>
  <div class="coll-hint">${blockMsg}</div>
  <div class="coll-hint" style="font-size:0.75rem;margin-top:6px;color:#aaa;">📋 ${card.unlockHint}</div>
`;
    } else {
      el.innerHTML = `
        <div class="coll-rarity">${card.rarityLabel}</div>
        <div class="coll-img-wrap">
          <img src="${card.img}" alt="${card.name}" onerror="this.style.display='none'">
        </div>
        <div class="coll-name">${card.name}</div>
        <div class="coll-title">${card.title}</div>
        <div class="coll-year">📅 ${card.year}</div>
        <div class="coll-desc">${card.desc}</div>
      `;
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-6px) scale(1.03)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
      el.addEventListener('click', () => openCardModal(card));
    }

    wrap.appendChild(el);
  });
}

// Mở khóa thẻ Đinh Bộ Lĩnh và Nguyễn Trãi khi Game 2 hoàn thành
function checkG2Collection() {
  unlockCard('dinh-bo-linh');
  unlockCard('nguyen-trai');
}

// Mở khóa thẻ Bà Triệu và Võ Thị Sáu khi chơi Game 5 đủ
function checkG5Collection() {
  unlockCard('ba-trieu');
  unlockCard('vo-thi-sau');
}

// ===== MODAL THẺ NHÂN VẬT (nâng cấp) =====
function openCardModal(card) {
  const existing = document.getElementById('card-modal-overlay');
  if (existing) existing.remove();

  const rc = RARITY_COLORS[card.rarity];

  const overlay = document.createElement('div');
  overlay.className = 'card-modal-overlay';
  overlay.id = 'card-modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  overlay.innerHTML = `
    <div class="card-modal card-modal--${card.rarity}">

      <!-- Glow nền phía sau ảnh -->
      <div class="card-modal-bg-glow"></div>

      <!-- Nút đóng -->
      <button class="card-modal-close" onclick="document.getElementById('card-modal-overlay').remove()">✕</button>

      <!-- Header: ảnh + rarity tag -->
      <div class="card-modal-header">
        <div class="card-modal-img-ring">
          <img class="card-modal-img" src="${card.img}" alt="${card.name}" onerror="this.style.display='none'">
        </div>
        <div class="card-modal-rarity-badge">${card.rarityLabel}</div>
      </div>

      <!-- Tên + chức danh -->
      <div class="card-modal-name">${card.name}</div>
      <div class="card-modal-title">${card.title}</div>
      <div class="card-modal-year">📅 ${card.year}</div>

      <!-- Quote nổi tiếng -->
      <div class="card-modal-quote">${card.quote}</div>

      <!-- Divider -->
      <div class="card-modal-divider"></div>

      <!-- Chi tiết -->
      <div class="card-modal-detail">${card.detail}</div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Hiệu ứng theo rarity
  if (card.rarity === 'legendary') {
    launchConfetti();
    showToast('👑 Thẻ Huyền Thoại!', '👑');
  } else if (card.rarity === 'epic') {
    showToast('✨ Thẻ Sử Thi!', '✨');
  }
}
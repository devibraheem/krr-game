/* ====================================================
   game-engine.js — KRR Explorer Game Engine
   ==================================================== */

/* ---------- State ---------- */
const state = {
  currentLevel: 0,
  score: 0,
  levelScore: 0,
  levelMistakes: 0,
  levelCorrect: 0,
  totalItems: 0,
  hintIndex: 0,
  levelResults: [],   // { stars, score, mistakes }
  selectedMatch: null, // for matchPairs
};

/* ---------- DOM refs ---------- */
const $ = id => document.getElementById(id);
const screens = {
  start:    $('startScreen'),
  learn:    $('learnScreen'),
  game:     $('gameScreen'),
  complete: $('levelCompleteScreen'),
  summary:  $('summaryScreen'),
};
const ghost = $('dragGhost');

/* ---------- Helpers ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function createEl(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text) el.textContent = text;
  return el;
}

/* ---------- Particle Canvas (start screen) ---------- */
function initParticles() {
  const canvas = $('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const keywords = ['AND','OR','NOT','IF','MUST','MAY','ALL','SOME','FACT','ENTITY',
    'BEFORE','AFTER','CAUSE','BECAUSE','THEREFORE','UNLESS','EVERY','NONE',
    'SHOULD','REQUIRES','VERIFIED','UNKNOWN','PROBABLY','SUPPOSE'];

  for (let i = 0; i < 30; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.3,
      text: keywords[i % keywords.length],
      size: 10 + Math.random() * 4,
      alpha: 0.08 + Math.random() * 0.12,
    });
  }

  let animId;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.font = '600 13px Inter, sans-serif';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -60) p.x = W + 60;
      if (p.x > W + 60) p.x = -60;
      if (p.y < -20) p.y = H + 20;
      if (p.y > H + 20) p.y = -20;
      ctx.fillStyle = `rgba(96,165,250,${p.alpha})`;
      ctx.fillText(p.text, p.x, p.y);
    });
    animId = requestAnimationFrame(draw);
  }
  draw();
  // Stop when we leave the start screen
  const obs = new MutationObserver(() => {
    if (!screens.start.classList.contains('active')) { cancelAnimationFrame(animId); obs.disconnect(); }
  });
  obs.observe(screens.start, { attributes: true, attributeFilter: ['class'] });
}

/* ---------- Confetti ---------- */
function spawnConfetti(container) {
  const colors = ['#3b82f6','#22c55e','#f59e0b','#ec4899','#8b5cf6','#06b6d4'];
  for (let i = 0; i < 40; i++) {
    const piece = createEl('div','confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = Math.random() * 0.5 + 's';
    piece.style.animationDuration = (1 + Math.random()) + 's';
    container.appendChild(piece);
  }
  setTimeout(() => container.innerHTML = '', 2500);
}

/* ====================================================
   DRAG-AND-DROP ENGINE (Pointer Events — works on touch + mouse)
   ==================================================== */
let dragState = null;

function initDragOnCard(card, onDropCheck) {
  card.addEventListener('pointerdown', e => {
    if (card.classList.contains('placed')) return;
    e.preventDefault();
    card.setPointerCapture(e.pointerId);
    const rect = card.getBoundingClientRect();
    dragState = {
      card,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      onDropCheck,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
    ghost.textContent = card.textContent;
    ghost.style.left = (e.clientX - dragState.offsetX) + 'px';
    ghost.style.top  = (e.clientY - dragState.offsetY) + 'px';
  });

  card.addEventListener('pointermove', e => {
    if (!dragState || dragState.card !== card) return;
    e.preventDefault();
    const dx = Math.abs(e.clientX - dragState.startX);
    const dy = Math.abs(e.clientY - dragState.startY);
    if (!dragState.moved && dx + dy > 5) {
      dragState.moved = true;
      card.classList.add('dragging');
      ghost.classList.add('visible');
    }
    if (dragState.moved) {
      ghost.style.left = (e.clientX - dragState.offsetX) + 'px';
      ghost.style.top  = (e.clientY - dragState.offsetY) + 'px';
      // Highlight hovered bin
      highlightBinUnder(e.clientX, e.clientY);
    }
  });

  card.addEventListener('pointerup', e => {
    if (!dragState || dragState.card !== card) return;
    e.preventDefault();
    card.classList.remove('dragging');
    ghost.classList.remove('visible');
    if (dragState.moved) {
      const bin = getBinUnder(e.clientX, e.clientY);
      if (bin) dragState.onDropCheck(card, bin);
      clearBinHighlights();
    }
    dragState = null;
  });

  card.addEventListener('pointercancel', () => {
    if (dragState && dragState.card === card) {
      card.classList.remove('dragging');
      ghost.classList.remove('visible');
      clearBinHighlights();
      dragState = null;
    }
  });
}

function getBinUnder(x, y) {
  const els = document.elementsFromPoint(x, y);
  return els.find(el => el.classList.contains('drop-bin') || el.classList.contains('spectrum-zone')) || null;
}

function highlightBinUnder(x, y) {
  clearBinHighlights();
  const bin = getBinUnder(x, y);
  if (bin) bin.classList.add('drag-over');
}

function clearBinHighlights() {
  document.querySelectorAll('.drag-over').forEach(b => b.classList.remove('drag-over'));
}

/* ====================================================
   ORDER LIST DRAG ENGINE
   ==================================================== */
function initOrderDrag(item, listEl) {
  item.addEventListener('pointerdown', e => {
    e.preventDefault();
    item.setPointerCapture(e.pointerId);
    const rect = item.getBoundingClientRect();
    dragState = {
      card: item,
      listEl,
      offsetY: e.clientY - rect.top,
      startY: e.clientY,
      moved: false,
    };
  });

  item.addEventListener('pointermove', e => {
    if (!dragState || dragState.card !== item) return;
    e.preventDefault();
    if (!dragState.moved && Math.abs(e.clientY - dragState.startY) > 5) {
      dragState.moved = true;
      item.classList.add('dragging');
    }
    if (dragState.moved) {
      // Find element under pointer and reorder
      const children = [...listEl.children];
      const target = children.find(c => {
        if (c === item) return false;
        const r = c.getBoundingClientRect();
        return e.clientY > r.top && e.clientY < r.bottom;
      });
      if (target) {
        const targetRect = target.getBoundingClientRect();
        const mid = targetRect.top + targetRect.height / 2;
        if (e.clientY < mid) {
          listEl.insertBefore(item, target);
        } else {
          listEl.insertBefore(item, target.nextSibling);
        }
      }
    }
  });

  item.addEventListener('pointerup', e => {
    if (!dragState || dragState.card !== item) return;
    item.classList.remove('dragging');
    // Update order numbers
    [...listEl.children].forEach((c, i) => {
      c.querySelector('.order-num').textContent = i + 1;
    });
    dragState = null;
  });

  item.addEventListener('pointercancel', () => {
    if (dragState && dragState.card === item) {
      item.classList.remove('dragging');
      dragState = null;
    }
  });
}

/* ====================================================
   LEVEL RENDERERS
   ==================================================== */

/* --- dragToBin --- */
function renderDragToBin(level) {
  const area = $('gameArea');
  area.innerHTML = '';

  const shuffledItems = shuffle(level.items);
  state.totalItems = shuffledItems.length;
  state.levelCorrect = 0;
  state.levelMistakes = 0;

  // Cards pool
  const pool = createEl('div', 'cards-pool');
  shuffledItems.forEach((item, i) => {
    const card = createEl('div', 'drag-card anim-slide-in', item.text);
    card.style.animationDelay = (i * 0.04) + 's';
    card.dataset.answer = item.answer;
    initDragOnCard(card, handleBinDrop);
    pool.appendChild(card);
  });
  area.appendChild(pool);

  // Bins
  const binsEl = createEl('div', `bins-container cols-${level.binCols || 3}`);
  level.bins.forEach(binName => {
    const bin = createEl('div', 'drop-bin');
    bin.dataset.bin = binName;
    const label = createEl('div', 'bin-label', binName);
    bin.appendChild(label);
    binsEl.appendChild(bin);
  });
  area.appendChild(binsEl);
}

function handleBinDrop(card, bin) {
  const answer = card.dataset.answer;
  const binName = bin.dataset.bin || bin.dataset.zone;
  if (answer === binName) {
    // Correct
    state.levelCorrect++;
    state.levelScore += 10;
    state.score += 10;
    card.classList.add('placed');
    bin.classList.add('flash-correct');
    setTimeout(() => bin.classList.remove('flash-correct'), 600);
    const tag = createEl('div', 'bin-item', truncate(card.textContent, 50));
    bin.appendChild(tag);
    updateProgress();
    if (state.levelCorrect >= state.totalItems) {
      setTimeout(() => completeLevel(), 600);
    }
  } else {
    // Wrong
    state.levelMistakes++;
    bin.classList.add('flash-wrong');
    setTimeout(() => bin.classList.remove('flash-wrong'), 600);
    showHintToast(`❌ Not quite! This is not "${binName}". Try another bin.`);
  }
  $('scoreDisplay').textContent = state.score;
}

/* --- spectrum (variant of dragToBin) --- */
function renderSpectrum(level) {
  const area = $('gameArea');
  area.innerHTML = '';

  const shuffledItems = shuffle(level.items);
  state.totalItems = shuffledItems.length;
  state.levelCorrect = 0;
  state.levelMistakes = 0;

  // Cards pool
  const pool = createEl('div', 'cards-pool');
  shuffledItems.forEach((item, i) => {
    const card = createEl('div', 'drag-card anim-slide-in', item.text);
    card.style.animationDelay = (i * 0.04) + 's';
    card.dataset.answer = item.answer;
    initDragOnCard(card, handleBinDrop); // reuse same handler
    pool.appendChild(card);
  });
  area.appendChild(pool);

  // Spectrum track
  const track = createEl('div', 'spectrum-track');
  level.zones.forEach(z => {
    const zone = createEl('div', `spectrum-zone ${z.cssClass}`);
    zone.dataset.bin = z.name; // use 'bin' so handleBinDrop works
    const label = createEl('div', 'zone-label', z.name);
    zone.appendChild(label);
    track.appendChild(zone);
  });
  area.appendChild(track);
}

/* --- matchPairs --- */
function renderMatchPairs(level) {
  const area = $('gameArea');
  area.innerHTML = '';

  const shuffledLeft  = shuffle(level.pairs);
  const shuffledRight = shuffle(level.pairs.map(p => p.right));

  state.totalItems = level.pairs.length;
  state.levelCorrect = 0;
  state.levelMistakes = 0;
  state.selectedMatch = null;

  // Build lookup
  const pairMap = {};
  level.pairs.forEach(p => { pairMap[p.left] = p.right; });

  const container = createEl('div', 'match-container');

  // Left column
  const leftCol = createEl('div', 'match-column');
  leftCol.appendChild(createEl('div', 'match-column-title', 'Statements / Keywords'));
  shuffledLeft.forEach((p, i) => {
    const item = createEl('div', 'match-item anim-slide-in', p.left);
    item.style.animationDelay = (i * 0.05) + 's';
    item.dataset.side = 'left';
    item.dataset.key = p.left;
    item.addEventListener('click', () => handleMatchClick(item, pairMap));
    leftCol.appendChild(item);
  });
  container.appendChild(leftCol);

  // Right column
  const rightCol = createEl('div', 'match-column');
  rightCol.appendChild(createEl('div', 'match-column-title', 'Concept Types'));
  shuffledRight.forEach((text, i) => {
    const item = createEl('div', 'match-item anim-slide-in', text);
    item.style.animationDelay = (i * 0.05) + 's';
    item.dataset.side = 'right';
    item.dataset.key = text;
    item.addEventListener('click', () => handleMatchClick(item, pairMap));
    rightCol.appendChild(item);
  });
  container.appendChild(rightCol);

  area.appendChild(container);
}

function handleMatchClick(item, pairMap) {
  if (item.classList.contains('matched')) return;

  const side = item.dataset.side;

  if (!state.selectedMatch) {
    // First selection
    state.selectedMatch = item;
    item.classList.add('selected');
  } else if (state.selectedMatch.dataset.side === side) {
    // Same side — switch selection
    state.selectedMatch.classList.remove('selected');
    state.selectedMatch = item;
    item.classList.add('selected');
  } else {
    // Different side — check match
    const leftItem  = side === 'left' ? item : state.selectedMatch;
    const rightItem = side === 'right' ? item : state.selectedMatch;
    const leftKey = leftItem.dataset.key;
    const rightKey = rightItem.dataset.key;

    if (pairMap[leftKey] === rightKey) {
      // Correct match
      state.levelCorrect++;
      state.levelScore += 15;
      state.score += 15;
      leftItem.classList.remove('selected');
      leftItem.classList.add('matched');
      rightItem.classList.add('matched');
      $('scoreDisplay').textContent = state.score;
      updateProgress();
      if (state.levelCorrect >= state.totalItems) {
        setTimeout(() => completeLevel(), 600);
      }
    } else {
      // Wrong
      state.levelMistakes++;
      leftItem.classList.add('wrong');
      rightItem.classList.add('wrong');
      showHintToast('❌ These two don\'t match. Try a different pair.');
      setTimeout(() => {
        leftItem.classList.remove('wrong', 'selected');
        rightItem.classList.remove('wrong');
      }, 500);
    }
    state.selectedMatch = null;
  }
}

/* --- orderSequence --- */
function renderOrderSequence(level) {
  const area = $('gameArea');
  area.innerHTML = '';

  const correctOrder = level.items.map((t, i) => i);
  const shuffled = shuffle(level.items.map((text, idx) => ({ text, idx })));

  state.totalItems = 1; // single check
  state.levelCorrect = 0;
  state.levelMistakes = 0;

  const listEl = createEl('div', 'order-list');
  shuffled.forEach((item, i) => {
    const row = createEl('div', 'order-item anim-slide-in');
    row.style.animationDelay = (i * 0.05) + 's';
    row.dataset.origIdx = item.idx;

    const grip = createEl('span', 'grip', '⠿');
    const num  = createEl('span', 'order-num', String(i + 1));
    const txt  = createEl('span', '', item.text);
    row.appendChild(grip);
    row.appendChild(num);
    row.appendChild(txt);

    initOrderDrag(row, listEl);
    listEl.appendChild(row);
  });
  area.appendChild(listEl);

  const btn = createEl('button', 'btn btn-primary check-order-btn', 'Check Order');
  btn.addEventListener('click', () => {
    const current = [...listEl.children].map(c => parseInt(c.dataset.origIdx));
    let allCorrect = true;
    [...listEl.children].forEach((c, i) => {
      const isCorrect = parseInt(c.dataset.origIdx) === i;
      c.classList.remove('correct-pos', 'wrong-pos');
      c.classList.add(isCorrect ? 'correct-pos' : 'wrong-pos');
      if (!isCorrect) allCorrect = false;
    });
    if (allCorrect) {
      state.levelCorrect = 1;
      state.levelScore += 20;
      state.score += 20;
      $('scoreDisplay').textContent = state.score;
      updateProgress();
      setTimeout(() => completeLevel(), 800);
    } else {
      state.levelMistakes++;
      showHintToast('❌ Some items are in the wrong position. Look at the red numbers and try again.');
    }
  });
  area.appendChild(btn);
}

/* ====================================================
   LEVEL LIFECYCLE
   ==================================================== */
function startLevel(index) {
  state.currentLevel = index;
  state.levelScore = 0;
  state.levelMistakes = 0;
  state.levelCorrect = 0;
  state.hintIndex = 0;
  state.selectedMatch = null;

  const level = LEVELS[index];

  // Update header
  $('levelBadge').textContent = level.id;
  $('levelLabel').textContent = level.title;
  $('sectionLabel').textContent = level.section;
  $('levelTitle').textContent = level.title;
  $('levelDesc').textContent = level.description;
  $('levelInstructions').textContent = level.instruction || '';
  $('scoreDisplay').textContent = state.score;

  showScreen('game');

  // Render mechanic
  switch (level.mechanic) {
    case 'dragToBin':     renderDragToBin(level); break;
    case 'matchPairs':    renderMatchPairs(level); break;
    case 'orderSequence': renderOrderSequence(level); break;
    case 'spectrum':      renderSpectrum(level); break;
  }
  updateProgress();
}

function updateProgress() {
  const pct = state.totalItems > 0 ? (state.levelCorrect / state.totalItems) * 100 : 0;
  $('progressFill').style.width = pct + '%';
  $('progressText').textContent = `${state.levelCorrect} / ${state.totalItems}`;
}

function completeLevel() {
  const mistakes = state.levelMistakes;
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
  const level = LEVELS[state.currentLevel];

  state.levelResults[state.currentLevel] = {
    stars,
    score: state.levelScore,
    mistakes,
    correct: state.levelCorrect,
  };

  // Show complete screen
  showScreen('complete');
  spawnConfetti($('confettiContainer'));

  // Stars
  const starIcons = ['⭐','⭐','⭐'].map((s, i) => {
    const span = createEl('span', 'star', i < stars ? '⭐' : '☆');
    return span;
  });
  $('starsDisplay').innerHTML = '';
  starIcons.forEach(s => $('starsDisplay').appendChild(s));

  // Stats
  $('lcCorrect').textContent = state.levelCorrect;
  $('lcMistakes').textContent = mistakes;
  $('lcScore').textContent = state.levelScore;

  // Concepts
  $('conceptsCovered').innerHTML = '<strong>Concepts covered:</strong> ' + level.conceptsLearned.join(', ');

  // Next button
  const nextBtn = $('nextLevelBtn');
  if (state.currentLevel >= LEVELS.length - 1) {
    nextBtn.querySelector('span').textContent = 'View Summary';
  } else {
    nextBtn.querySelector('span').textContent = 'Next Level';
  }
}

function showFinalSummary() {
  showScreen('summary');

  // Total score
  const maxScore = LEVELS.reduce((sum, l) => {
    const items = l.items ? l.items.length : (l.pairs ? l.pairs.length : 1);
    const pts = l.mechanic === 'matchPairs' ? 15 : (l.mechanic === 'orderSequence' ? 20 : 10);
    return sum + items * pts;
  }, 0);

  $('finalScoreNum').textContent = state.score;

  // Animate ring
  const ring = $('scoreRing');
  const pct = Math.min(state.score / maxScore, 1);
  const circumference = 339.292;
  setTimeout(() => {
    ring.style.transition = 'stroke-dashoffset 1.5s ease';
    ring.style.strokeDashoffset = circumference * (1 - pct);
  }, 300);

  // Per-level summary
  const levelsDiv = $('summaryLevels');
  levelsDiv.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const res = state.levelResults[i] || { stars: 0, score: 0 };
    const row = createEl('div', 'sl-row');
    const starsStr = '⭐'.repeat(res.stars) + '☆'.repeat(3 - res.stars);
    row.innerHTML = `<span class="sl-stars">${starsStr}</span><span class="sl-name">L${lvl.id}: ${lvl.title}</span>`;
    levelsDiv.appendChild(row);
  });

  // Concept map
  const mapDiv = $('conceptMap');
  mapDiv.innerHTML = '<h3>📚 Knowledge Map — What You Learned</h3>';
  CONCEPT_FAMILIES.forEach(cf => {
    const fam = createEl('div', 'cm-family');
    fam.innerHTML = `<div class="cm-label">${cf.family}</div><div class="cm-sub" style="font-size:0.7rem;color:#64748b;margin-bottom:4px">${cf.question}</div>`;
    const tags = createEl('div', 'cm-tags');
    cf.tags.forEach(t => {
      tags.appendChild(createEl('span', 'cm-tag', t));
    });
    fam.appendChild(tags);
    mapDiv.appendChild(fam);
  });
}

/* ---------- Hint system ---------- */
function showHintToast(msg) {
  // Remove existing toast
  document.querySelectorAll('.hint-toast').forEach(t => t.remove());
  const toast = createEl('div', 'hint-toast', msg);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function showLevelHint() {
  const level = LEVELS[state.currentLevel];
  if (!level.hints || level.hints.length === 0) return;
  const hint = level.hints[state.hintIndex % level.hints.length];
  state.hintIndex++;
  showHintToast('💡 ' + hint);
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '…' : str;
}

/* ====================================================
   EVENT LISTENERS
   ==================================================== */
// Start screen buttons
const startLearnBtn = $('startLearnBtn');
if (startLearnBtn) {
  startLearnBtn.addEventListener('click', () => {
    if (typeof initLearnSession === 'function') {
      initLearnSession(0);
    } else {
      startLevel(0);
    }
  });
}

const startGameDirectBtn = $('startGameDirectBtn');
if (startGameDirectBtn) {
  startGameDirectBtn.addEventListener('click', () => {
    startLevel(0);
  });
}

// In-game review concept button
const gameReviewBtn = $('gameReviewBtn');
if (gameReviewBtn) {
  gameReviewBtn.addEventListener('click', () => {
    if (typeof initLearnSession === 'function') {
      // Map current level (0..12) to corresponding learning section (1..13)
      initLearnSession(state.currentLevel + 1);
    }
  });
}

// Summary screen review concepts button
const reviewAllConceptsBtn = $('reviewAllConceptsBtn');
if (reviewAllConceptsBtn) {
  reviewAllConceptsBtn.addEventListener('click', () => {
    if (typeof initLearnSession === 'function') {
      initLearnSession(0);
    }
  });
}

$('nextLevelBtn').addEventListener('click', () => {
  if (state.currentLevel >= LEVELS.length - 1) {
    showFinalSummary();
  } else {
    startLevel(state.currentLevel + 1);
  }
});

$('restartBtn').addEventListener('click', () => {
  state.score = 0;
  state.levelResults = [];
  state.currentLevel = 0;
  showScreen('start');
  initParticles();
});

$('hintBtn').addEventListener('click', showLevelHint);

/* ---------- Init ---------- */
initParticles();



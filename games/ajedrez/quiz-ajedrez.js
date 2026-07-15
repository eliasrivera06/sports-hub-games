/* ============================================================
   QUIZ DE AJEDREZ — Sports Hub Games
   12 preguntas sobre reglas, historia, piezas y estrategia
   ============================================================ */

// ─────────────────────────────────────────────
// BANCO DE PREGUNTAS (12 preguntas)
// ─────────────────────────────────────────────
const QUESTIONS = [
  {
    category: 'reglas',
    categoryName: 'REGLAS',
    categoryIcon: '📜',
    difficulty: 'FÁCIL',
    question: '¿Cuántas casillas tiene un tablero de ajedrez?',
    options: ['32', '48', '64', '128'],
    correct: 2,
    explanation: 'El tablero de ajedrez tiene 8×8 = 64 casillas, alternando colores claro y oscuro.'
  },
  {
    category: 'piezas',
    categoryName: 'PIEZAS',
    categoryIcon: '♞',
    difficulty: 'FÁCIL',
    question: '¿Qué pieza del ajedrez puede saltar sobre otras piezas?',
    options: ['Alfil', 'Torre', 'Reina', 'Caballo'],
    correct: 3,
    explanation: 'El Caballo es la única pieza que puede saltar sobre otras piezas en el tablero, moviéndose en forma de "L".'
  },
  {
    category: 'historia',
    categoryName: 'HISTORIA',
    categoryIcon: '📚',
    difficulty: 'MEDIO',
    question: '¿En qué país se originó el ajedrez?',
    options: ['China', 'India', 'Persia', 'Grecia'],
    correct: 1,
    explanation: 'El ajedrez se originó en India alrededor del siglo VI d.C., con un juego llamado "Chaturanga". Luego se extendió a Persia y después al mundo islámico y Europa.'
  },
  {
    category: 'reglas',
    categoryName: 'REGLAS',
    categoryIcon: '📜',
    difficulty: 'MEDIO',
    question: '¿Cómo se llama la jugada especial donde el rey se mueve 2 casillas hacia una torre?',
    options: ['En passant', 'Enroque', 'Promoción', 'Jaque doble'],
    correct: 1,
    explanation: 'El Enroque es una jugada especial que mueve simultáneamente al rey (2 casillas) y a la torre, usada para proteger al rey y activar la torre.'
  },
  {
    category: 'estrategia',
    categoryName: 'ESTRATEGIA',
    categoryIcon: '🧠',
    difficulty: 'MEDIO',
    question: '¿Cuál es el objetivo principal del ajedrez?',
    options: ['Capturar todas las piezas enemigas', 'Dar jaque mate al rey enemigo', 'Llegar al lado contrario del tablero', 'Quedarse con más piezas que el rival'],
    correct: 1,
    explanation: 'El objetivo del ajedrez es dar Jaque Mate al rey enemigo, lo que significa que el rey está en jaque y no puede escapar.'
  },
  {
    category: 'piezas',
    categoryName: 'PIEZAS',
    categoryIcon: '♞',
    difficulty: 'FÁCIL',
    question: '¿Cuál es la pieza más poderosa del ajedrez?',
    options: ['Rey', 'Torre', 'Alfil', 'Reina'],
    correct: 3,
    explanation: 'La Reina (o Dama) es la pieza más poderosa, pues combina los movimientos de la Torre (horizontal/vertical) y el Alfil (diagonal) en una sola pieza.'
  },
  {
    category: 'curiosidades',
    categoryName: 'CURIOSIDADES',
    categoryIcon: '💡',
    difficulty: 'DIFÍCIL',
    question: '¿Cuántos movimientos tiene la partida de ajedrez más corta posible que termina en mate (Fool\'s Mate)?',
    options: ['1', '2', '3', '4'],
    correct: 1,
    explanation: '¡Solo 2 movimientos! El "Fool\'s Mate" (Mate del loco) es la partida más corta posible: 1.g4 e5 2.f3?? Dh4#. Es extremadamente raro en la práctica.'
  },
  {
    category: 'reglas',
    categoryName: 'REGLAS',
    categoryIcon: '📜',
    difficulty: 'MEDIO',
    question: '¿Qué ocurre cuando un peón llega al último rango del tablero?',
    options: ['El peón es eliminado', 'El peón se convierte en rey', 'El peón puede promocionar a otra pieza', 'El juego termina'],
    correct: 2,
    explanation: 'Cuando un peón llega al último rango, puede "promocionar" y convertirse en cualquier pieza (menos el rey): reina, torre, alfil o caballo. Casi siempre se elige la reina.'
  },
  {
    category: 'historia',
    categoryName: 'HISTORIA',
    categoryIcon: '📚',
    difficulty: 'DIFÍCIL',
    question: '¿Quién fue el primer Campeón del Mundo oficial de Ajedrez?',
    options: ['Paul Morphy', 'Wilhelm Steinitz', 'Emanuel Lasker', 'José Raúl Capablanca'],
    correct: 1,
    explanation: 'Wilhelm Steinitz fue el primer Campeón Mundial oficial de Ajedrez (1886–1894). También fue el padre del pensamiento estratégico moderno en ajedrez.'
  },
  {
    category: 'estrategia',
    categoryName: 'ESTRATEGIA',
    categoryIcon: '🧠',
    difficulty: 'DIFÍCIL',
    question: '¿Cómo se llama la apertura en la que las blancas juegan 1.e4 y las negras responden 1...c5?',
    options: ['Defensa Francesa', 'Defensa Siciliana', 'Apertura Española', 'Gambito de Rey'],
    correct: 1,
    explanation: 'La Defensa Siciliana (1.e4 c5) es la apertura de ajedrez más popular y estudiada. Las negras luchan por el control del centro con un peón de flanco.'
  },
  {
    category: 'piezas',
    categoryName: 'PIEZAS',
    categoryIcon: '♞',
    difficulty: 'MEDIO',
    question: '¿Cuántos peones tiene cada jugador al inicio de la partida?',
    options: ['6', '7', '8', '9'],
    correct: 2,
    explanation: 'Cada jugador comienza con 8 peones, que forman la segunda fila del tablero. Son las piezas más débiles individualmente, pero muy poderosas en conjunto.'
  },
  {
    category: 'curiosidades',
    categoryName: 'CURIOSIDADES',
    categoryIcon: '💡',
    difficulty: 'DIFÍCIL',
    question: '¿Cuántas partidas de ajedrez únicas son posibles tras los primeros 3 movimientos de cada jugador?',
    options: ['Más de 1 millón', 'Más de 100 millones', 'Más de 9 billones', 'Más de 119 billones'],
    correct: 3,
    explanation: '¡Más de 119 billones (1.19 × 10¹⁴) posiciones únicas son posibles después de solo 3 movimientos por bando! El ajedrez tiene más posiciones que átomos hay en el universo observable.'
  }
];

// ─────────────────────────────────────────────
// COLORES DE CATEGORÍAS
// ─────────────────────────────────────────────
const CAT_COLORS = {
  reglas:       '#64b5f6',
  historia:     '#ce93d8',
  piezas:       '#a5d6a7',
  estrategia:   '#ffb74d',
  curiosidades: '#f48fb1'
};

// ─────────────────────────────────────────────
// ESTADO DEL JUEGO
// ─────────────────────────────────────────────
let state = {};

function resetState() {
  state = {
    questionIndex: 0,
    totalQuestions: QUESTIONS.length,
    score: 0,
    correctCount: 0,
    timer: null,
    timeLeft: 20,
    answered: false,
    streak: 0,
    maxStreak: 0,
    questionOrder: [],
    results: []
  };
}

// ─────────────────────────────────────────────
// BARAJAR PREGUNTAS
// ─────────────────────────────────────────────
function shuffleQuestions() {
  const indices = QUESTIONS.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  state.questionOrder = indices;
}

function getCurrentQuestion() {
  return QUESTIONS[state.questionOrder[state.questionIndex]];
}

// ─────────────────────────────────────────────
// INICIALIZAR JUEGO
// ─────────────────────────────────────────────
function initGame() {
  resetState();
  shuffleQuestions();

  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive; text-align:center; line-height:2;">
        <div style="font-size:48px; margin-bottom:12px;">♟ ? ♟</div>
        <p style="font-size:13px; color:#ffd166; margin-bottom:16px;">QUIZ DE AJEDREZ</p>
        <p style="font-size:9px; color:#fff3e0; margin-bottom:8px;">Pon a prueba tus conocimientos<br>sobre el juego de reyes.</p>
        <p style="font-size:9px; color:#00ff9f;">✅ Correcto: +100 pts</p>
        <p style="font-size:9px; color:#ffd166;">🔥 Racha ×3+: +150 pts</p>
        <p style="font-size:9px; color:#ffd166;">⏱ Tiempo restante: bonus</p>
        <p style="font-size:8px; color:rgba(255,243,224,0.6); margin-top:12px;">12 preguntas · 20 seg c/u</p>
      </div>
    `,
    background: '#1a1c2e',
    confirmButtonText: '¡JUGAR!',
    confirmButtonColor: '#00ff9f',
    customClass: { popup: 'swal-chess-popup', confirmButton: 'swal-chess-confirm' }
  }).then(() => loadQuestion());
}

// ─────────────────────────────────────────────
// CARGAR PREGUNTA
// ─────────────────────────────────────────────
function loadQuestion() {
  state.answered = false;
  state.timeLeft = 20;

  const q = getCurrentQuestion();

  // Actualizar displays
  updateQDisplay();
  updateProgressBar();
  updateCategoryBox(q);
  updateStreakDots();

  // Resetear tarjeta
  const card = document.getElementById('question-card');
  card.className = 'question-card';

  // Número y texto
  document.getElementById('q-number').textContent = `PREGUNTA ${state.questionIndex + 1}`;
  document.getElementById('question-text').textContent = q.question;

  // Opciones
  q.options.forEach((opt, i) => {
    const btn = document.getElementById(`opt-${i}`);
    const txt = document.getElementById(`opt-text-${i}`);
    btn.className = 'option-btn';
    btn.disabled = false;
    txt.textContent = opt;
  });

  // Ocultar explicación y botón siguiente
  document.getElementById('explanation-box').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';

  startTimer();
}

// ─────────────────────────────────────────────
// SELECCIONAR RESPUESTA
// ─────────────────────────────────────────────
function selectAnswer(selectedIndex) {
  if (state.answered) return;
  state.answered = true;
  stopTimer();

  const q = getCurrentQuestion();
  const isCorrect = selectedIndex === q.correct;

  // Deshabilitar todos los botones
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct-ans');
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('wrong-ans');
    }
  }

  // Highlight de tarjeta
  const card = document.getElementById('question-card');
  card.classList.add(isCorrect ? 'correct-bg' : 'wrong-bg');

  if (isCorrect) {
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.correctCount++;
    const bonus = state.streak >= 3 ? 150 : 100;
    const timeBonus = state.timeLeft * 3;
    const pts = bonus + timeBonus;
    state.score += pts;

    state.results.push({ q, selectedIndex, correct: true, pts });
    addHistoryItem(state.questionIndex + 1, q.question, true);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: state.streak >= 3 ? `🔥 RACHA ×${state.streak}!` : '¡CORRECTO!',
      text: `+${bonus} pts + ${timeBonus} bonus`,
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
      background: '#1a1c2e',
      color: '#fff3e0',
      customClass: { popup: 'swal-toast-chess' }
    });
  } else {
    state.streak = 0;
    state.results.push({ q, selectedIndex, correct: false, pts: 0 });
    addHistoryItem(state.questionIndex + 1, q.question, false);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: '¡Incorrecto!',
      text: 'La respuesta correcta está marcada.',
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
      background: '#1a1c2e',
      color: '#fff3e0',
      customClass: { popup: 'swal-toast-chess' }
    });
  }

  updateScoreDisplay();
  updateCorrectDisplay();
  updateStreakDots(isCorrect ? 'correct' : 'wrong');
  showExplanation(q, isCorrect);
  document.getElementById('btn-next').style.display = 'block';
}

// ─────────────────────────────────────────────
// TIEMPO AGOTADO SIN RESPUESTA
// ─────────────────────────────────────────────
function timeOut() {
  if (state.answered) return;
  state.answered = true;
  state.streak = 0;
  state.score = Math.max(0, state.score - 20);

  const q = getCurrentQuestion();

  // Mostrar respuesta correcta
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct-ans');
  }

  const card = document.getElementById('question-card');
  card.classList.add('wrong-bg');

  state.results.push({ q, selectedIndex: -1, correct: false, pts: -20, timeout: true });
  addHistoryItem(state.questionIndex + 1, q.question, null);

  updateScoreDisplay();
  updateStreakDots('wrong');
  showExplanation(q, false, true);

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'warning',
    title: '⏰ ¡Tiempo!',
    text: 'Se muestra la respuesta correcta. -20 pts',
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
    background: '#1a1c2e',
    color: '#fff3e0',
    customClass: { popup: 'swal-toast-chess' }
  });

  document.getElementById('btn-next').style.display = 'block';
}

// ─────────────────────────────────────────────
// MOSTRAR EXPLICACIÓN
// ─────────────────────────────────────────────
function showExplanation(q, isCorrect, isTimeout = false) {
  const box = document.getElementById('explanation-box');
  const icon = document.getElementById('explanation-icon');
  const text = document.getElementById('explanation-text');

  icon.textContent = isCorrect ? '✅' : (isTimeout ? '⏰' : '❌');
  text.textContent = q.explanation;
  box.style.display = 'flex';
}

// ─────────────────────────────────────────────
// SIGUIENTE PREGUNTA
// ─────────────────────────────────────────────
function nextQuestion() {
  state.questionIndex++;
  if (state.questionIndex >= state.totalQuestions) {
    endGame();
  } else {
    loadQuestion();
  }
}

// ─────────────────────────────────────────────
// FIN DEL JUEGO
// ─────────────────────────────────────────────
function endGame() {
  stopTimer();

  // Guardar puntaje en Supabase (solo si mejora el récord anterior)
  saveQuizScoreToSupabase(state.score, state.correctCount, state.totalQuestions);

  const correct = state.correctCount;
  const total = state.totalQuestions;
  const score = state.score;
  const pct = Math.round((correct / total) * 100);

  let rank, rankColor;
  if (pct === 100)   { rank = '♛ MAESTRO ABSOLUTO';  rankColor = '#ffd166'; }
  else if (pct >= 83){ rank = '♜ GRAN MAESTRO';       rankColor = '#00ff9f'; }
  else if (pct >= 67){ rank = '♝ AVANZADO';            rankColor = '#64b5f6'; }
  else if (pct >= 50){ rank = '♞ APRENDIZ';            rankColor = '#fff3e0'; }
  else               { rank = '♟ PRINCIPIANTE';        rankColor = '#ff3c38'; }

  let catStats = {};
  state.results.forEach(r => {
    const cat = r.q.category;
    if (!catStats[cat]) catStats[cat] = { c: 0, t: 0 };
    catStats[cat].t++;
    if (r.correct) catStats[cat].c++;
  });

  let catHtml = Object.entries(catStats).map(([cat, data]) => {
    const pctCat = Math.round((data.c / data.t) * 100);
    const color = CAT_COLORS[cat] || '#fff';
    return `<div style="display:flex;justify-content:space-between;align-items:center;
      background:rgba(255,255,255,0.05);padding:5px 10px;margin-bottom:3px;border-radius:2px;
      border-left:3px solid ${color}">
      <span style="color:${color}">${cat.toUpperCase()}</span>
      <span style="color:#fff3e0">${data.c}/${data.t} (${pctCat}%)</span>
    </div>`;
  }).join('');

  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive;line-height:2;text-align:center;">
        <p style="font-size:12px;color:#ffd166;margin-bottom:4px;">RESULTADO FINAL</p>
        <p style="font-size:30px;color:#00ff9f;margin:10px 0;">${score}<span style="font-size:12px"> PTS</span></p>
        <p style="font-size:10px;color:${rankColor};margin-bottom:12px;">${rank}</p>
        <p style="font-size:8px;color:rgba(255,243,224,0.7);margin-bottom:4px;">
          ${correct}/${total} correctas (${pct}%)
        </p>
        <p style="font-size:8px;color:#ffd166;margin-bottom:12px;">
          Racha máxima: ${state.maxStreak}🔥
        </p>
        <div style="text-align:left;font-size:7px;margin-top:8px;">
          <p style="color:#ffd166;margin-bottom:6px;">POR CATEGORÍA:</p>
          ${catHtml}
        </div>
      </div>
    `,
    background: '#1a1c2e',
    showConfirmButton: true,
    showDenyButton: true,
    confirmButtonText: '🔄 JUGAR DE NUEVO',
    denyButtonText: '🏠 AL HUB',
    confirmButtonColor: '#00ff9f',
    denyButtonColor: '#2b2d42',
    customClass: {
      popup: 'swal-chess-popup',
      confirmButton: 'swal-chess-confirm',
      denyButton: 'swal-chess-deny'
    }
  }).then(result => {
    if (result.isConfirmed) initGame();
    else if (result.isDenied) window.location.href = 'ajedrez.html';
  });
}

// ─────────────────────────────────────────────
// TIMER
// ─────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timer);
  updateTimerDisplay();
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      timeOut();
    }
  }, 1000);
}

function stopTimer() { clearInterval(state.timer); }

// ─────────────────────────────────────────────
// ACTUALIZAR UI
// ─────────────────────────────────────────────
function updateQDisplay() {
  document.getElementById('q-display').textContent =
    `${state.questionIndex + 1} / ${state.totalQuestions}`;
}

function updateScoreDisplay() {
  const el = document.getElementById('score-display');
  el.textContent = state.score;
  el.classList.remove('score-anim');
  void el.offsetWidth;
  el.classList.add('score-anim');
}

function updateCorrectDisplay() {
  document.getElementById('correct-display').textContent = state.correctCount;
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  el.textContent = state.timeLeft;
  el.classList.toggle('warning', state.timeLeft <= 7);
}

function updateProgressBar() {
  const pct = (state.questionIndex / state.totalQuestions) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent =
    `${state.questionIndex} / ${state.totalQuestions}`;
}

function updateCategoryBox(q) {
  document.getElementById('cat-icon').textContent = q.categoryIcon;
  document.getElementById('cat-name').textContent = q.categoryName;
  document.getElementById('cat-diff').textContent = q.difficulty;
}

// Actualizar puntos de racha (5 puntos que muestran el estado)
let streakHistory = [];
function updateStreakDots(result = null) {
  if (result !== null) {
    streakHistory.push(result);
    if (streakHistory.length > 5) streakHistory.shift();
  }
  for (let i = 0; i < 5; i++) {
    const dot = document.getElementById(`dot-${i}`);
    dot.className = 'dot';
    if (i < streakHistory.length) {
      dot.classList.add(streakHistory[i] === 'correct' ? 'correct' : 'wrong');
    }
  }
}

function addHistoryItem(num, questionText, correct) {
  const list = document.getElementById('history-list');
  const item = document.createElement('div');
  const shortText = questionText.length > 28 ? questionText.substring(0, 28) + '...' : questionText;
  const icon = correct === true ? '✅' : correct === false ? '❌' : '⏰';
  const cls = correct === true ? 'h-correct' : correct === false ? 'h-wrong' : 'h-timeout';

  item.className = `history-item ${cls}`;
  item.innerHTML = `
    <span class="h-num">#${num}</span>
    <span class="h-text">${shortText}</span>
    <span class="h-status">${icon}</span>
  `;
  list.insertBefore(item, list.firstChild);
}

// ─────────────────────────────────────────────
// ESTILOS DINÁMICOS
// ─────────────────────────────────────────────
(function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    .score-anim { animation: scorePop 0.3s ease; }
    @keyframes scorePop {
      0%,100% { transform:scale(1); }
      50%      { transform:scale(1.4); }
    }
    .swal-chess-popup {
      font-family: 'Press Start 2P', cursive !important;
      border: 2px solid rgba(255,209,102,0.4) !important;
      border-radius: 4px !important;
    }
    .swal-chess-confirm {
      font-family: 'Press Start 2P', cursive !important;
      font-size: 11px !important;
      color: #1a1c2e !important;
    }
    .swal-chess-deny {
      font-family: 'Press Start 2P', cursive !important;
      font-size: 11px !important;
    }
    .swal-toast-chess {
      font-family: 'Press Start 2P', cursive !important;
      font-size: 9px !important;
      border: 1px solid rgba(255,209,102,0.3) !important;
    }
  `;
  document.head.appendChild(s);
})();

// ─────────────────────────────────────────────
// ARRANCAR AL CARGAR
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initGame);

// ─────────────────────────────────────────────
// LEADERBOARD SUPABASE - QUIZ DE AJEDREZ
// Solo guarda si el nuevo puntaje SUPERA el último récord.
// Así el ranking nunca puede bajar: el puntaje máximo se
// mantiene aunque se vuelva a jugar con peor resultado.
// ─────────────────────────────────────────────
async function saveQuizScoreToSupabase(score, correctCount, totalQuestions) {
  try {
    if (!window.supabase) return;
    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session || !session.user) return;

    const userId = session.user.id;

    // Consultar récord actual
    const { data, error } = await window.supabase
      .from('leaderboard_ajedrez_quiz')
      .select('best_score, best_correct')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error al consultar ranking quiz ajedrez:', error.message);
      return;
    }

    if (!data) {
      // Primera partida: insertar
      const { error: insertError } = await window.supabase
        .from('leaderboard_ajedrez_quiz')
        .insert({
          user_id: userId,
          best_score: score,
          best_correct: correctCount,
          total_questions: totalQuestions
        });
      if (insertError) console.error('Error al insertar quiz ajedrez:', insertError.message);
    } else if (score > data.best_score) {
      // Solo actualizar si el nuevo puntaje es mayor (el score nunca puede bajar)
      const { error: updateError } = await window.supabase
        .from('leaderboard_ajedrez_quiz')
        .update({
          best_score: score,
          best_correct: correctCount,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);
      if (updateError) console.error('Error al actualizar quiz ajedrez:', updateError.message);
    }
    // Si score <= best_score: no se hace nada, el récord se mantiene intacto
  } catch (e) {
    console.error('Error al guardar quiz ajedrez en Supabase:', e);
  }
}

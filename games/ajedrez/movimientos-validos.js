/* ============================================================
   MOVIMIENTOS VÁLIDOS — Sports Hub Games
   Juego de ajedrez: identifica todos los movimientos válidos
   de cada pieza haciendo clic en el tablero.
   ============================================================ */

// ─────────────────────────────────────────────
// DATOS DE PIEZAS
// ─────────────────────────────────────────────
const PIECES = [
  {
    id: 'pawn',
    name: 'PEÓN',
    symbol: '♙',
    desc: 'Avanza 1 casilla (2 desde salida). Captura en diagonal.',
    color: '#fff3e0',
    difficulty: 'FÁCIL'
  },
  {
    id: 'knight',
    name: 'CABALLO',
    symbol: '♘',
    desc: 'Se mueve en "L": 2 casillas + 1 en perpendicular. ¡Salta piezas!',
    color: '#fff3e0',
    difficulty: 'FÁCIL'
  },
  {
    id: 'bishop',
    name: 'ALFIL',
    symbol: '♗',
    desc: 'Diagonal ilimitada en cualquier dirección.',
    color: '#fff3e0',
    difficulty: 'MEDIO'
  },
  {
    id: 'rook',
    name: 'TORRE',
    symbol: '♖',
    desc: 'Horizontal y vertical, cualquier número de casillas.',
    color: '#fff3e0',
    difficulty: 'MEDIO'
  },
  {
    id: 'queen',
    name: 'REINA',
    symbol: '♕',
    desc: 'Combina Torre + Alfil. La pieza más poderosa del ajedrez.',
    color: '#ffd166',
    difficulty: 'DIFÍCIL'
  },
  {
    id: 'king',
    name: 'REY',
    symbol: '♔',
    desc: 'Una casilla en cualquier dirección. ¡Debe sobrevivir siempre!',
    color: '#fff3e0',
    difficulty: 'FÁCIL'
  }
];

// ─────────────────────────────────────────────
// ESTADO DEL JUEGO
// ─────────────────────────────────────────────
let state = {};

function resetState() {
  state = {
    round: 0,
    totalRounds: PIECES.length,
    score: 0,
    timer: null,
    timeLeft: 30,
    currentPiece: null,
    pieceRow: 0,
    pieceCol: 0,
    validMoves: [],
    foundMoves: [],
    wrongCells: [],
    roundOver: false,
    combo: 0,
    roundResults: []
  };
}

// ─────────────────────────────────────────────
// INICIALIZAR JUEGO
// ─────────────────────────────────────────────
function initGame() {
  resetState();
  buildProgressList();

  // Mostrar SweetAlert de bienvenida
  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive; text-align:center; line-height:2;">
        <div style="font-size:48px; margin-bottom:12px;">♟ ♞ ♝ ♜ ♛ ♚</div>
        <p style="font-size:13px; color:#ffd166; margin-bottom:16px;">MOVIMIENTOS VÁLIDOS</p>
        <p style="font-size:9px; color:#fff3e0; margin-bottom:8px;">Haz clic en todas las casillas donde<br>la pieza puede moverse.</p>
        <p style="font-size:9px; color:#00ff9f;">✅ Correcto: +10 pts</p>
        <p style="font-size:9px; color:#ff3c38;">❌ Incorrecto: -5 pts</p>
        <p style="font-size:9px; color:#ffd166;">🔥 Combo x3+: +15 pts/casilla</p>
        <p style="font-size:8px; color:rgba(255,243,224,0.6); margin-top:12px;">6 rondas · 30 seg c/u</p>
      </div>
    `,
    background: '#1a1c2e',
    confirmButtonText: '¡JUGAR!',
    confirmButtonColor: '#00ff9f',
    customClass: { popup: 'swal-chess-popup', confirmButton: 'swal-chess-confirm' }
  }).then(() => startRound());
}

// ─────────────────────────────────────────────
// CONSTRUIR LISTA DE PROGRESO
// ─────────────────────────────────────────────
function buildProgressList() {
  const list = document.getElementById('progress-list');
  list.innerHTML = '';

  PIECES.forEach((piece, i) => {
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.id = `progress-${i}`;
    item.innerHTML = `
      <span class="progress-piece">${piece.symbol}</span>
      <span class="progress-name">${piece.name}</span>
      <span class="progress-status status-pending" id="status-${i}">—</span>
    `;
    list.appendChild(item);
  });
}

// ─────────────────────────────────────────────
// INICIAR RONDA
// ─────────────────────────────────────────────
function startRound() {
  state.roundOver = false;
  state.foundMoves = [];
  state.wrongCells = [];
  state.combo = 0;
  state.timeLeft = 30;

  state.currentPiece = PIECES[state.round];

  // Posición aleatoria válida
  let pos;
  let attempts = 0;
  do {
    const row = (state.currentPiece.id === 'pawn')
      ? Math.floor(Math.random() * 6) + 1   // filas 1–6 para el peón
      : Math.floor(Math.random() * 8);
    const col = Math.floor(Math.random() * 8);
    pos = { row, col };
    attempts++;
  } while (getValidMoves(state.currentPiece.id, pos.row, pos.col).length < 2 && attempts < 50);

  state.pieceRow = pos.row;
  state.pieceCol = pos.col;
  state.validMoves = getValidMoves(state.currentPiece.id, pos.row, pos.col);

  // Actualizar UI
  updateRoundDisplay();
  updatePieceInfo();
  renderBoard();
  updateRemainingDisplay();
  hideCombo();

  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-reveal').style.display = 'block';
  document.getElementById('btn-reveal').disabled = false;
  if (state.round >= state.totalRounds - 1) {
    document.getElementById('btn-next').textContent = 'VER RESULTADO →';
  } else {
    document.getElementById('btn-next').textContent = 'SIGUIENTE →';
  }

  startTimer();
}

// ─────────────────────────────────────────────
// CÁLCULO DE MOVIMIENTOS VÁLIDOS
// ─────────────────────────────────────────────
function getValidMoves(pieceType, row, col) {
  const moves = [];
  const inBounds = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

  switch (pieceType) {
    case 'pawn':
      // Avance
      if (inBounds(row - 1, col)) moves.push({ row: row - 1, col });
      // Doble avance desde salida (fila 6 = rango 2 para blancas)
      if (row === 6 && inBounds(row - 2, col)) moves.push({ row: row - 2, col });
      // Capturas diagonales (potenciales, para enseñar el patrón)
      if (inBounds(row - 1, col - 1)) moves.push({ row: row - 1, col: col - 1 });
      if (inBounds(row - 1, col + 1)) moves.push({ row: row - 1, col: col + 1 });
      break;

    case 'knight':
      [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr, dc]) => {
        if (inBounds(row + dr, col + dc)) moves.push({ row: row + dr, col: col + dc });
      });
      break;

    case 'bishop':
      [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([dr, dc]) => {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) { moves.push({ row: r, col: c }); r += dr; c += dc; }
      });
      break;

    case 'rook':
      [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr, dc]) => {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) { moves.push({ row: r, col: c }); r += dr; c += dc; }
      });
      break;

    case 'queen':
      [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr, dc]) => {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) { moves.push({ row: r, col: c }); r += dr; c += dc; }
      });
      break;

    case 'king':
      [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr, dc]) => {
        if (inBounds(row + dr, col + dc)) moves.push({ row: row + dr, col: col + dc });
      });
      break;
  }
  return moves;
}

// ─────────────────────────────────────────────
// RENDERIZAR TABLERO
// ─────────────────────────────────────────────
function renderBoard() {
  const board = document.getElementById('chess-board');
  board.innerHTML = '';

  // Coordenadas laterales
  const leftCoords = document.getElementById('coords-left');
  const rightCoords = document.getElementById('coords-right');
  leftCoords.innerHTML = '';
  rightCoords.innerHTML = '';

  for (let rank = 8; rank >= 1; rank--) {
    ['coords-left', 'coords-right'].forEach(id => {
      const span = document.createElement('span');
      span.textContent = rank;
      document.getElementById(id).appendChild(span);
    });
  }

  // Casillas
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const cell = document.createElement('div');
      const isLight = (r + c) % 2 === 0;
      cell.className = `cell ${isLight ? 'light' : 'dark'}`;
      cell.dataset.row = r;
      cell.dataset.col = c;

      if (r === state.pieceRow && c === state.pieceCol) {
        cell.classList.add('piece-sq');
        cell.textContent = state.currentPiece.symbol;
      } else {
        cell.addEventListener('click', () => handleCellClick(r, c));
      }

      board.appendChild(cell);
    }
  }
}

function getCell(row, col) {
  return document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}

// ─────────────────────────────────────────────
// CLICK EN CASILLA
// ─────────────────────────────────────────────
function handleCellClick(row, col) {
  if (state.roundOver) return;

  // Evitar doble click en ya marcadas
  const alreadyFound = state.foundMoves.some(m => m.row === row && m.col === col);
  const alreadyWrong = state.wrongCells.some(m => m.row === row && m.col === col);
  if (alreadyFound || alreadyWrong) return;

  const isValid = state.validMoves.some(m => m.row === row && m.col === col);
  const cell = getCell(row, col);

  if (isValid) {
    // ✅ CORRECTO
    state.foundMoves.push({ row, col });
    cell.classList.remove('light', 'dark');
    cell.classList.add('correct');

    state.combo++;
    const pts = state.combo >= 3 ? 15 : 10;
    state.score += pts;

    if (state.combo >= 3) showCombo(state.combo);
    updateScoreDisplay();
    updateRemainingDisplay();
    spawnScorePopup(cell, `+${pts}`, true);

    // Verificar si se encontraron todos
    if (state.foundMoves.length === state.validMoves.length) {
      roundComplete(true);
    }
  } else {
    // ❌ INCORRECTO
    state.wrongCells.push({ row, col });
    cell.classList.remove('light', 'dark');
    cell.classList.add('wrong');

    state.combo = 0;
    hideCombo();
    state.score = Math.max(0, state.score - 5);
    updateScoreDisplay();
    spawnScorePopup(cell, '-5', false);
  }
}

// ─────────────────────────────────────────────
// POPUP DE PUNTOS FLOTANTE
// ─────────────────────────────────────────────
function spawnScorePopup(cell, text, positive) {
  const el = document.createElement('div');
  el.className = 'score-popup ' + (positive ? 'popup-pos' : 'popup-neg');
  el.textContent = text;

  const rect = cell.getBoundingClientRect();
  el.style.left = (rect.left + rect.width / 2) + 'px';
  el.style.top = (rect.top + window.scrollY) + 'px';

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
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
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timer);
}

function timeUp() {
  if (state.roundOver) return;
  revealAll(true);
}

// ─────────────────────────────────────────────
// REVELAR RESPUESTAS
// ─────────────────────────────────────────────
function revealAll(auto = false) {
  document.getElementById('btn-reveal').disabled = true;

  state.validMoves.forEach(move => {
    const alreadyFound = state.foundMoves.some(m => m.row === move.row && m.col === move.col);
    if (!alreadyFound) {
      const cell = getCell(move.row, move.col);
      if (cell) {
        cell.classList.remove('light', 'dark', 'wrong');
        cell.classList.add('revealed');
      }
    }
  });

  if (!state.roundOver) {
    roundComplete(false);
  }
}

// ─────────────────────────────────────────────
// RONDA COMPLETA
// ─────────────────────────────────────────────
function roundComplete(success) {
  state.roundOver = true;
  stopTimer();

  // Tiempo bonus
  if (success) {
    const timeBonus = state.timeLeft * 2;
    state.score += timeBonus;
    updateScoreDisplay();
  }

  state.roundResults.push({
    piece: state.currentPiece,
    found: state.foundMoves.length,
    total: state.validMoves.length,
    success
  });

  // Actualizar indicador de progreso
  const statusEl = document.getElementById(`status-${state.round}`);
  if (statusEl) {
    statusEl.textContent = success ? '✅' : `${state.foundMoves.length}/${state.validMoves.length}`;
    statusEl.className = `progress-status ${success ? 'status-win' : 'status-lose'}`;
  }

  const progressItem = document.getElementById(`progress-${state.round}`);
  if (progressItem) {
    progressItem.classList.add(success ? 'item-win' : 'item-lose');
  }

  // Mostrar botones
  document.getElementById('btn-reveal').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';

  // Toast de resultado
  const toastIcon = success ? 'success' : (state.foundMoves.length > 0 ? 'warning' : 'error');
  const toastMsg = success
    ? `¡PERFECTO! +${state.timeLeft * 2} bonus de tiempo`
    : `${state.foundMoves.length} de ${state.validMoves.length} encontrados`;

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: toastIcon,
    title: success ? '¡RONDA COMPLETADA!' : '⏰ ¡Tiempo!',
    text: toastMsg,
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    background: '#1a1c2e',
    color: '#fff3e0',
    customClass: { popup: 'swal-toast-chess' }
  });
}

// ─────────────────────────────────────────────
// SIGUIENTE RONDA
// ─────────────────────────────────────────────
function nextRound() {
  state.round++;
  if (state.round >= state.totalRounds) {
    endGame();
  } else {
    startRound();
  }
}

// ─────────────────────────────────────────────
// FIN DEL JUEGO
// ─────────────────────────────────────────────
function endGame() {
  stopTimer();

  // Guardar puntaje en Supabase (solo si mejora el récord anterior)
  const winsAtEnd = state.roundResults.filter(r => r.success).length;
  saveMovimientosScoreToSupabase(state.score, winsAtEnd, state.totalRounds);

  const wins = state.roundResults.filter(r => r.success).length;
  const total = state.totalRounds;
  const score = state.score;

  // Clasificación
  let rank, rankColor;
  if (score >= 700)      { rank = '♛ GRAN MAESTRO';  rankColor = '#ffd166'; }
  else if (score >= 450) { rank = '♜ AVANZADO';       rankColor = '#00ff9f'; }
  else if (score >= 250) { rank = '♝ INTERMEDIO';     rankColor = '#fff3e0'; }
  else if (score >= 100) { rank = '♞ APRENDIZ';       rankColor = '#ffd166'; }
  else                   { rank = '♟ PRINCIPIANTE';   rankColor = '#ff3c38'; }

  let resultsHtml = state.roundResults.map(r => {
    const icon = r.success ? '✅' : '❌';
    return `<div style="display:flex;justify-content:space-between;align-items:center;
      background:rgba(255,255,255,0.05);padding:6px 10px;margin-bottom:4px;border-radius:2px;">
      <span>${icon} ${r.piece.symbol} ${r.piece.name}</span>
      <span style="color:${r.success ? '#00ff9f' : '#ff3c38'}">${r.found}/${r.total}</span>
    </div>`;
  }).join('');

  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive;line-height:2;text-align:center;">
        <p style="font-size:12px;color:#ffd166;margin-bottom:4px;">RESULTADO FINAL</p>
        <p style="font-size:32px;color:#00ff9f;margin:12px 0;">${score}<span style="font-size:14px"> PTS</span></p>
        <p style="font-size:11px;color:${rankColor};margin-bottom:16px;">${rank}</p>
        <p style="font-size:9px;color:rgba(255,243,224,0.7);margin-bottom:12px;">
          Rondas: ${wins}/${total} completadas
        </p>
        <div style="text-align:left;font-size:8px;margin-top:8px;">
          ${resultsHtml}
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
    if (result.isConfirmed) {
      initGame();
    } else if (result.isDenied) {
      window.location.href = 'ajedrez.html';
    }
  });
}

// ─────────────────────────────────────────────
// ACTUALIZAR DISPLAYS
// ─────────────────────────────────────────────
function updateRoundDisplay() {
  document.getElementById('round-display').textContent =
    `${state.round + 1} / ${state.totalRounds}`;
}

function updateScoreDisplay() {
  const el = document.getElementById('score-display');
  el.textContent = state.score;
  el.classList.remove('score-anim');
  void el.offsetWidth; // reflow
  el.classList.add('score-anim');
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  el.textContent = state.timeLeft;
  el.classList.toggle('warning', state.timeLeft <= 10);
}

function updateRemainingDisplay() {
  const remaining = state.validMoves.length - state.foundMoves.length;
  document.getElementById('remaining-display').textContent = remaining;
}

function updatePieceInfo() {
  document.getElementById('current-piece-symbol').textContent = state.currentPiece.symbol;
  document.getElementById('current-piece-name').textContent = state.currentPiece.name;
  document.getElementById('current-piece-desc').textContent = state.currentPiece.desc;
  document.getElementById('current-piece-diff').textContent = state.currentPiece.difficulty;
}

function showCombo(count) {
  const el = document.getElementById('combo-display');
  document.getElementById('combo-count').textContent = count;
  el.style.display = 'block';
}

function hideCombo() {
  document.getElementById('combo-display').style.display = 'none';
}

// ─────────────────────────────────────────────
// ESTILOS DINÁMICOS (inyectados en <head>)
// ─────────────────────────────────────────────
(function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    /* Popup de puntos flotante */
    .score-popup {
      position: fixed;
      font-family: 'Press Start 2P', cursive;
      font-size: 13px;
      pointer-events: none;
      z-index: 9999;
      transform: translateX(-50%);
      animation: floatUp 0.9s ease-out forwards;
    }
    .popup-pos { color: #00ff9f; text-shadow: 0 0 12px rgba(0,255,159,0.9); }
    .popup-neg { color: #ff3c38; text-shadow: 0 0 12px rgba(255,60,56,0.9); }
    @keyframes floatUp {
      0%   { opacity:1; transform:translateX(-50%) translateY(0); }
      100% { opacity:0; transform:translateX(-50%) translateY(-70px); }
    }

    /* Animación de score */
    .score-anim {
      animation: scorePop 0.3s ease;
    }
    @keyframes scorePop {
      0%,100% { transform:scale(1); }
      50%      { transform:scale(1.4); }
    }

    /* SweetAlert personalizados */
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
    .swal2-container {
      z-index: 100000 !important;
    }
    .swal2-container.swal2-top-end,
    .swal2-container.swal2-top-start,
    .swal2-container.swal2-top {
      top: 80px !important;
    }
  `;
  document.head.appendChild(s);
})();

// ─────────────────────────────────────────────
// ARRANCAR AL CARGAR
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initGame);

// ─────────────────────────────────────────────
// LEADERBOARD SUPABASE - MOVIMIENTOS VÁLIDOS
// El puntaje solo sube: si el nuevo score > best_score se actualiza.
// Si ya llegó al puntaje máximo (6/6 perfectas) no puede mejorar.
// ─────────────────────────────────────────────
async function saveMovimientosScoreToSupabase(score, roundsWon, totalRounds) {
  try {
    if (!window.supabase) return;
    const { data: { session } } = await window.supabase.auth.getSession();
    if (!session || !session.user) return;

    const userId = session.user.id;

    const { data, error } = await window.supabase
      .from('leaderboard_ajedrez_movimientos')
      .select('best_score, best_rounds_won')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error al consultar ranking movimientos:', error.message);
      return;
    }

    if (!data) {
      await window.supabase
        .from('leaderboard_ajedrez_movimientos')
        .insert({ user_id: userId, best_score: score, best_rounds_won: roundsWon, total_rounds: totalRounds });
    } else if (score > data.best_score) {
      // Solo actualizar si mejora el puntaje anterior
      await window.supabase
        .from('leaderboard_ajedrez_movimientos')
        .update({ best_score: score, best_rounds_won: roundsWon, updated_at: new Date().toISOString() })
        .eq('user_id', userId);
    }
    // Si score <= best_score: no se hace nada
  } catch (e) {
    console.error('Error al guardar movimientos en Supabase:', e);
  }
}

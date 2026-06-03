/* ============================================================
   MATE EN 1 — Sports Hub Games
   8 puzzles reales y verificados de Jaque Mate en 1
   ============================================================ */

// ─────────────────────────────────────────────
// SÍMBOLOS DE PIEZAS
// Blancas: ♔♕♖♗♘♙  |  Negras: ♚♛♜♝♞♟
// ─────────────────────────────────────────────
const SYMS = {
  wK:'♔', wQ:'♕', wR:'♖', wB:'♗', wN:'♘', wP:'♙',
  bK:'♚', bQ:'♛', bR:'♜', bB:'♝', bN:'♞', bP:'♟'
};

// ─────────────────────────────────────────────
// PUZZLES REALES Y VERIFICADOS
// Coordenadas: fila 0 = rango 8 (donde empiezan negras),
//              col  0 = columna a
// Cada posición fue verificada manualmente:
//  - El movimiento de mate da jaque real
//  - El rey negro no tiene escapes
//  - Ninguna pieza negra puede capturar al atacante
// ─────────────────────────────────────────────
const PUZZLES = [
  {
    // PUZZLE 1: Mate de Esquina — Qb5-b7#
    // wK c6, wQ b5, bK a8
    // La Dama desliza b5→b7, jaque diagonal a a8
    // a7 bloqueado por wQ (horizontal) + wK cubre b7
    // b8 bloqueado por wQ (vertical)
    id: 1,
    title: 'Mate de Esquina',
    difficulty: 'FÁCIL',
    hint: 'La Dama puede llegar a b7. Desde allí ataca diagonalmente la esquina.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:2, col:2 },   // c6
      { piece:'wQ', row:3, col:1 },   // b5
      { piece:'bK', row:0, col:0 },   // a8
    ],
    mateMove: { from:{row:3,col:1}, to:{row:1,col:1} }   // Qb5-b7#
  },
  {
    // PUZZLE 2: Torre Barre el Tablero — Ra1-a8#
    // wK g6, wR a1, bK h8, bP g7, bP h7
    // Torre vuela de a1 a a8, controla fila 8
    // bK atrapado: g8 por wR fila 8, g7/h7 propios peones
    id: 2,
    title: 'Torre al Último Rango',
    difficulty: 'FÁCIL',
    hint: 'La Torre en a1 puede barrer toda la columna a hasta a8.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:2, col:6 },   // g6
      { piece:'wR', row:7, col:0 },   // a1
      { piece:'bK', row:0, col:7 },   // h8
      { piece:'bP', row:1, col:6 },   // g7
      { piece:'bP', row:1, col:7 },   // h7
    ],
    mateMove: { from:{row:7,col:0}, to:{row:0,col:0} }   // Ra1-a8#
  },
  {
    // PUZZLE 3: Caballo Asfixiante — Ne4-f6#
    // wK h1, wN e4, wB c5, bK e8, bR d8, bR f8, bP d7, bP f7
    // Caballo e4→f6, jaque a bK en e8 (L: -2,+1)
    // bK rodeado por propias piezas, e7 cubierto por wB diagonal c5→d6→e7
    id: 3,
    title: 'Caballo Asfixiante',
    difficulty: 'MEDIO',
    hint: 'El Caballo en e4 puede saltar a f6. Desde allí da jaque al Rey en e8.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:7, col:7 },   // h1
      { piece:'wN', row:4, col:4 },   // e4
      { piece:'wB', row:3, col:2 },   // c5
      { piece:'bK', row:0, col:4 },   // e8
      { piece:'bR', row:0, col:3 },   // d8
      { piece:'bR', row:0, col:5 },   // f8
      { piece:'bP', row:1, col:3 },   // d7
      { piece:'bP', row:1, col:5 },   // f7
    ],
    mateMove: { from:{row:4,col:4}, to:{row:2,col:5} }   // Ne4-f6#
  },
  {
    // PUZZLE 4: Dama al Último Rango — Qe1-e8#
    // wK f6, wQ e1, bK g8 encerrado por sus propios peones g7, h7, h6
    // La columna e está completamente libre: Dama vuela de e1 a e8
    // bK en g8: f8/h8 cubiertos por Dama (fila 8), f7 cubierto por wK,
    //           g7/h7/h6 peones propios → ¡Mate total!
    // La Dama en e8 NO puede ser capturada (bK no llega, peones no alcanzan)
    id: 4,
    title: 'Dama al Último Rango',
    difficulty: 'MEDIO',
    hint: 'La columna e está completamente libre. ¡La Dama puede llegar hasta e8 y encerrar al Rey!',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:2, col:5 },   // f6  — cubre f7 y g7
      { piece:'wQ', row:7, col:4 },   // e1
      { piece:'bK', row:0, col:6 },   // g8
      { piece:'bP', row:1, col:6 },   // g7  — bloquea g7
      { piece:'bP', row:1, col:7 },   // h7  — bloquea h7
      { piece:'bP', row:2, col:7 },   // h6  — bloquea h6
    ],
    mateMove: { from:{row:7,col:4}, to:{row:0,col:4} }   // Qe1-e8#
  },
  {
    // PUZZLE 5: Torre Lateral — Rh1-h8#
    // wK f6, wR h1, bK f8
    // Torre h1→h8, controla fila 8 → jaque a bK en f8
    // bK: g8 por wR fila8, f7/g7 por wK en f6
    id: 5,
    title: 'Torre Lateral',
    difficulty: 'FÁCIL',
    hint: 'La Torre en h1 domina toda la columna h. El Rey negro en f8 no puede escapar al Rey blanco.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:2, col:5 },   // f6
      { piece:'wR', row:7, col:7 },   // h1
      { piece:'bK', row:0, col:5 },   // f8
    ],
    mateMove: { from:{row:7,col:7}, to:{row:0,col:7} }   // Rh1-h8#
  },
  {
    // PUZZLE 6: Pasillo de la Dama — Qa7-g7#
    // wK h6, wQ a7, bK h8
    // Dama desliza por fila 7 (a7→g7), jaque diagonal a h8
    // wK en h6 protege g7 + cubre h7/g7; wQ cubre g8 y h7
    id: 6,
    title: 'Pasillo de la Dama',
    difficulty: 'MEDIO',
    hint: 'La fila 7 está libre. La Dama en a7 puede llegar a g7 y atacar en diagonal.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:2, col:7 },   // h6
      { piece:'wQ', row:1, col:0 },   // a7
      { piece:'bK', row:0, col:7 },   // h8
    ],
    mateMove: { from:{row:1,col:0}, to:{row:1,col:6} }   // Qa7-g7#
  },
  {
    // PUZZLE 7: Red en el Centro — Qe1-e4#
    // wK h1, wQ e1, bK g4 rodeado de propios peones g5,h5,h4,h3,g3
    // Dama e1→e4, controla fila 4 (da jaque) + diagonales f5,f3
    // bK sin escape: f4 wQ fila4, f5 wQ diag, f3 wQ diag,
    //               g5/h5/h4/h3/g3 propios peones
    id: 7,
    title: 'Red en el Centro',
    difficulty: 'DIFÍCIL',
    hint: 'La columna e está completamente libre. La Dama puede disparar al centro y atrapar al Rey.',
    desc: 'Las BLANCAS dan jaque mate en 1.',
    pieces: [
      { piece:'wK', row:7, col:7 },   // h1
      { piece:'wQ', row:7, col:4 },   // e1
      { piece:'bK', row:4, col:6 },   // g4
      { piece:'bP', row:3, col:6 },   // g5
      { piece:'bP', row:3, col:7 },   // h5
      { piece:'bP', row:4, col:7 },   // h4
      { piece:'bP', row:5, col:7 },   // h3
      { piece:'bP', row:5, col:6 },   // g3
    ],
    mateMove: { from:{row:7,col:4}, to:{row:4,col:4} }   // Qe1-e4#
  },
  {
    // PUZZLE 8: Mate Árabe — Rg1-g8#
    // wK c1, wN f6, wR g1, bK h8, bP h7
    // Torre g1→g8, jaque a bK en h8 por fila 8
    // wN en f6 cubre g8 (protege la torre) y controla h7
    // bP en h7 cierra esa casilla; wR en g8 cubre g7 (columna g)
    id: 8,
    title: 'Mate Árabe',
    difficulty: 'DIFÍCIL',
    hint: 'El Caballo en f6 protege g8. ¿Puede la Torre ocupar esa casilla?',
    desc: 'Las BLANCAS dan jaque mate en 1. Torre + Caballo cooperan.',
    pieces: [
      { piece:'wK', row:7, col:2 },   // c1
      { piece:'wN', row:2, col:5 },   // f6
      { piece:'wR', row:7, col:6 },   // g1
      { piece:'bK', row:0, col:7 },   // h8
      { piece:'bP', row:1, col:7 },   // h7
    ],
    mateMove: { from:{row:7,col:6}, to:{row:0,col:6} }   // Rg1-g8#
  }
];

// ─────────────────────────────────────────────
// ESTADO DEL JUEGO
// ─────────────────────────────────────────────
let state = {};

function resetState() {
  state = {
    puzzleIndex:  0,
    totalPuzzles: PUZZLES.length,
    score:        0,
    timer:        null,
    timeLeft:     60,
    selectedCell: null,
    selectedPiece:null,
    validMoves:   [],
    puzzleOver:   false,
    streak:       0,
    hintUsed:     false,
    puzzleResults:[],
    currentPuzzle:null,
    boardPieces:  []
  };
}

// ─────────────────────────────────────────────
// INICIALIZAR JUEGO
// ─────────────────────────────────────────────
function initGame() {
  resetState();
  buildProgressList();

  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive; text-align:center; line-height:2;">
        <div style="font-size:52px; margin-bottom:12px;">♚</div>
        <p style="font-size:13px; color:#ffd166; margin-bottom:16px;">MATE EN 1</p>
        <p style="font-size:9px; color:#fff3e0; margin-bottom:8px;">Encuentra el único movimiento<br>que da jaque mate en 1 jugada.</p>
        <p style="font-size:9px; color:#00ff9f;">✅ Mate correcto: +100 pts</p>
        <p style="font-size:9px; color:#ffd166;">🔥 Racha ×3+: +150 pts</p>
        <p style="font-size:9px; color:#ff3c38;">💡 Pista: -30 pts</p>
        <p style="font-size:8px; color:rgba(255,243,224,0.6); margin-top:12px;">8 puzzles · 60 seg c/u</p>
      </div>
    `,
    background: '#1a1c2e',
    confirmButtonText: '¡JUGAR!',
    confirmButtonColor: '#00ff9f',
    customClass: { popup: 'swal-chess-popup', confirmButton: 'swal-chess-confirm' }
  }).then(() => startPuzzle());
}

// ─────────────────────────────────────────────
// CONSTRUIR LISTA DE PROGRESO
// ─────────────────────────────────────────────
function buildProgressList() {
  const list = document.getElementById('progress-list');
  list.innerHTML = '';
  PUZZLES.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.id = `progress-${i}`;
    item.innerHTML = `
      <span class="progress-num">#${i+1}</span>
      <span class="progress-name">${p.title}</span>
      <span class="progress-status status-pending" id="status-${i}">—</span>
    `;
    list.appendChild(item);
  });
}

// ─────────────────────────────────────────────
// INICIAR PUZZLE
// ─────────────────────────────────────────────
function startPuzzle() {
  state.puzzleOver   = false;
  state.selectedCell = null;
  state.selectedPiece= null;
  state.validMoves   = [];
  state.hintUsed     = false;
  state.timeLeft     = 60;
  state.currentPuzzle= PUZZLES[state.puzzleIndex];
  state.boardPieces  = state.currentPuzzle.pieces.map(p => ({ ...p }));

  updatePuzzleDisplay();
  updatePuzzleInfo();
  renderBoard();
  hideLastMove();
  hideStreak();

  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-hint').style.display = 'block';
  document.getElementById('btn-hint').disabled = false;
  document.getElementById('btn-skip').style.display = 'block';
  document.getElementById('btn-skip').disabled = false;

  const isLast = state.puzzleIndex >= state.totalPuzzles - 1;
  document.getElementById('btn-next').textContent = isLast ? 'VER RESULTADO →' : 'SIGUIENTE →';

  startTimer();
}

// ─────────────────────────────────────────────
// RENDERIZAR TABLERO
// Diferencia visual: piezas BLANCAS en crema con
// borde oscuro, piezas NEGRAS en muy oscuro.
// ─────────────────────────────────────────────
function renderBoard() {
  const board = document.getElementById('chess-board');
  board.innerHTML = '';

  const leftCoords  = document.getElementById('coords-left');
  const rightCoords = document.getElementById('coords-right');
  leftCoords.innerHTML = '';
  rightCoords.innerHTML = '';

  for (let rank = 8; rank >= 1; rank--) {
    ['coords-left','coords-right'].forEach(id => {
      const span = document.createElement('span');
      span.textContent = rank;
      document.getElementById(id).appendChild(span);
    });
  }

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const cell = document.createElement('div');
      const isLight = (r + c) % 2 === 0;
      cell.className = `cell ${isLight ? 'light' : 'dark'}`;
      cell.dataset.row = r;
      cell.dataset.col = c;

      const pieceData = getPieceAt(r, c);
      if (pieceData) {
        cell.textContent = SYMS[pieceData.piece];
        const isWhite = pieceData.piece.startsWith('w');

        // ── Clase visual de color de pieza ──
        cell.classList.add(isWhite ? 'piece-white' : 'piece-black');

        if (!state.puzzleOver) {
          if (isWhite) {
            // Piezas blancas: seleccionables
            cell.addEventListener('click', () => handlePieceClick(r, c, pieceData));
          } else {
            // Piezas negras: pueden ser destino de captura
            cell.addEventListener('click', () => handleCaptureClick(r, c));
          }
        } else {
          cell.classList.add('no-hover');
        }
      } else {
        if (!state.puzzleOver) {
          cell.addEventListener('click', () => handleEmptyClick(r, c));
        }
      }

      board.appendChild(cell);
    }
  }

  applySelectionHighlights();
}

function getPieceAt(row, col) {
  return state.boardPieces.find(p => p.row === row && p.col === col) || null;
}
function getCell(row, col) {
  return document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}

// ─────────────────────────────────────────────
// HIGHLIGHTS DE SELECCIÓN Y MOVIMIENTOS
// ─────────────────────────────────────────────
function applySelectionHighlights() {
  document.querySelectorAll('.cell.selected, .cell.valid-move, .cell.valid-capture')
    .forEach(el => el.classList.remove('selected','valid-move','valid-capture'));

  if (state.selectedCell) {
    const selCell = getCell(state.selectedCell.row, state.selectedCell.col);
    if (selCell) selCell.classList.add('selected');

    state.validMoves.forEach(mv => {
      const cell = getCell(mv.row, mv.col);
      if (!cell) return;
      if (getPieceAt(mv.row, mv.col)) {
        cell.classList.add('valid-capture');
      } else {
        cell.classList.add('valid-move');
      }
    });
  }
}

// ─────────────────────────────────────────────
// MANEJADOR: CLICK EN PIEZA BLANCA
// ─────────────────────────────────────────────
function handlePieceClick(row, col, pieceData) {
  if (state.puzzleOver) return;

  // Si esta misma celda ya está seleccionada: deseleccionar
  if (state.selectedCell &&
      state.selectedCell.row === row &&
      state.selectedCell.col === col) {
    state.selectedCell  = null;
    state.selectedPiece = null;
    state.validMoves    = [];
    applySelectionHighlights();
    return;
  }

  // Si hay selección y este cuadro es un movimiento válido (pieza blanca moviéndose a otra blanca imposible, pero por si acaso)
  if (state.selectedCell && state.validMoves.some(m => m.row === row && m.col === col)) {
    attemptMove(row, col);
    return;
  }

  // Seleccionar esta pieza blanca
  state.selectedCell  = { row, col };
  state.selectedPiece = pieceData;
  state.validMoves    = getPieceLegalMoves(pieceData.piece, row, col);
  applySelectionHighlights();
}

// ─────────────────────────────────────────────
// MANEJADOR: CLICK EN PIEZA NEGRA (captura)
// ─────────────────────────────────────────────
function handleCaptureClick(row, col) {
  if (state.puzzleOver) return;
  if (!state.selectedCell) return;

  // ¿Este cuadro con pieza negra es un movimiento válido?
  if (state.validMoves.some(m => m.row === row && m.col === col)) {
    attemptMove(row, col);
  } else {
    // Click en pieza negra no válida: deseleccionar
    state.selectedCell  = null;
    state.selectedPiece = null;
    state.validMoves    = [];
    applySelectionHighlights();
  }
}

// ─────────────────────────────────────────────
// MANEJADOR: CLICK EN CASILLA VACÍA
// ─────────────────────────────────────────────
function handleEmptyClick(row, col) {
  if (state.puzzleOver) return;
  if (!state.selectedCell) return;

  if (state.validMoves.some(m => m.row === row && m.col === col)) {
    attemptMove(row, col);
  } else {
    state.selectedCell  = null;
    state.selectedPiece = null;
    state.validMoves    = [];
    applySelectionHighlights();
  }
}

// ─────────────────────────────────────────────
// INTENTAR MOVIMIENTO
// ─────────────────────────────────────────────
function attemptMove(toRow, toCol) {
  const from = state.selectedCell;
  const to   = { row: toRow, col: toCol };
  const correctMate = state.currentPuzzle.mateMove;

  const isCorrect = (
    from.row === correctMate.from.row && from.col === correctMate.from.col &&
    to.row   === correctMate.to.row   && to.col   === correctMate.to.col
  );

  // Limpiar selección
  state.selectedCell  = null;
  state.selectedPiece = null;
  state.validMoves    = [];

  if (isCorrect) {
    executeMove(from, to);
    puzzleSuccess();
  } else {
    // Movimiento ilegal o que no es mate
    state.streak = 0;
    hideStreak();
    state.score = Math.max(0, state.score - 25);
    updateScoreDisplay();
    applySelectionHighlights();

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: '¡No es mate!',
      text: 'Ese movimiento no da jaque mate en 1.',
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
      background: '#1a1c2e',
      color: '#fff3e0',
      customClass: { popup: 'swal-toast-chess' }
    });
  }
}

// ─────────────────────────────────────────────
// EJECUTAR MOVIMIENTO VISUALMENTE
// ─────────────────────────────────────────────
function executeMove(from, to) {
  state.boardPieces = state.boardPieces.filter(
    p => !(p.row === to.row && p.col === to.col)
  );
  const piece = state.boardPieces.find(p => p.row === from.row && p.col === from.col);
  if (piece) { piece.row = to.row; piece.col = to.col; }
  renderBoard();

  const fromCell = getCell(from.row, from.col);
  const toCell   = getCell(to.row,   to.col);
  if (fromCell) fromCell.classList.add('last-from');
  if (toCell)   toCell.classList.add('last-to', 'mated');

  const cols  = ['a','b','c','d','e','f','g','h'];
  const ranks = [8,7,6,5,4,3,2,1];
  const moveStr = `${cols[from.col]}${ranks[from.row]} → ${cols[to.col]}${ranks[to.row]}`;
  showLastMove(`♟ JUGADA: ${moveStr}`);
}

// ─────────────────────────────────────────────
// CÁLCULO DE MOVIMIENTOS LEGALES (piezas blancas)
// ─────────────────────────────────────────────
function getPieceLegalMoves(pieceType, row, col) {
  const moves    = [];
  const inBounds = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
  const isOwn    = (r, c) => { const p = getPieceAt(r,c); return p && p.piece.startsWith('w'); };
  const canLand  = (r, c) => inBounds(r,c) && !isOwn(r,c);

  switch (pieceType) {
    case 'wP':
      if (inBounds(row-1, col) && !getPieceAt(row-1, col))
        moves.push({row:row-1, col});
      if (row === 6 && !getPieceAt(row-1,col) && !getPieceAt(row-2,col))
        moves.push({row:row-2, col});
      [col-1, col+1].forEach(dc => {
        if (inBounds(row-1, dc) && getPieceAt(row-1, dc) && !isOwn(row-1,dc))
          moves.push({row:row-1, col:dc});
      });
      break;
    case 'wN':
      [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]
        .forEach(([dr,dc]) => { if (canLand(row+dr,col+dc)) moves.push({row:row+dr,col:col+dc}); });
      break;
    case 'wB':
      [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([dr,dc]) => {
        let r=row+dr, c=col+dc;
        while (inBounds(r,c)) {
          if (isOwn(r,c)) break;
          moves.push({row:r,col:c});
          if (getPieceAt(r,c)) break;
          r+=dr; c+=dc;
        }
      });
      break;
    case 'wR':
      [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc]) => {
        let r=row+dr, c=col+dc;
        while (inBounds(r,c)) {
          if (isOwn(r,c)) break;
          moves.push({row:r,col:c});
          if (getPieceAt(r,c)) break;
          r+=dr; c+=dc;
        }
      });
      break;
    case 'wQ':
      [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr,dc]) => {
        let r=row+dr, c=col+dc;
        while (inBounds(r,c)) {
          if (isOwn(r,c)) break;
          moves.push({row:r,col:c});
          if (getPieceAt(r,c)) break;
          r+=dr; c+=dc;
        }
      });
      break;
    case 'wK':
      [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
        .forEach(([dr,dc]) => { if (canLand(row+dr,col+dc)) moves.push({row:row+dr,col:col+dc}); });
      break;
  }
  return moves;
}

// ─────────────────────────────────────────────
// PUZZLE RESUELTO
// ─────────────────────────────────────────────
function puzzleSuccess() {
  state.puzzleOver = true;
  stopTimer();

  state.streak++;
  const bonus    = state.streak >= 3 ? 150 : 100;
  const timeBonus= Math.floor(state.timeLeft * 1.5);
  state.score   += bonus + timeBonus;
  updateScoreDisplay();
  updateStreakDisplay();

  state.puzzleResults.push({
    puzzle:   state.currentPuzzle,
    solved:   true,
    hintUsed: state.hintUsed,
    pts:      bonus + timeBonus
  });

  const statusEl = document.getElementById(`status-${state.puzzleIndex}`);
  if (statusEl) { statusEl.textContent = '✅'; statusEl.className = 'progress-status status-win'; }
  const progressItem = document.getElementById(`progress-${state.puzzleIndex}`);
  if (progressItem) progressItem.classList.add('item-win');

  document.getElementById('btn-hint').style.display = 'none';
  document.getElementById('btn-skip').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: state.streak >= 3 ? `🔥 RACHA ×${state.streak}!` : '¡MATE ENCONTRADO!',
    text: `+${bonus} pts + ${timeBonus} bonus de tiempo`,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    background: '#1a1c2e',
    color: '#fff3e0',
    customClass: { popup: 'swal-toast-chess' }
  });
}

// ─────────────────────────────────────────────
// PUZZLE FALLIDO (tiempo / saltar)
// ─────────────────────────────────────────────
function puzzleFailed(skipped = false) {
  if (state.puzzleOver) return;
  state.puzzleOver = true;
  stopTimer();

  state.streak = 0;
  hideStreak();

  state.puzzleResults.push({
    puzzle: state.currentPuzzle,
    solved: false,
    hintUsed: state.hintUsed,
    pts: 0,
    skipped
  });

  const statusEl = document.getElementById(`status-${state.puzzleIndex}`);
  if (statusEl) {
    statusEl.textContent = skipped ? '⏭' : '⏰';
    statusEl.className = `progress-status ${skipped ? 'status-skip' : 'status-lose'}`;
  }
  const progressItem = document.getElementById(`progress-${state.puzzleIndex}`);
  if (progressItem) progressItem.classList.add(skipped ? 'item-skip' : 'item-lose');

  // Mostrar solución
  const correct  = state.currentPuzzle.mateMove;
  const fromCell = getCell(correct.from.row, correct.from.col);
  const toCell   = getCell(correct.to.row,   correct.to.col);
  if (fromCell) fromCell.classList.add('hint-highlight','last-from');
  if (toCell)   toCell.classList.add('hint-highlight','last-to');

  document.getElementById('btn-hint').style.display = 'none';
  document.getElementById('btn-skip').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: skipped ? 'warning' : 'error',
    title: skipped ? '⏭ Puzzle saltado' : '⏰ ¡Tiempo agotado!',
    text: 'Se muestra la jugada correcta.',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    background: '#1a1c2e',
    color: '#fff3e0',
    customClass: { popup: 'swal-toast-chess' }
  });
}

// ─────────────────────────────────────────────
// PISTA
// ─────────────────────────────────────────────
function useHint() {
  if (state.puzzleOver || state.hintUsed) return;
  state.hintUsed = true;
  state.score    = Math.max(0, state.score - 30);
  updateScoreDisplay();
  document.getElementById('btn-hint').disabled = true;

  const correct  = state.currentPuzzle.mateMove;
  const fromCell = getCell(correct.from.row, correct.from.col);
  if (fromCell) {
    fromCell.classList.add('hint-highlight');
    setTimeout(() => fromCell.classList.remove('hint-highlight'), 2500);
  }

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'info',
    title: '💡 PISTA',
    text: state.currentPuzzle.hint,
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    background: '#1a1c2e',
    color: '#fff3e0',
    customClass: { popup: 'swal-toast-chess' }
  });
}

// ─────────────────────────────────────────────
// SALTAR / SIGUIENTE
// ─────────────────────────────────────────────
function skipPuzzle() { if (!state.puzzleOver) puzzleFailed(true); }

function nextPuzzle() {
  state.puzzleIndex++;
  if (state.puzzleIndex >= state.totalPuzzles) endGame();
  else startPuzzle();
}

// ─────────────────────────────────────────────
// FIN DEL JUEGO
// ─────────────────────────────────────────────
function endGame() {
  stopTimer();

  const solved = state.puzzleResults.filter(r => r.solved).length;
  const total  = state.totalPuzzles;
  const score  = state.score;

  let rank, rankColor;
  if (score >= 1000)     { rank = '♛ GRAN MAESTRO';  rankColor = '#ffd166'; }
  else if (score >= 700) { rank = '♜ MAESTRO';        rankColor = '#00ff9f'; }
  else if (score >= 450) { rank = '♝ AVANZADO';       rankColor = '#fff3e0'; }
  else if (score >= 200) { rank = '♞ APRENDIZ';       rankColor = '#ffd166'; }
  else                   { rank = '♟ PRINCIPIANTE';   rankColor = '#ff3c38'; }

  let resultsHtml = state.puzzleResults.map((r, i) => {
    const icon  = r.solved ? '✅' : (r.skipped ? '⏭' : '⏰');
    const color = r.solved ? '#00ff9f' : '#ff3c38';
    return `<div style="display:flex;justify-content:space-between;align-items:center;
      background:rgba(255,255,255,0.05);padding:6px 10px;margin-bottom:4px;border-radius:2px;">
      <span>${icon} #${i+1} ${r.puzzle.title}</span>
      <span style="color:${color}">${r.solved ? '+'+r.pts : '0'} pts</span>
    </div>`;
  }).join('');

  Swal.fire({
    html: `
      <div style="font-family:'Press Start 2P',cursive;line-height:2;text-align:center;">
        <p style="font-size:12px;color:#ffd166;margin-bottom:4px;">RESULTADO FINAL</p>
        <p style="font-size:32px;color:#00ff9f;margin:12px 0;">${score}<span style="font-size:14px"> PTS</span></p>
        <p style="font-size:11px;color:${rankColor};margin-bottom:16px;">${rank}</p>
        <p style="font-size:9px;color:rgba(255,243,224,0.7);margin-bottom:12px;">
          Puzzles resueltos: ${solved}/${total}
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
      puzzleFailed(false);
    }
  }, 1000);
}
function stopTimer() { clearInterval(state.timer); }

// ─────────────────────────────────────────────
// ACTUALIZAR UI
// ─────────────────────────────────────────────
function updatePuzzleDisplay() {
  document.getElementById('puzzle-display').textContent =
    `${state.puzzleIndex + 1} / ${state.totalPuzzles}`;
}

function updateScoreDisplay() {
  const el = document.getElementById('score-display');
  el.textContent = state.score;
  el.classList.remove('score-anim');
  void el.offsetWidth;
  el.classList.add('score-anim');
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  el.textContent = state.timeLeft;
  el.classList.toggle('warning', state.timeLeft <= 15);
}

function updateStreakDisplay() {
  document.getElementById('streak-display').textContent = `${state.streak}🔥`;
  if (state.streak >= 3) {
    document.getElementById('streak-count').textContent = state.streak;
    document.getElementById('streak-box').style.display = 'block';
  }
}

function updatePuzzleInfo() {
  const p = state.currentPuzzle;
  // Indicador de turno bien visible
  const turnEl = document.getElementById('puzzle-turn');
  turnEl.textContent = '⬜ TURNO: BLANCAS';
  turnEl.style.color = '#fff8e1';

  document.getElementById('puzzle-hint').textContent = p.desc;
  document.getElementById('puzzle-diff').textContent = p.difficulty;
  document.getElementById('streak-display').textContent = `${state.streak}🔥`;
}

function showLastMove(text) {
  const bar = document.getElementById('last-move-bar');
  document.getElementById('last-move-text').textContent = text;
  bar.style.display = 'block';
}
function hideLastMove() {
  document.getElementById('last-move-bar').style.display = 'none';
}
function hideStreak() {
  document.getElementById('streak-box').style.display = 'none';
}

// ─────────────────────────────────────────────
// ESTILOS DINÁMICOS (piezas blancas vs negras)
// ─────────────────────────────────────────────
(function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    /* Pieza BLANCA: color crema con borde oscuro fuerte */
    .piece-white {
      color: #fff8e1;
      text-shadow:
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000,
         0 3px 8px rgba(0,0,0,0.9);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
    }
    /* Pieza NEGRA: color muy oscuro con sombra clara sutil */
    .piece-black {
      color: #0a0a18;
      text-shadow:
        0 0 6px rgba(255,255,255,0.15),
        0 2px 4px rgba(255,255,255,0.1);
      filter: drop-shadow(0 1px 3px rgba(255,255,255,0.12));
    }
    /* Animación de puntuación */
    .score-anim { animation: scorePop 0.3s ease; }
    @keyframes scorePop {
      0%,100% { transform:scale(1); }
      50%      { transform:scale(1.35); }
    }
    /* Turno: estilo llamativo */
    .puzzle-turn {
      font-size: 8px !important;
      padding: 6px 10px;
      background: rgba(255,248,225,0.1);
      border: 1px solid rgba(255,248,225,0.3);
      border-radius: 3px;
      letter-spacing: 1px;
      animation: turnPulse 2s ease-in-out infinite;
    }
    @keyframes turnPulse {
      0%,100% { box-shadow: none; }
      50%      { box-shadow: 0 0 14px rgba(255,248,225,0.25); }
    }
    /* SweetAlert2 estilos */
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
// ARRANCAR
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initGame);

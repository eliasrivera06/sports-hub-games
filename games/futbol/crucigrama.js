// ============================================
//  JS — Lógica del crucigrama (Multi-nivel)
//  Depende de: crucigrama-data.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Estado de Niveles ─────────────────────────
  let currentLevelIdx = 0;
  let COLS = 11;
  let ROWS = 10;
  let WORDS_LIST = [];

  // Puntos y progreso persistentes entre niveles (cargados de localStorage si existen)
  let totalScore = parseInt(localStorage.getItem('sporthub_crucigrama_total_score')) || 0;
  let completedLevels = new Set(JSON.parse(localStorage.getItem('sporthub_crucigrama_completed_levels')) || []);
  let completedLevelScores = JSON.parse(localStorage.getItem('sporthub_crucigrama_completed_level_scores')) || {};

  function saveProgress() {
    localStorage.setItem('sporthub_crucigrama_total_score', totalScore);
    localStorage.setItem('sporthub_crucigrama_completed_levels', JSON.stringify(Array.from(completedLevels)));
    localStorage.setItem('sporthub_crucigrama_completed_level_scores', JSON.stringify(completedLevelScores));
  }

  // ── Estado del Juego ─────────────────────────
  let selectedCell = null;
  let selectedWord = null;
  let cluesLeft = 3;
  let userGrid = {};
  let solvedWords = new Set();

  // ── Mapas y Cachés ───────────────────────────
  let cellMap = {};
  let ownerCount = {};
  let wordCells = {};
  let startNums = {};

  // ── Inicializar Nivel ────────────────────────
  function initLevel() {
    const level = LEVELS[currentLevelIdx];
    COLS = level.gridConfig.COLS;
    ROWS = level.gridConfig.ROWS;
    WORDS_LIST = level.words;

    // Reiniciar variables de juego
    selectedCell = null;
    selectedWord = null;
    cluesLeft = 3;
    userGrid = {};
    solvedWords = new Set();

    cellMap = {};
    ownerCount = {};
    wordCells = {};
    startNums = {};

    // Construir mapas de letras y cruces
    WORDS_LIST.forEach(({ id, dir, r, c, word }) => {
      wordCells[id] = [];
      for (let i = 0; i < word.length; i++) {
        const rr = dir === 'h' ? r : r + i;
        const cc = dir === 'h' ? c + i : c;
        const k = `${rr},${cc}`;
        cellMap[k] = word[i].toUpperCase();
        ownerCount[k] = (ownerCount[k] || 0) + 1;
        wordCells[id].push({ r: rr, c: cc });
      }
    });

    // Construir mapa de números de inicio
    WORDS_LIST.forEach(({ id, r, c }) => {
      startNums[`${r},${c}`] = id;
    });

    // Actualizar nombre de nivel en el HTML
    const lvlNameEl = document.getElementById('levelName');
    if (lvlNameEl) {
      lvlNameEl.textContent = `${level.name.toUpperCase()} (${currentLevelIdx + 1}/${LEVELS.length})`;
    }

    // Si ya está completado el nivel, cargamos las letras y marcamos todo resuelto
    if (completedLevels.has(currentLevelIdx)) {
      for (const key in cellMap) {
        userGrid[key] = cellMap[key];
      }
      WORDS_LIST.forEach(w => solvedWords.add(w.id));

      document.getElementById('cluesLeft').textContent = '0';
      document.getElementById('btnClue').textContent = `? PISTA (0)`;
      document.getElementById('btnClue').disabled = true;
      document.getElementById('clueBox').textContent = '¡NIVEL COMPLETADO!';
    } else {
      document.getElementById('cluesLeft').textContent = cluesLeft;
      document.getElementById('btnClue').textContent = `? PISTA (${cluesLeft})`;
      document.getElementById('btnClue').disabled = false;
      document.getElementById('clueBox').textContent = 'Selecciona una casilla o una pista para comenzar...';
    }

    // Dibujar interfaz
    buildGrid();
    buildClues();
    updateScoreBar();
  }

  // ── Cambiar Niveles ──────────────────────────
  function prevLevel() {
    if (currentLevelIdx > 0) {
      currentLevelIdx--;
      initLevel();
    } else {
      Swal.fire({
        title: 'PRIMER NIVEL',
        text: 'Ya estás en el primer crucigrama.',
        icon: 'info',
        background: '#161b22',
        color: '#30d158',
        confirmButtonColor: '#30d158',
        confirmButtonText: 'OK',
      });
    }
  }

  function nextLevel() {
    if (currentLevelIdx < LEVELS.length - 1) {
      currentLevelIdx++;
      initLevel();
    } else {
      Swal.fire({
        title: 'ÚLTIMO NIVEL',
        text: '¡Has completado todos los crucigramas!',
        icon: 'success',
        background: '#161b22',
        color: '#ffd60a',
        confirmButtonColor: '#ffd60a',
        confirmButtonText: '¡SÚPER!',
      });
    }
  }

  // ── Build Grid ───────────────────────────────
  function buildGrid() {
    const grid = document.getElementById('cwGrid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${COLS}, 52px)`;
    grid.style.gridTemplateRows = `repeat(${ROWS}, 52px)`;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const k = `${r},${c}`;
        const cell = document.createElement('div');

        if (cellMap[k]) {
          let extraClass = '';
          if (ownerCount[k] > 1) extraClass += ' cross';
          if (completedLevels.has(currentLevelIdx)) extraClass += ' correct';
          cell.className = 'cw-cell' + extraClass;
          cell.dataset.r = r;
          cell.dataset.c = c;

          if (startNums[k] !== undefined) {
            const num = document.createElement('div');
            num.className = 'cw-num';
            num.textContent = startNums[k];
            cell.appendChild(num);
          }

          const letter = document.createElement('div');
          letter.className = 'cw-letter';
          letter.id = `letter-${k}`;
          letter.textContent = userGrid[k] || '';
          cell.appendChild(letter);

          cell.addEventListener('click', () => onCellClick(r, c));
        } else {
          cell.className = 'cw-cell blocked';
        }

        grid.appendChild(cell);
      }
    }
  }

  // ── Build Clues ──────────────────────────────
  function buildClues() {
    const list = document.getElementById('cluesList');
    list.innerHTML = '';
    WORDS_LIST.forEach(w => {
      const div = document.createElement('div');
      div.className = 'clue-item' + (solvedWords.has(w.id) ? ' solved' : '');
      div.id = `clue-${w.id}`;
      div.innerHTML = `<span>${w.id}${w.arrow}</span>${w.clue}`;
      div.addEventListener('click', () => selectWord(w));
      list.appendChild(div);
    });
  }

  // ── Selección ────────────────────────────────
  function onCellClick(r, c) {
    const k = `${r},${c}`;
    if (!cellMap[k]) return;

    if (selectedCell && selectedCell.r === r && selectedCell.c === c && ownerCount[k] > 1) {
      const other = WORDS_LIST.find(w => w !== selectedWord && wordCells[w.id].some(p => p.r === r && p.c === c));
      if (other) { selectWord(other, { r, c }); return; }
    }

    const word = (selectedWord && wordCells[selectedWord.id].some(p => p.r === r && p.c === c))
      ? selectedWord
      : WORDS_LIST.find(w => wordCells[w.id].some(p => p.r === r && p.c === c));

    if (word) selectWord(word, { r, c });
  }

  function selectWord(word, clickedCell) {
    selectedWord = word;
    selectedCell = clickedCell || wordCells[word.id][0];
    document.getElementById('clueBox').textContent =
      `${word.id}${word.arrow}  ${word.clue.toUpperCase()}`;
    refreshCellStyles();
    document.querySelectorAll('.clue-item').forEach(el => el.classList.remove('active'));
    const clueEl = document.getElementById(`clue-${word.id}`);
    if (clueEl) clueEl.classList.add('active');
  }

  function refreshCellStyles() {
    document.querySelectorAll('.cw-cell:not(.blocked)').forEach(el =>
      el.classList.remove('active-word', 'selected')
    );
    if (!selectedWord) return;
    wordCells[selectedWord.id].forEach(({ r, c }) => {
      const el = getCellEl(r, c);
      if (el) el.classList.add('active-word');
    });
    if (selectedCell) {
      const el = getCellEl(selectedCell.r, selectedCell.c);
      if (el) el.classList.add('selected');
    }
  }

  function getCellEl(r, c) {
    return document.querySelector(`.cw-cell[data-r="${r}"][data-c="${c}"]`);
  }

  // ── Teclado ──────────────────────────────────
  document.addEventListener('keydown', e => {
    if (completedLevels.has(currentLevelIdx)) return;
    if (!selectedWord || !selectedCell) return;
    const key = e.key.toUpperCase();
    if (key === 'BACKSPACE' || key === 'DELETE') {
      e.preventDefault(); typeBackspace(); return;
    }
    if (['ARROWLEFT', 'ARROWRIGHT', 'ARROWUP', 'ARROWDOWN'].includes(key)) {
      e.preventDefault(); moveCursor(key); return;
    }
    if (/^[A-ZÁÉÍÓÚÑ]$/.test(e.key) || /^[A-Z]$/.test(key)) {
      typeLetter(key.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    }
  });

  function typeLetter(letter) {
    if (solvedWords.has(selectedWord.id)) return;
    const k = `${selectedCell.r},${selectedCell.c}`;
    userGrid[k] = letter;
    const el = document.getElementById(`letter-${k}`);
    if (el) el.textContent = letter;
    advanceCursor();
    checkWordsRealTime();
  }

  // Comprobar si todas las celdas de una palabra están correctas
  function checkWordComplete(wordId) {
    return wordCells[wordId].every(({ r, c }) =>
      (userGrid[`${r},${c}`] || '') === cellMap[`${r},${c}`]
    );
  }

  // Comprobar palabras completadas en tiempo real
  function checkWordsRealTime() {
    let changed = false;
    WORDS_LIST.forEach(w => {
      if (solvedWords.has(w.id)) return;
      const cells = wordCells[w.id];
      const allOk = cells.every(({ r, c }) => {
        const val = userGrid[`${r},${c}`];
        return val && val.toUpperCase() === cellMap[`${r},${c}`];
      });
      if (allOk) {
        solvedWords.add(w.id);
        changed = true;
        cells.forEach(({ r, c }) => {
          const el = getCellEl(r, c);
          if (el) {
            el.classList.remove('wrong');
            el.classList.add('correct');
          }
        });
        const clueEl = document.getElementById(`clue-${w.id}`);
        if (clueEl) {
          clueEl.classList.remove('active');
          clueEl.classList.add('solved');
        }
      }
    });

    if (changed) {
      updateScoreBar();
      if (solvedWords.size === WORDS_LIST.length) {
        if (!completedLevels.has(currentLevelIdx)) {
          completedLevels.add(currentLevelIdx);
          const currentLvlScore = solvedWords.size * 150 + Math.max(0, cluesLeft * 50);
          completedLevelScores[currentLevelIdx] = currentLvlScore;
          totalScore += currentLvlScore;
          updateScoreBar();
          saveProgress();
          saveCrucigramaLevelToSupabase(completedLevels.size);
        }
        setTimeout(showWin, 400);
      }
    }
  }

  function typeBackspace() {
    const k = `${selectedCell.r},${selectedCell.c}`;
    if (userGrid[k]) {
      delete userGrid[k];
      const el = document.getElementById(`letter-${k}`);
      if (el) el.textContent = '';
    } else {
      retreatCursor();
    }
    checkWordsRealTime();
  }

  function advanceCursor() {
    const cells = wordCells[selectedWord.id];
    const idx = cells.findIndex(p => p.r === selectedCell.r && p.c === selectedCell.c);
    if (cells[idx + 1]) { selectedCell = cells[idx + 1]; refreshCellStyles(); }
  }

  function retreatCursor() {
    const cells = wordCells[selectedWord.id];
    const idx = cells.findIndex(p => p.r === selectedCell.r && p.c === selectedCell.c);
    if (cells[idx - 1]) {
      selectedCell = cells[idx - 1];
      refreshCellStyles();
      const k = `${cells[idx - 1].r},${cells[idx - 1].c}`;
      delete userGrid[k];
      const el = document.getElementById(`letter-${k}`);
      if (el) el.textContent = '';
    }
  }

  function moveCursor(key) {
    const cells = wordCells[selectedWord.id];
    const idx = cells.findIndex(p => p.r === selectedCell.r && p.c === selectedCell.c);
    if ((key === 'ARROWRIGHT' || key === 'ARROWDOWN') && cells[idx + 1]) {
      selectedCell = cells[idx + 1]; refreshCellStyles();
    }
    if ((key === 'ARROWLEFT' || key === 'ARROWUP') && cells[idx - 1]) {
      selectedCell = cells[idx - 1]; refreshCellStyles();
    }
  }

  // ── Verificar ────────────────────────────────
  function checkAll() {
    if (completedLevels.has(currentLevelIdx)) {
      Swal.fire({
        title: 'NIVEL COMPLETADO',
        text: 'Este nivel ya ha sido completado.',
        icon: 'info',
        background: '#161b22',
        color: '#30d158',
        confirmButtonColor: '#30d158',
        confirmButtonText: 'OK',
      });
      return;
    }
    let newlySolved = 0;
    WORDS_LIST.forEach(w => {
      if (solvedWords.has(w.id)) return;
      const cells = wordCells[w.id];
      const anySet = cells.some(({ r, c }) => userGrid[`${r},${c}`]);
      if (!anySet) return;
      
      const allOk = cells.every(({ r, c }) =>
        (userGrid[`${r},${c}`] || '') === cellMap[`${r},${c}`]
      );
      
      cells.forEach(({ r, c }) => {
        const el = getCellEl(r, c);
        const k = `${r},${c}`;
        if (!el) return;
        el.classList.remove('correct', 'wrong');
        if (allOk) {
          el.classList.add('correct');
        } else if (userGrid[k] && userGrid[k] !== cellMap[k]) {
          el.classList.add('wrong');
        }
      });
      
      if (allOk) {
        solvedWords.add(w.id);
        newlySolved++;
        const clueEl = document.getElementById(`clue-${w.id}`);
        if (clueEl) {
          clueEl.classList.remove('active');
          clueEl.classList.add('solved');
        }
      }
    });

    updateScoreBar();
    if (solvedWords.size === WORDS_LIST.length) {
      if (!completedLevels.has(currentLevelIdx)) {
        completedLevels.add(currentLevelIdx);
        const currentLvlScore = solvedWords.size * 150 + Math.max(0, cluesLeft * 50);
        completedLevelScores[currentLevelIdx] = currentLvlScore;
        totalScore += currentLvlScore;
        updateScoreBar();
        saveProgress();
        saveCrucigramaLevelToSupabase(completedLevels.size);
      }
      setTimeout(showWin, 400);
      return;
    }

    if (newlySolved > 0) {
      Swal.fire({
        title: `✓ +${newlySolved} PALABRA${newlySolved > 1 ? 'S' : ''}`,
        text: `¡Correcto! Faltan ${WORDS_LIST.length - solvedWords.size} palabras.`,
        icon: 'success', background: '#161b22', color: '#30d158',
        confirmButtonColor: '#30d158', confirmButtonText: 'CONTINUAR',
      });
    } else {
      Swal.fire({
        title: 'REVISA TUS LETRAS',
        text: 'Algunas respuestas no son correctas. Las incorrectas se marcaron en rojo.',
        icon: 'error', background: '#161b22', color: '#ff6b6b',
        confirmButtonColor: '#ff6b6b', confirmButtonText: 'INTENTAR',
      });
    }
  }

  function showWin() {
    const hasNext = currentLevelIdx < LEVELS.length - 1;
    Swal.fire({
      title: '🏆 CRUCIGRAMA TERMINADO EXITOSAMENTE',
      html: `<span style="font-family:'Press Start 2P',monospace;font-size:10px;color:#ffd60a">
               PUNTOS TOTALES: ${document.getElementById('score').textContent}
             </span>`,
      icon: 'success',
      background: '#161b22',
      color: '#30d158',
      showCancelButton: true,
      confirmButtonColor: '#ffd60a',
      cancelButtonColor: '#2a3448',
      confirmButtonText: hasNext ? 'SIGUIENTE NIVEL' : 'VOLVER A JUEGOS',
      cancelButtonText: hasNext ? 'VOLVER A JUEGOS' : 'CERRAR',
    }).then((result) => {
      if (result.isConfirmed) {
        if (hasNext) {
          nextLevel();
        } else {
          goBack();
        }
      } else {
        if (hasNext) {
          goBack();
        }
      }
    });
  }

  function updateScoreBar() {
    const currentLvlScore = solvedWords.size * 150 + Math.max(0, cluesLeft * 50);
    const displayScore = totalScore + (completedLevels.has(currentLevelIdx) ? 0 : currentLvlScore);
    document.getElementById('wordsCount').textContent = `${solvedWords.size} / ${WORDS_LIST.length}`;
    document.getElementById('score').textContent = displayScore;
  }

  // ── Pista ────────────────────────────────────
  function useClue() {
    if (completedLevels.has(currentLevelIdx)) {
      Swal.fire({
        title: 'NIVEL COMPLETADO',
        text: 'Este nivel ya ha sido completado.',
        icon: 'info',
        background: '#161b22',
        color: '#30d158',
        confirmButtonColor: '#30d158',
        confirmButtonText: 'OK'
      });
      return;
    }
    if (cluesLeft <= 0) {
      Swal.fire({
        title: 'SIN PISTAS',
        text: 'Ya usaste todas tus pistas.',
        icon: 'warning',
        background: '#161b22',
        color: '#ffd60a',
        confirmButtonColor: '#ffd60a',
        confirmButtonText: 'OK'
      });
      return;
    }
    if (!selectedWord) {
      Swal.fire({
        title: 'SELECCIONA',
        text: 'Primero selecciona una palabra en el crucigrama.',
        icon: 'info',
        background: '#161b22',
        color: '#30d158',
        confirmButtonColor: '#30d158',
        confirmButtonText: 'OK'
      });
      return;
    }
    if (solvedWords.has(selectedWord.id)) {
      Swal.fire({
        title: 'YA RESUELTA',
        text: 'Esa palabra ya la completaste.',
        icon: 'info',
        background: '#161b22',
        color: '#30d158',
        confirmButtonColor: '#30d158',
        confirmButtonText: 'OK'
      });
      return;
    }
    const target = wordCells[selectedWord.id].find(({ r, c }) => !userGrid[`${r},${c}`]);
    if (!target) return;
    const k = `${target.r},${target.c}`;
    userGrid[k] = cellMap[k];
    const el = document.getElementById(`letter-${k}`);
    if (el) el.textContent = cellMap[k];
    cluesLeft--;
    document.getElementById('cluesLeft').textContent = cluesLeft;
    document.getElementById('btnClue').textContent = `? PISTA (${cluesLeft})`;
    if (cluesLeft === 0) document.getElementById('btnClue').disabled = true;
    checkWordsRealTime();
  }

  // ── Reset ────────────────────────────────────
  function resetGame() {
    Swal.fire({
      title: 'REINICIAR',
      text: '¿Seguro que quieres borrar todo el progreso de este nivel?',
      icon: 'warning', background: '#161b22', color: '#ffd60a',
      showCancelButton: true,
      confirmButtonColor: '#ff6b6b', cancelButtonColor: '#2a3448',
      confirmButtonText: 'SÍ, REINICIAR', cancelButtonText: 'CANCELAR',
    }).then(result => {
      if (result.isConfirmed) {
        if (completedLevels.has(currentLevelIdx)) {
          completedLevels.delete(currentLevelIdx);
          if (completedLevelScores[currentLevelIdx] !== undefined) {
            totalScore -= completedLevelScores[currentLevelIdx];
            delete completedLevelScores[currentLevelIdx];
          }
          saveProgress();
        }
        initLevel();
      }
    });
  }

  function showHelpModal() {
    Swal.fire({
      title: '🎮 ¿CÓMO JUGAR?',
      html: `
        <div style="text-align: left; font-family: 'Press Start 2P', monospace; font-size: 11px; line-height: 1.8; color: #e2e8f0;">
          <p style="color: #ffd60a; text-align: center; margin-bottom: 20px; font-size: 12px; letter-spacing: 1px;">CRUCIGRAMA FUTBOLERO</p>
          <p style="margin-bottom: 12px;"><span style="color: #30d158;">1.</span> Selecciona una casilla o haz clic en una pista para empezar.</p>
          <p style="margin-bottom: 12px;"><span style="color: #30d158;">2.</span> Escribe la respuesta usando tu teclado.</p>
          <p style="margin-bottom: 12px;"><span style="color: #30d158;">3.</span> Usa las <span style="color: #00d2ff;">Flechas de Dirección</span> para moverte por la cuadrícula.</p>
          <p style="margin-bottom: 12px;"><span style="color: #30d158;">4.</span> Tienes <span style="color: #ffd60a;">3 pistas</span> por nivel. Úsalas con el botón de pista.</p>
          <p style="margin-bottom: 12px;"><span style="color: #30d158;">5.</span> En la parte superior en el apartado de <span style="color: #ffd60a;">PALABRAS</span> se observará las palabras correctas y si no lo es no cambiará el marcador.</p>
        </div>
      `,
      icon: 'info',
      background: '#161b22',
      confirmButtonColor: '#30d158',
      confirmButtonText: '¡A JUGAR!'
    });
  }

  function goBack() { window.history.back(); }

  // ── Exponer al HTML (onclick en botones) ──────
  window.checkAll = checkAll;
  window.useClue = useClue;
  window.resetGame = resetGame;
  window.goBack = goBack;
  window.prevLevel = prevLevel;
  window.nextLevel = nextLevel;
  window.showHelpModal = showHelpModal;

  // ── Init Primera Carga ────────────────────────
  initLevel();

  // Mostrar modal de bienvenida en la primera carga
  if (!localStorage.getItem('sporthub_crucigrama_welcome_shown')) {
    showHelpModal();
    localStorage.setItem('sporthub_crucigrama_welcome_shown', 'true');
  }

}); // fin DOMContentLoaded

// ========================================================
// CONEXIÓN LEADERBOARD SUPABASE - CRUCIGRAMA FUTBOLERO
// Guarda/actualiza el total de niveles completados en Supabase.
// levelCount = completedLevels.size (ya incluye el recién completado)
// ========================================================
async function saveCrucigramaLevelToSupabase(levelCount) {
    try {
        if (!window.supabase) return;
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session || !session.user) return;

        const userId = session.user.id;

        // Consultar si ya existe registro del usuario
        const { data, error } = await window.supabase
            .from('leaderboard_futbol_crucigrama')
            .select('levels_completed')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error('Error al consultar ranking de crucigrama:', error.message);
            return;
        }

        if (!data) {
            // Primera vez: insertar
            const { error: insertError } = await window.supabase
                .from('leaderboard_futbol_crucigrama')
                .insert({
                    user_id: userId,
                    levels_completed: levelCount
                });
            if (insertError) console.error('Error al insertar ranking crucigrama:', insertError.message);
        } else if (levelCount > data.levels_completed) {
            // Solo actualizar si el nuevo total es mayor (por si acaso)
            const { error: updateError } = await window.supabase
                .from('leaderboard_futbol_crucigrama')
                .update({
                    levels_completed: levelCount,
                    updated_at: new Date().toISOString()
                })
                .eq('user_id', userId);
            if (updateError) console.error('Error al actualizar ranking crucigrama:', updateError.message);
        }
    } catch (e) {
        console.error('Error al guardar nivel de crucigrama en Supabase:', e);
    }
}
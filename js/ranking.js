let currentMode = 'f1';         // 'f1' o 'futbol'
let currentFutbolSubmode = 'cruce'; // 'cruce' o 'jugadordia'
let currentTab = 'reaction';

document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});

// Cambiar de categoría principal (F1 / Fútbol)
function switchMode(mode) {
    if (mode === currentMode) return;

    currentMode = mode;

    // Cambiar estado activo de los botones de modo
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`mode-${mode}`).classList.add('active');

    if (mode === 'f1') {
        document.getElementById('tabs-f1').classList.remove('d-none');
        document.getElementById('tabs-futbol').classList.add('d-none');
        document.getElementById('tabs-ajedrez').classList.add('d-none');

        document.querySelectorAll('#tabs-f1 .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-reaction').classList.add('active');
        currentTab = 'reaction';

    } else if (mode === 'ajedrez') {
        document.getElementById('tabs-f1').classList.add('d-none');
        document.getElementById('tabs-futbol').classList.add('d-none');
        document.getElementById('tabs-ajedrez').classList.remove('d-none');

        document.querySelectorAll('#tabs-ajedrez .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-quiz-ajedrez').classList.add('active');
        currentTab = 'quiz-ajedrez';

    } else {
        // Fútbol
        document.getElementById('tabs-f1').classList.add('d-none');
        document.getElementById('tabs-ajedrez').classList.add('d-none');
        document.getElementById('tabs-futbol').classList.remove('d-none');

        currentFutbolSubmode = 'cruce';
        document.querySelectorAll('#tabs-futbol .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-cruce').classList.add('active');

        document.getElementById('tabs-cruce').classList.remove('d-none');

        document.querySelectorAll('#tabs-cruce .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-futbol-easy').classList.add('active');
        currentTab = 'futbol-easy';
    }

    loadLeaderboard();
}

// Cambiar entre Cruce Futbolero y Jugador del Día dentro de Fútbol
function switchFutbolSubmode(submode) {
    if (submode === currentFutbolSubmode) return;
    currentFutbolSubmode = submode;

    // Actualizar botones del sub-modo
    document.querySelectorAll('#tabs-futbol > .ranking-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${submode}`).classList.add('active');

    if (submode === 'cruce') {
        // Mostrar dificultades
        document.getElementById('tabs-cruce').classList.remove('d-none');
        // Resetear a Fácil
        document.querySelectorAll('#tabs-cruce .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('tab-futbol-easy').classList.add('active');
        currentTab = 'futbol-easy';
    } else {
        // Ocultar dificultades (tanto para Crucigrama como para Jugador del Día)
        document.getElementById('tabs-cruce').classList.add('d-none');
        currentTab = submode === 'crucigrama' ? 'futbol-crucigrama' : 'futbol-jugadordia';
    }

    loadLeaderboard();
}

// Cambiar de sub-pestaña (dificultades dentro de Cruce Futbolero o pestañas de F1 / Ajedrez)
function switchTab(tab) {
    if (tab === currentTab) return;

    if (currentMode === 'f1') {
        document.querySelectorAll('#tabs-f1 .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
    } else if (currentMode === 'ajedrez') {
        document.querySelectorAll('#tabs-ajedrez .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
    } else {
        // Dentro de Cruce Futbolero
        document.querySelectorAll('#tabs-cruce .tab-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
    }

    currentTab = tab;
    loadLeaderboard();
}


async function loadLeaderboard() {
    const loadingEl = document.getElementById('loading');
    const tableContainerEl = document.getElementById('rankingTableContainer');
    const rankingBodyEl = document.getElementById('rankingBody');
    const noDataEl = document.getElementById('noData');
    const scoreHeaderEl = document.getElementById('scoreHeader');
    const subtitleEl = document.getElementById('rankingSubtitle');

    // Resetear visibilidad
    loadingEl.classList.remove('d-none');
    tableContainerEl.classList.add('d-none');
    noDataEl.classList.add('d-none');
    loadingEl.innerHTML = 'CARGANDO RANKING...';
    loadingEl.style.color = '#00ff9f';

    // Configurar query dinámica
    let tableName = '';
    let selectFields = '';
    let orderByField = '';
    let orderAscending = true;
    let difficultyFilter = null; // Filtro adicional si la tabla es compartida (como en fútbol)

    if (currentTab === 'reaction') {
        tableName = 'leaderboard_reaction_time';
        selectFields = 'best_time, profiles (username, full_name)';
        orderByField = 'best_time';
        orderAscending = true;
        scoreHeaderEl.innerText = 'TIEMPO (s)';
        subtitleEl.innerText = 'TOP JUGADORES MÁS RÁPIDOS';
    } else if (currentTab === 'duels') {
        tableName = 'leaderboard_f1_duels';
        selectFields = 'best_streak, profiles (username, full_name)';
        orderByField = 'best_streak';
        orderAscending = false;
        scoreHeaderEl.innerText = 'RACHA (aciertos)';
        subtitleEl.innerText = 'TOP MAYOR RACHA DE ACIERTOS';
    } else if (currentTab === 'circuits') {
        tableName = 'leaderboard_f1_circuits';
        selectFields = 'completions, profiles (username, full_name)';
        orderByField = 'completions';
        orderAscending = false;
        scoreHeaderEl.innerText = 'COMPLETADOS';
        subtitleEl.innerText = 'TOP JUGADORES QUE COMPLETARON LA PRUEBA';
    } else if (currentTab === 'quiz-ajedrez') {
        tableName = 'leaderboard_ajedrez_quiz';
        selectFields = 'best_score, best_correct, total_questions, profiles (username, full_name)';
        orderByField = 'best_score';
        orderAscending = false; // Mayor puntaje primero
        scoreHeaderEl.innerText = 'PUNTAJE';
        subtitleEl.innerText = 'QUIZ DE AJEDREZ ♟ TOP MEJORES PUNTAJES';
    } else if (currentTab === 'movimientos') {
        tableName = 'leaderboard_ajedrez_movimientos';
        selectFields = 'best_score, best_rounds_won, total_rounds, profiles (username, full_name)';
        orderByField = 'best_score';
        orderAscending = false;
        scoreHeaderEl.innerText = 'PUNTAJE';
        subtitleEl.innerText = 'MOVIMIENTOS VÁLIDOS ♞ TOP MEJORES PUNTAJES';
    } else if (currentTab === 'mate') {
        tableName = 'leaderboard_ajedrez_mate';
        selectFields = 'best_score, best_puzzles_solved, total_puzzles, profiles (username, full_name)';
        orderByField = 'best_score';
        orderAscending = false;
        scoreHeaderEl.innerText = 'PUNTAJE';
        subtitleEl.innerText = 'MATE EN 1 ♛ TOP MEJORES PUNTAJES';
    } else if (currentTab === 'futbol-crucigrama') {
        tableName = 'leaderboard_futbol_crucigrama';
        selectFields = 'levels_completed, profiles (username, full_name)';
        orderByField = 'levels_completed';
        orderAscending = false; // Más niveles completados primero
        scoreHeaderEl.innerText = 'NIVELES';
        subtitleEl.innerText = 'CRUCIGRAMA FUTBOLERO - TOP NIVELES COMPLETADOS';
    } else if (currentTab.startsWith('futbol-')) {
        if (currentTab === 'futbol-jugadordia') {
            tableName = 'leaderboard_futbol_jugadordia';
            selectFields = 'daily_wins, profiles (username, full_name)';
            orderByField = 'daily_wins';
            orderAscending = false;
            scoreHeaderEl.innerText = 'DÍAS ADIVINADOS';
            subtitleEl.innerText = 'JUGADOR DEL DÍA - RACHAS DE VICTORIAS';
        } else {
            tableName = 'leaderboard_futbol_3raya';
            selectFields = 'best_time, difficulty, profiles (username, full_name)';
            orderByField = 'best_time';
            orderAscending = true;
            scoreHeaderEl.innerText = 'TIEMPO (s)';

            if (currentTab === 'futbol-easy') {
                difficultyFilter = 'easy';
                subtitleEl.innerText = 'CRUCE FUTBOLERO - DIFICULTAD FÁCIL';
            } else if (currentTab === 'futbol-medium') {
                difficultyFilter = 'medium';
                subtitleEl.innerText = 'CRUCE FUTBOLERO - DIFICULTAD MEDIA';
            } else if (currentTab === 'futbol-hard') {
                difficultyFilter = 'hard';
                subtitleEl.innerText = 'CRUCE FUTBOLERO - DIFICULTAD DIFÍCIL';
            }
        }
    }

    try {
        if (!window.supabase) {
            throw new Error('El cliente de Supabase no está cargado');
        }

        // Construir la consulta
        let query = window.supabase
            .from(tableName)
            .select(selectFields);

        // Si hay filtro de dificultad (modo fútbol)
        if (difficultyFilter) {
            query = query.eq('difficulty', difficultyFilter);
        }

        const { data, error } = await query
            .order(orderByField, { ascending: orderAscending })
            .limit(50);

        if (error) {
            throw error;
        }

        loadingEl.classList.add('d-none');

        if (!data || data.length === 0) {
            noDataEl.classList.remove('d-none');
            return;
        }

        // Limpiar tabla
        rankingBodyEl.innerHTML = '';

        // Rellenar tabla
        data.forEach((item, index) => {
            const pos = index + 1;
            
            // Extraer puntuación formateada según la pestaña
            let displayScore = '';
            if (currentTab === 'reaction') {
                displayScore = `${(item.best_time / 1000).toFixed(3)} s`;
            } else if (currentTab === 'duels') {
                displayScore = `${item.best_streak} aciertos`;
            } else if (currentTab === 'circuits') {
                displayScore = `${item.completions} victorias`;
            } else if (currentTab === 'quiz-ajedrez') {
                displayScore = `${item.best_score} pts (${item.best_correct}/${item.total_questions})`;
            } else if (currentTab === 'movimientos') {
                displayScore = `${item.best_score} pts (${item.best_rounds_won}/${item.total_rounds} rondas)`;
            } else if (currentTab === 'mate') {
                displayScore = `${item.best_score} pts (${item.best_puzzles_solved}/${item.total_puzzles} puzzles)`;
            } else if (currentTab === 'futbol-crucigrama') {
                displayScore = `${item.levels_completed} ${item.levels_completed === 1 ? 'nivel' : 'niveles'}`;
            } else if (currentTab.startsWith('futbol-')) {
                if (currentTab === 'futbol-jugadordia') {
                    displayScore = `${item.daily_wins} ${item.daily_wins === 1 ? 'día' : 'días'}`;
                } else {
                    displayScore = `${item.best_time} s`;
                }
            }
            
            // Extraer info de perfil
            const profile = Array.isArray(item.profiles) ? item.profiles[0] : item.profiles;
            const displayName = profile ? (profile.username || profile.full_name) : 'Jugador Anónimo';

            // Medallas / clase de fila podio
            let rowClass = '';
            let medal = pos;
            if (pos === 1) {
                rowClass = 'top-1';
                medal = '🥇';
            } else if (pos === 2) {
                rowClass = 'top-2';
                medal = '🥈';
            } else if (pos === 3) {
                rowClass = 'top-3';
                medal = '🥉';
            }

            const tr = document.createElement('tr');
            if (rowClass) tr.className = rowClass;

            tr.innerHTML = `
                <td><span class="rank-badge">${medal}</span></td>
                <td style="text-align: left; padding-left: 20px;">${displayName}</td>
                <td><strong>${displayScore}</strong></td>
            `;

            rankingBodyEl.appendChild(tr);
        });

        tableContainerEl.classList.remove('d-none');

    } catch (err) {
        console.error('Error al cargar la tabla de clasificación:', err);
        loadingEl.innerHTML = 'ERROR AL CARGAR EL RANKING';
        loadingEl.style.color = '#ff3c38';
        
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al conectar con la base de datos: ' + err.message,
            icon: 'error',
            background: '#121420',
            color: '#ff3c38'
        });
    }
}

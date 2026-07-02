let currentTab = 'reaction';

document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
});

function switchTab(tab) {
    if (tab === currentTab) return;
    
    // Cambiar estado activo en la UI
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    
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

    // Configurar cabeceras y subtítulos según la pestaña
    let tableName = '';
    let selectFields = '';
    let orderByField = '';
    let orderAscending = true;

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
        orderAscending = false; // Racha más alta primero
        scoreHeaderEl.innerText = 'RACHA (aciertos)';
        subtitleEl.innerText = 'TOP MAYOR RACHA DE ACIERTOS';
    } else if (currentTab === 'circuits') {
        tableName = 'leaderboard_f1_circuits';
        selectFields = 'completions, profiles (username, full_name)';
        orderByField = 'completions';
        orderAscending = false; // Más completados primero
        scoreHeaderEl.innerText = 'COMPLETADOS';
        subtitleEl.innerText = 'TOP JUGADORES QUE COMPLETARON LA PRUEBA';
    }

    try {
        if (!window.supabase) {
            throw new Error('El cliente de Supabase no está cargado');
        }

        const { data, error } = await window.supabase
            .from(tableName)
            .select(selectFields)
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

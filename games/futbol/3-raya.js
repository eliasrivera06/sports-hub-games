// ========================================================
// 3 EN RAYA FUTBOLERO - LOGICA PRINCIPAL
// ========================================================

// Banderas, escudos y siluetas por defecto en formato SVG inline
const DEFAULT_FLAG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDgwIDYwIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iNjAiIGZpbGw9IiMxRjIxMkUiLz48dGV4dCB4PSI0MCIgeT0iMzgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjM0Y0MjU3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4mIzEyNzk4NzsmIzY1MDM5OzwvdGV4dD48L3N2Zz4=";
const DEFAULT_CLUB = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMiBMMzUgMTAgTDM1IDI1IFEyMCAzOCA1IDI1IEw1IDEwIFoiIGZpbGw9IiMxRjIxMkUiIHN0cm9rZT0iIzNGNDI1NyIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjAiIHk9IjI2IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzNGNDI1NyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+JiMxMjg3Mzc7JiM2NTAzOTs8L3RleHQ+PC9zdmc+";
const DEFAULT_PLAYER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiMxMjE0MjAiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjQ1IiByPSIyMCIgZmlsbD0iIzNGNDI1NyIvPjxwYXRoIGQ9Ik0yMCAxMDAgUXYwIDcwIDEwMCAxMDAgWiIgZmlsbD0iIzNGNDI1NyIvPjwvc3ZnPg==";

// Mapeo de países a códigos ISO para banderas de FlagCDN
const FLAG_CODES = {
    "Argentina": "ar",
    "Brasil": "br",
    "Francia": "fr",
    "España": "es",
    "Portugal": "pt",
    "Alemania": "de",
    "Inglaterra": "gb",
    "Italia": "it",
    "Países Bajos": "nl",
    "Uruguay": "uy",
    "Colombia": "co",
    "Bélgica": "be",
    "Croacia": "hr",
    "Marruecos": "ma",
    "Senegal": "sn",
    "México": "mx",
    "Egipto": "eg",
    "Polonia": "pl",
    "Noruega": "no",
    "Costa Rica": "cr",
    "Eslovenia": "si",
    "Camerún": "cm",
    "Suiza": "ch",
    "Dinamarca": "dk",
    "Corea del Sur": "kr",
    "Nigeria": "ng",
    "Canadá": "ca",
    "Estados Unidos": "us",
    "Ecuador": "ec",
    "Chile": "cl",
    "Gabón": "ga",
    "Armenia": "am",
    "Suecia": "se"
};

// ESTADO GLOBAL
let currentDifficulty = "easy";
let activeGrid = null; // { filas: [], columnas: [] }
let boardState = Array(9).fill(null); // Cada elemento: { player: {nombre, nacionalidad}, photoUrl, clubLogoUrl }
let usedPlayerIds = []; // IDs de jugadores ya colocados
let gameWon = false;

// Variables para el flujo de selección múltiple interactiva en el tablero
let highlightedCells = []; // Índices de celdas resaltadas
let playerPendingPlacement = null; // Jugador en espera de colocación manual

// CONFIGURACIÓN TEMPORIZADOR
let timerDuration = "none"; // "none", "120"
let timerInterval = null;
let timeLeft = 0;

// Caché para logos de clubes obtenidos de la API (para evitar peticiones redundantes)
let clubLogoCache = {};

// ELEMENTOS DOM
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gridBoard = document.getElementById("grid-board");
const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions-box");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const timerButtons = document.querySelectorAll(".timer-btn");

// INICIALIZACIÓN
window.addEventListener("DOMContentLoaded", () => {
    loadStats();
    loadActiveGame();
    setupEventListeners();
});

// EVENT LISTENERS
function setupEventListeners() {
    // Selección de dificultad en pantalla de inicio
    difficultyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            difficultyButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDifficulty = btn.getAttribute("data-diff");
        });
    });

    // Selección de temporizador
    timerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            timerButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            timerDuration = btn.getAttribute("data-timer");
        });
    });

    // Input de búsqueda
    searchInput.addEventListener("input", handleSearchInput);

    // Evento ENTER para el input de búsqueda
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const firstItem = suggestionsBox.querySelector(".suggestion-item");
            if (firstItem) {
                firstItem.click();
                e.preventDefault();
            }
        }
    });
    
    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-section")) {
            closeSuggestions();
        }
    });
}

// NAVEGACIÓN DE PANTALLAS
function showHomeScreen() {
    homeScreen.classList.remove("d-none");
    gameScreen.classList.add("d-none");
    closeSuggestions();
    clearInterval(timerInterval); // Detener el temporizador si salimos al menú
    const headerTimer = document.getElementById("header-timer");
    if (headerTimer) {
        headerTimer.classList.add("d-none");
        headerTimer.classList.remove("danger-timer");
    }
}

function showGameScreen() {
    homeScreen.classList.add("d-none");
    gameScreen.classList.remove("d-none");
}

// INICIAR PARTIDA
function startPlay() {
    gameWon = false;
    highlightedCells = [];
    playerPendingPlacement = null;
    clearInterval(timerInterval); // Cancelar cualquier temporizador previo
    
    const todayStr = getTodayString();
    
    // Generamos la cuadrícula diaria determinista para la dificultad seleccionada
    activeGrid = generateDailyGrid(currentDifficulty, todayStr);
    
    // Preservar la opción de temporizador seleccionada en la pantalla de inicio
    const chosenTimer = timerDuration;
    
    // Comprobar si ya existe una partida diaria guardada para hoy en esta dificultad
    const savedGame = JSON.parse(localStorage.getItem("3raya_active_game_" + currentDifficulty));
    if (savedGame && savedGame.date === todayStr) {
        boardState = savedGame.boardState;
        usedPlayerIds = savedGame.usedPlayerIds;
        gameWon = savedGame.gameWon;
        timerDuration = chosenTimer; // Usar el temporizador seleccionado por el usuario en esta sesión
    } else {
        resetBoardState();
        timerDuration = chosenTimer;
    }
    
    // Sincronizar botones de temporizador en Home
    timerButtons.forEach(btn => {
        if (btn.getAttribute("data-timer") === timerDuration) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderBoard();
    showGameScreen();
    saveActiveGame();
    
    // Inicializar temporizador si corresponde
    if (!gameWon && timerDuration !== "none") {
        startGameplayTimer();
    } else {
        document.getElementById("timer-display-container").classList.add("d-none");
        const headerTimer = document.getElementById("header-timer");
        if (headerTimer) {
            headerTimer.classList.add("d-none");
            headerTimer.classList.remove("danger-timer");
        }
    }
    
    if (gameWon) {
        triggerVictoryEffects(false); // No suma estadística de nuevo si ya estaba ganada
    }
}

// RESETEAR ESTADO
function resetBoardState() {
    boardState = Array(9).fill(null);
    usedPlayerIds = [];
    gameWon = false;
    highlightedCells = [];
    playerPendingPlacement = null;
    searchInput.value = "";
    closeSuggestions();
}

// INICIAR Y LOGICA DEL TEMPORIZADOR DE JUEGO
function startGameplayTimer() {
    clearInterval(timerInterval);
    const container = document.getElementById("timer-display-container");
    const counterSpan = document.getElementById("timer-count");
    const bar = document.getElementById("timer-bar-inner");
    const headerTimer = document.getElementById("header-timer");
    
    // Función auxiliar para dar formato de minutos y segundos (M:SS)
    const formatTimeHelper = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}:${String(secs).padStart(2, '0')}` : `${secs}s`;
    };
    
    container.classList.remove("d-none");
    if (headerTimer) {
        headerTimer.classList.remove("d-none");
        headerTimer.classList.remove("danger-timer");
        headerTimer.innerText = formatTimeHelper(parseInt(timerDuration));
    }
    
    const maxTime = parseInt(timerDuration);
    timeLeft = maxTime;
    
    if (counterSpan) counterSpan.innerText = formatTimeHelper(timeLeft);
    bar.style.width = "100%";
    bar.className = "timer-bar-inner";
    
    timerInterval = setInterval(() => {
        if (gameWon) {
            clearInterval(timerInterval);
            container.classList.add("d-none");
            if (headerTimer) {
                headerTimer.classList.add("d-none");
                headerTimer.classList.remove("danger-timer");
            }
            return;
        }
        
        timeLeft--;
        if (counterSpan) counterSpan.innerText = formatTimeHelper(timeLeft);
        if (headerTimer) headerTimer.innerText = formatTimeHelper(timeLeft);
        
        const pct = (timeLeft / maxTime) * 100;
        bar.style.width = pct + "%";
        
        // Colores de alerta progresivos
        if (pct <= 25) {
            bar.className = "timer-bar-inner danger";
        } else if (pct <= 50) {
            bar.className = "timer-bar-inner warning";
        } else {
            bar.className = "timer-bar-inner";
        }
        
        // Vibrar si queda 10 segundos o menos
        if (timeLeft <= 10) {
            if (headerTimer) headerTimer.classList.add("danger-timer");
        } else {
            if (headerTimer) headerTimer.classList.remove("danger-timer");
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (headerTimer) {
                headerTimer.classList.remove("danger-timer");
                headerTimer.classList.add("d-none");
            }
            handleGameLoss();
        }
    }, 1000);
}

// MANEJO DE DERROTA POR TIEMPO EXSPIRADO
function handleGameLoss() {
    // Registrar derrota en estadísticas
    updateStatistics(false);
    
    // Guardar estado de juego como no ganado (pero finalizado/limpiado)
    resetBoardState();
    saveActiveGame();
    
    // Alerta SweetAlert de pérdida con diseño retro
    Swal.fire({
        title: '💥 ¡TIEMPO AGOTADO!',
        html: `No lograste completar las 9 casillas del tablero a tiempo.<br><br>¡Prueba otra vez en una nueva partida!`,
        icon: 'error',
        confirmButtonText: 'VOLVER AL MENÚ',
        customClass: {
            popup: 'swal-retro-popup',
            title: 'swal-retro-title',
            htmlContainer: 'swal-retro-html',
            confirmButton: 'swal-retro-confirm'
        }
    }).then(() => {
        showHomeScreen();
    });
}

// OBTENER FECHA EN STRING (YYYY-MM-DD)
function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// PRNG Determinista basado en semilla para sincronizar tableros diarios entre usuarios
class SeededRandom {
    constructor(seedStr) {
        let h = 1779033703 ^ seedStr.length;
        for (let i = 0; i < seedStr.length; i++) {
            h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
            h = h << 13 | h >>> 19;
        }
        this.seed = (h >>> 0);
    }
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(this.next() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}

// GENERAR CUADRÍCULA DIARIA BASADA EN LAS GRIDS PREDEFINIDAS DE GRIDS.JS
function generateDailyGrid(difficulty, dateStr) {
    const prng = new SeededRandom(dateStr);
    const gridsList = GRIDS[difficulty] || GRIDS.easy;
    const index = Math.floor(prng.next() * gridsList.length);
    return gridsList[index];
}

// DIBUJAR TABLERO
function renderBoard() {
    gridBoard.innerHTML = "";
    
    // 1. Celda Esquina Superior Izquierda (Decoración)
    const cornerCell = document.createElement("div");
    cornerCell.className = "grid-cell grid-corner";
    cornerCell.innerHTML = `<span class="grid-corner-icon">⚽</span>`;
    gridBoard.appendChild(cornerCell);
    
    // 2. Cabeceras de Columnas (Selecciones)
    for (let c = 0; c < 3; c++) {
        const country = activeGrid.columnas[c];
        const code = FLAG_CODES[country] || "unknown";
        
        const colHeader = document.createElement("div");
        colHeader.className = "grid-cell grid-header-col animate__animated animate__fadeInDown";
        colHeader.innerHTML = `
            <img class="flag" src="https://flagcdn.com/w80/${code}.png" onerror="this.src='${DEFAULT_FLAG}'; this.onerror=null;" alt="${country}">
            <div>${country}</div>
        `;
        gridBoard.appendChild(colHeader);
    }
    
    // 3. Filas de Juego
    for (let r = 0; r < 3; r++) {
        const club = activeGrid.filas[r];
        
        // Cabecera de Fila (Club)
        const rowHeader = document.createElement("div");
        rowHeader.className = "grid-cell grid-header-row animate__animated animate__fadeInLeft";
        
        // Buscar escudo en caché o URL por defecto
        const cachedLogo = clubLogoCache[club] || "";
        rowHeader.innerHTML = `
            <img class="logo-club club-logo-${r}" src="${cachedLogo || DEFAULT_CLUB}" onerror="this.src='${DEFAULT_CLUB}'; this.onerror=null;" alt="${club}">
            <div>${club}</div>
        `;
        gridBoard.appendChild(rowHeader);
        
        // Si no está en caché, lo solicitamos en segundo plano
        if (!cachedLogo) {
            fetchClubLogo(club, r);
        }
        
        // 3 Celdas de Juego para esta fila
        for (let c = 0; c < 3; c++) {
            const index = r * 3 + c;
            const cellState = boardState[index];
            
            const playCell = document.createElement("div");
            playCell.className = "grid-cell grid-play-cell";
            playCell.setAttribute("data-index", index);
            
            if (cellState) {
                // Celda ocupada por un jugador correcto
                playCell.classList.add("correct", "animate__animated", "animate__bounceIn");
                const code = FLAG_CODES[cellState.player.nacionalidad] || "unknown";
                
                playCell.innerHTML = `
                    <div class="player-card">
                        <div class="player-badges">
                            <img class="badge-mini" src="https://flagcdn.com/w80/${code}.png" onerror="this.src='${DEFAULT_FLAG}'; this.onerror=null;" alt="Bandera">
                            <img class="badge-mini badge-mini-club-${index}" src="${cellState.clubLogoUrl || DEFAULT_CLUB}" onerror="this.src='${DEFAULT_CLUB}'; this.onerror=null;" alt="Escudo">
                        </div>
                        <img class="player-img" src="${cellState.photoUrl || DEFAULT_PLAYER}" onerror="this.src='${DEFAULT_PLAYER}'; this.onerror=null;" alt="${cellState.player.nombre}">
                        <div class="player-name">${cellState.player.nombre.split(" ").pop()}</div>
                    </div>
                `;
            } else {
                // Celda vacía: Comprobar si está resaltada por selección múltiple
                if (highlightedCells.includes(index)) {
                    playCell.classList.add("highlighted");
                    playCell.innerHTML = "🎯";
                    playCell.addEventListener("click", () => {
                        placePlayerInCell(playerPendingPlacement, index);
                        highlightedCells = [];
                        playerPendingPlacement = null;
                        renderBoard();
                    });
                } else {
                    playCell.innerHTML = `?`;
                    
                    if (highlightedCells.length > 0) {
                        // Si hay otras casillas resaltadas y esta no, se difumina
                        playCell.classList.add("dimmed");
                    } else {
                        if (!gameWon) {
                            playCell.addEventListener("click", () => handleCellClick(index));
                        }
                    }
                }
            }
            gridBoard.appendChild(playCell);
        }
    }
}

// SOLICITAR ESCUDO DE CLUB A THESPORTSDB
async function fetchClubLogo(clubName, rowIndex) {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(clubName)}`);
        const data = await response.json();
        if (data && data.teams && data.teams.length > 0) {
            const logoUrl = data.teams[0].strBadge;
            clubLogoCache[clubName] = logoUrl;
            
            // Actualizar todas las imágenes del club que estén renderizadas
            const logos = document.querySelectorAll(`.club-logo-${rowIndex}`);
            logos.forEach(img => {
                img.src = logoUrl;
            });
        }
    } catch (e) {
        console.warn("Fallo al obtener escudo de club: " + clubName, e);
    }
}

// BÚSQUEDA Y SUGERENCIAS
function handleSearchInput() {
    // Cancelar cualquier selección pendiente si el usuario empieza a escribir otra cosa
    if (highlightedCells.length > 0) {
        highlightedCells = [];
        playerPendingPlacement = null;
        renderBoard();
    }

    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
        closeSuggestions();
        return;
    }
    
    // Filtrar localmente en jugadores.js sin acentos ni tildes
    const normalizedQuery = removeAccents(query);
    const matches = JUGADORES.filter(p => {
        const normalizedName = removeAccents(p.nombre.toLowerCase());
        return normalizedName.includes(normalizedQuery);
    }).slice(0, 5); // Máximo 5 sugerencias
    
    renderSuggestions(matches);
}

function renderSuggestions(matches) {
    suggestionsBox.innerHTML = "";
    if (matches.length === 0) {
        suggestionsBox.classList.add("d-none");
        return;
    }
    
    matches.forEach(p => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.innerHTML = `
            <span>${p.nombre}</span>
            <span class="nat-tag">${p.nacionalidad}</span>
        `;
        div.addEventListener("click", () => selectPlayer(p));
        suggestionsBox.appendChild(div);
    });
    
    suggestionsBox.classList.remove("d-none");
}

function closeSuggestions() {
    suggestionsBox.innerHTML = "";
    suggestionsBox.classList.add("d-none");
}

// ELIMINAR ACENTOS Y CARACTERES ESPECIALES PARA COMPARACIÓN
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// SELECCIONAR JUGADOR DESDE SUGERENCIAS
function selectPlayer(player) {
    searchInput.value = "";
    closeSuggestions();
    
    // 1. Validar que no haya sido utilizado en esta partida
    if (usedPlayerIds.includes(player.id)) {
        Swal.fire({
            title: 'JUGADOR REPETIDO',
            text: `Ya has utilizado a ${player.nombre} en esta partida.`,
            icon: 'error',
            customClass: {
                popup: 'swal-retro-popup',
                title: 'swal-retro-title',
                htmlContainer: 'swal-retro-html',
                confirmButton: 'swal-retro-confirm'
            }
        });
        return;
    }
    
    // 2. Encontrar qué casillas libres coinciden con el jugador
    let matchingEmptyCells = [];
    
    for (let r = 0; r < 3; r++) {
        const club = activeGrid.filas[r];
        for (let c = 0; c < 3; c++) {
            const index = r * 3 + c;
            // Solo evaluar si la casilla está vacía
            if (boardState[index] === null) {
                const pais = activeGrid.columnas[c];
                if (validarJugador(player, club, pais)) {
                    matchingEmptyCells.push({
                        index: index,
                        club: club,
                        pais: pais
                    });
                }
            }
        }
    }
    
    // 3. Colocación según coincidencias
    if (matchingEmptyCells.length === 0) {
        Swal.fire({
            title: 'CASILLA NO ENCONTRADA',
            text: `${player.nombre} (${player.nacionalidad}) no coincide con ninguna casilla libre del tablero actual.`,
            icon: 'error',
            customClass: {
                popup: 'swal-retro-popup',
                title: 'swal-retro-title',
                htmlContainer: 'swal-retro-html',
                confirmButton: 'swal-retro-confirm'
            }
        });
    } else if (matchingEmptyCells.length === 1) {
        // Colocación automática
        placePlayerInCell(player, matchingEmptyCells[0].index);
    } else {
        // Colocación manual destacando las casillas libres coincidentes
        playerPendingPlacement = player;
        highlightedCells = matchingEmptyCells.map(c => c.index);
        renderBoard();
        
        // Notificación flotante indicando la acción
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            background: '#1a1c28',
            color: '#fff3e0'
        });
        Toast.fire({
            icon: 'info',
            title: 'Ubicación múltiple',
            text: `Haz clic sobre una de las casillas parpadeantes en amarillo para colocar a ${player.nombre}.`
        });
    }
}

// VALIDACIÓN REQUISITOS JUEGO
function validarJugador(jugador, club, pais) {
    return (
        jugador.nacionalidad === pais &&
        jugador.clubes.includes(club)
    );
}

// ACCIONAR CLIC DIRECTO EN CASILLA VACÍA
function handleCellClick(index) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const club = activeGrid.filas[row];
    const pais = activeGrid.columnas[col];
    
    Swal.fire({
        title: 'CASILLA REQUISITOS',
        html: `Esta casilla requiere un jugador que haya jugado en:<br><b style="color: var(--color-highlight);">${club}</b><br>y que sea de:<br><b style="color: var(--color-highlight);">${pais}</b>.<br><br>Escribe su nombre abajo en el buscador de la pantalla principal para responder.`,
        icon: 'info',
        customClass: {
            popup: 'swal-retro-popup',
            title: 'swal-retro-title',
            htmlContainer: 'swal-retro-html',
            confirmButton: 'swal-retro-confirm'
        }
    });
}

// REALIZAR LA COLOCACIÓN DEL JUGADOR
function placePlayerInCell(player, index) {
    // Agregar a la lista de usados
    usedPlayerIds.push(player.id);
    
    // Crear el estado en la celda
    boardState[index] = {
        player: {
            id: player.id,
            nombre: player.nombre,
            nacionalidad: player.nacionalidad
        },
        photoUrl: DEFAULT_PLAYER, // Valor inicial
        clubLogoUrl: DEFAULT_CLUB // Valor inicial
    };
    
    // Renderizar tablero inmediatamente (para animar la respuesta correcta con Animate.css)
    renderBoard();
    
    // Lanzar fetch de imágenes de forma no bloqueante
    fetchPlayerVisualAssets(player, index);
    
    // Comprobar estado de victoria
    checkWinCondition();
    
    // Persistir partida
    saveActiveGame();
}

// FETCH IMAGEN DEL JUGADOR Y ESCUDO A THESPORTSDB (ASÍNCRONO NO BLOQUEANTE)
async function fetchPlayerVisualAssets(player, index) {
    const row = Math.floor(index / 3);
    const club = activeGrid.filas[row];
    
    try {
        // 1. Obtener Foto Jugador
        const playerResp = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(player.nombre)}`);
        const playerData = await playerResp.json();
        
        let photoUrl = "";
        if (playerData && playerData.player && playerData.player.length > 0) {
            // Buscamos coincidencia exacta o la mejor aproximación
            const foundPlayer = playerData.player.find(p => {
                const searchNat = p.strNationality ? removeAccents(p.strNationality.toLowerCase()) : "";
                const dbNat = removeAccents(player.nacionalidad.toLowerCase());
                return searchNat === dbNat;
            }) || playerData.player[0];
            
            photoUrl = foundPlayer.strThumb;
        }
        
        // 2. Obtener Escudo del Club (si no está cacheado)
        let clubLogoUrl = clubLogoCache[club] || "";
        if (!clubLogoUrl) {
            const clubResp = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(club)}`);
            const clubData = await clubResp.json();
            if (clubData && clubData.teams && clubData.teams.length > 0) {
                clubLogoUrl = clubData.teams[0].strBadge;
                clubLogoCache[club] = clubLogoUrl;
            }
        }
        
        // 3. Actualizar estado y DOM si el jugador sigue en la misma posición
        if (boardState[index] && boardState[index].player.id === player.id) {
            boardState[index].photoUrl = photoUrl || DEFAULT_PLAYER;
            boardState[index].clubLogoUrl = clubLogoUrl || DEFAULT_CLUB;
            
            // Actualizar la interfaz puntualmente
            const playCell = document.querySelector(`.grid-play-cell[data-index="${index}"]`);
            if (playCell) {
                if (photoUrl) {
                    const img = playCell.querySelector(".player-img");
                    if (img) img.src = photoUrl;
                }
                if (clubLogoUrl) {
                    const clubBadge = playCell.querySelector(`.badge-mini-club-${index}`);
                    if (clubBadge) clubBadge.src = clubLogoUrl;
                }
            }
            
            saveActiveGame();
        }
    } catch (e) {
        console.warn("Error buscando assets para jugador " + player.nombre, e);
    }
}

// COMPROBAR CONDICIÓN DE VICTORIA
function checkWinCondition() {
    // Si las 9 casillas tienen un objeto jugador, ¡se ha ganado!
    const filledCount = boardState.filter(cell => cell !== null).length;
    
    if (filledCount === 9) {
        gameWon = true;
        triggerVictoryEffects(true);
    }
}

// EFECTOS DE VICTORIA
function triggerVictoryEffects(updateStatsFlag) {
    // Detener cualquier animación previa de confetti
    stopConfetti();
    
    // Iniciar lluvia de confetti en el canvas
    startConfetti();
    
    // Detener y ocultar el temporizador inmediatamente
    clearInterval(timerInterval);
    const container = document.getElementById("timer-display-container");
    if (container) container.classList.add("d-none");
    const headerTimer = document.getElementById("header-timer");
    if (headerTimer) {
        headerTimer.classList.add("d-none");
        headerTimer.classList.remove("danger-timer");
    }
    
    if (updateStatsFlag) {
        // Registrar estadísticas
        updateStatistics(true);

        // Guardar tiempo de Cruce Futbolero en Supabase (si se jugó con temporizador)
        if (timerDuration !== "none") {
            const maxTime = parseInt(timerDuration);
            const elapsedTime = maxTime - timeLeft;
            save3RayaTimeToSupabase(elapsedTime);
        }
    }
    
    // Guardar estado
    saveActiveGame();
    
    // Renderizar para deshabilitar clicks
    renderBoard();
    
    // Alerta de SweetAlert2 con diseño retro
    setTimeout(() => {
        Swal.fire({
            title: '🏆 ¡VICTORIA TOTAL!',
            html: `¡Felicidades! Has completado las 9 casillas del 3 en raya del día exitosamente.<br><br>¡Tus conocimientos de fútbol son legendarios!`,
            icon: 'success',
            confirmButtonText: 'MENÚ PRINCIPAL',
            customClass: {
                popup: 'swal-retro-popup',
                title: 'swal-retro-title',
                htmlContainer: 'swal-retro-html',
                confirmButton: 'swal-retro-confirm'
            }
        }).then(() => {
            stopConfetti();
            showHomeScreen();
        });
    }, 1200);
}

// SISTEMA DE CONFETTI POR CANVAS API
let canvas = document.getElementById("victory-canvas");
let ctx = canvas.getContext("2d");
let animationFrameId = null;
let particles = [];

function startConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particles = [];
    const colors = ["#00FF9F", "#FF3C38", "#FFD166", "#FFF3E0", "#3A86FF"];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, idx) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
            
            // Loop de regreso si sale de la pantalla
            if (p.y > canvas.height) {
                particles[idx] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncremental: p.tiltAngleIncremental,
                    tiltAngle: p.tiltAngle
                };
            }
        });
        
        animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
    
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function stopConfetti() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.removeEventListener("resize", resizeCanvas);
}

// PERSISTENCIA: PARTIDA ACTIVA
function saveActiveGame() {
    const todayStr = getTodayString();
    const activeGameData = {
        date: todayStr,
        difficulty: currentDifficulty,
        boardState: boardState,
        usedPlayerIds: usedPlayerIds,
        gameWon: gameWon,
        timerOption: timerDuration
    };
    localStorage.setItem("3raya_active_game_" + currentDifficulty, JSON.stringify(activeGameData));
    localStorage.setItem("3raya_last_difficulty", currentDifficulty);
}

function loadActiveGame() {
    const todayStr = getTodayString();
    const difficulties = ["easy", "medium", "hard"];
    
    // Limpieza de partidas activas antiguas
    difficulties.forEach(diff => {
        const savedGame = JSON.parse(localStorage.getItem("3raya_active_game_" + diff));
        if (savedGame && savedGame.date !== todayStr) {
            localStorage.removeItem("3raya_active_game_" + diff);
        }
    });

    const lastDiff = localStorage.getItem("3raya_last_difficulty");
    if (lastDiff && difficulties.includes(lastDiff)) {
        currentDifficulty = lastDiff;
    }
    
    // Actualizar el botón de dificultad activo en Home
    difficultyButtons.forEach(btn => {
        if (btn.getAttribute("data-diff") === currentDifficulty) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Restaurar partida si es del mismo día
    const savedGame = JSON.parse(localStorage.getItem("3raya_active_game_" + currentDifficulty));
    if (savedGame && savedGame.date === todayStr) {
        boardState = savedGame.boardState;
        usedPlayerIds = savedGame.usedPlayerIds;
        gameWon = savedGame.gameWon;
        timerDuration = savedGame.timerOption || "none";
        
        activeGrid = generateDailyGrid(currentDifficulty, todayStr);
        
        // Sincronizar botones de temporizador en Home
        timerButtons.forEach(btn => {
            if (btn.getAttribute("data-timer") === timerDuration) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        // Si estaba en el juego y no completó (o ya completó), mostramos el tablero
        if (usedPlayerIds.length > 0 || gameWon) {
            renderBoard();
            showGameScreen();
            
            if (!gameWon && timerDuration !== "none") {
                startGameplayTimer();
            } else {
                const headerTimer = document.getElementById("header-timer");
                if (headerTimer) {
                    headerTimer.classList.add("d-none");
                    headerTimer.classList.remove("danger-timer");
                }
            }
            
            if (gameWon) {
                triggerVictoryEffects(false);
            }
        }
    } else {
        resetBoardState();
    }
}

// ESTADÍSTICAS LOCALSTORAGE
let stats = {
    partidasJugadas: 0,
    partidasGanadas: 0,
    partidasPerdidas: 0,
    rachaActual: 0,
    mejorRacha: 0,
    lastPlayDate: "",
    historial: []
};

function loadStats() {
    const savedStats = localStorage.getItem("3raya_stats");
    if (savedStats) {
        try {
            stats = JSON.parse(savedStats);
            if (stats.partidasPerdidas === undefined) stats.partidasPerdidas = 0;
            if (!stats.historial) stats.historial = [];
        } catch (e) {
            console.error("Error cargando estadísticas:", e);
        }
    }
}

// RESTAURAR O GUARDAR ESTADÍSTICAS
function saveStats() {
    localStorage.setItem("3raya_stats", JSON.stringify(stats));
}

function updateStatistics(won = true) {
    const todayStr = getTodayString();
    
    stats.partidasJugadas++;
    if (won) {
        stats.partidasGanadas++;
        
        // Las rachas aplican al juego diario
        const lastDate = stats.lastPlayDate ? new Date(stats.lastPlayDate) : null;
        const today = new Date(todayStr);
        
        if (lastDate) {
            const diffTime = Math.abs(today - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays <= 1) {
                // Solo incrementa si no se había ganado ya hoy
                if (stats.lastPlayDate !== todayStr) {
                    stats.rachaActual++;
                }
            } else {
                stats.rachaActual = 1;
            }
        } else {
            stats.rachaActual = 1;
        }
        
        if (stats.rachaActual > stats.mejorRacha) {
            stats.mejorRacha = stats.rachaActual;
        }
        stats.lastPlayDate = todayStr;
    } else {
        stats.partidasPerdidas++;
        stats.rachaActual = 0;
    }
    
    // Añadir entrada al historial
    if (!stats.historial) stats.historial = [];
    stats.historial.push({
        fecha: todayStr,
        dificultad: currentDifficulty,
        resultado: won ? "Ganado" : "Perdido"
    });
    
    saveStats();
}

// MOSTRAR ESTADÍSTICAS EN MODAL
function showStatistics() {
    const winRate = stats.partidasJugadas > 0 ? 
        Math.round((stats.partidasGanadas / stats.partidasJugadas) * 100) : 0;
        
    let historyRowsHtml = "";
    if (stats.historial && stats.historial.length > 0) {
        // Mostrar últimas 15 entradas en orden inverso
        const recentHistory = [...stats.historial].reverse().slice(0, 15);
        recentHistory.forEach(entry => {
            let diffLabel = "Fácil";
            if (entry.dificultad === "medium") diffLabel = "Medio";
            if (entry.dificultad === "hard") diffLabel = "Difícil";
            
            const isWin = entry.resultado === "Ganado";
            const resClass = isWin ? "result-win" : "result-loss";
            
            // Convertir fecha de YYYY-MM-DD a DD/MM/YYYY para estética
            let dateDisplay = entry.fecha;
            if (entry.fecha && entry.fecha.includes("-")) {
                const parts = entry.fecha.split("-");
                dateDisplay = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
            
            historyRowsHtml += `
                <div class="stats-history-row">
                    <span>[${dateDisplay}] ${diffLabel}</span>
                    <span class="${resClass}">${entry.resultado.toUpperCase()}</span>
                </div>
            `;
        });
    } else {
        historyRowsHtml = `<div style="text-align:center; padding:10px; color:rgba(255,243,224,0.4)">Sin historial de juego</div>`;
    }
        
    const statsHtml = `
        <div class="stats-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
            <div class="stat-item">
                <div class="stat-value">${stats.partidasJugadas}</div>
                <div class="stat-label">Jugadas</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${stats.partidasGanadas}</div>
                <div class="stat-label">Ganadas</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${stats.partidasPerdidas}</div>
                <div class="stat-label">Perdidas</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${winRate}%</div>
                <div class="stat-label">% Victoria</div>
            </div>
        </div>
        
        <div style="font-family: var(--font-retro); font-size: 7px; display: flex; justify-content: space-between; margin-top: 15px; padding: 0 5px; color: var(--color-highlight);">
            <span>Racha Actual: ${stats.rachaActual} d</span>
            <span>Mejor Racha: ${stats.mejorRacha} d</span>
        </div>

        <div class="stats-history-container">
            <div class="stats-history-header">HISTORIAL DIARIO</div>
            ${historyRowsHtml}
        </div>
    `;
    
    Swal.fire({
        title: '📊 ESTADISTICAS',
        html: statsHtml,
        icon: 'info',
        confirmButtonText: 'ENTENDIDO',
        customClass: {
            popup: 'swal-retro-popup',
            title: 'swal-retro-title',
            htmlContainer: 'swal-retro-html',
            confirmButton: 'swal-retro-confirm'
        }
    });
}



// MOSTRAR MANUAL DE CÓMO JUGAR
function showHowToPlay() {
    const howToPlayHtml = `
        <div style="text-align: left; font-size: 8px; line-height: 1.6; font-family: var(--font-retro); color: var(--text-primary);">
            <p><span style="color: var(--color-highlight);">1. OBJETIVO:</span><br>Completar las 9 casillas del tablero relacionando los clubes (filas) y selecciones (columnas).</p>
            
            <p><span style="color: var(--color-highlight);">2. SELECCIÓN Y BÚSQUEDA:</span><br>Haz clic en cualquier celda para ver sus requisitos. Escribe el nombre de un jugador en la barra de búsqueda inferior. Presiona <span style="color: var(--color-correct);">ENTER</span> para seleccionar la primera opción automáticamente.</p>
            
            <p><span style="color: var(--color-highlight);">3. COINCIDENCIA MÚLTIPLE:</span><br>Si el jugador coincide con varias casillas libres, éstas se iluminarán de amarillo parpadeante. ¡Haz clic directo sobre la casilla donde desees colocarlo!</p>
            
            <p><span style="color: var(--color-highlight);">4. RESTRICCIONES:</span><br>- El jugador debe cumplir ambas condiciones simultáneamente.<br>- Cada jugador solo puede usarse <span style="color: var(--color-error);">UNA VEZ</span> por partida.</p>
            
            <p><span style="color: var(--color-highlight);">5. RETO DIARIO:</span><br>El tablero cambia cada 24 horas y es idéntico para todos los usuarios. ¡Mide tu racha diaria en las Estadísticas!</p>
        </div>
    `;
    
    Swal.fire({
        title: '📖 COMO JUGAR',
        html: howToPlayHtml,
        icon: 'info',
        confirmButtonText: '¡ENTENDIDO Y LISTO! ⚽',
        customClass: {
            popup: 'swal-retro-popup',
            title: 'swal-retro-title',
            htmlContainer: 'swal-retro-html',
            confirmButton: 'swal-retro-confirm'
        }
    });
}

// ========================================================
// CONEXIÓN LEADERBOARD SUPABASE
// ========================================================
async function save3RayaTimeToSupabase(elapsedTimeSeconds) {
    try {
        if (!window.supabase) return;
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session || !session.user) return;

        const userId = session.user.id;
        const difficulty = currentDifficulty; // "easy", "medium", "hard"

        // Consultar récord actual para esta dificultad
        const { data, error } = await window.supabase
            .from('leaderboard_futbol_3raya')
            .select('best_time')
            .eq('user_id', userId)
            .eq('difficulty', difficulty)
            .maybeSingle();

        if (error) {
            console.error("Error al consultar récord de 3 en raya:", error.message);
            return;
        }

        if (!data) {
            // No tiene puntuación previa en esta dificultad, insertar
            const { error: insertError } = await window.supabase
                .from('leaderboard_futbol_3raya')
                .insert({ 
                    user_id: userId, 
                    difficulty: difficulty, 
                    best_time: elapsedTimeSeconds 
                });
            if (insertError) console.error("Error al insertar tiempo de 3 en raya:", insertError.message);
        } else if (elapsedTimeSeconds < data.best_time) {
            // El tiempo actual es menor (mejor), actualizar
            const { error: updateError } = await window.supabase
                .from('leaderboard_futbol_3raya')
                .update({ 
                    best_time: elapsedTimeSeconds, 
                    updated_at: new Date().toISOString() 
                })
                .eq('user_id', userId)
                .eq('difficulty', difficulty);
            if (updateError) console.error("Error al actualizar tiempo de 3 en raya:", updateError.message);
        }
    } catch (e) {
        console.error("Error al guardar tiempo de 3 en raya en Supabase:", e);
    }
}


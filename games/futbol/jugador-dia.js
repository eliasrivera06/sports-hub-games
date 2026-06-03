// ========================================================
// JUGADOR DEL DIA - LOGICA DE JUEGO (ESTILO WORDLE)
// ========================================================

// 1. BASE DE DATOS DE JUGADORES (Apellidos sin tildes ni espacios)
const JUGADORES = [
    { nombre: "MESSI", pais: "Argentina", posicion: "Delantero", club: "Inter Miami / Barcelona" },
    { nombre: "RONALDO", pais: "Portugal", posicion: "Delantero", club: "Al-Nassr / Real Madrid" },
    { nombre: "MBAPPE", pais: "Francia", posicion: "Delantero", club: "Real Madrid / PSG" },
    { nombre: "NEYMAR", pais: "Brasil", posicion: "Delantero", club: "Al-Hilal / Barcelona" },
    { nombre: "MODRIC", pais: "Croacia", posicion: "Centrocampista", club: "Real Madrid / Tottenham" },
    { nombre: "KROOS", pais: "Alemania", posicion: "Centrocampista", club: "Real Madrid / Bayern Munich" },
    { nombre: "HAALAND", pais: "Noruega", posicion: "Delantero", club: "Manchester City / Dortmund" },
    { nombre: "KANE", pais: "Inglaterra", posicion: "Delantero", club: "Bayern Munich / Tottenham" },
    { nombre: "SALAH", pais: "Egipto", posicion: "Delantero", club: "Liverpool / Roma" },
    { nombre: "BENZEMA", pais: "Francia", posicion: "Delantero", club: "Al-Ittihad / Real Madrid" },
    { nombre: "INIESTA", pais: "España", posicion: "Centrocampista", club: "Vissel Kobe / Barcelona" },
    { nombre: "SUAREZ", pais: "Uruguay", posicion: "Delantero", club: "Inter Miami / Barcelona" },
    { nombre: "ZIDANE", pais: "Francia", posicion: "Centrocampista", club: "Real Madrid / Juventus (Retirado)" },
    { nombre: "XAVI", pais: "España", posicion: "Centrocampista", club: "Barcelona (Retirado)" },
    { nombre: "BUFFON", pais: "Italia", posicion: "Portero", club: "Juventus / PSG (Retirado)" },
    { nombre: "NEUER", pais: "Alemania", posicion: "Portero", club: "Bayern Munich / Schalke 04" },
    { nombre: "DYBALA", pais: "Argentina", posicion: "Delantero", club: "AS Roma / Juventus" },
    { nombre: "VINICIUS", pais: "Brasil", posicion: "Delantero", club: "Real Madrid / Flamengo" },
    { nombre: "BELLINGHAM", pais: "Inglaterra", posicion: "Centrocampista", club: "Real Madrid / Dortmund" },
    { nombre: "DEBRUYNE", pais: "Bélgica", posicion: "Centrocampista", club: "Manchester City / Wolfsburg" },
    { nombre: "LEWANDOWSKI", pais: "Polonia", posicion: "Delantero", club: "Barcelona / Bayern Munich" },
    { nombre: "GRIEZMANN", pais: "Francia", posicion: "Delantero", club: "Atlético de Madrid / Barcelona" },
    { nombre: "COURTOIS", pais: "Bélgica", posicion: "Portero", club: "Real Madrid / Chelsea" },
    { nombre: "MARADONA", pais: "Argentina", posicion: "Mediapunta", club: "Napoli / Boca Juniors (Leyenda)" },
    { nombre: "PELE", pais: "Brasil", posicion: "Delantero", club: "Santos / NY Cosmos (Leyenda)" }
];

// 2. ESTADO GLOBAL DEL JUEGO
let targetPlayer = null;
let targetWord = "";
let wordLength = 0;
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let boardState = []; // Matriz bidimensional para rastrear las letras ingresadas
let isPracticeMode = false;
let hintsUsed = 0;

// Elementos DOM
const boardElement = document.getElementById("board");
const hintBtn = document.getElementById("hintBtn");
const hintTextElement = document.getElementById("hintText");

// 3. INICIALIZACION
window.addEventListener("DOMContentLoaded", () => {
    initGame();
    setupPhysicalKeyboard();
    setupVirtualKeyboard();
});

// Selección de jugador basado en la fecha o aleatorio
function selectTargetPlayer() {
    if (isPracticeMode) {
        // Modo práctica: selección aleatoria
        const randomIndex = Math.floor(Math.random() * JUGADORES.length);
        return JUGADORES[randomIndex];
    } else {
        // Jugador del día: usando la fecha actual como semilla
        const today = new Date();
        const dateString = today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString();
        // Hash simple
        let hash = 0;
        for (let i = 0; i < dateString.length; i++) {
            hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % JUGADORES.length;
        return JUGADORES[index];
    }
}

function initGame() {
    targetPlayer = selectTargetPlayer();
    targetWord = targetPlayer.nombre.toUpperCase();
    wordLength = targetWord.length;
    currentRow = 0;
    currentCol = 0;
    gameOver = false;
    hintsUsed = 0;

    // Reiniciar interfaz de pistas
    hintBtn.textContent = "💡 VER PISTA (3)";
    hintBtn.disabled = false;
    hintTextElement.innerHTML = "Presiona el botón para recibir pistas sobre el jugador de hoy.";

    // Reiniciar teclado virtual (quitar clases correct, present, absent)
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.className = "key";
        if (key.id === "enterKey" || key.id === "backspaceKey") {
            key.classList.add("wide");
        }
    });

    // Generar tablero (boardState)
    boardState = Array(6).fill().map(() => Array(wordLength).fill(""));
    buildBoardDOM();
}

function buildBoardDOM() {
    boardElement.innerHTML = "";
    // Ajustar columnas dinámicamente según el largo del nombre del futbolista
    boardElement.style.gridTemplateRows = "repeat(6, 1fr)";
    
    for (let r = 0; r < 6; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row-guess";
        rowDiv.id = `row-${r}`;
        
        for (let c = 0; c < wordLength; c++) {
            const tileDiv = document.createElement("div");
            tileDiv.className = "tile";
            tileDiv.id = `tile-${r}-${c}`;
            rowDiv.appendChild(tileDiv);
        }
        boardElement.appendChild(rowDiv);
    }
}

// 4. ACCIONES DE JUEGO (Escribir, Borrar, Validar)
function addLetter(letter) {
    if (gameOver || currentCol >= wordLength) return;

    letter = letter.toUpperCase();
    boardState[currentRow][currentCol] = letter;

    // Actualizar celda en la interfaz
    const tile = document.getElementById(`tile-${currentRow}-${currentCol}`);
    tile.textContent = letter;
    tile.classList.add("pop");

    currentCol++;
}

function deleteLetter() {
    if (gameOver || currentCol <= 0) return;

    currentCol--;
    boardState[currentRow][currentCol] = "";

    // Actualizar celda en la interfaz
    const tile = document.getElementById(`tile-${currentRow}-${currentCol}`);
    tile.textContent = "";
    tile.classList.remove("pop");
}

function checkGuess() {
    if (gameOver) return;

    // Verificar si la palabra está completa
    if (currentCol < wordLength) {
        shakeRow(currentRow);
        Swal.fire({
            title: 'INCOMPLETO',
            text: `El apellido debe tener ${wordLength} letras.`,
            icon: 'warning',
            customClass: {
                popup: 'swal-retro-popup',
                title: 'swal-retro-title',
                htmlContainer: 'swal-retro-html',
                confirmButton: 'swal-retro-confirm'
            }
        });
        return;
    }

    const currentGuess = boardState[currentRow].join("");
    
    // Algoritmo Wordle: identificar colores
    const rowDiv = document.getElementById(`row-${currentRow}`);
    const letterStates = Array(wordLength).fill("absent"); // 'correct', 'present', 'absent'
    
    // Contadores de letras de la palabra objetivo para manejar duplicados
    const targetLettersCount = {};
    for (let char of targetWord) {
        targetLettersCount[char] = (targetLettersCount[char] || 0) + 1;
    }

    // Primera pasada: Buscar aciertos exactos (Verde)
    for (let i = 0; i < wordLength; i++) {
        const letter = currentGuess[i];
        if (letter === targetWord[i]) {
            letterStates[i] = "correct";
            targetLettersCount[letter]--;
        }
    }

    // Segunda pasada: Buscar letras en posición incorrecta (Amarillo)
    for (let i = 0; i < wordLength; i++) {
        const letter = currentGuess[i];
        if (letterStates[i] !== "correct") {
            if (targetLettersCount[letter] > 0) {
                letterStates[i] = "present";
                targetLettersCount[letter]--;
            }
        }
    }

    // Bloquear controles durante la animación
    gameOver = true;

    // Revelar letras de una en una con la animación 'flip'
    for (let i = 0; i < wordLength; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        const state = letterStates[i];
        const letter = currentGuess[i];

        setTimeout(() => {
            tile.classList.add("flip");
            
            // Justo en el medio del volteo (0.25s), cambiamos el fondo
            setTimeout(() => {
                tile.classList.add(state);
                updateKeyboardKey(letter, state);
            }, 250);

        }, i * 150);
    }

    // Evaluar estado de victoria o derrota después de que termine la animación de volteo
    setTimeout(() => {
        if (currentGuess === targetWord) {
            handleEndGame(true);
        } else if (currentRow === 5) {
            handleEndGame(false);
        } else {
            // Avanzar a la siguiente fila
            currentRow++;
            currentCol = 0;
            gameOver = false;
        }
    }, wordLength * 150 + 400);
}

// Actualizar colores del teclado físico/virtual
function updateKeyboardKey(letter, state) {
    const keyElement = document.querySelector(`.key[data-key="${letter}"]`);
    if (!keyElement) return;

    // Reglas de prioridad: correct > present > absent
    if (keyElement.classList.contains("correct")) return;
    
    if (state === "correct") {
        keyElement.classList.remove("present", "absent");
        keyElement.classList.add("correct");
    } else if (state === "present") {
        if (!keyElement.classList.contains("correct")) {
            keyElement.classList.remove("absent");
            keyElement.classList.add("present");
        }
    } else if (state === "absent") {
        if (!keyElement.classList.contains("correct") && !keyElement.classList.contains("present")) {
            keyElement.classList.add("absent");
        }
    }
}

// 5. ANIMACIONES Y EFECTOS
function shakeRow(row) {
    const rowDiv = document.getElementById(`row-${row}`);
    rowDiv.classList.add("shake");
    setTimeout(() => {
        rowDiv.classList.remove("shake");
    }, 500);
}

// 6. SOLICITAR PISTAS
function showHint() {
    if (gameOver) return;

    hintsUsed++;
    if (hintsUsed === 1) {
        hintTextElement.innerHTML = `⚽ <b>Posición:</b> ${targetPlayer.posicion}`;
        hintBtn.textContent = "💡 VER PISTA (2)";
    } else if (hintsUsed === 2) {
        hintTextElement.innerHTML = `⚽ <b>Posición:</b> ${targetPlayer.posicion}<br>🌍 <b>Nacionalidad:</b> ${targetPlayer.pais}`;
        hintBtn.textContent = "💡 VER PISTA (1)";
    } else if (hintsUsed === 3) {
        hintTextElement.innerHTML = `⚽ <b>Posición:</b> ${targetPlayer.posicion}<br>🌍 <b>Nacionalidad:</b> ${targetPlayer.pais}<br>🏠 <b>Club/Ex-Club:</b> ${targetPlayer.club}`;
        hintBtn.textContent = "💡 SIN PISTAS";
        hintBtn.disabled = true;
    }
}

// 7. FIN DEL JUEGO (ALERTAS RETRO)
function handleEndGame(isVictory) {
    let titleText = "";
    let htmlContent = "";
    let confirmBtnText = isPracticeMode ? "JUGAR DE NUEVO" : "MODO PRÁCTICA 🎮";

    if (isVictory) {
        titleText = "🏆 ¡VICTORIA RETRO!";
        htmlContent = `
            Adivinaste al futbolista:<br>
            <h2 style="color: #00ff9f; margin: 15px 0;">${targetWord}</h2>
            Intentos: <b>${currentRow + 1} de 6</b><br>
            Pistas usadas: <b>${hintsUsed}</b>
        `;
    } else {
        titleText = "💀 GAME OVER";
        htmlContent = `
            Te quedaste sin intentos.<br>El futbolista era:<br>
            <h2 style="color: #ff3c38; margin: 15px 0;">${targetWord}</h2>
            ¡Sigue intentando para mejorar tus conocimientos!
        `;
    }

    Swal.fire({
        title: titleText,
        html: htmlContent,
        icon: isVictory ? 'success' : 'error',
        showCancelButton: true,
        confirmButtonText: confirmBtnText,
        cancelButtonText: 'SALIR',
        allowOutsideClick: false,
        customClass: {
            popup: 'swal-retro-popup',
            title: 'swal-retro-title',
            htmlContainer: 'swal-retro-html',
            confirmButton: 'swal-retro-confirm',
            cancelButton: 'swal-retro-cancel'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Si no estaba en modo práctica, lo activamos
            isPracticeMode = true;
            initGame();
        } else {
            // Salir al menú de fútbol
            window.location.href = "futbol.html";
        }
    });
}

// 8. TECLADO VIRTUAL
function setupVirtualKeyboard() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const keyValue = key.getAttribute("data-key");
            
            if (keyValue === "ENTER") {
                checkGuess();
            } else if (keyValue === "BACKSPACE") {
                deleteLetter();
            } else if (keyValue) {
                addLetter(keyValue);
            }
        });
    });
}

// 9. TECLADO FISICO
function setupPhysicalKeyboard() {
    document.addEventListener("keydown", (e) => {
        if (e.repeat) return;
        
        // Evitar que la barra espaciadora haga scroll en la página
        if (e.key === " ") {
            e.preventDefault();
            return;
        }

        if (e.key === "Enter") {
            checkGuess();
        } else if (e.key === "Backspace") {
            deleteLetter();
        } else if (/^[a-zA-ZñÑ]$/.test(e.key)) {
            // Permitir letras básicas y la eñe (se normaliza la Ñ en addLetter)
            addLetter(e.key);
        }
    });
}

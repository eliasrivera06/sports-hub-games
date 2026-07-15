// Elementos del DOM
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startOverlay = document.getElementById("startOverlay");
const readyBtn = document.getElementById("readyBtn");
const currentRoundText = document.getElementById("currentRound");
const currentStreakText = document.getElementById("currentStreak");
const bestStreakText = document.getElementById("bestStreak");
const cluesCountText = document.getElementById("cluesCount");
const clueBtn = document.getElementById("clueBtn");
const clueTextDisplay = document.getElementById("clueTextDisplay");
const optionsContainer = document.getElementById("optionsContainer");

// Base de datos de circuitos (12 circuitos)
const circuits = [
    { name: "Circuito Callejero de Baku", file: "Circuito Callejero de Baku.jpg", country: "Azerbaiyán", tip: "Tiene la recta más larga del mundial y una sección ultra estrecha junto al castillo medieval." },
    { name: "Circuito Callejero de Las Vegas", file: "Circuito Callejero de Las Vegas.jpg", country: "Estados Unidos", tip: "Es un trazado nocturno y plano que pasa por la famosa avenida de los casinos (The Strip)." },
    { name: "Circuito de Budapest", file: "Circuito de Budapest.jpg", country: "Hungría", tip: "Conocido como Hungaroring, es lento, revirado e histórico. A menudo llamado 'un kartódromo sin arena'." },
    { name: "Circuito de Monaco", file: "Circuito de Monaco.jpg", country: "Mónaco", tip: "El trazado urbano más icónico, estrecho y glamuroso del mundo, donde adelantar es casi imposible." },
    { name: "Circuito de Monza", file: "Circuito de Monza.png", country: "Italia", tip: "El 'Templo de la Velocidad', caracterizado por sus largas rectas y la legendaria curva Parabólica." },
    { name: "Circuito de Silverstone", file: "Circuito de Silverstone.jpg", country: "Reino Unido", tip: "Donde nació la F1 en 1950, famoso por curvas rápidas encadenadas como Copse, Maggots y Becketts." },
    { name: "Circuito de Spa", file: "Circuito de Spa.jpg", country: "Bélgica", tip: "El circuito más largo del mundial, ubicado en las Ardenas y famoso por la vertiginosa subida de Eau Rouge." },
    { name: "Circuito de abu dhabi", file: "Circuito de abu dhabi.jpg", country: "Emiratos Árabes Unidos", tip: "Yas Marina Circuit. Alberga el final del campeonato y destaca por su hotel iluminado que cruza la pista." },
    { name: "Circuito de interlagos", file: "Circuito de interlagos.png", country: "Brasil", tip: "Ubicado en São Paulo, se corre en sentido antihorario y cuenta con la famosa curva 'S de Senna'." },
    { name: "Circuito de las Américas", file: "Circuito de las Américas.jpg", country: "Estados Unidos", tip: "Ubicado en Austin, Texas. Su primera curva cuenta con una pronunciada cuesta arriba ciega." },
    { name: "Circuito de singapur", file: "Circuito de singapur.jpg", country: "Singapur", tip: "Marina Bay. Fue la primera carrera nocturna oficial en la historia de la Fórmula 1." },
    { name: "Circuito de suzuka", file: "Circuito de suzuka.jpg", country: "Japón", tip: "El único circuito del calendario con diseño en forma de '8' (cruce en puente) y la famosa curva 130R." }
];

// Variables del estado de juego
let gameActive = false;
let currentRound = 0; // 1 a 5
let streak = 0;
let bestStreak = parseInt(localStorage.getItem("bestStreak_f1_circuits")) || 0;
let cluesRemaining = 3;
let clueUsedInQuestion = false;

let selectedCircuits = []; // El pool de 5 circuitos elegidos para la ronda actual
let currentCircuit = null;
let currentImage = null;
let currentOptions = [];

let timeLeft = 10.0; // segundos
let timerInterval = null;
let drawInterval = null;

// Inicialización de sonido (Web Audio API)
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playTone(freq, type, duration) {
    try {
        initAudio();
        if (!audioCtx) return;
        
        // Evitar errores si el contexto de audio está suspendido (política del navegador)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type || 'sine';
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        console.warn("Audio Context blocked or unsupported:", e);
    }
}

// Sonidos predefinidos
const sounds = {
    beepLight: () => playTone(600, 'square', 0.1),
    beepGreen: () => playTone(1200, 'square', 0.35),
    correct: () => {
        playTone(523.25, 'triangle', 0.15); // C5
        setTimeout(() => playTone(659.25, 'triangle', 0.25), 150); // E5
    },
    wrong: () => {
        playTone(220, 'sawtooth', 0.4); // A3
        setTimeout(() => playTone(147, 'sawtooth', 0.5), 100); // D3
    },
    victory: () => {
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        notes.forEach((note, i) => {
            setTimeout(() => playTone(note, 'sine', 0.2), i * 150);
        });
    }
};

// Cargar mejor racha inicial en UI
bestStreakText.textContent = bestStreak;

// Evento: Botón "¿LISTO?"
readyBtn.addEventListener("click", () => {
    initAudio();
    startOverlay.classList.add("d-none");
    startOverlay.classList.remove("d-flex");
    startNewGame();
});

// Evento: Botón de Pista
clueBtn.addEventListener("click", useClue);

// Iniciar una nueva partida (Ronda de 5 circuitos aleatorios)
function startNewGame() {
    gameActive = false;
    currentRound = 0;
    cluesRemaining = 3;
    clueUsedInQuestion = false;
    
    cluesCountText.textContent = cluesRemaining;
    clueBtn.disabled = true;
    clueTextDisplay.textContent = "";
    
    // Deshabilitar y limpiar botones de opción
    optionsContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = "-";
        btn.disabled = true;
        optionsContainer.appendChild(btn);
    }

    // Seleccionar 5 circuitos aleatorios de la base de datos sin repeticiones
    const shuffled = [...circuits].sort(() => 0.5 - Math.random());
    selectedCircuits = shuffled.slice(0, 5);

    // Iniciar secuencia de semáforo en el Canvas
    runStartingLightsSequence();
}

// Semáforo de salida de F1 en Canvas
function runStartingLightsSequence() {
    let activeLights = 0;
    let greenLights = false;
    timeLeft = 10.0;

    const lightsTimer = setInterval(() => {
        if (activeLights < 5) {
            activeLights++;
            sounds.beepLight();
            drawLights(activeLights, false);
        } else {
            clearInterval(lightsTimer);
            // Retraso aleatorio antes de que se apaguen las luces y den verde
            const randomDelay = Math.random() * 1000 + 800;
            setTimeout(() => {
                greenLights = true;
                sounds.beepGreen();
                drawLights(5, true);
                
                // Empezar el juego oficial después del verde
                setTimeout(() => {
                    gameActive = true;
                    nextQuestion();
                }, 800);
            }, randomDelay);
        }
    }, 600);

    // Dibujar luces iniciales (0 encendidas)
    drawLights(0, false);
}

// Dibujar el Semáforo F1 en el Canvas (similar a tiempo-reaccion.js)
function drawLights(activeLights, green = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo oscuro
    ctx.fillStyle = "#121420";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Borde de piano estático
    drawCurbBorder(0);

    // Texto descriptivo en el canvas
    ctx.font = '16px "Press Start 2P"';
    ctx.fillStyle = green ? "#00ff9f" : "#ff3c38";
    ctx.textAlign = "center";
    ctx.fillText(green ? "¡YA! ADIVINA" : "PREPARATE...", canvas.width / 2, 50);

    // Parámetros de los semáforos
    const numPanels = 5;
    const panelWidth = 60;
    const panelHeight = 160;
    const gap = 15;
    const totalWidth = (numPanels * panelWidth) + ((numPanels - 1) * gap);
    const startX = (canvas.width - totalWidth) / 2;
    const startY = 80;

    for (let col = 0; col < numPanels; col++) {
        const x = startX + (col * (panelWidth + gap));

        // Dibujar panel
        ctx.fillStyle = "#2b2d42";
        ctx.strokeStyle = "#ffd166";
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, startY, panelWidth, panelHeight, 8);
        } else {
            ctx.rect(x, startY, panelWidth, panelHeight);
        }
        ctx.fill();
        ctx.stroke();

        // Luces interiores (4 por panel: 2 superiores vacías/verdes, 2 inferiores rojas)
        for (let row = 0; row < 4; row++) {
            let color = "#1b1d2d";
            
            if (green) {
                if (row === 0) color = "#00ff9f"; // Luz verde superior
            } else {
                if (row >= 2 && col < activeLights) {
                    color = "#ff3c38"; // Luces rojas inferiores
                }
            }

            const lightX = x + (panelWidth / 2);
            const lightY = startY + 25 + (row * 35);

            ctx.beginPath();
            ctx.arc(lightX, lightY, 12, 0, Math.PI * 2);
            ctx.fillStyle = color;
            
            // Resplandor si está encendida
            if (color !== "#1b1d2d") {
                ctx.shadowColor = color;
                ctx.shadowBlur = 12;
            } else {
                ctx.shadowBlur = 0;
            }
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }
}

// Cargar y mostrar la siguiente pregunta
function nextQuestion() {
    if (currentRound >= 5) {
        handleVictory();
        return;
    }

    currentRound++;
    clueUsedInQuestion = false;
    timeLeft = 10.0;
    clueTextDisplay.textContent = "";

    // Actualizar textos UI
    currentRoundText.textContent = `${currentRound}/5`;
    currentStreakText.textContent = streak;
    clueBtn.disabled = cluesRemaining === 0;

    // Obtener circuito actual
    currentCircuit = selectedCircuits[currentRound - 1];

    // Cargar imagen
    currentImage = new Image();
    // La imagen está en assets-f1/
    currentImage.src = `assets-f1/${currentCircuit.file}`;
    
    // Mostrar estado de carga en el Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#121420";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCurbBorder(0);
    ctx.font = '14px "Press Start 2P"';
    ctx.fillStyle = "#fff3e0";
    ctx.textAlign = "center";
    ctx.fillText("CARGANDO CIRCUITO...", canvas.width / 2, canvas.height / 2);

    currentImage.onload = () => {
        // Generar las 4 alternativas
        generateOptions();
        // Iniciar bucles de tiempo y renderizado
        startQuestionLoops();
    };

    currentImage.onerror = () => {
        console.error("No se pudo cargar la imagen:", currentCircuit.file);
        // En caso de error de carga, generar opciones y continuar para no bloquear
        generateOptions();
        startQuestionLoops();
    };
}

// Genera 4 alternativas: 1 correcta y 3 incorrectas aleatorias
function generateOptions() {
    const options = [currentCircuit.name];
    
    // Obtener todos los nombres de circuitos excepto el correcto
    const otherNames = circuits
        .map(c => c.name)
        .filter(name => name !== currentCircuit.name);
    
    // Mezclar nombres incorrectos y elegir 3
    const shuffledIncorrect = otherNames.sort(() => 0.5 - Math.random());
    options.push(shuffledIncorrect[0], shuffledIncorrect[1], shuffledIncorrect[2]);

    // Barajar las 4 opciones finales
    currentOptions = options.sort(() => 0.5 - Math.random());

    // Actualizar botones en el DOM
    optionsContainer.innerHTML = "";
    currentOptions.forEach(optName => {
        const btn = document.createElement("button");
        btn.className = "option-btn btn-retro animate__animated animate__zoomIn";
        btn.textContent = optName.toUpperCase();
        btn.addEventListener("click", () => evaluateAnswer(optName, btn));
        optionsContainer.appendChild(btn);
    });
}

// Iniciar el temporizador y el refresco del Canvas
function startQuestionLoops() {
    if (timerInterval) clearInterval(timerInterval);
    if (drawInterval) clearInterval(drawInterval);

    // Temporizador lógico (decrementa cada 100ms para suavidad)
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            clearInterval(drawInterval);
            handleTimeout();
        }
    }, 100);

    // Animación y pintado del Canvas
    let frameOffset = 0;
    drawInterval = setInterval(() => {
        frameOffset += 0.5; // Velocidad del borde animado
        renderGameCanvas(frameOffset);
    }, 30);
}

// Dibujar circuito, bordes y barras de tiempo
function renderGameCanvas(offset) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo oscuro
    ctx.fillStyle = "#121420";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar la imagen del circuito en el centro respetando la relación de aspecto
    if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
        const canvasAspectRatio = canvas.width / canvas.height;
        const imgAspectRatio = currentImage.width / currentImage.height;
        
        let drawWidth, drawHeight, drawX, drawY;
        
        // Dejar margen de 15px para el borde de piano y espaciado
        const maxW = canvas.width - 40;
        const maxH = canvas.height - 65; // más espacio abajo para las luces LED
        
        if (imgAspectRatio > maxW / maxH) {
            drawWidth = maxW;
            drawHeight = maxW / imgAspectRatio;
        } else {
            drawHeight = maxH;
            drawWidth = maxH * imgAspectRatio;
        }
        
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 20 + (maxH - drawHeight) / 2;

        // Filtro de revelado/pixelación retro si queda mucho tiempo, o scanlines
        ctx.drawImage(currentImage, drawX, drawY, drawWidth, drawHeight);

        // Efecto CRT / Scanlines retro
        ctx.fillStyle = "rgba(18, 20, 32, 0.15)";
        for (let i = 0; i < canvas.height; i += 4) {
            ctx.fillRect(0, i, canvas.width, 2);
        }
    } else {
        // En caso de que no cargue la imagen o no exista, mostramos un marcador de posición
        ctx.font = '12px "Press Start 2P"';
        ctx.fillStyle = "#ff3c38";
        ctx.textAlign = "center";
        ctx.fillText("[ CIRCUITO OCULTO ]", canvas.width / 2, canvas.height / 2 - 10);
        ctx.fillText("(Pista disponible)", canvas.width / 2, canvas.height / 2 + 15);
    }

    // Dibujar borde animado de piano de F1
    drawCurbBorder(offset);

    // Dibujar luces LED de tiempo (Tacómetro estilo F1 en la parte inferior)
    drawF1TimeLEDs();
}

// Dibujar un borde animado rojo y blanco (piano/curb de circuito de F1)
function drawCurbBorder(offset) {
    const borderThickness = 6;
    const segmentLength = 20;
    
    ctx.lineWidth = borderThickness;

    // Calcular el perímetro exterior del canvas
    // Dibujaremos segmentos alternados alrededor del borde
    // Para simplificar, hacemos trazo con guiones (dashed) que se desfasan con el offset
    ctx.lineDashOffset = offset;
    
    // Franja blanca de fondo
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([]);
    ctx.strokeRect(borderThickness / 2, borderThickness / 2, canvas.width - borderThickness, canvas.height - borderThickness);

    // Franja roja por encima discontinua
    ctx.strokeStyle = "#ff3c38";
    ctx.setLineDash([segmentLength, segmentLength]);
    ctx.strokeRect(borderThickness / 2, borderThickness / 2, canvas.width - borderThickness, canvas.height - borderThickness);
    
    // Restaurar trazo continuo
    ctx.setLineDash([]);
}

// Barra de luces LED estilo tacómetro F1 que representa el tiempo restante
function drawF1TimeLEDs() {
    const totalLEDs = 10;
    const ledsActive = Math.ceil((timeLeft / 10.0) * totalLEDs);
    
    const ledWidth = 24;
    const ledHeight = 12;
    const gap = 8;
    const totalWidth = (totalLEDs * ledWidth) + ((totalLEDs - 1) * gap);
    
    const startX = (canvas.width - totalWidth) / 2;
    const startY = canvas.height - 25;

    // Dibujar fondo del panel LED
    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(startX - 10, startY - 5, totalWidth + 20, ledHeight + 10, 6);
    } else {
        ctx.rect(startX - 10, startY - 5, totalWidth + 20, ledHeight + 10);
    }
    ctx.fill();

    for (let i = 0; i < totalLEDs; i++) {
        const x = startX + (i * (ledWidth + gap));
        
        let color = "#1a1b2d"; // apagado

        if (i < ledsActive) {
            // F1 RPM LED colors: primeras 4 verdes, siguientes 3 amarillas, últimas 3 rojas
            if (i < 4) {
                color = "#00ff9f"; // Verde Neón
            } else if (i < 7) {
                color = "#ffd166"; // Amarillo
            } else {
                // Si queda muy poco tiempo, las rojas parpadean
                if (timeLeft < 3.0 && Math.floor(Date.now() / 150) % 2 === 0) {
                    color = "#1a1b2d"; // parpadeo (apagado temporal)
                } else {
                    color = "#ff3c38"; // Rojo
                }
            }
        }

        ctx.fillStyle = color;
        
        // Resplandor si está encendido
        if (color !== "#1a1b2d") {
            ctx.shadowColor = color;
            ctx.shadowBlur = 8;
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, startY, ledWidth, ledHeight, 3);
        } else {
            ctx.rect(x, startY, ledWidth, ledHeight);
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
    }

    // Texto digital de tiempo numérico
    ctx.font = '10px "Press Start 2P"';
    ctx.fillStyle = timeLeft <= 3.0 ? "#ff3c38" : "#ffd166";
    ctx.textAlign = "left";
    ctx.fillText(`${timeLeft.toFixed(1)}s`, startX + totalWidth + 20, startY + 9);
}

// Lógica de Pista: Muestra país/tip y elimina una alternativa incorrecta
function useClue() {
    if (!gameActive || cluesRemaining <= 0 || clueUsedInQuestion) return;

    cluesRemaining--;
    clueUsedInQuestion = true;
    cluesCountText.textContent = cluesRemaining;
    clueBtn.disabled = true;

    // Sonido de pista
    playTone(880, 'sine', 0.15);

    // 1. Mostrar texto de pista (País + Consejo)
    clueTextDisplay.innerHTML = `<span class="animate__animated animate__fadeIn">PISTA: Se corre en <span>${currentCircuit.country.toUpperCase()}</span>. <br><small style="font-size:8px; color:#ccc;">${currentCircuit.tip.toUpperCase()}</small></span>`;

    // 2. Eliminar una opción incorrecta
    // Obtener todos los botones de opciones que no correspondan al circuito correcto y que estén habilitados
    const buttons = Array.from(optionsContainer.children);
    const incorrectButtons = buttons.filter(btn => {
        return btn.textContent !== currentCircuit.name.toUpperCase() && !btn.disabled;
    });

    if (incorrectButtons.length > 0) {
        // Elegir uno aleatorio y deshabilitarlo
        const btnToDisable = incorrectButtons[Math.floor(Math.random() * incorrectButtons.length)];
        btnToDisable.disabled = true;
        btnToDisable.textContent = "[ELIMINADO]";
        btnToDisable.classList.add("animate__animated", "animate__fadeOut");
    }
}

// Evaluar la respuesta elegida por el usuario
function evaluateAnswer(selectedName, clickedBtn) {
    if (!gameActive) return;
    
    // Detener temporizadores
    clearInterval(timerInterval);
    clearInterval(drawInterval);
    gameActive = false;

    // Deshabilitar todos los botones
    const buttons = Array.from(optionsContainer.children);
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedName === currentCircuit.name);

    if (isCorrect) {
        // Sonido y feedback visual correcto
        sounds.correct();
        clickedBtn.classList.add("correct-glow", "animate__animated", "animate__pulse");
        streak++;
        
        // Actualizar mejor racha
        if (streak > bestStreak) {
            bestStreak = streak;
            localStorage.setItem("bestStreak_f1_circuits", bestStreak);
            bestStreakText.textContent = bestStreak;
        }
        currentStreakText.textContent = streak;

        // Dibujar circuito revelado al 100% estático
        renderGameCanvas(0);

        // Siguiente pregunta después de una pequeña pausa
        setTimeout(() => {
            if (currentRound < 5) {
                // Siguiente pregunta
                gameActive = true;
                nextQuestion();
            } else {
                // Ganó la partida de 5 rondas
                handleVictory();
            }
        }, 1500);

    } else {
        // Sonido y feedback visual incorrecto
        sounds.wrong();
        clickedBtn.classList.add("wrong-glow", "animate__animated", "animate__shakeX");
        
        // Resaltar la correcta
        buttons.forEach(btn => {
            if (btn.textContent === currentCircuit.name.toUpperCase()) {
                btn.classList.add("correct-glow");
            }
        });

        // Mostrar derrota tras 1 segundo
        setTimeout(() => {
            handleGameOver(false); // Derrota por fallo
        }, 1200);
    }
}

// El tiempo se agotó
function handleTimeout() {
    gameActive = false;
    sounds.wrong();

    // Deshabilitar botones e indicar la respuesta correcta
    const buttons = Array.from(optionsContainer.children);
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentCircuit.name.toUpperCase()) {
            btn.classList.add("correct-glow");
        }
    });

    setTimeout(() => {
        handleGameOver(true); // Derrota por tiempo
    }, 1200);
}

// Manejar fin de juego (Derrota)
function handleGameOver(isTimeout) {
    const titleText = isTimeout ? "🚨 TIEMPO AGOTADO" : "💥 ERROR EN BOXES";
    const bodyHtml = `
        <p>El circuito correcto era:</p>
        <h3 style="color:#ffd166; margin: 10px 0;">${currentCircuit.name.toUpperCase()}</h3>
        <p>Racha de esta partida: <strong style="color:#ff3c38;">${streak}</strong></p>
        <p>Tu mejor racha histórica: <strong style="color:#00ff9f;">${bestStreak}</strong></p>
    `;

    // Resetear racha en la derrota
    streak = 0;
    currentStreakText.textContent = streak;

    Swal.fire({
        title: titleText,
        html: bodyHtml,
        icon: "error",
        confirmButtonText: "REINTENTAR",
        allowOutsideClick: false,
        customClass: {
            popup: 'retro-swal',
            confirmButton: 'retro-confirm'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            resetToReadyScreen();
        }
    });
}

// Victoria perfecta (5/5 correctas)
function handleVictory() {
    sounds.victory();

    // Guardar victoria en Supabase si hay sesión activa
    incrementCircuitsCompletionInSupabase();

    const bodyHtml = `
        <p style="color:#00ff9f; font-size:13px; margin-bottom:15px;">¡VICTORIA PERFECTA!</p>
        <p>Has completado con éxito las 5 preguntas del circuito.</p>
        <br>
        <p>Racha final: <strong style="color:#00ff9f;">${streak}</strong></p>
        <p>Pistas guardadas: <strong style="color:#ffd166;">${cluesRemaining}/3</strong></p>
    `;

    Swal.fire({
        title: "🏆 CAMPEÓN DE F1",
        html: bodyHtml,
        icon: "success",
        confirmButtonText: "JUGAR OTRA VEZ 🏁",
        allowOutsideClick: false,
        customClass: {
            popup: 'retro-swal',
            confirmButton: 'retro-confirm'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            resetToReadyScreen();
        }
    });
}

// Volver a la pantalla del cartel "¿Listo?"
function resetToReadyScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Limpiar canvas
    ctx.fillStyle = "#121420";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCurbBorder(0);
    
    // Restaurar vista de bienvenida
    startOverlay.classList.add("d-flex");
    startOverlay.classList.remove("d-none");
    currentRoundText.textContent = "-/5";
    currentStreakText.textContent = "0";
    clueBtn.disabled = true;
    clueTextDisplay.textContent = "";
    
    // Limpiar botones
    optionsContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = "-";
        btn.disabled = true;
        optionsContainer.appendChild(btn);
    }
}

// Pintar la pantalla inicial antes del primer clic
ctx.fillStyle = "#121420";
ctx.fillRect(0, 0, canvas.width, canvas.height);
drawCurbBorder(0);
ctx.font = '14px "Press Start 2P"';
ctx.fillStyle = "#ffd166";
ctx.textAlign = "center";
ctx.fillText("¡PRUEBA DE CIRCUITOS F1!", canvas.width / 2, canvas.height / 2 - 15);
ctx.fillStyle = "#fff3e0";
ctx.font = '10px "Press Start 2P"';
ctx.fillText("Presiona Listo para empezar", canvas.width / 2, canvas.height / 2 + 15);

// ==========================================================================
// INTEGRACIÓN CON SUPABASE (LEADERBOARD)
// ==========================================================================
async function incrementCircuitsCompletionInSupabase() {
    try {
        if (!window.supabase) return;
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session || !session.user) return;

        const userId = session.user.id;

        const { data, error } = await window.supabase
            .from('leaderboard_f1_circuits')
            .select('completions')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error("Error al consultar victorias de circuito:", error.message);
            return;
        }

        if (!data) {
            await window.supabase
                .from('leaderboard_f1_circuits')
                .insert({ user_id: userId, completions: 1 });
        } else {
            await window.supabase
                .from('leaderboard_f1_circuits')
                .update({ completions: data.completions + 1, updated_at: new Date().toISOString() })
                .eq('user_id', userId);
        }
    } catch (err) {
        console.error("Error al guardar victoria de circuito en Supabase:", err);
    }
}


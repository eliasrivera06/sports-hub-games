const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const statusText = document.getElementById("status");
const timerText = document.getElementById("timer");
const bestTimeText = document.getElementById("bestTime");

let gameStarted = false;
let lightsOff = false;
let currentLights = 0;

let startTime = 0;
let bestTime = null;

let timeoutId;
let intervalId;
let timerInterval;

let currentReactionTime = 0;

// =========================
// CRONOMETRO
// =========================

function startReactionTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        currentReactionTime =
            (performance.now() - startTime) / 1000;

        timerText.textContent =
            currentReactionTime.toFixed(3);

    }, 10);
}

// =========================
// DIBUJAR ESCENA
// =========================

function drawScene() {

    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawLights(
        currentLights,
        lightsOff
    );
}

// =========================
// SEMAFORO F1
// =========================

function drawLights(activeLights, green = false) {

    const lightWidth = 100;
    const lightHeight = 260;

    const startX = 170;
    const startY = 20;

    for (let col = 0; col < 5; col++) {

        const x = startX + (col * 110);

        // Panel

        ctx.fillStyle = "#2b2d42";

        ctx.beginPath();

        ctx.roundRect(
            x,
            startY,
            lightWidth,
            lightHeight,
            15
        );

        ctx.fill();

        ctx.strokeStyle = "#ffd166";
        ctx.lineWidth = 3;
        ctx.stroke();

        for (let row = 0; row < 4; row++) {

            let color = "#1b1d2d";

            if (green) {

                if (row === 0) {
                    color = "#00ff9f";
                }

            } else {

                if (
                    row >= 2 &&
                    col < activeLights
                ) {
                    color = "#ff3c38";
                }
            }

            const lightX = x + 50;
            const lightY = startY + 40 + (row * 55);

            // Luz principal

            ctx.beginPath();

            ctx.arc(
                lightX,
                lightY,
                24,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = color;

            if (color !== "#1b1d2d") {

                ctx.shadowColor = color;
                ctx.shadowBlur = 20;

            } else {

                ctx.shadowBlur = 0;
            }

            ctx.fill();

            ctx.shadowBlur = 0;

            // Reflejo

            if (color !== "#1b1d2d") {

                ctx.beginPath();

                ctx.arc(
                    lightX - 10,
                    lightY - 10,
                    5,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    green
                        ? "#caffea"
                        : "#ffd166";

                ctx.fill();
            }
        }
    }
}

// =========================
// INICIAR JUEGO
// =========================

startBtn.addEventListener("click", startGame);

function startGame() {

    if (gameStarted) return;

    clearInterval(timerInterval);
    clearInterval(intervalId);
    clearTimeout(timeoutId);

    gameStarted = true;
    lightsOff = false;
    currentLights = 0;

    currentReactionTime = 0;

    timerText.textContent = "0.000";

    statusText.textContent =
        "PREPARATE...";

    drawScene();

    intervalId = setInterval(() => {

        currentLights++;

        drawScene();

        if (currentLights >= 5) {

            clearInterval(intervalId);

            const randomDelay =
                Math.random() * 1500 + 800;

            timeoutId = setTimeout(() => {

                lightsOff = true;

                drawScene();

                statusText.textContent =
                    "¡YA! PRESIONA ESPACIO";

                startTime =
                    performance.now();

                startReactionTimer();

            }, randomDelay);
        }

    }, 700);
}

// =========================
// TECLA ESPACIO
// =========================

document.addEventListener("keydown", (e) => {

    if (e.code !== "Space") return;

    if (!gameStarted) return;

    // SALIDA FALSA

    if (!lightsOff) {

        clearInterval(intervalId);
        clearTimeout(timeoutId);
        clearInterval(timerInterval);

        gameStarted = false;

        statusText.textContent =
            "SALIDA FALSA";

        Swal.fire({
            icon: "error",
            title: "🚨 SALIDA FALSA",
            text: "Presionaste antes de tiempo."
        });

        return;
    }

    // REACCION VALIDA

    clearInterval(timerInterval);

    const reactionTime =
        (performance.now() - startTime) / 1000;

    timerText.textContent =
        reactionTime.toFixed(3);

    statusText.textContent =
        "CARRERA COMPLETADA";

    if (
        bestTime === null ||
        reactionTime < bestTime
    ) {

        bestTime = reactionTime;

        bestTimeText.textContent =
            `TU MEJOR TIEMPO: ${bestTime.toFixed(3)} s`;
    }

    let rating = "";

    if (reactionTime <= 0.200) {

        rating = "⭐⭐⭐ EXCELENTE";

    } else if (reactionTime <= 0.350) {

        rating = "⭐⭐ MUY BUENO";

    } else {

        rating = "⭐ BUEN INTENTO";
    }

    Swal.fire({
        icon: "success",
        title: "🏁 RESULTADO",
        html: `
            <p>Tiempo:</p>
            <h2>${reactionTime.toFixed(3)} s</h2>
            <br>
            <p>${rating}</p>
        `
    });

    gameStarted = false;
});

// =========================
// ESTADO INICIAL
// =========================

drawScene();
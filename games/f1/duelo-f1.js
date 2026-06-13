// ==========================================================================
// BASE DE DATOS: 40 LEYENDAS DE LA FÓRMULA 1
// Estadísticas reales de victorias en Grandes Premios (GP)
// ==========================================================================
const driversDb = [
  { name: "Lewis Hamilton", victories: 103, team: "Mercedes", nationality: "🇬🇧", color: "#00d2be", image: "./assets-f1/Lewis Hamilton.jpg" },
  { name: "Michael Schumacher", victories: 91, team: "Ferrari", nationality: "🇩🇪", color: "#dc0000", image: "./assets-f1/Michael Schumacher.jpg" },
  { name: "Max Verstappen", victories: 60, team: "Red Bull Racing", nationality: "🇳🇱", color: "#3671c6", image: "./assets-f1/Max Verstappen.jpg" },
  { name: "Sebastian Vettel", victories: 53, team: "Aston Martin", nationality: "🇩🇪", color: "#006f62", image: "./assets-f1/Sebastian Vettel.jpg" },
  { name: "Alain Prost", victories: 51, team: "McLaren", nationality: "🇫🇷", color: "#e8002d", image: "./assets-f1/Alain Prost.jpg" },
  { name: "Ayrton Senna", victories: 41, team: "McLaren", nationality: "🇧🇷", color: "#e8002d", image: "./assets-f1/Ayrton Senna.jpg" },
  { name: "Fernando Alonso", victories: 32, team: "Aston Martin", nationality: "🇪🇸", color: "#006f62", image: "./assets-f1/Fernando Alonso.jpg" },
  { name: "Nigel Mansell", victories: 31, team: "Williams", nationality: "🇬🇧", color: "#005aff", image: "./assets-f1/Nigel Mansell.jpg" },
  { name: "Jackie Stewart", victories: 27, team: "Tyrrell", nationality: "🇬🇧", color: "#005aff", image: "./assets-f1/Jackie Stewart.jpg" },
  { name: "Niki Lauda", victories: 25, team: "Ferrari", nationality: "🇦🇹", color: "#dc0000", image: "./assets-f1/Niki Lauda.jpg" },
  { name: "Jim Clark", victories: 25, team: "Lotus", nationality: "🇬🇧", color: "#007f3e", image: "./assets-f1/Jim Clark.jpg" },
  { name: "Juan Manuel Fangio", victories: 24, team: "Maserati", nationality: "🇦🇷", color: "#002d62", image: "./assets-f1/Juan Manuel Fangio.jpg" },
  { name: "Nelson Piquet", victories: 23, team: "Brabham", nationality: "🇧🇷", color: "#002fbe", image: "./assets-f1/Nelson Piquet.jpg" },
  { name: "Nico Rosberg", victories: 23, team: "Mercedes", nationality: "🇩🇪", color: "#00d2be", image: "./assets-f1/Nico Rosberg.jpg" },
  { name: "Damon Hill", victories: 22, team: "Williams", nationality: "🇬🇧", color: "#005aff", image: "./assets-f1/Damon Hill.jpg" },
  { name: "Kimi Räikkönen", victories: 21, team: "Ferrari", nationality: "🇫🇮", color: "#dc0000", image: "./assets-f1/Kimi Räikkönen.jpg" },
  { name: "Mika Häkkinen", victories: 20, team: "McLaren", nationality: "🇫🇮", color: "#e8002d", image: "./assets-f1/Mika Häkkinen.jpg" },
  { name: "Stirling Moss", victories: 16, team: "Vanwall", nationality: "🇬🇧", color: "#005aff", image: "./assets-f1/Stirling Moss.jpg" },
  { name: "Jenson Button", victories: 15, team: "McLaren", nationality: "🇬🇧", color: "#e8002d", image: "./assets-f1/Jenson Button.jpg" },
  { name: "Graham Hill", victories: 14, team: "Lotus", nationality: "🇬🇧", color: "#007f3e", image: "./assets-f1/Graham Hill.jpg" },
  { name: "Jack Brabham", victories: 14, team: "Brabham", nationality: "🇦🇺", color: "#005aff", image: "./assets-f1/Jack Brabham.jpg" },
  { name: "Emerson Fittipaldi", victories: 14, team: "Lotus", nationality: "🇧🇷", color: "#007f3e", image: "./assets-f1/Emerson Fittipaldi.jpg" },
  { name: "Alberto Ascari", victories: 13, team: "Ferrari", nationality: "🇮🇹", color: "#dc0000", image: "./assets-f1/Alberto Ascari.jpg" },
  { name: "David Coulthard", victories: 13, team: "McLaren", nationality: "🇬🇧", color: "#e8002d", image: "./assets-f1/David Coulthard.jpg" },
  { name: "Mario Andretti", victories: 12, team: "Lotus", nationality: "🇺🇸", color: "#007f3e", image: "./assets-f1/Mario Andretti.jpg" },
  { name: "Carlos Reutemann", victories: 12, team: "Ferrari", nationality: "🇦🇷", color: "#dc0000", image: "./assets-f1/Carlos Reutemann.jpg" },
  { name: "Alan Jones", victories: 12, team: "Williams", nationality: "🇦🇺", color: "#005aff", image: "./assets-f1/Alan Jones.jpg" },
  { name: "Jacques Villeneuve", victories: 11, team: "Williams", nationality: "🇨🇦", color: "#005aff", image: "./assets-f1/Jacques Villeneuve.jpg" },
  { name: "Felipe Massa", victories: 11, team: "Ferrari", nationality: "🇧🇷", color: "#dc0000", image: "./assets-f1/Felipe Massa.jpg" },
  { name: "Rubens Barrichello", victories: 11, team: "Ferrari", nationality: "🇧🇷", color: "#dc0000", image: "./assets-f1/Rubens Barrichello.jpg" },
  { name: "James Hunt", victories: 10, team: "McLaren", nationality: "🇬🇧", color: "#e8002d", image: "./assets-f1/James Hunt.jpg" },
  { name: "Gerhard Berger", victories: 10, team: "Ferrari", nationality: "🇦🇹", color: "#dc0000", image: "./assets-f1/Gerhard Berger.jpg" },
  { name: "Valtteri Bottas", victories: 10, team: "Mercedes", nationality: "🇫🇮", color: "#00d2be", image: "./assets-f1/Valtteri Bottas.jpg" },
  { name: "Mark Webber", victories: 9, team: "Red Bull Racing", nationality: "🇦🇺", color: "#3671c6", image: "./assets-f1/Mark Webber.jpg" },
  { name: "Charles Leclerc", victories: 8, team: "Ferrari", nationality: "🇲🇨", color: "#dc0000", image: "./assets-f1/Charles Leclerc.jpg" },
  { name: "Daniel Ricciardo", victories: 8, team: "Red Bull Racing", nationality: "🇦🇺", color: "#3671c6", image: "./assets-f1/Daniel Ricciardo.jpg" },
  { name: "Juan Pablo Montoya", victories: 7, team: "Williams", nationality: "🇨🇴", color: "#005aff", image: "./assets-f1/Juan Pablo Montoya.jpg" },
  { name: "Gilles Villeneuve", victories: 6, team: "Ferrari", nationality: "🇨🇦", color: "#dc0000", image: "./assets-f1/Gilles Villeneuve.jpg" },
  { name: "Sergio Pérez", victories: 6, team: "Red Bull Racing", nationality: "🇲🇽", color: "#3671c6", image: "./assets-f1/Sergio Pérez.jpg" },
  { name: "Keke Rosberg", victories: 5, team: "Williams", nationality: "🇫🇮", color: "#005aff", image: "./assets-f1/Keke Rosberg.jpg" }
];

// ==========================================================================
// VARIABLES DE ESTADO
// ==========================================================================
let currentStreak = 0;
let bestStreak = 0;
let gameActive = false;
let currentKing = null;
let currentChallenger = null;
let seenDrivers = []; // Lista para evitar repeticiones en la misma racha

// Temporizador
let timeLeft = 15.0;
let timerInterval = null;

// Pistas
let hintsUsedTotal = 0;
const MAX_HINTS = 3;
let matchupHints = [false, false, false];

// ==========================================================================
// REFERENCIAS DOM
// ==========================================================================
const elStreak = document.getElementById("current-streak");
const elBest = document.getElementById("best-streak");
const elHintsLeft = document.getElementById("hints-left");
const startScreen = document.getElementById("start-screen");
const gameArea = document.getElementById("game-area");
const btnStart = document.getElementById("btn-start");
const btnHint = document.getElementById("btn-hint");
const hintsList = document.getElementById("hints-list");
const hintsBox = document.getElementById("hints-box");
const gpBadge = document.getElementById("gp-badge");
const gpQuestion = document.getElementById("gp-question");

// Piloto 0 (Rey)
const d0Card = document.getElementById("card-0");
const d0Name = document.getElementById("d0-name");
const d0Team = document.getElementById("d0-team");
const d0Nat = document.getElementById("d0-nat");
const d0Img = document.getElementById("d0-img");
const d0Init = document.getElementById("d0-initial");
const d0Wins = document.getElementById("d0-wins");
const d0Dot = document.getElementById("d0-team-dot");
const d0Role = document.getElementById("d0-role");

// Piloto 1 (Challenger)
const d1Card = document.getElementById("card-1");
const d1Name = document.getElementById("d1-name");
const d1Team = document.getElementById("d1-team");
const d1Nat = document.getElementById("d1-nat");
const d1Img = document.getElementById("d1-img");
const d1Init = document.getElementById("d1-initial");
const d1Wins = document.getElementById("d1-wins");
const d1Dot = document.getElementById("d1-team-dot");
const d1Role = document.getElementById("d1-role");

// Canvas HUD
const canvas = document.getElementById("hudCanvas");
const ctx = canvas.getContext("2d");

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("dueloF1_bestStreak");
  if (stored) {
    bestStreak = parseInt(stored, 10);
    elBest.textContent = bestStreak;
  }
  btnStart.addEventListener("click", startGame);
  btnHint.addEventListener("click", useHint);
  drawHUD(15.0);
});

// ==========================================================================
// INICIO DE JUEGO
// ==========================================================================
function startGame() {
  currentStreak = 0;
  elStreak.textContent = 0;
  hintsUsedTotal = 0;
  elHintsLeft.textContent = MAX_HINTS;
  btnHint.disabled = false;

  seenDrivers = [];

  // Elegir rey inicial de forma aleatoria
  const kingIdx = Math.floor(Math.random() * driversDb.length);
  currentKing = driversDb[kingIdx];
  seenDrivers.push(currentKing.name);

  // Elegir retador inicial que no sea el rey
  currentChallenger = getNewChallenger();
  seenDrivers.push(currentChallenger.name);

  startScreen.style.display = "none";
  gameArea.style.display = "block";

  loadMatchup();
}

function getNewChallenger() {
  // Filtrar los pilotos que no se han visto aún
  let available = driversDb.filter(d => !seenDrivers.includes(d.name));
  
  // Si nos quedamos sin pilotos, limpiamos la lista de vistos (excepto al rey actual)
  if (available.length === 0) {
    seenDrivers = [currentKing.name];
    available = driversDb.filter(d => d.name !== currentKing.name);
  }

  const pick = Math.floor(Math.random() * available.length);
  return available[pick];
}

// ==========================================================================
// CARGAR ENFRENTAMIENTO
// ==========================================================================
function loadMatchup() {
  matchupHints = [false, false, false];

  // Limpiar pistas
  hintsBox.style.display = "none";
  hintsList.innerHTML = "";
  btnHint.disabled = (hintsUsedTotal >= MAX_HINTS);

  // Actualizar roles en pantalla
  if (d0Role) d0Role.textContent = `REY (Racha: ${currentStreak})`;
  if (d1Role) d1Role.textContent = "DESAFIANTE";

  // Cargar datos a los elementos DOM
  loadDriver(0, currentKing);
  loadDriver(1, currentChallenger);

  // Iniciar timer
  timeLeft = 15.0;
  gameActive = true;
  drawHUD(15.0);
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(tick, 100);
}

function loadDriver(index, data) {
  const isD0 = index === 0;
  const img = isD0 ? d0Img : d1Img;
  const init = isD0 ? d0Init : d1Init;
  const name = isD0 ? d0Name : d1Name;
  const team = isD0 ? d0Team : d1Team;
  const nat = isD0 ? d0Nat : d1Nat;
  const dot = isD0 ? d0Dot : d1Dot;
  const wins = isD0 ? d0Wins : d1Wins;

  name.textContent = data.name;
  team.textContent = data.team;
  nat.textContent = data.nationality;
  dot.style.background = data.color || "var(--red)";

  // Reiniciar número a "?"
  wins.textContent = "?";
  wins.style.color = "";

  // Imagen con fallback a inicial de texto
  img.style.display = "block";
  init.style.display = "none";
  init.textContent = data.name.charAt(0);
  img.src = data.image;
  img.onerror = () => {
    img.style.display = "none";
    init.style.display = "flex";
  };
}

// ==========================================================================
// TEMPORIZADOR
// ==========================================================================
function tick() {
  if (!gameActive) return;
  timeLeft -= 0.1;
  if (timeLeft <= 0) {
    timeLeft = 0;
    drawHUD(0);
    clearInterval(timerInterval);
    onTimeout();
  } else {
    drawHUD(timeLeft);
  }
}

// ==========================================================================
// SELECCIÓN DE PILOTO
// ==========================================================================
function selectDriver(index) {
  if (!gameActive) return;
  gameActive = false;
  clearInterval(timerInterval);

  // Determinar ganador
  const wins0 = currentKing.victories;
  const wins1 = currentChallenger.victories;
  
  let correctIndex = -1;
  if (wins0 > wins1) {
    correctIndex = 0;
  } else if (wins1 > wins0) {
    correctIndex = 1;
  } else {
    // Si hay empate de victorias, cualquiera de las dos respuestas es válida
    correctIndex = index;
  }

  const isCorrect = index === correctIndex;

  // Animar conteo de victorias en pantalla
  animateValue(d0Wins, 0, wins0, 500);
  animateValue(d1Wins, 0, wins1, 500);

  setTimeout(() => {
    // Colorear el número ganador en verde y el perdedor en rojo
    if (wins0 > wins1) {
      d0Wins.style.color = "var(--green)";
      d1Wins.style.color = "var(--red)";
    } else if (wins1 > wins0) {
      d0Wins.style.color = "var(--red)";
      d1Wins.style.color = "var(--green)";
    } else {
      d0Wins.style.color = "var(--green)";
      d1Wins.style.color = "var(--green)";
    }

    if (isCorrect) {
      currentStreak++;
      elStreak.textContent = currentStreak;
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        elBest.textContent = bestStreak;
        localStorage.setItem("dueloF1_bestStreak", bestStreak);
      }

      // El ganador es ahora el rey
      if (correctIndex === 1) {
        currentKing = currentChallenger;
      }
      
      // Obtener un nuevo retador
      currentChallenger = getNewChallenger();
      seenDrivers.push(currentChallenger.name);

      Swal.fire({
        title: "🏁 ¡CORRECTO!",
        html: `
          <div class="swal-f1-text">
            <p style="color:var(--green);font-weight:bold;font-size:18px;margin-bottom:14px;">
              ¡Excelente predicción!
            </p>
            <p><strong>${currentKing.name}</strong> tiene más victorias en Grandes Premios.</p>
            <p style="margin-top:10px;">${currentKing.name} (${currentKing.victories} victorias) vs ${correctIndex === 1 ? driversDb.find(d => d.name === d0Name.textContent).name : currentChallenger.name} (${correctIndex === 1 ? driversDb.find(d => d.name === d0Name.textContent).victories : currentKing.victories} victorias)</p>
            <div style="background:rgba(255,255,255,.06);padding:10px;border-radius:6px;margin-top:14px;">
              Racha actual: <span style="color:var(--green);font-weight:bold;">${currentStreak}</span>
            </div>
          </div>
        `,
        icon: "success",
        background: "#111422",
        color: "#fff3e0",
        confirmButtonText: "SIGUIENTE DUELO",
        confirmButtonColor: "#ff3c38",
        customClass: { popup: "swal-f1-custom" }
      }).then(() => loadMatchup());

    } else {
      const loserName = index === 0 ? currentKing.name : currentChallenger.name;
      const winnerName = index === 0 ? currentChallenger.name : currentKing.name;
      const winnerWins = index === 0 ? wins1 : wins0;
      const loserWins = index === 0 ? wins0 : wins1;

      Swal.fire({
        title: "🚨 PERDISTE EL TRONO",
        html: `
          <div class="swal-f1-text">
            <p style="color:var(--red);font-weight:bold;font-size:18px;margin-bottom:14px;">
              ¡Has fallado! El rey ha sido destronado.
            </p>
            <p><strong>${winnerName}</strong> tiene más victorias que <strong>${loserName}</strong> (${winnerWins} vs ${loserWins}).</p>
            <div style="background:rgba(255,255,255,.06);padding:10px;border-radius:6px;margin-top:14px;">
              Racha conseguida: <span style="color:var(--yellow);font-weight:bold;">${currentStreak}</span>
            </div>
          </div>
        `,
        icon: "error",
        background: "#111422",
        color: "#fff3e0",
        confirmButtonText: "REINTENTAR 🔄",
        confirmButtonColor: "#ffd166",
        customClass: { popup: "swal-f1-custom" }
      }).then(() => resetGame());
    }
  }, 600);
}

// ==========================================================================
// FIN DE TIEMPO
// ==========================================================================
function onTimeout() {
  gameActive = false;
  const wins0 = currentKing.victories;
  const wins1 = currentChallenger.victories;
  
  // Revelar números inmediatamente
  d0Wins.textContent = wins0;
  d1Wins.textContent = wins1;

  const winner = wins0 >= wins1 ? currentKing : currentChallenger;

  Swal.fire({
    title: "💥 ¡TIEMPO!",
    html: `
      <div class="swal-f1-text">
        <p style="color:var(--red);font-weight:bold;font-size:18px;margin-bottom:14px;">
          ¡Se agotó el tiempo de respuesta!
        </p>
        <p>El piloto con más victorias era: <strong>${winner.name}</strong> (${winner.victories} victorias).</p>
        <div style="background:rgba(255,255,255,.06);padding:10px;border-radius:6px;margin-top:14px;">
          Racha final: <span style="color:var(--yellow);font-weight:bold;">${currentStreak}</span>
        </div>
      </div>
    `,
    icon: "warning",
    background: "#111422",
    color: "#fff3e0",
    confirmButtonText: "REINTENTAR 🔄",
    confirmButtonColor: "#ffd166",
    customClass: { popup: "swal-f1-custom" }
  }).then(() => resetGame());
}

// ==========================================================================
// PISTAS (GENERADAS DINÁMICAMENTE)
// ==========================================================================
function useHint() {
  if (!gameActive || hintsUsedTotal >= MAX_HINTS) return;

  const wins0 = currentKing.victories;
  const wins1 = currentChallenger.victories;
  const winner = wins0 >= wins1 ? currentKing : currentChallenger;

  // Encontrar la primera pista no mostrada
  let nextIdx = matchupHints.findIndex(shown => !shown);
  if (nextIdx === -1) return;

  matchupHints[nextIdx] = true;
  hintsUsedTotal++;
  elHintsLeft.textContent = MAX_HINTS - hintsUsedTotal;

  hintsBox.style.display = "block";

  // Crear pista basada en el índice
  let hintText = "";
  if (nextIdx === 0) {
    hintText = `El piloto con más victorias nació bajo la bandera: ${winner.nationality}`;
  } else if (nextIdx === 1) {
    hintText = `Consiguió triunfos históricos pilotando para el equipo: ${winner.team}`;
  } else {
    hintText = `El ganador tiene un total de ${winner.victories > 30 ? "más de 30" : "30 o menos"} victorias en Grandes Premios.`;
  }

  const li = document.createElement("li");
  li.textContent = hintText;
  hintsList.appendChild(li);

  if (hintsUsedTotal >= MAX_HINTS) {
    btnHint.disabled = true;
  }
}

// ==========================================================================
// RESET DE JUEGO
// ==========================================================================
function resetGame() {
  gameActive = false;
  if (timerInterval) clearInterval(timerInterval);

  currentStreak = 0;
  elStreak.textContent = 0;

  gameArea.style.display = "none";
  startScreen.style.display = "flex";

  drawHUD(15.0);
}

// ==========================================================================
// ANIMACIÓN DE CONTEO
// ==========================================================================
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end;
    }
  };
  window.requestAnimationFrame(step);
}

// ==========================================================================
// HUD CANVAS — TABLERO RETRO F1
// ==========================================================================
function drawHUD(time) {
  const W = canvas.width;
  const H = canvas.height;
  const pct = time / 15.0;

  // Fondo
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, W, H);

  // ── MARCHA (izquierda) ──────────────────────────────────────────────────
  const gear = Math.max(1, Math.min(8, Math.ceil(pct * 8)));

  ctx.strokeStyle = "#2a2d4a";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(12, 8, 56, 64);

  ctx.fillStyle = "#0b0c18";
  ctx.fillRect(13, 9, 54, 62);

  ctx.fillStyle = "#4a4e70";
  ctx.font = "7px monospace";
  ctx.fillText("GEAR", 27, 22);

  ctx.fillStyle = (time < 4.0) ? "#ff3c38" : "#ffd166";
  ctx.font = "bold 30px monospace";
  ctx.fillText(gear, 30, 57);

  // ── BARRA RPM (centro) ───────────────────────────────────────────────────
  const totalLights = 12;
  const activeLights = Math.ceil(pct * totalLights);
  const startX = 80;
  const barW = 16;
  const barH = 22;
  const gap = 3;

  ctx.fillStyle = "#4a4e70";
  ctx.font = "7px monospace";
  ctx.fillText("RPM x1000", startX, 20);

  for (let i = 0; i < totalLights; i++) {
    const x = startX + i * (barW + gap);
    let color = "#181926";
    if (i < activeLights) {
      if (i < 5) color = "#00ff9f";
      else if (i < 9) color = "#ffd166";
      else color = "#ff3c38";
    }
    ctx.fillStyle = color;
    ctx.fillRect(x, 28, barW, barH);
    ctx.strokeStyle = "rgba(0,0,0,.5)";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, 28, barW, barH);
  }

  // ── VELOCIDAD ────────────────────────────────────────────────────────────
  const speed = Math.floor(pct * 340);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px monospace";
  ctx.fillText(`${String(speed).padStart(3, "0")} KM/H`, startX, 64);

  // ── TIEMPO ───────────────────────────────────────────────────────────────
  ctx.font = "bold 14px monospace";
  if (time < 4.0) {
    ctx.fillStyle = (Math.floor(time * 5) % 2 === 0) ? "#ff3c38" : "#222222";
  } else {
    ctx.fillStyle = "#00ff9f";
  }
  ctx.fillText(`T: ${time.toFixed(1)}s`, W - 82, 64);
}

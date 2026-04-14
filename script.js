const display = document.getElementById("display");
const millisecondsDisplay = document.getElementById("milliseconds");
const toggleBtn = document.getElementById("toggleBtn");
const clearBtn = document.getElementById("clearBtn");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

/* FORMATO */
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const msPart = ms % 1000;

  return {
    main:
      String(h).padStart(2, "0") + ":" +
      String(m).padStart(2, "0") + ":" +
      String(s).padStart(2, "0"),
    ms: String(msPart).padStart(3, "0")
  };
}

/* ACTUALIZA DISPLAY */
function updateDisplay() {
  const time = isRunning
    ? elapsedTime + (Date.now() - startTime)
    : elapsedTime;

  const formatted = formatTime(time);

  display.textContent = formatted.main;
  millisecondsDisplay.textContent = formatted.ms;
}

/* BOTÓN DINÁMICO */
function updateButton() {
  toggleBtn.classList.remove("start", "pause");

  if (isRunning) {
    toggleBtn.textContent = "Pause";
    toggleBtn.classList.add("pause");
    return;
  }

  if (elapsedTime > 0) {
    toggleBtn.textContent = "Continue";
    toggleBtn.classList.add("pause");
    return;
  }

  toggleBtn.textContent = "Start";
  toggleBtn.classList.add("start");
}

/* START */
function startTimer() {
  startTime = Date.now();
  isRunning = true;

  clearInterval(timerInterval);
  timerInterval = setInterval(updateDisplay, 10);

  updateButton();
}

/* PAUSE */
function pauseTimer() {
  elapsedTime += Date.now() - startTime;
  isRunning = false;

  clearInterval(timerInterval);
  updateDisplay();
  updateButton();
}

/* TOGGLE */
function toggleTimer() {
  isRunning ? pauseTimer() : startTimer();
}

/* CLEAR */
function clearTimer() {
  clearInterval(timerInterval);

  startTime = 0;
  elapsedTime = 0;
  isRunning = false;

  updateDisplay();
  updateButton();
}

/* EVENTOS */
toggleBtn.addEventListener("click", toggleTimer);
clearBtn.addEventListener("click", clearTimer);

/* INIT */
updateDisplay();
updateButton();
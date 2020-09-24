///////// TIMER //////////

// * DOM VARIABLES * //

var timer = document.querySelector(".timer");
var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var reset = document.querySelector(".reset");
var darkMode = document.querySelectorAll(".dark-mode-active");
var darkModeBtn = document.querySelector(".dark-mode-btn");

/////////////////////////

// * FUNCTIONS * //

// Resetable variables //
var timerID = null;
var counter = 0;

// * Start * //

function startTimer() {
  // * Play * //

  if (timerID === null) {
    timerID = setInterval(() => {
      counter++;
      timer.textContent = counter;
    }, 1000);
  }

  // Button effects //
  start.classList.toggle("btn-on");
  timer.classList.add("glow");
  reset.classList.remove("btn-on");
  pause.classList.remove("btn-on");
}

// * Pause * //

function pauseTimer() {
  clearInterval(timerID);
  timerID = null;

  // Button effects //
  pause.classList.toggle("btn-on");
  reset.classList.remove("btn-on");
  start.classList.remove("btn-on");
}

// * Reset * //

function resetTimer() {
  // Reset UI //
  timer.textContent = 0;

  // Reset Counter //
  counter = 0;

  // Reset setInterval ID //
  clearInterval(timerID);
  timerID = null;

  // Button effects //
  reset.classList.toggle("btn-on");
  start.classList.remove("btn-on");
  pause.classList.remove("btn-on");
  timer.classList.remove("glow");
}

// * Dark mode * //

function darkModeSwitcher() {
  // Loop over array //
  darkMode.forEach(function (darkModeBtn) {
    darkModeBtn.classList.toggle("dark-mode");
  });

  resetTimer();
  reset.classList.remove("btn-on");
}

/////////////////////////

// * EVENT LISTENERS * //

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
darkModeBtn.addEventListener("click", darkModeSwitcher);

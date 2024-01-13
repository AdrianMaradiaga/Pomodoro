const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");

let timer;
let minutes = 25;
let seconds = 0;

const startTimer = () => {
  timer = setInterval(updateTimer, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  updateDisplay();
};

const updateTimer = () => {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert("25 minutes pomodoro has ended");
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }
};

const updateDisplay = () => {
  document.getElementById("minutes").innerHTML = padTime(minutes);
  document.getElementById("seconds").innerHTML = padTime(seconds);
};

const padTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

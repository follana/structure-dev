let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let clickstop = true;

const demarrer = () => {
  if (clickstop) {
    clickstop = false;
    defilerTemps();
  }
};

const stop = () => {
  if (!clickstop) {
    clickstop = true;
    clearTimeout(timeout);
  }
};

const defilerTemps = () => {
  if (clickstop) return;

  secondes = parseInt(secondes);
  minutes = parseInt(minutes);
  heures = parseInt(heures);

  secondes++;

  if (secondes == 60) {
    minutes++;
    secondes = 0;
  }

  if (minutes == 60) {
    heures++;
    minutes = 0;
  }

  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (heures < 10) {
    heures = "0" + heures;
  }

  chrono.textContent =`${heures}:${minutes}:${secondes}`;

  timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
  chrono.textContent = "00:00:00";
  clickstop = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

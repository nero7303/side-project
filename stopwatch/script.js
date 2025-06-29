
let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendTens = document.getElementById('tenMillis');
const appendSeconds = document.getElementById('seconds');
const appendMinutes = document.getElementById('minutes');
const buttonStart = document.getElementById('bt_start');
const buttonStop = document.getElementById('bt_stop');
const buttonRest = document.getElementById('bt_reset');

let intervalid;

buttonStart.onclick = function () {
    clearInterval(intervalid);
 intervalid = setInterval(operateTimer,10);
};

buttonStop.onclick = function () {
  clearInterval(intervalid);
};
buttonRest.onclick = function () {
   clearInterval(intervalid);
   tenMillis = 0;
   seconds = 0;
   minutes = 0;
   appendTens.textContent ="00";
    appendSeconds.textContent ="00";
     appendMinutes.textContent ="00";
};


function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis;
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
    tenMillis = 0;
    appendTens.textContent = "00";
  };
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  };
};
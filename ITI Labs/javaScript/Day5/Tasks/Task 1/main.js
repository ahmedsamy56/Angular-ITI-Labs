var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer ;

function updateTime() {
    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds + '<span class="ms">' + milliseconds + '</span>';
}

function stopwatch() {
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateTime();
}   

function start() {
  timer = setInterval(stopwatch, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTime();
}

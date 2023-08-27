let timerInterval;
  let startTime;
  let pausedTime = 0;
  let isRunning = false;

  const minutesDisplay = document.getElementById('minutes');
  const secondsDisplay = document.getElementById('seconds');
  const millisecondsDisplay = document.getElementById('milliseconds');
  const startButton = document.getElementById('startButton');
  const pauseButton = document.getElementById('pauseButton');

  //startButton.addEventListener('click', startTimer);
  //pauseButton.addEventListener('click', pauseTimer);

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startTime = Date.now() - pausedTime;
      timerInterval = setInterval(updateTimer, 10);
    }
  }

  function pauseTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timerInterval);
      pausedTime = Date.now() - startTime;
    }
  }

  function updateTimer() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;

    minutesDisplay.textContent = padTime(minutes, 2);
    secondsDisplay.textContent = padTime(seconds, 2);
    millisecondsDisplay.textContent = padTime(milliseconds, 3);
  }

  function padTime(value, width) {
    return value.toString().padStart(width, '0');
  }
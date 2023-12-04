/* var countdownTimer;

function startGame() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  var timeLeft = 10;

  document.getElementById("navcontainer").innerText =
    timeLeft + " Seconds left ";

  function updateTimer() {
    if (timeLeft <= 0) {
      document.getElementById("startButton").innerText = "Time's up!";
    } else {
      document.getElementById("navcontainer").innerText =
        timeLeft + " Seconds left ";

      timeLeft--;
      countdownTimer = setTimeout(updateTimer, 1000);
    }
  }

  countdownTimer = setTimeout(updateTimer, 1000);
}
 */

var countdownTimer;

function startGame() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  var timeLeft = 10;

  document.getElementById("navcontainer").innerText =
    timeLeft + " Seconds left ";

  function updateTimer() {
    if (timeLeft <= 0) {
      document.getElementById("startButton").innerText = "Time's up!";
    } else {
      document.getElementById("navcontainer").innerText =
        timeLeft + " Seconds left ";

      timeLeft--;
      countdownTimer = setTimeout(updateTimer, 1000);
    }
  }

  countdownTimer = setTimeout(updateTimer, 1000);
}

function moveHello() {
  var helloElement = document.querySelector(".divs");
  var gameElement = document.getElementById("game");

  helloElement.style.position = "absolute";
  helloElement.style.left =
    Math.random() * (gameElement.offsetWidth - helloElement.offsetWidth) + "px";
  helloElement.style.top =
    Math.random() * (gameElement.offsetHeight - helloElement.offsetHeight) +
    "px";
}

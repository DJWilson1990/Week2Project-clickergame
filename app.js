console.log("Welcome");

const bonusPointTimer = 10000;
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const scoreElement = document.getElementById("totalsmiles");

btn.addEventListener("click", incrementScore);
resetBtn.addEventListener("click", resetScore);

let score = Number(localStorage.getItem("myScore"));
updateDisplay();

setInterval(function () {
  incrementScore();
}, bonusPointTimer);

function incrementScore() {
  score += 1;
  updateDisplay();
  localStorage.setItem("myScore", score);
}

function updateDisplay() {
  scoreElement.innerText = score;
  console.log("😁", score);
}

function resetScore() {
  score = 0;
  updateDisplay();
  localStorage.setItem("myScore", score);
}

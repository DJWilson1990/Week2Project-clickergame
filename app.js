console.log("Welcome");

const bonusPointTimer = 10000; //setting timer duration in ms
const btn = document.getElementById("btn"); //get reference to btn
const resetBtn = document.getElementById("resetBtn"); //get reference to reset btn
const scoreElement = document.getElementById("totalsmiles"); //get reference to element where score is displayed on html
const upgradeTallyElement = document.getElementById("upgrade-tally");
const buyBtn = document.getElementById("buyBtn"); ///////
const upgradeCost = 10; ///////
//let gameState;

btn.addEventListener("click", incrementScore); //adding the listener for click event and the function it will call
resetBtn.addEventListener("click", resetScore); //same as above but for reset button
buyBtn.addEventListener("click", buyUpgrade); ////////
let gameState = {
  score: 0,
  upgradeLevel: 0,
};

loadGameState();

updateDisplay(); //calling function to update screen

setInterval(function () {
  //start timer to increment score at preset period set on line 3
  incrementScore(); //increment score
}, bonusPointTimer);

function incrementScore() {
  //function increments score by 1 and then updates display and saves to local storage
  gameState.score = gameState.score + gameState.upgradeLevel + 1;

  updateDisplay();
  saveGameState();
}

function updateDisplay() {
  //function to update display
  scoreElement.innerText = gameState.score;
  upgradeTallyElement.innerText = gameState.upgradeLevel;
  console.log("😁", gameState.score); //writing to console log
}

function resetScore() {
  //function to reset score back to 0 and updates display
  gameState.score = 0;
  gameState.upgradeLevel = 0;
  updateDisplay();
  saveGameState(); //saves to local storage
}

function buyUpgrade() {
  if (gameState.score >= upgradeCost) {
    //////if score is equal to or bigger than 10, upgrade can be bought and 10 points deducted
    gameState.score = gameState.score - upgradeCost;
    gameState.upgradeLevel = gameState.upgradeLevel + 1;
    updateDisplay();
    saveGameState();
  }
}

function saveGameState() {
  const stringified = JSON.stringify(gameState);
  localStorage.setItem("gameState", stringified);
}

function loadGameState() {
  const gameStateString = localStorage.getItem("gameState");
  if (gameStateString != null) {
    gameState = JSON.parse(gameStateString);
  }
}

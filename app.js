console.log("Welcome");

const bonusPointTimer = 10000; //setting timer duration in ms
const btn = document.getElementById("btn"); //get reference to btn
const resetBtn = document.getElementById("resetBtn"); //get reference to reset btn
const scoreElement = document.getElementById("totalsmiles"); //get reference to element where score is displayed on html
const buyBtn = document.getElementById("buyBtn"); ///////
const upgradeCost = -10; ///////
let scoreIncrease = 1; ///////

btn.addEventListener("click", incrementScore); //adding the listener for click event and the function it will call
resetBtn.addEventListener("click", resetScore); //same as above but for reset button
buyBtn.addEventListener("click", decrementScore); ////////

let score = Number(localStorage.getItem("myScore")); //getting stored score from local storage and covert to number
updateDisplay(); //calling function to update screen

setInterval(function () {
  //start timer to increment score at preset period set on line 3
  incrementScore(); //increment score
}, bonusPointTimer);

function incrementScore() {
  //function increments score by 1 and then updates display and saves to local storage
  score += 1;
  updateDisplay();
  localStorage.setItem("myScore", score);
}

function updateDisplay() {
  //function to update display
  scoreElement.innerText = score;
  console.log("😁", score); //writing to console log
}

function resetScore() {
  //function to reset score back to 0 and updates display
  score = 0;
  updateDisplay();
  localStorage.setItem("myScore", score); //saves to local storage
}

function decrementScore() {
  if (score >= 10) {
    //////if score is equal to or bigger than 10, upgrade can be bought and 10 points deducted
    score = score + upgradeCost;
  } else {
    ////// if not score will stay the same
    score = score;
  }

  updateDisplay();
  localStorage.setItem("myScore", score);
}

// function scoreIncrease() {
//   score = incrementScore + scoreIncrease;
// }
//////////////////

// function upgrade() {
//   let scoreIncrease;
//   incrementScore = score + scoreElement;
// }
////////////////

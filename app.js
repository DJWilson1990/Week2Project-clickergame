console.log("Welcome");

const bonusPointTimer = 10000; //setting timer duration in ms
const btn = document.getElementById("btn"); //get reference to btn
const resetBtn = document.getElementById("resetBtn"); //get reference to reset btn
const scoreElement = document.getElementById("totalsmiles"); //get reference to element where score is displayed on html

btn.addEventListener("click", incrementScore); //adding the listener for click event and the function it will call
resetBtn.addEventListener("click", resetScore); //same as above but for reset button

let score = Number(localStorage.getItem("myScore")); //getting stored scored form local storage and covert to number
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

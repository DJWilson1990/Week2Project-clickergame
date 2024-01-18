console.log("Welcome");

const btn = document.getElementById("btn");
const rbtn = document.getElementById("rbtn");
let totalsmiles = document.getElementById("totalsmiles");

let smiles = 0;
setInterval(function () {
  smiles = smiles + 1;
  totalsmiles.innerText = smiles; //this line links smile count to browser div
  console.log("😁", smiles);
}, 5000);

btn.addEventListener("click", function () {
  smiles = smiles + 1;
  totalsmiles.innerText = smiles;
});

let click = 0;
function score() {
  click += 1;
  btn.innerText = click;
}

rbtn.addEventListener("click", function () {
  smiles = 0;
  totalsmiles.innerText = smiles;
});

let reset = 0;
function score() {
  click = 0;
  rbtn.innerText = click;
}

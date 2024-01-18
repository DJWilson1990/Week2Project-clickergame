console.log("Welcome");

let totalsmiles = document.getElementById("totalsmiles");

let smiles = 0;
setInterval(function () {
  smiles = smiles + 1;
  totalsmiles.innerText = smiles; //this line links smile count to browser div
  console.log("😁", smiles);
}, 1000);

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  smiles = smiles + 1;
  totalsmiles.innerText = smiles;
});

let click = 0;
function score() {
  click += 1;
  btn.innerText = click;
}

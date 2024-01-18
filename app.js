console.log("Welcome");

let totalsmiles = document.getElementById("totalsmiles");

let smiles = 0;
setInterval(function () {
  smiles = smiles + 1;
  totalsmiles.innerText = smiles;
  console.log("😁", smiles);
}, 1000);

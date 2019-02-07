
(function() {


var score = 0;
var multiplicateur = 1;

document.getElementById("clic").addEventListener("click", function() {
  score += multiplicateur ;
  document.getElementById("affichage").innerHTML = score;


  })

  document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {
    multiplicateur ++;
    console.log(multiplicateur);

})




})();

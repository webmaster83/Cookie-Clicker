
(function() {


var score = 0;
var multiplicateur = 1;
var autoclick = setInterval(function(){
  if (score >= 10) {
    score += multiplicateur ;
    document.getElementById("affichage").innerHTML = score;
  }
}, 1000);




document.getElementById("clic").addEventListener("click", function() {
  score += multiplicateur ;
  document.getElementById("affichage").innerHTML = score;
    /*if (score >=10){
    var myVar = setInterval(myTimer, 1000);

function myTimer() {
score += multiplicateur ;

}*/
//})

  })

  document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {
    if (score - 10 * multiplicateur < 0){
      alert("Tu n'as pas assez de crédit!");
    }
    else {
      score = score - 10 * (multiplicateur);
      document.getElementById("affichage").innerHTML = score;
      multiplicateur ++;
      console.log(multiplicateur);
      document.getElementById("multiplier").innerHTML = "multiplier X" + multiplicateur + " Coût prochain achat: " + 10 * multiplicateur;
}
})

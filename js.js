(function() {

var score = 0;

var multiplicateur = 1;

var conteurAutoclic = 0;

document.getElementById("autoclic").disabled = true;
document.getElementById("bonus").disabled = true;

document.getElementById("autoclic").addEventListener("click", function(){

conteurAutoclic ++;
score -= 5;
console.log(conteurAutoclic);

var autoclick = setInterval(function(){
if (score >= 10) {
score += multiplicateur ;
document.getElementById("affichage").innerHTML = score;
}
}, 1000);

document.getElementById("autoclic").disabled = true;
document.getElementById("affichage").innerHTML = score;
}, {once : true});

document.getElementById("clic").addEventListener("click", function() {
score += multiplicateur ;
if (score>= 5){
if (conteurAutoclic<1) {
document.getElementById("autoclic").disabled = false;
}
else { document.getElementById("autoclic").disabled = true;
}
}

if (score>=10){
document.getElementById("bonus").disabled = false;

document.getElementById("bonus").addEventListener("click", function() {
score -= 10;
document.getElementById("bonus").disabled = true;
document.getElementById("affichage").innerHTML = score;

}
)
}

document.getElementById("affichage").innerHTML = score;

})

document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {
if (score - score * multiplicateur < 0){
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

})();
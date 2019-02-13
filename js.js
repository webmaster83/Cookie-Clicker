(function() {

    var score = 0;
    var multiplicateur = 1;
    var autoClic = 0;
    var prix = 50;
    var timeleft = 30;


//Au chargement de la page, on vérifie si les conditions pour activer les boutons sont remplies
    window.onload = function() {
      checkMult();
      checkAuto();
      checkBonus();

    };


//Vérifie si on a les conditions nécessaires pour activer le bouton MULTIPLIER
function checkMult (){
  if (score - prix>= 0) {
    document.getElementById("multiplier").disabled = false;
  }
  else{
    document.getElementById("multiplier").disabled = true;
      document.getElementById("multiplier").onmouseover.style.backgroundColor ="red";

  }
};

//Vérifie si on a les conditions nécessaires pour activer le bouton AUTOCLIC
function checkAuto (){
  if (score >= 500 && autoClic===0){
    document.getElementById("autoclic").disabled = false;
  }
  else{
    document.getElementById("autoclic").disabled = true;
  }
}

//Vérifie si on a les conditions nécessaires pour activer le bouton BONUS
function checkBonus (){
  if (score >= 5000 && timeleft>=30){
    document.getElementById("bonus").disabled = false;
}else{
  document.getElementById("bonus").disabled = true;
}
}

function  onmouseover() {

  document.getElementById("multiplier").style.backgroundColor = "red";}
/*
function mouseOver () {

  document.getElementById("multiplier").style.backgroundColor = "red";
  document.getElementById("multiplier").innerHTML = "Coût " + prix;
}
}

document.getElementById("multiplier").onmouseover =function() {mouseOver()};





function mouseOut() {
  document.getElementById("multiplier").style.backgroundColor = "grey";
  document.getElementById("multiplier").innerHTML = "multiplier";
}

document.getElementById("multiplier").onmouseout = function() {mouseOut()};


*/

//COOKIE
  document.getElementById("clic").addEventListener("click", function() {
      score += multiplicateur ;
      document.getElementById("affichage").innerHTML = parseInt(score);
      checkBonus();
      checkAuto();
      checkMult();
    })


//MULTIPLIER
document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {

  document.getElementById("multiplier").disabled = true;
   score = score - prix ;
   document.getElementById("affichage").innerHTML = parseInt(score);
   multiplicateur ++;
   prix = prix * 2;
   document.getElementById("multiplier").innerHTML =  "multiplier X" + multiplicateur;
   checkBonus();
   checkAuto();
   document.getElementById("multiplier").style.lineHeight = "2.2";
   document.getElementById("multiplier").setAttribute("title", " Coût prochain achat: " + prix);

});





//AUTOCLIC
document.getElementById("autoclic").addEventListener("click", function(){

autoClic ++;
score -= 500;
console.log(autoClic);

 setInterval(function(){
  if (score >= 200) {
    score += multiplicateur ;
    document.getElementById("affichage").innerHTML = parseInt(score);
    checkBonus();
    checkMult();

  }
}, 1000);

checkBonus();
checkMult();

document.getElementById("autoclic").disabled = true;
document.getElementById("affichage").innerHTML = parseInt(score);
}, {once : true});



//BONUS
document.getElementById("bonus").addEventListener("click", function() {

  document.getElementById("bonus").disabled = true;
  score = score - 5000;

  var timer = setInterval(function(){
    document.getElementById('bonus').innerHTML= "BONUS - " + timeleft;
    timeleft -= 1;
    checkBonus();

//vérifie si les 30 secondes se sont écoulées
//et fait en sorte que tout revienne à la "normalité"
  if (timeleft == 0) {
    clearInterval(timer);
    document.getElementById('bonus').innerHTML= "BONUS";
    multiplicateur = multiplicateur/2;
    timeleft = 30;
    checkBonus();
    checkMult();
  }
}, 1000);


multiplicateur = multiplicateur * 2;

checkAuto();
checkMult();

document.getElementById("affichage").innerHTML = parseInt(score);



  }
  );




    })();

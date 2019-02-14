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

    function playSound() {

      var sound = document.getElementById("click");
      sound.play();
    }

    function playSound2() {
        var sound = document.getElementById("bonuss");
        sound.play();
    }

    function playSound3() {
      var sound = document.getElementById("denied");
      sound.play();
    }



//Vérifie si on a les conditions nécessaires pour activer le bouton MULTIPLIER
function checkMult (){
  if (score - prix>= 0) {

    document.getElementById("multiplier").disabled = false;
    document.getElementById("multiplier").style.backgroundColor = "green";

  }
  else{

    document.getElementById("multiplier").disabled = true;
    document.getElementById("multiplier").onmouseover = function() {mouseOverMult()};
    document.getElementById("multiplier").onmouseout = function() {mouseOutMult()};


  }
};

//Vérifie si on a les conditions nécessaires pour activer le bouton AUTOCLIC
function checkAuto (){
  if (score >= 500 && autoClic===0){
    document.getElementById("autoclic").disabled = false;
    document.getElementById("autoclic").style.backgroundColor = "#039be5";

  }
  else{
    document.getElementById("autoclic").disabled = true;

  }
}

//Vérifie si on a les conditions nécessaires pour activer le bouton BONUS
function checkBonus (){
  if (score >= 5000 && timeleft>=30){
    document.getElementById("bonus").disabled = false;
    document.getElementById("bonus").style.backgroundColor = "#039be5";

}else{
  document.getElementById("bonus").disabled = true;
}
}




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
playSound();
  document.getElementById("multiplier").disabled = true;
   score = score - prix ;
   document.getElementById("affichage").innerHTML = parseInt(score);
   multiplicateur ++;
   prix = prix * 2;
   document.getElementById("multiplier").innerHTML =  "multiplier X" + multiplicateur;
   checkBonus();
   checkAuto();
   document.getElementById("multiplier").style.lineHeight = "2.2";
   //document.getElementById("multiplier").setAttribute("title", " Coût prochain achat: " + prix);

});





//AUTOCLIC
document.getElementById("autoclic").addEventListener("click", function(){

playSound();
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

playSound();
  document.getElementById("bonus").disabled = true;
  score = score - 5000;

  var timer = setInterval(function(){
    document.getElementById('bonus').innerHTML= "BONUS - " + timeleft;
    timeleft -= 1;
    checkBonus();
    playSound2();

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



// Pour MULTIPLIER : Si le bouton n'est pas activé, onMouseOver il devient rouge et affiche le prix

function mouseOverMult() {

  document.getElementById("multiplier").style.backgroundColor = "red" ;
	document.getElementById("multiplier").innerHTML ="Coût " + prix;
  playSound3();



}

function mouseOutMult() {
  document.getElementById("multiplier").style.backgroundColor = "grey";
  document.getElementById("multiplier").innerHTML ="multiplier X " + multiplicateur;
}


// Pour AUTOCLIC : Si le bouton n'est pas activé, onMouseOver il devient rouge et affiche le prix
document.getElementById("autoclic").onmouseover = function() {mouseOverAuto()};
document.getElementById("autoclic").onmouseout = function() {mouseOutAuto()};

function mouseOverAuto() {
if (autoClic>0){

  document.getElementById("autoclic").style.backgroundColor = "red" ;
  document.getElementById("autoclic").innerHTML ="Tu as déjà l'autoclic!";
 }
 else{
   document.getElementById("autoclic").innerHTML ="Coût 500";
   document.getElementById("autoclic").style.backgroundColor = "red" ;
   playSound3();

 }
}

function mouseOutAuto() {
  document.getElementById("autoclic").style.backgroundColor = "grey";
  document.getElementById("autoclic").innerHTML ="Achete autoclic";

}


// Pour BONUS : Si le bouton n'est pas activé, onMouseOver il devient rouge et affiche le prix
document.getElementById("bonus").onmouseover = function() {mouseOverBonus()};
document.getElementById("bonus").onmouseout = function() {mouseOutBonus()};

function mouseOverBonus() {
  document.getElementById("bonus").style.backgroundColor = "red" ;
   document.getElementById("bonus").innerHTML ="Coût: 5000";
   playSound3();


 }

function mouseOutBonus() {
  document.getElementById("bonus").style.backgroundColor = "grey";
  document.getElementById("bonus").innerHTML ="BONUS";

}

})();

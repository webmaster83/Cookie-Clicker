(function() {

    var score = 0;
    var multiplicateur = 1;
    var autoClic = 0;
    var prix = 50;
    var timeleft = 30;


//Au chargement de la page, on vÃ©rifie si les conditions pour activer les boutons sont remplies
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



//VÃ©rifie si on a les conditions nÃ©cessaires pour activer le bouton MULTIPLIER
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

//VÃ©rifie si on a les conditions nÃ©cessaires pour activer le bouton AUTOCLIC
function checkAuto (){
  if (score >= 500 && autoClic===0){
    document.getElementById("autoclic").disabled = false;
    document.getElementById("autoclic").style.backgroundColor = "#039be5";

  }
  else{
    document.getElementById("autoclic").disabled = true;

  }
}

//VÃ©rifie si on a les conditions nÃ©cessaires pour activer le bouton BONUS
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
   //document.getElementById("multiplier").setAttribute("title", " CoÃ»t prochain achat: " + prix);

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

//vÃ©rifie si les 30 secondes se sont Ã©coulÃ©es
//et fait en sorte que tout revienne Ã  la "normalitÃ©"
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



// Pour MULTIPLIER : Si le bouton n'est pas activÃ©, onMouseOver il devient rouge et affiche le prix

function mouseOverMult() {

  document.getElementById("multiplier").style.backgroundColor = "red" ;
	document.getElementById("multiplier").innerHTML ="CoÃ»t " + prix;
  playSound3();



}

function mouseOutMult() {
  document.getElementById("multiplier").style.backgroundColor = "grey";
  document.getElementById("multiplier").innerHTML ="multiplier X " + multiplicateur;
}


// Pour AUTOCLIC : Si le bouton n'est pas activÃ©, onMouseOver il devient rouge et affiche le prix
document.getElementById("autoclic").onmouseover = function() {mouseOverAuto()};
document.getElementById("autoclic").onmouseout = function() {mouseOutAuto()};

function mouseOverAuto() {
if (autoClic>0){

  document.getElementById("autoclic").style.backgroundColor = "red" ;
  document.getElementById("autoclic").innerHTML ="Tu as dÃ©jÃ  l'autoclic!";
 }
 else{
   document.getElementById("autoclic").innerHTML ="CoÃ»t 500";
   document.getElementById("autoclic").style.backgroundColor = "red" ;
   playSound3();

 }
}

function mouseOutAuto() {
  document.getElementById("autoclic").style.backgroundColor = "grey";
  document.getElementById("autoclic").innerHTML ="Achete autoclic";

}


// Pour BONUS : Si le bouton n'est pas activÃ©, onMouseOver il devient rouge et affiche le prix
document.getElementById("bonus").onmouseover = function() {mouseOverBonus()};
document.getElementById("bonus").onmouseout = function() {mouseOutBonus()};

function mouseOverBonus() {
  document.getElementById("bonus").style.backgroundColor = "red" ;
   document.getElementById("bonus").innerHTML ="CoÃ»t: 5000";
   playSound3();


 }

function mouseOutBonus() {
  document.getElementById("bonus").style.backgroundColor = "grey";
  document.getElementById("bonus").innerHTML ="BONUS";

}

})();
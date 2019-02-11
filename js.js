(function() {

    var score = 0;
    var multiplicateur = 1;
    var autoClic = 0;
    var prix = 10;
    var timeleft = 10;
    var newMult= multiplicateur * 2;



document.getElementById("autoclic").disabled = true;
document.getElementById("bonus").disabled = true;
document.getElementById("multiplier").disabled = true;


function checkMult (){
  if (score - prix>= 0) {
    document.getElementById("multiplier").disabled = false;
  }
};

function checkAuto (){
  if (score >= 5 && autoClic===0){
    document.getElementById("autoclic").disabled = false;
  }
}

function checkBonus (){
  if (score >= 20){
    document.getElementById("bonus").disabled = false;
  }
}

/*function doubleMult(){
  if (timeleft >= 0) {
    score += newMult;
  }
    else {
  		clearInterval(timer);
  		//multiplicateur = multiplicateur/2;
  	}
}
*/
//COOKIE
  document.getElementById("clic").addEventListener("click", function() {
      score += multiplicateur ;
      document.getElementById("affichage").innerHTML = score;
      checkBonus();
      checkAuto();
      checkMult();
    })


//MULTIPLIER
document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {

  document.getElementById("multiplier").disabled = true;
   score = score - prix ;
   document.getElementById("affichage").innerHTML = score;
   multiplicateur ++;
   prix = prix * 2;
   document.getElementById("multiplier").innerHTML = "multiplier X" + multiplicateur + " Coût prochain achat: " + prix;
   console.log(prix);
   checkBonus();
   checkAuto();
   checkMult();

});





//AUTOCLIC
document.getElementById("autoclic").addEventListener("click", function(){

autoClic ++;
score -= 5;
console.log(autoClic);

 setInterval(function(){
  if (score >= 10) {
    score += multiplicateur ;
    document.getElementById("affichage").innerHTML = score;
    checkBonus();
    checkMult();

  }
}, 1000);

checkBonus();
checkAuto();
checkMult();

document.getElementById("autoclic").disabled = true;
document.getElementById("affichage").innerHTML = score;
}, {once : true});



//BONUS
document.getElementById("bonus").addEventListener("click", function() {

  score = score - 10;
  document.getElementById("bonus").disabled = true;

      /*  function desactivateBon(){
          if (timeleft>=0){

      }
*/
var timer = setInterval(function(){
  document.getElementById('bonus').innerHTML= "BONUS - " + timeleft;
  timeleft -= 1;
  if (timeleft <= 0) {
    clearInterval(timer);
    document.getElementById('bonus').innerHTML= "BONUS";
    multiplicateur = multiplicateur/2;
  }
}, 1000);


multiplicateur = multiplicateur * 2;


checkBonus();
checkAuto();
checkMult();

document.getElementById("affichage").innerHTML = score;



  }
  );




    })();

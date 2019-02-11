(function() {

    var score = 0;
    var multiplicateur = 1;
    var autoClic = 0;
    var prix = 10;
    var newMult = multiplicateur * 2;



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
  }
}, 1000);


document.getElementById("autoclic").disabled = true;
document.getElementById("affichage").innerHTML = score;
}, {once : true});



//BONUS
document.getElementById("bonus").addEventListener("click", function() {

        score = score - 10;
        var timeleft = 30;

var timer = setInterval(function(){
  console.log(timeleft);
  timeleft -= 1;


  if (timeleft >= 0) {
    multiplicateur= multiplicateur * 2;
}
	else {
		clearInterval(timer);
		multiplicateur = multiplicateur/2;
	}



}, 1000);


document.getElementById("affichage").innerHTML = score;

document.getElementById("bonus").disabled = true;


  }
  );




    })();

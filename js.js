(function() {

var score = 0;

var multiplicateur = 1;

var conteurAutoclic = 0;

var n = 10;

var newMult = multiplicateur * 2;



document.getElementById("autoclic").disabled = true;
document.getElementById("bonus").disabled = true;
document.getElementById("multiplier").disabled = true;


  document.getElementById("autoclic").addEventListener("click", function(){

  conteurAutoclic ++;
  score -= 5;
  console.log(conteurAutoclic);

   setInterval(function(){
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
  else {  document.getElementById("autoclic").disabled = true;
 }
}

if (score>=10){
  document.getElementById("bonus").disabled = false;

}


if (score - n >= 0) {
  document.getElementById("multiplier").disabled = false;
}


  document.getElementById("affichage").innerHTML = score;


  });


  
  
document.getElementById("bonus").addEventListener("click", function() {

        score = score - 10;
        var timeleft = 30;

var timer = setInterval(function(){
  console.log(timeleft);
  timeleft -= 1;
	
  
  
  if (timeleft >= 0) {
    multiplicateur= newMult;
}
	else {
		clearInterval(timer);
		multiplicateur = newMult/2;
	}



}, 1000);


document.getElementById("affichage").innerHTML = score;

document.getElementById("bonus").disabled = true;


  }
  );




  
  

  document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {

    document.getElementById("multiplier").disabled = true;
     score = score - n ;
     document.getElementById("affichage").innerHTML = score;
     multiplicateur ++;
     n = n * 2;
     document.getElementById("multiplier").innerHTML = "multiplier X" + multiplicateur + " Coût prochain achat: " + n;
     console.log(n);






});

})();

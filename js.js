(function() {

var score = 0;

var multiplicateur = 1;

var conteurAutoclic = 0;

var n = 10;



document.getElementById("autoclic").disabled = true;
document.getElementById("bonus").disabled = true;
document.getElementById("multiplier").disabled = true;


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
  else {  document.getElementById("autoclic").disabled = true;
 }
}

if (score>=10){
  document.getElementById("bonus").disabled = false;

}

  document.getElementById("bonus").addEventListener("click", function() {

        document.getElementById("bonus").disabled = true;
        console.log(score - 10);
        var timeleft = 30;

var timer = setInterval(function(){
  console.log(timeleft);
  timeleft -= 1;

  if(timeleft <= 0) {
    clearInterval(timer);
}}, 1000);

document.getElementById("affichage").innerHTML = score;

  }
  )


if (score - n >= 0) {
  document.getElementById("multiplier").disabled = false;
}




  document.getElementById("affichage").innerHTML = score;


  })



  document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {

    document.getElementById("multiplier").disabled = true;
     score = score - n ;
     document.getElementById("affichage").innerHTML = score;
     multiplicateur ++;
     n = n * 2;
     document.getElementById("multiplier").innerHTML = "multiplier X" + multiplicateur + " Coût prochain achat: " + n;
     console.log(n);






})

})();

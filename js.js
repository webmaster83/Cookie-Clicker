// JavaScript Document
//var manipuler divv
//var score = 0 ;


/*document.getElementById("clic").addEventListener("click", function() {
  score += multiplicateur ;
  document.getElementById("affichage").innerHTML = score;


  })

  document.getElementById("multiplier").addEventListener("click", function(augmenterMultiplicateur) {
    multiplicateur ++;
    console.log(multiplicateur);

})*/



$(document).ready( function(){
	
	var score = 0 ;
	var multiplicateur = 1;
	
	$("#clic").click(function(){
		score += multiplicateur;
		$("#affichage").text(score);
	});
	
	$("#multiplier").click(function(){
		multiplicateur ++;
		//console.log(multiplicateur);
		if ( score >= 10 ){
		score = score - 10;
		$("#affichage").text(score);
		
	} 
		
	
		$("#multiplier").text( " Multiplicateur x"+ multiplicateur);
	
	});
	
	
});
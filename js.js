// JavaScript Document
//var manipuler divv
//var score = 0 ;


/*


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

})*/



$(document).ready( function(){
	
	var score = 0 ;
	var multiplicateur = 1;
	
	$("#clic").click(function(){
		score += multiplicateur;
		$("#affichage").text(score);
	});
	
	$("#multiplier").click(function(){
		
		//console.log(multiplicateur);
		if ( score - 10 * multiplicateur < 0 ){
			$("#affichage").text("Tu ne peux pas car le score sera NEGATIF. :-) ");	 
						} else {
			score = score - 10 * multiplicateur;	// sinon on garde notre calcul ( le le fait )
			$("#affichage").text(score); // affiche
			multiplicateur ++;	// on incremente +1
			console.log(multiplicateur);
			$("#multiplier").text( " Multiplicateur x"+ multiplicateur+ ' cout prochain achat ' + 10 * multiplicateur );
	
						}
		
	
		//$("#multiplier").text( " Multiplicateur x"+ multiplicateur);
	
	});
	
	
});
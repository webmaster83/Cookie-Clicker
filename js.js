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
	//var cookie = false ;
	var score = 0 ;
	var multiplicateur = 1;
	$("#autoclic").attr("disabled", "disabled");
	$("#clic").click(function(){
		score += multiplicateur;
		$("#affichage").text(score);
		
		/*augmente de  automatiquement */
		
			if ( score >= 30) {
		setInterval (function(){ 
		score = score  +  multiplicateur;
		$("#affichage").text(score);
		}, 1500);
	}
		if ( score >=35 ){
				$("button").removeAttr("disabled");	
			
		}
		
	});
	/* au clic de l'auto-cliker*/
	
$("#autoclic").one("click", function(){

	$(this).attr("disabled", "disabled");
	score = score - 35 ;
	//cookie = true;
	
});
	
	/**/
	$("#multiplier").click(function(){
		
		//console.log(multiplicateur);
		if ( score - 10 * multiplicateur < 0 ){
			$("#affichage").text("Tu ne peux pas car le score sera NEGATIF. :-) ");	 
						} else {
			score = score - 10 * multiplicateur;	// sinon on garde notre calcul ( le le fait )
			$("#affichage").text(score); // affiche
			multiplicateur ++;	// on incremente +1
			console.log(multiplicateur);
			$("#multiplier").text( " Multiplicateur x"+ multiplicateur+ ' coût prochain achat ' + 10 * multiplicateur );
	
						}	
	
	
		
	
	});
	
	if ($("#affichage").text(score) >= 30 ){
			
			$("#autoclic").attr("enable");
		}

});
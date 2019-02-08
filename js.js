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
	var prixAmine = 50 ; 
	$("#autoclic").attr("disabled", "disabled");
	$("#clic").click(function(){
		score += multiplicateur;
		$("#affichage").text(score);
		
		/*augmente de  automatiquement */
		
			if ( score >= 500) {
		setInterval (function(){ 
		score = score  +  multiplicateur;
		$("#affichage").text(score);
		}, 1500);
	}
		if ( score >=500 ){
				$("button").removeAttr("disabled");	
			
		}
		
	});
	/* au clic de l'auto-cliker*/
	
$("#autoclic").one("click", function(){

	$(this).attr("disabled", "disabled");
	score = score - 500 ;
	//cookie = true;
	
});
	
	/**/
	$("#multiplier").click(function(){
		
		//console.log(multiplicateur);
		if ( score - prixAmine < 0 ){
			$("#affichage").text("Tu ne peux pas car le score sera NEGATIF. :-) ");	 
						} else {
			score = score - prixAmine;	// sinon on garde notre calcul ( le le fait )
			$("#affichage").text(score); // affiche
			multiplicateur ++;	// on incremente +1
			prixAmine = prixAmine * 2 ;				
			console.log(multiplicateur);
			//var nombre = $("#affichage").text();
			//var calcul = parseInt(nombre) * 2 ;				
			$("#multiplier").text( " Multiplicateur x"+ multiplicateur+ ' coût prochain achat ' + prixAmine  );
	
						}	
	
	
		
	
	});
	
	if ($("#affichage").text(score) >= 500 ){
			
			$("#autoclic").attr("enable");
		}

});
// JavaScript Document



var score = 0 ;
var multiplicateur = 1;
var cout = 10;
/* desactive le bouton*/
$("#multiplier").attr("disabled","disabled");

/*etape 3*/
/*$("#affichage").text(score);*/

$("#clic").click( function(){
	score += multiplicateur ;
	$("#affichage").text(score);
	
	
	/*si le score vaut au moins 20 ou 50*/
	if  (score - cout*multiplicateur >= 0) { /*  20 au lieu 50 */
	$("#multiplier").removeAttr("disabled");
	
		
	}
	else {
		$("#multiplier").attr("disabled","disabled");
		/**console.log(" NON ! votre résultat sera NEGATIF :-) ");*/
		
	}
	
	
});


/*etape4 et 5  */
$("#multiplier").click(function(){
	
	var coco = cout*multiplicateur ; 
	
	multiplicateur ++ ; 
	
	score = score - 10 ;/* etape 6*/
	$("#affichage").text(score);
	
	$("#multiplier").text("Multiplicateur X " + multiplicateur + "(" +  coco  + ")"   );
	/*etape 7 nouvelle valeur afficher */  /*etape 8 la phrase*/ 
	
});



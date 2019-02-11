// JavaScript Document



var score = 0 ;
var multiplicateur = 1;

/*etape 3*/
$("#affichage").text(score);
$("#clic").click( function(){
	score ++ ;
	$("#affichage").text(score);
});

/*etape4 et 5 */
$("#multiplier").click(function(){
	var = nouveauscore ;
	
	multiplicateur ++ ; 
	score += multiplicateur ; 
	$("affichage").text(score);
});
// JavaScript Document
//var manipuler divv
//var score = 0 ;

$(document).ready( function(){
	
	var score = 0 ;
	$("#clic").click(function(){
		score++;
		$("#affichage").text(score);
	});
});
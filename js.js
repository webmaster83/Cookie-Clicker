// JavaScript Document
//var manipuler divv
//var score = 0 ;

var score = 0;
var multiplicateur = 1;



$(document).ready( function(){
	
	var score = 0 ;
	var multiplicateur = 1;
	
	$("#clic").click(function(){
		score+= multiplicateur;
		$("#affichage").text(score);
	});
	
	$("#mutiplier").click(function(){
		multiplicateur++;
		console.log(multiplicateur);
	});
	
});
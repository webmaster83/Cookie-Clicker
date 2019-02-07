

(function() {

var score = 1;

document.getElementById("clic").addEventListener("click", function() {
  score ++;
document.getElementById("affichage").innerHTML = score;
});
})();

/* ------------------------------------ Les boucles ------------------------------------------ */

// -- La boucle FOR
// -- Pour i = 1 <= (strictement inférieur ou égal) 10; alors, j'incrémente
for(var i = 1; i <= 10; i++) {
    document.write("<p> Instruction executée : <strong>" + i + "</strong></p>");
}

// -- La boucle WHILE: Tant que
 document.write("<hr>");

var j = 1;
while(j <= 10) {
    document.write("<p> Instruction executée : <strong>" + j + "</strong></p>");
    j++;
}

// -- Supposons, le tableau suivant: 
var Prenoms = [ "Hugo", "Jean", "Mathieu", "Luc", "Pierre", "Marc"]

/* Consigne: Grace à une boucle FOR, afficher la liste des prénoms du tableau suivant dans la 
console ou la page */

for(var x = 0 ; x <= Prenoms.length-1 ; x++) {
    document.write("<p>"+ Prenoms [x] + "</p>");
}

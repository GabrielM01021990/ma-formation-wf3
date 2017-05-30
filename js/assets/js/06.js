/* ------------------------------------- Les fonctions ---------------------------------------- */

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function DitBonjour() {
    alert("Bonjour!"); // Lors de l'appel de la fonction, les instructions sont exécutées
}

// -- J'appelle la fonction "DitBonjour" et déclencher ces instructions
DitBonjour();

// -- Déclarer une fonction qui aura une variable en paramètre

function Bonjour(Prenom, Nom) {
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> !</p>");
}

// -- Appeler/Utiliser une fonction avec un paramètre

Bonjour("Gabriel", "Malherbe");

// -- OU

var Prenom = "Gabriel";
var Nom    = "Malherbe";

Bonjour(Prenom,Nom);
Bonjour("Gab", "Malherbe");

/* Exercice : Créer une fonction permettant d'effectuer l'addition de deux nombres passés en 
paramètre */

var nb1 = 2;
var nb2 = 4;

function Addition(nb1, nb2) {
    document.write(nb1 + nb2);
}
Addition(nb1, nb2);

/* Correction */

function addition(nb1, nb2) {
    var resultat = nb1 + nb2;
    return resultat;
}

//-- OU

function addition(nb1, nb2) {
    return nb1 + nb2;
}
// -- Le mot clé return permet de renvoyer une valeur en sortie.
var resultat = addition(10,5);
document.write("<p>" + resultat + "</p>");

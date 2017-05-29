/* --------------------------------- Les opérateurs arithmétiques ----------------------------- */

//-- L'addition
// -- Déclaration de plusieurs variables à la suite
var nb1, nb2, resultat;

nb1 = 11;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'opérateur + 
resultat = nb1 + nb2;
console.log("L'addition de nb1 + nb2 est égale à : " + resultat);

// -- La soustraction
// -- La soustraction de nb1 - nb2 avec l'opérateur -
resultat = nb1 - nb2;
console.log("La soustraction de nb1 - nb2 est égale à : " + resultat);

// -- La multiplication 
// -- La multiplication de nb1 * nb2 avec l'opérateur *
resultat = nb1 * nb2;
console.log("La multiplication de nb1 * nb2 est égale à : " + resultat);

// -- La division 
// -- La division de nb1 / nb2 avec l'opérateur /
resultat = nb1 / nb2;
console.log("La division de nb1 / nb2 est égale à : " + resultat);

// -- Le modulo
// -- NB: Le modulo retourne le reste de la division.
// -- Le résultat du modulo est le reste de la division
// -- Le modulo de nb1 % nb2 avec l'opérateur %
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " et " + nb2 + " est égale à : " + resultat);

/* --------------------------------- Les écritures simplifiées -------------------------------- */

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

// -- On peut simplifier : ce qui équivaut à écrire nb1 = nb1+5
// -- Ici , j'incrémente et je réaffecte
nb1 += 5;
console.log(nb1);

// -- Je peux procéder de la même manière pour tous les autres opérateurs arithmétiques.



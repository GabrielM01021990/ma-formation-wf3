// -- Déclarer un tableau numérique
var monTableau = [];
// ou alors
var myArray    = new Array;

// -- Affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo";
monTableau[1] = "Tanguy";
monTableau[2] = "Géraldine";
  
// -- Afficher le contenu de mon tableau numérique dans la console
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[2]); // -- Géraldine
console.log(monTableau); // -- Affiches tt les données

// -- déclarer et affecter des valeurs à un tableau numérique
var NosPrenoms = ["Yimin", "Alex", "Christian", "Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et affecter des valeurs à un objet (pas de tableau associatif en JS)
var Coordonnee = {
    "prenom"     : "Gabriel",
    "nom"        : "Malherbe",
    "age"        : 27
}
console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Comment créer et affecter des valeurs à un tableau 2 dimensions
var listeDePrenoms = ["Hugo", "Rodrigue","Kristie"];
var listeDeNoms = ["Liegeard", "Nouel", "Soukai"];

// -- Je créer un tableau 2D à partir de mes tableaux précédents
var Annuaire =[listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher un nom et un prenom sur ma page HTML
// Rodrigue Nouel
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);
// Kristie Soukai
document.write(" ");
document.write(Annuaire[0][2]);
document.write(" ");
document.write(Annuaire[1][2]);

/* Exercice : Créer un tableau 2D appelé AnnuaireDesStagiaires qui contient les coordonnées des stagiaires
Nom prénom et tel
 */

var listePrenomsStagiaires = ["Hugo","Fred","Jean","Corentin","Gabriel"];
var listeNomsStagiaires    = ["Liegeard", "Dubois","Dugland","Dulong","Malherbe"];
var listeNumerosStagiaires  = ["0132321212","012547854","014785232","4444556644","0102030506"];

var AnnuaireDesStagiaires =[listePrenomsStagiaires, listeNomsStagiaires, listeNumerosStagiaires];
console.log(AnnuaireDesStagiaires);
document.write(" ");
document.write(AnnuaireDesStagiaires[0][0]);
document.write(" ");
document.write(AnnuaireDesStagiaires[1][0]);
document.write(" ");
document.write(AnnuaireDesStagiaires[2][0]);

/* Correction Exercice */
var AnnuaireDesStagiaires = [
    {"prenom" : "Hugo",   "nom" : "Liegeard", "tel" : "0789 256 276"},
    {"prenom" : "Tanguy", "nom" : "Toyota",   "tel" : "0589 226 256"},
    {"prenom" : "Gabriel","nom" : "Malherbe", "tel" : "0009 356 246"},
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom); // Liegeard
console.log(AnnuaireDesStagiaires[1].nom); // Toyota

// -- exemple pour la 3D

// (voir cours prof)

/* --------------- Ajouter un élement -------------- */
var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite ajouter un élément dans mon tableau
// -- Je fais appel à la fonction push() qui me renvoie le nombre d'éléments de mon tableau
var nombreElementDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementDeMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs élements en début de tableau


/* Récupérer et sortir le dernier élement */

// -- La fonction pop() permet de supprimer le dernier élement de mon tableau et d'en récupérer la valeur. 
// -- Je peux accessoirement la récupérer dans une variable

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- NB: La fonction splice() vous permet de faire sortir un ou plusieurs élements de notre tableau
Couleurs.splice(1,1);
console.log(Couleurs);





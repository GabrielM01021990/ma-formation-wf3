/* --------------------------------La concaténation -------------------------------- */

var DebutDePhrase       = "Aujourd'hui";
var DateDuJour          = new Date();
var SuiteDePhrase       =", sont présents:";
var NombreDeStagiaires  = 19;
var FinDePhrase         = "stagiaires.<br/>";

// -- Nous souhaitons, grace a la concaténation, afficher tout cela en un seul morceau

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaires + FinDePhrase);

/* Exercice: 
Créez une concaténation à partir des élements suivants: 
 */

var Phrase1 = "Je m'appelle ";
var Phrase2 = "Gabriel et j'ai ";
var Age     = 27;
var Phrase3 = "ans ! ";

document.write(Phrase1 + Phrase2 + A-ge + Phrase3);
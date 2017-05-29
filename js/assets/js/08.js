/*-------------------------------------- Les conditions --------------------------------------- */

/* var MajoriteLegaleFR = 18;
if(16 > MajoriteLegaleFR) {
    alert("Bienvenue !");
} else {
    alert("Google...");
} */

/* ------------------------------------------Exercice---------------------------------------------

vérifier l'age d'un visiteur avec un prompt, lui souhaiter la bienvenue s'il est majeur, ou alors
le rediriger sur google

 */

// Execution 

/* function agelegal(){
var MajoriteLegaleFR = 18;
var agelegal = prompt("Quel est votre age ? ", "<saisir votre age>");
if( agelegal >= MajoriteLegaleFR){
    alert("Bienvenue !");
}else {
    alert("Vous n'avez pas l'age légal, nous vous redirigeons");
    document.location.href="https://www.google.fr/";
}
}
agelegal(); */

// -- Correction 
/*
// 1 -- Déclarer la majorité légale
    var MajoritéLegaleFR = 18;
// 2 -- Créer une fonction qui demande l'age
function verifierAge() {
    return parseInt(prompt( "Bonjour, quel age avez vous?", " <saisissez votre age"));
}
// 3 -- Une condition pour vérifier si l'age de l'user est sup à la MajoritéLegaleFR
    if(verifierAge() >= MajoritéLegaleFR) {
    alert("Bienvenue sur mon site réservé à un public majeur, petit malin");
}   else {
    alert("Attention, tu n'es pas majeur blaireau");
    
// 4 -- J'affiche un message de bienvenue, ou une alerte et redirection.
    document.location.href = "https://www.google.fr/";
}
*/
/* ------------------------------Les opérateurs de comparaison--------------------------------  */

// -- L'opérateur de comparaison "==" signifie "Egal à..."
// Permet de vérifier que deux variables sont identiques

// -- L'opérateur de comparaison "===" signifie "Strictement égal à..."
// Il va comparer la valeur et aussi le type de données.

// -- L'opérateur de comparaison "!=" signifie "Différent de..."

// -- L'opérateur de comparaison "!==" signifie "Strictement différent de..."

/* --------------------------------------------Exercice----------------------------------------

Je dois saisir mon email et mon mdp afin d'être authentifié sur le site
Si echec, alerte probleme 
Si tout va bien, message de bienvenue l'acceuille.

 */

//  -- Execution

/* 
var mdp = "wf3";
var email = "wf3@mail.fr"

function verifierID() {
    var email = prompt("Email svp", "<Taper votre mail>");
    if (email === "wf3@mail.fr"){
    alert("Bienvenue!");
    }else{
        alert("Mauvais email");
    document.location.href="https://www.google.fr/";
    return;
} 
    var mdp = prompt("MDP svp", "<Taper votre mdp>");
    if (mdp === "wf3"){
    alert("Bienvenue!");
    }else{
        alert("Mauvais mdp");
    document.location.href="https://www.google.fr/";
    }

}
verifierID();

*/

email = "wf3@mail.fr";
mdp="wf3";

// 1 -- Demander son Email à l'user avec un prompt

var emailLogin = prompt ("Bonjour, Quel est votre mail? ", "<Saissisez votre mail");

// 2 -- Vérif du mail

if(emailLogin===email) {

// 2.1 -- Si ok je continue
// 2.1.1 -- Demande son mdp au user
var mdpLogin = prompt ("votre mdp ? ", "<Saisissez votre mdp>")
if (mdpLogin === mdp) {
    alert("Bienvenue user XXXX");
} else{
    alert("Attention, mdp pas bon");
}
} else {

// 2.2 -- Si non, je lui envoie une alerte  
alert("Attention, mauvaise adresse email");
}

// EX AVEC UNE FONCTION

function connexion(email, mdp) {
    if (user == user && motdepasse == mdp) {
        return true;
    }else{
        return false;
    }
}
var emailLogin = prompt ("Bonjour, Quel est votre mail? ", "<Saissisez votre mail");
var mdpLogin = prompt ("votre mdp ? ", "<Saisissez votre mdp>")

if(connexion(emailLogin, mdpLogin)) {
    alert("Bienvenue");
}else{
    document.location.href="https://www.google.fr/";
}

/* ----------------------------- Les opérateurs de logique------------------------------------- */

// (voir cours du prof)



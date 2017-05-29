/* 
-------------------------------------------Exercice 1 --------------------------------------------

Fonction permettant de : 
Saisir son prénom dans un prompt
Retourner au user: Bonjour [Prenom], Quel âge as tu?
Saisir son age
Retourner au user: Tu es donc né en [Année de naissance]
Afficher ensuite un récap dans la page
Bonjour [Prenom], tu as [age]

 */

// Execution

  /*  var prenom = prompt("Entrer votre prénom"); 
    var age = prompt("Entrer votre age"); 
    var date = new Date(); 
    var datenaissance = date.getFullYear() - age;
    document.write ("Hello " + prenom + " Quel age as tu?");
    document.write ("Tu es donc né en " + datenaissance); */

// Correction

// 1 -- Initialisation des variables

var AnneeActuelle = new Date();

// 2 -- Création de la fonction

function Hello() {

    // 2.1 -- Je demande le prénom du user
    var prenom = prompt("Hello ! What's your name ? ", "<Saisir votre prénom>");
    // 2.2 -- Je lui demande ensuite son age
    var age = parseInt(prompt("Hello " + prenom + " How old are you? ", "<Saisir votre age>"));
    // 2.3 -- J'affiche une alerte avec son année de naissance
    alert("You were born in" + (AnneeActuelle.getFullYear() - age) + "!");
    // 2.4 -- Affichage dans la page html
    document.write("Hello " + prenom + "Tu as " + age + "ans ! ");
}
// 3 -- Exécution de la fonction
Hello();





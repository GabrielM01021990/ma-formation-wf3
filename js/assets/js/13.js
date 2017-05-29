/* --------------------------------- La manipulation des contenus -------------------------------
 */

function w(t) {
    document.write(t);
}
function l(e) {
    console.log(e);
}

// Je souhiate récup mon lien, comment faire?

var google = document.getElementById("google");
l(google);

// --A le lien vers lequel pointe la balise
l("le lien vers lequel pointe la balise:")
l(google.href);

// --B L'ID de la balise
l("L'ID de la balise:")
l(google.id);

// --C La class de la balise
l("La classe de la balise:")
l(google.className);

// --D Le texte de la balise
l("Le texte de la balise:")
l(google.textContent);

// --E Modifier le texte de mon lien 
// Comme une variable classique, j'y affecte simplement une nouvelle valeur.
l("Modif du texte de lien:")
google.textContent = "Mon lien vers Google ma poule!";


/*
 Ajouter un élement dans ma page

 */

// -- Deux méthodes possibles

// -- 1 la fonction document.createElement() va permettre de géénrer un nouvel élement dans le
// que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

// ps : ce nouvel élement est placé en mémoire.

// -- Création de l'élement :

var span = document.createElement("span");

// Je veux lui donner un ID : 
span.id = "MonSpan";

// Je veux lui donner un contenu : 
span.textContent = "Mon beau texte en JS";

// -- 2 La fonction appenChild va permettre d'ajouter un enfant à un élement du DOM : 
google.appendChild(span);

// Exercice
// Créer une balise h1 ayant comme contenu "Titre de mon article"
// Dans cette balise vous créerez un lien vers une URL de votre choix
// Bonus : Ce lien sera de couleur rouge et non souligné.

// Création de la balise h1
var h1 = document.createElement("h1");

// Création de la balise
var a = document.createElement ("a");
a.textContent = "titre de mon article";

// Je donne un lien à mon lien : 
a.href= "https://validator.w3.org/";

//appendChild : 

// Je met mon lien (a) dans mon h1 : 
h1.appendChild(a);
 
 // Je met mon h1 dans le body : 
 document.body.appendChild(h1);

 // lien en rouge

a.style.color = "red";

//non souligné

a.style.textDecoration ="none";

























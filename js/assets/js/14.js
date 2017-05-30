/* -------------------------------------- Les evenements ---------------------------------------- 

Les évenements vont me permettre de déclencer une fonction c'eszt a dire une série d'instructions
suite à une action de mon utilisateur.
Obj : Etre en mesure de capturer ces évents afin d'executer une fonction.

---------------------------------------- Les events: -------------------------------------------

Mouse    : 
    Le click    : Se produit au clic sur un élement.
    Mouseenter  : Se produit si la souris passe au dessus de la zone qu'occupe l'élement.
    Mouseleave  : La souris sort de la zone.

Keyboard :
    Keydown     : Se produit si une touche du clavier est enfoncée.
    Keyup       : Si une touche est relachée.

Window   :
    Le scroll   : Défilement de la fenêtre.
    Resize      : Redimensionnement de la fenêtre.

Form     :
    Change      : Pour les <input> <select> et <textarea>.  
    Submit      : A l'envoi d'un formulaire.

Document : 
    DOMContentLoaded  : Exécuté lorsque le document HTML est complètement chargé sans attendre
    le CSS et les images.

------------------------------- Les écouteurs d'évents -----------------------------------------

Pour attacher un élement à une évenement, ou autrement dit, pour déclarer un écouteur d'évent
qui se chargera de lancer une action c a d une fonction pour un élement donné, j'utilise la 
syntaxe suivante : 


*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- Je veux paragraphe rouge au clic de la souris.
    // 1 -- Je défini une fonction chargée d'exe cette action
    function ChangeColorToRed() {
        p.style.color = "red";
    }

    // 2 -- Je déclare un écouteur qui se chargera d'appeler la fonction au déclencement de
    // l'event : 
    p.addEventListener("click", ChangeColorToRed);

/* ---------------------------------- Exercice ----------------------------------------------

Créer un champ input type text avec un ID et afficher dans une alerte la saisie de l'user.

 */

/* Execution 

var input   = document.createElement("Input");
input.type  = "text";
input.id    ="Input";
document.body.appendChild(input);

function Good(){
    var Good = document.getElementById("Input").value;
    alert(Good);
}
document.addEventListener ("click", Good);

*/

// Correction


// -- Création du champ input:  
var input   = document.createElement("Input");

// -- Attribution d'un attribut : 
input.id    ="Input";

// -- Ajout élement input dans la page : 
document.body.appendChild(input);


// -- Créer un écouteur : 
input.addEventListener ("change", SaisieInput);

function SaisieInput(){
    alert(input.value);
}




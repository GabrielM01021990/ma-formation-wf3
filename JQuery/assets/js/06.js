/* --------------------------Les sélecteur d'enfants en Jquery---------------------------------

 */

//Initialisation de Jquery
$(function() {
//ici commence le code Jquery
// Les flemmards.js
    function l(e) {
        console.log(e);
    }
// Je souhaite sélectionner toutes mes divs 
l($("div"));

// je souhaite selectionner mon header
l($("header"));

// Je souhaite selectionner ts les élements descendants directs (enfants) qui sont dans mon 
//header
l($("header").children());

//Je souhaite selectionner uniquement les élements ul  qui sont dans mon header
l($("header").children("ul"));

//Je souhaite selectionner uniquement tous les élements <li> de mon <ul>
l($("header").children("ul").find("li"));

//Je souhaite selectionner uniquement le deuxieme élement <li> de mon <ul>
l($("header").find("li").eq(1));

//Je souhaite connaitre le voisin de mon header
l($("header").next());
// Voisin du voisin...
l($("header").next().next()); // Voisin d'avant : prev()

// -- Les parents 
($("header").parent());





});
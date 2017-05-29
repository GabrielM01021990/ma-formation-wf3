/* -------------------------------------- Le Dom --------------------------------------------- 
Le dom est une interface de développement en JS pour HTML. Grace au dom, je peux accéder ou
modifier mon html.
L'objet "document" est le point d'entrée vers mon contenu HTML.
Chaque page chargée dans mon navigateur à un objet "document".



*/

// -- Comment récupérer les différentes infos de sa page HTML?

/* document.getElementById() est une fonction qui va permettre de récupérer un élement HTML
à partir de son identifiant unique : ID.
 */

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

/* document.getElementByClassName() est une fonction qui va permettre de récupérer un 
ou plusieurs élements HTML à partir de leurs classes.
 */

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

// Cela renvoit un tableau JS avec les élements HTML.

/* document.getElementByTagName() est une fonction qui va permettre de récupérer un 
ou plusieurs élements HTML à partir de leurs nom de balises.
 */
var span = document.getElementsByTagName("span");
console.log(span);

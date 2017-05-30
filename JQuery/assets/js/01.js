/* -------------------------------- Disponibilité du DOM ---------------------------------------

A partir ou mon DOm, c'est a dire l'ensemble de l'arborescence de ma page est chargée, je peux
commencer à use Jquery.
Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelé AUTOMATIQUE
MENT par Jquery lorsque le DOM sera entièrement défini.

3 Façons de faire : 

 */ 

jQuery(document).ready(function(){
    // -- Ici , mon DOM est chargé, je peux procéder à mon code JS.

});

// 2 -- Possibilité 2
$(document).ready(function(){

});

// 3 -- Possibilité 3 
$(function(){
    // -- Je peux désormais accéder à mon code JS.
    alert("Hello World !");

// -- En JS :
document.getElementById("TexteEnJquery").innerHTML = "Mon Texte en JS";

// -- En Jquery : Les selecteurs sont les mêmes qu'en CSS

$("#TexteEnJquery").html("Mon Texte en Jquery");

});




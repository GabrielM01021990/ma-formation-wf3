/*----------------------- Le chainage de méthode en Jquery --------------------------------------                           

 */

$(function() {

    // Je souhaite cacher toutes les divs de ma page HTML
    $("div").hide("slow", function() {

    // Une fois que la méthode hide() est terminée, mon alerte peut s'éxecuter
    alert("Fin du hide");

    //Nb La fonction s'éxécutera pour l'ensemble des élements du sélecteur
    
    // En CSS :
    $("div").css("background","yellow");
    $("div").css("color", "red");

    //Je fais réapparaitre mes divs
    $("div").show();


    }); // Fin de fonction anonyme

    // En utilisant le chainage de méthode, vous pouvez faire s'enchainer plusieurs fonctions
    // les unes après les autres...

    $("p").hide(1000).css("color", "blue").css("font-size", "20px").delay(2000).show(500)

    // Mais, c'eszt encore trop long.

     $("p").hide().css({"color":"blue" , "font-size":"20px"}).delay(2000).show();

}); 





/* -------------------------------------------- Consigne ---------------------------------------

A la soumission du formulaire, cacher le formulaire, créer un élement <p>, afficher dedans
Bonjour <nomcomplet> correspondant au nom saisi dans le formulaire.

 */

$("#MonFormulaire").on("submit", function(event){
    // -- Cette fonction anonyme sera éxécutée à la soumission du formulaire
    // -- Permet d'annuler l'action par défaut du submit du formulaire
    event.preventDefault();
    $(this).replaceWith("<p>Bonjour " + $("#nomcomplet").val() + "!</p>");
    // "this" fait référence à l'élement utilisé au début (dans ce cas, #MonFormulaire)
    
});


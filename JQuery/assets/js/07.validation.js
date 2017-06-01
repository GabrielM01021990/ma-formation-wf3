
// -- Declaration de fonction
// -- https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}







//Initialisation de Jquery
$(function() {

    // -- Ecouter à quel moment est soumis notre formulaire
    // -- A la soumission du form, j'execute une fonction anonyme
    // En JS: document.getElementById("contact").addEventListener("submit", MaFonctionAExecuter);
    $("#contact").on("submit", function(event){
        // -- Event correspond ici à notre evenement submit
        
        // -- Arrêter la redirection HTML5
        event.preventDefault(); 

        // -- Supression des différentes erreurs
        $("#contact .has-error").removeClass("has-error");
        $("#contact .text-danger").remove();

        // -- Declaration des variables (champs a verifier)
        var nom         =   $("#nom");
        var prenom      =   $("#prenom");
        var email       =   $("#email");
        var tel         =   $("#tel");

        // -- Je passe à la vérif de chaque champ...

            // -- 1 Vérification du nom 

                if(nom.val().length == 0) {
                // -- Si champ vide, j'ajoute à son parent la class has-error
                nom.parent().addClass("has-error");
                // -- J'ajoute une indication texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom </p>").appendTo(nom.parent());
                }

            // -- 1 Vérification du prenom 

                if(prenom.val() == "") { // Methode 2
                // -- Si champ vide, j'ajoute à son parent la class has-error
                prenom.parent().addClass("has-error");
                // -- J'ajoute une indication texte
                $("<p class='text-danger'>N'oubliez pas de saisir votre prenom </p>").appendTo(prenom.parent());
                }

                // -- 1 Vérification du mail 

                if(!validateEmail(email.val())){
                email.parent().addClass("has-error");
                $("<p class='text-danger'>Merci de bien vouloir vérififer votre email </p>").appendTo(email.parent());
                }   

                // -- 1 Vérification du tel 

                if(tel.val().length > 9  || $.isNumeric(tel.val()) == false) {
                tel.parent().addClass("has-error");
                $("<p class='text-danger'>Merci de bien vouloir vérififer votre tel </p>").appendTo(tel.parent());
                }
            
    });

});

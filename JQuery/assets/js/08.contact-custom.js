// Coorection

// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(Contact) {
         reinitialisationDuFormulaire();
        // -- Ajout d'un contact dans le tableau "collectiondecontacts"
        CollectionDeContacts.push(Contact);
        console.log(CollectionDeContacts);
        // -- On cache la phrase "aucun contact"
        $(".aucuncontact").hide();

        // -- Mise à jour du HTML

        $("#LesContacts").find("tbody").append('<tr><td>' + Contact.nom + '</td><td>' + Contact.prenom + '</td><td>' + Contact.mail + '</td><td>' + Contact.tel + '</td></tr>');
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {
        // -- En JS : 
        // document.getElementById("contact").reset();

        // En Jquery
        $("#contact").get(0).reset();


    
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $(".alert-contact").fadeIn().delay(3000).fadeOut();

    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnContact) {
        // -- Créer un booleen qui indique la présence ou pas d'un contact
        var estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(var i = 0 ; i < CollectionDeContacts.length ; i++) {

            // -- vérification pour chaque contact du tableau, si correspondance avc mn Contact.
            if (UnContact.email === CollectionDeContacts[i].email){
            // Si correspondance, est trouvé "estPrésent" passe à vrai (true)
            estPresent = true;

            // On arrête la boucle plus besoin de poursuivre
            break;

            }
        }

        // On retourne est present
        return estPresent;

    }

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
   $("#contact").on("submit",function(event){
        console.log(event);
        // -- Stopper la redirection de la page ATTENTION EXAM !!
        event.preventDefault();

        // Récupération des champs à vérifier
        var nom, prenom, email, tel;
        nom         = $("#nom");
        prenom      = $("#prenom");
        email       = $("#email");
        tel         = $("#tel");

        // -- Vérifications des informations...
        var infosvalides = true;

        // -- Vérif du Nom
        if(nom.val().length == 0) {
           var infosvalides = false;
        }

        // -- Vérif du Nom
          if(prenom.val().length == 0) {
           var infosvalides = false;
        }

        // -- Vérif du Nom
         if(tel.val().length == 0) {
           var infosvalides = false;
        }
        // -- Vérif du Nom
         if(!validateEmail(email.val())) {
           var infosvalides = false;
        }

        if(infosvalides)  {

        // -- Tout est ok je prépare le contact
        var Contact = {
        "nom"     : nom.val(),      
        "prenom"  : prenom.val(),      
        "email"   : email.val(),        
        "tel"     : tel.val(),         

        };
    
        // - Observons dans la console.
        console.log(Contact);

        // -- Vérification avec EstCequnContactEstPresent
        if(!estCeQunContactEstPresent(Contact)) {
                // -- Ajout du contact
            ajouterContact(Contact);
            reinitialisationDuFormulaire();
            afficheUneNotification();
                        

            }else{
                alert("Attention, contact déja présent");
            }

            }else {
                // -- Infos non valides (\n pour retour a la ligne)
                alert("Veuillez\n remplir correctement tous les champs.");
            

        }
    

});

}); // -- Fin de jQuery READY !


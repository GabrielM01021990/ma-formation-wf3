

$("#MonFormulaire").on("submit", function(event){
    
    event.preventDefault();
    $("#MonFormulaire").replaceWith(("<p>Bonjour" + $("#fullname").val() + "!</p>")
    +  ("<p> Mail : " +$("#email").val() + "</p>")
    +  ("<p> Tel : " +$("#tel").val() + "</p>")
    +  ("<p> Sujet : " +$("#sujet").val() + "</p>")
    +  ("<p> Votre message : " +$("#message").val() + "</p>")
    );


});
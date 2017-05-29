// -- Execution 

/* var francais = [4, 8, 10.5];
var math = [8, 18.5, 11];
var physique = [18, 18, 4];
var anglais = [13];

var MoyenneHugo = (francais[0] + math [0] + physique [0])/3;

document.write("<p><strong> 1.Hugo : </strong>" + "<ul><ui> francais : 4</li>" + "<li> math : 8 </li>" + "<li> physique : 18 </li>" + "<li><strong> Moyenne Générale : " + MoyenneHugo + "</li></ul></strong></p>");

document.write("<hr>");

var MoyenneKarim = (francais[1] + math [1] + physique [1] + anglais[0])/4;

document.write("<p><strong> 1.Karim : </strong>" + "<ul><ui> francais : 8</li>" + "<li> math : 18.5 </li>" + "<li> physique : 11 </li>" +  "<li> anglais: 13</li>" + "<li><strong> Moyenne Générale : " + MoyenneKarim + "</li></ul></strong></p>");

document.write("<hr>");

var MoyenneRudy = (francais[2] + math [2] + physique [2])/3;

document.write("<p><strong> 1.Rudy : </strong>" + "<ul><ui> francais : 18</li>" + "<li> math : 18 </li>" + "<li> physique : 4 </li>" + "<li><strong> Moyenne Générale : " + MoyenneRudy + "</li></ul></strong></p>");

 */


// Correction 

// Petite fonction de raccourci : (LesFlemmards.js)

function w(t) {
    document.write(t);
}
function l(e) {
    console.log(e);
}

// -- 1. Création de notre Tableau 3D en JS.

var Premiertrimestre = [
    {
        "nom"       : "Liegeard",
        "prenom"    :"Hugo",
        "moyenne"   : {
                            "francais" : 4,
                            "math"     : 8,
                            "physique" : 18, 

                      }
    },
    {
        "nom"       : "Manas",
        "prenom"    :"Tanguy",
        "moyenne"   : {
                            "francais" : 12,
                            "math"     : 15,
                            "physique" : 9, 
                            "anglais"  : 15, 

                      }
    },
    {
        "nom"       : "Araujo",
        "prenom"    :"Thiago",
        "moyenne"   : {
                            "francais" : 6,
                            "math"     : 15,
                            "physique" : 9, 

                      }
    }
];

l(Premiertrimestre);

// -- 2. Je souhaite afficher la liste de mes étudiants.
w('<ol>');
for(i = 0; i < Premiertrimestre.length ; i++) {
    // On recupere l'objet étudiant de l'itération
    let Etudiant = Premiertrimestre[i];
    // Apercu 
    l(Etudiant);

// Je défini le nb de matieres et la sommes des note à 0
var NombreDeMatiere = 0, SommesDesNotes = 0;

// Afficher le prénom et le nom d'un étudiant
w("<li>");
    w(Etudiant.prenom + " " + Premiertrimestre[i].nom);
    // Afficher la moyenne de l'etudiant aux différentes matières.
w("<ul>");
    for(let matiere in Etudiant.moyenne) {
     //   l(matiere)
    //  l(Etudiant.moyenne[matiere])
    NombreDeMatiere++;
    SommesDesNotes += Etudiant.moyenne[matiere];

    w("<li>");
        w(matiere + " : " + Etudiant.moyenne[matiere]);
    w("</li>");
    // Moyenne de ts les étudiants
  
    
} // Fin de la boucle matiere

    w("<li>");
        w("<strong> Moyenne Générale : </strong> " + (SommesDesNotes) / (NombreDeMatiere));
    w("</li>");

w("</ul>");
w("</li>");

} // Fin de la boucle étudiant

w('</ol>');


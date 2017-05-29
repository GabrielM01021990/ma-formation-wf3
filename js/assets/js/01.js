// alert("WOW ! Tu es sur ma page !");

// Deux slashs pour faire un commentaire uniligne.

/* 
Ici je peux faire un commentaire 
sur plusieurs lignes.

Raccourci CTRL + / ou CTRL+ SHIFT + /

 */

// -- 1 : Déclarer une variable en JS
var Prenom;

// -- 2 : Affecter une valeur
Prenom = "Gabriel";

// -- 3 : Afficher la valeur de ma variable dans la console
console.log(Prenom);

/*
--------------------- Les types de variables ---------------------
 */

// ici, "typeof" me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// -- déclaration d'un nombre
var Age = 27;

//Afficher dans la console
console.log(Age);

//Connaitre son type
console.log(typeof Age);

/* --------------------------- La portée des variables ---------------------------
Les variables déclarées directement à la racine du fichier JS sont appelées variables globales.
Elles sont disponibles dans l'ensemble de notre document y compris dans les fonctions.

Les variables qui sont déclarées à l'intérieur d'une fonction sont appelées variables locales.

Depuis ECMA6 (vrai nom de JS) on peut déclarer une variable avec le mot clé "let".
La variable sera dans ce cas accessible uniquement dans le bloc dans lequel elle est contenue, c'est à dire déclarée.

Si elle est déclarée dans une condition, elle sera disponible uniquement dans le bloc de la condition, ou de la boucle, etc.
 */

// -- Les variables FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (Boolean) (VRAI/FAUX)
var unBooleen = false; // -- True
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les constantes

/* 
La déclaration "const" permet de créer une constantes accessible uniquement en lecture. Sa valeur, ne pourra pas être modifiée par des réaffectations ultérieures.
Une constante ne peut pas être déclarée à nouveau.
*/

// -- Généralement, par convention, les constantes sont en majuscules. 

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";
console.log(HOST);
console.log(typeof HOST);
console.log(USER);
console.log(typeof USER);
console.log(PASSWORD);
console.log(typeof PASSWORD);

// -- Je ne peux pas faire cela : 

// USER = "Gabriel";
// 01.js:78 Uncaught TypeError: Assignment to constant variable.

/* 
---------------------------------Info:---------------------------------

Au fur ou à mesure que l'on affecte ou réaffecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type.
En JS (ECMA script), les variables sont autotypées. 
Pour convertir une variable de type "number" en "string", et "string" en "number", je peux utiliser les fonctions natives de JS.
 */

var unNombre = "24"
console.log (unNombre);
console.log(typeof unNombre);

// -- la fonction parseInt() permet de retourner un entier à partir de ma chaine de caractère.
unNombre = parseInt(unNombre);
console.log (unNombre);
console.log(typeof unNombre);

// -- Je réaffecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// -- La fonction parseFloat() permet de retourner un Float sur la base d'un "string"

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un nombre en string avec toString()
var unNombreEnString = 10;
var maChaineDeCaractere = unNombreEnString.toString();
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);


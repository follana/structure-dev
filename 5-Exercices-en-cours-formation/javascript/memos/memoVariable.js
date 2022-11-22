/*
    UTILES
    https://developer.mozilla.org/fr/
    duckduckgo.com/ ou google.com
    Votre console de dév dans le navigateur
    Si vous utilisez le dom, l'execution dans un terminal renverra des erreurs 

    lié un script JavaScript dans le HTML
    ajouter avant la fin du body <script src="cheminDuScript/fichier.js"></script>
    N'oubliez pas de faire un alert("hello world") ou un console.log("Hello world") 
    Cela vous permettra de vérifié que votre script fonctionne / que le chemin est correcte

    Lancer un fichier js avec node:
    Ouvrez un terminal dans le dossier ou ce trouve votre JavaScript
    taper node votreFichier.js
    le fichier ce lance
    Si vous êtes bloqué dans la cli (command line interface)
    .exit pour sortir .help pour affiché l'aide (n'oubliez pas de lire le terminal en cas d'erreur).
/*
    Déclaration de variable
*/
//déclaration affectation
var maVariableUn = 0; //variable Globale
let maVariableDeux = 0; //variable qui sera contenu dans une certaine scope (par exemple dans une fonction, elle ne pourra etre appelé ailleur)
const maConst = 0;
//réafectation
maVariableUn = 10;
//Déclaration sans affectation
let hello;

/*
    Affichage
*/
console.log(); // peut contenir un variable, affiche le contenus dans la console

//Les élément si dessous ne pourront être executer que sur le navigateur
//car ils n'existes pas en dehors du navigateur
//alert();    //affiche une boite de dialogue

/*saisis utilisateur */
//prompt();

/*confirmation*/
//confirm();

/*
        Ecrire les affectation d'une variable dans un console.log ou autre 
        moyen d'affichage:
        Classique:
        console.log("Voici le résultat de ma variable " + variable + " et l'autre " + variable2);
        Gabarit litéraux:
        console.log(`Voici le résultat de ma variable ${variable} et l'autre ${variable2}`);
        Pour la deuxième méthode on utilisera les backquotes touche alt gr+7 du clavier 
        ${variable} pour indiqué qu'il s'agit d'une variable.   
    */

/* 
    Opérateur
    + addition
    - Soustraction
    * Multiplication
    / Division
    ++ incrementation (augmente la valeur de 1) variable += 1; variable = variable + 1
    -- Décrémentation (diminue la valeur de 1)  variable -= 1; variable = variable - 1
    % Modulo reste d'une division
    ** Exponentiel 2**3 = 2x2x2 
*/

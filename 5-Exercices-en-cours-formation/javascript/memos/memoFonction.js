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
    Déclaration de fonction
    avec ou sans return
    avec ou sans parametre, avec un defaut si parametre 
    */
function somme(a , b = 10) {
  //le = 10 correspond à une valeur par défaut
  var resultat = a + b;
  console.log("le resultat est", resultat);
  //Gabarit literal
  console.log(`le resultat est ${resultat}`);
}

function inutile() {
  return "hello";
}
//si je souhaite afficher cela il faudra que j'apelle ma fonction
console.log(inutile()); //inutile() prend alors la valeur du contenue dans le return
alert(inutile());

/*fonction fléchée
 MDN définitions :
    Une expression de fonction fléchée (arrow function en anglais)
    permet d’avoir une syntaxe plus courte que les expressions de fonction et
    ne possède pas ses propres valeurs pour this, arguments, super, ou new.target.
    Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.
    */
let sommearrow = (a = 10, b) => {
  //le = 10 correspond à une valeur par défaut
  var resultat = a + b;
  console.log("le resultat est", resultat);
  //Gabarit literal
  console.log(`le resultat est ${resultat}`);
};

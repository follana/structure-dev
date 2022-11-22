/*
 opérateur de comparaison
 == égalité valeur
 === égalité stricte valeur et type
 < inférieur à
 <= inférieur ou égal à
 > supérieur
 >= supérieur ou égal à
 != pas égal valeur
 !== pas égal valeur et type
 ? : opérateur ternaire |     condition ? 0 : 1 
 Opérateur logique
 && et  renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true
 || ou renvoie vrai si et seulement si au moins un de ses opérandes est vrai.
 ! non prend l'opposé logique de la valeur fournie par son opérande
*/
// Condition if else
if (10 == 10) {
  //Si c'est égal non strict === pour une égalité stricte valeur et type
  ("true");
} else if (10 < 10) {
  //sinon si c'est inférieur  exite aussi avec le égale. inférieur ou égale à <=
  ("false");
} else if (10 > 10) {
  //sinon si c'est Supérieur
  ("false");
} else if (10 < 10 && 10 < 11) {
  //sinon si c'est inférieur  et si c'est inférieur
} else if (10 < 10 || 10 < 11) {
  //sinon si c'est inférieur  ou si c'est inférieur
} else {

}
let userInput;

//Switch break
// userInput = prompt("quel est votre nom ?")
switch (userInput) {
  case "john":
    /*instruction*/
    break;
  case "jane":
    /*instruction*/
    break;
  default:
    /*instruction*/
    break;
}

//Il est possible en cas d'action similaire a plusieur valeur de condensé le case
switch (userInput) {
  case "john":
  case "james":
  case "edouard":
    /*instruction*/
    break;
  case "jane":
  case "emilie":
  case "sarah":
    /*instruction*/
    break;
  default:
    /*instrution*/
    break;
}

//condition sous la forme ternaire

let flag = true;

flag ? console.log("c'est vrais") : console.log("c'est faux");

//selon la valeur de flag il affichera vrai ou faux
//un autre exemple

10 > 80 ? console.log("c'est vrais") : console.log("c'est faux");

//N'oubliez pas que tout les outils présenté dans ce cours peuvent être combiné
//par exemple avec une ternaire




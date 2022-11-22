//Array

let tableauDanimaux = ["vache", "canard", "biche"]; // un Tableau a une dimension
//si je veut appelé un élément alors
console.log(tableauDanimaux[0]); //L'index d'un tableau commence à zero

//tableau a deux dimension
let tableauFilm = [
  ["batman", "zack snyder"],
  ["avatar", "james cameron"],
];
//appel d'un élément
console.log(tableauFilm[0][1]); //affiche zack snyder

/*
   il esxiste des méthode pour modifier ou travailler un tableau 
   fruits = ['pomme', 'banane', 'poire', 'fraise']
   •fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)
   •fruits[0] : sélectionne le premier élément
   •fruits[length - 1] : sélectionne le dernier élément
   •fruits.push('pamplemousse') : ajoute un élément à la fin du tableau
   •fruits.unshift('pamplemousse') : ajoute un élément au début du tableau
   •fruits.pop() : supprime le dernier élément
   •fruits.shift() : supprime le premier élément
   •fruits.indexOf('banane') : retourne l'index d'un élément
   •fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses
   •fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)
   •fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.
*/

//Tableau associatif

let movies = {
  "Bons baisers de Russie" : "Terence Young",
  "oceans eleven" : "Steven Soderbergh",
  "American dad" : " 	Seth MacFarlane",
  "James bond" : "sean connery",
}



console.log(movies["oceans eleven"])
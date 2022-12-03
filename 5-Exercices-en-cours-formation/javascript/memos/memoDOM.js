

//DOM

//Selection d'élément avec l'objet document

//document.querySelector("elementASelectioné");
//pour travailler avec une élément il sera plus simple de l'affecté à une variable 

let titleSelector = document.querySelector("h1"); //selectionne le premier h1 de votre page
let linkSelector = document.querySelectorAll("a"); //selectionne tout les titres de votre pages
//Les agrèges dans un tableau 
//affichons les pour voir ce qu'il ce passe 
console.log(titleSelector);//Affiche l'élément 
console.log(linkSelector);//Affiche le tableau
console.log(linkSelector[1])//Affiche lien 2
/*
getElementsByTagName() - Sélectionne tous les éléments avec la balise entre parenthèses
getElementById() - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses
getElementsByClassName() - Sélectionne tous les éléments avec la classe entre parenthèses
querySelector() - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses
querySelectorAll() - Sélectionne tous les éléments avec le sélecteur entre parenthèses
*/

/*
Modifier les éléments
textContent - Modifie le texte d'un élément
innerHTML - Modifie l'HTML d'un élément
*/
let tableauFilm = [
    ["Avatar", "james cameron"],
    ["Start wars", "george lucas"]
]

linkSelector[1].textContent= " changement de texte dans le lien"
linkSelector[0].textContent = tableauFilm[0][1]; //j'affiche l'entrée de mon tableau precedement déclaré

//Creation d'élément 
let header = document.createElement("header");
let titre = document.createElement("h1");

//remplissages
titre.textContent = "un joli titre";

//aparition élément 
document.body.append(header);

//selection
let headerSelection = document.querySelector("header");
headerSelection.append(titre);

/**
 * Modifiez le CSS 
 * Le code ci-dessous est fait sur le body
 * Vous pourriez le faire également sur un autre élément préalablement attraper
 * 
*/
let navBar = document.querySelector("nav");
//Attrape Le body et lui attribut un background color black en css inline
document.body.style.backgroundColor = "black";
navBar.style.backgroundColor = "black";
//Ajoute une classe au body
document.body.classList.add("flexbox");
navBarbody.classList.add("flexbox");

/**
 * Il est possible de modifier l'attribut d'un élément
 */
document.body.setAttribute("id", "toto-make-things-in-css");
navBar.setAttribute("id", "toto-make-things-in-css");

//C'est possible avec tout les attribut, src ou autre

//événement

//addEventListener("evenement", function ou référence)
//ci dessous la fonction est direct
/**
 * Voici une fiche technique résumant l'ensemble des évènements principaux.
Les écouteurs "on" et les propriétés JavaScript
•onfocus - Quand l'utilisateur sélectionne l'élément
•onchange - Quand l'utilisateur change la valeur de l'élément
•onclick - Quand l'utilisateur clique sur l'élément
•ondblclick - Quand l'utilisateur double-clique sur l'élément
•onkeypress - Quand l'utilisateur appuie sur une touche du clavier dans
l'élément
Les évènements avec addEventListener
•click - Quand l'utilisateur clique sur l'élément
•mouseover - Quand l'utilisateur passe avec sa souris au-dessus d'un élément
•mouseout - Quand l'utilisateur sort avec sa souris d'un élément
•copy - Quand l'utilisateur copie un élément
•cut - Quand l'utilisateur coupe un élément
•paste - Quand l'utilisateur colle un élément
Pour retrouver tous les évènements possibles avec
JavaScript: https://developer.mozilla.org/fr/docs/Web/Events
 */
linkSelector[1].addEventListener("click", function (){
    console.log("Hello");
})

linkSelector[0].addEventListener("click", hello);

let helloEvent = () =>{
    console.log("hello");
}

//interval d'execution

//les interval permettent l'execution de bout de code tout les n temp donné

let helloFunction = () =>{
    console.log("hello");
}

const helloInterval = setInterval(helloFunction, 2000);

//Il est également possible de mettre directement la fonction dans l'interval

let helloIntervalWithLambda = setInterval(function (){ //Une fonction anonyme
    console.log(`Hello dans helloIntervalWithLambda`)
    helloFunction();
    
},2000)

//clearInterval(intervalAStopper) Permet d'arreter une interval définis 
//les lignes ci-dessous empecheront d'executer le code ci dessus 

clearInterval(helloInterval);
clearInterval(helloIntervalWithLambda);

//Set timeOut executera la fonction après un temp donné
setTimeout(helloFunction,2000); 

let time = 3000;
//Il est également possible de mettre directement la fonction dans le setTimeout
let helloTimeoutWithLambda = setTimeout(function (){ //Une fonction anonyme
    console.log(`Hello dans helloTimeoutWithLambda`)
},time)

//le Parametre de temp peut être affecté a une variable comme on le voit ci-dessus
let h2 = document.querySelector("h2");
let alla = document.querySelectorAll("a");
let text= document.querySelector("div.text");

console.log(h2);
console.log(alla);
console.log(text);

h2.textContent="Hello ceci est mon titre";
alla[1].textContent = "A2";

/* //Version sans déclaration de variable
document.querySelectorAll("a")[1].textContent = "1232";*/

let nav= document.querySelector("nav");  //déclare la nav pour pouvoir l'appeler
document.querySelector("nav");

let grostitre= document.createElement("h1"); //création de l'élément et personnalisation
grostitre.textContent="Grand Titre";
nav.prepend(grostitre); // placement avant:prepend

document.querySelector("img").remove(); // supression d'un élément ici img.
/*document.querySelector("img").src= "https://www.designconceptsolutions.fr/wp-content/uploads/slider/cache/a1dd83270ddcc193a96cda0e29f95963/mougins10.jpg";  
// ajout d'une image*/

document.body.style.background= "linear-gradient(black,cyan, gold)";

/*document.body.style.backgroundColor = "unset";
document.body.style.color = "red";
let bodySelector = document.querySelector("body");
document.body.style.background = "linear-gradient(#f69d3c, #3f87a6)";
document.body.classList.add("gradient-body");

document.body.setAttribute("style", "background-color: red");
document.body.setAttribute("style", "background-color: red; color: red");
bodySelector.setAttribute("class", "gradient-body");
// let imgSelector = document.querySelector("img");

// imgSelector.setAttribute("src", "img/quarate.jpg");
// imgSelector.src = "https://pressegalactique.com/wp-content/uploads/2020/02/licorne.jpg";
// //correction

// document.querySelector("body").className = "gradientBody";
// document.querySelector("h1").style.color = "#111d5e"; //il n'existe plus*/


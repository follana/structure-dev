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
document.querySelector("img").src= //urel

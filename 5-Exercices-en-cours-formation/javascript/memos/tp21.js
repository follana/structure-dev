//tp 20
/*
- Créez une page html avec un lien et un bouton 
- A l'aide de addEventListener créz un évènement pour supprimer le lien en cliquant dessus.
- Changez le bakground color du body en survolant le bouton et faites
  qu'il redevienne blanc quand la souris quitte le bouton
- Crée une section avec un h1 dedans et un texte dans la section mais en dehors du h1
 - créez un évènement au clique du h1 qui crée une alert disant que vous
  cliquez sur le h1 et de même por la section. Que constatez vous ?
  */

let buttonSelector = document.querySelector("#removerJS");
let link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  link.remove();
})

//- A l'aide de addEventListener créz un évènement 
//pour supprimer le lien en cliquant dessus.
//fonction qui agit au clique
buttonSelector.addEventListener("click", function (e) {
  document.querySelector("a").remove();
  e.preventDefault();
});

/* Changez le bakground color du body en survolant le bouton et faites
  qu'il redevienne blanc quand la souris quitte le bouton */
let bodySelector = document.querySelector("body");

//fonction qui agit quand je survol l'élément
buttonSelector.addEventListener("mouseenter", function () {
  bodySelector.style.backgroundColor = "red";
});
//fonction qui agit quand je sort de l'élément
buttonSelector.addEventListener("mouseleave", function () {
  bodySelector.style.backgroundColor = "white";
});

//- Crée une section avec un h1 dedans et 
//un texte dans la section mais en dehors du h1

let sectionCreation = document.createElement("section");
sectionCreation.classList.add("section");

let h1Creation = document.createElement("h1");
h1Creation.innerText = "Mon super titre";
h1Creation.classList.add("h1");

let pCreation = document.createElement("p");




pCreation.innerText = "lorem ipsum dolor amet";

bodySelector.append(sectionCreation);
sectionCreation.append(h1Creation);
sectionCreation.append(pCreation);

/*créez un évènement au clique du h1 qui crée une alert disant que vous
cliquez sur le h1 et de même pour la section. Que constatez vous ? */

let titleSelector = document.querySelector("h1");
let paragraphSelector = document.querySelector("p");
let sectionSelector = document.querySelector("section");

titleSelector.addEventListener("click", (e) => {
  alert("vous venez de cliquez sur le titre");
  console.log(e)
  e.stopPropagation();
});

// paragraphSelector.addEventListener("click", (e) => {
//   alert("vous venez de cliquez sur le paragraphe");
//   // e.stopPropagation();

// });

sectionSelector.addEventListener("click", (e) => {
  alert("vous venez de cliquez sur la section");
  e.stopPropagation();
});
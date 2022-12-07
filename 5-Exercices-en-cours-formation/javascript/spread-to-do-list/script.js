let inputSelector = document.querySelector("input");
let envoyerButton = document.querySelector(".envoyer");
let sectionSelector = document.querySelectorAll("section");

envoyerButton.addEventListener("click", function () {

  let sectionCreation = document.createElement("section");
  document.body.append(sectionCreation);
  let pSelector = document.createElement("p");
  sectionCreation.append(pSelector);
  let valeur = inputSelector.value;
  pSelector.textContent = valeur;

  let validerButton = document.createElement("button");
  sectionCreation.append(validerButton);
  validerButton.textContent = "valider";
  validerButton.addEventListener("click", function () {
    pSelector.style.color = "green";
  });

  let supprimerButton = document.createElement("button");
  sectionCreation.append(supprimerButton);
  supprimerButton.textContent = "supprimer";
  supprimerButton.addEventListener("click", function () {
    pSelector.style.color = "red";
    pSelector.style.textDecoration = "line-through";
  });

});


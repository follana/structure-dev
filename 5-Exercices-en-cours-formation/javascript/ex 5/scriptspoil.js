/*Voici comment va se dérouler notre bouton Spoiler :
- Un bouton s’affiche sur la page proposant d’afficher le message
- L’utilisateur clique sur le bouton, ce qui va activer une condition
• La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
le texte du bouton en « Cacher », et on passe la variable hidden en false
• La variable hidden vaut false ? Dans ce cas, on cache le message, on change
le texte du bouton en « Afficher », et on passe la variable hidden en true*/

var buttonSelector=document.querySelector("button");
let p = document.querySelector("p");
var hidden = true;

buttonSelector.addEventListener("click", () => {
    condition();
  });

  function condition(){
    if (hidden == true){
        p.classList.remove('hide')
        hidden = false;
    }
    else{
        p.classList.add('hide')
        hidden = true;
        
    }
  };




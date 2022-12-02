let entranceSelector =document.querySelector(".entrance");
let passwordSelector =document.querySelector(".pass");
let buttonSelector= document.querySelector(".button");
const regexLimitPass=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{6,8}$/ ;
const regexContentLogin = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;


buttonSelector.addEventListener("click", function(){
    login= entranceSelector.value;
    password =passwordSelector.value;

    if(regexContentLogin.test(login)){
        console.log("Votre login est correct");
        entranceSelector.setAttribute("style", "background-color: green");
    }
    else{
        entranceSelector.setAttribute("style", "background-color: red");
        alert('login incorrect');
    }

    if(regexLimitPass.test(password)){
        console.log("votre pass est correct");
        passwordSelector.setAttribute("style", "background-color: green");
    }
    else{
        passwordSelector.setAttribute("style", "background-color: red");
        alert('votre pass ne respecte pas nos conditions');
    }
})


/*if(regexLimitPass.test(password) = false){
    console.log("erreur de saisie");
}/*













/* 1 page HTML qui permet de saisir un login et un MDP
• Faire 1 Programme JS qui va vérifier la saisie du login et du MDP
• Le login doit être au format mail (Doit contenir un @ et un . )
• Le MDP doit contenir : (Entre 6 et 8 caractères) (1 caractère spécial minimum) (1 chiffre)
• Si le login n’est pas OK le champ est rouge sinon il est en vert
• Si le MDP n’est pas OK on affiche une explication*/ 


/*function upperCase(chaineATester)
{
   let regexp = /^[A-Z]/;
   console.log(regexp.test(chaineATester));
   console.log(chaineATester.match(regexp));
   if (regexp.test(chaineATester))
    {
      console.log("La première lettre est en majuscule");
    } 
    else
    {
      console.log("La première lettre n'est pas en maujuscule");
    }
}



upperCase('Abcd');
upperCase('abcd');*/
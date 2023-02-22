let entranceSelector =document.querySelector(".info");
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



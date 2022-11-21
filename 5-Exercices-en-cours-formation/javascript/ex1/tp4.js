function anniversaire(age){

    result=(age+1);
    alert("vous aurez bientôt"+" "+result+" "+"ans!");
};

anniversaire(32);

function createAlert (age) {
    alert("bientôt " + (age + 1) + " ans !");
};

// age = prompt("Quel est votre âge ?")

createAlert(parseInt(prompt("Quel est votre âge ?")));

function ligne(){
    let taille = parseInt(prompt("Quelle est votre taille en cm?"))
    let poids = parseInt(prompt("Quel est votre poids?"))
    taille = taille/100
    let imc =poids/(taille*taille)

    return Math.round(imc)
}

alert(`Votre IMC est de ${ligne()}`);


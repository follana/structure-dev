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

const dayToday = new Date();

alert("Nous sommes le" + " " + dayToday);

function noonOrNot() {
  let hour = dayToday.getHours();

  console.log(typeof hour + hour);

  if (hour < 12 && hour > 7) {
    alert("C'est le matin");
  } else if (hour >= 12 && hour < 20) {
    alert("C'est l'après-midi");
  } else {
    alert("Arte c'est la nouit !");
  }
}

noonOrNot();

//Correction

function timeOfDay(heure) {
  if (heure >= 0 && heure < 24) {
    if (heure < 12) {
      console.log("c'est le matin");
    } else if (heure < 18) {
      console.log("c'est l'après-midi");
    } else {
      console.log("c'est la soirée");
    }
  } else {
    console.log("rentrez une heure valable !");
  }
}

timeOfDay(12.22);
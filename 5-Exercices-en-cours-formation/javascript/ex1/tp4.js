/*function anniversaire(age){

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

let identify =prompt("Quel est votre prénom?") 

switch (identify) {
    case "joanna":
      console.log("oh une fille!");
      break;
    case "marc":
      console.log("tiens un garçon!");
      break;
    case "marie":
      console.log("Encore une fille!");
      break;
    case "Dorian":
      console.log("Et hop! un garçon");
      break;
    default:
      console.log("Désolé,il y a eu méprise à la naissance ceci n'est point un humain");
  }
  

  let surname = prompt("Quel est votre prénom");
let men = "Tu est un gars";
let woman = "Tu est une femme";
let error = "Ceci n'est pas un prénom";
switch (surname.toLowerCase()) {
  case "jean":
  case "bernard":
  case "benjamin":
    console.log(men);
    break;
  case "jeanne":
  case "maria":
  case "fatima":
  case "ophelie":
    console.log(woman);
    break;
  default:
    console.log(error);
    break;
}
age = prompt("Quel âge as tu ?");
age >= 18 ? console.log("tu est majeur") : console.log("tu est mineur");
  */
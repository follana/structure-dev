/*console.log("tableau");

let tab =["nom",21[32,24,52], true];

console.log(tab);
console.log(tab[0]);

console.table(tab);

let tableau1=[["titi", "tata", "toto"],
["jiji", "jaja", "jojo"],];

tableau1.splice (2,0,["tabEx"]);

console.table(tableau1);
*/

let formateur = ["Ophelie", "Benjamin", "Mathieu", "Leo"];

let benjamin = {
  nom: "Jully",
  prenom: "Boy",
  force: "extreme",
  ego: "surdimensionné",
};


/*function read(){
    console.table([formateur]);
    console.table([benjamin]);
}

read();*/

console.log(typeof benjamin, typeof formateur);

function read(array) {
  console.log("fonction de ruben qui ne marche pas");
  console.log(
    Object.values(array).forEach((value) => console.log(value)) +
      ":" +
      Object.keys(array).forEach((value) => console.log(value))
  );
}

read(formateur);
read(benjamin);

function showArray(array){
  console.log("Deuxième tentative")
  
}

//correction
function readTab(tab) {
  let data = "";
  for (let index in tab) {
    data += index + " : " + tab[index] + "\n";
  }

  console.log(data);
}

readTab(formateur);
readTab(benjamin);

function timer(){
  let num = 0;
  return function closure(){
  ++num;
  return num;
  }
  }
let compteur = timer();
console.log(compteur());
console.log(compteur());
console.log(compteur());
console.log("***********************");
let compteur2 = timer();
console.log(compteur2());
console.log(compteur2());
console.log(timer());
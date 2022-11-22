/* Boucle */
//While
let resultat = 0;
while (resultat < 10) {
  resultat++;
  console.log(resultat);
}

//Réafectation pour reutilisé la même variable
resultat = 0;
//Do While
do {
  resultat++;
  console.log(resultat);
} while (resultat < 10);

//For
let tableauArtiste = ["picasso", "miro", "van gogh"];

for (var i = 0; i < 10; i++) {
  console.log(i);
}

//on peut avec un for simple afficher les élément d'un tableau

for (var i = 0; i < tableauArtiste.length; i++) {
  console.log(
    ` On affiche dans un for les élément du tableau ${tableauArtiste[i]}`
  );
}

//For each
tableauArtiste.forEach((element) => {
  console.log(element); //afichera chaque élément
});

//for in
//la key ici correspond a l'index, on pourrais donc afficher chaque élément
for (const key in tableauArtiste) {
  console.log(`for in de tableau artiste ${key}`); //on affiche la key
  console.log(`dans le for in on affiche un élément ${tableauArtiste[key]}`);
}

var obj = {
  a:1,
   b:2,
  c:3
  };

for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

//for of

for (const artiste of tableauArtiste) {
  console.log(`Dans le for of pour afficher les tableau artiste ${artiste}`);
}

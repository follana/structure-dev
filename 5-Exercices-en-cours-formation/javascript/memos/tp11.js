// alert("Bienvenu jeune aventurier un combat ce prépare est tu pret ?");

// var ready = confirm("Voulez vous jouer à ce jeux ?"); //confirm crée un dial box oui/non output true / false


//   function choice() {
//     var choice = prompt(
//       "1- boule de feu \n 2- trait de glaçe \n 3- chaine d'éclair"
//     );
//     choice = +choice; // cast choice en number
//     if (choice === 1 || choice === 2 || choice === 3) {
//       return choice;
//     } else {
//       throw new Error("Tu ne peut lancer un sort qui n'est pas de ton niveau");
//     }
//   }


// if (ready === true) {
//   // Notre jeux
//   let fireball = 40;
//   let snowball = 35;
//   let thunderBolt = 25;

//   alert("Un monstre cyclopéen t'attaque, avec quelle sort va tu te défendre ?");
//   try{
//   var spell = choice();
//   }catch(error){
//    alert(error);
//   }
//   switch (spell) {
//     case 1:
//       alert(
//         "La boule de feu lui eclate au visage lui infligeant " +
//           fireball +
//           " dégats"
//       );
//       break;
//     case 2:
//       alert(
//         "Un trait de glaçe pourfend l'air et parvient à l'atteindre lui infligeant " +
//           snowball +
//           " dégats"
//       );
//       break;
//     case 3:
//       alert(
//         "Plusieur éclairs tombe du ciel, deux eclair le touche cela lui inflige " +
//           thunderBolt +
//           " dégats"
//       );
//       break;
//   }
//   alert("Le monstre tombe, le combat et finis. VICTOIRE !");
// } else {
//   alert("Dommage tu rate une belle aventure !");
// }



//version de Benjamin
try {
  let sort = prompt(
    "Choisissez un nouveau sort parmis les suivant : boule de feu - trait de glace - chaine d'éclair"
  );
  
  let degat;

  switch (sort) {
    case "boule de feu":
      degat = 40;
      break;
    case "trait de glace":
      degat = 35;
      break;
    case "chaine d'éclair":
      degat = 25;
      break;
    default:
      throw new Error("Les autres sorts ne sont pas de votre niveau");
  }
  alert(
    "Félicitation vous avez choisis " +
      sort +
      " qui fait " +
      degat +
      " dégats. "
  );
} catch (error) {
  alert(error);
}

function coucou() {
    console.log ("hello mes poulets!");
  };

  coucou();

function monNom(prenom){
    console.log(prenom);
};

monNom("sandy");

function hello(nom, prenom){
  console.log(`Bonjour ${nom} ${prenom}`);
};
let hello2 = (nom, prenom) =>{
  console.log("Bonjour " + nom + " " + prenom);
  console.log(`Bonjour ${nom} ${prenom}`);
};
hello("Navone", "Ruben");
hello2("Navone", "Ruben");
/* 
    Une classe permet de définir un modèle 
    Animal par exemple representera l'ensemble des animaux
    Il prendra des propriété divers et variées
    famille, régimeAlimentaire, reproduction par exemple
    on définira donc lors de l'instanciation les éléments ci-dessus
    */

class Animal {
  constructor(famille, espece, régimeAlimentaire, reproduction, cri) {
    this.famille = famille; //this fait référence au nom donné à l'instanciation
    this.espece = espece;
    this.régimeAlimentaire = régimeAlimentaire;
    this.reproduction = reproduction;
    this.cri = cri;
  }
  //Nous pouvons déclarer des variable qui ce nomment méthode dans le cas d'une classe

  crier() {
    console.log(`${this.espece} ${this.cri} de toutes ses forces ! `);
  }
  
  reproduit() {
    if (this.reproduction === "ovipare") {
      console.log(`${this.espece} vient de pondre un oeuf`);
    } else {
      console.log(`${this.espece} vient d'accouché d'un petit`);
    }
  }
}

let chien = new Animal("canidé", "chien", "omnivore", "mamifère", "aboie");

let serpent = new Animal(
  "squamate",
  "serpent",
  "carnivore",
  "ovipare",
  "siffle"
);
chien.crier();
serpent.reproduit();
chien.reproduit();

/* 
    On peut faire un constat évident, si tous hérite de propriété similaire 
    les chien ou les serpent on des sous famille spécifique.
    Il auront alors de propriété supplémentaire.
    Il faut utilisé l'héritage pour profité des élément de Animal et lui en ajouter d'autre
*/

class Serpent extends Animal {
    constructor( famille, espece, régimeAlimentaire, reproduction, cri,nom, taille, poid, couleur){
        super("squamate", "serpent", régimeAlimentaire, "ovipare", cri = "siffle");
        this.nom = nom;
        this.taille = taille;
        this.poid = poid;
        this.couleur = couleur;
    }
    description(){
        console.log(`Je suis un ${this.espece} de la famille des ${this.famille}, mon régime alimentaire est ${this.régimeAlimentaire} \n
        ma couleur est ${this.couleur} \n
        mon nom est ${this.nom}\n
        Je pourrais vous donnez d'autres détail mais il faudra interoger un scientifique`)
    }
}   

let boa = new Serpent();
boa.régimeAlimentaire = "carnivore";
boa.couleur = "tacheté vert/marron";
boa.nom = "boa constrictor";

boa.description();
boa.reproduit();
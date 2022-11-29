//tp 25 
/*- Créez un constructeur de “Stagiaire” avec pour attributs : nom, prénom, age, ville de naissance
- Ce constructeur aura pour méthode “sePresenter” qui affichera tous les attributs nom, prénom,
age et le nom de la ville de naissance.
- Creéz un constructeur de “Ville” avec pour attribut : nom, nombre d’habitants, pays.
- Créez deux objets de “stagiaire” et créez autant d’objets de “ville” que necessaire pour pouvoir
assigner ces objets à l’attribut “ville” de naissance”.*/


let stagiaire = new HelloStagiaire("tux","pingoo","37 ans","cercle arctique");

let maMaison = new ListeVille("Lyon","400 000","France");
let cestLoin = new ListeVille("Aubais","250 000","France");


function HelloStagiaire(nom,prenom,age,villeDeNaissance){
    this.nom= nom;
    this.prenom= prenom;
    this.age= age;
    this.villeDeNaissance= villeDeNaissance;

    this.sePresenter =() =>{
        console.log("je m'appelle" +" "+this.prenom +" "+this.nom +" "+ "j'ai" +" "+ this.age +" "+" je suis née à" +" "+ villeDeNaissance)
    }
}


function ListeVille(nom, nombreDhabitants,pays){
    this.nom= nom;
    this.nombreDhabitants= nombreDhabitants;
    this.pays= pays;

    this.quelleVille =() =>{
        console.log("Dans"+" "+this.nom+" "+ "il y a" +" "+this.nombreDhabitants +""+" personnes, c'est une commune française.")
    }
}

stagiaire.sePresenter();

maMaison.quelleVille();
cestLoin.quelleVille();




class Personnage {
    constructor(pseudo, classe,sante, attaque, niveau) {
      this.pseudo = pseudo;
      this.classe = classe;
      this.sante = sante;
      this.attaque = attaque;
      this.niveau = niveau;
    }

    evoluer =() =>{
        this.niveau ++;
        console.log(`"Le niveau du personnage est maintenant de"+${this.niveau}`)
    }

    verifierSante =() =>{
        if (this.sante >= 0){
            this.sante = 0;
            console.log(`${this.pseudo}+ "a perdu"`);
        }
    }

    get informations(){
        return this.pseudo + " " + this.classe + " "+ this.sante + " " + this.niveau;
    }
  }


  class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo);
        this.classe= "magicien";
        this.sante = 170;
        this.attaque =90;
        this.niveau = 1;
    }
    attaquer =(personnage) =>{
        personnage.sante = personnage.sante -this.attaque;
        console.log(`${this.pseudo}+"attaque"+${personnage.pseudo}+"en lançant un sort" +(${this.attaque}`);
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial =(personnage) =>{
        personnage.sante = personnage.sante -(this.attaque *5);
        console.log(`${this.pseudo}+"attaque"+" "+${personnage.pseudo}+"en lançant un éclair mortel" +(${this.attaque}`);
        this.evoluer();
        personnage.verifierSante();
    }
  }


class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo);
        this.classe= "guerrier";
        this.sante = 350;
        this.attaque= 50;
        this.niveau = 1;
    }
    attaquer =(personnage) =>{
        personnage.sante = personnage.sante -this.attaque;
        console.log(`${this.pseudo}+"attaque"+${personnage.pseudo}+"en lançant un coup d'épee" +(${this.attaque}`);
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial =(personnage) =>{
        personnage.sante = personnage.sante -(this.attaque *5);
        console.log(`${this.pseudo}+"attaque"+${personnage.pseudo}+"en frappant avec une hâche" +(${this.attaque}`);
        this.evoluer();
        personnage.verifierSante();
    }
}
/*
aragorn.verifierSante();
console.log(aragorn)
console.log(aragorn.informations += "blabla"); 
console.log(aragorn.informations += "fssge"); 

gandalf.verifierSante();
console.log(gandalf)
console.log(gandalf.informations += "blabla"); 
console.log(gandalf.informations += "fssge"); 
*/

let aragorn = new Guerrier("Aragorn")
let gandalf = new Magicien("Gandalf")


gandalf.coupSpecial(aragorn);
gandalf.informations
aragorn.informations

aragorn.informations
gandalf.informations

gandalf.attaquer(aragorn);
gandalf.informations
aragorn.informations

aragorn.attaquer(gandalf);
aragorn.informations
gandalf.informations


var sort= prompt("Quel sera votre sort?");
/*var feu= ("Vous utilisez une boule de feu: 40 dégats! votre adversaire est un méchoui");
var glace = ("Vous lancez un trait de glace : 35 dégats, votre adversaire est une scuplture particulièrement moche de glace");
var eclair = ("Vous envoyez une chaîne d'éclairs: 25 dégats, bravo! vous avez vu la facture?")*/

try{
    switch (sort) {
        case "feu":
          alert("Vous utilisez une boule de feu: 40 dégats! votre adversaire est un méchoui");
          break;
        case "glace":
          alert("Vous lancez un trait de glace : 35 dégats, votre adversaire est une scuplture particulièrement moche de glace");
          break;
        case "eclair":
          alert("Vous envoyez une chaîne d'éclairs: 25 dégats, bravo! vous avez vu la facture?");
          break;
      }
}
catch {
    switch(sort){
        default:
            alert("le sort choisi est au dela de votre niveau, retournez bosser!");
    }
};
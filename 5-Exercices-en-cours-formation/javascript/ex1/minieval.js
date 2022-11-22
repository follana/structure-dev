
    function beginning(){
      do{
        var question= prompt("choisissez votre mode de calcul");
        a= parseInt(prompt("choisissez nombre 1"));
          if (a =null){
            beginning();
          }
        b=parseInt(prompt("choisissez nombre 2 "));
          if (b =null){
            beginning();
        }
      }
      while( question == null){
        alert("les données doivent être données sous les nom plus, moins, fois et divi")
        beginning();
      } 
    }
    beginning();

  switch (question) {
    case "plus":
      alert(`Le resultat de ${a}+plus+${b}+ est+  +`+ plus(a,b));
    break;
    case "moins":
      alert(`Le resultat de ${a}+moins+${b}+ est+  + `+ moins(a,b));
    break;
    case "fois":
      alert(`Le resultat de ${a}+fois+${b}+ est+  + `+ fois(a,b));
    break;
    case "divi":
      alert(`Le resultat de ${a}+divisé par+${b}+ est+  + `+ divi(a,b));
    break;
    default:
      alert("les expressions sont plus, moins, fois et divi");
  }


  function plus(a,b){
    let result= 0;
    result = a+b;
    return result;
};  

function moins(a,b){
  let result= 0;
  result= a-b;
  return result;
};

function fois(a,b){
  let result= 0;
  result = a*b;
  return result;
};

function divi(a,b){
  let result= 0;
  result= a/b;
  return result;
};


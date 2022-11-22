var question= prompt("choisissez votre mode de calcul");

a= parseInt(prompt("choisissez \n1"));
b=parseInt(prompt("choisissez \n2"));



switch (question) {
 //while(question == null)  
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


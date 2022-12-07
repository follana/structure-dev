let button= document.querySelector("envoyer")
let inputSelector = document.querySelector("input");
let body= document.querySelector("body")
var liste= document.createElement("ul");
body.appendChild(liste)

button.addEventListener("click", async function(){
    liste.innerHtml= "";
    let input= inputSelector.value;
    answer= await fetch(`http://universities.hipolabs.com/search?${input}=`);
    let universities =await answer.json()
    console.log("data",universities)
    
    universities.forEach(school => {
        // if(){

        // }
    });
    



    


})
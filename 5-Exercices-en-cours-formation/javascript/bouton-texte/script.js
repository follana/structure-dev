let buttonSelector= document.querySelector("button");

buttonSelector.addEventListener("click",function(){
    const para= document.createElement("p");
    para.innerText= "Voilà un texte hyper intéressant"
    document.body.appendChild(para);
})
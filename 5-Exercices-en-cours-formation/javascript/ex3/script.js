let buttonSelector= document.querySelector("button");
let linkSelector = document.querySelector("a");

buttonSelector. addEventListener("click", function(){
    document.querySelector("a").remove();
}); 

buttonSelector.addEventListener("mouseenter",function(){
    document.body.style.background= "linear-gradient(black,cyan, gold)";
});

buttonSelector.addEventListener("mouseleave",function(){
    document.body.style.background= "white";
});

let section=document.querySelector("section");
let bigTitle =document.querySelector("H1");

let blabla =document.createElement("p");
blabla.textContent="je n'ai rien à dire";
section.append("blabla");

bigTitle.addEventListener("click",function(e){
    alert("Vous avez cliqué sur le titre")
    e.stopPropagation();
});

section.addEventListener("click",function(){
    alert("Vous avez cliqué sur la section")
});

function randomColor(){
    buttonSelector.style.background =
    "rgb("+
    Math.floor(Math.random()*256)+ ","+
    Math.floor(Math.random()*256)+ ","+
    Math.floor(Math.random()*256)+ ")";
};

buttonSelector.addEventListener("mouseenter", function(){
    timer =setInterval (randomColor,2000);
    });


buttonSelector.addEventListener("mouseleave", function(){
    clearInterval(timer);
    buttonSelector.style.background = "#FFFFFF"
});


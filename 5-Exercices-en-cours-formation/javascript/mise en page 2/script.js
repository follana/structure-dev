let buttonSelector=document.querySelectorAll("button");
let p =document.querySelector("p");
let div= document.querySelector("div");

buttonSelector.forEach(button =>{
    console.log(button);
    button.addEventListener("click",function(){
        if(button.id=="Html"){
            Content("p", "Html", div,"page"); 
            let html= document.getElementById("Html");
            html.id ="htmlOut";  
        }
        else if (button.id =="Css"){
            Content("p", "Css", div,"deco"); 
            let css= document.getElementById("Css"); 
            css.id= "cssOut"  
        }
        else if(button.id =="Js"){
            Content("p", "Js", div,"anim");
            let js = document.getElementById("Js");
            js.id= "jsOut";  
        }
        else if(button.id =="Tous"){
            Content("p", "Html", div,"page");
            Content("p", "Css", div,"deco");
            Content("p", "Js", div,"anim");  
        }  
        
        else if (button.id == "htmlOut") {
            console.log("removed");
            const htmlSelector = document.getElementById("page");
            htmlSelector.remove();
            let htmlOut = document.getElementById("htmlOut");
            htmlOut.id = "html";
            
        } else if (button.id == "cssOut") {
            console.log("removed");
            const htmlSelector = document.getElementById("deco");
            htmlSelector.remove();
            let htmlOut = document.getElementById("cssOut");
            cssOut.id = "css";

        } else if (button.id == "jsOut") {
            console.log("removed");
            const htmlSelector = document.getElementById("anim");
            htmlSelector.remove();
            let htmlOut = document.getElementById("jsOut");
            jsRem.id = "js";
        }
    });   
})

function Content(element_name, text, parent,ide){
    const blabla =document.createElement(element_name);
    blabla.setAttribute("id",ide);
    blabla.textContent =text;
    parent.appendChild(blabla);  
}




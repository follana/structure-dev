let buttonSelector=document.querySelectorAll("button");
let p =document.querySelector("p");

buttonSelector.forEach(button =>{
    console.log(button)
    button.addEventListener("click",function(){

        if(button.innerText=="Html"){
            Content("p", "Html", div);
            
        }
        else if (button.innerText =="Css"){
            Content("p", "Css", div);
            
        }
        else if(button.innerText =="Js"){
            Content("p", "Js", div);
            
        }

        else{
            Content("p", "Html", div);
            Content("p", "Css", div);
            Content("p", "Js", div);
            
        }

    })
})

function Content(element_name, text, parent){
    const blabla =document.createElement(element_name);
    blabla.textContent =text;
    parent.appendChild(blabla);
    
}

function Eraser(){
    blabla.removeElement();
}



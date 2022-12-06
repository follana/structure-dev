let titleSelector = document.querySelectorAll("h2");
let divSelector = document.querySelectorAll("div");


console.log(titleSelector);
console.log(divSelector)


titleSelector.forEach(item =>{
    
    item.addEventListener("click",function(){
        let next= item.nextElementSibling;
        if(next.style.display=== "none"){
            next.style.display="block";
        }
        else{
            next.style.display= "none" 
        }
    })
})



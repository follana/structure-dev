let headerSelector = document.getElementById("header");
let mainSelector = document.getElementById("main");
let footerSelector = document.getElementById("footer");


headerSelector.addEventListener("click",function(){
    headerSelector.style.display="none";
    const p1 =document.createElement("header");
    p1.textContent="Voilà un header de qualité n'est ce pas?";
    body.prepend(p1);
});

mainSelector.addEventListener("click",function(){
    mainSelector.style.display="none";
    const p2= document.createElement("main");
    p2.textContent="Voici un main bien fourni";
    body.append(p2);
});

footerSelector.addEventListener("click",function(){
    footerSelector.style.display="none";
    const p3= document.createElement("footer");
    p3.textContent="Et là nous avons un footer";
    body.appendChild(p3);
});



let Euros = document.querySelector(".Euros");
let Francs = document.querySelector(".Francs");
console.log(Euros);

Euros.addEventListener("input", function(e){
     Francs.value = parseFloat((e.target.value)*1.06).toFixed(2);
});

Francs.addEventListener("input", function(e){
    Euros.value = parseFloat((e.target.value)/1.06).toFixed(2);
});
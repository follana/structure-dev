/*let buttonSelector = document.querySelector("button");
var inputSelector = document.querySelector("p")


buttonSelector.addEventListener("click",function(){
    var timer= 10;
    start(timer);
})

function start(timer){
    inputSelector.textContent= ("nous en sommes à")+" "+timer;
    var timing= setInterval (()=>{

        timer= decompter(timer);
        if (timer===0) return stop(timing);
        inputSelector.textContent=("compteur:"+timer)
     },1000);

}


function decompter(){
    return (timer --);
};

function stop(timing){
    clearInterval(timing);
    inputSelector.textContent= "bon arret du compteur";
}*/

let btn = document.querySelector("button");
let secondes = 10;
let interval;

btn.addEventListener("click", () => {
  start();
  disappear();
});

function disappear() {
  btn.style.display = "none";
}

function start() {
  interval = setInterval(decompte, 1000);
}

function stop() {
  clearInterval(interval);
  document.body.innerHTML += "Baptiste va payer la raclette !";
}

function decompte() {
  secondes--;
  if (secondes == 0) {
    stop();
  } else {
    document.body.innerHTML += secondes + "<br>";
  }
}

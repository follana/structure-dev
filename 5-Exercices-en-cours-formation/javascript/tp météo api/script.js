
var buttonSelector = document.querySelector(".envoyer");


buttonSelector.addEventListener("click", function () {
    let entranceSpace = document.querySelector(".entrance");
    let searching = entranceSpace.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searching}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric`)
    .then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        fillElement(response);
    }).catch(e=>{
        console.log(`Vous êtes nul.le au petit bac avouez! ${e}`);
    })
})


function fillElement(response){
    var cityChoice =document.querySelector("H2")
    var answerSpace = document.querySelector(".reponse");
    var iconItem = document.querySelector("img"); 

    cityChoice.textContent= `ville de ${response.name}`;
    answerSpace.textContent=`La température est de ${(Math.round(response.main.temp))} degrés`;
    iconItem.src=`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;


}







/*fetch('https://picsum.photos/v2/list?limit=2')
.then((response) => {
  return response.json()
})
.then((photos) => {
  photos.forEach(photo => {
    createElements();
    fillElements(photo.download_url);
    appendElements();
  });
})*/



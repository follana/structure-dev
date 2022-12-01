let buttonSelector = document.querySelector(".envoyer");
let entranceSpace = document.querySelector(".entrance");
let answerSpace = document.querySelector(".reponse");
let iconItem = document.querySelector("img");


buttonSelector.addEventListener("Click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric')
    .then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
    }).catch(e=>{
        console.log(`une erreur est survenue ${e}`);
    })
})







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



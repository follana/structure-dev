let temps = 00
const timerElement = document.getElementById("timer")

function chrono() {
    let minutes = parseInt(temps / 60)
    let secondes = parseInt(temps % 60)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = minutes + ":" + secondes
  temps++ 
}

setInterval(chrono, 1000);






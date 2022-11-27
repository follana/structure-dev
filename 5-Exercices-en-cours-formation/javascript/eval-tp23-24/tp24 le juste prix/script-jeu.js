
let buttonSelector = document.querySelector("button") 

let nbEssaisSelector = document.querySelector(".nbEssais") // Afficher le nombre d'essais
let partialAnswerSelector = document.querySelector(".partialAnswer") // bonne réponse
let toHideSelector = document.querySelector(".toHide") // Deuxieme partie de la réponse (spoiler)
let writeHereSelector = document.querySelector(".writeHere") // Input insertion texte
let labelToClearSelector = document.querySelector(".labelToClear") // Affiche + - cher

buttonSelector.addEventListener("click", function() {
    
    buttonSelector.remove() // supprimer le boutton quand la partie est lancée
    // afficher les différentes rubriques qui étaient sous spoiler
    nbEssaisSelector.setAttribute("style", "") 
    partialAnswerSelector.setAttribute("style", "")
    writeHereSelector.setAttribute("style", "")
    labelToClearSelector.setAttribute("style", "")
    // Lancer le début du jeu
    initGame()

})

function initGame() {
    var numberTries = 1
    const numberToGuess = Number(createNumberToGuess())
    console.log(numberToGuess, "as number to find")

    writeHereSelector.addEventListener("keypress", function(event) {
        let toCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"]
        if(!toCheck.includes(event.key)) return
        if(event.key == "Enter") { // Check essai
            
            let typingTry =  Number(writeHereSelector.value)
            let condition = tryNumber(typingTry, numberToGuess, numberTries)
            
            if(condition == false) {
                numberTries++
                if(typingTry > numberToGuess) {
                    console.log("Moins")
                    labelToClearSelector.textContent = "Moins cher! - "
                } else if (typingTry < numberToGuess) {
                    console.log("Plus")
                    labelToClearSelector.textContent = "Plus cher! - "
                }
            }
            
        }
    })
}



function tryNumber(essai, numberToGuess, numberTries) {
    nbEssaisSelector.textContent = "Nombre d'essais : " + numberTries
       
    if(essai == numberToGuess) {
        toHideSelector.setAttribute("style", "")
        toHideSelector.textContent= numberToGuess
        return true
    } else {
        labelToClearSelector.textContent = ""
        return false
    }
}


function createNumberToGuess() {
    return Math.floor((Math.random() * 150));
}
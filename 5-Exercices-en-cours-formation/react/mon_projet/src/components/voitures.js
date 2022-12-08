import React, { useState } from 'react';


function Garage() {

    const [voiture, addVoiture] = useState()
    const [model, addModel] = useState()

    // let infoVoiture = {
    //     nom: "308",
    //     marque: "Peugeot"
    // }

    const handleClick = (e) => {
        // console.log(e.target.parentElement.children[2].value)
        let modelVoiture = e.target.parentElement.children[2].value
        let nameVoiture = e.target.parentElement.children[4].value
        addVoiture(nameVoiture)
        addModel(modelVoiture)
    }

    return (
        <form className="formVoiture">
            <h2>Quel véhicule est dans mon garage ?</h2>

            <label className= "marque">La marque de la voiture : </label>
            <input></input>
            <label className ="namev">Le nom de la voiture : </label>
            <input></input>

            <button onClick={handleClick}>Ajouter la voiture</button>

            <p> Il y a une {model} {voiture}</p>
        </form>
    )
}

function getVoiture() {

}


export default Garage
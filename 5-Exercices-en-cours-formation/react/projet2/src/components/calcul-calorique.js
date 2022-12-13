import React, { useState } from 'react';


function Balance() {

    const [bougie, setBougie] = useState();
    const [taille, setTaille] = useState();
    const [kilos, setKilos] = useState();
    const [coeficient, setCoeficient] = useState();
    const [Gender, setGender] = useState();
    const [resultat, setResultat] = useState()


    const handleYear = (e) => {
        setBougie(e.target.value)
    }

    const handleTaille = (e) => {
        setTaille(e.target.value)
    }

    const handlePoids = (e) => {
        setKilos(e.target.value)
    }

    const handleCoef = (e) => {
        setCoeficient(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (Gender === "femme") {
            let truc= 655.1 + (9.56 *  kilos ) + (1.85 *  taille ) - (4.67 *  bougie ) *  coeficient 
            setResultat(Math.round(truc))
        }
        else {
            let truc=66.5 + (13.75 *  kilos ) + (5 *  taille ) - (6.77 *  bougie ) *  coeficient 
            setResultat(Math.round(truc))
        }
    
    }

    const handleGenre = (e) => {
        setGender(e.target.value)
    }

    return (<form class="balance-calorique" onSubmit={handleSubmit}>
        
        <select name="gender" value="Gender" onChange= {handleGenre} /*aria-label="State"*/>
            <option value="homme">Homme</option>
            <option value="femme" >Femme</option>
        </select>


        <label for="year">Ecris ton âge</label>
        <input type="number" placeholder="ex:30" id="age" onChange={handleYear}></input>

        <label for="size">Ecris ta taille en cm</label>
        <input type="number" placeholder="ex:175" id="size" value={taille} onChange={handleTaille}></input>

        <label for="kg">Ecris ton poids</label>
        <input type="number" placeholder="ex:60" id="poids" value={kilos} onChange={handlePoids}></input>

        <label for="coeficient">insère ton coéficient d'activité</label>
        <input type="text" placeholder="ex:1.4 " id="coef" value={coeficient} onChange={handleCoef}></input>


        <select name="activite"onChange= {handleCoef} /*aria-label="EsState"*/>
            <option value="1">Journée passée au repos allongé, coef 1</option>
            <option value="1.2">Travail sédentaire assis, pas de sport, coef 1.2</option>
            <option value="1.4">Travail sédentaire avec 30 min de marche, coef 1.4</option>
            <option value="1.6">Travail sédentaire et 1h de sport, coef 1.6</option>
            <option value="1.7" >Travail sédentaire et 1h30 à 2h de sport, coef 1.7</option>
            <option value="1.9" >Travail physique avec beaucoup de déplacement et 1h30 de sport, coef 1.9</option>
            <option value="2">Travail physique et 3h à 4h de sport, coef 2</option>
        </select>

        <button type="submit" className="envoyer">Calculer</button>

        <h2>Votre résultat est de: {resultat}</h2>
    </form>)
}

export default Balance;
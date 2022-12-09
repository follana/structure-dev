import {Routes, Route} from "react-router-dom";
import react,{useState} from 'react';


function Balance(){
const [male,setMale]= useState();
const [female,setFemale]= useState();
const [bougie,setBougie]= useState();
const [taille,setTaille]= useState();
const [kilos,setKilos]= useState();
const [coeficient,setCoeficient]= useState();
const[soumettre,setSoumettre]=useState();

const handleYear=(e)=>{
    setBougie(e.target.value)
}

const handleTaille=(e)=>{
    setTaille(e.target.value)
}

const handlePoids=(e)=>{
    setKilos(e.target.value)
}    

const handleCoef=(e)=>{
    setCoeficient(e.target.value)
}

const handleSubmit=(e)=>{
    setSoumettre(e.target.value);
}

const activite(e)=>{
    setCoeficient(e.target.value)
}




    return <form class= "balance-calorique" onSubmit={handleSubmit}>
        <label for="male">Homme</label>
        <input type="checkbox" id= "male" checked={checked} onChange={handleChange}></input>
        <label for="female">Femme</label>
        <input type="checkbox" id= "female" checked={checked} onChange={handleChange}></input>

        

        <label for ="year">Ecris ton âge</label>
        <input type="number"placeholder="ex:30" id= "age" value={bougie}onChange= {handleYear}></input>

        <label for ="size">Ecris ta taille en cm</label>
        <input type="number"placeholder="ex:175" id= "size" value={taille} onChange= {handleTaille}></input>

        <label for ="kg">Ecris ton poids</label>
        <input type="number"placeholder="ex:60" id= "poids" value={kilos} onChange={handlePoids}></input>

        <label for ="coeficient">insère ton coéficient d'activité</label>
        <input type="text" placeholder= "ex:1.4 "id= "coef" value={coeficient} onChange={handleCoef}></input>


        <select name="activite" >           
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Journée passée au repos allongé, coef 1</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail sédentaire assis, pas de sport, coef 1.2</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail sédentaire avec 30 min de marche, coef 1.4</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail sédentaire et 1h de sport, coef 1.6</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail sédentaire et 1h30 à 2h de sport, coef 1..7</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail physique avec beaucoup de déplacement et 1h30 de sport, coef 1.9</option>
        <option value={activite} onChange={(e) => setActivite(e.target.value)}>Travail physique et 3h à 4h de sport, coef 2</option>
        </select>

        <button type="submit" class="envoyer">Calculer</button>
        
        <h2>Votre résultat est de: {}</h2>
    </form>
}

export default Balance;
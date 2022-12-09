import React,{useState} from 'react';

function ClockMaster (){
    const[heure,setHeure] = useState(new Date());
    
    setInterval(() =>setHeure(new Date()),1000);


    return (
        <div>
            <h1>Il est {heure.toLocaleTimeString()}</h1>
        </div>
    )
}



export default ClockMaster;
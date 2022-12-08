import React,{useState} from 'react';

function HelloDear(){
    const [name,setName] = useState("moi");
    const handleInput= (e)=>{
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Salut {name}, quoi de neuf?</h1>
            <input onChange={handleInput}></input>
        </div>);
}

export default HelloDear;
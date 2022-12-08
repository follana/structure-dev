import React,{useState} from 'react';

function Button1() {
    const [count, setCount] = useState(0);
    const [state,setState] =useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}> 
        Cliquez ici pour ajouter
      </button>
      

      <button onClick={() => setCount(count - 1)}>
         Cliquez ici pour enlever
      </button>
      
    </div>
  );

}

export default Button1;

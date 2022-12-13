import React from 'react';

function Tableau(){

    // let ColonneP ={'1':'A faire','2':'En cours','3':'Fini',}


    

    return(
        <>
          <table className="tableau" /*onSubmit={handleSubmit}*/>
            <tbody>
            <tr class="one">
               <td className="colonnes1" id="col1">A faire</td>
               <td className="colonnes2" id="col2">En cours</td>
               <td className="colonnes3"id="col3">Terminé</td>
            </tr>
            <tr class="two">
               <td id="item A">A</td>
               <td id="item B">B</td>
               <td id="item c">C</td>
            </tr>
            </tbody>
         </table> 

        <label for="insert">Que souhaites-tu ajouter?</label>
        <input type="text" placeholder="ecris ici..."></input>
         <button type="submit" className="inserer">Ajouter</button>
    
    </>
    )
}

export default Tableau;


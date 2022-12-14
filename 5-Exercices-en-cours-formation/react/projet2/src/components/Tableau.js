import React from 'react';


function Tableau() {
   // let trucs = [
   //    ["A faire", "En cours", "Terminé"],
   //    ["A", "B", "C"],
   //    ["D", "E", "F"],
   // ];

   // function AddItems(e)=>{
      
   //    let ajout=["","",""],
   //    ajout.push("")
   // }

   var trucs= {
      A_faire:[],
      En_cours:[],
      Terminé:[],
   }

   let tâches=[
      {nom:"truc1", cat: "terminé"},
      {nom:"truc2", cat: "En_cours"},
      {nom:"truc3", cat: "A_faire"},
      {nom:"truc4", cat: "En_cours"},
      {nom:"truc5", cat: "terminé"},
      {nom:"truc6", cat: "A_faire"},
   ]

   tâches.forEach((tâche)=>{
      trucs[tâche.cat].push(<span>{tâche.nom}</span>)
   });


   return (
      <>
         <table className="tableau" /*onSubmit={handleSubmit}*/>
            <thead>
               <tr>
                  <th>{trucs.nom}</th>
               {/* {trucs.map((item, index) =>{
               return<th>{item}</th>})} */}
               </tr>
            </thead>
            <tbody>
               {/* {trucs.slice(1,trucs.length).map((item,index)=>{
                  return(
                     <tr>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
               </tr>)
            })} */}
               <tr>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
               </tr>

               <tr>
                  <input type="text" placeholder="ajouter votre tâche"></input>
                  <button type="submit">Ajouter</button>
               </tr>

            </tbody>
         </table>

      </>
   )
}

export default Tableau;


import React from 'react';
// function Hello(props){
//     return (
//         <div>
//             <h1>Salut {props.name}, quoi de neuf?</h1>
//         </div>);
// }

// export default Hello;


// faire une horloge

 
// class Clock extends React.Component {
//     constructor() {
//         super()
//       this.state = {date: new Date()};  }

     
//     render() {
//       return (
//         <div>
//           <h1>Hello, World !</h1>
//           <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }

//     componentDidMount() {
//         this.clockID = setInterval(
//           () => this.tick(),
//           1000
//         );
//       }

//       tick() {
//         this.setState({
//           date: new Date()
//         });
//       }
    
//   }
//   export default Clock;


// input de texte


// class Saluer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {name:""}
//     }


//     render(){
//         return(
//             <div>
//                 <h1>Bonjour, {this.state.name}</h1>
//                 <input type= 'text' value ={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
//             </div>)
//     }
         
// }
 
//      export default Saluer;

// const fruits = ["Prune", "Pomme", "Cerise", "Banane", "Pêche"]


// class ChooseFruits extends React.Component{
//     constructor(){
//         super()
//         this.ListFruits= fruits.map(
//             fruit=>
//             <div>
//                <li>une{fruit}</li>
//             </div>
//         )
//     };

//     render(){
//         return(
//             <div>
//                 <p>Dans mon panier, il y a une {this.ListFruits}</p>
//             </div>
//         )
//     }
// }

// export default ChooseFruits;

// jeu de foot:
//   function Goal(){
//     return(
//         <div>
//             <button onClick={handleClick}>1 </button>
//             <button onClick={handleClick}>2 </button> 
//         </div>
//     )
// }

// function handleClick(e){
//     console.log(e.target.textContent)
//     return e.target.textContent == '1 ' ? alert('Et buuuuuuuuuuut!') : alert('Oups un ballon dans les gradins')
// }

// export default Goal;


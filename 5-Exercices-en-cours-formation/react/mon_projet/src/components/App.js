import logo from '../assets/logo.svg';
import '../style/App.css';
// import Clock from './titre';
// import Hello from './titre';
// import Saluer from './titre';
// import ChooseFruits from './titre';
import Goal from './titre'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        {/* <Clock /> */}
        {/* <Saluer/> */}
        {/* <ChooseFruits/> */}
        {/* <Goal/> */}
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


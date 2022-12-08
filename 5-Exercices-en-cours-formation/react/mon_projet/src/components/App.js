import logo from '../assets/logo.svg';
import '../style/App.css';
// import Clock from './titre';
// import Hello from './titre';
// import Saluer from './titre';
// import ChooseFruits from './titre';
// import Goal from './titre';
import HelloDear from './useState';
import ClockMaster from './timer';
import Button1 from './incrementUsesState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        {/* <Clock /> */}
        {/* <Saluer/> */}
        {/* <ChooseFruits/> */}
        {/* <Goal/> */}
        <HelloDear/>
        <ClockMaster/>
        <Button1/>
        
        
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


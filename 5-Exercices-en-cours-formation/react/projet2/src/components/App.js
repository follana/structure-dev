// import logo from '../logo.svg';
import '../App.css';
import TypesExample from './boostrap'
import Header from './Header'
import Balance from './calcul-calorique';
import ClockMaster from './clock';

import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header/>
        <Routes>
          <Route path ="/" element={<TypesExample/>}/>
          <Route path ="/clock" element={<ClockMaster/>} />
          <Route path ="/calcul-calorique" element={<Balance/>} />

        </Routes>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

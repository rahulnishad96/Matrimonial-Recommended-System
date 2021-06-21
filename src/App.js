import React from 'react';
import Headers from './components/Header/Headers';
import './App.css'
//import Carousel from "react-elastic-carousel";
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
        {/* <nav>
          { <Headers/> }
        </nav> 
        <main>
          { <HomePage/> } 
        </main> */}
          {/* { <Login/>} */}
          <Register/>
    </div>
  );
}

export default App;

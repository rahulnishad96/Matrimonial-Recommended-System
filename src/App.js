import React from 'react';
import Headers from './components/Headers';
import './App.css'
//import Carousel from "react-elastic-carousel";
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
        <nav>
          <Headers/>
        </nav>
        <main>
          <HomePage/>
        </main>
    </div>
  );
}

export default App;

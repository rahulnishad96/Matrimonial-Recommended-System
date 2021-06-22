import React,{useState} from 'react';
import Headers from './components/Header/Headers';
import './App.css'
//import Carousel from "react-elastic-carousel";
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  const[loginStatus,setloginStatus]=useState(false);
  const[registerStatus,setRegisterStatus]=useState(false);
  const loginHandler = () => {
    if(registerStatus)
      setRegisterStatus(false);
    setloginStatus(true);
  }
  const registerHandler = () => {
    if(loginStatus)
    {
      setloginStatus(false);
    }
    setRegisterStatus(true);
  }
  const homepageHandler=()=>{
    setRegisterStatus(false);
    setloginStatus(false);
  }
  return (
    <div className="App">
        {!loginStatus && !registerStatus && <div>
          <nav><Headers onLogin={loginHandler} onRegister={registerHandler}/></nav> 
          <main><HomePage onRegister={registerHandler} onLogin={loginHandler}/> </main>
        </div>
        }
          {loginStatus && !registerStatus && <Login onHome={homepageHandler} onRegister={registerHandler}/>}
          {!loginStatus &&  registerStatus && <Register onLogin={loginHandler} onHome={homepageHandler}/> }
    </div>
  );
}

export default App;

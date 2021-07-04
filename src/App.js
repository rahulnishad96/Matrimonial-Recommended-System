import React,{useState} from 'react';
import Headers from './components/Header/Headers';
import './App.css'
//import Carousel from "react-elastic-carousel";
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainPage from './components/UserMainPage/MainPage';
function App() {
  let fulldetails={
    fullname:"",
    gender:"",
    motherTongue:"",
    community:"",
    location:"",
    withFamily:"",
    marriedStatus:"",
    height:"",
    deit:"",
    subCommunity:"",
    qualification:"",
    income:"",
    workAs:"",
    workIn:"",
    userId:"",
    password:"",
    dob:"",
    mobNumber:""
  };
  const[loginStatus,setloginStatus]=useState(false);
  const[registerStatus,setRegisterStatus]=useState(false);
  const[fullDetailValue,setFullDetailsValue]=useState(fulldetails);
  const [userMainPageStatus, setuserMainPageStatus] = useState(false);
  const loginHandler = () => {
    if(registerStatus)
      setRegisterStatus(false);
    setloginStatus(true);
  }
  const registerHandler = (data) => {
    setFullDetailsValue((previous)=>{
      return({
        ...previous,
        fullname:data.fullName,
        gender:data.gender,
        motherTongue:data.motherTongue,
        community:data.community,
      });
    });
    if(loginStatus)
    {
      setloginStatus(false);
    }
    setRegisterStatus(true);
  }
  const ContinueHandler = (data) => {
    setFullDetailsValue((previous)=>{
      return({
        ...previous,
        location:data.location,
        withFamily:data.withFamily,
        marriedStatus:data.marriedStatus,
        height:data.height,
        deit:data.deit,
        subCommunity:data.subCommunity,
        qualification:data.qualification,
        income:data.income,
        workAs:data.workAs,
        workIn:data.workIn
      });
    });
  }

  async function add()
  {
    const response =await fetch("https://matrimonial-system-default-rtdb.firebaseio.com//user.json",{
      method:"POST",
      body:JSON.stringify(fullDetailValue),
      headers:{
        "content-Type":"application/json"
      }
    });
    const data=await response.json();
    console.log(data);
  }
  const FullContinueHandler = (data) => {
    setFullDetailsValue((previous)=>{
      return({
        ...previous,
        userId:data.userId,
        password:data.password,
        dob:data.dob,
        mobNumber:data.mobNumber
      });
    });
    add();
    setuserMainPageStatus(true);
  }
  console.log(fullDetailValue);
  const homepageHandler=()=>{
    setRegisterStatus(false);
    setloginStatus(false);
  }
  return (
    <div className="App">
        {!loginStatus && !registerStatus && !userMainPageStatus &&<div>
          <nav><Headers onLogin={loginHandler} onRegister={registerHandler}/></nav> 
          <main><HomePage onRegister={registerHandler} onLogin={loginHandler}/> </main>
        </div>
        }
          {loginStatus && !registerStatus && !userMainPageStatus && <Login onHome={homepageHandler} onRegister={registerHandler}/>}
          {!loginStatus &&  registerStatus && !userMainPageStatus && <Register onLogin={loginHandler} onHome={homepageHandler} onContinue={ContinueHandler} onFullContinue={FullContinueHandler}/> }
          {userMainPageStatus && <MainPage/>}
    </div>
  );
}

export default App;

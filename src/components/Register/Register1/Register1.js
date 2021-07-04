import React,{useState} from 'react'
import './Register1.css'
function Register(props) {
    const [location, setlocation] = useState("");
    const [withFamily, setwithFamily] = useState("");
    const [marriedStatus, setmarriedStatus] = useState("");
    const [height, setheight] = useState("");
    const [deit, setdeit] = useState("");
    const [subCommunity, setsubCommunity] = useState("");
    const [qualification, setqualification] = useState("");
    const [income, setincome] = useState("");
    const [workAs, setworkAs] = useState("");
    const [workIn, setworkIn] = useState("");


    const details = {
        location:location,
        withFamily:withFamily,
        marriedStatus:marriedStatus,
        height:height,
        deit:deit,
        subCommunity:subCommunity,
        qualification:qualification,
        income:income,
        workAs:workAs,
        workIn:workIn
    }
    const submitHandler = () => {
        props.onContinue(details);
    }
    const locationHandler =(e) =>{
        setlocation(e.target.value);
    }

    const withFamilyHandler =(e) =>{
        setwithFamily(e.target.value);
    }

    const marriedStatusHandler =(e) =>{
        setmarriedStatus(e.target.value);
    }

    const heightHandler =(e) =>{
        setheight(e.target.value);
    }

    const deitHandler =(e) =>{
        setdeit(e.target.value);
     }

    const subCommunityHandler =(e) =>{
       setsubCommunity(e.target.value);
    }

    const qualifiactionHandler =(e) =>{
        setqualification(e.target.value);
     }

    const incomeHandler =(e) =>{
        setincome(e.target.value);
     }

    const workAsHandler =(e) =>{
        setworkAs(e.target.value);
     }

     const workInHandler =(e) =>{
        setworkIn(e.target.value);
     }
    return (
        <div className="register">
            <nav>
                <button onClick={props.onHome}>Home</button>
                <button onClick={props.onLogin}>Login</button>
            </nav>
            <section className="form-section" id="form"> 
            <form onSubmit={submitHandler}>
                <p className="heading">Welcome! Lets create Your Profile</p>
                <div className="form-div">
                    <div className="form">
                        <p className="heading">Personal</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>City you live in </p>
                                <input placeholder="Eg. Mumbai" required onChange={locationHandler}/>
                            </div>
                            <div className="gender">
                                <p>Are you live with your Famity ?</p>
                                <form>
                                    <label for="male">Select</label>
                                    <input type="radio" name="With-Family" id="Yes" value="Yes" onChange={withFamilyHandler}/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" name="With-Family" id="No" value="No" onChange={withFamilyHandler}/>
                                    <label for="No">No</label>
                                </form>
                            </div>
                        </div>


                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your marital Status</p>
                            <select name="Marital-status" required onChange={marriedStatusHandler}>
                                <option value="">Select</option>
                                <option value="Never Married" >Never Married</option>
                                <option value="Married">Married</option>
                            </select>
                        </div>
                        <div className="mother-tongue" required onChange={heightHandler}>
                            <p>Your Height</p>
                            <select name="Hight" >
                                <option value="">Select</option>
                                <option value="5-fit 1-inch">5-fit 1-inch</option>
                                <option value="5-fit 2-inch">5-fit 2-inch</option>
                                <option value="5-fit 3-inch">5-fit 3-inch</option>
                                <option value="5-fit 4-inch">5-fit 4-inch</option>
                                <option value="5-fit 5-inch">5-fit 5-inch</option>
                                <option value="5-fit 6-inch">5-fit 6-inch</option>
                                <option value="5-fit 7-inch">5-fit 7-inch</option>
                                <option value="5-fit 8-inch">5-fit 8-inch</option>
                                <option value="5-fit 9-inch">5-fit 9-inch</option>
                                <option value="5-fit 10-inch">5-fit 10-inch</option>
                                <option value="5-fit 11-inch">5-fit 11-inch</option>
                                <option value="6-fit 0-inch">6-fit 0-inch</option>
                                <option value="6-fit 1-inch">6-fit 1-inch</option>
                                <option value="6-fit 2-inch">6-fit 2-inch</option>
                                <option value="6-fit 3-inch">6-fit 3-inch</option>
                                <option value="6-fit 4-inch">6-fit 4-inch</option>
                                <option value="6-fit 5-inch">6-fit 5-inch</option>
                            </select>
                        </div>
                        </div>


                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your deit</p>
                            <select name="dait" required onChange={deitHandler}>
                                <option value="">Select</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-veg">Non-veg</option>
                                <option value="Occasiaanally Non-veg">Occasiaanally Non-veg</option>
                                <option value="Eggetarian">Eggetarian</option>
                            </select>
                        </div>
                        <div className="full-name">
                                <p>Your sub Community </p>
                                <input placeholder="Eg. Brahmin" required onChange={subCommunityHandler}/>
                            </div>
                        </div>
                        <p className="heading">Education</p>
                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your Highest quilification</p>
                            <select name="quilification" required onChange={qualifiactionHandler}>
                                <option value="">Select</option>
                                <option value="Phd">Phd</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                                <option value="Under-Graduate">Under-Graduate</option>
                                <option value="12th">12th</option>
                                <option value="10th">10th</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                        <div className="mother-tongue">
                            <p>Your Monthly Income</p>
                            <select name="income" required onChange={incomeHandler}>
                                <option value="">Select</option>
                                <option value="500000">More than 2 Lakhs</option>
                                <option value="200000">Between 1 to 2 Lakhs</option>
                                <option value="100000">Between 50000 to 1 Lakh</option>
                                <option value="50000">Between 30000 to 50000</option>
                                <option value="30000">Between 15000 to 30000</option>
                                <option value="15000">Between 5000 to 15000</option>
                                
                            </select>
                        </div>
                        </div>

                        <div className="second-row">
                        <div className="full-name">
                                <p>You work as</p>
                                <input placeholder="Eg. Manager" required onChange={workAsHandler}/>
                            </div>
                        
                            <div className="full-name">
                                <p>You work in</p>
                                <input placeholder="Eg. Mahindra" required onChange={workInHandler}/>
                            </div>
                        </div>
                        <button className="form-btn" type="submit">Continue</button>
                    </div>
                </div>
                </form>
            </section>

            <footer className="footer">
                <p>© Sangam, Community Matchmaking Trusted By Parents TM</p>
                <p>Passionately created by <a href="#" target="_blank">Rahul Nishad</a></p>
                <p>Version 0.1.1</p>
            </footer>
        </div>
    )
}

export default Register

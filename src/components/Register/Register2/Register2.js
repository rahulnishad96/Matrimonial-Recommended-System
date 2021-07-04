import React,{useState} from 'react'
import './Register2.css'
function Register2(props) {
    const [userId, setuserId] = useState("");
    const [password, setpassword] = useState("");
    const [dob, setdob] = useState("");
    const [mobNumber, setmobNumber] = useState("");

    const userIdHandler =(e) =>{
        setuserId(e.target.value);
    }

    const passwordHandler =(e) =>{
        setpassword(e.target.value);
    }

    const dobdHandler =(e) =>{
        setdob(e.target.value);
    }

    const mobNumberHandler =(e) =>{
        setmobNumber(e.target.value);
    }

    const details = {
        userId:userId,
        password:password,
        dob:dob,
        mobNumber:mobNumber,
    }

    const submitHandler = () => {
        props.onContinue(details);
    }
    return (
        <div className="register2">
            <nav>
                <button onClick={props.onHome}>Home</button>
                <button onClick={props.onPrev}>Previous</button>
            </nav>
            <section className="form-section" id="form">
                <p className="heading">Just Completed</p>
                <div className="form-div">
                    <form onSubmit={submitHandler}>
                    <div className="form">
                        <p className="heading">Account Details</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>Mobile Number or Email ID</p>
                                <input placeholder="Mobile Number or Email ID" required onChange={userIdHandler}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Password</p>
                                <input placeholder="Password" required type="password" onChange={passwordHandler}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="date">
                                <p>Date of Birth</p>
                                <input placeholder="" required type="date" onChange={dobdHandler}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Mobile Number</p>
                                <input placeholder="XXXXX XXXXX" required type="text" onChange={mobNumberHandler}/>
                            </div>
                        </div>
                        <button className="form-btn" type="submit">Register</button>
                    </div>
                    </form>
                </div>
            </section>

            <footer className="footer">
                <p>© Sangam, Community Matchmaking Trusted By Parents TM</p>
                <p>Passionately created by <a href="https://portfolio-page-omega.vercel.app/" target="_blank">Rahul Nishad</a></p>
                <p>Version 0.1.1</p>
            </footer>
        </div>
    )
}

export default Register2

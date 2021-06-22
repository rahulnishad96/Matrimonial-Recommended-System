import React from 'react'
import './Register2.css'
function Register2(props) {
    return (
        <div className="register2">
            <nav>
                <button onClick={props.onHome}>Home</button>
                <button onClick={props.onPrev}>Previous</button>
            </nav>
            <section className="form-section" id="form">
                <p className="heading">Just Completed</p>
                <div className="form-div">
                    <div className="form">
                        <p className="heading">Account Details</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>Mobile Number or Email ID</p>
                                <input placeholder="Mobile Number or Email ID" required/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Password</p>
                                <input placeholder="Password" required type="password"/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="date">
                                <p>Date of Birth</p>
                                <input placeholder="" required type="date"/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Mobile Number</p>
                                <input placeholder="XXXXX XXXXX" required type="text"/>
                            </div>
                        </div>
                        <button className="form-btn">Register</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© Sangam, Community Matchmaking Trusted By Parents TM</p>
                <p>Passionately created by <a href="#" target="_blank">Rahul Nishad</a></p>
                <p>Version 0.1.1</p>
            </footer>
        </div>
    )
}

export default Register2

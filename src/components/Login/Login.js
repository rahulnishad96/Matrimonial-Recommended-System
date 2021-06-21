import React from 'react'
import './Login.css';
function Login() {
    return (
        <div className="login">
            <nav>
                <button>Home</button>
                <button>Register</button>
            </nav>
            <section className="form-section" id="form">
                <p className="heading">Welcome Back!</p>
                <div className="form-div">
                    <div className="form">
                        <p className="heading">Please Login</p>
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
                        <button className="form-btn">Login</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© Sangam, Community Matchmaking Trusted By Parents TM</p>
                <p>Passionately created by <a href="#" target="_blank">Rahul Nishad</a></p>
                <p>Version 0.1.72</p>
            </footer>
        </div>
    )
}

export default Login

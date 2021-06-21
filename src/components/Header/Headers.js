import React from 'react';
import './Headers.css';
function Headers() {
    return (
        <div className="nav">
            <a href="">
                <img src="https://s2-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/192/800/original/new_logo_greenhouse.png?1534280380" alt="logo"></img>
            </a>
            <div>
                <button className="btn-login">Login</button>
                <span> | </span>
                <button className="btn-reg">Register</button>
            </div>
        </div>
    )
}

export default Headers

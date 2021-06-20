import React from 'react'
//import Form from './FormComponent/Form'
//import StoryItem from './StoryItem'
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandshake, faLock, faTrophy } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function HomePage() {
    return (
        <div>
            {/* <img className="homepage-img"src="https://img2.sangam.com/assets/home/HomePage_Marathi.jpg" alt="homepageImage"></img> */}
            <section className="title-section">
                <p className="title">...because a marriage is between two families</p>
            </section>
            <section className="form-section">
                <p className="heading">Matches Within Your Community</p>
                <p className="explain">Genuine Profiles | Safe & Secure | Detailed Family Information</p>
                <div className="form-div">
                    <div className="form">
                        {/* <Form/> */}
                    </div>
                </div>
            </section>
            <section className="why">
                <p className="why-heading">Why register on this Website?</p>
                <div className="why-heading-border"></div>
                <div className="why-reason-div">
                    <div className="reason">
                        <div className="trophy">
                            <FontAwesomeIcon icon={faTrophy} color="white" />
                        </div>
                        <h6>No.1 rated site</h6>
                        <p>Most recommended matchmaking service </p>
                    </div>
                    <div className="reason">
                        <div className="handshake">
                            <FontAwesomeIcon icon={faHandshake}color="white" />
                        </div>
                        <h6>History of success</h6>
                        <p>1 million matches and counting!</p>
                    </div>
                    <div className="reason">
                        <div className="lock">
                            <FontAwesomeIcon icon={faLock} color="white" />
                        </div>
                        <h6>100% Privacy</h6>
                        <p>100% Control on your Photos and info </p>
                    </div>
                    <div className="reason">
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} color="white" />
                        </div>
                        <h6>Full secure</h6>
                        <p>Patent pending technology for your safety</p>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <p className="why-heading">About Us</p>
                <div className="why-heading-border"></div>
                <p className="explain">This cite is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.</p>
            </section>
            <section className="story">
                <h1 className="heading">Our Success story</h1>
                {/* <StoryItem/>  */}
            </section>
        </div>
    )
}

export default HomePage;
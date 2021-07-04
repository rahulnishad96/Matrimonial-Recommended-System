import React,{useState} from 'react'
//import Form from './FormComponent/Form'
//import StoryItem from './StoryItem'
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandshake, faLock, faTrophy } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function HomePage(props) {
    const [fullName, setfullName] = useState("");
    const [gender, setgender] = useState("");
    const [motherTongue, setmotherTongue] = useState("Hindi");
    const [community, setcommunity] = useState("Hindu");

    const fullNameHandler = (e) => {
        setfullName(e.target.value);
    }

    const gendarHandler = (e) => {
        setgender(e.target.value);
    }

    const motherTongueHandler = (e) => {
        setmotherTongue(e.target.value);
    }

    const communityHandler = (e) => {
        setcommunity(e.target.value);
    }

    const details = {
        fullName:fullName,
        gender:gender,
        motherTongue:motherTongue,
        community:community
    };

    const SubmitHandler = () => {
        props.onRegister(details);
    }
    return (
        <div>
            {/* <img className="homepage-img"src="https://img2.sangam.com/assets/home/HomePage_Marathi.jpg" alt="homepageImage"></img> */}
            <section className="title-section" id="title">
                <p className="title">...because a marriage is between two families</p>
            </section>
            <section className="form-section" id="form">
                <form onSubmit={SubmitHandler}>
                <p className="heading">Matches Within Your Community</p>
                <p className="explain">Genuine Profiles | Safe & Secure | Detailed Family Information</p>
                <div className="form-div">
                    <div className="form">
                        <div className="first-row">
                            <div className="full-name">
                                <p>Full Name </p>
                                <input placeholder="Full Name" required onChange={fullNameHandler}/>
                            </div>
                            <div className="gender">
                                <p>Select </p>
                                <form required>
                                    <label for="male">Gender </label>
                                    <input type="radio" name="gender" id="male" value="male" required onChange={gendarHandler}/>
                                    <label for="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="female" required onChange={gendarHandler}/>
                                    <label for="female">Female</label>
                                </form>
                            </div>
                        </div>
                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Mother Tongue</p>
                            <select name="mother-Tongue" required onChange={motherTongueHandler}>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Bangali">Bangali</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Gujrati">Gujrati</option>
                                <option value="Kannada">Kannada</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-community">
                            <p>Community</p>
                            <select name="community" required onChange={communityHandler}>
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Christian">Christian</option>
                                <option value="Jain">Jain</option>
                                <option value="Sikh">Sikh</option>
                                <option value="Buddist">Buddist</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        </div>
                        <button className="form-btn"  type="submit">Lets Begin</button>
                    </div>
                </div>
                </form>
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
            
            <section className="story">
                <h1 className="heading">Our Success story</h1>
                <div className="why-heading-border"></div>
                <div className="card-box">
                    <div className="card">
                        <img src="https://previews.123rf.com/images/dragonimages/dragonimages1907/dragonimages190701968/128303176-portrait-of-happy-young-indian-couple-with-opened-book-and-glass-of-lemonade-looking-at-camera.jpg" alt="image"></img>
                        <p>Riya and Shubham</p>
                        <a href="#" target="_blank">Read more</a>
                    </div>
                    <div className="card">
                        <img src="https://st.depositphotos.com/1011643/4431/i/950/depositphotos_44310803-stock-photo-beautiful-young-indian-couple.jpg" alt="image"></img>
                        <p>Bhavana and Deepak</p>
                        <a href="#" target="_blank">Read more</a>
                    </div>
                    <div className="card">
                        <img src="https://s3.envato.com/files/288644194/_8532770.jpg" alt="image"/>
                        <p>Rohit and Aruhi</p>
                        <a href="#" target="_blank">Read more</a>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <p className="why-heading">About Us</p>
                <div className="why-heading-border"></div>
                <p className="explain-p">This cite is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.</p>
            </section>

            <section className="community">
                <p className="heading">Community Matchmaking, Trusted by Parents</p>
                <a href="#title" className="btn">show matches</a>
            </section>

            <footer className="footer">
                <p>© Sangam, Community Matchmaking Trusted By Parents TM</p>
                <p>Passionately created by <a href="#" target="_blank">Rahul Nishad</a></p>
                <p>Version 0.1.1</p>
            </footer>
        </div>
    )
}

export default HomePage;
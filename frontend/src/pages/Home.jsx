import { Link } from "react-router-dom";
import '../css/Home.css';
import Footer from '../components/Footer';
import logo from '../assets/images/discussion_dock.png';


export default () => {
    return (
        <section className=" main w-full flex-col justify-start items-center">

            <div className="navbar "> 
                <img src={logo} alt="logo_img" />

                <button className="tryitout"> <Link to="/signup"> Try It Out </Link>  </button>

                <Link to="/login"> <button className="login_main"> <span>Login</span>  <i className="material-icons">chevron_right </i>  </button> </Link>


            </div>

            <div className="about">
                <h1> Share, Learn, Connect </h1>
                <p>Join threads on trending topics, personal interests, and questions to </p>
                    <p>spark engaging, respectful dialogue.</p>
            </div>

            <div className="tabsDiv">
                <ul>
                    <li className="tabList">
                        <div className="lessContent">
                            <div className="left">
                                Trending
                            </div>
                            <div className="material-icons">
                                whatshot
                            </div>
                        </div>
                        <div className="boldContent">
                                Entertainment
                        </div>
                    </li>
                    <li>

                    <div className="listImg"> 
                        <div> <h1>Akon </h1> <span className="material-icons">bookmark</span> 
                        </div>
                        <div className="w-fit">
                            <span className="material-icons"> favorite</span>
                            <span className="material-icons"> comment</span>
                            <span className="material-icons"> send</span>
                        </div>
                    </div>


                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Live Score
                            </div>
                            <div className="material-icons">
                            sports_score
                            </div>
                        </div>
                        <div className="boldContent">
                                Sports
                        </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                AI Innovation
                            </div>
                            <div className="material-icons">
                            psychology
                            </div>
                        </div>
                        <div className="boldContent">
                                Education
                        </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Hot Topics
                            </div>
                            <div className="material-icons">
                            newspaper
                            </div>
                        </div>
                        <div className="boldContent">
                                News
                        </div>
                    </li>
                    <li>
                    <div className="listImg2"> 
                        <div> <h1> Seria </h1> <span className="material-icons">bookmark</span> 
                        </div>
                        <div className="w-fit">
                            <span className="material-icons"> favorite</span>
                            <span className="material-icons"> comment</span>
                            <span className="material-icons"> send</span>
                        </div>
                    </div>
                    </li>
                    <li className="tabList">
                    <div className="lessContent">
                            <div className="left">
                                Wind Speed
                            </div>
                            <div className="material-icons">
                            air
                            </div>
                        </div>
                        <div className="boldContent">
                                Nature
                        </div>
                    </li>
                </ul>
            </div>
            

            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <Footer />
            
        </section>
    )
}

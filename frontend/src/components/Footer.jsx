import { Link } from "react-router-dom";
import '../css/Footer.css';
import logo from '../assets/images/discussion_dock.png';

export default () => {
    return (
        <div className="footer_div ">
            <div className='pallete'> 
                <div className='footer_top'> 
                    <img src={logo} alt="logoImg"/>
                    <h1> Where Your Interests Spark Conversations! </h1>
                    <p>Explore topics, spark discussions, and connect over shared interests. Our platform </p> <p>is built for meaningful, respectful conversations.</p>
                      <button><Link to="/signup"> Get Started Now </Link></button> 
                </div>

                <div className='footer_lists'>
                    <ul>
                        <h5>// Contact</h5>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                    <ul>
                        <h5>// Support</h5>
                        <li>Help Center</li>
                        <li>Support Community</li>
                        <li>Documnentation</li>
                        <li>Commuity Forum</li>
                    </ul>
                    <ul>
                        <h5>// Resources</h5>
                        <li>Our Blogs</li>
                        <li>Extension</li>
                        <li>Plugins</li>
                        <li>Newsletter</li>
                    </ul>
                    <ul>
                        <h5>// About</h5>
                        <li>About us</li>
                        <li>Events</li>
                        <li>Partner</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className='footer_bottom'>
                        <hr/>
                        <div className="content w-full"> 
                            <div className="subcontent1">
                                <h1> <b>Never miss an update</b></h1>
                                <p>Get all the latest news, updates and app features from <b>Discussion Dock</b>. Deliver directly to your inbox. Dont worry we wont fill your inbox with our mails. </p>
                            </div>
                            <div className="subcontent2">
                                <div> <input type="text" id="join_mail" placeholder="example@gmail.com"/> <button id="join_button" > Join</button> </div>
                                <div className="check_div"> <input type="checkbox" name="" id="" /> <p> I agree to recieve marketing emails</p> </div>
                            </div>
                        </div>
                        <div className="copyright_div"> 
                            <div className="copyright "><i className="material-icons"> copyright </i>  Copyright 2024. All rights reserved
                            </div> 
                            <div> <button>Privacy Policy </button>
                                  <button> Terms of Service</button>
                            </div>
                            
                        </div>
                </div>
                
            </div>
        </div>
    )
}
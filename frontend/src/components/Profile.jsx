import "../css/Profile.css";
import Navbar from "./Navbar";
import userImg from "../assets/images/userIcon.png";
import Posts from "../components/Posts"

export default() => {
    return(
        <div>

            <Navbar heading="Profile"/>
            <div className=" main_profile">
                <div className="Userboard">
                    <div className="Personalboard">
                        <img className="userimage"  src={userImg} alt="No Image" />
                        <div className="userName">
                                <span id="name">User Name</span>
                                
                        </div>
                        <div className="userStats">
                                <div>
                                    <h3 id="postCount">0</h3>
                                    <span>Posts</span>
                                </div>
                                <div>
                                    <span id="communityCount">0</span>
                                    <span>Communities</span>
                                </div>
                        </div>
                        {/* <p id="description">Hi, this is username. I am the admin of PDF file community a;lsdjaisonasoicnasncnascnascn</p> */}
                    <div className="buttons">
                    <button className="customBtn">Edit Profile</button>
                    <button className="customBtn">Share Profile</button>
                    <button className="customBtn">Saved Posts</button>

                    </div>

                        </div>
                        <div className="divider"></div>
                        <div className="Postsboard">
                            <Posts />
                        </div>
                </div>
            </div>

        </div>
    )
}
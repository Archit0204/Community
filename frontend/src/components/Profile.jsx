import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import Navbar from "./Navbar"
import PostCard from "./PostCard"
import "../css/Profile.css"
import userImg from "../assets/images/userIcon.png";
import ansh from "../assets/images/WhatsApp Image 2024-11-20 at 19.26.07_5470287a.jpg";

export default function Profile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchUserData() {
        try {
            const token = localStorage.getItem("token")
            
            const response = await axios.get("http://localhost:4000/api/v1/auth/fetch", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
            })

            setUser(response.data.user)
        }
        catch (err) {
            toast.error("Network Problem")
        }
        }

        fetchUserData()
    }, [])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
        <Navbar heading="Profile"/>
        <div className="main_profile">
            <div className="Userboard">
            <div className="Personalboard">
                <img className="userimage rounded-full" src={userImg} alt="User Icon" />
                <div className="userName">
                <span id="name">{user.firstName} {user.lastName}</span>
                </div>
                <div className="userStats">
                <div>
                    <h3 id="postCount">{user.posts.length}</h3>
                    <span>Posts</span>
                </div>
                <div>
                    <span id="communityCount">0</span>
                    <span>Communities</span>
                </div>
                </div>
                <div className="buttons">
                <button className="customBtn">Edit Profile</button>
                <button className="customBtn">Share Profile</button>
                <button className="customBtn">Saved Posts</button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="Postsboard">
                <div className="main_posts w-full p-8 flex-col justify-start items-center gap-3 overflow-hidden">
                <div className="flex-col justify-center items-center">
                    {user.posts.length > 0 ? (
                    user.posts.map((post, index) => (
                        <div key={index} className="w-[300px]">
                        <PostCard post={post}/>
                        </div>
                    ))
                    ) : (
                    <div>No Posts Available</div>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
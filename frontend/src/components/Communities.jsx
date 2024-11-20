import '../css/Communities.css';
import PostNav from "../components/PostNav";
import Posts from "../components/Posts";
import Navbar from './Navbar';


export default() => {
    return(
        <div>
            <Navbar heading="Communities"/>
        <div className="main_communities flex flex-row">
            <div className="w-full">
                <div className="community_page"> 
                    <div className="communitylistHeading "> List of Communities</div>
                    <div className="communitylistItems communitylistItem1 "> SPORTS</div>
                    <div className="communitylistItems communitylistItem2 "> TECHNOLOGY</div>
                    <div className="communitylistItems communitylistItem3 ">
                        <h2>A</h2>
                        <h2>R</h2>
                        <h2>T</h2>
                    </div>
                    <div className="communitylistItems communitylistItem4 "> TRAVEL</div>
                    <div className="communitylistItems communitylistItem5 "> ENTERTAINMENT</div>
                    <div className="communitylistItems communitylistItem6 "> GAMES</div>
                    <div className="communitylistItems communitylistItem7 "> NATURE</div>
                    <div className="communitylistItems communitylistItem8 "></div>
                </div>
                 <Posts/>
            </div>
            <PostNav />
        </div>
        </div>
        
    )
}
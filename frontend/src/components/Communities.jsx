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
                    <div className="communitylistItems communitylistItem1 "></div>
                    <div className="communitylistItems communitylistItem2 "></div>
                    <div className="communitylistItems communitylistItem3 "></div>
                    <div className="communitylistItems communitylistItem4 "></div>
                    <div className="communitylistItems communitylistItem5 "></div>
                    <div className="communitylistItems communitylistItem6 "></div>
                    <div className="communitylistItems communitylistItem7 "></div>
                    <div className="communitylistItems communitylistItem8 "></div>
                </div>
                 <Posts/>
            </div>
            <PostNav />
        </div>
        </div>
        
    )
}
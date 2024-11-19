import Posts from "../components/Posts";
import PostNav from "../components/PostNav";
import Navbar from "./Navbar";

export default() => {
    return(
        <div >

            <Navbar heading="Home" />
        <div className="flex flex-row">
            <Posts /> 
            <PostNav />
        </div>
        </div>
    )
}
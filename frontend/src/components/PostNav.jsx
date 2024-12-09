import "../css/PostNav.css"
import { Link } from "react-router-dom"

export default() => {
    return(
        <div className="main_PostNav">
            <div className="sideNav flex flex-col">
                <button  className="material-icons w-full sideNavButton"> <Link to="upload"> add </Link> </button>
                <span>Upload</span>
                <button className="material-icons sideNavButton">chat</button>
                <span>Chats</span>
                <button className="material-icons sideNavButton">notes</button>
                <span>Notes</span>
                <button className="material-icons sideNavButton"> <Link to="settings"> settings </Link> </button>
                <span> Settings </span>
            </div>
        </div>
    )
}
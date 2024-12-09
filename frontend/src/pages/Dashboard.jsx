import { Outlet } from "react-router-dom"
import { useState } from "react"
import Posts from "../components/Posts"
import UploadPost from "../components/UploadPost"
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import Communities from "../components/Communities";

export default ({darkmode}) => {

    const [flag, setFlag] = useState(false);

    return (
        <div className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} flex`}>
            <Sidebar />

            <div>
            {/* < Navbar /> */}
            {/* <UploadPost setFlag={setFlag}/> */}

            <Outlet />

            </div>
            
        </div>
    )

}
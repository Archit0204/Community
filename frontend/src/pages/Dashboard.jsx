import { Outlet, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Posts from "../components/Posts"
import UploadPost from "../components/UploadPost"
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import Communities from "../components/Communities";

export default () => {

    const [flag, setFlag] = useState(false);

    return (
        <div className=" bg-white text-black flex">
            <Sidebar />

            <div>
            {/* < Navbar /> */}
            {/* <UploadPost setFlag={setFlag}/> */}

            <Outlet />

            </div>
            
        </div>
    )

}
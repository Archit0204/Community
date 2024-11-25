import "../css/Settings.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";


export default() =>{
    return(
        <div className="main_settings flex justify-center items-center">
            <div className="settingsBox flex flex-col p-5 space-y-5">
                <h1 className="text-3xl"> Settings </h1>
                <ul className="flex flex-row w-full justify-around ">
                    <li className="settingtype"> <Link to=""> General </Link> </li>
                    <li className="settingtype">Security</li>
                    <li className="settingtype">Notifications</li>
                    <li className="settingtype">Apps</li>
                    <li className="settingtype">Sharing</li>
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
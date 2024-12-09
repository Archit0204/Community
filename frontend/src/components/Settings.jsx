import "../css/Settings.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";


export default() =>{
    return(
        <div className="main_settings flex justify-center items-center">
            <div className="settingsBox flex flex-col p-5 space-y-5">
                <h1 className="text-3xl"> Settings </h1>
                <ul className="flex flex-row w-full justify-around ">
                    <li className="settingtype"> <Link to=""> General </Link> </li>
                    <li className="settingtype"> <Link to="security"> Security</Link></li>
                    <li className="settingtype"><Link to="notifications">Notifications</Link></li>
                    <li className="settingtype"> <Link to="apps">Apps</Link> </li>
                    <li className="settingtype"><Link to="sharing">Sharing</Link></li>
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
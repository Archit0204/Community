import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './css/Home.css'
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import logo from './assets/images/discussion_dock.png';
import Posts from "./components/Posts";
import Communities from "./components/Communities";
import Profile from "./components/Profile";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [flag, setFlag] = useState(false);
    
    return (
        <div className="w-full min-h-screen flex-col justify-start items-center ">

            {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/> 
                <Route path="/dashboard" element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Dashboard />
                    </PrivateRoute>
                    }>
                    <Route index element={<Posts flag={flag} />} />
                    <Route path="communities" element={<Communities />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
                


            {/* <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
                        <Route element={<Dashboard />}>
                            <Route index element={<Posts flag={flag} />} />
                            <Route path="communities" element={<Communities />} />
                        </Route>
                    </Route> */}


        </div>
  )
}

export default App

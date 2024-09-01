import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="w-full min-h-screen flex-col justify-start items-center">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/> 
                <Route path="/dashboard" element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Dashboard/>
                    </PrivateRoute>
                } />
            </Routes>
        </div>
  )
}

export default App

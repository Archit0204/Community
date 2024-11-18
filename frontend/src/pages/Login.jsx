import { useState } from "react";
import Navbar from "../components/Navbar";
import logo from '../assets/images/discussion_dock_b&w.png';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import '../css/Login.css';

export default ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev, [event.target.name]: event.target.value
            }
        ))
    }

    async function submitHandler(event) {
        event.preventDefault();
        const postData = JSON.stringify(formData);

        try{
            const response = await fetch("http://localhost:4000/api/v1/auth/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: postData
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                toast.success("Logged In");

                const token = data.token;
                localStorage.setItem("token", token);

                setIsLoggedIn(true); // implement this using context api
                navigate("/dashboard");
            }
            else {
                toast.error("Error Logging In");
            }
        }
        catch(err) {
            console.log(err);
            toast.error("Error Logging In");
        }
    }

    return (
        <main className=" main_signup w-full pb-10 min-h-screen flex flex-row sm:px-4 bg-black">
            
            <div className="design_box">
                    <div className="box box1"></div>
                    <div className="box box2">
                        <div id="security_box">
                                <i className="material-icons"> waving_hand</i>
                                <p>Welcome back</p>
                                <p>to DOCK</p>
                        </div>
                    </div>
                    <div className="box box3"></div>
                    <div className="box box4">
                        <div id="login_box">
                            <i className="material-icons"> login</i>
                                <h1>Login</h1>
                                
                        </div>
                    </div>
                    <div className="box box1"></div>
                    <div className="box box2"></div>
                    <div className="box box3">
                        
                    </div>
                    <div className="box box4"></div>
                    <div className="box box1"></div>
                    <div className="box box2"></div>
                    <div className="box box3"></div>
                    <div className="box box4"></div>
                    <div className="box box1"></div>
                    <div className="box box2">
                    <div id="user_box">
                            <i className="material-icons"> person</i>
                            <p>User</p>
                            <p>Friendly</p>
                        </div>
                    </div>
                    <div className="box box3 ">
                        <div id="setting_box">
                            <i className="material-icons"> settings </i>
                            <p>Customizable</p>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="box box4"></div>
            </div>

            <div className=" login_box space-y-6 ">
                <div className="text-center">
                    <div className="mt-5 space-y-2 flex flex-col items-center">
                        <img src={logo} alt="logo img" className="h-20 w-25 mb-6" />
                    <div className=" text-1xl logotext "> <Link to="/" > DISCUSSION DOCK </Link>  </div>
                    
                        <h3 className=" createAccount ">Welcome Back</h3>
                        <p> Enter your details to Sign in</p>
                        {/* <p className="">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p> */}
                    </div>
                </div>
                <div className=" shadow sm:rounded-lg flex flex-col items-center">
                    <form
                        onSubmit={submitHandler}
                        className="space-y-3 flex flex-col items-center"
                    >
                        <div>
                            {/* <label className="font-medium">
                                Email
                            </label> */}
                            <input
                                type="email"
                                required
                                className=" mt-2 px-3 py-2 text-gray-500 outline-none shadow-sm rounded-lg creAccInput"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            {/* <label className="font-medium">
                                Password
                            </label> */}
                            <input
                                type="password"
                                required
                                className=" mt-2 px-3 py-2 text-gray-500 outline-none shadow-sm rounded-lg creAccInput"
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className=" w-full">
                            <button> Forgot Password?</button>
                        </div>
                        <button
                            className=" creAccButton w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 "
                        >
                            Login  <i className="material-icons"> chevron_right </i>
                        </button>
                    </form>
                    <p className="mt-3">Dont have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">SignUp</Link></p>
                </div>
            </div>

        </main>
    )
}
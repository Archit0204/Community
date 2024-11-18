import { useState } from "react";
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/discussion_dock_b&w.png';
import '../css/Signup.css';

export default () => {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
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

        try {
            const response = await fetch("http://localhost:4000/api/v1/auth/signup", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: postData
            });

            const data = await response.json();

            console.log(data);

            if (data.success) {
                toast.success("Signed Up");
                navigate("/login");
            }
            else {
                toast.error("Error Signing Up");
            }
        }
        catch (err) {
            toast.error("Error Signing Up");
        }
    }

    return (
        <main className=" main_signup w-full pb-10 min-h-screen flex flex-row sm:px-4 bg-black">
            
            <div className=" signup_box space-y-6 ">
                <div className="text-center">
                    <div className="mt-5 space-y-2 flex flex-col items-center">
                        <img src={logo} alt="logo img" className="h-20 w-25 mb-6" />
                    <div className=" text-1xl logotext "> <Link to="/" > DISCUSSION DOCK </Link>  </div>
                    
                        <h3 className=" createAccount ">Create an account</h3>
                        <p> Enter your personal data to create your account</p>
                        {/* <p className="">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p> */}
                    </div>
                </div>
                <div className=" shadow sm:rounded-lg flex flex-col items-center">
                    <form
                        onSubmit={submitHandler}
                        className="space-y-3 flex flex-col items-center"
                    >
                        <div className="">
                            {/* <label className="font-medium">
                                First Name
                            </label> */}
                            <input
                                type="text"
                                required
                                className=" mt-2 px-3 py-2 text-gray-500 outline-none shadow-sm rounded-lg creAccInput"
                                name="firstName"
                                value={formData.firstName}
                                placeholder="First Name"
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            {/* <label className="font-medium">
                                Last Name
                            </label> */}
                            <input
                                type="text"
                                required
                                className=" mt-2 px-3 py-2 text-gray-500 outline-none shadow-sm rounded-lg creAccInput"
                                name="lastName"
                                value={formData.lastName}
                                placeholder="Last Name"
                                onChange={changeHandler}
                            />
                        </div>
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
                        <div>
                            {/* <label className="font-medium">
                                Confirm Password
                            </label> */}
                            <input
                                type="password"
                                required
                                className=" mt-2 mb-8 px-3 py-2 text-gray-500 outline-none shadow-sm rounded-lg creAccInput"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={changeHandler}
                            />
                        </div>
                        <button
                            className=" creAccButton w-full  font-medium bg-indigo-600  active:bg-indigo-600 rounded-lg "
                        >
                            Sign up  <i className="material-icons"> chevron_right </i>
                        </button>
                    </form>
                    <p className="mt-3">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    {/* <div className="mt-5">
                        <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Continue with Google
                        </button>
                    </div> *******************put the comment closing tag here */}
                </div>
            </div>

            
            <div className="design_box">
                    <div className="box box1">
                        <div id="signup_box">
                        <i className="material-icons"> login</i>
                            <h1>Sign</h1>
                            <h1>Up</h1>
                            
                        </div>
                    </div>
                    <div className="box box2"></div>
                    <div className="box box3"></div>
                    <div className="box box4"></div>
                    <div className="box box1"></div>
                    <div className="box box2"></div>
                    <div className="box box3">
                        <div id="security_box">
                            <i className="material-icons"> lock</i>
                            <p>Secure by</p>
                            <p>Design</p>
                        </div>
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

        </main>
    )
}
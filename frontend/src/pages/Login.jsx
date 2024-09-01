import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
        <main className="w-full max-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={submitHandler}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <p className="hover:text-indigo-600 cursor-pointer  ">Forgot password?</p>
                    </div>
                </form>
            </div>
        </main>
    )
}
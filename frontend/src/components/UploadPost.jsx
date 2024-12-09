import { useState } from "react"
import "../css/UploadPost.css"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default ({setFlag}) => {

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        community: "",
        imageFile: null
    });
    const navigate = useNavigate();

    const communities = [
        "Sports",
        "Technology",
        "Art",
        "Entertainment",
        "Games",
        "Nature",
        "Travel",
        "Innovation"
    ];

    function changeHandler(event) {
        if (event.target.name === "imageFile") {
            setData(prev => (
                { ...prev, [event.target.name]: event.target.files[0] }
            ));
        }
        else {
            setData(prev => (
                {...prev, [event.target.name]: event.target.value}
            ))
        }
    }

    async function submitHandler(event) {
        event.preventDefault();
    
        // Create a new FormData object
        const formData = new FormData();

        // Append all form data to FormData
        for (const key in postData) {
            formData.append(key, postData[key]);
        }

        try{
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:4000/api/v1/uploadPost", formData, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                setPostData({
                    title: "", content: "", community: "", imageFile: null
                });
                setFlag((prev => !prev));
                toast.success("Post Added");
                navigate("/dashboard");
            }
            else {
                toast.error("Error adding post");
            }
        }
        catch(err) {
            console.log(err);
            toast.error("Error adding post");
        }
    }

    return (
        <div className="main_uploadPost flex justify-center items-center">
            <div className="uploadpostBox flex flex-col justify-between p-5 space-y-5">
                <form
                    className="h-full p-5 space-y-5 flex flex-col justify-between"
                    onSubmit={submitHandler}
                >
                    <h1>Create a Post</h1>
                    
                    <div className="imageUpload_box">
                        <label htmlFor="PostImage" className="material-icons">upload_file</label>
                        <input type="file" id="PostImage" accept="image/*" />
                        <h2>Click to Upload or Drag your image here</h2>
                    </div>
                    <div>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none rounded-lg"
                            placeholder="Type your content here.."
                            name="title"
                            value={postData.title}
                            onChange={changeHandler}
                        />
                    </div>
                    
                    {/* Community Dropdown */}
                    <div>
                        <select
                            name="community"
                            value={postData.community}
                            onChange={changeHandler}
                            className="w-1/4 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Select a Community</option>
                            {communities.map((community, index) => (
                                <option key={index} value={community.toLowerCase()}>
                                    {community}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex w-full justify-end">
                        <button type="button" className="border-2 px-10 py-2 rounded-lg border-grey">
                            <Link to="/dashboard">Cancel</Link>
                        </button>
                        <button
                            type="submit"
                            className="post_button ml-10 px-10 py-2 text-white font-medium active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


import { useState } from "react"
import "../css/UploadPost.css"
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default ({setFlag}) => {

    const [postData, setPostData] = useState({
        title: "", content: "", community: ""
    });

    const communities = [
        { value: "", label: "Select community" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" },
        { value: "arts", label: "Arts" },
        { value: "travel", label: "Travel" },
        { value: "entertainment", label: "Entertainment" },
        { value: "games", label: "Games" },
        { value: "nature", label: "Nature" },
        { value: "innovation", label: "Innovation" },
    ];

    function changeHandler(event) {
        setPostData((prev) => (
            {
                ...prev, [event.target.name]: event.target.value
            }
        ))
    }

    async function submitHandler(event) {
        event.preventDefault();
        const uploadData = JSON.stringify(postData);

        try{
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:4000/api/v1/uploadPost", {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: uploadData
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                setPostData({
                    title: "", content: "", community: ""
                });
                setFlag((prev => !prev));
                toast.success("Post Added");
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
                    className=" h-full p-5 space-y-5 flex flex-col justify-between"
                >
                    <h1> Create a Post</h1>
                    
                    <div className="imageUpload_box">
                    <label for="PostImage" className="material-icons"> upload_file </label>
                    <input type="file" id="PostImage" accept="image/*" />
                    <h2>Click to Upload or Drag your image here</h2>
                    </div>
                    <div>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none   rounded-lg"
                            placeholder="Type your content here.."
                            name="title"
                            value={postData.title}
                            onChange={changeHandler}
                        />
                    </div> 
                    <div>
                        <select
                            name="community"
                            id="communitySelector"
                            className="w-full px-2 py-2 selectCommunity"
                            value={postData.community || ""}
                            onChange={(e) => setPostData({ ...postData, community: e.target.value })}
                        >
                            {communities.map((community, index) => (
                                <option key={index} value={community.value}>
                                    {community.label}
                                </option>
                            ))}
                        </select>
                    </div>

                </form>

                {/* <div>
                    <label className="font-medium">
                            Content
                        </label>
                        <textarea
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg resize-none"
                            name="content"
                            value={postData.content}
                            onChange={changeHandler} />
                </div> */}

                
                <div className="flex w-full justify-end">
                            <button className=" border-2 px-10 py-2 rounded-lg border-grey"> <Link to="/dashboard">   Cancel </Link> </button>
                        <button
                            className="post_button ml-10 px-10 py-2 text-white font-medium active:bg-indigo-600 rounded-lg duration-150"
                            onClick={submitHandler}
                        >
                            Post
                        </button>
                </div>
            </div>
        </div>
    )

}
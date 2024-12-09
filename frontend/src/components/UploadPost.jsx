// import { useState } from "react"
// import "../css/UploadPost.css"
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default ({setFlag}) => {

//     const [postData, setPostData] = useState({
//         title: "",
//         content: "",
//         community: "",
//         imageFile: null
//     });
//     const navigate = useNavigate();

//     const communities = [
//         "Sports",
//         "Technology",
//         "Art",
//         "Entertainment",
//         "Games",
//         "Nature",
//         "Travel",
//         "Innovation"
//     ];

//     function changeHandler(event) {
//         if (event.target.name === "imageFile") {
//             setData(prev => (
//                 { ...prev, [event.target.name]: event.target.files[0] }
//             ));
//         }
//         else {
//             setData(prev => (
//                 {...prev, [event.target.name]: event.target.value}
//             ))
//         }
//     }

//     async function submitHandler(event) {
//         event.preventDefault();
    
//         // Create a new FormData object
//         const formData = new FormData();

//         // Append all form data to FormData
//         for (const key in postData) {
//             formData.append(key, postData[key]);
//         }

//         try{
//             const token = localStorage.getItem("token");
//             const response = await axios.post("http://localhost:4000/api/v1/uploadPost", formData, {
//                 headers: { 
//                     "Content-Type": "multipart/form-data",
//                     "Authorization": `Bearer ${token}`
//                 }
//             });

//             const data = await response.json();
//             console.log(data);

//             if (data.success) {
//                 setPostData({
//                     title: "", content: "", community: "", imageFile: null
//                 });
//                 setFlag((prev => !prev));
//                 toast.success("Post Added");
//                 navigate("/dashboard");
//             }
//             else {
//                 toast.error("Error adding post");
//             }
//         }
//         catch(err) {
//             console.log(err);
//             toast.error("Error adding post");
//         }
//     }

//     return (
//         <div className="main_uploadPost flex justify-center items-center">
//             <div className="uploadpostBox flex flex-col justify-between p-5 space-y-5">
//                 <form
//                     className="h-full p-5 space-y-5 flex flex-col justify-between"
//                     onSubmit={submitHandler}
//                 >
//                     <h1>Create a Post</h1>
                    
//                     <div className="imageUpload_box">
//                         <label htmlFor="PostImage" className="material-icons">upload_file</label>
//                         <input type="file" id="PostImage" accept="image/*" />
//                         <h2>Click to Upload or Drag your image here</h2>
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             required
//                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none rounded-lg"
//                             placeholder="Type your content here.."
//                             name="title"
//                             value={postData.title}
//                             onChange={changeHandler}
//                         />
//                     </div>
                    
//                     {/* Community Dropdown */}
//                     <div>
//                         <select
//                             name="community"
//                             value={postData.community}
//                             onChange={changeHandler}
//                             className="w-1/4 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-gray-300 rounded-lg"
//                             required
//                         >
//                             <option value="">Select a Community</option>
//                             {communities.map((community, index) => (
//                                 <option key={index} value={community.toLowerCase()}>
//                                     {community}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="flex w-full justify-end">
//                         <button type="button" className="border-2 px-10 py-2 rounded-lg border-grey">
//                             <Link to="/dashboard">Cancel</Link>
//                         </button>
//                         <button
//                             type="submit"
//                             className="post_button ml-10 px-10 py-2 text-white font-medium active:bg-indigo-600 rounded-lg duration-150"
//                         >
//                             Post
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }


import { useState } from "react"
import "../css/UploadPost.css"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default ({setFlag}) => {
    const [postData, setPostData] = useState({
        content: "",
        community: "",
        imageFile: null
    });
    const [imagePreview, setImagePreview] = useState(null);
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
            const file = event.target.files[0];
            setPostData(prev => ({ ...prev, [event.target.name]: file }));
            
            // Create image preview
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setImagePreview(null);
            }
        } else {
            setPostData(prev => ({ ...prev, [event.target.name]: event.target.value }));
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

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:4000/api/v1/uploadPost", formData, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = response.data; // axios already parses the JSON

            if (data.success) {
                setPostData({
                    content: "", community: "", imageFile: null
                });
                setImagePreview(null);
                setFlag((prev) => !prev);
                toast.success("Post Added");
                navigate("/dashboard");
            } else {
                toast.error(data.message || "Error adding post");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Error adding post");
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
                        <input 
                            type="file" 
                            id="PostImage" 
                            name="imageFile"
                            accept="image/*"
                            onChange={changeHandler}
                        />
                        <h2>Click to Upload or Drag your image here</h2>
                    </div>
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" className="max-w-[200px] max-h-[200px] object-contain" />
                        </div>
                    )}
                    
                    <div>
                        <textarea
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none rounded-lg"
                            placeholder="Type your content here.."
                            name="content"
                            value={postData.content}
                            onChange={changeHandler}
                            rows={4}
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


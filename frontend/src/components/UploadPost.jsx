import { useState } from "react"
import toast from "react-hot-toast";

export default ({setFlag}) => {

    const [postData, setPostData] = useState({
        title: "", content: ""
    });

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
                    title: "", content: ""
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
        <div className="w-full flex justify-center items-center">
            <form
                    className="mt-8 border-2 p-5 rounded-lg space-y-5"
                    onSubmit={submitHandler}
                >
                    <div>
                        <label className="font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="title"
                            value={postData.title}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Content
                        </label>
                        <textarea
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg resize-none"
                            name="content"
                            value={postData.content}
                            onChange={changeHandler}
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Post
                    </button>
                </form>
        </div>
    )

}
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import PostCard from "./PostCard";
import '../css/Posts.css';

export default ({flag}) => {

    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function fetchPosts() {

            try{
                setLoading(true);
                const token = localStorage.getItem("token")
                const response = await fetch("http://localhost:4000/api/v1/getPosts", {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();

                console.log(data);
                
                if(data.success) {
                    setPosts(data.posts);
                }
                else {
                    setPosts([]);
                    toast.error("Error Fetching Posts");
                }
            }
            catch(err) {
                setPosts([]);
                console.log(err.message);
                toast.error("Error Fetching Posts");
            }
            finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [flag]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main_posts w-full p-8 flex-col justify-start items-center gap-3 overflow-hidden ">
            {/* <h1 className="text-4xl font-semibold">Posts</h1> */}
            <div className="flex-col justify-center items-center">
            {
                post.length > 0 ? (
                    post.map((post, index) => {
                        return <div className="w-[300px]">
                                <PostCard key={index} post={post}/>
                            </div>
                    })
                ) : <div>No Posts Available</div>
            }
            </div>
        </div>
    )
}
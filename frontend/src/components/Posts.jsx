import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default () => {

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
                    toast.error("Error Fetching Posts");
                }
            }
            catch(err) {
                console.log(err.message);
                toast.error("Error Fetching Posts");
            }
            finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Hi There
        </div>
    )
}
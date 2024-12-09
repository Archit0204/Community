import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import PostCard from "./PostCard";
import "../css/Posts.css";

export default ({ heading, selectedCommunity }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:4000/api/v1/getPosts", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (data.success) {
          const filteredPosts =
            selectedCommunity && selectedCommunity !== "Top Posts"
              ? data.posts.filter(
                  (post) =>
                    post.community &&
                    post.community.toLowerCase() === selectedCommunity.toLowerCase()
                )
              : data.posts;

          setPosts(filteredPosts.reverse());
        } else {
          setPosts([]);
          toast.error("Error Fetching Posts");
        }
      } catch (err) {
        setPosts([]);
        console.log("Fetch Error:", err.message);
        toast.error("Error Fetching Posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [selectedCommunity]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main_posts w-full p-8 flex-col justify-start items-center gap-3 overflow-hidden">
      <h1 className="text-4xl mb-8">{heading}</h1>
      <div className="flex-col justify-center items-center">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="w-[600px]">
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <div>
            <div>No Posts Available</div>
            <div className="noPostUploadButton">
              <Link to="upload">Click to Upload</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


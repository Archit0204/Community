import React, { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"

export default function Postcard({ post }) {
  
    const [likes, setLikes] = useState(post.likes.length)
    const [comments, setComments] = useState(post.comments)
    const [isLiked, setIsLiked] = useState(false)
    const [newComment, setNewComment] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function likeHandler() {
        try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
            `http://localhost:4000/api/v1/post/like/${post._id}`,
            {},
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        )
        setLikes(response.data.updatedPost.likes.length)
        setIsLiked(liked => !liked);
        
        } catch (error) {
            console.error('Error liking post:', error)
        }
    }

    async function commentHandler() {
        try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
            `http://localhost:4000/api/v1/post/comment/${post._id}`,
            { content: newComment },
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        )
        setComments(response.data.post.comments)
        setNewComment('')
        toast.success("Comment Added");
        
        } catch (error) {
            console.error('Error commenting on post:', error)
        }
    }

    return (
        <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        maxWidth: '600px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ fontWeight: 'bold' }}>
            {post.author.firstName} {post.author.lastName}
            </div>
            <div className='capitalize' style={{ color: '#fff', backgroundColor: '#1d2c6e', padding: '0.3rem', borderRadius: '0.5rem', width:'110px', display:'flex', justifyContent: 'center' }}>{post.community}</div>
        </div>
        <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>
            <i className="material-icons" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '4px' }}>calendar_month</i>
            {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{post.content}</h3>
        {post.imageUrl && (
            <div style={{ marginBottom: '12px' }}>
                <img 
                    src={post.imageUrl} 
                    alt="Post image" 
                    width={500} 
                    height={300} 
                    layout="responsive" 
                    objectFit="cover"
                />
            </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
            onClick={likeHandler}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: isLiked ? 'red' : 'inherit',
                marginRight: '16px'
            }}
            >
            <i className="material-icons" style={{ marginRight: '4px' }}>thumb_up</i>
            {likes}
            </button>
            <button
            onClick={() => setIsModalOpen(true)}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
            }}
            >
            <i className="material-icons" style={{ marginRight: '4px' }}>mode_comment</i>
            {comments.length}
            </button>
        </div>

        {isModalOpen && (
            <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
            }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '100%'
            }}>
                <h2 style={{ marginBottom: '16px' }}>Comments</h2>
                <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '16px' }}>
                {comments.map((comment, index) => (
                    <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '8px', marginBottom: '8px', borderRadius: '4px' }}>
                    {comment.content}
                    </div>
                ))}
                </div>
                <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={commentHandler}
                    style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '8px'
                    }}
                >
                    Post Comment
                </button>
                <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                    }}
                >
                    Close
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}
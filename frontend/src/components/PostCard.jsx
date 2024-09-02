export default ({post}) => {

    return (
        <div className="flex-col items-center justify-center border-2">
            <h1 className="text-xl font-medium">{post.title}</h1>
            <p>{post.content}</p>
            <span>{post.createdAt.slice(0,10)}</span>
            <div className="flex justify-between">
                <button>Like</button>
                <button>Comment</button>
            </div>
        </div>
    )

}
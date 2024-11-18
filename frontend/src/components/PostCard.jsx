import '../css/Postcard.css';

export default ({post}) => {

    return (
        <div className="main_postcard flex-col items-center justify-center mb-4">
            <div className='flex justify-between'> 
                <div id='personId'> Name</div>
                <div id='communityName'> Sports</div>
            </div>
            <span id='dateMention'>  <i className='material-icons'> calendar_month </i> {post.createdAt.slice(0,10)}</span>

            <h3 className="postTitle text-1xl font-large">{post.title}</h3>
            <div className='reaction_buttons  flex items-center'> <button className='ml-1 pt-2'> <i className='material-icons pr-2'> thumb_up </i> </button>  <button className='like_button pt-2'> <i className='material-icons pr-2'> mode_comment </i> </button> </div>
            
            {/* <p className="postContent">{post.content || "No content available"}</p> */}
            
            <div className=" flex justify-between">
                {/* <button>Like</button> */}
                
            </div>
        </div>
    )

}
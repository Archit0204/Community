const Post = require("../models/Post");
const User = require("../models/User");
const { postSchema } = require("../utils/validation");

exports.uploadPost = async (req, res) => {

    try{

        const postBody = req.body;
        
        if (!postSchema.safeParse(postBody).success) {
            return res.status(403).json({
                success: false,
                message: "Invalid Input Schema"
            });
        }
        console.log("Parsing done");
        
        const userId = req.user.userId;
        

        const post = await Post.create({
            title: postBody.title,
            content: postBody.title,
            author: userId
        });
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { posts: post._id } },
            { new: true, runValidators: true }
        );
        
        return res.status(200).json({
            success: true,
            post: post
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
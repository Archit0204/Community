const Comment = require("../models/Comment");
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
};

exports.getPosts = async(req, res) => {

    try{

        const posts = await Post.find();

        return res.status(200).json({
            success: true,
            posts: posts
        });
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.likePost = async(req, res) => {

    try {

        const postId = req.params.id;

        const post = await Post.findByIdAndUpdate(postId, {
            likes: {
                $push: {
                    userId: req.user.userId
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: "Post Liked"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }

}

exports.commentPost = async(req, res) => {

    try {
        
        const postId = req.params.id;

        const body = await req.body.json();

        const comment = await Comment.create({
            author: req.user.userId,
            content: body.content,
            postId: postId,
        });

        return res.status(200).json({
            success: true,
            message: "Comment Added",
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }

}
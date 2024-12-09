const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");
const { isFileTypeSupported, uploadFileToCloudinary } = require("../utils/uploadToCloudinary");
const { postSchema } = require("../utils/validation");

exports.uploadPost = async (req, res) => {

    try{

        const postBody = req.body;
        console.log(postBody);

        const file = req.files.imageFile;
        console.log(file);

        const fileType = file.name.split('.').at(-1).toLowerCase();

        if (!isFileTypeSupported(fileType)) {
            return res.status(411).json({
                success: false,
                message: "File Type Not Supported"
            });
        }

        const response = await uploadFileToCloudinary(file, "DiscussionDock");

        postBody.imageUrl = response.secure_url;
        
        if (!postSchema.safeParse(postBody).success) {
            return res.status(403).json({
                success: false,
                message: "Invalid Input Schema"
            });
        }
        
        const userId = req.user.userId;

        const post = await Post.create({
            content: postBody.content,
            author: userId,
            community: postBody.community,
            imageUrl: postBody.imageUrl
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

        const posts = await Post.find().populate('author comments');

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
        const userId = req.user.userId;

        const post = await Post.findById(postId);

        if (post.likes.includes(userId)) {
            const updatedPost = await Post.findByIdAndUpdate(postId, {
                $pull: {
                    likes: userId
                }
            }, {
                new: true
            });

            return res.status(200).json({
                success: true,
                message: "Post Unliked",
                updatedPost
            });
        }
        else {

            const updatedPost = await Post.findByIdAndUpdate(postId, {
                $push: {
                    likes: req.user.userId
                }
            }, {
                new: true
            });

            return res.status(200).json({
                success: true,
                message: "Post Liked",
                updatedPost
            });
        }


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

        const body = req.body;

        const comment = await Comment.create({
            author: req.user.userId,
            content: body.content,
            postId: postId,
        });

        const post = await Post.findByIdAndUpdate(postId, {
            $push: {
                comments: comment._id
            }
        }, {
            new: true
        }).populate('comments');
        
        return res.status(200).json({
            success: true,
            message: "Comment Added",
            post
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }

}
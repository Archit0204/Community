const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Comment', commentSchema);
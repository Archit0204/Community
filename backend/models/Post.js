const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: null
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }, 
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }]
});

module.exports = mongoose.model('Post', postSchema);
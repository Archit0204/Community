const express = require('express');
const { auth } = require('../middlewares/auth');
const { uploadPost, getPosts } = require('../controllers/Post');

const postRouter = express.Router();

postRouter.post("/uploadPost", auth, uploadPost);
postRouter.get("/getPosts", auth, getPosts);

module.exports = postRouter;
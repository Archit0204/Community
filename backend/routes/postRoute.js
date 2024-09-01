const express = require('express');
const { auth } = require('../middlewares/auth');
const { uploadPost } = require('../controllers/Post');

const postRouter = express.Router();

postRouter.post("/uploadPost", auth, uploadPost);

module.exports = postRouter;
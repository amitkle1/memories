const express = require('express');
const {getPosts, createPost, updatPost, deletePost, likePost} = require('../controllers/posts');
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

module.exports = router;
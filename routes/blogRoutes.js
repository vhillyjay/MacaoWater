const express = require('express');
// const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/blogs', blogController.blog_index);
router.post('/blogs', blogController.blog_create_post);
router.get('/blogs/create', blogController.blog_create_get);
router.get('/blogs/:id', blogController.blog_details);
router.delete('/blogs/:id', blogController.blog_delete);
// trial delete using get request
router.get('/blogsdelete/:id', blogController.blog_delete_trial_get);
// trial delete using get request

module.exports = router;
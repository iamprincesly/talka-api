/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:17:03
 * @modify date 2021-12-30 18:21:58
 * @desc This controller handle all related post endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
const path = require('path');
const fs = require('fs').promises;
const { Erroran } = require('erroran');

/**
 * ----------------------------------------------------------------
 * Importing Modules
 * ----------------------------------------------------------------
 */
const Post = require('../models/Post');

/**
 * ----------------------------------------------------------------
 * Importing Custome Node Modules
 * ----------------------------------------------------------------
 */
const asyncHandler = require('../utils/asyncHandler');

/**
 * This find all post in the database
 * and return as json
 */
exports.getAllPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find();

    return res.status(200).json({
        status: 'success',
        message: 'Post fetch successfully',
        data: posts,
    });
});

exports.createPost = asyncHandler(async (req, res, next) => {
    const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        body: req.body.body,
    });

    if (!post) throw Erroran.badRequest('Post could not be posted ');

    return res.status(200).json({
        status: 'success',
        message: 'Posted successfully',
        data: post,
    });
});

exports.getPost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw Erroran.notFound('Post not found');

    return res.status(200).json({
        status: 'success',
        message: 'Fetch post successfully',
        data: post,
    });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw Erroran.notFound('Post not found');

    post.delete();

    res.status(204).json({
        status: 'success',
        message: 'Post deleted successfully',
    });
});

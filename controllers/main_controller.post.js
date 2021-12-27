/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:17:03
 * @modify date 2021-12-27 22:52:03
 * @desc This controller handle all related post endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
const path = require('path');
const fs = require('fs').promises;
const Erroran = require('erroran');

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
    let posts = null;

    try {
        posts = JSON.parse(
            await fs.readFile('./dev-data/posts.json', { encoding: 'utf8' })
        );
    } catch (err) {
        return next(Erroran.internalServer(err.message));
    }

    return res.status(200).json({
        status: 'success',
        message: 'Post was successfully',
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

    if (!post) throw Erroran.badRequest('Please could not be posted ');

    return res.status(200).json({
        status: 'success',
        message: 'Posted successfully',
        data: post,
    });
});

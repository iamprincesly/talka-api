/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:17:03
 * @modify date 2022-01-02 15:48:42
 * @desc This controller handle all related post endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
import { Erroran } from 'erroran';

/**
 * ----------------------------------------------------------------
 * Importing Modules
 * ----------------------------------------------------------------
 */
import Post from '../../models/Post';

/**
 * ----------------------------------------------------------------
 * Importing Custome Node Modules
 * ----------------------------------------------------------------
 */
import asyncHandler from '../../utils/asyncHandler';

/**
 * This find all post in the database
 * and return as json
 * @route   GET /api/v1/posts
 * @access  Public
 */
export getAllPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find();

    return res.status(200).json({
        status: 'success',
        message: 'Post fetch successfully',
        data: posts,
    });
});

/**
 * Create a single post
 * and return as json
 * @route   POST /api/v1/posts
 * @access  Private
 */
export createPost = asyncHandler(async (req, res, next) => {
    
    // Extract needed data from the request object
    const data = {
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        body: req.body.body,
    };
    
    const post = await Post.create(data);

    if (!post) throw Erroran.badRequest('Post could not be posted ');

    return res.status(201).json({
        status: 'success',
        message: 'Posted successfully',
        data: post,
    });
});

/**
 * Get a single post
 * and return as json
 * @route   Get /api/v1/posts/:id
 * @access  Public
 */
export getPost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw Erroran.notFound('Post not found');

    return res.status(200).json({
        status: 'success',
        message: 'Fetch post successfully',
        data: post,
    });
});

/**
 * Update a single post
 * and return as json
 * @route   UPDATE /api/v1/posts/:id
 * @access  Private
 */
export updatePost = asyncHandler(async (req, res, next) => {
    let post = await Post.findById(req.params.id);

    if (!post) throw Erroran.notFound('Post not found');

    // Extract needed data from the request object
    const data = {
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        body: req.body.body,
    };

    post = await Post.findByIdAndUpdate(req.params.id, data, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: 'success',
        message: 'Post updated successfully',
        data: post,
    });
});

/**
 * Delete a single post
 * @route   DELETE /api/v1/posts/:id
 * @access  Private
 */
export deletePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw Erroran.notFound('Post not found');

    post.delete();

    res.status(204).json({
        status: 'success',
        message: 'Post deleted successfully',
    });
});

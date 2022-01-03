/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:15:05
 * @modify date 2022-01-03 23:43:45
 * @desc This router handle all post related endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');

/**
 * ----------------------------------------------------------------
 * Importing middlewares
 * ----------------------------------------------------------------
 */
const { authCheck } = require('../../../middlewares/auth_middleware');

/**
 * ----------------------------------------------------------------
 * Importing constrollers
 * ----------------------------------------------------------------
 */
const {
    getAllPosts,
    createPost,
    getPost,
    deletePost,
    updatePost,
} = require('../../../controllers/post/main_controller.post'); // post controller

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/').get(getAllPosts).post(authCheck, createPost);

router.route('/:id').get(getPost).delete(authCheck,deletePost).put(authCheck,updatePost);

module.exports = router;

/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:15:05
 * @modify date 2021-12-27 21:58:56
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
 * Importing constrollers
 * ----------------------------------------------------------------
 */
const {
    getAllPosts,
    createPost,
} = require('../../../controllers/main_controller.post'); // post controller

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/').get(getAllPosts).post(createPost);

module.exports = router;

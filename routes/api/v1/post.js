/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:15:05
 * @modify date 2021-12-16 17:16:58
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
const { getAllPosts } = require('../../../controllers/main_controller.post'); // post controller

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/').get(getAllPosts);

module.exports = router;
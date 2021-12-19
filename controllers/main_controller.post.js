/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:17:03
 * @modify date 2021-12-19 20:08:15
 * @desc This controller handle all related post endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const path = require('path');
const fs = require('fs').promises;
const Erroran = require('erroran');

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
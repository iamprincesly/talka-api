/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:17:03
 * @modify date 2021-12-16 17:29:59
 * @desc This controller handle all related post endpoints
 */
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
    const posts = [
        {
            title: 'this is post one',
            description: 'This is post one description',
        },

        {
            title: 'this is post two',
            description: 'This is post two description',
        },

        {
            title: 'this is post three',
            description: 'This is post three description',
        },
    ];

    return res.status(200).json({
        status: 'success',
        message: 'Post was successfully',
        data: posts,
    });
});

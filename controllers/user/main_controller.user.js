/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 15:54:13
 * @modify date 2022-01-02 16:16:33
 * @desc [description]
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
const { Erroran } = require('erroran');

/**
 * ----------------------------------------------------------------
 * Importing Modules
 * ----------------------------------------------------------------
 */
const User = require('../../models/User');

/**
 * ----------------------------------------------------------------
 * Importing Custome Node Modules
 * ----------------------------------------------------------------
 */
const asyncHandler = require('../../utils/asyncHandler');

exports.signUp = asyncHandler(async (req, res, next) => {
    // Extract needed data from the request object
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        body: req.body.body,
    };

    const user = await User.create(data);

    if (!user) throw Erroran.badRequest('Somethings went wrong');

    return res.status(200).json({
        status: 'success',
        message: 'User create',
        data: user,
    });
});

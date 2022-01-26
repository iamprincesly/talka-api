/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 21:08:19
 * @modify date 2022-01-05 22:29:31
 * @desc Implement all login logic here
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
import { Erroran } from 'erroran';

/**
 * ----------------------------------------------------------------
 * Importing Models
 * ----------------------------------------------------------------
 */
import User from '../../models/User';

/**
 * ----------------------------------------------------------------
 * Importing Custom Node Modules
 * ----------------------------------------------------------------
 */
import asyncHandler from '../../utils/asyncHandler';
import { authenticateUser, logoutUser } from '../../utils/authentication';

 /**
  * This endpoint for login a user
  * @route   POST /api/v1/auth/login
  * @access  Public
  */
export login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Check existence of password and email in the request body
    if (!password || !email)
        throw Erroran.badRequest('Please provide email and password to login');

    // Find user in the database
    const user = await User.findOne({ email }).select('+password');

    // Check if user exist and if password matches
    if (!user || !(await user.checkPasswordMatch(password)))
        throw Erroran.notAuthenticated('Incorrect email or password');

    // Login the user
    return authenticateUser(user, 200, req, res);
});

/**
 * This endpoint to logout a user
 * @route   POST /api/v1/auth/logout
 * @access  Private
 */
export logout = asyncHandler(async (req, res, next) => {
    return logoutUser(res);
});
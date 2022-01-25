/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-03 22:48:13
 * @modify date 2022-01-03 23:40:31
 * @desc Authentication middleware to protect private endpoints
 */

/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
const { Erroran } = require('erroran');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

/**
 * ----------------------------------------------------------------
 * Importing Custom Node Modules
 * ----------------------------------------------------------------
 */
const asyncHandler = require('../utils/asyncHandler');

/**
 * ----------------------------------------------------------------
 * Importing Models
 * ----------------------------------------------------------------
 */
const User = require('../models/User');

// Auth protect middleware
exports.authCheck = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token)
        throw Erroran.notAuthenticated(
            'You are not logged in! Please log in to get access.'
        );
    try {
        const decoded = await promisify(jwt.verify)(
            token,
            process.env.JWT_SECRET
        );

        const authUser = await User.findById(decoded.id);

        if (!authUser)
            throw Erroran.notAuthenticated(
                'You are not logged in! Please log in to get access.'
            );

        req.user = authUser;
        res.locals.user = authUser;
        next();
    } catch (err) {
        throw Erroran.internalServerError('Something went wrong, please login again!');
    }
});

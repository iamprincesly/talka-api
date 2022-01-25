/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 10:03:03
 * @modify date 2022-01-25 20:29:34
 * @desc Set up all api version 1 routes
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');

/**
 * ----------------------------------------------------------------
 * Importing routers
 * ----------------------------------------------------------------
 */
const postRoute = require('./app/post');
const accountRoute = require('./app/account');
const profileRoute = require('./app/profile');
const authRoute = require('./app/auth');

const router = express.Router();

/**
 * ----------------------------------------------------------------
 * TODO - this should render view to the api version 1 docs
 * ----------------------------------------------------------------
 */
router.get('/', function (req, res, next) {
    return res.status(200).json({
        status: 'success',
        message: 'this a successful request',
    });
});

/**
 * ----------------------------------------------------------------
 * Importing middlewares
 * ----------------------------------------------------------------
 */
const { authCheck } = require('../../../../middlewares/auth_middleware');

/**
 * ----------------------------------------------------------------
 * Mounting post route
 * ----------------------------------------------------------------
 */

/**
 * User account related router
 * 
 * @access public
 */
router.use('/posts', postRoute);

/**
 * User account related router
 * 
 * @access private
 */
router.use('/account', authCheck, accountRoute);

/**
 * Get any user public profile through their username
 * 
 * @access public
 */
router.use('/profile', profileRoute);

/**
 * Authentication account related router
 * 
 * @access public
 */
router.use('/auth', authRoute);

module.exports = router;

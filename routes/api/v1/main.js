/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 10:03:03
 * @modify date 2022-01-02 16:23:43
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
const postRoute = require('./post');
const userRoute = require('./user');
const authRoute = require('./auth');

const router = express.Router();

/**
 * ----------------------------------------------------------------
 * TODO - this should render view to the api version 1 docs
 * ----------------------------------------------------------------
 */
router.get('/', function (req, res, next) {
    return res.status(200).json({
        'status': 'success',
        'message': 'this a successful request'
    });
});

/**
 * ----------------------------------------------------------------
 * Mounting post route
 * ----------------------------------------------------------------
 */
// Post related router
router.use('/posts', postRoute);

// User related router
router.use('/users', userRoute);

// All Authentication related router
router.use('/auth', authRoute);

module.exports = router;

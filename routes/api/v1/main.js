/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 10:03:03
 * @modify date 2021-12-27 20:26:22
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
router.use('/posts', postRoute);

module.exports = router;

/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 10:03:03
 * @modify date 2021-12-16 17:18:24
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

/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 10:03:03
 * @modify date 2021-12-16 10:57:36
 * @desc Set up all api version 1 routes
 */
const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
    return res.status(200).json({
        'status': 'success',
        'message': 'this a successful request'
    });
});

module.exports = router;

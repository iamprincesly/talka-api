/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 16:01:12
 * @modify date 2022-01-02 16:24:44
 * @desc All authentication related routes
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');

/**
 * ----------------------------------------------------------------
 * Importing constrollers
 * ----------------------------------------------------------------
 */
const { signUp } = require('../../../controllers/auth/sign_controller');

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/signup').post(signUp);

module.exports = router;

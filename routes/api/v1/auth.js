/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 16:01:12
 * @modify date 2022-01-05 22:37:16
 * @desc All authentication related routes
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');
const { login, logout } = require('../../../controllers/auth/login_controller');

/**
 * ----------------------------------------------------------------
 * Importing middlewares
 * ----------------------------------------------------------------
 */
 const { authCheck } = require('../../../middlewares/auth_middleware');

/**
 * ----------------------------------------------------------------
 * Importing constrollers
 * ----------------------------------------------------------------
 */
const { signUp } = require('../../../controllers/auth/sign_up_controller');

const router = express.Router();

/**
 * All authentication related endpoints
 */
router.route('/signup').post(signUp); // Register new user
router.route('/login').post(login); // Login user
router.route('/logout').get(authCheck, logout); // Logout user

module.exports = router;

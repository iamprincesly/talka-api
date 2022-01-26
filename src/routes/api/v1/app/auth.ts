/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 16:01:12
 * @modify date 2022-01-25 20:11:40
 * @desc All authentication related routes
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
import express from 'express';
import { login, logout } from '../../../../controllers/auth/login_controller';

/**
 * ----------------------------------------------------------------
 * Importing middlewares
 * ----------------------------------------------------------------
 */
import { authCheck } from '../../../../middlewares/auth_middleware';

/**
 * ----------------------------------------------------------------
 * Importing constrollers
 * ----------------------------------------------------------------
 */
import { signUp } from '../../../../controllers/auth/sign_up_controller';

const router = express.Router();

/**
 * All authentication related endpoints
 */
router.route('/signup').post(signUp); // Register new user
router.route('/login').post(login); // Login user
router.route('/logout').get(authCheck, logout); // Logout user

export default router;

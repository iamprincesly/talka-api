/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 16:01:12
 * @modify date 2022-01-25 20:28:46
 * @desc [description]
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
 import express from 'express';

 /**
  * ----------------------------------------------------------------
  * Importing constrollers
  * ----------------------------------------------------------------
  */

const router = express.Router();

/**
 * Get all users public profile
 * @TODO algorithm to get all top user profile
 * @access  Public
 */
router.route('/').get();
  
export default router;
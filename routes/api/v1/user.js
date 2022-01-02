/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 16:01:12
 * @modify date 2022-01-02 16:29:59
 * @desc [description]
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
const { getAllUsers } = require('../../../controllers/user/main_controller.user');

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/').get(getAllUsers);
  
module.exports = router;
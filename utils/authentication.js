/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 20:32:19
 * @modify date 2022-01-05 22:45:01
 * @desc Create and send token to authenticate user
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
 const jwt = require('jsonwebtoken');

 /**
  * ----------------------------------------------------------------
  * Import this module to send access token to client and 
  * store it in cookie.
  * ----------------------------------------------------------------
  */

 // Send token to authenticate user
 exports.authenticateUser = (user, statusCode, req, res) => {
     const token = user.getSignInToken();
 
     const options = {
         expires: new Date(
             Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
         ),
         httpOnly: true,
         secure: req.secure || req.header('x-forwarded-proto') === 'https',
     };
 
     // if (process.env.NODE_ENV === 'production') {
     //     options.secure = true;
     // }
 
     res.status(statusCode)
         .cookie('jwt', token, options)
         .json({ success: true, token });
 };

 // Delete token to logout a user
 exports.logoutUser =  (res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({ status: 'Logout successfully' });
 };
 
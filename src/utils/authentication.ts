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
 import jwt from 'jsonwebtoken';
 import express from 'express';
 import User from '../models/User'

 /**
  * ----------------------------------------------------------------
  * Import this module to send access token to client and 
  * store it in cookie.
  * ----------------------------------------------------------------
  */

// Send token to authenticate user
export authenticateUser = (user: User, statusCode: number, req: express.Request, res: express.Response) => {
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

 new Promise()

 // Delete token to logout a user
export logoutUser =  (res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({ status: 'Logout successfully' });
 };
 
/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 15:54:13
 * @modify date 2022-01-05 22:28:39
 * @desc This route handle all signup requests
 */
/**
 * ----------------------------------------------------------------
 * Importing External Dependencies
 * ----------------------------------------------------------------
 */
 import { Erroran } from 'erroran';

 /**
  * ----------------------------------------------------------------
  * Importing Models
  * ----------------------------------------------------------------
  */
 import User from '../../models/User';
 
 /**
  * ----------------------------------------------------------------
  * Importing Custom Node Modules
  * ----------------------------------------------------------------
  */
 import asyncHandler from '../../utils/asyncHandler';
 import { authenticateUser } from '../../utils/authentication';
 
 /**
  * This endpoint for registering a new user
  * @route   POST /api/v1/auth/signup
  * @access  Public
  */
 export signUp = asyncHandler(async (req, res, next) => {
     // Extract needed data from the request object
     const data = {
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         body: req.body.body,
     };
 
     const user = await User.create(data);

    //  const user = await new User(data);
    //  user.save();
 
     if (!user) throw Erroran.badRequest('Somethings went wrong');
 
     return authenticateUser(user, 200, req, res);
 });
 
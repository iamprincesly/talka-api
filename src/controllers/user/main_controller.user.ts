/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2022-01-02 15:54:13
 * @modify date 2022-01-02 16:30:20
 * @desc All user related CRUD functionalities
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

export getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();

    if (!users) throw Erroran.notFound('There is no user at the moment!');

    return res.status(200).json({
        status: 'success',
        message: 'User create',
        count: users.length,
        data: users,
    });
});

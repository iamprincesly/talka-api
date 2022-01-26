/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-16 17:15:05
 * @modify date 2022-01-26 03:45:36
 * @desc This router handle all post related endpoints
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
import express from 'express';

/**
 * ----------------------------------------------------------------
 * Importing middlewares
 * ----------------------------------------------------------------
 */
import { authCheck } from '../../../middlewares/auth_middleware';

/**
 * ----------------------------------------------------------------
 * Importing constrollers
 * ----------------------------------------------------------------
 */
import {
    getAllPosts,
    createPost,
    getPost,
    deletePost,
    updatePost,
} from '../../../controllers/post/main_controller.post'; // post controller

const router = express.Router();

/**
 * Get all the posts from the database
 */
router.route('/').get(getAllPosts).post(authCheck, createPost);

router
    .route('/:id')
    .get(getPost)
    .delete(authCheck, deletePost)
    .put(authCheck, updatePost);

export default router;

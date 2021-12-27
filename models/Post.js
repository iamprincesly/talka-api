/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-27 21:48:17
 * @modify date 2021-12-27 21:53:12
 * @desc [description]
 */

/**
 * ----------------------------------------------------------------
 * Importing Extenal Dependencies
 * ----------------------------------------------------------------
 */
const mongoose = require('mongoose');

/** 
 * Post database schema
 */
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter post title'],
    },

    description: {
        type: String,
    },

    slug: {
        type: String,
        required: [true, 'Please enter post slug'],
    },

    body: {
        type: String,
        required: [true, 'Please enter post body'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', PostSchema);

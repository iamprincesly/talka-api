/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-27 21:41:50
 * @modify date 2021-12-27 21:48:36
 * @desc [User model]
 */

/**
 * ----------------------------------------------------------------
 * Importing Extenal Dependencies
 * ----------------------------------------------------------------
 */
const mongoose = require('mongoose');

/** 
 * User Schema 
*/
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
    },

    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'User already exist with that email address'],
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },

    role: {
        type: String,
        enum: ['user', 'publisher'],
        default: 'user',
    },

    password: {
        type: String,
        required: [true, 'Please enter a password.'],
        minlength: 8,
        select: false,
    },

    // passwordConfirm: {
    //     type: String,
    //     required: [true, 'Please confirm your password.'],
    //     validate: {
    //         // This work on save() and create() only not on update
    //         validator: function (el) {
    //             return el === this.password;
    //         },
    //         message: 'Password are not the same!',
    //     },
    // },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);

/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-27 21:38:38
 * @modify date 2021-12-27 21:41:30
 * @desc [description]
 */

/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
import mongoose from 'mongoose';

/**
 * Create a mongodb connect
 */
const connectDB = () => {
    mongoose
        .connect(mongoURI(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to database successfully!'))
        .catch((err) => {
            console.log('Could not connect to the database: ' + err);
            process.exit(1);
        });
};

/**
 * Get and return mongoURI based on node environment
 *
 * @return {string} mongoDB connection string
 */
const mongoURI: Function = () => {
    return process.env.NODE_ENV === 'production'
        ? process.env.PROD_MONGO_URI
        : process.env.DEV_MONGO_URI;
};

export default connectDB;

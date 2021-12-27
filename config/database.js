const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose
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

const mongoURI = () => {
    return process.env.NODE_ENV === 'production'
        ? process.env.PROD_MONGO_URI
        : process.env.DEV_MONGO_URI;
};

module.exports = connectDB;

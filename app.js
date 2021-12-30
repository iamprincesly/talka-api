/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:45:54
 * @modify date 2021-12-27 22:04:55
 * @desc Set up app and registers all middleware and routers
 */
/**
 * ----------------------------------------------------------------
 * External Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');
const { Erroran, ErroranHandler } = require('erroran');
const morgan = require('morgan');

/**
 * ----------------------------------------------------------------
 * Importing Modules
 * ----------------------------------------------------------------
 */
const connectDB = require('./config/database');

/**
 * ----------------------------------------------------------------
 * Importing routers
 * ----------------------------------------------------------------
 */
const mainRouter = require('./routes/api/v1/main'); // Importing API version 1 router

// Conncect the database
connectDB();

const app = express();

// Body parser
app.use(express.json());

/**
 * ----------------------------------------------------------------
 * Mounting middlewares
 * ----------------------------------------------------------------
 */
app.use(morgan('dev'));

/**
 * ----------------------------------------------------------------
 * Mounting routers
 * ----------------------------------------------------------------
 */
app.use('/api/v1', mainRouter); // Mounting API version 1 router

/**
 * Return 404 for every on non-existing endpoint
 */
app.all('/**', (req, res, next) => {
    return next(
        Erroran.notFound(
            `Oh no you hit the wrong route, Can't find ${req.originalUrl} on this server 😇`
        )
    );
});

/**
 * Global error handling middleware
 */
app.use(ErroranHandler());

module.exports = app;

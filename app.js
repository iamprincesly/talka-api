/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:45:54
 * @modify date 2021-12-16 11:11:36
 * @desc Set up app and registers all middleware and routers
 */
/**
 * ----------------------------------------------------------------
 * Importing Dependencies
 * ----------------------------------------------------------------
 */
const express = require('express');
const Erroran = require('erroran');
const morgan = require('morgan');

/**
 * ----------------------------------------------------------------
 * Importing routers
 * ----------------------------------------------------------------
 */
const mainRouter = require('./routes/api/v1/main'); // Importing API version 1 router

const app = express();

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
app.use(Erroran.handler);

module.exports = app;

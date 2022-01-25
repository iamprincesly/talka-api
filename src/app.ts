/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:45:54
 * @modify date 2022-01-24 01:29:33
 * @desc Set up app and registers all middleware and routers
 */
/**
 * ----------------------------------------------------------------
 * External Importing Dependencies
 * ----------------------------------------------------------------
 */
import express from 'express';
import { Erroran, ErroranHandler } from 'erroran';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

/**
 * ----------------------------------------------------------------
 * Importing Modules
 * ----------------------------------------------------------------
 */
import connectDB from './config/database';

/**
 * ----------------------------------------------------------------
 * Importing routers
 * ----------------------------------------------------------------
 */
import mainRouter from './routes/api/v1/main'; // Importing API version 1 router

// Conncect the database
connectDB();

const app = express();

/**
 * ----------------------------------------------------------------
 * Mounting middlewares
 * ----------------------------------------------------------------
 */
app.use(express.json()); // Body parser

app.use(cookieParser()); // Cookies parser

app.use(morgan('dev')); // Logging in dev

app.use(helmet()); // Set security HTTP headers

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

export default app;
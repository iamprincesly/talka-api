/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:45:54
 * @modify date 2021-12-16 09:40:34
 * @desc Set up app and registers all middleware and routers
 */
const express = require('express');
const Erroran = require('erroran');

const app = express();

const router = express.Router();

const test = router.get('/test', (req, res, next) => {
    return next(Erroran.notAuthenticated('This is my own not authenticated'));
});

app.use('/', test);

app.use(
    '/error',
    router.get('/', (req, res, next) => {
        // return res.status(200).json({
        //     'status': 'success',
        //     'message': 'This is my own error'
        // });

        return next(Erroran.notFound('This is my own not found'));
    })
);

app.use(Erroran.handler);

module.exports = app;

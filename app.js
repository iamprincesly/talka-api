/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:45:54
 * @modify date 2021-12-15 17:46:26
 * @desc Set up app and registers all middleware and routers
 */
const express = require('express');

const app = express();

const router = express.Router();

const test = router.get('/test', (req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Test successful',
    });
});

app.use('/', test);

module.exports = app;

/**
 * @author Sylvanus Etim
 * @email iamprincesly@gmail.com
 * @create date 2021-12-15 17:42:15
 * @modify date 2021-12-15 17:45:26
 * @desc Spin up node express server
 */

// Catch all stop server if somethings goes wrong
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION: Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

// Catch 'unhandledRejection'
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLER REJECTION: Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED, Shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});
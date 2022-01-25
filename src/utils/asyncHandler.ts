import express from 'express';

export = (fn: Function) =>
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        fn(req, res, next).catch(next);
    };

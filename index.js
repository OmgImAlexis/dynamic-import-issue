import { Router } from 'express';

export const schema = {};

export const route = (_, res) => {
        res.send({
                status: 200,
                message: 'Welcome to the server'
        });
};

/**
 * API Welcome page
 *
 * @name Welcome
 * @path {GET} /
 */
export default new Router({ mergeParams: true })
        .get('/', route);

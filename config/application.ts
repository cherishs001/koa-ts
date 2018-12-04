import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import {router} from './routers'
import {Environment} from './environments'
import {Connection} from './connection'

export const createServer = async (): Promise<any> => {
    const app = new Koa();

    Environment.identity !== 'test' && app.use(logger());

    app.use(bodyParser());
    app.use(router.routes()).use(router.allowedMethods());

    try {
        await Connection(app);
    } catch (e) {
        console.log(`error: database connect`);
    }

    return app
};

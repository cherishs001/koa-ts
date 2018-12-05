import {Context} from 'koa';

export const Home = {
    async index(ctx: Context): Promise<void> {
        ctx.body = 'hello';
    },
};

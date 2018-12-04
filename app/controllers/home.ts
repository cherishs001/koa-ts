import {Context} from 'koa';

export const Home = {
    async index(ctx: Context): Promise<void> {
        ctx.apiMessage = '接口说明';
        ctx.body = {
            's': 1,
        };
    },
};

import {Context} from 'koa';
import Rds from '../../utils/dbc/rds';

export const Home = {
    async index(ctx: Context): Promise<void> {
        const API_GATEWAY:Rds = ctx.mysql['api_gateway'];
        const sql = await API_GATEWAY.select('access_token', {
            columns: ['app_id'],
            orders: [['timestamp', 'desc']],
            limit: 1,
            offset: 0,
        });
        const res = await API_GATEWAY.insert('access_token', {
            app_id: '12313',
            app_secret: '1321313',
            access_token: '12313',
            timestamp: '321312',
            access_time: '13132',
            nonce_list: '',
        });
        const res2 = await API_GATEWAY.update('access_token', {
            app_id: '1321313',
        }, {
            where: {
                app_secret: '1321313',
            },
        });
        const res3 = await API_GATEWAY.delete('access_token', {
            app_id: '1321313',
        });
        ctx.body = {sql, res, res2, res3}
    },
};

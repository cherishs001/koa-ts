export const format = () => {
    return async (ctx, next) => {
        try {
            await next();
            if (ctx.status === 200) {
                ctx.body = {
                    status: 1000,
                    message: ctx.apiMessage || '接口返回正确',
                    data: ctx.body,
                }
            }
            if (ctx.status === 500) {
                ctx.body = {
                    status: 5000,
                    message: ctx.error || '服务器故障',
                }
            }
        } catch (e) {
            if (e.status && e.message) {
                ctx.status = 200;
                ctx.body = {
                    status: e.status,
                    message: e.message,
                }
            } else {
                throw e
            }
        }
    }
};

export default {
    identity: 'production',
    port: 3000,
    databases: {
        api_gateway: {
            type: 'mysql',
            host: 'host',
            port: 3306,
            user: 'root',
            password: '123456',
            database: 'api',
        },
    },
}

import * as mysql from 'mysql';
import {Environment} from './environments';
import DatabaseController from '../utils/dbc';

const {databases} = Environment;

const Connection = async (app): Promise<void> => {
    return new Promise<void>(async (resolve, reject): Promise<void> => {
        let flag: boolean = false;
        for (const items in databases) {
            if (databases.hasOwnProperty(items)) {
                const {type, host, port, user, password, database} = databases[items];
                if (type === 'mysql') {
                    const dbc = new DatabaseController({
                        host, port, user, password, database,
                    });
                    try {
                        const connection = await dbc.connect();
                        console.log(`database: ${type}@${items} connect successfully.`);
                        if (!app.context.hasOwnProperty('mysql')) {
                            app.context.mysql = {};
                        }
                        app.context.mysql[items] = connection;
                    } catch (err) {
                        flag = true;
                        console.log(`database: ${type}@${items} connect failed.`);
                        console.log(err);
                        reject()
                    }
                } else {
                    flag = true;
                    console.log(`The unknown database type '${type}'.`);
                    reject()
                    //todo 后续根据需要增加新的database-type
                }
            }
        }
        if (!flag) {
            resolve()
        }
    })
};

export {Connection}

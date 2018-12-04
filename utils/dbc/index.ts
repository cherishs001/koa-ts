import * as mysql from 'mysql';
import Rds from './rds';

// 数据库配置
interface DatabaseConfig {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string,
}

class DatabaseController {
    _host: string;
    _database: string;
    _password: string;
    _port: number;
    _user: string;
    _databaseConnection: Rds;

    constructor(config: DatabaseConfig) {
        const {host, database, password, port, user} = config;

        this._host = host;
        this._database = database;
        this._password = password;
        this._port = port;
        this._user = user;
        this._databaseConnection = null;
    }

    async connect(): Promise<Rds> {
        return new Promise<Rds>((resolve, reject) => {
            const connection = mysql.createConnection({
                host: this._host,
                user: this._user,
                port: this._port,
                password: this._password,
                database: this._database,
            });
            connection.connect((err) => {
                if (!err) {
                    this._databaseConnection = new Rds(connection);
                    resolve(this._databaseConnection)
                } else {
                    reject(err);
                }
            });
        })
    }
}

export default DatabaseController;

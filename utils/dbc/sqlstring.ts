const SqlString = require('mysql/lib/protocol/SqlString');
import {Literal} from './literals';

if (!SqlString.__escape) {
    SqlString.__escape = SqlString.escape;

    SqlString.escape = (val, stringifyObjects, timeZone) => {
        if (val instanceof Literal) {
            return val.toString();
        }
        return SqlString.__escape(val, stringifyObjects, timeZone);
    };
}

export default SqlString;

import * as mysql from 'mysql2/promise';
let connection: any;
try {
    connection = mysql.createPool({
        host     : 'localhost',
        port     : 8889,
        user     : 'root',
        password : 'root',
        database : 'coumbassa',
        connectionLimit: 10000000,
        queueLimit: 100000000,
        connectTimeout: 900000
    });
}catch (error) {
    throw error
}
export default connection


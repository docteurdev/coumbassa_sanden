
// const mysql = require('mysql2');
import * as mysql from 'mysql2';
const connection = mysql.createPool({
    host     : 'localhost',
    port     : 8889,
    user     : 'root',
    password : 'root',
    database : 'fmmi',
    connectionLimit: 10000000,
    queueLimit: 100000000,
    connectTimeout: 900000
});

export default defineEventHandler((event) => {
    connection.query('SHOW TABLES',
        function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    )
    const query = getQuery(event)
    return {
        hello: `Hello, ${query.name}!`
    }
})

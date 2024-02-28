import { defineEventHandler, getQuery } from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/h3/dist/index.mjs';
import * as mysql from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/mysql2/index.js';

const connection = mysql.createPool({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "fmmi",
  connectionLimit: 1e7,
  queueLimit: 1e8,
  connectTimeout: 9e5
});
const base = defineEventHandler((event) => {
  connection.query(
    "SHOW TABLES",
    function(err, results, fields) {
      console.log(results);
      console.log(fields);
    }
  );
  const query = getQuery(event);
  return {
    hello: `Hello, ${query.name}!`
  };
});

export { base as default };
//# sourceMappingURL=base.mjs.map

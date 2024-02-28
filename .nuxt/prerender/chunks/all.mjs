import { defineEventHandler } from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/h3/dist/index.mjs';
import * as mysql from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/mysql2/promise.js';

let connection;
try {
  connection = mysql.createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "coumbassa",
    connectionLimit: 1e7,
    queueLimit: 1e8,
    connectTimeout: 9e5
  });
} catch (error) {
  throw error;
}
const connection$1 = connection;

const all = defineEventHandler ? defineEventHandler(async (event) => {
  let res = await connection$1.query("SHOW TABLES").then((rows) => {
    console.log("Response: ", rows);
    return { "data": rows };
  }).catch((error) => {
    throw error;
  });
  return res.data[0];
}) : null;

export { all as default };
//# sourceMappingURL=all.mjs.map

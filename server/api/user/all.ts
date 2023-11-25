import connection from "../../repository/ds";
export default defineEventHandler ? defineEventHandler(async (event) => {

    let res = await connection.query('SHOW TABLES').then((rows: any) => {
        console.log("Response: ", rows);
        return {'data': rows}
    }).catch((error: any) => {
        throw error;
    });
    return res.data[0]

}) : null

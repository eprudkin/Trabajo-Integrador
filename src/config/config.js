const mysql = require('mysql2');
const { Connection } = require('mysql2/typings/mysql/lib/Connection');
require('dorenv').config();

/* Crea un pool de conexiones */

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.DBPASS,
    database: process.env.DB,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

/* Test de conexión exitosa */
pool.getConnection((error, Connection) => {
    if (error) {
        console.error('error de conexión', error)
    } else {
    console.log('Conexión exitsa a DB');
    Connection.release()        
    }
})

module.exports = {
    conn: pool.promise()
  };
  
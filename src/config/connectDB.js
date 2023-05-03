import mysql from 'mysql2/promise';
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_basic'
//   }).promise();

const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'node_basic'
    });


export default pool;
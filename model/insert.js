let mysql  = require('mysql');
use('con_bd.js')
// insert statment
let sql = `INSERT INTO usuario(login,senha)
           VALUES('vinicius', '1234')`;

// execute the insert statment
connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database: 'agenda'
})
conn = conn()
conn.query(sql);

connection.end();
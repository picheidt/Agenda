let mysql  = require('mysql');
let connection = require('./con_bd.js');


let sql = `INSERT INTO usuario(login,senha)
           VALUES('sergio', 123456)`;

connection.query(sql);

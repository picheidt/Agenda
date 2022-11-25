let mysql  = require('mysql');
let connection = require('./con_bd.js');

// insert statment
let sql = `INSERT INTO usuario(login,senha)
           VALUES('sergio', 123456)`;

// execute the insert statment
connection.query(sql);

async function connect(){
    if (global.connection && global.connection.state !== 'diconnected') {
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
//index.js
const db = require("./db");
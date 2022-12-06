require("dotenv-safe").config();
// const mysql=require('mysql2');
const mysql=require('mysql-simple-pool');
function connect_mysql(){
    const connection = new mysql(100, {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        port: process.env.PORT,
        database: process.env.DATABASE
    })

    // connection.connect()    
    return connection
}

module.exports = connect_mysql; 

    
      

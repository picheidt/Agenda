require("dotenv-safe").config();
const mysql=require('mysql2');
function connect_mysql(){
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        port: process.env.PORT,
        database: process.env.DATABASE
    })

    connection.connect()    
    return connection
}

module.exports = connect_mysql; 

    
      

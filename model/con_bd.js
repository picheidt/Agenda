require("dotenv-safe").config();

let mysql=require('mysql2');

    let connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        port: process.env.PORT,
        database: process.env.DATABASE
    })

    
    connection.connect(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.'); 
    });
    
    module.exports = connection; 

    
      

let mysql=require('mysql');

    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        port:3306,
        database: 'agenda'
    })

    
    connection.connect(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.'); 
    });
    
    module.exports = connection; 

    
      

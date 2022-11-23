let mysql=require('mysql');

function conn(){
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        port:3306,
        database: 'agenda'
    })
    return connection.connect()
}
// connection.connect();

//   connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });

//   connection.destroy(); 

var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'student',
  password : 'student',
  database : 'chat'
});

connection.connect();

connection.query('select * from messages',(error,result,fields)=>{//
  if (error)
    throw error;
  console.log(result);
});

connection.end();

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = connection;//
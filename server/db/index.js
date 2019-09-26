var mysql = require('mysql');

module.exports.con=(callback) =>{
  var connection = mysql.createConnection({
    host : 'localhost',
    user : 'student',
    password : 'student',
    database : 'chat'
  });

  connection.connect();

  connection.query('select * from messages',(error,result,fields)=>{//
    if (error) throw error;
    callback(result);
  });

  connection.end();

  //why we write like this is because
  //you don't want to left the connection not ended before the program is closed
  //so we write it to a whole function with a callback
};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
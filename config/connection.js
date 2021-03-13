const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3025880k!',
    database: 'burgers_db',
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`Error Connecting: ${err.stack}`);
    return;
  }
  console.log(`You're tapped in at ID: ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
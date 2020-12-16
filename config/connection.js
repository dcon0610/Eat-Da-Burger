// Set up MySQL connection.
var mysql = require("mysql");
var connection

if (process.env.JAWSDB_URL) {

connection = mysql.createConnection(process.env.JAWSDB_URL) }
else {
connection = mysql.createConnection({
  host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "s48r745553q55iv2",
  password: "u28q81b3s472w6q8",
  database: "geiz2z538aj8q3gl"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

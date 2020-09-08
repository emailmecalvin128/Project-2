const mysql = require("mysql");
if (process.env.games_DB_URL) {
  connection = mysql.createConnection(process.env.games_DB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "games_db"
  });
}
connection.connect();
module.exports = connection;
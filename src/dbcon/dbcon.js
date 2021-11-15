const mysql = require("mysql");

// db connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restapinodesql",
});

conn.connect((err) => {
  if (err) {
    console.log("MySQL not connected");
    return;
  }
  console.log("MySQL connected");
});

module.exports = conn;

const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "vegetable",
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
      console.log("connected as id " + connection.threadId + "\n");
    runSearch();
  });

  module.exports = connection;
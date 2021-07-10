var mysql = require("mysql");

var con = mysql.createConnection({
  host: "demodb.c2xuojqtlfze.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var mysql = require('mysql');
var connection  = mysql.createConnection({
    host     : "demodb.cdfazj07phty.us-east-1.rds.amazonaws.com",
    user     : "admin",
    password : "password",
    database : "linkedin"
  });
exports.handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
     'Content-Type': 'application/json',
     'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials' : true 
    },
    body: {}
  };

  return new Promise((resolve, reject) => {
    const readTable = "SELECT * from people";
    connection.query(readTable, (err, results, fields) => {
      if (err) {
        response.statusCode = 400;
        const mesg = {
          message : 'Error Occured',
          result: err
        }
        response.body = JSON.stringify(mesg);
        reject(response);
      } else {
        const mesg = {
          message : 'Success',
          result: results
        }
        response.body = JSON.stringify(results);
        resolve(response);
      }
    });
  });
};
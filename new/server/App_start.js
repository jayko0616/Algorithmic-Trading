var mysql = require('mysql');
var number = 1;


var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "!kyr0125227"

});



con.connect(function(err) {

  if (err) throw err;
  console.log(number);
  console.log("Connected!");
  number++;
});
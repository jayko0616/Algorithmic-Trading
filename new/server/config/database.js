const mysql = require('mysql');
const conn = {
  host:'localhost',
  port:'3306',
  user:'root',
  password:'!kyr0125227',
  database:'test'
}
module.exports = {
    init: function(){
      return mysql.createConnection(conn);
    },
    connect: function(conn){
      conn.connect(function(err){
        if(err) console.error('mysql connection error: ' + err);
        else console.log('mysql is connected successfully');
      });
    }
  }

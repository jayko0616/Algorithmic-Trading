const mysql = require('mysql');
const dbConfig = require("../config/config.js");

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user : dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

con.connect(error =>{
    if(err) throw error;
    console.log("Successfully");
});

module.exports = con;
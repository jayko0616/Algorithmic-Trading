const express = require('express');  // express 라는 서버를 사용하기위한 프레임워크 받아오기
const app = express();        //express 사용
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 5050;            // 포트넘버 설정
const mysql = require('mysql');
// const { DB } = require('./config/config');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: port,
  password: '!kyr0125227',
  database: "project4",
});

connection.connect(function(err){
  if(err) throw err;
  console.log("you are con");
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) =>{
  res.send('혁이는 코딩중!')
});

app.post("/idplz",(req,res)=>{
    const test = req.body.test;
    // // console.log(req.body);
    // var sql = "INSERT INTO test_1 (test_body) VALUES (?)";
    // // connection.query("INSERT INTO test_1(test_body) VALUES (?)", [test],
    // // function(err,rows, fields){
    // //   if(err){
    // //     console.log("실패");
    // //   }
    // //   else{
    // //     console.log("성공");
    // //   };
    // // });
    // connection.query(sql, [test], function(err, rows, fields){
    //   if(err){
    //     console.log(err);
    //     res.status(500).send("Internal Server  Error");
    //   }
    //   res.redirect('/topic/'+ result.insertId);
    });


// app.post("/callbody", (req, res)=>{
//   connection.query("SELECT * FROM db_test",
//   function(err, rows, fields){
//     if(err){
//       console.log("불러오기 실패");
//     }
//     else{
//       console.log("불러오기 성공");
//       res.send(rows[0]);
//     }
//   })
// })
app.listen(port, ()=>{         // 서버 시작하는 부분
  console.log(`http://localhost:${port}  경로는 이거입니다.`);
})
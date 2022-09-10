// const settings = {
//     async: true,
//     crossDomain: true,
//     url: 'https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1',
//     method: 'GET',
//     headers: {
//       Accept: 'application/json'
//     }
//   };
  
// $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
const url = 'https://api.upbit.com/v1/candles/minutes/5?market=KRW-BTC&count=10';
const url2 = 'https://api.upbit.com/v1/candles/minutes/5?market=KRW-ETH&count=10';
request.open("GET", url, false);
request.send();
const obj = JSON.parse(request.responseText);
request.open("GET", url2, false);
request.send();
const obj_2 = JSON.parse(request.responseText);
var keys = Object.keys(obj_2);

var testQuery = "INSERT INTO 'members' ('username', 'password') VALUES ('test','test');";

connection.query(testQuery, function(err, results, fields){
  if(err){
    console.log(err);
  }
  console.log(results);
});

connection.end();
// console.log(obj_2);
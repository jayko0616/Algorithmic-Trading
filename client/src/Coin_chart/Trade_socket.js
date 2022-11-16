const WebSocket = require('ws')
const express = require("express");
const cors = require("cors");
const fs = require('fs')
const app = express();
const port = 5000;
const bodyParser = require('body-parser');



let recvData = "";
var coin_real_data = [];  
const coininfo = [
    {
        
        "tag" : "BTC",
        "name_ko" : "비트코인",
        "currency" : "0"
        
    },
    {
        "tag" : "ETH",
        "name_ko" : "이더리움",
        "currency" : "0"
    },
    {
        "tag" : "XRP",
        "name_ko" : "리플",
        "currency" : "0"
    },
    {
        "tag": "ETC",
        "name_ko": "이더리움클래식",
        "currency": "0"
    },
    {
        "tag": "ADA",
        "name_ko": "에이다",
        "currency": "0"
    },
    {
        "tag": "SAND",
        "name_ko": "샌드박스",
        "currency": "0"
    },
    {
        "tag": "EOS",
        "name_ko": "이오스",
        "currency": "0"
    },
    {
        "tag": "SOL",
        "name_ko": "솔라나",
        "currency": "0"
    },
    {
        "tag": "DOGE",
        "name_ko": "도지코인",
        "currency": "0"
    },
];

app.use(bodyParser.json());
// app.use(cors());
app.options("*", cors());


function tradeServerConnect(codes) {
    var i = 0;
    let ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.on('open', ()=>{
        // console.log('trade websocket is connected')
        // console.log(codes);
        const str = `[{"ticket":"find"},{"type":"trade","codes":["${codes}"]}]`;
        ws.send(str);
    })  
    ws.on('close', ()=>{
        console.log('trade websocket is closed');
        // setTimeout(function() {
        //     console.log('trade 재접속');
        //     tradeServerConnect(codes);
        // }, 1000);
    })  
    ws.on('message', (data)=>{
        try {
            let str = data.toString('utf-8')
            recvData = JSON.parse(str)
            app.get("/", (req, res) => res.send("Hello World!"));
                if(codes == 'KRW-BTC'){
                    coin_real_data[0] = recvData['trade_price']
                }
                else if(codes == 'KRW-ETH'){
                    coin_real_data[1] = recvData['trade_price']
                }
                else if(codes == 'KRW-XRP'){
                    coin_real_data[2] = recvData['trade_price']
                }
                else if(codes == 'KRW-ETC'){
                    coin_real_data[3] = recvData['trade_price']
                }
                else if(codes == 'KRW-ADA'){
                    coin_real_data[4] = recvData['trade_price']
                }
                else if(codes == 'KRW-SAND'){
                    coin_real_data[5] = recvData['trade_price']
                }
                else if(codes == 'KRW-EOS'){
                    coin_real_data[6] = recvData['trade_price']
                }
                else if(codes == 'KRW-SOL'){
                    coin_real_data[7] = recvData['trade_price']
                }
                else if(codes == 'KRW-DOGE'){
                    coin_real_data[8] = recvData['trade_price']
                }
        } catch (e) {
            console.log(e)
        }
    })
}

async function start() {
    var i = 0; 
    function print()
    {
	    tradeServerConnect('KRW-'+coininfo[i].tag)
        i+=1;
        if(i == 9){
            i = i - 9;
        }
        if(coin_real_data[8] != null){
            const Coin_data = {
                BTC:{price: coin_real_data[0]},
                ETH:{price: coin_real_data[1]},
                XRP:{price: coin_real_data[2]},
                ETC:{price: coin_real_data[3]},
                ADA:{price: coin_real_data[4]},
                SAND:{price: coin_real_data[5]},
                EOS:{price: coin_real_data[6]},
                SOL:{price: coin_real_data[7]},
                DOGE:{price: coin_real_data[8]}
            }
            const Coin_data_json = JSON.stringify(Coin_data)
            fs.writeFileSync("coin_real_data.json", Coin_data_json);
        }
        else{

        }
    }
    setInterval(print,1000);
}

async function local(){
    // app.use(bodyParser.json());
    app.post('/api/users/coin/buy', (req, res)=>{
        let name = req.body;
        console.log(name);
        const spawn = require('child_process').spawn;
    
    // 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
          const result = spawn('python', ['../Coin_Trade/buy.py']);
    
    // 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
          result.stdout.on('data', function(data) {
              console.log(data.toString());
          });
    
      // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
          result.stderr.on('data', function(data) {
              console.log(data.toString());
          });
      });
      app.post('/api/users/coin/sell', (req, res)=>{
        let name = req.body;
        console.log(name);
        // console.log('탐정이죠 ');
        const spawn = require('child_process').spawn;
    
    // 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
          const result = spawn('python', ['../Coin_Trade/sell.py']);
    
    // 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
          result.stdout.on('data', function(data) {
              console.log(data.toString());
          });
    
      // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
          result.stderr.on('data', function(data) {
              console.log(data.toString());
          });
      });

}

start()
// local()
// console.log(i);
// tradeServerConnect();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

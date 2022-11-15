const WebSocket = require('ws')
const express = require("express");
const cors = require("cors");
const fs = require('fs')
const app = express();
const port = 8080;


let recvData = "";
var coin_const = 'BTC';
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

app.use(cors());
app.options("*", cors());


function tradeServerConnect(codes) {
    var i = 0;
    let ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.on('open', ()=>{
        console.log('trade websocket is connected')
        console.log(codes);
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
            // console.log("/"+codes);
            // setTimeout(() => {
            // console.log('상수:'+coin_const)
            // if(codes == coin_const){
                // console.log('tag: '+codes)
                // console.log('data: '+recvData['code'])
                // console.log(recvData['code'] + ':' + recvData['trade_price'])
                // app.get("/"+codes, (req, res) => {
                //     // res.send('BTC');
                //     // console.log("/"+codes);
                //         console.log(recvData['code'] + ':' + recvData['trade_price'])
                //         return res.send(recvData);
                // });
                if(codes == 'KRW-BTC'){
                    coin_real_data[0] = recvData['trade_price']
                    // const coin_BTC = {
                    //     tag : recvData['code'],
                    //     price: recvData['trade_price']
                    // }
                    // const BTC_JSON = JSON.stringify(coin_BTC);
                    // fs.writeFileSync("coin_real_data.json", BTC_JSON);
                }
                // else if(codes == 'KRW-ETH'){
                //     coin_real_data[1] = recvData['trade_price']
                //         const coin_ETH = {
                //             tag : recvData['code'],
                //             price: recvData['trade_price']
                //         }
                //         const ETH_JSON = JSON.stringify(coin_ETH);
                //         fs.writeFileSync("coin_real_data.json", ETH_JSON);
                // }
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
            // }
            // }, 5000);
        } catch (e) {
            console.log(e)
        }
    })
}

async function start() {
    var i = 0; 
    function print()
    {
        // coin_const = 'KRW-'+coininfo[i].tag;
	    tradeServerConnect('KRW-'+coininfo[i].tag)
        // console.log(coininfo[i].tag);
        // console.log(i)
        i+=1;
        if(i == 9){
            // console.log(i)
            i = i - 9;
        }
        // tradeServerConnect('KRW-BTC')
        // console.log('recvData',recvData['trade_price']);
        // console.log(coin_real_data[2])
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

start()

// console.log(i);
// tradeServerConnect();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

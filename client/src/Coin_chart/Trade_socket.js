const WebSocket = require('ws')

let recvData = "";
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

function tradeServerConnect(codes) {
    let ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    ws.on('open', ()=>{
        console.log('trade websocket is connected')
        const str = `[{"ticket":"find"},{"type":"trade","codes":["${codes}"]}]`;
        ws.send(str);
    })  
    ws.on('close', ()=>{
        console.log('trade websocket is closed');
        setTimeout(function() {
            console.log('trade 재접속');
            tradeServerConnect(codes);
        }, 1000);
    })  
    ws.on('message', (data)=>{
        try {
            let str = data.toString('utf-8')
            recvData = JSON.parse(str)
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
        if(i == 10){
            i = i / 10;
        }
        console.log('recvData',recvData['trade_price']);
    }
    setInterval(print,10000);

}

start()
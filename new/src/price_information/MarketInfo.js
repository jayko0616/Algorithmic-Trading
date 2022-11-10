import React from "react";


export function MarketCoinList(){
    const request = new XMLHttpRequest();
    const url = 'https://api.upbit.com/v1/market/all';

    request.open("GET", url, false);
    request.send();
    var obj = JSON.parse(request.responseText);
    console.log(obj);
}

export function MarketCoin(coin){
    const request = new XMLHttpRequest();
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-'+coin
    request.open("GET",url, false);
    request.send();
    var obj = JSON.parse(request.responseText);
    return(obj[0].trade_price);
}

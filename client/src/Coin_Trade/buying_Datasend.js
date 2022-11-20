import axios from "axios";
// import coin_buy_data from "./coin_buy_data.json"
const fs = require('fs')


const buying_Datasend = (buying_price, quantity, buy_sum) =>{
    const client = axios.create();   // axios 기능생성
    const price = buying_price
    const quantity_ = quantity   
    const buy_data = []
    buy_data.push([price,quantity_]);
    coin_buy_data.push(buy_data);
    const coin_buy_data = JSON.stringify(buy_data)
    // fs.writeFileSync("coin_buy_data.json",coin_buy_data);
    // coin_buy_data.push('asd')
    return client.post('/api/users/coin/buy' , {price, quantity_, buy_sum} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

export default buying_Datasend;

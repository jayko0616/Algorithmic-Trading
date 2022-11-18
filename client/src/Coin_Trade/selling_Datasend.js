import axios from "axios";
const fs = require('fs')

const selling_Datasend = (sell_price, quantity, sell_sum) =>{
    const client = axios.create();   // axios 기능생성
    const price = sell_price
    const quantity_ = quantity
    const sell_data = []
    sell_data.push([price,quantity_]);
    const coin_sell_data = JSON.stringify(sell_data)
    // fs.writeFileSync("coin_sell_data.json",coin_sell_data);
    
    return client.post('/api/users/coin/sell' , {price, quantity_,sell_sum} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

export default selling_Datasend;

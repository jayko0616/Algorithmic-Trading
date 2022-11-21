import axios from "axios";


const buying_Datasend = (buying_price, quantity, buy_sum) =>{
    const client = axios.create();   // axios 기능생성
    const price = buying_price
    const quantity_ = quantity   
    return client.post('/api/users/coin/buy' , {price, quantity_, buy_sum} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

export default buying_Datasend;

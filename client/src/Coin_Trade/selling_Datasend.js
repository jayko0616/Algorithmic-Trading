import axios from "axios";


const selling_Datasend = (sell_price, quantity) =>{
    const client = axios.create();   // axios 기능생성
    const price = sell_price
    const quantity_ = quantity   
    client.post('/api/users/coin/sell' , {price, quantity_} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

export default selling_Datasend;

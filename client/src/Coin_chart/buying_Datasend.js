import axios from "axios";


const buying_Datasend = () =>{
    const client = axios.create();   // axios 기능생성
    const name = '내이름은 코난';   
    client.post('/api' , {name} );   //axios 기능을 통한 post 사용및 name 값 전달.
}

export default buying_Datasend;

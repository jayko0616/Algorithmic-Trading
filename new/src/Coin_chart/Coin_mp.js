// import { useQuery } from "react-query";
// import axios from 'axios'

// const Coin_marget_price = [];

// const get_oneminute = async(coin_name) =>{
//     await axios.get('https://api.upbit.com/v1/candles/minutes/1/?market=KRW-'+ coin_name +'&count=1').then((res) =>{
//       for(let i = 0; i < res.data.length; i++){
//           if(res.data[i].market != null){
//                   setcoinInfo(prev => {return [...prev, res.data[i]]})
//           }else{
//               alert("error");
//           }
//       }
//     })
// }

// const Coin_mp = () =>{
//     const Coin_List = ['BTC', 'ETH', 'XRP', 'ETC', 'ADA', 'SAND', 'EOS', 'SOL', 'DOGE']
//     for(var i=0;i<9;i++){
//         Coin_marget_price[i] = get_oneminute(Coin_List[i]);
//     }
//     for(var i=0;i<9;i++){
//         console.log(Coin_marget_price[i]);
//     }
// }


// export default Coin_mp;
import React, {Component,createContext ,useContext, useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
// import coinList from './coinList.json'
import dayjs from 'dayjs'
import axios from 'axios'
import Layout from "../Layout/Layout";
import CoinItem from "./CoinItem";
import { CoinContext } from "./CoinStore";
import {useSelector} from 'react-redux';


export default function ApexChart(){
    const [coinInfo, setcoinInfo] = useState([]);
    // const [name,setname] = useState(['BTC']);
    // const coin_name_ = useContext(CoinContext);
    const coin_name_ = useSelector((store)=>store.str);
    // console.log(coin_name_);
    // const [coin__, setcoin] =useState('BTC');
    // setname(props.coin_data);
//Upbit API
    const getApi = async(coin_name) =>{
      await axios.get('https://api.upbit.com/v1/candles/minutes/60?market=KRW-'+ coin_name +'&count=100').then((res) =>{
      for(let i = 0; i < res.data.length; i++){
          if(res.data[i].market != null){
                  setcoinInfo(prev => {return [...prev, res.data[i]]})
          }else{
              alert("error");
          }
      }
      })
    }

    useEffect(() => {
      // console.log(coin_name_);
      getApi(coin_name_);
      // getApi('BTC');
      // setname(props.coin_data);
      // console.log(coin_name_);
    },[coin_name_])

    const [time, setTime] = useState([]);
    const [open, setOpen] = useState([]);
    const [low, setLow] = useState([]);
    const [close, setClose] = useState([]);
    const [high, setHigh] = useState([]);
    const [data_ex, setData_ex] = useState([]);
    time.length = 0;
    open.length = 0;
    low.length = 0;
    close.length = 0;
    high.length = 0;
    data_ex.length = 0;


    // console.log(xrpInfo)
    coinInfo.map(({candle_date_time_kst, opening_price, high_price, low_price, trade_price}) =>{
      time.push(candle_date_time_kst);
      open.push(opening_price);
      high.push(high_price);
      low.push(low_price);
      close.push(trade_price);
    });

    time.reverse();
    open.reverse();
    high.reverse();
    low.reverse();
    close.reverse();

    for(let i=0;i<time.length;i++){
      data_ex.push({x:time[i], y:[open[i],high[i],low[i],close[i]]});
    }

    coinInfo.length = 0;
    const series = [{
      name: 'candle',
      data: data_ex
      },] 

    const options = {
            chart: {
              height: 350,
              type: 'candlestick',
            },
            title: {
              text: 'React Chart',
              align: 'left'
            },
            // annotations: {
            //   xaxis: [
            //     {
            //       x: 'Oct 06 14:00',
            //       borderColor: '#00E396',
            //       label: {
            //         borderColor: '#00E396',
            //         style: {
            //           fontSize: '12px',
            //           color: '#fff',
            //           background: '#00E396'
            //         },
            //         orientation: 'horizontal',
            //         offsetY: 7,
            //         text: 'Annotation Test'
            //       }
            //     }
            //   ]
            // },
            // tooltip: {
            //   enabled: true,
            // },
            xaxis: {
              type: 'category',
              labels: {
                formatter: function(val) {
                  return dayjs(val).format('MMM DD HH:mm')
                }
              }
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          }

      return (
  <div id="chart">
    {/* <Button onClick={()=>setname('BTC')}>클릭</Button> */}
<ReactApexChart options={options} series={series} type="candlestick" height={400} width={600}/>
  </div>
      );
}


// export default connect(mapStateToProps)(ApexChart);
// export default ApexChart;
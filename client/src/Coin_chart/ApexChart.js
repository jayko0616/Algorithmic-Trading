import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from 'dayjs'
import axios from 'axios'
import {useSelector} from 'react-redux';
import { Button } from "react-bootstrap";
import "./ApexChart.css";
import chart_reducer from "../_reducers/chart_reducer";
import Reducer from "../_reducers";


export default function ApexChart(){
    const [minute_, set_minute_] = useState(60);
    const [time_, set_time_] = useState(true);
    const [coinInfo, setcoinInfo] = useState([]);
    const coin_name_ = useSelector(Reducer => Reducer.chartState.str);

//Upbit API
    // 일별로 데이터 받을 때 
    const getApi_day = async(coin_name) =>{ 
      await axios.get('https://api.upbit.com/v1/candles/days/?market=KRW-'+ coin_name +'&count=100')
      .then((res) =>{
        // console.log(res);
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].market != null){
              setcoinInfo(prev => {return [...prev, res.data[i]]})
          }else{
              alert("error");
          }
        }
      }) 
    }
      // console.log(minute_);
    // 분당 데이터 받을 때 
    const getApi_minute = async(coin_name) =>{
      await axios.get('https://api.upbit.com/v1/candles/minutes/'+minute_+'/?market=KRW-'+ coin_name +'&count=100')
      .then((res) =>{
      for(let i = 0; i < res.data.length; i++){
          if(res.data[i].market != null){
                  setcoinInfo(prev => {return [...prev, res.data[i]]})
          }else{
              alert("error");
          }
      }
      }) 
      // console.log(minute_);
    }
    useEffect(() => {
      // console.log("coin::", coin_name_);
      time_ ? (getApi_day(coin_name_)) : (getApi_minute(coin_name_));
    },[coin_name_ , minute_, time_])

    // 시간을 바꾸는 함수 
    const change_minute = (time) =>{
      set_minute_(time);
      set_time_(false);
    }

    // 일을 바꾸는 함수 
    const change_day = () =>{  
      // set_minute_(time);
      set_time_(true);
    }

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
              text: coin_name_,
              align: 'center',
              style: {
                color: '#FFFFFF',
                fontSize: '25px'
              }
            },
            subtitle:{
              text: Intl.NumberFormat('en-US').format(close[99])+ " KRW",
              align: 'center',
              style: {
                fontSize:  '23px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#5CC9FA'
              },
            },
            xaxis: {
              type: 'category',
              labels: {
                style: {
                  colors: '#DBE0D5',
                  fontSize: '12px',
                  fontWeight: 'bold'
                },
                formatter: function(val){
                  return dayjs(val).format('MMM DD HH:mm')
                }
              }
            },
            yaxis: {
              tooltip: {
                enabled: true
              },
              labels: {
                style: {
                  colors: '#DBE0D5',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }
              }
            }
          }

      return (
  <div id="chart">
    <div className="times">
    <Button className="btn_oneminite" onClick={() => change_minute(1)} >1분</Button>
    <Button className="btn_thirtyminite" onClick={() => change_minute(30)}>30분</Button>
    <Button className="btn_onehour" onClick={() => change_minute(60)}>1시간</Button>
    <Button className="btn_fourhour" onClick={() => change_minute(240)}>4시간</Button>  
    <Button className="btn_oneday" onClick={() => change_day()}>1일</Button> 
    </div> 
    {/* <Button onClick={()=>setname('BTC')}>클릭</Button> */}
<ReactApexChart options={options} series={series} type="candlestick" height={400} width={500}/>
  </div>
      );
}


// export default connect(mapStateToProps)(ApexChart);
// export default ApexChart;
import React, { useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { getBalance } from '../../../_actions/user_action';
let a = '디폴트 잔고값!';

function PortfolioPage (){ 
  const dispatch = useDispatch();
/*
  const getBalance = function() {
    const request = axios.post('/api/users/coin/balance')
    .then(response => response.data);

    console.log(request);

    return request
  }

*/

  useEffect(()=>{
    dispatch(getBalance())
    .then(response => {
      if(response.payload.getUserBalance) {
        console.log(response.payload.balance)
        alert("현재 잔고 " + response.payload.balance.toString() + "원")
        a = response.payload.balance.toString()
      }
      else{
        a = '안됐엉';
      }
    })
  });
  
  const balance = () => {
    dispatch(getBalance())
    .then(response => {
      if(response.payload.getUserBalance) {
        console.log(response.payload.balance)
        alert("현재 잔고 " + response.payload.balance.toString() + "원")
        //return response.payload.balance.toString()
        return "balance 가져오기 함수!"
      }
    })
  }

  const temp = () => {
    return "임시 테스트용 함수!"
  }

    return (
      <div className='layout'>
        <LandingHeader/>
        <Header/>
        <body>
          이건 포트폴리오 ~~
          <span id = "balance">잔액은!! {balance()} {a}</span>
        </body>
        <Footer/>
      </div>
    )
}


export default PortfolioPage;
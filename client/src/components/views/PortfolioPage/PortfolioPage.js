import React, { useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { getBalance } from '../../../_actions/user_action';

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
        alert(response.payload.balance)
      }
    })
  });
  
    return (
      <div className='layout'>
        <LandingHeader/>
        <Header/>
        이건 포트폴리오 ~~ 

        <Footer/>
      </div>
    )
}


export default PortfolioPage;
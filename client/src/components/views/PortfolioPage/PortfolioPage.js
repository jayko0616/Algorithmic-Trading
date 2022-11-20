import React, { useState, useEffect, useRef } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { getBalance, getDictionary } from '../../../_actions/user_action';
import Auth from '../../../hoc/auth';
import PieChart from './PieChart';

import * as d3 from 'd3';


function PortfolioPage (){ 
  
  const dispatch = useDispatch();
  const [Balance, setBalance] = useState("0");

  var userBalance = "";

  const balance = () => {
    dispatch(getBalance())
    .then(response => {
      if(response.payload.getUserBalance) {
        userBalance = response.payload.balance;
        setBalance(userBalance);
      }
    })
  }

  balance();

    return (
      <div className='layout'>
        <LandingHeader/>
        <Header/>
        <body>
          이건 포트폴리오 ~~
          <span id = "balance">잔액은!!</span>
          <input className="balance" value={Balance}></input>   
          <PieChart/>
        </body>
        <Footer/>
      </div>
    )
}


export default Auth(PortfolioPage, true);
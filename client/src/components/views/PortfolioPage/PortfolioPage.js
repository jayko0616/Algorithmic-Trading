import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { getBalance, getDictionary } from '../../../_actions/user_action';
import { response } from 'express';



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

  const dictonary = () => {
    dispatch(getDictionary())
    .then(response => {
      if(response.payload.getUserDictionary){
        console.log(response.payload.dictonary);
      }
    })

  }




  dictonary();

  balance();


    return (
      <div className='layout'>
        <LandingHeader/>
        <Header/>
        <body>
          이건 포트폴리오 ~~
          <span id = "balance">잔액은!!</span>
          <input className="balance" value={Balance}></input>
        </body>
        <Footer/>
      </div>
    )
}


export default PortfolioPage;
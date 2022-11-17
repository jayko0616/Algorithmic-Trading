import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { getBalance } from '../../../_actions/user_action';



function PortfolioPage (){ 
  
  
  const dispatch = useDispatch();
  const [Balance, setBalance] = useState("0");

  
  var a = "";

  const balance = () => {
    dispatch(getBalance())
    .then(response => {
      if(response.payload.getUserBalance) {
        console.log(response.payload.balance)
        alert("현재 잔고 " + response.payload.balance.toString() + "원")
        //return response.payload.balance.toString()
        a = response.payload.balance;
        console.log("this is a: ", a);
        setBalance(a);
      }
      else{
        a = "Not Connect"
      }
    })
    return a;
  }

  balance();

  console.log("this is a" , a);


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
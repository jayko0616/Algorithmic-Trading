import React, { useEffect } from 'react';
import  axios  from 'axios';
import { useDispatch } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';

function PortfolioPage (){ 
  useEffect(()=>{
    axios.post('/api/users/coin/balance')
    .then(response => response.data);
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
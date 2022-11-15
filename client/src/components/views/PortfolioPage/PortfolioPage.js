import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';

function PortfolioPage (){ 

  const request = axios.post('/api/users/coin/balance', dataToSubmit)
    .then(response => response.data);


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
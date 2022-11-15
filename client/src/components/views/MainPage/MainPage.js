import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainPage.css'
import ApexChart from '../../../Coin_chart/ApexChart';
import CoinList from '../../../Coin_chart/CoinList';
import Trade_check from '../../../Coin_Trade/Trade_check';
import LandingHeader from '../LandingHeader/LandingHeader';
import { useNavigate } from 'react-router-dom';

function MainPage (){ 
    const navigate = useNavigate();

    const goLanding = (event) => {
      navigate('/')
    }

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          <body>
            <main className='main'>
              <ApexChart></ApexChart>
              <CoinList></CoinList>
              <Trade_check></Trade_check>
            </main>
          </body>
          <br/><br/>
          <form onSubmit={goLanding}>
            <button>Landing</button>
          </form>
          <Footer/>
        </div>
  )
}


export default MainPage
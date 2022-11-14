import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainPage.css'
import ApexChart from '../../../Coin_chart/ApexChart';
import CoinList from '../../../Coin_chart/CoinList';
import Trade_check from '../../../Coin_Trade/Trade_check';


function MainPage (){ 

    return (
        <div className='layout'>
          <Header/>
          <body>
            <main className='main'>
              <ApexChart></ApexChart>
              <CoinList></CoinList>
              <Trade_check></Trade_check>
            </main>
          </body>
          <br/><br/>
          <Footer/>
        </div>
  )
}


export default MainPage
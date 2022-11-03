import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css'
import ApexChart from '../Coin_chart/ApexChart';
import CoinList from '../Coin_chart/CoinList';
import Trade_check from '../Coin_trade/Trade_check';

export default function Layout (){

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
          <Footer/>
        </div>
    )
  }
// }

// export default Layout;


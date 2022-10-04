import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css'
import ApexChart from '../ApexChart';
import CoinList from '../CoinList';
import { CoinContext } from '../CoinStore';


// class Layout extends React.Component{
export default function Layout (){

  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   document.title = 'You clicked time';
  // });
  // render(){
    return (
      <CoinContext.Provider value="BTC">
        <div className='layout'>
          <Header/>
          <body>
            <main className='main'>
              <ApexChart></ApexChart>
              <CoinList></CoinList>
            </main>
          </body>
          <Footer/>
        </div>
      </CoinContext.Provider>
    )
  }
// }

// export default Layout;
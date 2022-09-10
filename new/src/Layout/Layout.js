import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css'
import ApexChart from '../ApexChart';
import CoinList from '../CoinList';

const Layout = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = 'You clicked times';
  });
  return (
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
  )
}

export default Layout;
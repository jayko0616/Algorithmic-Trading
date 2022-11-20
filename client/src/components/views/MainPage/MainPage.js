import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainPage.css'
import ApexChart from '../../../Coin_chart/ApexChart';
import CoinList from '../../../Coin_chart/CoinList';
import Trade_check from '../../../Coin_Trade/Trade_check';
import LandingHeader from '../LandingHeader/LandingHeader';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

function MainPage (){ 
    const navigate = useNavigate();

    const goLanding = (event) => {
      navigate('/')
    }

    const goLogin = (event) => {
      navigate('/login')
    }

    const goLogout = (event) => {

    }

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          <body>
            <main className='main' style={{
              padding:'3px'
            }}>
              <ApexChart></ApexChart>
              <hr className='vertical'></hr>
              <CoinList></CoinList>
              <hr className='vertical'></hr>
              <Trade_check></Trade_check>
            </main>
          </body>
          <br/><br/>

          <form className='goOut' 
          style={{justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
            <button onClick={goLanding}>Landing</button>
            <button onClick={goLogin}>Login</button>
            <button onClick={goLogout}>Logout</button>
          </form>
          <Footer/>
        </div>
  )
}


export default Auth(MainPage, null);
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';

function MyinformationPage (){ 

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          이건 내정보 ~~
          <Footer/>
        </div>
  )
}


export default MyinformationPage;
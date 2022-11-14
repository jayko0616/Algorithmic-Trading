import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';

function NoticePage (){ 

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          이건 공지 ~~
          <Footer/>
        </div>
  )
}


export default NoticePage;
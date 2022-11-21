import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useDispatch  } from 'react-redux'
import {  tradingStart  } from '../../../_actions/user_action';
import { logout } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LandingHeader from '../LandingHeader/LandingHeader';
import Auth from '../../../hoc/auth'

function LandingPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onMainHandler = (event) => {
    //event.preventDefault();
    navigate('/main');
  }
  
  const onClickHandler = () => {
    dispatch(logout())
      .then( (response) => {
        console.log(response);
        if(response.payload.success){
          navigate('/login')
        }else {
          alert("로그아웃 실패!")
        }
      })
  }

  const onLoginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  }

  const onRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  }
  
  return (
    <div>
      <LandingHeader/>
      <body>
        <main style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '60vh', background:'#DBE0D5', marginTop: '0px'
    }}>
        <form onSubmit={onMainHandler}>
          <button type="submit" id="mainPage"  alt="메인페이지로 이동하기">
            메인 페이지
          </button>
        </form>
        <br></br>
        <form onSubmit={onLoginHandler}>
          <button type="submit" id="loginPage"  alt="로그인 페이지 이동">
            로그인
          </button>
        </form>
        <br></br>
        <form onSubmit={onRegisterHandler}>
          <button type="submit" id="registerPage"  alt="회원가입 페이지 이동">
            회원가입
          </button>
        </form>
        <br/>
        <button onClick={onClickHandler}>
          로그아웃
        </button>
        </main>
      </body>
      <Footer/>
    </div>
  )
}

export default Auth(LandingPage, null);
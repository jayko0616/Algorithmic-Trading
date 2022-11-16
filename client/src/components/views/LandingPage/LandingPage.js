import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useDispatch  } from 'react-redux'
import {  tradingStart  } from '../../../_actions/user_action';
import { logout } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LandingHeader from '../LandingHeader/LandingHeader';

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    //auth; 로그인 상태 확인 
    axios.get('/api/users/auth')

    //apikey를 입력받아서 등록된 key와 일치하는지 확인 
    const apikey = prompt("주식 API KEY를 입력하세요")
    //setCoinApiKey(apikey.toString)
    
    console.log(apikey)

    let body = {
      coinApiKey: apikey
    }

    dispatch(tradingStart(body)
    .then((response) => {
      if (response.payload.startSuccess) {
        navigate('/main');
      } else {
        alert('Error', response.payload.message);
      }
    }))
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
        <form onSubmit={onSubmitHandler}>
          <button type="submit" id="tradingStartBtn"  alt="자동매매 시작하기">
            자동매매 시작
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

export default LandingPage
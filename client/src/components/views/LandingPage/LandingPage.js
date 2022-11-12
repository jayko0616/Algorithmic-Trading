import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useDispatch  } from 'react-redux'
import {  tradingStart  } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  
  //LandingPage() 들어오자마자 실행한다
  
  /*
  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(response => console.log(response.data))
  }, []) 
*/
  const [coinApiKey, setCoinApiKey] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onMainHandler = (event) => {
    //event.preventDefault();
    navigate('/main');
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

    dispatch(tradingStart(body).then((response) => {
      if (response.payload.startSuccess) {
        navigate('/login');
      } else {
        alert('Error');
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
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
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
    </div>
  )
}

export default LandingPage
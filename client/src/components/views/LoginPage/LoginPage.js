import { Axios } from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import LandingHeader from '../LandingHeader/LandingHeader';
import Footer from '../Footer/Footer';
import './LoginPage.css';
import Auth from '../../../hoc/auth';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ApiKey, setApiKey] = useState("");
  const [AccessKey, setAccessKey] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onApiKeyHandler = (event) => {
    setApiKey(event.currentTarget.value)
  }

  const onAccessKeyHandler = (event) => {
    setAccessKey(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); 

    let body = {
      email: Email,
      password: Password,
      coinApiKey: ApiKey,
      accessKey: AccessKey
    }

    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess) {
          navigate('/main') // landing page 로 
        }
        else {
          alert(response.payload.message)
        }
      })
  }

  return (
    <div>
    <LandingHeader/>
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '60vh', background: '#DBE0D5'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
          onSubmit={onSubmitHandler}
        >
          <div className='login'>
            <input id="1" type="email" value={Email} onChange={onEmailHandler} required></input>
            <label>Email</label>
            <span></span>
          </div>
          <br></br><br></br>
          
          <div className='login'>
            <input id="2" type="password" value={Password} onChange={onPasswordHandler} required></input>
            <label>Password</label>
            <span></span>
          </div>
          <br></br><br></br>
          
          <div className='login'>
            <input id="3" type="password" value={ApiKey} 
            onChange={onApiKeyHandler} required></input>
            <label>SecretKey</label>
            <span></span>
          </div>
          <br></br><br></br>
          
          <div className='login'>
            <input id="4" type="password" value={AccessKey} 
            onChange={onAccessKeyHandler} required></input>
            <label>AccessKey</label>
            <span></span>
          </div>
          <br /><br></br>
          
          <div className='login'>
            <button>
              Login
            </button>
          </div>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Auth(LoginPage, false);

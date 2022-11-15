import { Axios } from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

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

    console.log(Email);
    console.log(Password);
    console.log(body);

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
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler}></input>
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler}></input>
          <label>SecretKey</label>
          <input type="password" value={ApiKey} onChange={onApiKeyHandler}></input>
          <label>AccessKey</label>
          <input type="password" value={AccessKey} onChange={onAccessKeyHandler}></input>
          <br />
          <button>
            Login
          </button>
        </form>
    </div>
  )
}

export default LoginPage

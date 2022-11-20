import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import LandingHeader from '../LandingHeader/LandingHeader'
import Auth from '../../../hoc/auth';
import './RegisterPage.css';


function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ApiKey, setApiKey] = useState("");
  //const [ConfirmApiKey, setConfirmApiKey] = useState("");
  const [AccessKey, setAccessKey] = useState("");
  //const [ConfirmAccessKey, setConfirmAccessKey] = useState("");
  

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
 
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onApiKeyHandler = (event) => {
    setApiKey(event.currentTarget.value)
  }

  const onAccessKeyHandler = (event) => {
    setAccessKey(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); 

    if(Name === "")
      return alert("이름을 입력해주세요.")
    if(PhoneNumber === "")
      return alert("핸드폰 번호를 입력해주세요.")
    if(Password === "")
      return alert("비밀번호를 입력해주세요.")
    if(ApiKey === "")
      return alert("업비트 API Secret Key를 입력해주세요.")
    if(AccessKey === "")
      return alert("업비트 API Access Key를 입력해주세요.")
    
    if(Password !== ConfirmPassword){
      return alert("비밀번호가 일치하지 않습니다.")
    }

    let body = {
      name: Name,
      email: Email,
      password: Password,
      phone: PhoneNumber,
      coinApiKey: ApiKey,
      accessKey: AccessKey
    }

    console.log(Email);
    console.log(Name);
    console.log(PhoneNumber);
    console.log(ApiKey);
    console.log(AccessKey);

    console.log(body);

    dispatch(registerUser(body))
      .then(response => {
        console.log(response);
        if(response.payload.success) {
          alert("회원가입 성공!")
          navigate('/') // landing page 로 
        }
        else {
          alert("회원가입 실패!", response.payload.err)
        }
      })
  }

  return (
    <div>
      <LandingHeader/>
    <div id="register" style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler}></input>
          
          <label>Name</label>
          <input type="" value={Name} onChange={onNameHandler}></input>
          
          <label>Phone Number</label>
          <input type="" value={PhoneNumber} onChange={onPhoneNumberHandler}></input>
          
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler}></input>
          
          <label>Confirm Password</label>
          <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>
          
          <label>UpBit API Secret KEY</label>
          <input type="password" value={ApiKey} onChange={onApiKeyHandler}></input>
          
          <label>UpBit API Access KEY</label>
          <input type="password" value={AccessKey} onChange={onAccessKeyHandler}></input>
          
          <br />
          <button classname="regBtn">
            회원가입
          </button>
        </form>
    </div>
    </div>
  )
}

export default Auth(RegisterPage, false);

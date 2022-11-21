import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Myinformation.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { useDispatch } from 'react-redux'
import { getInformation } from '../../../_actions/user_action';




function MyinformationPage (){ 
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("jayco@naver.com");
    const [name, setname] = useState("제이코");
    const [phone, setphone] = useState("010-2060-7486");
  
    /*
    dispatch(getInformation(body))
    .then(response => {
      if(response.payload.email) {
        console.log("너 돼?");
        setEmail(response.payload.email)
      }
      else if(response.payload.name){
        setname(response.payload.name)
      }
      else if(response.payload.phone){
        setphone(response.payload.phone)
      }
      else {
        // alert(response.payload.message)
        console.log("실패");
      }
    })
    */
    dispatch(getInformation())
    .then(response => {
      console.log(response.payload)
        setEmail(response.payload.email)
        setname(response.payload.name)
        setphone("0107193")
    })

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          <div className='infoframe'>
            <div id = "infoinnerframe">
          <span id="nameinfo">이름: </span><span id="setinfo">{name}</span>
          <br></br>
          <span id="emailinfo">이메일: </span><span id="setinfo">{Email}</span>
          <br></br>
          <span id="phoneinfo">휴대폰 번호: </span><span id="setinfo">{phone}</span>
          <br></br>
          <button> 내 정보 수정하기</button>
          </div>
          </div>
          <Footer/>
        </div>
  )
}

export default MyinformationPage;
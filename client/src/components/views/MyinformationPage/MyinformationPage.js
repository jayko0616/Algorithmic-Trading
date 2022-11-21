import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../MainPage/MainPage.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import { useDispatch } from 'react-redux'
import { getInformation } from '../../../_actions/user_action';




function MyinformationPage (){ 
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");

    let body = {
      name : name,
      email: Email,
      phone: phone,
    }
    
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

    return (
        <div className='layout'>
          <LandingHeader/>
          <Header/>
          <span>이름: </span><span>{name}</span>
          <span>이메일: </span><span>{Email}</span>
          <span>휴대폰 번호: </span><span>{phone}</span>

          <Footer/>
        </div>
  )
}


export default MyinformationPage;
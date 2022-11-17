import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function(SpecificComponent, option, adminRoute = null){

    //option:
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능한 페이지
    //flase => 로그인한 유저만 출입이 가능한 페이지 
    function AuthenticationCheck(){
        
        const dispatch = useDispatch();
        const navigate = useNavigate();
        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response)
            
                //로그인 안 한 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        alert("로그인이 필요한 서비스 입니다.")
                        navigate('/login')
                    }
                }
                //로그인 한 상태 
                else{
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/');
                    }else{
                        if(option === false){
                            navigate('/');
                        }
                    }
                }   
            })
        }, [])
        return (
            <SpecificComponent/>
        )
    }




    return AuthenticationCheck
}
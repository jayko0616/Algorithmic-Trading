import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START
} from './types';

/**
 * 서버로 로그인 요청 함수
 * @param {*} User { email, password }
 * @returns 
 */
export function loginUser(dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data);
  
  //reducer에 넘김 
  return {
    type: LOGIN_USER,
    payload: request
  }
}

/**
 * 서버로 회원가입 요청 함수
 * @param {*} User { name, email, password }
 * @returns 
 */
export function registerUser(dataToSubmit) {
  const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data);
  //reducer에 넘김 
  return {
    type: REGISTER_USER,
    payload: request
  }
}

/**
 * 코인 api key 입력받아 일치 확인 요청 함수 
 * @param {*} String apikey 
 * @returns 
 */
export function tradingStart(dataToSubmit) {
    const request = axios.post('/api/users/coin/trading', dataToSubmit)
      .then(response =>  response.data )

      return{
        type: TRADING_START,
        payload: request
      }
}

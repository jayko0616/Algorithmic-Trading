import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START,
    LOGOUT_USER,
    ApiKey_Set
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

export function logout() {
  const request = axios.get('/api/users/logout')
    .then(response => response.data);
  
  //reducer에 넘김 
  return {
    type: LOGOUT_USER,
    payload: request
  }
}
/**
 * 코인 api key 입력받아 일치 확인 요청 함수 
 * @param {*} String apikey 
 * @returns 
 */
export function tradingStart(dataToSubmit) {
  console.log("coin/trading으로 요청 보냄")
  console.log(dataToSubmit)
  console.log(dataToSubmit.coinApiKey)
    const request = axios.post('/api/users/coin/trading', dataToSubmit)
      .then(response =>  response.data )

      return{
        type: TRADING_START,
        payload: request
      }
}

/**
 * 로그인할 때 받은 api key를 파이썬에 넘기는 요청 함수 
 * @param {*} body - secretkey, accesskey 
 * @returns ApiKey_Set; true or false
 */
export function setApi(dataToSubmit) {
  const request = axios.get('/api/users/coin/set', dataToSubmit)
    .then(response => response.data);

  return { 
    type: ApiKey_Set,
    payload: request
  }
}
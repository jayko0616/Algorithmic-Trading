import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START,
    LOGOUT_USER,
    AUTH_USER,
    GET_BALANCE
} from '../_actions/types';

const initState = {
    loginSuccess: false,
    register: false,
    startSuccess: false,
    message: ""
}

export default function(state = initState, action){
    
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload.loginSuccess, userId:action.payload.userId }

        case LOGOUT_USER:
            return {...state, success: action.payload }
    
        case REGISTER_USER:
            return {...state, register: action.payload }
        
        case AUTH_USER:
            return {...state, register: action.payload }
            
        case TRADING_START:
            return {...state, startSuccess: action.payload , message: action.payload.message}
        case GET_BALANCE:
            return {...state, getBalance: action.payload.getBalance}
            
        default:
            return state;
    }
}
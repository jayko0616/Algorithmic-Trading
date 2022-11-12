import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START
} from '../_actions/types';



export default function(state = {}, action){
    
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }

        case REGISTER_USER:
            return {...state, register: action.payload }
            
        case TRADING_START:
            return {...state, startSuccess: action.payload }
            
        default:
            return state;
    }
}
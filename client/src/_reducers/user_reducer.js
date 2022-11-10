import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START
} from '../_actions/types';



export default function(state = {}, action){
    
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return {...state, register: action.payload }
            break;
        case TRADING_START:
            return {...state, startSuccess: action.payload }
            break;
        default:
            return state;
    }
}
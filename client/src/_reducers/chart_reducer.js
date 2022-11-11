import {
    BTC, XRP
} from '../_actions/types';

const initState = {
    type:BTC,
    str:BTC
}


export default function(state = initState, action) {
    
    switch(action.type){
        case XRP:
            return {...state,  str:action.str}
        
        default:
            return state;
    }
}


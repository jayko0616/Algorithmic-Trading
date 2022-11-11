const initState = {
    type:'BTC',
    str:'BTC'
}

export default function(state = initState, action) {
    
    switch(action.type){
        case 'XRP':
            return {str:action.str}
        
        default:
            return state;
    }
}


export const change_coin = (props) =>({type: 'XRP' , str:props});

const initState = {
    type:'BTC',
    str:'BTC'
}

export function reducer(state = initState, action) {
    switch(action.type){
        case 'XRP':
            return {str:action.str}
        default:
            return state;
    }

}

export default reducer;


export const Changecoin = () =>({type:'XRP', str:'XRP'});

const initState = {
    str:'Not'
}

export const reducer = (state = initState, action)=>{
    switch(action.type){
        case 'XRP':
            return {str:state.str}
        default:
            return state;
    }

}

export default reducer;


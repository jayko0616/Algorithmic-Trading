import { combineReducers } from 'redux';
//reducer들 다 import 
import user from './user_reducer';
import chart from './chart_reducer';
import { useSelector } from 'react-redux';

const rootReducer = combineReducers({
    chartState: chart,
    userState: user,
});

export default rootReducer;
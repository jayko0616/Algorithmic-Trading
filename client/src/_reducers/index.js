import { combineReducers } from 'redux';
//reducer들 다 import 
import user from './user_reducer';
import chart from './chart_reducer';

const rootReducer = combineReducers({
    userState: user,
    chartState: chart,
});

export default rootReducer;
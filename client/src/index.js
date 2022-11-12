import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from "react-dom/client";
import {Provider} from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import promise from 'redux-promise';
import Reducer from './_reducers';
import  chart_reducer  from '../src/_reducers/chart_reducer'
import user_reducer from './_reducers/user_reducer';

//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const devTools = window._REDUX_DEVTOOLS_EXTENSION_ &&
                window._REDUX_DEVTOOLS_EXTENSION_();
/*
const store = createStoreWithMiddleware(Reducer, 
  window._REDUX_DEVTOOLS_EXTENSION_ &&
  window._REDUX_DEVTOOLS_EXTENSION_());
  */

const store = configureStore({
  reducer: Reducer,
  middleware: [promiseMiddleware, ReduxThunk],
  //devTools: devTools
})

const store1 = createStore(chart_reducer);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <Provider store={store}> */}
    <Provider store={ createStoreWithMiddleware(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&
    window._REDUX_DEVTOOLS_EXTENSION_()) && store} >
         <App />
    {/* </Provider> */}
    </Provider>
   
=======
    <Provider store = {store} serverState = {devTools}>
         <App />
    </Provider>
>>>>>>> 3d1fb47d976e5308bab22db940184b5be3c7173e
  </React.StrictMode>
);


/*
ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&
    window._REDUX_DEVTOOLS_EXTENSION_())}>
      <App/>
  </Provider>,

  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

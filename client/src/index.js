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
import Reducer from './_reducers';
import { createRoot } from 'react-dom/client';
import reducer from '../src/Coin_chart/CoinStore';

const store = createStore(reducer);

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

//const root = ReactDOM.createRoot(document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Provider store={ createStoreWithMiddleware(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&
    window._REDUX_DEVTOOLS_EXTENSION_())}>
         <App />
    </Provider>
    </Provider>
   
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

import React, {createContext, useReducer, useState} from "react";

export const CoinContext = createContext("ETH");
export const CoinDispatchContext = createContext();

function coinReducer(state, action){
    switch(action.type){
        case "BTC":
            return "BTC";
        case "ETH":
            return "ETH";
        case "XRP":
            return "XRP";
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export function GlobalContextProvider({children}){
    const [coin_re, coinDispatch] = useReducer(coinReducer,"BTC")
    return(
        <CoinContext.Provider value={coin_re}>
            <CoinDispatchContext.Provider value={coinDispatch}>
                {children}
            </CoinDispatchContext.Provider>
        </CoinContext.Provider>
    );
}
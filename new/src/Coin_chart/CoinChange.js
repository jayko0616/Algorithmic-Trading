import React from "react";
import { useDispatch } from "react-redux";
import { change_coin } from "./CoinStore";



const CoinChange = (props) =>{
    const disPatch = useDispatch();
    // console.log(props);
    disPatch(change_coin(props.tag));
}

export default CoinChange;
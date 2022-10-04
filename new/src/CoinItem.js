import React, { useContext, useRef, useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import CoinChange from "./CoinChange";
// import ApexChart from "./ApexChart";
import {createContext} from 'react';
// import { useContext } from "react";
import { CoinContext, CoinDispatchContext } from "./CoinStore";
// import ApexChart from "./ApexChart";
// import { setCoins } from "./redux/action";


// const CoinType = useContext(CoinContext);
// const coin_Dispatch = useContext(CoinDispatchContext);
// class CoinItem extends React.Component{
    function handleclick (){
        console.log(this.props.tag)
        this.state.coin_Dispatch({type:this.props.tag})
        // setCoins(this.props.tag);
    }

    function CoinItem(props){
    // export default function CoinItem(){
    // coinProvider = () =>{
    //     const coin = this.props.tag;
    //     // return(CoinChange(coin));
    // }
    // render(){
        return(
            <TableRow className="Table_coin">
                <TableCell onClick={()=>handleclick}>{props.tag}</TableCell>
                <TableCell onClick={()=>handleclick}>{props.name_ko}</TableCell>
                <TableCell onClick={()=>handleclick}>{props.currency}</TableCell>
            </TableRow>
        )
    }
// }

export default CoinItem;

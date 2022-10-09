import React, { useContext, useRef, useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import CoinChange from "./CoinChange";
// import ApexChart from "./ApexChart";
import {createContext} from 'react';
// import { useContext } from "react";
import { CoinContext, CoinDispatchContext } from "./CoinStore";
import ApexChart from "./ApexChart";
// import { setCoins } from "./redux/action";
import {useDispatch} from "react-redux";
import {change_coin} from './CoinStore';
import CoinChange from './CoinChange';


// class CoinItem extends React.Component{

    function CoinItem(props){
        const disPatch = useDispatch();
        const handleclick = (props) =>{
            console.log(props);
            disPatch(change_coin(props.tag));
        }
    // export default function CoinItem(){
    // coinProvider = () =>{
    //     const coin = this.props.tag;
    //     // return(CoinChange(coin));
    // }
    // render(){
        return(
            <TableRow className="Table_coin">
                <TableCell onClick={()=>handleclick(props)}>{props.tag}</TableCell>
                <TableCell onClick={()=>handleclick(props)}>{props.name_ko}</TableCell>
                <TableCell onClick={()=>handleclick(props)}>{props.currency}</TableCell>
            </TableRow>
        )
    }
// }

export default CoinItem;

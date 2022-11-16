import React, { useEffect, useState } from "react";
import "./CoinList.css";
import CoinItem from "./CoinItem";
import Table from '@material-ui/core/Table';
import  TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
// import data from "../../../server/json/coin_real_data.json"
import data from "./coin_real_data.json"

// const data = require('../../../server/coin_real_data.json') 


const coininfo = [
        {
            "tag" : "BTC",
            "name_ko" : "비트코인",
            "currency" : "0"
            
        },
        {
            "tag" : "ETH",
            "name_ko" : "이더리움",
            "currency" : "0"
        },
        {
            "tag" : "XRP",
            "name_ko" : "리플",
            "currency" : "0"
        },
        {
            "tag": "ETC",
            "name_ko": "이더리움클래식",
            "currency": "0"
        },
        {
            "tag": "ADA",
            "name_ko": "에이다",
            "currency": "0"
        },
        {
            "tag": "SAND",
            "name_ko": "샌드박스",
            "currency": "0"
        },
        {
            "tag": "EOS",
            "name_ko": "이오스",
            "currency": "0"
        },
        {
            "tag": "SOL",
            "name_ko": "솔라나",
            "currency": "0"
        },
        {
            "tag": "DOGE",
            "name_ko": "도지코인",
            "currency": "0"
        },
];




function CoinList (){
        coininfo[0].currency = data.BTC.price;
        coininfo[1].currency = data.ETH.price;
        coininfo[2].currency = data.XRP.price;
        coininfo[3].currency = data.ETC.price;
        coininfo[4].currency = data.ADA.price;
        coininfo[5].currency = data.SAND.price;
        coininfo[6].currency = data.EOS.price;
        coininfo[7].currency = data.SOL.price;
        coininfo[8].currency = data.DOGE.price;
        useEffect(()=>{
            coininfo[0].currency = data.BTC.price;
            coininfo[1].currency = data.ETH.price;
            coininfo[2].currency = data.XRP.price;
            coininfo[3].currency = data.ETC.price;
            coininfo[4].currency = data.ADA.price;
            coininfo[5].currency = data.SAND.price;
            coininfo[6].currency = data.EOS.price;
            coininfo[7].currency = data.SOL.price;
            coininfo[8].currency = data.DOGE.price;
        },data)
        return(
            <div className="list">
                {/* <Table className = {classes.table}> */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>한글명</TableCell>
                            <TableCell>현재가</TableCell>
                            <TableCell>태그</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {coininfo.map(c=>{ 
                        return(<CoinItem tag = {c.tag} name_ko = {c.name_ko} currency = {c.currency}/>)})}
                    </TableBody>
                </Table>

            </div>
        )
    }
// }

// export default withStyles(styles)(CoinList);
export default CoinList;











 
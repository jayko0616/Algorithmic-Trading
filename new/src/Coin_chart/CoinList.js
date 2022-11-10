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




// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX : "auto"
//     },
//     table: {
//         minWidth : 1080
//     }
// })

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
    // render(){
        // const { classes } = this.props;
        const [price, setprice] = useState(0);
        var num = 0;
        useEffect(()=>{
            // const getApi_day = async() =>{ 
            //     for(let i=0;i<9;i++){
            //         await axios.get('https://api.upbit.com/v1/candles/days/?market=KRW-'+ coininfo[i].tag +'&count=1').then((res) =>{
            //             for(let j = 0; j < res.data.length; j++){
            //                 if(res.data[j].market != null){
            //                         setprice(prev => {return [...prev, res.data[j]]})
            //                         console.log(num);
            //                         coininfo[0].currency = price;
            //                         num+=1;
            //                 }else{
            //                     alert("error");
            //                 }
            //             }
            //             if(num === 10){
            //                 num = 0;
            //             }
            //         }) 
            //     }
            // }
            // getApi_day();
        })
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











 
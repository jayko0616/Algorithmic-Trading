import React from "react";
import "./CoinList.css";
import CoinItem from "./CoinItem";
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import  TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';

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
            "currency" : "KRW"
            
        },
        {
            "tag" : "ETH",
            "name_ko" : "이더리움",
            "currency" : "KRW"
        },
        {
            "tag" : "XRP",
            "name_ko" : "리플",
            "currency" : "KRW"
        },
        {
            "tag": "ETC",
            "name_ko": "이더리움클래식",
            "currency": "KRW"
        },
        {
            "tag": "ADA",
            "name_ko": "에이다",
            "currency": "KRW"
        },
        {
            "tag": "SAND",
            "name_ko": "샌드박스",
            "currency": "KRW"
        },
        {
            "tag": "EOS",
            "name_ko": "이오스",
            "currency": "KRW"
        },
        {
            "tag": "SOL",
            "name_ko": "솔라나",
            "currency": "KRW"
        },
        {
            "tag": "DOGE",
            "name_ko": "도지코인",
            "currency": "KRW"
        },
];

class CoinList extends React.Component{
    render(){
        // const { classes } = this.props;

        return(
            <div>
                {/* <Table className = {classes.table}> */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>한글명</TableCell>
                            <TableCell>현재가</TableCell>
                            <TableCell>전일대비</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {coininfo.map(c=>{ 
                        return(<CoinItem tag = {c.tag} name_ko = {c.name_ko} currency = {c.currency}/>)})}
                    </TableBody>
                </Table>
            {/* </Paper> */}
            </div>
        )
    }
}

// export default withStyles(styles)(CoinList);
export default CoinList;


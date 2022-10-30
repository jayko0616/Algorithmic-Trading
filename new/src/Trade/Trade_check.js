import React, { useEffect, useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import "./Trade_check.css";
// import styled, {css} from "styled-components";
import {Button} from 'react-bootstrap';
import Trade_buying from "./Trade_buying";
import Trade_selling from "./Trade_selling";


function Trade_check(){
    const [sell_price, set_sell_price] = useState(0);
    const [quantity, set_quantity ] = useState(0);
    const [sum_price , set_sum_price] = useState(0);
    const [ checkValue, setCheckValue ] = useState('');
    const [isBuying, setIsBuying] = useState(true);

    function checkOnlyOne(id) {
        console.log('id', id);
        let checkPick = document.getElementsByName('check');
        Array.prototype.forEach.call(checkPick, function (el) {
          console.log('el', el);
          el.checked = false;
        });
        id.target.checked = true;
        setCheckValue(id.target.defaultValue);
    }

    const table_selling_fuc = () =>{
        setIsBuying(false);
    }
    
    const table_buying_fuc = () =>{
        setIsBuying(true);
    }


    return(
        <TableRow className="Table_trade">
                <TableCell className="Table_buying" onClick={table_buying_fuc}>매수</TableCell>
                <TableCell className="Table_selling" onClick={table_selling_fuc}>매도</TableCell>
                <TableCell className="Table_bill">거래내역</TableCell>
        <div>
            {isBuying ? <Trade_buying/> : <Trade_selling/>}
        </div>
        </TableRow>
    )
}



export default Trade_check
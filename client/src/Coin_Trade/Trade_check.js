import React, { useEffect, useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import "./Trade_check.css";
// import styled, {css} from "styled-components";
import {Button} from 'react-bootstrap';
import Trade_buying from "./Trade_buying";
import Trade_selling from "./Trade_selling";
import Trade_info from "./Trade_info";
// import Coin_mp from "../Coin_chart/Coin_mp";
import { tradingStart } from "../_actions/user_action";
import { useDispatch } from "react-redux";
import Trade_auto from "./Trade_auto";

function Trade_check(){

    const [coin, set_coin] = useState("");

    const [sell_price, set_sell_price] = useState(0);
    const [quantity, set_quantity ] = useState(0);
    const [sum_price , set_sum_price] = useState(0);
    const [checkValue, setCheckValue ] = useState('');
    const [isBuying, setIsBuying] = useState(1);
    const [tradingBtn, setTradingBtn] = useState(1);
    console.log(tradingBtn)

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
        setIsBuying(2);
    }
    
    const table_buying_fuc = () =>{
        setIsBuying(1);
    }

    const table_transinfo_fuc = () =>{
        setIsBuying(3);
    }

    const onAutoTradingHandler = (target) => {
        //'api/users/coin/traindg' 으로 요청 보내슈 
        // if(tradingBtn === 1 ){
            // setTradingBtn(2);
            console.log(target.value);
            set_coin(target.value);
        // }
        // else{
        //     setTradingBtn(1);
        // }
    }

    const getTargetCoin = () =>{
        console.log("zxdas")
    }


    return(
        <TableRow className="Table_trade">
            <div>
                <form name="tradingStart" onSubmit={onAutoTradingHandler}>
                    <select name="coins" onChange={getTargetCoin()} required>
                        <option value='' selected>종목 선택</option>
                        <option value="BTC">BTC(비트코인)</option>
                        <option value="ETH">ETH(이더리움)</option>
                        <option value="XRP">XRP(리플)</option>
                        <option value="ETC">ETC(이더리움클래식)</option>
                        <option value="ADA">ADA(에이다)</option>
                        <option value="SAND">SAND(샌드박스)</option>
                        <option value="EOS">EOS(이오스)</option>
                        <option value="SOL">SOL(솔라나)</option>
                        <option value="DOGE">DOGE(도지코인)</option>
                    </select>
                    {tradingBtn === 1 && <button>자동매매 시작</button>}
                    {tradingBtn === 2 && <button>자동매매 중단하기</button>}
                </form>
            </div>
                <TableCell className="Table_buying" onClick={table_buying_fuc}>매수</TableCell>
                <TableCell className="Table_selling" onClick={table_selling_fuc}>매도</TableCell>
                <TableCell className="Table_bill" onClick={table_transinfo_fuc}>거래내역</TableCell>
        <div>
            {isBuying == 1  && <Trade_buying/>}
        </div>
        <div>
            {isBuying == 2  && <Trade_selling/>}
        </div>
        <div>
            {isBuying == 3  && <Trade_info/>}
        </div>
        </TableRow>
    )
}



export default Trade_check
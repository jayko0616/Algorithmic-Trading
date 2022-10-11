import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import "./Trade_check.css";





function Trade_check(){
    const [sell_price, set_sell_price] = useState(0);
    const [quantity, set_quantity ] = useState(0);
    const [sum_price , set_sum_price] = useState(0);

    const onChange_sell = (e) =>{
        set_sell_price(e.target.value);
        // set_quantity(quantity);
        // const sum = quantity * sell_price;
        // set_sum_price(sum);
    }
    const onClick_plus = () =>{
        set_sell_price(parseInt(sell_price) + 1);
        // set_quantity(quantity);
        // const sum = quantity * sell_price;
        // set_sum_price(sum);
    }
    const onClick_minus = () =>{
        set_sell_price(parseInt(sell_price) - 1);
        // set_quantity(quantity);
        // const sum = quantity * sell_price;
        // set_sum_price(sum);
    }
    const onClick_sum = () =>{
        const sum = quantity * sell_price;
        set_sum_price(sum);
    }
    const onChange_quantity = (e) =>{
        set_quantity(e.target.value);
        // set_quantity(quantity);
        // set_sell_price(sell_price);
        // const sum = quantity * sell_price;
        // set_sum_price(sum);
    }

    const onChange_sum_price = (e) =>{
        set_quantity(quantity);
        set_sell_price(sell_price);
        const sum = quantity * sell_price 
        set_sum_price(sum);
    }

    return(
        <TableRow className="Table_trade">
                <TableCell className="Table_buying">매수</TableCell>
                <TableCell className="Table_selling">매도</TableCell>
                <TableCell className="Table_bill">거래내역</TableCell>
                <div>
                    <div className="sell_price">
                        매수 가격(KRW)
                        <input onChange={onChange_sell} value={sell_price} className="input_sell"/>
                        <button onClick={onClick_plus}>+</button>
                        <button onClick={onClick_minus}>-</button>
                    </div>
                    <div className="quantity_price">
                        주문 수량
                        <input onChange={onChange_quantity} value={quantity} className="input_quantity"/>
                        <button onClick={onClick_sum}>합계</button>
                    </div>
                    <div className="quantity_price">
                        주문 총액(KRW)
                        <input onChange={onChange_sum_price} value={sum_price} className="input_sum"/>
                    </div>
                </div> 
        </TableRow>
    )
}

export default Trade_check
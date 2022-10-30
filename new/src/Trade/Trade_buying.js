import React from "react";
import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';


const Trade_buying = () =>{
    const [sell_price, set_sell_price] = useState(0);
    const [quantity, set_quantity ] = useState(0);
    const [sum_price , set_sum_price] = useState(0);
    const [ checkValue, setCheckValue ] = useState('');
    const [isBuying, setIsBuying] = useState(true);

 
    const onChange_sell = (e) =>{
        set_sell_price(e.target.value);
        // set_quantity(quantity);
        // const sum = quantity * sell_price;
        // set_sum_price(sum);
    }
    const onClick_plus = () =>{
        set_sell_price(parseInt(sell_price) + 1);
    }
    const onClick_minus = () =>{
        set_sell_price(parseInt(sell_price) - 1);
    }



    const onClick_sum = () =>{
        const sum = quantity * sell_price;
        set_sum_price(sum);
    }

    const onChange_quantity = (e) =>{
        set_quantity(e.target.value);
    }

    const onChange_sum_price = (e) =>{
        set_quantity(quantity);
        set_sell_price(sell_price);
        const sum = quantity * sell_price 
        set_sum_price(sum);
    }

    const clear_fun = () =>{
        set_quantity(0);
        set_sell_price(0);
        set_sum_price(0);
    }

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

    return(
        <div>
            <div className="price_check">
                            <span className="check_left">주문 구분</span>
                            <input type="radio" name="check" value="1" onClick={(e) => checkOnlyOne(e)}/>지정가  
                            <input type="radio" name="check" value="2" onClick={(e) => checkOnlyOne(e)}/>시작가
                            <input type="radio" name="check" value="3" onClick={(e) => checkOnlyOne(e)}/> 예약, 지정가 
            </div>
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
            <div className="clearbuying_btn">
                <Button className="clear_btn" onClick={clear_fun}>초기화</Button>   
                <Button className="buying_btn" >매수</Button>
            </div>
    </div>  
    )
}


export default Trade_buying;
import React from "react";
import { Button } from "react-bootstrap";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import "./Trade_check.css";



function Trade_check(){
    return(
        <TableRow className="Table_trade">
                <TableCell className="Table_buying">매수</TableCell>
                <TableCell className="Table_selling">매도</TableCell>
                <TableCell className="Table_bill">거래내역</TableCell>
                {/* <div>
                    
                </div> */}
        </TableRow>
    )
}

export default Trade_check
import React, { useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TableHead } from "@material-ui/core";
import ApexChart from "./ApexChart";


class CoinItem extends React.Component{
    render(){
        return(
            <TableRow className="Table_coin">
                <TableCell>{this.props.tag}</TableCell>
                <TableCell>{this.props.name_ko}</TableCell>
                <TableCell>{this.props.currency}</TableCell>
            </TableRow>
        )
    }
}

export default CoinItem;

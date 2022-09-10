import React, { useRef, useState } from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TableHead } from "@material-ui/core";
import ApexChart from "./ApexChart";


class CoinItem extends React.Component{
    ref = React.createRef();

    handleclick = () =>{
        ApexChart.getApi(this.props.tag);
    }
    render(){
        return(
            <TableRow className="Table_coin">
                <TableCell onClick={this.handleclick}>{this.props.tag}</TableCell>
                <TableCell onClick={this.handleclick}>{this.props.name_ko}</TableCell>
                <TableCell onClick={this.handleclick}>{this.props.currency}</TableCell>
            </TableRow>
        )
    }
}

export default CoinItem;

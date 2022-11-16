import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {useDispatch} from "react-redux";
import { change_coin } from '../_actions/chart_action';
import { makeStyles } from "@material-ui/core/styles";

// class CoinItem extends React.Component{

    function CoinItem(props){
        const disPatch = useDispatch();
        const handleclick = (props) =>{
            disPatch(change_coin(props.tag));
        }
        return(
            <TableRow className="Table_coin">
                <TableCell onClick={()=>handleclick(props)} className="props_tag">{props.name_ko}</TableCell>
                <TableCell onClick={()=>handleclick(props)} className="props_name_ko">{props.currency}</TableCell>
                <TableCell onClick={()=>handleclick(props)} className="props_currency">{props.tag}</TableCell>
            </TableRow>
        )
    }
// }

export default CoinItem;

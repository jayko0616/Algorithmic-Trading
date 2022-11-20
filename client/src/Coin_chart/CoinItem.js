import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {useDispatch} from "react-redux";
import { change_coin } from '../_actions/chart_action';
import { withStyles } from "@material-ui/core/styles";

const CustomTableCell = withStyles(theme => ({
    head: {
        color: '#DBE0D5'
    },
    body: {
        color: '#DBE0D5'
    }
}))(TableCell);

    function CoinItem(props){
        const disPatch = useDispatch();
        const handleclick = (props) =>{
            disPatch(change_coin(props.tag));
        }
        return(
            <TableRow className="Table_coin">
                <CustomTableCell onClick={()=>handleclick(props)} className="props_tag">{props.name_ko}</CustomTableCell>
                <CustomTableCell onClick={()=>handleclick(props)} className="props_name_ko">{props.currency}</CustomTableCell>
                <CustomTableCell onClick={()=>handleclick(props)} className="props_currency">{props.tag}</CustomTableCell>
            </TableRow>
        )
    }
// }

export default CoinItem;

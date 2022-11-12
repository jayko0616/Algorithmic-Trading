import axios from 'axios';
import {
    BTC, XRP,
} from './types';

export const change_coin = (props) =>
    ({
        type: XRP, 
        str:props
    });


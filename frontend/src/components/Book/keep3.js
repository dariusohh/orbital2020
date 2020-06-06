import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

export const Transaction2 = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+' : "-";

    return (
        transaction.amount < 0 ? 
        <li className={transaction.amount <0 ?'minus' : 'plus'}>
             <div>
             <div >{transaction.name} : {sign}${Math.abs(transaction.amount)}  </div>
            </div>  
        </li>
       
        :
       null
    )
}
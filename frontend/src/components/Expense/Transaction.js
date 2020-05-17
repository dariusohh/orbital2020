import React from 'react'
import axios from 'axios';

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    
    const onSubmit = event => {
        axios.delete(`api/${transaction.id}/`);
    }

    return (
        <li className={transaction.amount <0 ?'minus' : 'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    <form onSubmit = {onSubmit}>
        <button className="delete-btn" type="submit">x</button>
        </form>
      </li> 
    )
}
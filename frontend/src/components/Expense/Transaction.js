import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    const onDelete = event => {
        axios.delete(`api/${transaction.id}/`);
    }

    const onUpdate = event => {
        const name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        return axios.put(`api/${transaction.id}/`, {name: name, username: username,
            amount: amount})
            .catch(err => console.log(err))
    }

    return (
        <li className={transaction.amount <0 ?'minus' : 'plus'}>
    <div>{transaction.name} : {sign}${Math.abs(transaction.amount)} </div>
    <Popup trigger={<button className="update-btn">Update</button>} modal closeOnDocumentClick>
        <div>
            <h3>Update transaction</h3>
        <form onSubmit={onUpdate}>
            <div className ="form-control">
            <label htmlFor="text">Category</label>
            <input type="text"  name = "name" placeholder="Enter..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"> Expense <br />
            (negative for expense, positive for revenue)
                </label>
            <input name= "amount" type="number"
            placeholder="Enter amount..." />
            </div>
            <button className="btn">Update transaction</button>
        </form>
        </div>
    </Popup>
    <form onSubmit = {onDelete}>
        <button className="delete-btn" type="submit">x</button>
    </form>
      </li> 
    )
}

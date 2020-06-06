import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

export const Revenue = ({transaction}) => {

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
        <div>
        {transaction.amount > 0 &&
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
             <div>
             <div >{transaction.name} : ${Math.abs(transaction.amount)}  </div>
            </div>  
            <Popup trigger={<button className="update-btn">Update</button>} modal closeOnDocumentClick>
        <div>
            <h3>Update Revenue</h3>
        <form onSubmit={onUpdate}>
            <div className ="form-control">
            <label htmlFor="text">Category</label>
            <input type="text" style={{margin:"0"}} name = "name" placeholder="Enter..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"> Amount <br />
                </label>
            <input name= "amount" type="number"
            placeholder="Enter amount..." />
            </div>
            <button className="btn">Update Revenue</button>
        </form>
        </div>
    </Popup>
    <form onSubmit = {onDelete}>
        <button className="delete-btn" type="submit">x</button>
    </form>
    </li>
    }
    </div>
    )
}
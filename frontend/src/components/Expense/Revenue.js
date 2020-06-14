import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

export const Revenue = ({transaction}) => {

    const onDelete = event => {
        axios.delete(`api/${transaction.id}/`);
    }

    const daydiff = (objdate) => {
        const currdate = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())
        const objyear = objdate.substring(0,4)
        const objmth = objdate.substring(5,7) - 1
        const objday = objdate.substring(8,10)
        const objhour = parseInt(objdate.substring(11,13)) + 8
        const objmin = objdate.substring(14,16)
        const objsec = objdate.substring(17,19)
        const olddate = new Date(objyear,objmth,objday,objhour,objmin,objsec)
        const transdate = new Date(olddate.getFullYear(),olddate.getMonth(),olddate.getDate())
        const daydiff = Math.floor((currdate.getTime() -transdate.getTime()) / (1000*60*60*24))
        if (daydiff === 0) {
            return "Created Today";
        } else if (daydiff === 1) {
            return "Created Yesterday";
        } else {
            return "Created " + daydiff + " days ago"
        }
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
             <div className = "date">{daydiff(transaction.created_at)}</div>
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
            <input name= "amount" type="number" step = "0.01"
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
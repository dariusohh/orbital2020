import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";

export const Expense = ({transaction}) => {

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

    const daydiff = (objdate) => {
        const currdate = new Date()
        const objyear = objdate.substring(0,4)
        const objmth = objdate.substring(5,7) - 1
        const objday = objdate.substring(8,10)
        const objhour = parseInt(objdate.substring(11,13)) + 8
        const objmin = objdate.substring(14,16)
        const objsec = objdate.substring(17,19)
        const olddate = new Date(objyear,objmth,objday,objhour,objmin,objsec)
        const daydiff = Math.floor((currdate.getTime() - olddate.getTime()) / (1000*60*60*24))
        if (daydiff === 0) {
            return "Created Today";
        } else if (daydiff === 1) {
            return "Created Yesterday";
        } else {
            return "Created " + daydiff + " days ago"
        }
    }

    return (
        <div>
        {transaction.amount < 0 &&
        <li className={transaction.amount <0 ?'minus' : 'plus'}>
             <div>
             <div >{transaction.name} : ${Math.abs(transaction.amount)}  </div>
             <div className = "date">{daydiff(transaction.created_at)}</div>
            </div>  
            <Popup trigger={<button className="update-btn">Update</button>} modal closeOnDocumentClick>
        <div>
            <h3>Update Expense</h3>
        <form onSubmit={onUpdate}>
            <div className ="form-control">
            <label htmlFor="text">Category</label>
            <br/>
            <select className="exp-dropdown" name = "name">
              <option value="Entertainment">Entertainment</option>
              <option value="Equipment & Furniture">Equipment & Furniture</option>
              <option value="Marketing">Marketing</option>
              <option value="Office Supplies">Office Supplies</option>
              <option value="Payroll">Payroll</option>
              <option value="Rent">Rent</option>
              <option value="Software">Software</option>
              <option value="Taxes">Taxes</option>
              <option value="Travel">Travel</option>
              <option value="Utilities">Utilities</option>
              <option value="Others">Others</option>
            </select>
            </div>
            <div className="form-control">
            <label htmlFor="amount"> Amount <br/>
                </label>
            <input name= "amount" type="number"
            placeholder="Enter amount..." />
            </div>
            <button className="btn">Update Expense</button>
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
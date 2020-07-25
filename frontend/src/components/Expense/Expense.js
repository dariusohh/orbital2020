import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/button';
import EditIcon from '@material-ui/icons/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import './import.css';
export const Expense = ({transaction}) => {

    const onDelete = event => {
        axios.delete(`api/${transaction.id}/`);
    }

    const onUpdate = event => {
        const name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        return axios.put(`api/${transaction.id}/`, {name: name, username: username,
            amount: -amount})
            .catch(err => console.log(err))
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

    const expenseCat = ["Entertainment","Equipment & Furniture","Marketing",
    "Office Supplies","Payroll","Rent","Software","Taxes","Travel",
    "Utilities","Others"]

    return (
        
        <div>
        {transaction.amount < 0 &&
        <li className={transaction.amount <0 ?'minus' : 'plus'}>
             <div>
             <div >{transaction.name} : ${Math.abs(transaction.amount)}  </div>
             <div className = "date">{daydiff(transaction.created_at)}</div>
            </div>  
            <Popup trigger={<EditIcon className="update-btn">Update</EditIcon>} modal closeOnDocumentClick>
            <div>
           
        <form onSubmit={onUpdate}>
            <div className ="form-control">
            <InputLabel >Category</InputLabel>
            <br/>
            <select className="exp-dropdown" name = "name">
                {
                    expenseCat.map(x => 
                    <option value={x}>{x}</option>
                    )
                }
            </select>
            </div>
            <br/>
            <div className="form-control">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
         
            <input name= "amount" type = "text" 
            placeholder="Enter amount..." />
            </div>
            <br/>
            <Button variant="contained"  type="submit"  fullWidth  color="primary">Update Expense</Button>
        </form>
        </div>
    </Popup>
    <DeleteIcon  className="delete-btn"  onClick ={onDelete} type="submit"/>
        </li>
        }
    </div>
    )
}

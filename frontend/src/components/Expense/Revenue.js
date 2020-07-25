import React from 'react'
import axios from 'axios';
import Popup from "reactjs-popup";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/button';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
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
        <>

        <div>
        {transaction.amount > 0 &&
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
             <div>
            <div>
            {transaction.name} : ${Math.abs(transaction.amount)}
            </div>

      
             <div className = "date">{daydiff(transaction.created_at)}</div>
            </div>  
            <Popup trigger={<EditIcon className="update-btn">Update</EditIcon>} modal closeOnDocumentClick>
         
            
            <div>
        
        <form onSubmit={onUpdate}>
            <div className ="form-control">
            <InputLabel >Category</InputLabel>
            <br/>
            <input type="text" style={{margin:"0"}} name = "name" placeholder="Enter..." />
            </div>
            <br/>
            <div className="form-control">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
           
            <input name= "amount" type = "text" 
            placeholder="Enter amount..." />
            </div>
            <br/>
            <Button variant="contained"  type="submit"  fullWidth  color="primary">Update Revenue</Button>
        </form>
        </div>
    </Popup>

 <DeleteIcon  className="delete-btn"  onClick ={onDelete} type="submit"/>
    </li>
    }
    </div>
    </>
    )
      }

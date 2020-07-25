import React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
class AddButton extends React.Component {
    state = {
      category: "",
      amount: '',
    }
    onSubmit =()=> {
      const name = this.state.category;
      let amount = this.state.amount;
      if (this.props.type === "Expense") {
        amount = -this.state.amount
      }
      const username = localStorage.getItem("username");
      return axios.post('api/', {name: name, username: username,
              amount: amount})
              .catch(err => console.log(err))
      }
      
      handleChange = (event) => {
        this.setState ({
          category: event.target.value
        })

      };
    
      handleamount = (event) => {
        this.setState ({
          amount: event.target.value
        })

      };
      render() {
        const categories = [
          {
            value: 'Entertainment',
            label: 'Entertainment'
          },
          {
            value: 'Equipment & Furniture',
            label: 'Equipment & Furniture'
          },
          {
            value: "Marketing",
            label: "Marketing"
          },
          {
            value: "Office Supplies",
            label: "Office Supplies"
          },
          {
            value: "Payroll",
            label: "Payroll"
          },
          {
            value: "Rent",
            label: "Rent"
          },
          {
            value: "Software",
            label: "Software"
          },
          {
            value: "Taxes",
            label: "Taxes"
          },
          {
            value: "Travel",
            label: "Travel"
          },
          {
            value: "Utilities",
            label: "Utilities"
          },
          {
            value: "Others",
            label:"Others"
          }
  
        ]
    return (
        <Popup trigger={ <Fab color="primary" aria-label="add">
        <AddIcon /> 
        </Fab>} modal closeOnDocumentClick>
<div>
        <form  noValidate autoComplete="off">
        <InputLabel >Category</InputLabel>
        {this.props.type === "Expense" &&
        <TextField
        fullWidth
          id="name"
          select
          label="Select"
          value={this.state.category}
          onChange={this.handleChange}
          helperText="Please select your category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      } 
      {this.props.type === "Revenue" &&
        <TextField
        fullWidth
        
        label="Enter"
        placeholder="Please enter your category"
        value={this.state.category}
          onChange={this.handleChange}
       
      />
      
      }
          <br/>
        <br/>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
             fullWidth
            id="standard-adornment-amount"
            value={this.state.amount}
            onChange={this.handleamount}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
     <br/>
     <br/>
        <Button variant="contained" fullWidth onClick = {this.onSubmit} type="submit" color="primary">
          Add {this.props.type}
          </Button>

        </form>
        </div>
    </Popup>

    )
    }
  }

  export default AddButton;

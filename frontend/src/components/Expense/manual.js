import React from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/button';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Manual extends React.Component {
    expenseCat = ["Entertainment","Equipment & Furniture","Marketing",
    "Office Supplies","Payroll","Rent","Software","Taxes","Travel",
    "Utilities","Others"]
    state= {
      done:false
    }

    onSubmit = (event) => {
        var name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        const created_at = event.target.created_at.value + "T00:00:00.00000Z";
        if (amount < 0 && !this.expenseCat.includes(name)) {
          name = "Others"
        }
        this.setState({
          done:true
        }
        )
        return axios.post('api/', {name: name, username: username,
                amount: amount, created_at:created_at})
                .catch(err => console.log(err))
        }
        handleclose =e =>{
          this.setState({
            done:false
          })
      }
      
          render() {
            return ( 
               <>
                <h3 style={{color:'grey'}}>MANUAL IMPORT</h3>
                <form onSubmit={this.onSubmit}>
                    <br/>
                  
                    <InputLabel >Category</InputLabel>
                    <input className="trans-input" type="text"  name = "name" placeholder="Enter..." style={{width:"50%"}}/>
                    <br/>
                    <br/>
                    <InputLabel >Amount</InputLabel>
                
                    <p style={{color:'grey'}}>(negative for expense and positive for revenue)</p>
                    <input className="trans-input" type="text"  name = "amount" placeholder="Enter..." style={{width:"50%"}} />
                    <br/>
                    <br/>
                    <InputLabel >Data</InputLabel>
                    <input className="trans-input" type="date"  name = "created_at" placeholder="Enter..." 
                    max = {new Date(new Date().getTime() + 8*60*60*1000).toISOString().substring(0,10)}
                    style={{width:"15%"}}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="contained"  type="submit" color="primary">Add Past Data</Button>
                    </form>

                    {this.state.done && 
                 <Alert elevation={6} variant="filled"  onClick={this.handleClose} severity="success">
                  Sucessful Import
                </Alert >
                        }
               </>
            )
          }
    }
    
    const mapStateToProps = state => {
        return {
            token: state.token
        }
      }
      
      export default connect(mapStateToProps)(Manual);
    
    
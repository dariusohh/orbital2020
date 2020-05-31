import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class AddTransaction extends React.Component {

    onSubmit = (event) => {
      const name = event.target.name.value;
      const amount = event.target.amount.value;
      const username = localStorage.getItem("username");
      return axios.post('api/', {name: name, username: username,
              amount: amount})
              .catch(err => console.log(err))
      }

      render() {
    return (
        <div>
        <h3>Add new transaction</h3>
      <form onSubmit={this.onSubmit}>
        <div className ="form-control">
          <label htmlFor="text">Category</label>
          <input type="text"  name = "name" placeholder="Enter..." style={{margin:"0"}}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"> Expense <br />
          (negative for expense, positive for revenue)
            </label>
          <input name= "amount" type="number"
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
    )
    }
  }

  export default AddTransaction;
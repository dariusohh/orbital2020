import React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class AddButton extends React.Component {

    onSubmit = (event) => {
      const name = event.target.name.value;
      let amount = event.target.amount.value;
      if (this.props.type === "Expense") {
        amount = -amount
      }
      const username = localStorage.getItem("username");
      return axios.post('api/', {name: name, username: username,
              amount: amount})
              .catch(err => console.log(err))
      }

      render() {
    return (
        <Popup trigger={<button className = "add-btn">Add +</button>} modal closeOnDocumentClick>
        <div>
            <h3>Add {this.props.type}</h3>
        <form onSubmit={this.onSubmit}>
            <div className ="form-control">
            <label htmlFor="text">Category</label>
            <br/>
            { this.props.type === "Revenue" ?
            <input type="text" style={{margin:"0"}} name = "name" placeholder="Enter..." />
            :
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
            }
            </div>
            <div className="form-control">
            <label htmlFor="amount"> Amount <br />
                </label>
            <input name= "amount" type="number" step = "0.01"
            placeholder="Enter amount..." />
            </div>
            <button className="btn">Add {this.props.type}</button>
        </form>
        </div>
    </Popup>
    )
    }
  }

  export default AddButton;

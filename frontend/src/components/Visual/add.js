import React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import Spacer from 'react-add-space';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class AddBudget extends React.Component {

    onSubmit = (event) => {
      const budget = event.target.budget.value;
      const username = localStorage.getItem("username");
      return axios.post('apii/', { username: username,
            budget:budget})
              .catch(err => console.log(err))
      }

      render() {
    return (
      
        <>
           
           <text style= {{fontSize:70, color:'IndianRed', textAlign:"center"}}>
           $ {10000-(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}
        
          </text>
          {/* <Spacer amount={5} />
        <Popup trigger={<button className="Btn">Add Budget</button>} modal closeOnDocumentClick>
        <div>
            <h3 className='text-3'> Add Budget</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-control">
              <label htmlFor="amount"> Budget 
                </label>
              <input name= "amount" type="number"
              placeholder="Enter amount..." />
            </div>
            <button className="btn">Add Budget</button>
          </form>
        </div>
        </Popup> */}
        </>

    )
    }
  }

  export default AddBudget;
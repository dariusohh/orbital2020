import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class AddBudget extends React.Component {

      render() {
    return (
      
        <>
           
           <span style= {{fontSize:70, color:'IndianRed', textAlign:"center"}}>
           $ {this.props.budget -(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}
          </span>
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
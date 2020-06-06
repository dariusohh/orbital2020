import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class IncomeExpenses extends React.Component {

  render() {
  return (
        <div className="inc-exp-container">
        <div>
          <h4>Revenue</h4>
    <p className="money plus">{this.props.data
      .map(transaction => transaction.amount).map(num => parseFloat(num))
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)}
      </p>
        </div>
        <div>
          <h4>Nett Profit</h4>
          <p className="money total">{this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}</p>
        </div>
        

      </div>
    )
  }
}

export default IncomeExpenses;

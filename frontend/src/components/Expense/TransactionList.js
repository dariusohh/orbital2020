import React from 'react'
import {Transaction} from './Transaction';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class TransactionList extends React.Component {

    render() {
    return (
        <>
        <h3>Previous Transactions</h3>
        <ul className="list">
          {this.props.data.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </>
    )
  }
}

export default TransactionList
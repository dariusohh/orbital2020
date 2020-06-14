import React from 'react'
import {Expense} from '../Expense/Expense';
import {Revenue} from '../Expense/Revenue';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Trans extends React.Component {



    render() {
    return (
        <>
        <ul className="list" style={{width:"100%"}}>
          {this.props.data.slice(0,3).map(transaction => (
          transaction.amount > 0 ? 
          <Revenue key={transaction.id} transaction={transaction} />
          :
          <Expense key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </>
    )
  }
}

export default Trans
import React from 'react'
import {Expense} from '../Expense/Expense';
import {Revenue} from '../Expnese/Revenue';
import {Link } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Trans extends React.Component {



    render() {
    return (
        <>
    
        <ul className="list">
          {this.props.data.slice(-4, -1).map(transaction => (
          <Expense key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </>
    )
  }
}

export default Trans
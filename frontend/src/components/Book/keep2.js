import React from 'react'
import {Transaction} from './keep';
import {Transaction2} from './keep3'
import axios from 'axios';
import {Container, Row,Col}from 'react-grid-system';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class TransactionList extends React.Component {

    render() {
    return (

        <>
    <h1 className='text-1'> Book-Keeping</h1>

        <container>
        <Row>
    <Col>
    <h3 className='text-3'>Revenue</h3>
    <p className="money pluss">{this.props.data
      .map(transaction => transaction.amount).map(num => parseFloat(num))
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)}
      </p>
    </Col>
  
   

    <Col>
    <h3 className='text-3'>Expense</h3>
    <p className="money minus">{(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}</p>
    </Col>
  </Row>
        </container>
       
        <div/>
        <container>
        <Row>
    <Col>

        <ul className="list">
          {this.props.data.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </Col>

    <Col>
 
        <ul className="list">
          {this.props.data.map(transaction => (
          <Transaction2 key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </Col>
  </Row>
        </container>
        
    </>
    )
  }
}

export default TransactionList
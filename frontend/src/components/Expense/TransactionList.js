import React from 'react'
import axios from 'axios';
import {Expense} from './Expense';
import {Revenue} from './Revenue';
import AddButton from './AddButton';
import { Row,Col}from 'react-grid-system';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class TransactionList extends React.Component {

    render() {
    return (
      <>
      <div className="box">
        <Row>
          <Col>
                <h3>REVENUE</h3>
                </Col>
                <Col>
             <h3>EXPENSE</h3>
             </Col>
             </Row>

      </div>
    
        <div className = "trans-container">
                <ul className="list">
                
                  {this.props.data.map(transaction => (
                  <Revenue key={transaction.id} transaction={transaction} />
                  ))}
                  <br/>
                  <AddButton type="Revenue"/>
                </ul>
             
          <div className = "divider"></div>
           
                <ul className="list">
                
                {this.props.data.map(transaction => (
                  <Expense key={transaction.id} transaction={transaction} />
                  ))}
                  <br/>
                  <AddButton type="Expense"/>
                
                </ul>
        </div>
</>
    )
  }
}

export default TransactionList

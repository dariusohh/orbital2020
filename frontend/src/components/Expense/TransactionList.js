import React from 'react'
import axios from 'axios';
import {Expense} from './Expense';
import {Revenue} from './Revenue';
import AddButton from './AddButton';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class TransactionList extends React.Component {

    render() {
    return (
        <div className = "trans-container">
        <Row>
            <Col>
                <ul className="list">
                  <h3>Revenue</h3>
                  {this.props.data.map(transaction => (
                  <Revenue key={transaction.id} transaction={transaction} />
                  ))}
                  <AddButton type="Revenue"/>
                </ul>
             </Col>
          <div className = "divider"></div>
            <Col>
                <ul className="list">
                <h3>Expense</h3>
                {this.props.data.map(transaction => (
                  <Expense key={transaction.id} transaction={transaction} />
                  ))}
                  <AddButton type="Expense"/>
                </ul>
            </Col>
           </Row>
        </div>

    )
  }
}

export default TransactionList

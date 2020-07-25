import React from 'react';
import axios from 'axios';
import { Row,Col}from 'react-grid-system';
import './import.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class IncomeExpenses extends React.Component {

  render() {
  return (
    <>
    <div className ="box-3">
    <Row> 
      <Col>
      <div>
      <br/>
          <br/>
      <h4 style={{ textAlign:'center' , color :'DimGrey'}}>Revenue</h4>
        
    <p className="money plus"> $ {this.props.data
      .map(transaction => transaction.amount).map(num => parseFloat(num))
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)}
      </p>
        </div>
      </Col>
      <Col>
      <div>
      <br/>
          <br/>
          <br/>
       <h4 style={{ textAlign:'center',color :'DimGrey' }}>Expense</h4>
         
          <p className="money minus"> $ {(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}</p>
        </div>
      </Col>
      <Col>
      <div >
      <br/>
          <br/>
          <br/>
   
          <h4 style={{ textAlign:'center' ,color :'DimGrey'}}>Nett Profit</h4>
          <p className="money total">
            $ {this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)}
          </p>
       
        </div>
      </Col>

    </Row>
    </div>

  
      </>
    )
  }
}

export default IncomeExpenses;

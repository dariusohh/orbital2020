import React from 'react';
import axios from 'axios';
import './visual.css';

axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';


class Target extends React.Component {

    
  render() {
  return (
   <>
     {((this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0) / this.props.target * 100).toFixed(2))} 
    </>
  )
  }
}


export default Target;


import React from 'react';
import axios from 'axios';
import './visual.css';

axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';


class Revenue extends React.Component {
 
  render() {
  return (

        
  <>
             ${this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)*1}
    </>

    )
  }
}


export default  Revenue;

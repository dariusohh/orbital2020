import React from 'react';
import axios from 'axios';
import './visual.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Revenue extends React.Component {
 
  render() {
  return (

        
    <span style= {{fontSize:70, color:'RoyalBlue', textAlign:"center"}}>
              $ {this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)*1}
    </span>

    )
  }
}


export default  Revenue;

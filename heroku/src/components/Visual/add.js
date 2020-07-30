import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

export class AddBudget extends React.Component {

      render() {
    return (
      
        <>
           
           <>
           ${this.props.budget -(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
          .toFixed(2)}
          </>
   
        </>

    )
    }
  }

  export default AddBudget;

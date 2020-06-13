import React from 'react';
import axios from 'axios';
import './visual.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// const data = {
//     labels: [
//         'Red',
//         'Green',
//     ],
//     datasets: [{
//         data: [300, 50, 100],
//         backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56'
//         ],
//         hoverBackgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56'
//         ]
//     }]
// };

class Target extends React.Component {
    // data = {
    //     labels: [
    //         'Red',
    //         'Green',
    //     ],
    //     datasets: [{
    //         data: [50, 100],
    //         backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
       
    //         ],
    //         hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         ]
    //     }]
    // };
    
  render() {
  return (
    <span style= {{fontSize:70, color:'DarkSlateGray', textAlign:"center"}}>
     {((this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0) / this.props.target * 100).toFixed(2))} %
      </span>
  )
  }
}


export default Target;
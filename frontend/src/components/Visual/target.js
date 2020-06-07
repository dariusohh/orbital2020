import React from 'react';
import axios from 'axios';
import{StockOutlined } from  '@ant-design/icons';
import './visual.css';
import Spacer from 'react-add-space';
import Text from 'react-text';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const data = {
    labels: [
        'Red',
        'Green',
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};

class Target extends React.Component {
    data = {
        labels: [
            'Red',
            'Green',
        ],
        datasets: [{
            data: [, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
       
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            ]
        }]
    };
    
  render() {
  return (


    <text style= {{fontSize:70, color:'DarkSlateGray', textAlign:"center"}}>
     {(this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)/10000)* 100} %
      </text>



    )
  }
}


export default Target;
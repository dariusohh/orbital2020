import React from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";
import {Line} from 'react-chartjs-2';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Prediction extends React.Component {

render() {



const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


    return (
        <>
    
    <h5>
FORECASTED REVENUE
  </h5>
  <br/>
      
  <div className="line"></div>
        <Line data={data} />
      
  
  
      </>
    )
}

}


export default Prediction;

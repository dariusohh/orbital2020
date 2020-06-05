import {Bar} from 'react-chartjs-2';
import React from 'react';
import {Link } from "react-router-dom"; 

export const BarGraph = (props) => {
    const data = {
        labels: ['Development', 'Marketing', 'Project', 'Raw material'],
        datasets: [
          {
            label: 'Expense Breakdown',
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
            data: [650, 590, 800, 81]
          }
        ]
      };
    return (
        <div>
             <h2 className='text2'> Expense Breakdown</h2>
             <Bar data={data}/>
             <Link to="/Login">
            <button className="Btn">
              More
            </button>
            </Link>
        </div>
      
    )
}


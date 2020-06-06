import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {Link } from "react-router-dom"; 
export const BarGraph2 = (props) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue Breakdown',
            backgroundColor: 'rgba(71, 181, 209, 0.84)',
            borderColor: 'rgba(71, 181, 209, 0.84)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
return (
  <div>
    <h2 className='text2'> Revenue Breakdown</h2>
    <HorizontalBar data={data}/>
    <Link to="/Login">
            <button className="Btn">
              More
            </button>
            </Link>
  </div>
   
)
}

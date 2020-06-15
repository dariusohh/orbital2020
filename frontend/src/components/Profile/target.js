import React from 'react';
import axios from 'axios';
import {Doughnut} from 'react-chartjs-2';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


export class Target extends React.Component {
  
   
    
    
  render() {
    const z =((this.props.data.expense
        .map(transaction => transaction.amount)
        .map(num => parseFloat(num))
        .reduce((acc, item) => (acc += item), 0).toFixed(2))/ 
        this.props.data.profile.target * 100).toFixed(2)
    const ylabels = [z, 100-z ]


    const data = {
        labels: ["Target hit","Target left"],
        datasets: [{
            data: ylabels,
            backgroundColor: [
                '#52d9bc',
                '#5aaadb',
            ],
            hoverBackgroundColor: [
                '#52d9bc',
                '#5aaadb',
                
         
            ]
        }]
    };
  return (
    <>
   
<Doughnut data={data} />
{/* <RadarChartOutlined style={{ fontSize: '90px',color: '#08c' }}/> */}
  <text style= {{fontSize:30, color:'DarkSlateGray', textAlign:"center"}}>
  Target Progress: {((this.props.data.expense
       .map(transaction => transaction.amount)
       .map(num => parseFloat(num))
       .reduce((acc, item) => (acc += item), 0).toFixed(2))/ 
       this.props.data.profile.target * 100).toFixed(2)} %
   </text>
</>

    )
  }
}



  export default Target;
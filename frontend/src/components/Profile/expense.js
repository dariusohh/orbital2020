import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


export class Expense extends React.Component {

   
    
    
  render() {
    const total =(this.props.data
        .map(transaction => transaction.amount).map(num => parseFloat(num))
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2))

        const long =(this.props.data
            .map(transaction => transaction.amount)
            .map(num => parseFloat(num)).filter(item => item > 0)
            .filter(x => x.name in ["Payroll","Rent","Taxes","Utilities"])
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2))
        
        
        
    const ylabels = [long, total-long]
    const data = {
        labels: ["Long-term","Short-Term"],
        datasets: [
          {
            label: "",
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: ylabels
          }
        ]
      };
  return (
    <>
   <Bar data={data}></Bar>
   <text style= {{fontSize:30, color:'DarkSlateGray', textAlign:"center"}}>
    Total Expense : SGD ${(this.props.data
        .map(transaction => transaction.amount).map(num => parseFloat(num))
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2))}
   </text>
</>

    )
  }
}


  

  export default Expense;
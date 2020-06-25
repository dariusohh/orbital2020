import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


export class Expense extends React.Component {

   
    
    
  render() {

    const yearFilter = objdate => {
      const prevyear = new Date(new Date().setFullYear(new Date().getFullYear() - 1))
      const objyear = objdate.substring(0,4)
      const objmth = objdate.substring(5,7) - 1
      const objday = objdate.substring(8,10)
      const objhour = parseInt(objdate.substring(11,13)) + 8
      const objmin = objdate.substring(14,16)
      const objsec = objdate.substring(17,19)
      const olddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
      return olddate.getTime() > prevyear.getTime()
    }

    const total =(this.props.data.filter(x => yearFilter(x.created_at))
        .map(transaction => transaction.amount).map(num => parseFloat(num))
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2))

        const long =(this.props.data.filter(x => yearFilter(x.created_at))
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
            backgroundColor: 'rgba(210, 82, 127, 1)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: ylabels
          }
        ]
      };

      var options = {
        legend:{display:false},
        scales:{
        xAxes:[{gridLines:{display:false}}],
        yAxes:[{gridLines:{display:true},ticks:{beginAtZero:true}}]
        }
      }

  return (
    <>
   <Bar data={data} options={options}></Bar>
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
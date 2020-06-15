import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class  Graph2 extends React.Component {
 
render() {

  const month_profit = {}
  const month_revenue = {}
  const month_expense = {}
  for (var j = 11; j >= 0; j--) {
    var mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() - j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_profit[mthyear] = 0
    month_revenue[mthyear] = 0
    month_expense[mthyear] = 0
  }

  this.props.data.forEach(x => {
    const objyear = x.created_at.substring(0,4)
    const objmth = x.created_at.substring(5,7) - 1
    const objday = x.created_at.substring(8,10)
    const objhour = parseInt(x.created_at.substring(11,13)) + 8
    const objmin = x.created_at.substring(14,16)
    const objsec = x.created_at.substring(17,19)
    const createddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
    const created = createddate.toLocaleDateString().slice(3,6) + createddate.toLocaleDateString().slice(8,10)
    month_profit[created] += parseFloat(x.amount)
    if (x.amount > 0) {
      month_revenue[created] += parseFloat(x.amount)
    } else {
      month_expense[created] -= parseFloat(x.amount)
    }
  })

  const mth_xlabels = Object.keys(month_profit)
  var mthprofit_label = []
  var mthrevenue_label = []
  var mthexpense_label = []
  for (let x of mth_xlabels) {
    mthprofit_label.push(month_profit[x])
    mthrevenue_label.push(month_revenue[x])
    mthexpense_label.push(month_expense[x])
  }

  const data = {
    labels: mth_xlabels,
    datasets: [
      {
        label: 'Profit',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(34, 167, 240, 1)',
        borderColor: 'rgba(34, 167, 240, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(34, 167, 240, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(34, 167, 240, 1)',
        pointHoverBorderColor: 'rgba(34, 167, 240, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: mthprofit_label
      },
      {
        label: 'Revenue',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(41, 241, 195, 1)',
        borderColor: 'rgba(41, 241, 195, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(41, 241, 195, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(41, 241, 195, 1)',
        pointHoverBorderColor: 'rgba(41, 241, 195, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: mthrevenue_label
      },
      {
        label: 'Expense',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(246, 36, 89, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(246, 36, 89, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(246, 36, 89, 1)',
        pointHoverBorderColor: 'rgba(246, 36, 89, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: mthexpense_label
      }


    ]
  };

  var options = {
    scales:{
    xAxes:[{gridLines:{display:false}}],
    yAxes:[{gridLines:{display:true}}]
    }
  }
    
    return (
    
       <>
        <Line data={data} options={options}/>
        <text style= {{fontSize:30, color:'DarkSlateGray', textAlign:"center"}}>
    Current Profit: SGD ${this.props.data
          .map(transaction => transaction.amount)
          .map(num => parseFloat(num))
          .reduce((acc, item) => (acc += item), 0).toFixed(2)}
   </text>
     </>
    
    )
}

}


export default Graph2;

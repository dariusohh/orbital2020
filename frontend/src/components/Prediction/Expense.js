
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class ExpenseGraph extends React.Component {
        

render() {
    

  const month_expense = {}
  for (var j = 5; j >= 0; j--) {
    var mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() - j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_expense[mthyear] = 0
  }

  for (var k = 1; k < 6; k++) {
    mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() + k)
    mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_expense[mthyear] = 0
  }

  var month_predictions = {};
  Object.assign(month_predictions,month_expense);
  this.props.prediction.forEach(x => {
    const objyear = x.date.substring(2,4)
    const objmth = x.date.substring(5,7)
    month_predictions[objmth + "/" + objyear] = -x.value
  })

  this.props.data.forEach(x => {
    const objyear = x.created_at.substring(0,4)
    const objmth = x.created_at.substring(5,7) - 1
    const objday = x.created_at.substring(8,10)
    const objhour = parseInt(x.created_at.substring(11,13)) + 8
    const objmin = x.created_at.substring(14,16)
    const objsec = x.created_at.substring(17,19)
    const createddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
    const created = createddate.toLocaleDateString().slice(3,6) + createddate.toLocaleDateString().slice(8,10)
      if (parseFloat(x.amount) < 0)
      month_expense[created] -= parseFloat(x.amount)
  })

  const mth_xlabels = Object.keys(month_expense)
  var mthexpense_label = []
  var pred_label = []
  for (let x of mth_xlabels) {
    mthexpense_label.push(month_expense[x])
    pred_label.push(month_predictions[x])
  }

  const data = {
    labels: mth_xlabels,
    datasets: [

      {
        label: 'Actual',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,191,255)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(0,191,255)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0,191,255)',
        pointHoverBorderColor: 'rgb(0,191,255)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: mthexpense_label
      },

      {
        label: 'Predicted',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(139,0,139)',
        borderColor: 'rgb(139,0,139)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(139,0,139)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(139,0,139)',
        pointHoverBorderColor: 'rgb(139,0,139)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: pred_label
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
    <Line data={data} options = {options}/>
)

}

}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(ExpenseGraph);
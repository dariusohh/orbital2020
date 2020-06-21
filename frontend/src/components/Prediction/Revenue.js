import React from 'react';
import {Line} from 'react-chartjs-2';
import {Link } from "react-router-dom"; 
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class RevenueGraph extends React.Component {


render() {

  const month_revenue = {}
  for (var j = 5; j >= 0; j--) {
    var mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() - j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_revenue[mthyear] = 0
  }

  for (var j = 1; j < 6; j++) {
    var mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() + j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_revenue[mthyear] = 0
  }

  var month_predictions = {};
  Object.assign(month_predictions,month_revenue);
  this.props.prediction.forEach(x => {
    const objyear = x.date.substring(2,4)
    const objmth = x.date.substring(5,7)
    month_predictions[objmth + "/" + objyear] = x.value
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
      month_revenue[created] += parseFloat(x.amount)
  })

  const mth_xlabels = Object.keys(month_revenue)
  var mthrevenue_label = []
  var pred_label = []
  for (let x of mth_xlabels) {
    mthrevenue_label.push(month_revenue[x])
    pred_label.push(month_predictions[x])
  }

    const data = {
        labels: mth_xlabels,
        datasets: [

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
            label: 'Revenue Prediction',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(41, 241, 195, 1)',
            borderColor: 'rgb(139,0,139)',
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

export default connect(mapStateToProps)(RevenueGraph);

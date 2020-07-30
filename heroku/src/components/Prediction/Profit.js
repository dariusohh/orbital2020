import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Chart from "react-apexcharts";
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

export class ProfitGraph extends React.Component {
        

render() {
    

  const month_profit = {}
  for (var j = 5; j >= 0; j--) {
    var mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() - j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_profit[mthyear] = 0
  }

  for (var k = 1; k < 6; k++) {
    mthyeardate = new Date(new Date().getFullYear(),new Date().getMonth() + k)
    mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_profit[mthyear] = 0
  }

  var month_predictions = {};
  Object.assign(month_predictions,month_profit);
  this.props.prediction.revenue_pred.forEach(x => {
    const objyear = x.date.substring(2,4)
    const objmth = x.date.substring(5,7)
    month_predictions[objmth + "/" + objyear] = x.value
  })

  this.props.prediction.expense_pred.forEach(x => {
    const objyear = x.date.substring(2,4)
    const objmth = x.date.substring(5,7)
    month_predictions[objmth + "/" + objyear] += x.value
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
    month_profit[created] += parseFloat(x.amount)
  })

  const mth_xlabels = Object.keys(month_profit)
  var mthprofit_label = []
  var pred_label = []
  for (let x of mth_xlabels) {
    mthprofit_label.push(month_profit[x].toFixed(2))
    pred_label.push(month_predictions[x].toFixed(2))
  }

const series = [{
    name: 'Actual',
    type: 'column',
    data: mthprofit_label
  }, {
    name: 'Predict',
    type: 'line',
    data: pred_label
  }]

const options = {
    colors:["rgb(0,191,255)","rgb(139,0,139)"],
    chart: {
      width: '100%'
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: mth_xlabels,
    xaxis: {
      type: 'category'
    }
}

    return (
        <>
    
        <div id="chart">
        <Chart options={options} series={series} type="line" height={350} />
      </div>
      </>
    )
}

}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(ProfitGraph);
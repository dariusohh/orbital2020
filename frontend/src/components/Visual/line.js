import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Graph extends React.Component {
  state = {
    expense: [],
    option: "day"
}


componentDidMount() {
    setTimeout(() => 
      axios.get('api/')
      .then(res => {
          const new_res = res.data.filter(x => x.username === localStorage.getItem("username"));
          this.setState({
              expense: new_res
          });
      }), 200);
  }



render() {

  const profit = {}
  const revenue = {}
  const expense = {}

  const daydiff = (this.props.endDate.getTime() - this.props.startDate.getTime()) / (1000*60*60*24)
  for (var i = 0; i <= daydiff; i++) {
    var date = new Date(this.props.startDate.getTime() + (i*1000*60*60*24));
    profit[date.toLocaleDateString().slice(0,5)] = 0
    revenue[date.toLocaleDateString().slice(0,5)] = 0
    expense[date.toLocaleDateString().slice(0,5)] = 0
  }
  this.props.data.forEach(x => {
    const objyear = x.created_at.substring(0,4)
    const objmth = x.created_at.substring(5,7) - 1
    const objday = x.created_at.substring(8,10)
    const objhour = parseInt(x.created_at.substring(11,13)) + 8
    const objmin = x.created_at.substring(14,16)
    const objsec = x.created_at.substring(17,19)
    const created = new Date(objyear,objmth,objday, objhour, objmin, objsec).toLocaleDateString().slice(0,5)
    profit[created] += parseFloat(x.amount)
    if (x.amount > 0) {
      revenue[created] += parseFloat(x.amount)
    } else {
      expense[created] -= parseFloat(x.amount)
    }
  })

  const xlabels = Object.keys(profit)
  var profit_label = []
  var revenue_label = []
  var expense_label = []
  for (let x of xlabels) {
    profit_label.push(profit[x])
    revenue_label.push(revenue[x])
    expense_label.push(expense[x])
  }

  const month_profit = {}
  const month_revenue = {}
  const month_expense = {}
  for (var j = 11; j >= 0; j--) {
    var mthyeardate = new Date(this.props.endDate.getFullYear(),this.props.endDate.getMonth() - j)
    var mthyear = mthyeardate.toLocaleDateString().slice(3,6) + mthyeardate.toLocaleDateString().slice(8,10)
    month_profit[mthyear] = 0
    month_revenue[mthyear] = 0
    month_expense[mthyear] = 0
  }

  this.state.expense.forEach(x => {
    const objyear = x.created_at.substring(0,4)
    const objmth = x.created_at.substring(5,7) - 1
    const objday = x.created_at.substring(8,10)
    const objhour = parseInt(x.created_at.substring(11,13)) + 8
    const objmin = x.created_at.substring(14,16)
    const objsec = x.created_at.substring(17,19)
    const createddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
    const created = createddate.toLocaleDateString().slice(3,6) + createddate.toLocaleDateString().slice(8,10)
    if (created in month_profit) {
      month_profit[created] += parseFloat(x.amount)
      if (x.amount > 0) {
        month_revenue[created] += parseFloat(x.amount)
      } else {
        month_expense[created] -= parseFloat(x.amount)
      }
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
        labels: this.state.option === "day" ? xlabels : mth_xlabels,
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
            data: this.state.option === "day" ? profit_label : mthprofit_label
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
            data: this.state.option === "day" ? revenue_label : mthrevenue_label
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
            data: this.state.option === "day" ? expense_label : mthexpense_label
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
        <div>
          {
            this.state.option === "day" ?
            <h2 className='text2'>Daily Progress</h2>
            :
            <h2 className='text2'>Monthly Progress</h2>
          }
        <Line data={data} options = {options}/>
            { this.state.option === "day" ? 
            <button className = "toggle-btn" onClick={(e) => this.setState({option:"month"})}>Change to Month</button>
            :
            <button className = "toggle-btn" onClick={(e) => this.setState({option:"day"})}>Change to Day</button>
            }
      </div>
    )
}

}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Graph);

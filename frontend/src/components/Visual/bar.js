import {Bar} from 'react-chartjs-2';
import React from 'react';
import {Link } from "react-router-dom"; 
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class BarGraph extends React.Component  {
    
  state = {
    expense: []
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
  var grouping = {};
  this.props.data.filter(item => item.amount < 0).forEach(x => {
    if (x.name in grouping) {
      grouping[x.name] += -parseFloat(x.amount)
    } else {
      grouping[x.name] = -parseFloat(x.amount)
    }
  })
  const xlabels = Object.keys(grouping).sort()
  var ylabels = []
  for (let x of xlabels) {
    ylabels.push(grouping[x])
  }
    
    const data = {
          labels: xlabels,
        datasets: [
          {
          
            label: 'Expense',
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
            data: ylabels
          }
        ]
      };

      var options = {
        legend:{display:false},
        scales:{
        xAxes:[{gridLines:{display:false}}],
        yAxes:[{gridLines:{display:true}}]
        }
      }

    return (
        <div>
             <h2 className='text2'> Expense Breakdown</h2>
             <Bar 
             data={data} options = {options}/>
             <Link to="/Login">
            <button className="Btn">
              More
            </button>
            </Link>
        </div>
      
    )
}
}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(BarGraph);



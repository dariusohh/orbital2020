import React from 'react';
import {Line} from 'react-chartjs-2';
import {Link } from "react-router-dom"; 
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class  Graph extends React.Component {
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

  const grouping = {}
  const daydiff = (this.props.endDate.getTime() - this.props.startDate.getTime()) / (1000*60*60*24)
  for (var i = 0; i <= daydiff; i++) {
    var date = new Date(this.props.startDate.getTime() + (i*1000*60*60*24));
    grouping[date.toLocaleDateString().slice(0,5)] = 0
  }
  this.props.data.forEach(x => {
    const objyear = x.created_at.substring(0,4)
    const objmth = x.created_at.substring(5,7) - 1
    const objday = x.created_at.substring(8,10)
    const objhour = parseInt(x.created_at.substring(11,13)) + 8
    const objmin = x.created_at.substring(14,16)
    const objsec = x.created_at.substring(17,19)
    const created = new Date(objyear,objmth,objday, objhour, objmin, objsec).toLocaleDateString().slice(0,5)
    grouping[created] += parseFloat(x.amount)
  })

  const xlabels = Object.keys(grouping)
  var ylabels = []
  for (let x of xlabels) {
    ylabels.push(grouping[x])
  }



    const data = {
        labels: xlabels,
        datasets: [
          {
            label: 'Profit Progress',
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
      
    
    return (
        <div>
        <h2 className='text2'>Profit Progress</h2>
        <Line data={data} />
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

export default connect(mapStateToProps)(Graph);



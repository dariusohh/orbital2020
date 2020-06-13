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

  const xlabels = []
  this.props.data.map(x => x.created_at).forEach(z => xlabels.push(z.slice(5,10)))
  const ylabels = []
  this.props.data
  .map(item => item.amount).map((acc, item) => (acc += item)).forEach(y => ylabels.push(y))

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



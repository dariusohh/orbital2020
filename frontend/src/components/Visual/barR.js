import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {Link } from "react-router-dom"; 
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class BarGraph2 extends React.Component  { 

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

  render () {
  
  
  const xlabels = []
    const y = this.props.data
    .filter(item => item.amount > 0).map(x => xlabels.push(x.name))
    const ylabels = []
    const z = this.props.data
    .map(transaction => transaction.amount)
    .map(num => parseFloat(num))
    .filter(item => item > 0).map(y => ylabels.push(y))
    const data = {
        labels: xlabels,
        datasets: [
          {
            label: 'Revenue Breakdown',
            backgroundColor: 'rgba(71, 181, 209, 0.84)',
            borderColor: 'rgba(71, 181, 209, 0.84)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: ylabels
          }
        ]
      };
return (
  <div>
    <h2 className='text2'> Revenue Breakdown</h2>
    <HorizontalBar data={data}/>
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

export default connect(mapStateToProps)(BarGraph2);



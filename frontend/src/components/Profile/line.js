import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class  Graph2 extends React.Component {
 
render() {

  const xlabels = []
  const y = this.props.data.map(x => x.created_at).map(z => xlabels.push(z.slice(5,10)))
  const ylabels = []
  const i = 0
  const z = this.props.data.map(transaction => transaction.amount).map(num => parseFloat(num)).reduce((acc, item) => ylabels.push((acc += item)), 0)

    const data = {
        labels: xlabels,
        datasets: [
          {
            label: 'Profit Progress',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor:'DarkMagenta',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'DarkMagenta',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'DarkMagenta',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ylabels
          }
        ]
      };
      
    
    return (
    
       <>
        <Line data={data} />
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

import React from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";
import {Line} from 'react-chartjs-2';
import Dialog from '@material-ui/core/Dialog';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Prediction extends React.Component {

  state= {
    popup:true
  }
  handleClose() {
    this.setState({popup:false})
  }
render() {



const data = {
  labels: ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", 
  "2020-07","2020-08","2020-09","2020-10","2020-11","2020-12"],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [400,800,1300,2400,3400,6000,8000,11000,8000,10000,13000,15000]
    }
  ]
};


    return (
        <>
     <Dialog open={this.state.popup} maxWidth='lg'>
       <br/> 
                    <h4 style={{paddingLeft:'1%',paddingRight:'1%', textAlign:'center',color:"DarkSlateGrey"}}> As the heroku hosting service is very slow and times out after 30 seconds, 
                    we are unable to show the actual predictions of our machine learning model. To 
                    find out more about the model and try it yourself, we have included a link to 
                    the Jupyter Notebook in our ReadMe. The predicted data shown here is artificial. </h4> 
                    <br/>
                <button onClick={() => this.handleClose()} style={{padding:"10px 5px"}}>Close</button>
                </Dialog>
    <h5>
FORECASTED REVENUE
  </h5>
  <br/>
      
  <div className="line"></div>
        <Line data={data} />
      
  
  
      </>
    )
}

}


export default Prediction;

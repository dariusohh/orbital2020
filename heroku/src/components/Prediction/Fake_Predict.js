import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {RevenueGraph} from './Revenue.js'
import {ExpenseGraph} from './Expense.js'
import {ProfitGraph} from './Profit.js'
import CircleLoader from "react-spinners/ClipLoader"
import Dialog from '@material-ui/core/Dialog';

axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

class Predict extends React.Component {

    state = {
        expense: [],
        prediction:{revenue_pred:[
            {date:"2020-01",value:400},
            {date:"2020-02",value:800},
            {date:"2020-03",value:1300},
            {date:"2020-04",value:2400},
            {date:"2020-05",value:3400},
            {date:"2020-06",value:6000},
            {date:"2020-07",value:8000},
            {date:"2020-08",value:11000},
            {date:"2020-09",value:8000},
            {date:"2020-10",value:10000},
            {date:"2020-11",value:13000},
            {date:"2020-12",value:15000},
            {date:"2021-01",value:16000},
            {date:"2021-02",value:18000},
            {date:"2021-03",value:20000},
            {date:"2021-04",value:24000},
        
        ],

        expense_pred:[
            {date:"2020-01",value:-100},
            {date:"2020-02",value:-300},
            {date:"2020-03",value:-600},
            {date:"2020-04",value:-1000},
            {date:"2020-05",value:-1500},
            {date:"2020-06",value:-2000},
            {date:"2020-07",value:-3000},
            {date:"2020-08",value:-5000},
            {date:"2020-09",value:-3000},
            {date:"2020-10",value:-5000},
            {date:"2020-11",value:-6000},
            {date:"2020-12",value:-7000},
            {date:"2021-01",value:-7500},
            {date:"2021-02",value:-9000},
            {date:"2021-03",value:-11000},
            {date:"2021-04",value:-12000},
        ]
    },
    popup:true
    }

    componentDidMount() {
        setTimeout(() => 
          axios.get('api/')
          .then(res => {
              var new_res = res.data.filter(x => x.username === localStorage.getItem("username"))
              this.setState({
                  expense: new_res
              });}))
      }

      handleClose() {
        this.setState({popup:false})
      }

      render() {
        return ( 
            <div>
                        <Dialog open={this.state.popup} maxWidth='lg'>
       <br/> 
                    <h4 style={{paddingLeft:'1%',paddingRight:'1%', textAlign:'center',color:"DarkSlateGrey"}}> As the heroku hosting service is very slow and times out after 30 seconds, 
                    we are unable to show the actual predictions of our machine learning model. To 
                    find out more about the model and try it yourself, we have included a link to 
                    the Jupyter Notebook in our ReadMe. The predicted data shown here is artificial. </h4> 
                    <br/>
                <button onClick={() => this.handleClose()} style={{padding:"10px 5px"}}>Close</button>
                </Dialog>
                <h3>PREDICTION ANALYSIS</h3>
            
            { this.state.prediction.length === 0 ?
                <div>
                <h1 style={{textAlign:"center",marginTop:"15%"}}>Loading</h1>
                <CircleLoader css={{marginLeft:"49%"}}/>
                </div>
            : 
                <div>   
                <div style={{backgroundColor:"white", marginBottom:"3%", marginTop:"3%"}}>
                    <h2 className='text2'>Profit Prediction</h2>
                    <ProfitGraph data = {this.state.expense} prediction = {this.state.prediction}/>
                </div>
                <div style={{width:"47.5%",marginRight:"2.5%",backgroundColor:"white",float:"left"}}>
                    <h2 className='text2'>Revenue Prediction</h2>
                <RevenueGraph data={this.state.expense} prediction = {this.state.prediction.revenue_pred}/>
                </div>
                <div style={{width:"47.5%",marginLeft:"2.5%",backgroundColor:"white",float:"left",marginBottom:"5%"}}>
                    <h2 className='text2'>Expense Prediction</h2>
                <ExpenseGraph data={this.state.expense} prediction = {this.state.prediction.expense_pred}/>
                </div>
                </div>
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
  
  export default connect(mapStateToProps)(Predict);

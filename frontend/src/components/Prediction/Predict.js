import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {RevenueGraph} from './Revenue.js'
import {ExpenseGraph} from './Expense.js'
import {ProfitGraph} from './Profit.js'
import CircleLoader from "react-spinners/ClipLoader"

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Predict extends React.Component {

    state = {
        expense: [],
        prediction:[],
    }

    componentDidMount() {
        setTimeout(() => 
          axios.get('api/')
          .then(res => {
              var new_res = res.data.filter(x => x.username === localStorage.getItem("username"))
              this.setState({
                  expense: new_res
              });
              axios.post('predict/',new_res).then(res => {
                  this.setState({prediction:res.data})
              })
          }), 200);
      }

      render() {
        return ( 
            <div>
                <h1 className='text'>Prediction Analysis</h1>
                <h2 className='line'> </h2>
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

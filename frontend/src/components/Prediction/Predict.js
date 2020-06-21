import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {RevenueGraph} from './Revenue.js'

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
            { this.state.prediction.length === 0 ? 
                <h1 style={{textAlign:"center"}}>Loading</h1>
            : 
                <RevenueGraph data={this.state.expense} prediction = {this.state.prediction.revenue_pred}/>
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
import React from 'react';
import { Row,Col}from 'react-grid-system';
import axios from 'axios';
import './profile.css';
import Target from './target';
import Expense from './expense';
import Graph2 from "./line";
import Prediction from './predict.js'
import CircleLoader from "react-spinners/ClipLoader"
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class  Graph extends React.Component {

  state = {
    predict:[]
}

componentDidMount() {
    setTimeout(() => 
        axios.post('predict/',this.props.data.expense).then(res => {
              this.setState({predict:res.data})
          })
      , 200);
  }

render() {
    return (
      <div>
                <Target data={this.props.data}/>
 
      </div>
    )
}

}


export default Graph;



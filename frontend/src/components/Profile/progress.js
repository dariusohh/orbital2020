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
        <Row>
          <Col> 
            <Row style = {{textAlign:"center", justifyContent:"center", display:"flex",flexWrap:"nowrap"}}>
              <Col className="wrap">
              <Row className ="header-5">
                <h1 className="test-5">Forecasted Company's Progress</h1>
            </Row>
                 <div className ='content'><Graph2 data={this.props.data.expense}/></div> 

              </Col >


              <Col className="wrap">
              <Row className ="header-5">
                <h1 className="test-5"> Expense Breakdown</h1>
            </Row>
            <Row>
                 <div className ='content'><Expense data={this.props.data.expense}/></div> 
                 </Row>
              </Col >


            </Row>
            <Row>
            <Col className="wrap">
              <Row className ="header-5">
                <h1 className="test-5"> Forecasted Revenue</h1>
            </Row>
            <Row>
                 <div className ='content'>
                  { this.state.predict.length !== 0 ?
                  <Prediction data={this.props.data.expense} prediction={this.state.predict}/>
                  : 
                  <div>
                  <h1 style={{marginTop:"16%",marginLeft:"10%"}}>Loading</h1>
                  <CircleLoader css={{marginLeft:"10%"}}/>
                  </div>
                  }
                   </div> 
                 </Row>
              </Col >

              <Col className="wrap">
              <Row className ="header-5">
                <h1 className="test-5"> Target Progress</h1>
            </Row>
            <Row>
                 <div className ='content'><Target data={this.props.data}/></div> 
                 </Row>
              </Col >
            </Row>
          </Col>
        </Row>
      </div>
    )
}

}


export default Graph;



import React from 'react';
import { Row,Col}from 'react-grid-system';
import axios from 'axios';
import './profile.css';
import Target from './target';
import Expense from './expense';
import Graph2 from "./line";
import Summary from "./summary";
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class  Graph extends React.Component {


render() {

  
    
    return (
      <div>
        <Row>
          
          <Col  xs= {8.5}> 
            <Row>
              <Col className="wrap">
              <Row className ="header-5">
                <h1 className="test-5">Forecasted Company's Progress</h1>
            </Row>
            <Row>
                 <div className ='content'><Graph2 data={this.props.data.expense}/></div> 
                 </Row>
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
                 <div className ='content'>Data</div> 
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
        <Col xs={0.2}></Col>
          <Col className="wrap"xs= {3}>
            <Row className ="header-5">
                <h1 className="test-5">Summary of Company's Performance</h1>
            </Row>
            <Row >
               <div className ='content' ><Summary data= {this.props.data}/></div> 
            </Row>
            
          </Col>
        </Row>
      </div>
    )
}

}


export default Graph;




import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import {BarGraph} from './bar';
import Trans from './trans';
import './visual.css'
import Spacer from 'react-add-space';
import {BarGraph2} from './barR';
import {Graph} from'./line';
import {Container, Row,Col}from 'react-grid-system';
import {Donut} from './consumer';
import{StockOutlined,DollarCircleOutlined,UpCircleFilled } from  '@ant-design/icons';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Visualisation extends React.Component {
  
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

  return (
   <>
   <h1 className='text'>Overall Analysis</h1>
   <Container className='space-2'>
   <h2 className='line'></h2>
   </Container>

   <div>
   <Row>
    <Col className='header1'><h2 className='text2'>Target Tracker</h2>
    <UpCircleFilled style={{ fontSize: '80px',color: '#08c' }}/>
    </Col>
    {/* <Spacer amount={5} />
    <Col className='header2'><h2 className='text2'>Sales Progress</h2>
    </Col> */}
    <Spacer amount={5} />
    <Col className='header3'><h2 className='text2'>Nett Revenue</h2>
    <StockOutlined style={{ fontSize: '100px',color: '#08c' }}/>

    
    </Col>
    
    <Spacer amount={5} />
    <Col className='header4'><h2 className='text2'>Budget Left</h2>
    <DollarCircleOutlined  style={{ fontSize: '90px',color: '#08c' }}/>
    </Col>

  </Row>
  </div>
 
<Container className='space-1'></Container>
  <div>
  <Row >
  <Col className='data' > <Graph/> </Col>
  <Spacer amount={2} />
    <Col className='data' ><BarGraph/></Col>
    <Spacer amount={2} />
    <Col className='data'><BarGraph2/></Col>
  </Row>
  </div>
  <Container className='space-1'></Container>
<div>
 <Row>
  <Col sm={7} className='wrapper-1'>
  <h2 className='line'> <span className='text2'>Recent Transactions</span></h2>
  <Trans data={this.state.expense}/>
  </Col>
  <Spacer amount={15} />
   <Col className='wrapper-1'>
   <h2 className='line'> <span className='text2'>Timeline</span></h2>
   
   </Col>
 </Row>
</div>

   </>

    )
  }
}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Visualisation);


import axios from 'axios';
import Revenue from './revenue';
import React from 'react';
import {BarGraph} from './bar';
import Target from './target';
import Trans from './trans';
import './visual.css'
import Spacer from 'react-add-space';
import {BarGraph2} from './barR';
import {Graph} from'./line';
import {Row,Col}from 'react-grid-system';
import {AddBudget} from './add';
import {Time} from './timeline';
import { connect } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'

import{StockOutlined,DollarCircleOutlined,UpCircleFilled } from  '@ant-design/icons';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Visualisation extends React.Component {
   
  state = {
    expense: [],
    budget: 0,
    revenue:0,
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(),
    filter:false
}

dateFilter = (objdate) => {
  const objyear = objdate.substring(0,4)
  const objmth = objdate.substring(5,7) - 1
  const objday = objdate.substring(8,10)
  const objhour = parseInt(objdate.substring(11,13)) + 8
  const objmin = objdate.substring(14,16)
  const objsec = objdate.substring(17,19)
  const olddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
  const currdate = new Date(this.state.endDate.getFullYear(),this.state.endDate.getMonth(),this.state.endDate.getDate(),23,59,59)
      return (olddate.getTime() <= currdate.getTime()) 
      && (this.state.startDate.getTime() <= olddate.getTime())
}

componentDidMount() {
    setTimeout(() => 
      axios.get('api/')
      .then(res => {
          const new_res = res.data.filter(x => x.username === localStorage.getItem("username")).filter(x => this.dateFilter(x.created_at));
          this.setState({
              expense: new_res
          });
      axios.get(`profile/${localStorage.getItem("username")}/`)
      .then(res => {
        const budget = res.data.budget
        const target = res.data.target
        this.setState({
          budget: budget,
          target: target
        })
      })
      }), 200);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.startDate.getTime() !== this.state.startDate.getTime()) || 
    (prevState.endDate.getTime() !== this.state.endDate.getTime())) {
      axios.get('api/')
      .then(res => {
          var new_res = res.data.filter(x => x.username === localStorage.getItem("username")).filter(x => this.dateFilter(x.created_at))
          this.setState({
              expense: new_res
          });
      })}
  }

  render() {

  return (
   <>
   <h1 className='text'>Overall Analysis</h1>

   <h2 className='line'> </h2>

   { this.state.filter ? 
        <button className= "filter-button" onClick={() => this.setState({filter:false})}>▼  Filter</button>
            :
        <button className= "filter-button" onClick={() => this.setState({filter:true})}>▶  Filter</button>
        }
  {this.state.filter && 
   <div>
        <label className="date-label">Date:</label>
      <DateRangePicker 
        value={[this.state.startDate,this.state.endDate]}
        onChange={arr => this.setState({startDate:arr[0],endDate:arr[1]})}
        disabledDate={date => date.getTime() - new Date().getTime() > 0}/>
        </div>
  }
        <div className = "space-2"></div>
   <div>
   <Row>
    <Col className='header1'><h2 className='text2'>Profit Target</h2>
    <UpCircleFilled style={{ fontSize: '80px',color: '#08c' }}/>
    <Spacer amount={10} />
    <Target data={this.state.expense} target= {this.state.target}/>
    </Col>
    <Spacer amount={10} />
    <Col className='header3'>
    <h2 className='text2'>Nett Profit (SGD)</h2>
    <StockOutlined style={{ fontSize: '90px',color: '#08c' }}/>
    <Spacer amount={10} />
    <Revenue data={this.state.expense}/>
  

    </Col>
    
    <Spacer amount={10} />
    <Col className='header4'><h2 className='text2'>Budget Left (SGD)</h2>
    <DollarCircleOutlined  style={{ fontSize: '90px',color: '#08c' }}/>
    <Spacer amount={8} />
    <AddBudget data={this.state.expense} budget ={this.state.budget}/>
    </Col>

  </Row>
 
  </div>
 
 <br/>
<div className='space-1'></div>
  <div>
  <Row style = {{textAlign:"center", justifyContent:"center", display:"flex",flexWrap:"nowrap"}}>
  <div style = {{width:"33%"}}>
  <Col className='data' > <Graph data={this.state.expense} 
                                  startDate = {this.state.startDate} 
                                  endDate = {this.state.endDate}
                                  /> </Col>
                                  </div>
  <Spacer amount={2} />
  <div style = {{width:"33%"}}>
    <Col className='data' ><BarGraph data={this.state.expense} /></Col>
    </div>
    <Spacer amount={2} />
    <div style = {{width:"33%"}}>
    <Col className='data'><BarGraph2 data={this.state.expense} /></Col>
    </div>
  </Row>
  </div>
  <div className='space-1'></div>
<div>
 <Row>
 <Col className='wrapper-1'>
   <h2 className='line'> <span className='text2'>Timeline</span></h2>
   <Time data={this.state.expense.filter(x => parseFloat(x.amount) !== 0)}/>
   </Col>
   <Spacer amount={15} />
  <Col sm={7} className='wrapper-1'>
  <h2 className='line'> <span className='text2'>Recent Transactions</span></h2>
  <Trans data={this.state.expense.filter(x => parseFloat(x.amount) !== 0)}/>
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

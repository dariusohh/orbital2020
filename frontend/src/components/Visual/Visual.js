
import axios from 'axios';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import './visual.css';
import MoneyIcon from '@material-ui/icons/Money';
import {BarGraph2} from './barR';
import {Graph} from'./line';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import {AddBudget} from './add';
import {BarGraph} from './bar';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import {Row,Col}from 'react-grid-system';
import { connect } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import Card from "../Card/Card.js";
import Accessibility from "@material-ui/icons/Accessibility";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";
import CardHeader from "../Card/CardHeader.js";
import CardIcon from "../Card/CardIcon.js";
import DateRange from "@material-ui/icons/DateRange";
import Store from "@material-ui/icons/Store";
import Update from "@material-ui/icons/Update";
import CardFooter from "../Card/CardFooter.js";
import Target from './target';
import Revenue from './revenue';
import 'rsuite/dist/styles/rsuite-default.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CardBody from "../Card/CardBody.js";
import dashboardStyle from '../assets/jss/material-dashboard-react/views/dashboardStyle.js';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const useStyles = makeStyles(dashboardStyle);
class Visualisation extends React.Component {
   
  state = {
    expense: [],
    budget: 0,
    revenue:0,
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(),
    filter:false,
    length:0
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
              expense: new_res,
              length: new_res.filter(x => x.amount >0).length
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
     <Row>
        <Col sm={10} >
       <h3>OVERALL ANALYSIS</h3>
        </Col>
        <Col sm={2}>
        { this.state.filter ? 
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={() => this.setState({filter:false})}
      
      >
        ▼  Filter Date
        </Button>
        :
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={() => this.setState({filter:true})}
      
      >
        ▶   Filter Date
        </Button>
        // <button className= "filter-button" onClick={() => this.setState({filter:false})}>▼  Filter</button>
        //     :
        // <button className= "filter-button" onClick={() => this.setState({filter:true})}>▶  Filter</button>
        }
        { this.state.filter && 
          <div>
        
        <DateRangePicker 
        value={[this.state.startDate,this.state.endDate]}
        onChange={arr => this.setState({startDate:arr[0],endDate:arr[1]})}
        disabledDate={date => date.getTime() - new Date().getTime() > 0}/>
        </div>
        }
        </Col>
      </Row>
      <br/>    <br/>   
      <div>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <TrackChangesIcon style={{fontSize:'30px',color:'white'}}/>
              </CardIcon>
              <p style={{color:'black'}}>Profit Target</p>
              <h3 style={{color:'black'}}>
              <Target data={this.state.expense} target= {this.state.target}/><small>%</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div >
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
       
       
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MoneyIcon/>
              </CardIcon>
              <p style={{color:'black'}} >Revenue</p>
              <h3 style={{color:'black'}} ><Revenue data={this.state.expense}/></h3>
            </CardHeader>
            <CardFooter stats>
              <div >
                <DateRange />
                Last 24 Hours
              </div>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <AccountBalanceIcon style={{fontSize:'30px',color:'white'}}/>
              </CardIcon>
              <p style={{color:'black'}} >Budget Left</p>
              <h3 style={{color:'black'}} >  <AddBudget data={this.state.expense} budget ={this.state.budget}/></h3>
            </CardHeader>
            <CardFooter stats>
            <div >
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p style={{color:'black'}}>Consumer Count</p>
              <h3 style={{color:'black'}}>{this.state.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div >
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>


      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader  >
            <BarGraph data={this.state.expense} />
            </CardHeader>
            <CardBody>
             
              <p > Analysis of Company's Expenses               
              </p>
            </CardBody>
            <CardFooter chart>
              <div >
                <AccessTime />  according to filtered dates
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader >
            <Graph data={this.state.expense} 
                                  startDate = {this.state.startDate} 
                                  endDate = {this.state.endDate}
                                  /> 
            </CardHeader>
            <CardBody>
           
              <p > <ArrowUpward  />Tracking of Company's Progress</p>
            </CardBody>
            <CardFooter chart>
              <div >
                <AccessTime />  according to filtered dates
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader >
            <BarGraph2 data={this.state.expense} />
            </CardHeader>
            <CardBody>
              <p >Analysis of Company's Revenues</p>
            </CardBody>
            <CardFooter chart>
              <div >
                <AccessTime /> according to filtered dates
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>


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

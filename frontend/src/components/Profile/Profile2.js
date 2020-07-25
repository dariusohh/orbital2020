import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './profile.css';
import Expense from './expense';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Graph2 from "./line";
import StarRatings from 'react-star-ratings';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Prediction from './predict.js'
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/button';
import CardBody from "../Card/CardBody.js";
import Spacer from 'react-add-space';
import Popup from "reactjs-popup";
import {Graph} from'./progress';
import Contact from './contact';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";
import CardHeader from "../Card/CardHeader.js";
import CardIcon2 from "../Card/CardIcon2.js";
import Card from "../Card/Card.js";
import CardFooter from "../Card/CardFooter.js";

import{ EditOutlined} from  '@ant-design/icons';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Profile2 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
        text: '',
        profile: {company_name: "", 
        company_industry: "",
        company_description: "", 
        show_public: ""},
        header:'About Us',
        expense: [],
        achievement:[],
    update: false
    }
  }

  state= {
    profile:{},
    expense :[]
  }
  // componentDidMount() {
  //   setTimeout(() => 
  //       axios.post('predict/',this.props.data.expense).then(res => {
  //             this.setState({predict:res.data})
  //         })
  //     , 200);
  // }

componentDidMount() {
  const name= this.props.match.params.username
      axios.get(`profile/${this.props.match.params.username}/`)
      .then(prof => {
        const achievement_arr = prof.data.achievement.split(",")
        const achievements = []
        for (var value of achievement_arr) {
          achievements.push(<li >{value}</li>)
        }
          this.setState({
              profile: prof.data,
            text: prof.data.company_description,
            achievement:achievements
          
          });
            axios.get(`api/`)
      .then(res => {
          const new_res = res.data.filter(x => x.username === name);
          this.setState({
              expense: new_res
          });
      })
      })
      axios.get(`api/`)
      .then(res => {
          const new_res = res.data.filter(x => x.username === name);
          this.setState({
              expense: new_res
          });
      })
  }
 
handleabout =e =>{
  this.setState({
      text: this.state.profile.company_description
  })
}
handleO = e => {
  window.location.href = "/profile";
}


handleratings =e =>{
  this.setState({
    text:  <StarRatings
    rating={this.state.profile.ratings}
    starRatedColor="DarkOrange"
    numberOfStars={5}
    starDimension="30px"
    name='rating'
  />
})
}

handleachieve =e =>{
  this.setState({
    text: this.state.achievement
  })
}



render() {



  return (
      <>
      <div className="profile">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

   <GridContainer>
      <GridItem xs={12} >
          <Card>
           
            <CardHeader color="info" stats icon>
              <CardIcon2 color="info">
              <PersonOutlineIcon style={{fontSize:'70px'}}/>
              </CardIcon2>
              {this.props.token !== null &&
         <EditOutlined 
        onClick= {this.handleO}
  style={{ fontSize: '30px', color: 'grey' }}/> 
    }
              <Spacer amount={5} />
          <text className='name'>{this.state.profile.company_name}</text>
              <h3 style={{color:'black'}}>
                
                <Popup trigger={ 
        <Button variant="contained"  color="primary">Contact Details</Button>
   } modal closeOnDocumentClick>

        <Contact data={this.state.profile}/>
 
        </Popup>

              </h3>
            </CardHeader>
          
            <Paper square>
      <Tabs
    
        indicatorColor="primary"
        textColor="primary"

        aria-label="disabled tabs example"
      >
        <Tab  onClick={this.handleabout} label="About" />
        <Tab onClick={this.handleachieve} label="Achievement"  />
        <Tab onClick={this.handleratings} label="Ratings" />
      </Tabs>
      <br/>
      <div style={{margin:"0.5% 1%"}}>
     <p>{this.state.text}</p> 
     </div> 
    </Paper>
            <CardFooter stats>

            <div >
              <StarsIcon/>
    Company specialised in {this.state.profile.company_industry}
              </div>
            </CardFooter>
          </Card>
       
       
        </GridItem>
        </GridContainer>
        </div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader  >
            <Graph2 data={this.state.expense}/>
            </CardHeader>
            <CardBody>
            <SupervisedUserCircleIcon/>
              <p > Comapany's Progress
                <br/>           
                It is a useful visualisation to help Venture Capitalist have an 
                overview of the company's efficiency.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader >
            <Expense data={this.state.expense}/>
            </CardHeader>
            <CardBody>
           <MonetizationOnIcon/>
              <p > Expense Breakdown
                <br/>
                Venture Capitalists want to know where their investments will be put into.
              </p>
            </CardBody>
        
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader >
            <Graph data={this.state}/>
            </CardHeader>
            <CardBody>
              <TrackChangesIcon/>
              <p >Target Progress
                <br/>
                Venture Capitalist wabt ti know how far the 
                company is from its aim so that they can decide whether or not to invest.
              </p>

            </CardBody>
      
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader >
            <Prediction/>
            </CardHeader>
            <CardBody>
              <AssessmentIcon/>
              <p >Forecasted Revenue
                <br/> A predicted overview of company's revenue helps to boost the 
                confidence that Venture Capitalist has on the company.
              </p>
            </CardBody>
      
          </Card>
        </GridItem>
        
      </GridContainer>

 
   
      </>
    )
  
}}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Profile2);

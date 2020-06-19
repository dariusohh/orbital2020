import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Row,Col}from 'react-grid-system';
import './profile.css';
import Spacer from 'react-add-space';
import {Graph} from'./progress';
import Contact from './contact';
import About from './about.js';


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
    update: false
    }
  }

  state= {
    profile:{},
    expense :[]
  }

componentDidMount() {
  const name= this.props.match.params.username
      axios.get(`profile/${this.props.match.params.username}/`)
      .then(prof => {
          this.setState({
              profile: prof.data,
            text: <About data={prof.data}/>
          });
      })
      axios.get(`api/`)
      .then(res => {
          const new_res = res.data.filter(x => x.username === name);
          this.setState({
              expense: new_res
          });
      })
  }
 



  



handleprogress = e => {
  const x = <Graph data={this.state}/>
  this.setState(
    {
      header:"Company's Progress",
      text:x});
}


handlecon = e => {
  console.log(e)
  this.setState(
    { header:"Contact Us",
      text:<Contact data={this.state.profile}/>});
}
handleO = e => {
  window.location.href = "/profile";
}

    
handleintro = e => {
  this.setState(
    { header: 'About Us',
      text : <About data={this.state.profile}/>
    });
}

render() {

  return (
      <>
  
      <div className='profile'>
        
    {this.props.token !== null &&
         <EditOutlined 
        onClick= {this.handleO}
  style={{ fontSize: '30px', color: 'white' }}/> 
    }
        <Spacer amount={5} />
          <text className='name'>{this.state.profile.company_name}</text>
      </div>
      <Spacer amount={5} />
      
         <div>
      <Row>
        <Col className='menu' style = {{padding:"0"}}>
        <button className='bc' onClick={this.handleintro}>About Us</button>
         </Col>
        <Col className='menu' style = {{padding:"0"}}>
        <button className='bc' onClick= {this.handleprogress}>Company's Progress</button>
        </Col>
        
        <Col className='menu' style = {{padding:"0"}}>
        <button className='bc' onClick= {this.handlecon}>Contact Us </button>
        </Col>
      </Row>
    </div>  <Spacer amount={20} />
    <div className='header-7'>
      {this.state.header}
    </div>
    <Spacer amount={20} />
      <div className='body'>
        
       {this.state.text}
      </div>
     

 
   
      </>
    )
  
}}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Profile2);

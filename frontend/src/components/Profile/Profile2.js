import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Row,Col}from 'react-grid-system';
import './profile.css';
import Text from 'react-text';
import Spacer from 'react-add-space';
import p1 from './pic/p1.jpg';
import p2 from './pic/p2.jpg';
import p3 from './pic/p3.jpg';
import {Graph} from'./progress';
import Contact from './contact';
import About from './about';


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
        isAuthenticated:false,
        header:'Click to find out more about the company!',
        expense: [] ,
    update: false
    }
  }



componentDidMount() {
      axios.get(`profile/${localStorage.getItem("username")}/`)
      .then(prof => {
          this.setState({
              profile: prof.data,
              isAuthenticated:true
          });
      })
      axios.get('api/')
      .then(res => {
          const new_res = res.data.filter(x => x.username === localStorage.getItem("username"));
          this.setState({
              expense: new_res
          });
      })
  }
 

 
  



handleprogress = e => {
  const x = <Graph data={this.state.expense}/>
  this.setState(
    {
      header:"Company's Progress",
      text:x});
}


handlecon = e => {
  console.log(e)
  this.setState(
    { header:"Contact Us",
      text:<Contact/>});
}
handleO = e => {
  window.location.href = "/profile";
}

    
handleintro = e => {
  this.setState(
    { header: 'About us',
      text : <About/>
    });
}
  render() {


  return (
      <>
    {/* <h1 className='industry'>Company's industry</h1> */}
      <div className='profile'>
        <div>
        <img
         className='avatar'
         src={p1}
  />
  </div>
    
        { this.state.isAuthenticated && <EditOutlined 
        onClick= {this.handleO}
  style={{ fontSize: '30px', color: 'white' }}/> }

        <Spacer amount={5} />
          <text className='name'>{this.state.profile.company_name}</text>
      </div>
      <Spacer amount={5} />
      
         <div>
      <Row>
        <Col className='menu'>
        <button className='bc' onClick={this.handleintro}>About Us</button>
         </Col>
        <Col className='menu'>
        <button className='bc' onClick= {this.handleprogress}>Company's Progress</button>
        </Col>
        
        <Col className='menu'>
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
  }
}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Profile2);
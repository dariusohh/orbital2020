import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './home.css';
import Spacer from 'react-add-space';
import {Container}from 'react-grid-system';
import i from './assets/i.jpg';
import {Link } from "react-router-dom";
import A from './assets/A.jpg';
import B from './assets/B.jpg';
import logo from './logo.png'


axios.defaults.baseURL = 'http://127.0.0.1:8000/';



class Homepage extends React.Component {
  

  render() {
  return (

<div> 
<img 
        src= {logo}
        className='llogo'
        />
        <br/>
        <p className="subtext2"> "AnalyticsWallet is the first e-wallet web application designed 
    to help start-up companies keep track of their finances 
    as well as to connect with Venture Capitalists."</p>
        <h2 className='line'> <span className='text2'></span></h2>
  
<div class="wrapper">
  <div className= 'Su'>
    <img 
        src= {B}
        className='B'
        />
        <Spacer amount={2} />
        <h1 className='VCtext'> Venture-Capitalists </h1><br/>
        <p className="subtext">
          With a growing startup scene in Singapore, AnalyticsWallet recognised that it is getting increasingly difficult to find the right 
          firm to invest. In light of this,Analytics wallet aim to help Venture-Capitalist find their desired companies to invest in. Click to check out 
          how we can help you! </p>
        <Container>
     <br/>
    <br/>
  <Link to="/Login">
            <button className="detail-btn">
            click to check it out !
            </button>
            </Link>
  </Container>
</div>
  <div className='Su'>
  <img 
        src= {A}
        className='B'
        />
<Spacer amount={2} />
  <h1 className='VCtext'> Start-Up </h1> 
  <br/>
  <p className="subtext">
The startup scene in Singapore is growing exponentially. AnalyticsWallet recognised that one prominent 
struggle faced by startup is fund management hence AnalyticsWallet aim to help startup overcome this challenge using technology.Additionally, 
we also aim to smoothen the process of startup connecting with Venture Capitalist. Click 
the button to check out how we can help you! </p>
  <Container >
    <br/>
        <br/>
        <Link to="/listing">
            <button className="detail-btn">
              click to check it out !
            </button>
            </Link>
            </Container>
  
  </div>
  
  </div>

</div>

    )
  }
}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(Homepage);






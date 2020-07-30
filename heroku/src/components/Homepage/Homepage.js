import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './home.css';
import Spacer from 'react-add-space';
import {Container}from 'react-grid-system';
import A from './assets/A.jpg';
import B from './assets/B.jpg';
import logo from './logo.png'


axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';



class Homepage extends React.Component {
  

  render() {

  return (

<div> 
<img 
        src= {logo}
        className='llogo'
        alt="logo"
        />
        <br/>
        <p className="subtext2"> "AnalyticsWallet is the first e-wallet web application designed 
    to help start-up companies keep track of their finances 
    as well as to connect with Venture Capitalists."</p>
        <h2 className='line'> <span className='text2'></span></h2>
  
<div className="wrapper">
  <div className= 'Su'>
    <img 
        src= {B}
        className='B'
        alt="B"
        />
        <Spacer amount={2} />
        <h1 className='VCtext'> Venture-Capitalists </h1><br/>
        <p className="subtext">
          With a growing startup scene in Singapore, AnalyticsWallet recognised that it is getting increasingly difficult to find the right 
          firm to invest. In light of this,AnalyticsWallet helps to analyze startup's financial data and assist Venture-Capitalist in finding their desired companies.</p>
  <a href="/listing">
            <button className="detail-btn">
            click to check it out !
            </button>
            </a>
</div>
  <div className='Su'>
  <img 
        src= {A}
        className='B'
        alt="C"
        />
<Spacer amount={2} />
  <h1 className='VCtext'> Start-Up </h1> 
  <br/>
  <p className="subtext">
The startup scene in Singapore is growing exponentially. AnalyticsWallet recognised that one prominent 
struggle faced by startup is fund management. We help startups overcome this challenge using technology and smoothen the process of startup connecting with Venture Capitalist. </p>
        { this.props.token !== null ? 
        <a href="/expense">
            <button className="detail-btn">
              click to check it out !
            </button>
        </a>
        :
        <a href="/login">
            <button className="detail-btn">
              click to check it out !
            </button>
        </a>
        }
  
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






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


axios.defaults.baseURL = 'http://127.0.0.1:8000/';



class Homepage extends React.Component {
  

  render() {
  return (

<div> 
<Container className='containers'> </Container>
<img 
        src= {i}
        alt ="avater"
        className= "avatar-img"
        />

<Container className='space'>

</Container>

<h1 className ='banner'>
  AnalyticsWallet Welcomes You 
</h1>

  <p className='text'>“ We are the first e-wallet web application designed 
    to help start-up companies keep track of their finances 
    as well as to connect with Venture Capitalists.”
</p>


<Container className='space2'></Container>

<Container className='c'>
<Link to="/Register">
            <button className="Button">
              click to start your journey with us
            </button>
            </Link>
</Container>

<Container className='space'></Container>

<h1 className ='banner2'>
    Our Services
</h1>
<Container className='space'></Container>


  
<div class="wrapper">
  <div className= 'Su'>
    <img 
        src= {B}
        className='B'
        />
        <Spacer amount={2} />
        <h1 className='VCtext'> Venture-Capitalists </h1>
        <Container>
        <Link to="/Login">
            <button className="Button">
              click to check out the features
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
  <Container >
  <Link to="/Login">
            <button className="Button">
              click to check out the features
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






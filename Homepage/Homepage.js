import React from 'react';
import axios from './node_modules/axios';
import { connect } from 'react-redux';
import {Grid,Cell} from 'react-mdl';
import './home.css';
import { Container, Row, Col } from './node_modules/react-grid-system';
import Image from './assets/Image.jpg';
import {Link } from "react-router-dom";
import Spacer from './node_modules/react-add-space';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Homepage extends React.Component {
  

  render() {
  return (
      
    <div style= {{width:'100%', margin:'auto'}} >
    <Grid className="homepage-grid"> 
        <Cell col= {12}>
        <img 
        src= {Image}
        alt ="avater"
        className= "avatar-img"
        />
        <Spacer amount={50} />
    <Container  >
    <Row>
        <Col sm={5} className = 'containers'>
         <h1> Venture Capitalist </h1>
         <button className="btn">
              click to check out the features
            </button>
        </Col>
        <Col sm={2} >
        </Col>

        <Col sm={5} className = 'containers'>
        <h1>  Start-ups    
        </h1>
        <Link to="/Expense">
            <button className="btn">
              click to check out the features
            </button>
            </Link>
        </Col>
    </Row>
</Container>



        </Cell>
        </Grid>
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



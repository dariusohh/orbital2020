import React from 'react'
import axios from 'axios';
import './VC.css';
import StartUp from './startup';
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

class List2 extends React.Component {
   
    render() {
    return (

    <div >
          {this.props.data.map(profile => {
              return <StartUp data ={profile}/> 
         })}
   
    </div>

    )
  }
}

export default List2
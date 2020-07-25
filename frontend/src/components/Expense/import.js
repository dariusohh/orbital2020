import React from 'react';
import axios from 'axios';
import Manual from './manual';
import HelpIcon from '@material-ui/icons/Help';
import { connect } from 'react-redux';
import Button from '@material-ui/core/button';
import Paper from '@material-ui/core/Paper';
import Exel from './Exel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import format from './format.png';
import { Row,Col}from 'react-grid-system';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './import.css';
import {ExcelRenderer} from 'react-excel-renderer';
import Popup from "reactjs-popup";
import { DropzoneArea} from 'material-ui-dropzone';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class Import extends React.Component {
state = {
    cols :"",
    row:"",
    workbook:"",
    category: "",
    amount: '',
    date:"",
    text:<Manual/>
}
handlemanual =e => {
  this.setState({
    text: <Manual/>
  })

  
}


handleExel =e => {
  this.setState({
    text: <Exel/>
  })

  
}


            
    
  
      render() {
        return ( 
            <div>
               <h3 className='text0'>IMPORT DATA </h3>
            
              <br/>
             <div>
              <Paper square>
      <Tabs
    
        indicatorColor="primary"
        textColor="primary"

        aria-label="disabled tabs example"
      >
        <Tab  onClick={this.handlemanual} label="Manual Import" />
        <Tab onClick={this.handleExel} label="Excel Import"  />
   
      </Tabs>
      <br/>
      <div className='size'>
     <p>{this.state.text}</p> 
     </div> 
    </Paper>
           
    </div>
              <br/>
            <br/>
            
            </div>
        )
      }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
  }
  
  export default connect(mapStateToProps)(Import);



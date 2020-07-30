import React from 'react';
import axios from 'axios';
import Manual from './manual';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Exel from './Exel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './import.css';
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

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
              <Paper square style={{backgroundColor:"transparent",boxShadow:"none"}}>
      <Tabs
    
        indicatorColor="primary"
        textColor="primary"

      >
        <Tab  style={{border:"3px",borderStyle:"solid"}} onClick={this.handlemanual} label="Manual Import" />
        <Tab style={{border:"3px",borderStyle:"solid"}} onClick={this.handleExel} label="Excel Import"  />
   
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



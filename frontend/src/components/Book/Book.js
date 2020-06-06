import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import  TransactionList from './keep2';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class BooKKeeping extends React.Component {
  
  state = {
    expense: []
}

componentDidMount() {
    setTimeout(() => 
      axios.get('api/')
      .then(res => {
          const new_res = res.data.filter(x => x.username === localStorage.getItem("username"));
          this.setState({
              expense: new_res
          });
      }), 200);
  }

  render() {
  return (
    
       
     
        <TransactionList data={this.state.expense}/>

      
    
      
 
    )
  }
}

const mapStateToProps = state => {
  return {
      token: state.token
  }
}

export default connect(mapStateToProps)(BooKKeeping);

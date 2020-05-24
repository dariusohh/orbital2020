import React from 'react';
import { Header } from './Expense/Header';
import IncomeExpenses from './Expense/IncomeExpenses';
import TransactionList from './Expense/TransactionList';
import AddTransaction from './Expense/AddTransaction';
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Expense extends React.Component {
  
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
      }),1000);
  }

  render() {
  return (
      <>
      <Header />
      <div className='container'>
        <IncomeExpenses data={this.state.expense}/>
        <TransactionList data={this.state.expense}/>
        <AddTransaction />
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

export default connect(mapStateToProps)(Expense);

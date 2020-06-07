import React from 'react';
import { Header } from './Expense/Header';
import IncomeExpenses from './Expense/IncomeExpenses';
import TransactionList from './Expense/TransactionList';
import axios from 'axios';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Expense extends React.Component {
  
  state = {
    expense: [],
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date()
}

  dateFilter = (objdate) => {
        const objyear = objdate.substring(0,4)
        const objmth = objdate.substring(5,7) - 1
        const objday = objdate.substring(8,10)
        const olddate = new Date(objyear,objmth,objday)
        return (olddate.getTime() <= this.state.endDate.getTime()) 
        && (this.state.startDate.getTime() - (1000 * 60 * 60 * 24) <= olddate.getTime())
  }

componentDidMount() {
    setTimeout(() => 
      axios.get('api/')
      .then(res => {
          var new_res = res.data.filter(x => x.username === localStorage.getItem("username")).filter(x => this.dateFilter(x.created_at))
          this.setState({
              expense: new_res
          });
      }), 200);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.startDate.getTime() !== this.state.startDate.getTime()) || 
    (prevState.endDate.getTime() !== this.state.endDate.getTime())) {
      axios.get('api/')
      .then(res => {
          var new_res = res.data.filter(x => x.username === localStorage.getItem("username")).filter(x => this.dateFilter(x.created_at))
          this.setState({
              expense: new_res
          });
      })}
  }

  render() {
  return (
      <>
      <Header />
      <div className='container'>
        <div className = "date-container">
        <div>
      <label>Start date:</label>
        <DatePicker 
        showMonthDropdown
        selected = {this.state.startDate}
        onChange = {date => this.setState({startDate:date})}
        maxDate={this.state.endDate}
        />
        </div>
        <div className = "endDate">
        <label>End date:</label>
        <DatePicker 
        showMonthDropdown
        selected = {this.state.endDate}
        onChange = {date => this.setState({endDate:date})}
        minDate = {this.state.startDate}
        maxDate={new Date()}
        />
        </div>
        </div>
        <IncomeExpenses data={this.state.expense}/>
        <TransactionList data={this.state.expense}/>
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

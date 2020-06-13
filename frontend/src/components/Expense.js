import React from 'react';
import { Header } from './Expense/Header';
import IncomeExpenses from './Expense/IncomeExpenses';
import TransactionList from './Expense/TransactionList';
import axios from 'axios';
import { connect } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import{ FilterFilled } from  '@ant-design/icons';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Expense extends React.Component {
  
  state = {
    expense: [],
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date()
}

  dateFilter = (objdate) => {
    const objyear = objdate.substring(0,4)
    const objmth = objdate.substring(5,7) - 1
    const objday = objdate.substring(8,10)
    const objhour = parseInt(objdate.substring(11,13)) + 8
    const objmin = objdate.substring(14,16)
    const objsec = objdate.substring(17,19)
    const olddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
        return (olddate.getTime() <= new Date(new Date(this.state.endDate.setHours(23)).setMinutes(59)).setSeconds(59)) 
        && (this.state.startDate.getTime() <= olddate.getTime())
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
        <div>
        <label className="date-label">Date</label>
        <FilterFilled style={{marginRight:"5px"}}/>
      <DateRangePicker 
        value={[this.state.startDate,this.state.endDate]}
        onChange={arr => this.setState({startDate:arr[0],endDate:arr[1]})}
        disabledDate={date => date.getTime() - new Date().getTime() > 0}/>
        </div>
        <div className = "space-2"></div>
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

import React from 'react';
import { Header } from './Expense/Header';
import IncomeExpenses from './Expense/IncomeExpenses';
import TransactionList from './Expense/TransactionList';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import { Row,Col}from 'react-grid-system';
import 'rsuite/dist/styles/rsuite-default.css'

axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

class Expense extends React.Component {
  
  state = {
    expense: [],
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(),
    filter:false
}

  dateFilter = (objdate) => {
    const objyear = objdate.substring(0,4)
    const objmth = objdate.substring(5,7) - 1
    const objday = objdate.substring(8,10)
    const objhour = parseInt(objdate.substring(11,13)) + 8
    const objmin = objdate.substring(14,16)
    const objsec = objdate.substring(17,19)
    const olddate = new Date(objyear,objmth,objday, objhour, objmin, objsec)
    const currdate = new Date(this.state.endDate.getFullYear(),this.state.endDate.getMonth(),this.state.endDate.getDate(),23,59,59)
      return (olddate.getTime() <= currdate.getTime()) 
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
      <Row>
        
        <Col>
        <Header />
        { this.state.filter ? 
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={() => this.setState({filter:false})}
      >
        ▼  Filter Date
        </Button>
        :
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={() => this.setState({filter:true})}
      
      >
        ▶   Filter Date
        </Button>
        // <button className= "filter-button" onClick={() => this.setState({filter:false})}>▼  Filter</button>
        //     :
        // <button className= "filter-button" onClick={() => this.setState({filter:true})}>▶  Filter</button>
        }
        { this.state.filter && 
          <div>
        
        <DateRangePicker 
        value={[this.state.startDate,this.state.endDate]}
        onChange={arr => this.setState({startDate:arr[0],endDate:arr[1]})}
        disabledDate={date => date.getTime() - new Date().getTime() > 0}/>
        </div>
        }
        </Col>
        <Col>
        
        </Col>
      </Row>
    
      <div className='container' style={{marginTop:"0px"}}> 
   
  
      
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

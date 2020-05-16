import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Expense from './ExpenseList'
import ExpenseForm from './ExpenseForm'


axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class ExpenseList extends React.Component {

    state = {
        expense: []
    }

    componentDidUpdate(prevProps) {
        if (this.props.token !== prevProps.token) {
            axios.defaults.headers = {
                "Content-Type":"application/json",
                Authorization: this.props.token
            }
            axios.get('api/')
            .then(res => {
                console.log(localStorage.getItem("username"))
                const new_res = res.data.filter(x => x.username === localStorage.getItem("username"));
                this.setState({
                    expense: new_res
                });
            })
        }
    }

    render() {
        return (
            <div>
            <h2>Create an Expense</h2>
            <ExpenseForm type = "post" id={null} btnText="Create Expense"/>
            <br />
            <Expense data={this.state.expense} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.token
    }
  }


export default connect(mapStateToProps)(ExpenseList);
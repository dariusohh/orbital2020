import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class ExpenseForm extends React.Component {

    handleFormSubmit = (event, type, id) => {
        const name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        axios.defaults.headers = {
            "Content-Type":"application/json",
            Authorization: this.props.token
        }
        switch ( type ) {
            case 'post':
                return axios.post('api/', {name: name, username: username,
                amount: amount})
                .catch(err => console.log(err))
            case 'put':
                return axios.put(`api/${id}/`, {name: name, username: username,
                amount: amount})
                .catch(err => console.log(err));
            default:
                return
        }
    }


    render() {
        return (
 <Form onSubmit = {(event) => this.handleFormSubmit(event, this.props.type, this.props.id)}>
    <label>Expense Description</label>
    <input type = 'text' name="name" placeholder="Enter expense description"/>

    <label>Expense Amount</label>
    <input type = 'text' name="amount" placeholder="Input Amount"/>

  <Button type="submit">{this.props.btnText}</Button>
</Form>
        )
    }
};

const mapStateToProps = state => {
    return {
        token: state.token
    }
  }


  export default connect(mapStateToProps)(ExpenseForm);
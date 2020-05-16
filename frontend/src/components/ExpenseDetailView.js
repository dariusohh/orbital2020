import React from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Button } from 'react-bootstrap';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';


class ExpenseDetail extends React.Component {

    state = {
        expense: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
            axios.get(`api/${id}/`)
            .then(res => {
                this.setState({
                    expense: res.data
                });
            })
    }

    handleDelete = (event) => {
        if (this.props.token !== null) {
        const id = this.props.match.params.id
        axios.defaults.headers = {
            "Content-Type":"application/json",
            Authorization: this.props.token
        }
        axios.delete(`api/${id}/`);
        this.props.history.push('/');
        this.forceUpdate();
    }
}


    render() {
        return (
            <div>
            <Card title = {this.state.expense.name}>
                <p>{this.state.expense.amount}</p>
            </Card>
            <ExpenseForm type="put" id={this.props.match.params.id} btnText="Update Expense"/>
            <form onSubmit={this.handleDelete}>
                <Button type="submit">Delete</Button>
            </form>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        token: state.token
    }
  }


  export default connect(mapStateToProps)(ExpenseDetail);
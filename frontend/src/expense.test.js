import React from 'react';
import ReactDOM from 'react-dom';
import IncomeExpenses from './components/expense/IncomeExpenses';
import TransactionList from './components/expense/TransactionList';
import { Revenue } from './components/expense/Revenue';
import {Expense} from './components/expense/Expense';
import AddButton from './components/expense/AddButton';

const testdata = [{
    "id": 65,
    "username": "user-23",
    "name": "first web app",
    "amount": "50000.00",
    "created_at": "2020-04-09T00:00:00Z"
},
{
    "id": 63,
    "username": "user-23",
    "name": "first web app",
    "amount": "500.00",
    "created_at": "2020-05-07T00:00:00Z"
},
{
    "id": 64,
    "username": "user-23",
    "name": "Development",
    "amount": "50000.00",
    "created_at": "2020-05-07T00:00:00Z"
},
{
    "id": 12,
    "username":"user-23",
    "name": "asd",
    "amount": "123.00",
    "created_at": "2020-05-17T14:43:21.687980Z"
},
{
    "id": 36,
    "username": "user-23",
    "name": "food",
    "amount": "25.00",
    "created_at": "2020-05-26T11:52:13.478424Z"
}]


//IncomeExpenses Test

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IncomeExpenses data= {testdata} />, div);
    ReactDOM.unmountComponentAtNode(div);
});



//TransactionList Test

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TransactionList data= {testdata} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Revenue Test 

const transactiontest  = {
    "id": 63,
    "username": "user-23",
    "name": "first web app",
    "amount": "500.00",
    "created_at": "2020-05-07T00:00:00Z"
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Revenue key={transactiontest.id} transaction={transactiontest} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


//Expense Test

const transactiontest2  = {
    "id": 63,
    "username": "user-23",
    "name": "first web app",
    "amount": "-500.00",
    "created_at": "2020-05-07T00:00:00Z"
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Expense key={transactiontest2.id} transaction={transactiontest2} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


//AddButton Test

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});



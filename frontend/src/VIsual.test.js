import React from 'react';
import ReactDOM from 'react-dom';
import Target from './components/Visual/target';
import Revenue from './components/Visual/revenue';
import AddBudget from './components/Visual/add';
import Time from  './components/Visual/timeline';
import Trans from  './components/Visual/trans';
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

//Target
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Target data= {testdata} target={6000} />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });


//Nett Profit
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Revenue data= {testdata}  />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Budget Profit connect issue
// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<AddBudget data= {testdata} budget={8000}  />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

//Timeline
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Time data= {testdata}  />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Recent Transations
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Trans data= {testdata}  />, div);
    ReactDOM.unmountComponentAtNode(div);
});
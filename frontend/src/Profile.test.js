import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/Profile/about';
import Contact from './components/Profile/contact';


const testdata  =     {
    "username": "user-23",
    "company_name": "Google",
    "company_industry": "Media",
    "company_description": "Instagram is a social media app that allows users to share photos and videos from their lives, add captions, edit filters, tweak settings, engage with others, explore and creep, and so, so much more — you just have to know what you're doing so you don't get overwhelmed!",
    "show_public": true,
    "email": "insta@gmail.com",
    "office": "Pixel building level 3",
    "tele": "+65 65552555",
    "ratings": 4,
    "budget": "5000.00",
    "target": "80000.00",
    "achievement": "dbsebsb,dshjbv,rhs"
}

const testdata2 = [{
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


//About testcase


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About data= {testdata} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


//Contact testcase

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact data= {testdata} />, div);
    ReactDOM.unmountComponentAtNode(div);
});





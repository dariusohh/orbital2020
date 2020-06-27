import React from 'react';
import ReactDOM from 'react-dom';
import StartUp from './components/VC/startup'

const testdata = 
[   {
    "username": "gawwer",
    "company_name": "",
    "company_industry": "",
    "company_description": "",
    "show_public": false,
    "email": "",
    "office": "",
    "tele": "",
    "ratings": 4,
    "budget": "5000.00",
    "target": "80000.00",
    "achievement": ""
},
{
    "username": "user-23",
    "company_name": "Instagram",
    "company_industry": "Construction",
    "company_description": "Instagram is a social media app that allows users to share photos and videos from their lives, add captions, edit filters, tweak settings, engage with others, explore and creep, and so, so much more — you just have to know what you're doing so you don't get overwhelmed!",
    "show_public": true,
    "email": "mayvechua@gmail.com",
    "office": "Pixel building level 34",
    "tele": "90660388",
    "ratings": 4,
    "budget": "566677.00",
    "target": "344455.00",
    "achievement": "dbsebsbsvdbvsfv sv"
},
{
    "username": "test-23",
    "company_name": "test-123",
    "company_industry": "infrasturcture",
    "company_description": "Instagram is a social media app that allows users to share photos and videos from their lives, add captions, edit filters, tweak settings, engage with others, explore and creep, and so, so much more — you just have to know what you're doing so you don't get overwhelmed!",
    "show_public": true,
    "email": "mayvechua@gmail.com",
    "office": "Pixel building level 3",
    "tele": "90660388",
    "ratings": 4,
    "budget": "566677.00",
    "target": "344455.00",
    "achievement": "dbsebsb"
}]

const testdata2 = { "username": "test-23",
"company_name": "test-123",
"company_industry": "infrasturcture",
"company_description": "Instagram is a social media app that allows users to share photos and videos from their lives, add captions, edit filters, tweak settings, engage with others, explore and creep, and so, so much more — you just have to know what you're doing so you don't get overwhelmed!",
"show_public": true,
"email": "mayvechua@gmail.com",
"office": "Pixel building level 3",
"tele": "90660388",
"ratings": 4,
"budget": "566677.00",
"target": "344455.00",
"achievement": "dbsebsb"}

//List Test 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StartUp data= {testdata2} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


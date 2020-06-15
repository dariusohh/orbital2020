import React from 'react';
import { Route } from 'react-router-dom';
import Expense from './components/Expense'
import LoginForm from './components/login/Login'
import RegisterForm from './components/login/Register'
import Homepage from './components/Homepage/Homepage'
import Visual from './components/Visual/Visual'
import Profile from './components/Profile/Profile'
import Profile2 from './components/Profile/Profile2';

const BaseRouter = () => (
    <div>
        <Route exact path = '/expense/' component = {Expense}/>
        <Route exact path = '/login/' component = {LoginForm}/>
        <Route exact path = '/register/' component = {RegisterForm}/>
        <Route exact path = '/' component = {Homepage}/>
        <Route exact path = '/visual' component = {Visual}/>
         <Route exact path="/profile/:username/" component={Profile2} />{" "}
        <Route exact path = '/profile' component = {Profile}/>
    </div>
)

export default BaseRouter;

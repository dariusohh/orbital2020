import React from 'react';
import { Route } from 'react-router-dom';
import Expense from './components/Expense'
import Import from './components/Expense/import';
import Visual from './components/Visual/Visual'
import Profile from './components/Profile/Profile'
import Profile2 from './components/Profile/Profile2';
import List from './components/VC/list';
import Predict from './components/Prediction/Fake_Predict'
import Login from './components/login/Login'
import Register from './components/login/Register'

const BaseRouter = () => (
    <div>
        <Route exact path = '/expense/' component = {Expense}/>
        <Route exact path = '/visual' component = {Visual}/>
         <Route exact path="/profile/:username/" component={Profile2} />{" "}
        <Route exact path = '/profile' component = {Profile}/>
      <Route exact path = '/listing' component = {List}/>
      <Route exact path='/predict' component = {Predict}/>
     <Route exact path = '/import' component = {Import}/>
     <Route exact path = '/' component = {Login}/>
     <Route exact path = '/register' component = {Register}/>
    </div>
)

export default BaseRouter;

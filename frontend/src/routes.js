import React from 'react';
import { Route } from 'react-router-dom';

import ExpenseList from './components/ExpenseListView'
import ExpenseDetail from './components/ExpenseDetailView'
import LoginForm from './components/Login'
import RegisterForm from './components/Register'

const BaseRouter = () => (
    <div>
        <Route exact path = '/' component = {ExpenseList}/>
        <Route exact path = '/expense/:id' component = {ExpenseDetail}/>
        <Route exact path = '/login/' component = {LoginForm}/>
        <Route exact path = '/register/' component = {RegisterForm}/>
    </div>
)

export default BaseRouter;
import React from 'react'
import {Recent} from './recent'
import axios from 'axios';
import './visual.css';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Time extends React.Component {

    render() {
    return (
        <>
    
        <ul>
          {this.props.data.slice(0,6).map(transaction => (
          <Recent key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </>
    )
  }
}

export default Time
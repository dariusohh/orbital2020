import React from 'react';
import axios from 'axios';
import Spacer from 'react-add-space';
import './profile.css';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Contact extends React.Component {
  

render() {

  
    return (
        <>
        <div>{this.props.data.tele}</div>
        <Spacer amount={5} />
        <div>{this.props.data.email}</div>
        <Spacer amount={5} />
        <div>{this.props.data.office}</div>
        </>
    )
}

}

  export default Contact;
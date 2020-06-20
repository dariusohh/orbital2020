import React from 'react';
import axios from 'axios';
import Spacer from 'react-add-space';
import './profile.css';
import{ MailOutlined, PhoneOutlined, HomeOutlined} from  '@ant-design/icons';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Contact extends React.Component {
  

render() {

  
    return (
        <>
        <div>
        <PhoneOutlined style={{fontSize:"40px", marginRight:"15px"}}/>
        <span style={{fontSize:"30px"}}>{this.props.data.tele}</span>
        </div>
        <br/>
        <div>
        <MailOutlined style={{fontSize:"40px", marginRight:"15px"}}/>
        <span style={{fontSize:"30px"}}>{this.props.data.email}</span>
        </div>
        <br/>
        <div>
        <HomeOutlined style={{fontSize:"40px", marginRight:"15px"}}/>
        <span style={{fontSize:"30px"}}>{this.props.data.office}</span>
        </div>
        </>
    )
}

}

  export default Contact;
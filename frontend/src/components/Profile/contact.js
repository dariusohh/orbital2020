import React from 'react';
import axios from 'axios';
import './profile.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Contact extends React.Component {
  

render() {

  
    return (
        <>

<List >
      <ListItem>
        <ListItemAvatar>
          <Avatar >
            <CallIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.props.data.tele}  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <MailIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.props.data.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.props.data.office} />
      </ListItem>
    </List>

        </>
    )
}

}

  export default Contact;

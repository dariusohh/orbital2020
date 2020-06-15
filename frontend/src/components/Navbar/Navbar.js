import React from 'react';
import './Navbar.css';
import axios from 'axios';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';
import logo from './logo.png'
import {Link} from "react-router-dom";

class Navbar extends React.Component {

  state = {
    expense: [],
    profile:{}

}
componentDidMount() {
  setTimeout(() => 
    
    axios.get(`profile/${localStorage.getItem("username")}/`)
    .then(prof => {
        this.setState({
            profile: prof.data,
        });
 
    }), 200);
}
  render() {
    return (

      <div id='cssmenu'>
      <ul>
        <li><p style={{padding:"0",margin:"0"}}><img className = "logo" src={logo} alt = "Logo"/></p></li>
        <li className={window.location.pathname === '/' ? 'active' : null}><a href='/'>Home</a></li>
        <li className={window.location.pathname === '/expense' ? 'active' : null}>
        { this.props.isAuthenticated &&
          <a href= "/expense" >Expense Tracking</a>
        }
        </li>
        <li className={window.location.pathname === '/login' ? 'active' : null}>
        { !this.props.isAuthenticated && 
          <a href='/login'>Login</a>
        }
        </li>
        
          { this.props.isAuthenticated &&
            <li className={window.location.pathname === '/visual' || window.location.pathname === '/predict' ? "dropdown-active" : "dropdown"}>
            <a className="dropdown-menu" href= "/visual" > Data Visualisation</a>
            <div className ="dropdown-content">
              <a href = "/visual">Actual</a>
              <a href = "/predict">Prediction</a>
            </div>
            </li>
          }
        <li className={window.location.pathname === '/profile' ? 'active' : null}>
          { this.props.isAuthenticated &&
            <Link to ={`profile/${this.state.profile.username}`}>Profile</Link>
          }
        </li>
        <li className={window.location.pathname === '/register' ? 'active' : null}>
          { !this.props.isAuthenticated && 
            <a href='/register'>Register</a>
          }
        </li>
          { this.props.isAuthenticated && 
            <li><a href="/" onClick = {this.props.logout}>Logout</a></li>
          }
      </ul>
      </div>

    );

    }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => {
          dispatch(actions.logout())
      }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

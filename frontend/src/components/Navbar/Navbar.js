import React from 'react';
import './Navbar.css';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';

class Navbar extends React.Component {

  render() {
    return (
        <nav className="topnav">
        <div> 
          <ul>
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul>
              { this.props.isAuthenticated ?
                <a href="/" onClick = {this.props.logout}>Logout</a>
                :
                <a href="http://localhost:3000/login/">Login</a>
              }
            </ul>
            { !this.props.isAuthenticated &&
            <ul>
              <a href="http://localhost:3000/register/">Sign Up</a>
            </ul>
            }
          </ul>
        </div>
      </nav>

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
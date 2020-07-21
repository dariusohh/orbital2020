import React from 'react';
import { connect } from 'react-redux';
import { Form , Input } from 'antd';
import * as actions from '../../store/actions/auth'
import GridLoader from "react-spinners/ClipLoader"

class LoginForm extends React.Component {

    handleFinish = values => {
        this.props.onAuth(values.username, values.password)
        .then(() => {
        if (!this.props.error) {
            window.location.href = "/expense";
        }
        })
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p className = "error">Invalid username or password. Please try again.</p>
            )
        }
        return (
        <div> 
            { this.props.loading && 
                <div>    
            <h4 style={{float:'left',marginRight:'1%',marginLeft:'2%'}}>Loading </h4>
            <GridLoader size={30} css={{float:'left',marginBottom:"2%"}}/>
            </div>
            }
            {errorMessage}
            <Form onFinish={this.handleFinish}>
      <Form.Item name="username" >
        <Input placeholder = "Username"/>
      </Form.Item>
      <Form.Item name="password" >
        <Input placeholder = "Password"/>
      </Form.Item>
      <button html = "submit" disabled={this.props.loading}> Login </button>
        </Form>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => {
            return dispatch(actions.authLogin(username,password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
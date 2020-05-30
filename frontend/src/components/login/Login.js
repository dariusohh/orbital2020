import React from 'react';
import { connect } from 'react-redux';
import { Form , Input } from 'antd';
import * as actions from '../../store/actions/auth'
import './Login.css';

class LoginForm extends React.Component {

    handleFinish = values => {
        this.props.onAuth(values.username, values.password);
        setTimeout(() => {
        if (!this.props.error) {
            this.props.history.push('/expense/');
        }
        },400)
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>Invalid username or password. Please try again.</p>
            )
        }
        return (
        <div>
            {errorMessage}
            <Form onFinish={this.handleFinish}>
      <Form.Item name="username" >
        <Input placeholder = "Username"/>
      </Form.Item>
      <br/>
      <Form.Item name="password" >
        <Input placeholder = "Password"/>
      </Form.Item>
      <br/>
      <button html = "submit"> Login </button>
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
            dispatch(actions.authLogin(username,password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
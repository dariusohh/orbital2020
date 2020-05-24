import React from 'react';
import { connect } from 'react-redux';
import { Form , Input } from 'antd';
import * as actions from '../../store/actions/auth'
import './Login.css';

class LoginForm extends React.Component {

    handleFinish = values => {
        this.props.onAuth(values.username, values.password);
        this.props.history.push('/expense/');
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
        <div>
            {errorMessage}
            <Form onFinish={this.handleFinish}>
      <Form.Item name="username" rules={[{ required: true, message: 'Username is required!' }]}>
        <Input placeholder = "Username"/>
      </Form.Item>
      <br/>
      <Form.Item name="password" rules={[{ required: true, message: 'Password is required!'}]}>
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
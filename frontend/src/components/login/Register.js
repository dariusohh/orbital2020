import { Form, Input } from 'antd';
import React from 'react';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'; 
import './Login.css';

class RegisterForm extends React.Component {

    handleFinish = values => {
        this.props.onAuth(values.username, 
          values.email,
          values.password,
          values.confirm)
        this.props.history.push('/');
    }

    render() {
      return (
        <Form onFinish={this.handleFinish}>
          <Form.Item
            name= "username"
            label="Username"
            rules={[
              {
                required: true,
                message: 'Username is required!'
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name= "email"
            label="Email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Email is required!'
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
          <Form.Item>
            <button type="submit">
              Submit
            </button>
          </Form.Item>
        </Form>
      );
    };

}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => {
            dispatch(actions.authSignup(username,email, password1,password2))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
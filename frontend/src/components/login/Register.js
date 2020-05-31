import React, { useRef } from 'react';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'; 
import './Login.css';
import {useForm} from "react-hook-form";
import { useHistory } from "react-router"; 
import { useSelector } from "react-redux";

function RegisterForm({ onAuth, error }) {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const history = useHistory();

  const onSubmit = e => {
        onAuth(e.username, 
          e.email,
          e.password,
          e.confirm)
          handleRedirect();
    }

  const handleRedirect = () => 
  {
    console.log(error);
  }

      return (
        <form onSubmit = {handleSubmit(onSubmit)}>
          <input type="text" 
          placeholder="Username" 
          name="username" 
          ref={register({required:"Username is required"})} />
          {errors.username && <p>{errors.username.message}</p>}
        <br/>

          <input type="text" 
          placeholder="Email" 
          name="email" 
          ref={register({required:"Email is required", pattern:{value:/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Email is invalid"}})}/>
          {errors.email && <p>{errors.email.message}</p>}
        <br/>

          <input
            type = "password"
            placeholder="Password"
            name="password"
            ref={register({required:"Password is required",
            minLength:{value:8,message:"Password should have minimum length of 8"}, 
            pattern:{value:/[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,message:"Password must contain at least one letter and number"}})}
            />
            {errors.password && <p>{errors.password.message}</p>}
          <br/>
          <br/>
          <input
        name="confirm"
        placeholder = "Confirm Password"
        type="password"
        ref={register({
          validate: value =>
            value === password.current
        })}
      />
      {errors.confirm && <p>The passwords do not match</p>}
      <br/>
      <br/>
      <button type = "submit">Sign Up</button>
        </form>
      );

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
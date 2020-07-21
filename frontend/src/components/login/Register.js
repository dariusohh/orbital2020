import React, { useRef } from 'react';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'; 
import {useForm} from "react-hook-form";
import axios from 'axios';
import GridLoader from "react-spinners/ClipLoader"

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

function RegisterForm(props) {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  

  const onSubmit = e => {
      props.onAuth(e.username, 
          e.email,
          e.password,
          e.confirm)
          .then(() => {
            if (localStorage.getItem("username")) {
              window.location.href = "/profile"
            }
            })
    }

  let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p className = "error">Username/email already exist!</p>
        )
    }
      return (
        <form onSubmit = {handleSubmit(onSubmit)}>
        { !props.loading && 
                <div>    
            <h4 style={{float:'left',marginRight:'1%',marginLeft:'2%'}}>Loading </h4>
            <GridLoader size={30} css={{float:'left',marginBottom:"2%"}}/>
            </div>
            }
            {errorMessage}
          <input type="text" 
          placeholder="Username" 
          name="username" 
          ref={register({required:"Username is required"})} />
          {errors.username && <p className = "error">{errors.username.message}</p>}

          <input type="text" 
          placeholder="Email" 
          name="email" 
          ref={register({required:"Email is required", pattern:{value:/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Email is invalid"}})}/>
          {errors.email && <p className = "error">{errors.email.message}</p>}

          <input
            type = "password"
            placeholder="Password"
            name="password"
            ref={register({required:"Password is required",
            minLength:{value:8,message:"Password should have minimum length of 8"}, 
            })}
            />
            {errors.password && <p className = "error">{errors.password.message}</p>}
          <input
        name="confirm"
        placeholder = "Confirm Password"
        type="password"
        ref={register({
          validate: value =>
            value === password.current
        })}
      />
      {errors.confirm && <p className = "error">The passwords do not match</p>}
      <button type = "submit" disabled={props.loading}>Sign Up</button>
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
            return dispatch(actions.authSignup(username,email, password1,password2))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);

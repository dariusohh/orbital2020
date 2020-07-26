import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'; 
import GridLoader from "react-spinners/ClipLoader"
import {Redirect} from 'react-router-dom';
import startup_logo from "./startup_logo.png"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'teal',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register(props) {
  const classes = useStyles();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const confirm = e.target.confirm.value
      props.onAuth(username, 
          email,
          password,
          confirm)
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

    <div>
    {localStorage.getItem("username") && 
    <Redirect to="/expense"/>
    }
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={startup_logo} alt="Startup Logo" style={{width:"500px"}}/>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        { props.loading ? 
                <div>    
                <Typography component="h1" variant="h4">
                Loading
                </Typography>
            <GridLoader size={30}/>
            </div>
              :
              <div>    
                <Typography component="h1" variant="h4">
                Registration
                </Typography>
            </div>
            }
            {errorMessage}
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
                error = {(!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && email.length > 0)}
                helperText = {(!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && email.length > 0) ? "Invalid email address" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                error={password.length > 0 && password.length < 8}
                helperText={(password.length > 0 && password.length < 8) ? "Your password must be at least 8 characters long" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                id="confirm"
                autoComplete="current-password"
                onChange={e => setConfirm(e.target.value)}
                error={confirm.length > 0 && confirm !== password}
                helperText={(confirm.length > 0 && confirm !== password) ? "Your password does not match" : ""}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled = {
              (confirm.length > 0 && confirm !== password) || 
              (password.length > 0 && password.length < 8) || 
              (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && email.length > 0) || 
              username.length === 0 || 
              email.length === 0 ||
              password.length === 0 ||
              confirm.length === 0

            }
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body1">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Register);
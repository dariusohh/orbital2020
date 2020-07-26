import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth'
import GridLoader from "react-spinners/ClipLoader"
import {Redirect} from 'react-router-dom';
import './login.css';
import startup_logo from "./startup_logo.png"
import vc_logo from "./vc_logo.png"
import vc_background from "./vc_background.jpg"
import ReactPlayer from 'react-player'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "teal"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    props.onAuth(username, password)
    .then(() => {
      if (localStorage.getItem("username")) {
        window.location.href = "/expense";
    }
    })
}

let errorMessage = null;
if (props.error) {
    errorMessage = (
        <p className = "error">Invalid username or password. Please try again.</p>
    )
}

  return (

    <div>
    {localStorage.getItem("username") && 
    <Redirect to="/expense"/>
    }
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} align="center" style={{backgroundImage: `url(${vc_background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <ReactPlayer url="https://www.youtube.com/watch?v=ioNng23DkIM" style={{marginTop:"5%",marginBottom:"10%",width:"100%"}}/>
      <img src={vc_logo} alt="Venture Logo" style={{width:"70%"}}/>
      <div className='btn-cont'>
  <a className='btn' href='/listing'>
    View Start Ups to invest in
    <span className='line-1'></span>
    <span className='line-2'></span>
    <span className='line-3'></span>
    <span className='line-4'></span>
  </a>
</div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor:"#e8f4f8"}} align="center">
        <img src={startup_logo} alt="Startup Logo" style={{width:"500px",marginTop:"10%"}}/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
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
                Sign In
                </Typography>
            </div>
            }
            {errorMessage}
         
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoFocus
              autoComplete='off'
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link href="/register" variant="body1">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
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
      onAuth: (username, password) => {
          return dispatch(actions.authLogin(username,password))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
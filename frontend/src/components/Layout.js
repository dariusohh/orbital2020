import React from 'react';
import Dashboard from './Dashboard/Dashboard'
import vc_background from "./login/vc_background.jpg"
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class CustomLayout extends React.Component {
    render() {
    return (
        <div>

        { (!(['/register','/','/login','/listing'].includes(window.location.pathname) || window.location.pathname.startsWith('/profile/'))
            || (window.location.pathname === '/listing' && localStorage.getItem("username")) 
            || (window.location.pathname.startsWith('/profile/') && localStorage.getItem("username"))
            || (window.location.pathname === '/profile/'))
            ?
        <Dashboard child={this.props.children}/>
            :
            (
                (window.location.pathname.startsWith('/profile/') ? 
                <div style={{padding:" 40px 120px",backgroundImage: `url(${vc_background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                { !localStorage.getItem("username") && 
        <div className="sidenav">
        <a href="/" className="home">
        <Grid container direction="row" alignItems="center">
            <Grid item>
                Home  
            </Grid>
            <Grid item>
            <HomeIcon style={{marginLeft:"100%"}}/>
            </Grid>
            </Grid>
        </a>
        <a href="/listing" className="back">
        <Grid container direction="row" alignItems="center">
            <Grid item>
                Back&nbsp;
            </Grid>
            <Grid item>
            <ArrowBackIcon style={{marginLeft:"100%"}}/>
            </Grid>
            </Grid>
        </a>
        </div>
        }
                {this.props.children}
                </div>
                :
                <div>{this.props.children}</div>
            )
            )
            
        }
        </div>
    )
    }
}

export default CustomLayout;
  
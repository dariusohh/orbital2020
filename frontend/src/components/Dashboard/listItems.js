import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';

export const mainListItems = (
  <div>
  <a href={`/profile/${localStorage.getItem("username")}`} style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon style = {{color:"white"}}>
        <PersonIcon/>
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Profile" />
    </ListItem>
    </a>
    <a href = "/expense" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Tracking" />
    </ListItem>
    </a>
    <a href = "/import" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
        <ImportExportIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Import" />
    </ListItem>
    </a>
    <a href = "/visual" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Visual" />
    </ListItem>
    </a>
    <a href = "/predict" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
      <AssessmentIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="Predict"/>
    </ListItem>
    </a>
    <a href = "/listing" style={{color:"black",textDecoration:"none"}}>
    <ListItem button>
    <ListItemIcon style = {{color:"white"}}>
      <GroupIcon />
      </ListItemIcon>
      <ListItemText style = {{color:"#DCDCDC"}} primary="View other startups"/>
    </ListItem>
    </a>
    
  </div>
);
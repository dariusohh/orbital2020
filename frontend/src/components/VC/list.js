import React from 'react'
import axios from 'axios';
import './VC.css';
import List2 from './list2';
import { Row,Col}from 'react-grid-system';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import StarRatings from 'react-star-ratings';
import { Multiselect } from 'multiselect-react-dropdown';
import CancelIcon from '@material-ui/icons/Cancel';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class List extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            profile:[],
          rating:0,
          industry:[],
          x:["y"],
          filter:false
        };
      }
    componentDidMount() {
     
        axios.get('profile/')
        .then(res => {
            const x =[]
            const y =[]
            const z=[]
           res.data.map(y => x.push(y)).map(x => y.push(x.company_industry))
           .map(y => z.push(y.company_name))
           this.setState ({
               profile: x,
              
           })
        })
          
      }
    
       
    render() {
    return (
        <div className="background">
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
        </div>
        }
        <div className='header'> 
            <h1 style={{color:"lightgrey"}}>START-UP LISTING</h1>
        </div>
        <Divider style={{height:"12px",backgroundColor:"white",width:"60%",marginLeft:"20%"}}/>
 <div className="listing-bgr">
 <div>
            <Row>
                <Col xs={4}>
                <Grid container direction="row" alignItems="center">
            <Grid item>
            { this.state.filter ? 
           <Button
           aria-controls="customized-menu"
           aria-haspopup="true"
           variant="contained"
        
           onClick={() => this.setState({filter:false})}
         
         >
           ▼  Filter 
           </Button>
            :
            <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
 
            onClick={() => this.setState({filter:true})}
          
          >
               ▶   Filter 
        </Button>
        }
       
            </Grid>
            <br/>
            <Grid item>
            { (this.state.rating !== 0 || this.state.industry.length !== 0) && 
            <CancelIcon style={{color:"white",marginLeft:"2%"}} onClick={() => this.setState({rating:0,industry:[],filter:false})}/>
         
        }
            </Grid>
            </Grid>
        <br/>
        { this.state.filter &&
        <div style={{margin:"20px 50px",marginTop:"0px"}}>
        <h5 style={{color:"rgb(213, 219, 223)"}}>RATING:</h5>
        <StarRatings 
            rating= {this.state.rating}
            numberOfStars={5}
            changeRating={(num) => this.setState({rating:num})}
            starDimension="30px"
            starSpacing="10px"
            starRatedColor="GoldenRod"
            starHoverColor="gold"
            />
        </div>
        
        }
        </Col>
        { this.state.filter &&
        <Col xs={7}>
           <h5 style={{marginTop:"75px",color:"rgb(213, 219, 223)"}}> INDUSTRY: </h5>
        <Multiselect options={this.state.profile.map(x => x.company_industry)}
            onSelect= {lst => this.setState({industry:lst})}
            onRemove= {lst => this.setState({industry:lst})}
            isObject={false}
            avoidHighlightFirstOption
            selectedValues = {this.state.industry}
            />
        </Col>
        }
        </Row>
        </div>
       <List2 data = {this.state.profile.filter(x => x.show_public).filter(x => x.ratings === this.state.rating || this.state.rating === 0)
           .filter(x => this.state.industry.length === 0 || this.state.industry.includes(x.company_industry))
           }/>
 </div>
</div>
    )
  }
}
const mapStateToProps = state => {
    return {
        token: state.token
    }
  }
  
  export default connect(mapStateToProps)(List);

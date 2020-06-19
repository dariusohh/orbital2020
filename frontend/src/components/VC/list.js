import React from 'react'
import axios from 'axios';
import './VC.css';
import List2 from './list2';
import { Row,Col}from 'react-grid-system';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Multiselect } from 'multiselect-react-dropdown';


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
        <>
        <div className='header'> 
            <h1>Start-Up Listing</h1>
        </div>
        <br/>
        <div >
            <Row>
                <Col xs={4}>
        { this.state.filter ? 
        <button className= "filter-button" onClick={() => this.setState({filter:false})}>▼  Filter</button>
            :
        <button className= "filter-button" onClick={() => this.setState({filter:true})}>▶  Filter</button>
        }
        { (this.state.rating !== 0 || this.state.industry.length !== 0) && 
            <button className="reset-btn" onClick={() => this.setState({rating:0,industry:[],filter:false})}>Reset Filter</button>
        }
        <br/>
        { this.state.filter &&
        <div style={{margin:"20px 50px"}}>
        <h5>Rating:</h5>
        <StarRatings 
            rating= {this.state.rating}
            numberOfStars={5}
            changeRating={(num) => this.setState({rating:num})}
            starDimension="30px"
            starSpacing="10px"
            starRatedColor="DarkGoldenRod"
            starHoverColor="gold"
            />
        </div>
        
        }
        </Col>
        { this.state.filter &&
        <Col xs={7}>
           <h5 style={{marginTop:"47px"}}> Industry: </h5>
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
       
     <br/>
 <div >
       <List2 data = {this.state.profile.filter(x => x.show_public).filter(x => x.ratings === this.state.rating || this.state.rating === 0)
           .filter(x => this.state.industry.length === 0 || this.state.industry.includes(x.company_industry))
           }/>
 </div>
</>
    )
  }
}
const mapStateToProps = state => {
    return {
        token: state.token
    }
  }
  
  export default connect(mapStateToProps)(List);
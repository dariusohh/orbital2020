import React from 'react'
import axios from 'axios';
import './VC.css';
import List2 from './list2';
import { Row,Col}from 'react-grid-system';
import { connect } from 'react-redux';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class List extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            profile:[],
          low:0,
          high:5,
          x:["y"]
        };
      }
    componentDidMount() {
     
        axios.get('profile/')
        .then(res => {
            const x =[]
            const y =[]
            const z=[]
           var new_res = res.data.map(y => x.push(y)).map(x => y.push(x.company_industry))
           .map(y => z.push(y.company_name))
           this.setState ({
               profile: x,
              
           })
        })
          
      }
      handleChange = (e) => {
          this.setState ({
              low: e.target.value
          })
      }
      handlebig= (e) => {
        this.setState ({
            high: e.target.value
        })
    }
    // handlefilter = (e) =>
    // {
    //     const final=[]
    //     const y = this.state.x.map(e => final.push(e))
    //     this.setState({
    //         x : final.push(e.target.value)
    //     })
    // }
       
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
        <h5>Enter Rating's Upper range</h5>
        <input style={{width: '100px'}} type="number" onChange={this.handleChange}/>
        <h5>Enter Rating's lower range</h5>
        <input style={{width: '100px'}} type="number" onChange={this.handlebig}/>
        </Col>
        <Col xs={7}>
           <h5> Enter Desired Industry: </h5>
        <input style={{width: '700px'}} type="text"/>
        </Col>
        </Row>
        </div>
       
     <br/>
 <div >
       <List2 data = {this.state.profile.filter(x => x.ratings <= this.state.high && x.ratings >= this.state.low )}/>
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
import React from 'react'
import './VC.css';
import user from './user.png';
import StarRatings from 'react-star-ratings';
import {Link,BrowserRouter } from "react-router-dom"; 
export class StartUp extends React.Component{

    render() {

    return (
        <>
        <div className ="startup-list">
            <div className='side'> <img  className="pic" src={user} alt="dp"/>
            <h2>{ this.props.data.company_name}</h2>
            <br/>
             <h4 style={{color:"#2F4F4F"}}> {this.props.data.company_industry}</h4>
            <StarRatings
          rating={this.props.data.ratings}
          starRatedColor="GoldenRod"
          numberOfStars={5}
          name='rating'
          starDimension="30px"
          starSpacing="10px"/>
            </div>
            <div className="description-box">
            <div className="description">
                <h5 style={{textAlign:"center", fontSize:"25px"}}>Description</h5>
            <br/>
                <h6>{this.props.data.company_description}</h6>
                <br/>

            </div>
            <br/>
           <BrowserRouter>
            <Link to={`/profile/${this.props.data.username}`}>
            <button className="detail-btn">
              View details
            </button>
            </Link>
   </BrowserRouter>
            </div>
        </div>
        <div className='brr'></div>
        </>

    )
}

}
export default StartUp

import React from 'react'
import './VC.css';
import user from './user.png';
import StarRatings from 'react-star-ratings';
import { BrowserRouter } from "react-router-dom"; 


export class StartUp extends React.Component{

    render() {

    return (
        <>
        <div className ="startup-list">
            <div className='side'> <img  className="pic" src={user} alt="dp"/>
            <h3>{ this.props.data.company_name}</h3>
            <br/>
             <h5 style={{color:"#2F4F4F"}}> {this.props.data.company_industry}</h5>
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
                <h3 style={{textAlign:"center", color:"#2F4F4F",fontSize:"25px"}}>DESCRIPTION</h3>
            <br/>
                <p style={{fontsize:'12px'}}>{this.props.data.company_description}</p>
                <br/>

            </div>
            <br/>
           <BrowserRouter>
            <a href={`/profile/${this.props.data.username}`} className="button1">View Details</a>
   </BrowserRouter>
            </div>
        </div>
        <div className='brr'></div>
        </>

    )
}

}
export default StartUp

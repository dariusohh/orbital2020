import React from 'react'
import './VC.css';
import user from './user.png';
import { render } from 'react-dom';
import StarRatings from 'react-star-ratings';
import {Link } from "react-router-dom"; 
export class StartUp extends React.Component{

    render() {

    return (
        <>
        <div className ="list">
            <div className='side'> <img  className="pic" src={user}/>
            <h2>{ this.props.data.company_name}</h2></div>
            <h4>{this.props.data.company_industry}</h4>
            <br/>
            <div className="description">
                <h6>{this.props.data.company_description}</h6>
                <br/>
             
                <h4>Ratings</h4>
                <StarRatings
          rating={this.props.data.ratings}
          starRatedColor="DarkGoldenRod"
          numberOfStars={5}
          name='rating'
          starDimension="30px"
          starSpacing="10px"
          
        />  
            </div>
            <br/>
            <Link to={`/profile/${this.props.data.username}`}>
            <button className="Btn">
              More
            </button>
            </Link>
        </div>
        <div className='brr'></div>
        </>

    )
}

}
export default StartUp
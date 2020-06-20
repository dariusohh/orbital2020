import React from 'react';
import axios from 'axios';
import Spacer from 'react-add-space';
import './profile.css';
import StarRatings from 'react-star-ratings';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class About extends React.Component {

render() {

  const achievement_arr = this.props.data.achievement.split(",")
  const achievements = []
  for (const [index,value] of achievement_arr.entries()) {
    achievements.push(<li style={{fontSize:25}}>{value}</li>)
  }
  
    return (
        <>
        <div className="header-7">What do we do?</div>
        <br/>
        <p style={{fontSize:"22px"}}>{this.props.data.company_description}</p>
        <Spacer amount={10}/>
        <div className="header-7">Company's Achievements</div>
    <div style={{height:"20px"}}/>
    {achievements}
    <Spacer amount={10}/>
        <div className="header-7">Ratings</div>
        <br/>
        <StarRatings
          rating={this.props.data.ratings}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
        />
        
        </>
    )
}

}



  
  export default About;
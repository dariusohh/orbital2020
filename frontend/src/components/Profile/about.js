import React from 'react';
import axios from 'axios';
import Spacer from 'react-add-space';
import './profile.css';
import StarRatings from 'react-star-ratings';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class About extends React.Component {
  
 


render() {

  
    return (
        <>
        <div>{this.props.data.company_description}</div>
        <Spacer amount={10} />
        <h1>Ratings</h1>
        <Spacer amount={10} />
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
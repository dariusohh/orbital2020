import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import Spacer from 'react-add-space';
import Text from 'react-text';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


export class Summary extends React.Component {

   
    
  render() {
   
   
  return (
    <>
    <div>
    <text style= {{fontSize:20, color:'DarkSlateGray'}}>
    Company's Achievement
    <p>{this.props.data.profile.achievement}</p>
    </text>
    </div>
    <Spacer amount={10} />
    <div>
    <text style= {{fontSize:20, color:'DarkSlateGray'}}>
    Ratings
    </text>
    </div>
 
        <Spacer amount={10} />
        <StarRatings
          rating={this.props.data.profile.ratings}
          starRatedColor="yellow"
          numberOfStars={5}
          starDimension="30px"
          name='rating'
        />

</>

    )
  }
}



  export default Summary;
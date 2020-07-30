import React from 'react';
import axios from 'axios';
import './profile.css';
import Target from './target';
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

export class  Graph extends React.Component {

  state = {
    predict:[]
}

// componentDidMount() {
//     setTimeout(() => 
//         axios.post('predict/',this.props.data.expense).then(res => {
//               this.setState({predict:res.data})
//           })
//       , 200);
//   }

render() {
    return (
      <div>
                <Target data={this.props.data}/>
 
      </div>
    )
}

}


export default Graph;



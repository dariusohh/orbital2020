import React from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export class Donut extends React.Component {
    render() {
        
    const use = 0
    if (this.props.length >0) {
        use = this.props.length
    }

  
    return (
    <>
     <Chart
              width={'500px'}
              height={"100px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Eat', 2],
                ['Eat', 2]
              ]}
              options={{
                backgroundColor: "transparent",
                title: "So, how was your day?",
                slices: {
                    0: {
                        color: 'transparent',
                        enableInteractivity: false
                    }
                },
                pieHole: 0.5,
                circumference: Math.PI,
                }
              }
            />
    </>
      
    )
}
}

export default Donut;
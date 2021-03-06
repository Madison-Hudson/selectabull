import React, { Component } from 'react';

import CanvasJSReact from '../assets/canvasjs.react';
import { CanvasJS } from '../assets/canvasjs.react';
import { CanvasJSChart} from '../assets/canvasjs.react';


class Results extends Component {
    formatData () {
        const data = [];
        for (const prop in this.props.traits) {
            data.push(this.props.traits[prop])
        }
        console.log(data);
        return data.sort();
    }
    render() {
        const milkData = this.formatData();
       
         const options = {
         animationEnabled: true,
         title:{
             text: "Calf's Projected Traits",
             fontFamily: "helvetica"
         },
         subtitles: [{
             text: "Based on 90% Reliability",
             fontFamily: "helvetica"
         }],
         axisY: {
             title: "",
             prefix: "",
             lineThickness: 1
         },
         data: [{
             type: "rangeBar",
             indexLabel: "{y[#index]}",
             yValueFormatString: "#,##0",
             dataPoints: [
       
                 { label: "Weight", y: [800, 2750] },
                 { label: "Height", y: [500, 3250] },
                 { label: "Milk Production (in Gallons/year)", y: milkData}
             ]
         }]
     }

            




     return (
     <div>
         <CanvasJSChart options = {options}
             /* onRef={ref => this.chart = ref} */
         />
         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
     </div>
     

            
    )
}
}

export default Results;
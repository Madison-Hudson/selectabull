import React, { Component } from 'react';

import CanvasJSReact from '../assets/canvasjs.react';
import { CanvasJS } from '../assets/canvasjs.react';
import { CanvasJSChart} from '../assets/canvasjs.react';


class Results extends Component {
    render() {
        
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
                 { label: "Calmness", y: [1450, 3550] },
                 { label: "Ease of Calving", y: [550, 3370] },
                 { label: "Weight", y: [800, 2750] },
                 { label: "Height", y: [500, 3250] },
                 { label: "Fat Content of Milk", y: [650, 3300] },
                 { label: "Protein Content of Milk", y: [550, 2100] },
                 { label: "Milk Production (in Gallons/year)", y: [1600, 2550] }
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
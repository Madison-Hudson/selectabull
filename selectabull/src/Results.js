var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Results extends Component {
	render() {
		<p>Hello World</p>
	}
};
// 		const options = {
// 			animationEnabled: true,
// 			title:{
// 				text: "Annual Fuel Cost of Vehicles",
// 				fontFamily: "helvetica"
// 			},
// 			subtitles: [{
// 				text: "Based on Vehicle Classes",
// 				fontFamily: "helvetica"
// 			}],
// 			axisY: {
// 				title: "Annual Fuel Cost",
// 				prefix: "$",
// 				lineThickness: 1
// 			},
// 			data: [{
// 				type: "rangeBar",
// 				indexLabel: "${y[#index]}",
// 				yValueFormatString: "#,##0",
// 				dataPoints: [
// 					{ label: "Minicompact Cars", y: [1450, 3550] },
// 					{ label: "Subcompact Cars", y: [550, 3370] },
// 					{ label: "Compact Cars", y: [800, 2750] },
// 					{ label: "Midsize Cars", y: [500, 3250] },
// 					{ label: "Large Cars", y: [650, 3300] },
// 					{ label: "Small Station Wagons", y: [550, 2100] },
// 					{ label: "Midsize Station Wagons", y: [1600, 2550] }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
module.exports = Results;                              
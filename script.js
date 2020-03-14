
window.onload = function () {


	// let {PythonShell} = require("/Users/Hadi/Desktop/website/node_modules/python-shell/index.js");
// console.log(PythonShell)
const button = document.getElementById('command');
button.addEventListener('click', function(e) {
	//command
});




var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	// title:{
	// 	text: "Simple Line Chart"
	// },
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520},
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 },
			{ y: 51 },
			{ y: 1 },
			{ y: 60 },
			{ y: 1000 },
			{ y: 510 },
			{ y: 51 },
			{ y: 1 }
		]
	}]
});
chart.render();

}
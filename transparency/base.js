function init () {
	drawChart()
}

function drawChart() {
	// Set the dimensions of the canvas / graph
		var	margin = {top: 30, right: 20, bottom: 30, left: 50},
			W = $('.chart').width();
			width = W - margin.left - margin.right,
			height = 600 - margin.top - margin.bottom;

		var parseDate = d3.time.format('%m/%d/%y').parse;

		// Set the ranges
        var x = d3.scale.ordinal()
            .domain(['June 2013', 'Dec. 2013', 'June 2014'])
            .rangeRoundBands([0, width], 1)
		var	y = d3.scale.linear().range([height, 0]);

		var color = d3.scale.category10();
		 
		// Define the axes
		var	xAxis = d3.svg.axis()
            .scale(x)
			.orient("bottom");
		 
		var	yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");
	
		var	svg = d3.select(".chart#fb")
			.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var xAxisG, yAxisG, dot, xLabel;
		 
		// Get the data
		d3.csv("fb-data.csv", function(error, data) {
			
			y.domain([
                0,
                15500
            ]);

			// Add the X Axis
			xAxisG = svg.append("g")		
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

            xLabel = xAxisG.append('text')
                .attr("transform", "translate(" + (width / 2) + " ," + margin.bottom + ")")
                .style("text-anchor", "middle")
                .text('Date');

			yAxisG = svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis)
                .append('text')
                    .attr('transform', 'rotate(-90)')
                    .attr('y', -50)
                    .attr('x', -height / 2)
                    .attr('dy', '.71em')
                    .style('text-anchor', 'middle')
                    .text('Requests for user data');
		 
            dot = svg.selectAll(".dot")
                .data(data)
              .enter().append("circle")
                .attr("class", function(d) {
                    return 'dot ' + d.Country
                })
                .attr("r", 6)
                .attr("cx", function(d) { 
                	return x(d.date); })
                .attr("cy", function(d) { 
                	var num = d['Requests for User Data'].replace(',', '').replace('"', '');
                	var parsed = parseInt(num);
                	return y(parseInt(num));
                })
                .attr("data-requests", function(d) {return d['Requests for User Data']})
                .attr("data-accts", function(d) {return d['User Accounts Referenced']})
                .attr("data-pct", function(d) {return d['Percentage of requests where some data produced']});
           
		});

	
}



init();
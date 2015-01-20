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
            .rangeRoundBands([0, width], 1)
            .domain(['Dec. 2009', 'June 2010', 'Dec. 2010', 'June 2011', 'Dec. 2011', 'June 2012', 'Dec. 2012', 'June 2013', 'Dec. 2013', 'June 2014']);
		var	y = d3.scale.linear().range([height, 0])
			.domain([
	                0,
	                15500
	            ]);

		// Define the axes
		var	yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var	xAxis = d3.svg.axis()
            .scale(x)
			.orient("bottom");

		var	svg = d3.select(".chart")
			.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var xAxisG, yAxisG, dot, xLabel;
		 
		// Get the data
		d3.csv("data/gg-data.csv", function(error, data) {
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
                	var site;
                	if (d['GG User Data Requests'] !== '') {
                		site = 'gg'
                	} else {
                		site = 'fb'
                	}
                    return 'dot ' + site;
                })
                .attr("r", 6)
                .attr("cx", function(d) { 
                	return x(d['Period Ending']); })
                .attr("cy", function(d) { 
                	var num;
                	if (d['GG User Data Requests'] !== '') {
                		num = d['GG User Data Requests'].replace(',', '').replace('"', '');
                	} else if (d['FB Requests for User Data'] !== '') {
                		num = d['FB Requests for User Data'].replace(',', '').replace('"', '');
                	}
                	var parsed = parseInt(num);
	                return y(parseInt(num));
                })
                .attr("data-country", function(d) {
                	return d.Country
                })
                .attr("data-process", function(d) {
                	if (d['GG Legal Process'] !== '') {
                		return d['GG Legal Process']
                	} else {
                		return null
                	}
                })
                .attr("data-accts", function(d) {
                	if (d['GG Users/Accounts Specified'] !== '') {
                		return d['GG Users/Accounts Specified']
                	} else if (d['FB User Accounts Referenced']!== '') {
                		return d['FB User Accounts Referenced']
                	} else {
                		return null
                	}
                })
                .attr("data-pct", function(d) {
                	if (d['GG Percentage of requests where some data produced'] !== '') {
                		return d['GG Percentage of requests where some data produced']
                	} else if (d['FB Percentage of requests where some data produced'] !== '') {
                		return d['FB Percentage of requests where some data produced']
                	} else {
                		return null
                	}
                })
                .style("opacity", 0.6)
                .on("mouseover", function(d){
                    d3.select(this).classed('active', true);
                    this.parentNode.appendChild(this);
                    d3.selectAll('.dot').style('opacity',0.2)
                    var country;
                    if (d.Country === 'United States' || 'United Kingdom' || 'United Arab Emirates' || 'Philippines' || 'Netherlands' || 'Maldives' || 'Dominican Republic' || 'Czech Republic') {
                    	country = 'the ' + d.Country
                    } else {
                    	country = d.Country
                    }

                    var select = $('.dot[data-country="' + d.Country + '"]');
                    d3.selectAll(select).classed('active', true).style('opacity',0.8);
                    $('p.country strong').html('in ' + d.Country)

	            })
	            .on("mouseout", function(d){ 
                    d3.selectAll('.dot').style('opacity',0.6).classed('active', false);
                    $('p.country strong').html('across the world')
	            });
		});
	
}



init();
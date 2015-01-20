function init () {
	drawChart()
}

function drawChart() {
	// SET GRAPH DIMENSIONS
	var	margin = {top: 30, right: 20, bottom: 30, left: 50},
		W = $(".chart").width();
		width = W - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;

	// SET AXES RANGES
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], 1)
        .domain(["Dec. '09", "June '10", "Dec. '10", "June '11", "Dec. '11", "June '12", "Dec. '12", "June '13", "Dec. '13", "June '14"]);
	var	y = d3.scale.linear().range([height, 0])
		.domain([
                0,
                15500
            ]);

	// DEFINE AXES
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

    var xAxisG, yAxisG, dot;
	 
	// GET DATA
	d3.csv("data/gg-data.csv", function(error, data) {
		// ADD X-AXIS
		xAxisG = svg.append("g")		
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		// ADD Y-AXIS
        yAxisG = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
	 
        // MAKE DOTS ON SCATTERPLOT
        dot = svg.selectAll(".dot")
            .data(data)
          .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 6)
            .style("opacity", 0.6)
            // X POSITION
            .attr("cx", function(d) { 
            	return x(d["Period Ending"]); })
            // Y POSITION
            .attr("cy", function(d) { 
            	var num;
            	if (d["GG User Data Requests"] !== "") {
            		num = d["GG User Data Requests"];
            	} else if (d["FB Requests for User Data"] !== "") {
            		num = d["FB Requests for User Data"];
            	}
            	var parsed = parseInt(num);
                return y(parseInt(num));
            })
            .attr("data-site", function(d) {
                var site;
                if (d["GG User Data Requests"] !== "") {
                    site = "Google"
                } else {
                    site = "Facebook"
                }
                return site;
            })
            .attr("data-country", function(d) {
            	return d.Country
            })
            .attr("data-requests", function(d) {
                if (d["GG User Data Requests"] !== "") {
                    return d["GG User Data Requests"]
                } else if (d["FB Requests for User Data"] !== "") {
                    return d["FB Requests for User Data"]
                }
            })
            // .attr("data-accts", function(d) {
            // 	if (d["GG Users/Accounts Specified"] !== ") {
            // 		return d["GG Users/Accounts Specified"]
            // 	} else if (d["FB User Accounts Referenced"]!== ") {
            // 		return d["FB User Accounts Referenced"]
            // 	} else {
            // 		return null
            // 	}
            // })

            // ADDING INTERACTION
            .on("mouseover", function(d){
                d3.select(this).classed("active", true);
                this.parentNode.appendChild(this);
                d3.selectAll(".dot").style("opacity",0.2)
                
                var country;

                // FORMATTING COUNTRY
                if (d.Country === "United States" || d.Country === "United Kingdom" || d.Country === "United Arab Emirates" || d.Country === "Philippines" || d.Country === "Netherlands" || d.Country === "Maldives" || d.Country === "Dominican Republic" || d.Country === "Czech Republic") {
                	country = "the " + d.Country
                } else {
                	country = d.Country
                }

                var select = $(".dot[data-country='" + d.Country + "']");
                // MAKING DOTS ACTIVE
                d3.selectAll(select).classed("active", true).style("opacity",0.8);
                // PUTTING ACTIVE COUNTRY IN CHART TITLE
                $("p.country strong").html("in " + country);

                // FORMATTING DOT DATA
                d.requests_formatted = $(this).data("requests").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                d.site = $(this).data("site");   
                if ($(this).data("accts") !== undefined) {
                    d.accts_formatted = $(this).data("accts").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")    
                };

                // GRABBING ICANHAZ TEMPLATE
                var tt = ich.tooltip(d);
                // GETTING POSITION OF ACTIVE DOT
                var offset = $(this).offset();
                var width = $(this).outerWidth();
                // POSITION TOOLTIP
                $("div.tooltip-wrap")
                    .html(tt)
                    .css({top:offset.top, left:offset.left + width + 10})
                   .show();
            })
            // HIDING TOOLTIP ON MOUSEOUT
            .on("mouseout", function(d){
                // MAKING ALL DOTS INACTIVE 
                d3.selectAll(".dot").style("opacity",0.6).classed("active", false);
                $("p.country strong").html("across the world")
                $("div.tooltip-wrap").hide();
            });
	});

    // RESIZING CHART FUNCTION
	var chartResize = function() {
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        W = $(".chart").width();
        width = W - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;

        x.rangeRoundBands([0, width], 1);

        svg.attr("width", width + margin.left + margin.right)

        xAxisG
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        
        yAxisG
            .call(yAxis);

        dot.attr("cx", function(d) { return x(d["Period Ending"]); })
    };

    // CALLING CHART RESIZE WITH UNDERSCORE
    var lazyResize = _.debounce(chartResize, 100);
    d3.select(window).on("resize", lazyResize);

    // CALLING EVENT LISTENERS
    eventListeners();
	
}

function eventListeners() {
    // INTERACTIVITY FOR CUES IN INTRO TEXT
    $("span.us").on("mouseover", function(){
        d3.selectAll($(".dot[data-country='United States']")).classed("active", true).style("opacity",0.8);
    }).on("mouseout", function(){
        d3.selectAll(".dot").style("opacity",0.6).classed("active", false);
    });

    $("p.intro span.Google").on("mouseover", function(){
        d3.selectAll($(".dot[data-site='Google']")).classed("active", true).style("opacity",0.8);
    }).on("mouseout", function(){
        d3.selectAll(".dot").style("opacity",0.6).classed("active", false);
    });

    $("p.intro span.Facebook").on("mouseover", function(){
        d3.selectAll($(".dot[data-site='Facebook']")).classed("active", true).style("opacity",0.8);
    }).on("mouseout", function(){
        d3.selectAll(".dot").style("opacity",0.6).classed("active", false);
    });
}



init();
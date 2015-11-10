

	data = 		[
				{"name":"Maria","age":30},
				{"name":"Maria","age":50},
				{"name":"Maria","age":12},
				{"name":"Maria","age":25},
				{"name":"Maria","age":12},
				{"name":"Maria","age":45},
				{"name":"Maria","age":68},
				{"name":"Maria","age":98},
				{"name":"Maria","age":15},
				{"name":"Maria","age":35},
				{"name":"Maria","age":56},
				{"name":"Maria","age":74},
				{"name":"Maria","age":85},
				{"name":"Maria","age":65},
				{"name":"Maria","age":32},
				{"name":"Maria","age":12},
				{"name":"Maria","age":19},
				{"name":"Maria","age":78},
				{"name":"Maria","age":98},
				{"name":"Maria","age":65},
				{"name":"Maria","age":16},
				{"name":"Maria","age":84},
				{"name":"Maria","age":46},
				{"name":"Maria","age":45},
				{"name":"Maria","age":56},
				{"name":"Maria","age":58},
				{"name":"Maria","age":9},
				{"name":"Maria","age":30},
				{"name":"Maria","age":50},
				{"name":"Maria","age":12},
				{"name":"Maria","age":25},
				{"name":"Maria","age":12},
				{"name":"Maria","age":45},
				{"name":"Maria","age":68},
				{"name":"Maria","age":98},
				{"name":"Maria","age":15},
				{"name":"Maria","age":35},
				{"name":"Maria","age":56},
				{"name":"Maria","age":74},
				{"name":"Maria","age":85},
				{"name":"Maria","age":65},
				{"name":"Maria","age":32},
				{"name":"Maria","age":12},
				{"name":"Maria","age":19},
				{"name":"Maria","age":78},
				{"name":"Maria","age":98},
				{"name":"Maria","age":65},
				{"name":"Maria","age":16},
				{"name":"Maria","age":84},
				{"name":"Maria","age":46},
				{"name":"Maria","age":45},
				{"name":"Maria","age":56},
				{"name":"Maria","age":58},
				{"name":"Maria","age":9},
				{"name":"Maria","age":65},
				{"name":"Maria","age":16},
				{"name":"Maria","age":84},
				{"name":"Maria","age":46},
				{"name":"Maria","age":45},
				{"name":"Maria","age":56},
				{"name":"Maria","age":58},
				{"name":"Maria","age":9},
				{"name":"Maria","age":1},
				{"name":"Maria","age":7}
				]

		
		var width = 500
			height = 500
			pading = 50;
		
		
		var map = data.map(function (i) { return parseInt(i.age); })
		
		
		var histogram = d3.layout.histogram()
			.bins(6)
			(map)
			
		var y = d3.scale.linear()
			.domain([0,d3.max(histogram.map(function (i) {return i.length;} ))])
			.range([0,height]);
			
		var x = d3.scale.linear()
			.domain([0,d3.max(map)])
			.range([0,width]);
			
		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");
			
		var canvas = d3.select("div#example2").append("svg")
			.attr("width", width+ pading)
			.attr("height", height + pading)
			.append("g")
				.attr("transform" ,"translate(20,0)");
			
		var group = canvas.append("g")
			.attr("transform", "translate(0," +height + ")")
			.call(xAxis);

		var bars = canvas.selectAll(".bar")
			.data(histogram)
			.enter()
			.append("g")
			
		bars.append("rect")
			.attr("fill", "steelblue")
			.attr("x", function(d) {return x(d.x);})
			.attr("y", function(d) {return 500 - y(d.y);})
			.attr("width", function (d) {return x(d.dx);})
			.attr("height", function(d) {return y(d.y);})
		
		bars.append("text")
			.attr("text.anchor", "middle")
			.attr("x", function(d) { return x(d.x);})
			.attr("y", function(d) { return (500 - y(d.y)); })
			.attr("dy", "20px")
			.attr("dx", function(d) { return (width/12);})
			.text(function(d) { return d.y;})
			.attr("fill", "black")
			;
			

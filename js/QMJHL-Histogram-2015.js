
var margin = {top: 40, right: 30, bottom: 55, left: 60},
	width = 500 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;
	
var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);
	
var y = d3.scale.linear()
	.range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function(d) {
		return "<strong> Frequency: </strong> <span style= 'color:brown'>" + d.Player + "</span>";
	})
		
var svg = d3.select("#example").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + ","  + margin.top +  ")");
		
svg.call(tip);


d3.csv("/Data/Clean-QMJHL-Data-2015.csv", type, function(error, data) {
	if (error) throw error;

	x.domain(data.map(function(d) {  return   d.Month  ;  }));
	y.domain([0, d3.max(data, function (d) { return d.Player ; }  )]) ;
	
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .append("text")
	  .text("Birth Month")
	  .attr("y", 40)
	  .attr("x", 150)
	  ;

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
	  .attr("x", -120)
      //.attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of Players");
			
	svg.selectAll(".bar")
			.data(data)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d) { return x(d.Month); })
			.attr("width", x.rangeBand())
			.attr("y", function(d)  { return y(d.Player ) ; })
			.attr("height", function(d) { return height - y(d.Player); })
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide);;	

	svg.select(".x.axis")
	  .selectAll("text")
	  .style("font-size","15px"); //To change the font size of texts	

	svg.select(".y.axis")
	  .selectAll("text")
	  .style("font-size","15px"); //To change the font size of texts		  
});

function type(d) {
	d.Player = +d.Player;
	return d;
}
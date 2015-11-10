		d3.csv("CleanOHLdata.csv", function (data) {
		
			var canvas = d3.select("div#example3").append("svg")
				.attr("width", 500)
				.attr("height", 500)
				
			canvas.select("rect")
				.data(data)
				.enter()
					.append("rect")
					.attr("width", function (d) { return d.Wgt; } )
					.attr("height", 50)
					.attr("y", function (d, i)  {return i * 2; } )
					.attr("fill", "blue")
				
		})
	
---
layout: post
title:  "OHL Relative Age Effect"
date:   2015-10-28 00:23:37
categories: jekyll update
---
<style>

.bar {
  fill: steelblue;
}

.bar:hover {
	fill: brown;
}

.axis {
	font: 10px sans-serif;
}

.axis path,
.axis line {
	fill: none;
	stroke: #000;
	shape-rendering: crispEdges;
}

.x.axis path {
	display: none;
}

.d3-tip {
	line-height: 1;
	font-weight: bold;
	padding: 10px;
	background: rgba(0,0,0,0.8);
	color: #fff;
	border-radius: 2px;
}

/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
	box-sizing: border-box;
	display: inline;
	font-size: 8px;
	width = 100%;
	line-height: 1;
	color: rgba(0,0,0, 0.8);
	content: "\25BC";
	position: absolute;
	text-align: center;	
}

/* Style northward tooltips differently */
d3.-tip.n:after {
	margin: -1px 0 0 0;
	top: 100%;
	left: 0;
}
</style>

Fifteen year old hockey players who are born in the first half of the year (January - June) tend to be drafted to the Ontario Hockey League (OHL) more often than players born later in the year (July - December).  This is known as the Relative Age Effect ([RAE](https://en.wikipedia.org/wiki/Relative_age_effect)).

Below is a graph of this phenomenon.  The x axis has every month of the year.  The y axis is the count of players born within each month.  Can you see any pattern in the data?  Months in the first half of the year tend to have more players than later months.  November and December have especially few players.  Each month is expected to have about 24 selections.

<div id="example" font-size="40px"></div>

This data comes from the 2015 OHL priority selection from held in April (Source: [http://ohl.rinknetcloud.com/Draft49/] ).  These players were born in 1999*. 292 players were drafted.  193 of the players were drafted in the first half of the year.  99 were drafted in the second half of the year.  A Chi-Squared test reject the null hypothesis that the birthdate has no effect on whether a player is drafted or not. 

Next we break the year into quarters (Jan-Mar, Apr-Jun, Jul-Sep, and Oct-Dec).  The first, second, third, and forth quarters selected 117, 76, 58, and 33 players respectively. Again, these quarters are statistically different from the expected uniform distribution.

These players come from Ontario and the US (between the Mississippi and New England). I previously looked at RAE for the WHL (Western Hockey League).  You can check that out here.  RAE was more pronounced in the WHL than the OHL.

The bar chart was inspired by (or obviously ripped off) Mike Bostock's d3 bar chart tutorial: [http://bost.ocks.org/mike/bar/]

\* Ten drafted players were born in 1998 and 1997.  These players are excluded.  


<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script src="{{site.basurl}}/js/OHL-Histogram-2015.js"></script>


[http://bost.ocks.org/mike/bar/]: http://bost.ocks.org/mike/bar/
[http://ohl.rinknetcloud.com/Draft49/]: http://ohl.rinknetcloud.com/Draft49/




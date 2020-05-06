---
layout: post
title:  "WHL Relative Age Effect"
date:   2015-05-13 12:23:37
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

Fifteen-year-old hockey players born in January are seven and a half times more likely to be drafted to Juniors than players born in October, November, or December. This insane statistic came out of the recent Western Hockey League (WHL) Bantam Draft (recently featured on [Deadspin](http://deadspin.com/the-future-of-hockey-is-a-bunch-of-kids-with-irritating-1702933861)). Of the 228 players drafted, 53 (23%) were born in January. If birth month had no effect on whether a player was drafted or not then each month would have about 19 players drafted. Instead the results are heavily skewed toward the beginning of the year.

<div id="example" font-size="40px"></div>

The x axis is birth month.  The y axis is the sum of players born in each month.

Malcom Gladwell popularized a theory which explains why NHL players are more likely to be born early in the year (Jan, Feb, and Mar) than later in the year (Oct, Nov, and Dec).  The theory is that players born early in the year tend to be bigger and more skilled than relatively younger player born later in the year.  This effect is largest for young players.  Fifteen-year-olds born in January are 5% older* than players born in October, November, or December.  That means they are 5% bigger, strong, faster, and theoretically 5% more experienced.  The relative age effect will be exasperated by the recent draft.  Players drafted to the WHL will have access to better coaching and better competition than players who were not drafted.  This will give them a better chance of later making the NHL.  This phenomenon is known as the Relative Age Effect ([RAE](https://en.wikipedia.org/wiki/Relative_age_effect)). This is only one draft in one league.  For more sides to the story check out: [QuantHockey](http://www.quanthockey.com/nhl/birth-month-totals/nhl-players-career-stats.html), [Wired](http://www.wired.com/2013/03/nhl-selection-bias/), and [This Paper](http://www.ncbi.nlm.nih.gov/pubmed/24869606).

\* Days alive: 365 * 15 = 5475  
Days older if born in January:  30.5 * 9 = 275  
275 / 5475 = 5%  

The graphic was updated from a png image to a d3 object with Mike Bostock's d3 bar chart tutorial: [http://bost.ocks.org/mike/bar/]

[http://bost.ocks.org/mike/bar/]: http://bost.ocks.org/mike/bar/
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script src="{{site.basurl}}/js/WHL-Histogram-2015.js"></script>

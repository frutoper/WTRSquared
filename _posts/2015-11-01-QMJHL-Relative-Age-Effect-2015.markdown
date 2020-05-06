---
layout: post
title:  "QMJHL Relative Age Effect"
date:   2015-11-01 12:23:37
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

This is the third post about the Relative Age Effect ([RAE](https://en.wikipedia.org/wiki/Relative_age_effect)) covering the three Major Junior hockey leagues.  For more background on the subject review my previous posts on the [OHL](http://whatsthersquared.com/jekyll/update/2015/10/28/OHL-Relative-Age-Effect-2015.html) and [WHL](http://whatsthersquared.com/jekyll/update/2015/05/13/WHL-Relative-Age-Effect-2015.html).  Here the focus is the Quebec Major Junior Hockey League (QMJHL). 

Data from the QMJHL draft in June 2015 once again reveals a striking pattern.  Players born early in the year tend to be drafted more often than players born toward the end of the year.  If the month a player was born had no effect on the likelihood that they were drafted than we would expect each month to have around 15 or 16 players drafted.  The first five months of the year each have more than 16 players drafted.  The last 5 months all have less than 10 players drafted.  Mouse over any month to see the total.

<div id="example" font-size="40px"></div>

The source of this data is the QMJHL official site. (Source: [http://theqmjhl.ca/draft/2015] ).  
Only players born in the year 1999 are included in this analysis.  Of the 187 players in the analysis 133 or 71% of the players were born in the first half of the year.  The other 29% were born in the second half of the year.  

Once again I use a Chi-Squared test to confirm that the two groups are different than a uniform distribution.  

To find out how to make a similar bar chart in d3 check out Mike Bostock's tutorial: [http://bost.ocks.org/mike/bar/]


<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script src="{{site.basurl}}/js/QMJHL-Histogram-2015.js"></script>

[http://bost.ocks.org/mike/bar/]: http://bost.ocks.org/mike/bar/
[http://theqmjhl.ca/draft/2015]: http://theqmjhl.ca/draft/2015

[OHL]:	{{site.basurl}}/_posts/2015-10-28-OHL-Relative-Age-Effect-2015.markdown"
[WHL]:	{{site.basurl}}/_posts/2015-10-10-WHL-Relative-Age-Effect-2015.markdown"

---
layout: post
title:  "Relative Age Effect in Canadian Major Junior Hockey"
date:   2015-11-02 12:23:37
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

This is the final post about the Relative Age Effect ([RAE](https://en.wikipedia.org/wiki/Relative_age_effect)) in the three Major Junior hockey leagues for the year 2015.  For more background on the subject review my previous posts on the [WHL](http://whatsthersquared.com/jekyll/update/2015/05/13/WHL-Relative-Age-Effect-2015.html), [OHL](http://whatsthersquared.com/jekyll/update/2015/10/28/OHL-Relative-Age-Effect-2015.html), and [QMJHL](http://whatsthersquared.com/jekyll/update/2015/11/01/QMJHL-Relative-Age-Effect-2015.html).  Here I combine all the leagues to see the effect across all of major junior hockey.

The Realative Age Effect is most apparent when we consider all the leagues together. Consider the bar chart below. Clearly players born early in the year are more likely to be drafted to Canadian Major Junior hockey than players born later in the year. 

<div id="example" font-size="40px"></div>

707 players were drafted in 2015 (Only players born in 1999 are considered).  If birth month wasn't a factor in whether or not a player is drafted then we would expect each month to have around 59 players. Instead, 121 players are born in January while only 16 players were born in December. 

If month of birth did not have any effect than we would expect the first have of the year to have about the same number of draft picks as the second half.  We observed that 72% of players were born in the first half of the year while only 28% were born in the second half of the year. 

Once again I use a Chi-Squared test to confirm that the results are different than a uniform distribution.  We are able to reject the idea that this pattern happend as a result of random chance.  This chart and statistical test clearly indicate the presents of the Realative Age Effect in Canadian Major Junior Hockey in the 2015 draft.

The sources of this data are the Major Junior draft sites. (QMJHL: [http://theqmjhl.ca/draft/2015], OHL: [http://ohl.rinknetcloud.com/Draft49](http://ohl.rinknetcloud.com/Draft49), WHL: [http://www.whl.ca/draft/2015#round-1](http://www.whl.ca/draft/2015#round-1)).  

To make a similar bar chart follow Mike Bostock's d3 tutorial: [http://bost.ocks.org/mike/bar/]


<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script src="{{site.basurl}}/js/CMJ-Histogram-2015.js"></script>


[http://bost.ocks.org/mike/bar/]: http://bost.ocks.org/mike/bar/
[http://theqmjhl.ca/draft/2015]: http://theqmjhl.ca/draft/2015

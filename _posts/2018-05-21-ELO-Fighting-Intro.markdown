---
layout: post
title:  "Ryan Reaves, the Best Fighter In the NHL"
date:   2018-05-21 00:23:37
categories: jekyll update
---


HockeyFights.com was kind enough to give me have data to in an attempt to create a system to rate hockey fighters. This system is a unique combination of the eye test and a statistic ranking system developed for Chess. The system is called ELO and it is widely used by FiveThirtyEight.com. 

Hockey fights are pretty chaotic and don’t have official judges that declare a winner. How do we know who wins a fight? Well, the thousands of fans of HockeyFights.com vote on fights. On HockeyFights.com you can vote that either player won the fight, or that the fight was a tie. I use that information as the input to the ELO rating algorithm.

Here is a quick introduction to ELO. For a more detailed look visit FiveThirtyEight.com. The core of the rating system is pretty simple. Every fighter starts with a baseline rating of 1200. If you win a fight, your rating goes up. If you lose a fight your rating goes down. To get a better understanding lets consider two fighters Ryan and Steve. If Ryan fights Steve and wins, Ryan’s ELO rating will increase and Steve’s  ELO will decrease after the fight. The size of the change is a combination of two factors. Factor 1, how convincing of a win was it; Factor 2, both fighters previous ELO rating.

We can determine how convincing Ryan’s win was by looking at the percent of fans that believe Ryan won the fight. If 100% of the voters believe Ryan won, his ELO will increase dramatically. If only 51% of fans believe Ryan won, his ELO will only increase a little bit. Steve’s ELO rating always falls the same number of points that Ryan gained. If Ryan gains a lot of ELO points, Steve loses a lot. If Ryan only increases his ELO a little bit, then Steve’s ELO only goes down a little bit.

The other factor determining the size of the change in ELO is the rating of the fighter before the fight. If Ryan is a machine that routinely takes on skilled fighters and wins, he will have one of the highest ELO ratings in the league: 1285. Steve on the other hand, loses almost every fight he’s dragged into. His ELO rating is a dismal 1146. So we can guess that Ryan would beat the crap out of Steve. So in this case, if Ryan were to beat up Steve, this would be expected. So Ryan ELO rating would only go up by a little bit. And Steve’s rating would go down an equally small amount. Now, if Steve were to win the fight, his ELO rating would skyrocket, and Ryans rating would plummet. 

This system combines the Eye Test of thousands of hockey fans with the statistics of rating system trusted by FiveThirtyEight.  Here are the top 25 fighters from from 2014-2017 (end 2017 season):

| Rank | Fighter         | Final 2017 ELO Rating |
|------|-----------------|-----------------------|
| 1    | Ryan Reaves     | 1285                  |
| 2    | Micheal Ferland | 1283                  |
| 3    | Matt Martin     | 1283                  |
| 4    | Cody McLeod     | 1278                  |
| 5    | Marcus Foligno  | 1269                  |
| 6    | Jarome Iginla   | 1266                  |
| 7    | Chris Stewart   | 1263                  |
| 8    | Adam McQuaid    | 1258                  |
| 9    | Milan Lucic     | 1256                  |
| 10   | Jordin Tootoo   | 1249                  |
| 11   | Erik Gudbranson | 1248                  |
| 12   | Luke Gazdic     | 1243                  |
| 13   | Tom Sestito     | 1243                  |
| 14   | Micheal Haley   | 1242                  |
| 15   | Jamie Benn      | 1242                  |
| 16   | Anthony Peluso  | 1241                  |
| 17   | Brian Boyle     | 1240                  |
| 18   | Deryk Engelland | 1239                  |
| 19   | Clayton Stoner  | 1238                  |
| 20   | Nick Foligno    | 1238                  |
| 21   | Mike Fisher     | 1237                  |
| 22   | Josh Gorges     | 1237                  |
| 23   | Jamie Oleksiak  | 1237                  |
| 24   | Chris Neil      | 1236                  |
| 25   | Dylan McIlrath  | 1236                  |



One note about the list, you need to fight to increase you rating. So although a guy like Chara might still be one of the toughest guys in the leauge, because he hasn't been fighting he doesn't make the list.

Below is a chart of ELO over the 2016-17 season. Ryan Reaves is highlighted in Blue. Ryan started the season above average because of his record from previous seasons. Go to HockeyFights.com to check out Reave's [2016-17 Fight Card](http://www.hockeyfights.com/players/1602/fightcard/reg2017). Steve Ott is highlighted in Red. He started the season below average then gradually fell to end up the third worst fighter in the league. 



<a href="www.HockeyFights.com/" rel="ELO Graphic">![alt tag](/Png/ggplot_elo_2016_17.png)</a>





Finally, here is a lis of the Worst Fighters at the end of the 2017 season:

| Rank – Worst | Fighter                  | Final 2017 ELO Rating |
|--------------|--------------------------|-----------------------|
| 1            | Brandon Manning          | 1125                  |
| 2            | Austin Watson            | 1145                  |
| 3            | Steve Ott                | 1146                  |
| 4            | Bobby Farnham            | 1146                  |
| 5            | Brayden McNabb           | 1148                  |
| 6            | Curtis McKenzie          | 1156                  |
| 7            | Roman Polak              | 1156                  |
| 8            | Gregory Campbell         | 1158                  |
| 9            | Matt Hendricks           | 1158                  |
| 10           | Ryan White               | 1159                  |
| 11           | Cedric Paquette          | 1161                  |
| 12           | Scott Wilson             | 1161                  |
| 13           | Chris Thorburn           | 1162                  |
| 14           | Andrew Desjardins        | 1165                  |
| 15           | AntoineRoussel           | 1165                  |
| 16           | Scott Hartnell           | 1166                  |
| 17           | Brandon Dubinsky         | 1166                  |
| 18           | Joseph LaBate            | 1167                  |
| 19           | Jimmy Hayes              | 1168                  |
| 20           | Nazem Kadri              | 1168                  |
| 21           | Pierre-Edouard Bellemare | 1168                  |
| 22           | Ian Cole                 | 1169                  |
| 23           | Michael Raffl            | 1169                  |
| 24           | Adam Larsson             | 1170                  |
| 25           | Mark Stuart              | 1171                  |




/**
 * Main JS file for project.
 */

// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({ });

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected == "all"){
$(".slide").show();
} else if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

d3.json('./data/weeks.json', function(error, dataLoad) {

	var data = dataLoad.weeks;

	function spillWeeks(dataMain,container,year,scope) {

		   d3.helper = {};

    		d3.helper.tooltip = function(accessor){
    		    return function(selection){
    		        var tooltipDiv;
    		        var bodyNode = d3.select('body').node();
    		        selection.on("mouseover", function(d, i){
    		            // Clean up lost tooltips
    		            d3.select('body').selectAll('div.tooltip').remove();
    		            // Append tooltip
    		            tooltipDiv = d3.select('body').append('div').attr('class', scope + ' tooltip');
    		            var absoluteMousePos = d3.mouse(bodyNode);
    		            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
    		                .style('top', (absoluteMousePos[1] - 15)+'px')
    		                .style('position', 'absolute') 
    		                .style('z-index', 1001);
    		            // Add text using the accessor function
    		            var tooltipText = accessor(d, i) || '';
    		            // Crop text arbitrarily
    		            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
    		            //    .html(tooltipText);
    		        })
    		        .on('mousemove', function(d, i) {
    		            // Move tooltip
    		            var absoluteMousePos = d3.mouse(bodyNode);
    		            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
    		                .style('top', (absoluteMousePos[1] - 15)+'px');
    		            var tooltipText = accessor(d, i) || '';
    		            tooltipDiv.html(tooltipText);
    		        })
    		        .on("mouseout", function(d, i){
    		            // Remove tooltip
    		            tooltipDiv.remove();
    		        });
    		    };
    		};

		d3.select(container).selectAll(".week")
		  .data(dataMain).enter().append("div")
		  .attr("class",function(d, i) { 
		  	var color = "";
		  	var regular = "";
		  	var postseason = "";

		  	var week = dataMain.length - i;

		  	if (year >= 1978 && week == 17) { regular = "regular"; }
		  	if (year < 1978 && week == 15) { regular = "regular"; }

		  	if (scope == "all") {
			  	if (d.outcome == "expected" || d.outcome == "tie" || d.outcome == "lost as expected" || d.outcome == "win as expected") { color = "gray2"; }
			  	if (d.outcome == "too close") { color = "gray3"; }
			  	if (d.outcome == "unexpected win") { color = "win"; }
			  	if (d.outcome == "unexpected loss") { color = "loss"; }
		    } else if (scope == "post1") {
			  	if (d.outcome == "tie") { color = "gray2"; }
			  	// if (d.outcome == "win as expected") { color = "ewin"; }
			  	if (d.outcome == "lost as expected") { color = "eloss"; }
			  	if (d.outcome == "too close" && d.winner != "MIN") { color = "eloss"; }
			  	// if (d.outcome == "unexpected win") { color = "win"; }
			  	if (d.outcome == "unexpected loss") { color = "loss"; }	
			  	// if (d.outcome == "too close" && d.winner == "MIN") { color = "ewin"; }
			  	else { color = "gray2 fademe"; }	
		    } else if (scope == "wins") {
		    	if (d.outcome == "unexpected win") { color = "win"; }
		    	else { color = "gray2 fademe"; }
		    }
		    else if (scope == "post2") {
			  	if (year == 2009 && d.playoff == "c") { color = "eloss"; }
			  	else { color = "gray2 fademe"; } 
			}
		    else if (scope == "post3") {
			  	if (year == 2008 && d.playoff == "w") { color = "eloss"; }
			  	else if (year == 2000 && d.playoff == "c") { color = "eloss"; }
			  	else { color = "gray2 fademe"; } 
			}

		  	if (d.playoff != null) { postseason = "postseason"; }

		  	return postseason + " " + regular + " " + color + " week"; 

		  })
		  .on("click",function(d){
		    
		  })
		  .html(function(d){ 
		    return " ";
		  })      
		  .call(d3.helper.tooltip(function(d, i){

		  	var visitor = d.tm1;
		  	var home = d.tm2;
		  	var score1 = d.score1;
		  	var score2 = d.score2;
		  	var winner = d.winner;
		  	var outcome = d.outcome;
		  	var playoff = d.playoff;
		  	var symbol = "W";
		  	var where = "v";
		  	var week = "Week " + (dataMain.length - i);
		  	var opponent = visitor;

		  	if (d.winner != "MIN") {
		  		symbol = "L";
		  	}
		  	if (d.winner == "tie") {
		  		symbol = "T";
		  	}
		  	if (home != "MIN") {
		  		where = "@";
		  		opponent = home;
		  	}
		  	if (playoff == "w") { week = "Wild Card"; } 
		  	if (playoff == "d") { week = "Divisional Round"; }
		  	if (playoff == "c") { week = "Conference Championship"; } 
		  	if (playoff == "s") { week = "Super Bowl"; }  

            return "<div>" + week + " | " + year + "</div><div>" + symbol + " " + where + " " + opponent + "</div><div>" + score1 + "-" + score2 + "</div><div>" + outcome + "</div>";
          }));

	}

	function spillSeasons(first,last){

		var dataFiltered;

		for (var i=first; i<last; i++){
			dataFiltered = data.sort(function(a,b) { return d3.descending(a.week, b.week); }).filter(function(d) { return d.season == i && d.playoff == null; });
			spillWeeks(dataFiltered, "#r" + i, i, "all");
		}

		for (var i=first; i<last; i++){
			dataFiltered = data.sort(function(a,b) { return d3.descending(a.week, b.week); }).filter(function(d) { return d.season == i && d.playoff == null; });
			spillWeeks(dataFiltered, "#rw" + i, i, "wins");
		}

	}

	spillSeasons(1966,2018);


	function spillPostseasons(first,last){

		var dataFiltered;

		for (var i=first; i<last; i++){
			dataFiltered = data.sort(function(a,b) { return d3.descending(a.week, b.week); }).filter(function(d) { return d.season == i && d.playoff != null; });
			spillWeeks(dataFiltered, "#p" + i, i, "all");
		}

		for (var i=first; i<last; i++){
			dataFiltered = data.sort(function(a,b) { return d3.descending(a.week, b.week); }).filter(function(d) { return d.season == i && d.playoff != null; });
			spillWeeks(dataFiltered, "#pm" + i, i, "post1");
			spillWeeks(dataFiltered, "#po" + i, i, "post2");
			spillWeeks(dataFiltered, "#pos" + i, i, "post3");
		}

		for (var i=first; i<last; i++){
			dataFiltered = data.sort(function(a,b) { return d3.descending(a.week, b.week); }).filter(function(d) { return d.season == i && d.playoff != null; });
			spillWeeks(dataFiltered, "#pw" + i, i, "wins");
		}

	}

	spillPostseasons(1966,2018);

	var xpData = [{"team":"CHIEFS","pct":0.67,"color":"#C8102E"},
	{"team":"LIONS","pct":0.67,"color":"#0069B1"},
	{"team":"CHARGERS","pct":0.6,"color":"#0072CE"},
	{"team":"VIKINGS","pct":0.48,"color":"#4F2683"},
	{"team":"RAMS","pct":0.46,"color":"#866D4B"},
	{"team":"TITANS","pct":0.45,"color":"#4B92DB"},
	{"team":"SAINTS","pct":0.44,"color":"#D3BC8D"},
	{"team":"EAGLES","pct":0.44,"color":"#064C53"},
	{"team":"BENGALS","pct":0.43,"color":"#FC4C02"},
	{"team":"JETS","pct":0.39,"color":"#2A433A"},
	{"team":"BEARS","pct":0.39,"color":"#DC4405"},
	{"team":"COLTS","pct":0.33,"color":"#003A70"},
	{"team":"BROWNS","pct":0.33,"color":"#EB3300"},
	{"team":"RAIDERS","pct":0.31,"color":"#101820"},
	{"team":"GIANTS","pct":0.3,"color":"#001E62"},
	{"team":"DOLPHINS","pct":0.29,"color":"#008E97"},
	{"team":"COWBOYS","pct":0.29,"color":"#041E42"},
	{"team":"FALCONS","pct":0.29,"color":"#A6192E"},
	{"team":"49ERS","pct":0.27,"color":"#AA0000"},
	{"team":"BUCANNEERS","pct":0.25,"color":"#C8102E"},
	{"team":"JAGUARS","pct":0.25,"color":"#006073"},
	{"team":"PANTHERS","pct":0.25,"color":"#0085CA"},
	{"team":"BRONCOS","pct":0.22,"color":"#FC4C02"},
	{"team":"SEAHAWKS","pct":0.21,"color":"#001433"},
	{"team":"PATRIOTS","pct":0.21,"color":"#0C2340"},
	{"team":"PACKERS","pct":0.2,"color":"#175E33"},
	{"team":"BILLS","pct":0.2,"color":"#00338D"},
	{"team":"STEELERS","pct":0.18,"color":"#000000"},
	{"team":"RAVENS","pct":0.14,"color":"#241773"},
	{"team":"REDSKINS","pct":0.12,"color":"#862633"}];

	var currentChart = [{"team":"MIN","pct":0.48,"color":"#4F2683"},
	{"team":"TEN","pct":0.45,"color":"#4B92DB"},
	{"team":"NO","pct":0.44,"color":"#D3BC8D"},
	{"team":"PHI","pct":0.41,"color":"#064C53"},
	{"team":"ATL","pct":0.29,"color":"#A6192E"},
	{"team":"JAX","pct":0.25,"color":"#006073"},
	{"team":"NE","pct":0.21,"color":"#0C2340"},
	{"team":"PIT","pct":0.18,"color":"#000000"}];

	var decadeData = [{"team":1970,"pct":0.5,"color":"#064C53"},
	{"team":1980,"pct":0.5,"color":"#064C53"},
	{"team":1990,"pct":1,"color":"#064C53"},
	{"team":2000,"pct":0.33,"color":"#064C53"}];

	var coachData = [{"team":"Van Brocklin (84)","pct":0.75,"color":"#4F2683"},
	{"team":"Grant (259)","pct":0.3,"color":"#4F2683"},
	{"team":"Steckel (16)","pct":0.5,"color":"#4F2683"},
	{"team":"Burns (95)","pct":0.33,"color":"#4F2683"},
	{"team":"Green (159)","pct":0.34,"color":"#4F2683"},
	{"team":"Tice (65)","pct":0.34,"color":"#4F2683"},
	{"team":"Childress (74)","pct":0.29,"color":"#4F2683"},
	{"team":"Frazier (53)","pct":0.5,"color":"#4F2683"},
	{"team":"Zimmer (64+)","pct":0.22,"color":"#4F2683"}];


	function buildCharts(dataBuild,container){
		for (var i=0; i < dataBuild.length; i++){
			$("#" + container).append('<div class="fullbar ' + dataBuild[i].team + '" style="width:' + d3.format("%")(dataBuild[i].pct + 0.12) + ';" data="team"><div class="label" style="color:' + dataBuild[i].color  +';">' + dataBuild[i].team + '</div><div class="pct">' + d3.format("%")(dataBuild[i].pct) + '</div></div>');
	    }
	}

	buildCharts(xpData,"losersChart");
	buildCharts(currentChart,"currentChart");
	buildCharts(decadeData,"decadeChart");
	buildCharts(coachData,"coachChart");

});
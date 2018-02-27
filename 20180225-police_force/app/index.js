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

if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}


//CHARTS
function chartTrend(){
   var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
              x: 'x',
              // xFormat: '%Y-%m-%d %H:%M:%S',
                columns: [
                  ['x',2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                  ['Rate',53.47361369,48.26822711,42.3274039,41.96809275,37.99457661,28.77787857,32.67560325,28.5864448,32.67135897,26.26291807,43.11377246],
                ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: true
            },
                color: {
                  pattern: ['#3580A3']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 75,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,25,50,75],
                         format: d3.format(',.1f')
                        }
                    },
                x: {
                    // type: 'timeseries',
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 4,
                        values: [2008,2011,2014,2017],
                        multiline: false,
                    }
                }
            }
    });
}

chartTrend();

  function chartType(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 120,
        };

    var chartType = c3.generate({
          bindto: "#chartType",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x', "Bodily Force","Chemical Irritant","Taser","Gun Point Display","Improvised Weapon","Police K9 Bite","Baton","Firearm","Less Lethal Projectile"],
                  ['value', 0.6829,0.1425,0.0927,0.0168,0.0123,0.0103,0.0022,0.0017,0.0006]
              ],
              type: 'bar',
            labels: {
                format: {
                    'value': d3.format('%.0f')
                }
            }
          },
            legend: {
                show: false
            },
            tooltip: {
              show:false
            },
            color: {
                  pattern: ['#3580A3']
                },
          axis: {
              rotated: true,
                y: {
                      max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 8,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick: {
                         multiline:false
                       }
              }
          }
    });
}

chartType();


d3.json("./data/counts.json", function(error, dataLoadCounts) {

var dataCounts = dataLoadCounts.incidents;

var aspect = 800 / 500, chart = $("#country svg");

$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

function mapColor(d, subject, dataCompare){

  var color = "";

  for (var i=0; i<dataCompare.length; i++){
    if (d.properties.Name == dataCompare[i].neighborhood) {
      if (dataCompare[i].rate >= 100) { return "#0D4673"; }
      else if (dataCompare[i].rate >= 75) { return "#3580A3"; }
      else if (dataCompare[i].rate >= 50) { return "#67B4C2"; }
      else if (dataCompare[i].rate >= 25) { return "#A7E6E3"; }
      else if (dataCompare[i].rate >= 0) { return "#D1E6E1"; }
    }
  }
}

function mapTips(d, subject, dataCompare){
  var color = "";
  var rate = 0;

  for (var i=0; i<dataCompare.length; i++){
    if (d.properties.Name == dataCompare[i].neighborhood) {
      if (dataCompare[i].rate >= 100) { color = "blue5"; rate = dataCompare[i].rate; }
      else if (dataCompare[i].rate >= 75) { color = "blue4"; rate = dataCompare[i].rate; }
      else if (dataCompare[i].rate >= 50) { color = "blue3"; rate = dataCompare[i].rate; }
      else if (dataCompare[i].rate >= 25) { color = "blue2"; rate = dataCompare[i].rate; }
      else if (dataCompare[i].rate >= 0) { color = "blue1"; rate = dataCompare[i].rate; }
    }
  }

        return "<div>" + d.properties.Name + "</div><div><span class='" + color + " legendary'>" + d3.format(",.1f")(rate / 2) + "</span> per 10,000 police incidents</div>";

}

function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index, visible) {

if (geo=="country") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(1000).translate([400, 260]); }
else if (geo=="us") { var width = 800, height = 500, centered; var projection = d3.geo.albersUsa().scale(2000).translate([330, 430]); }
else if (geo=="mn") { var width = 350, height = 500, centered; var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([80000]).center([-93.070335,44.930977]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {
d3.json("shapefiles/us_states_topo.json", function(error, st) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      .attr("id", function(d) { var str = d.properties.Name + "" + d.properties.GEOID + "_" + geo; return str.replace(new RegExp(" ", "g"),"-"); })
      .style("fill", function(d){
         return mapColor(d, subject, dataCompare);
      })
      .on("mousedown", function(d, i){

      })
      .style("stroke-width", ".5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, subject, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

  //     if (subject == "national") { var marks = dataUS; var size = "2px"; }
  //     if (subject == "state") { var marks = dataMN; var size = "5px"; }

  // svg.selectAll("circle")
  //   .data(marks)
  //   .enter()
  //   .append("circle")
  //   .attr('class','mark')
  //   .attr('width', 10)
  //   .attr('height', 10)
  //   .style("opacity",0.5)
  //   .attr("r", size)
  //   .attr("fill", "#333")
  //   .attr("transform", function(d) { if(d.longitude != null) { return "translate(" + projection([d.longitude,d.latitude]) + ")";}})
  //   .call(d3.helper.tooltip(function(d, i){
  //       return "<div>" + d3.time.format("%Y-%m-%d")(new Date(d.datetime)) + "</div><div>" + d.comments + "</div>";
  //     }));

    // svg.insert("path", ".graticule")
    //   .datum(topojson.mesh(st, st.objects.us_states, function(a, b) { return a !== b; }))
    //   .attr("class", "state-boundary")
    //   .style("stroke-width", "1.2px")
    //   .attr("d", path);

  // svg.selectAll("text")
  //   .data(marks)
  //   .enter()
  //   .append("text")
  //   .attr('class','city-label')
  //   .attr("transform", function(d) {return "translate(" + projection([d.long+.23,d.lat-.09]) + ")";})
  //   .text(function(d) { return " " + d.name; });



});
});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom").click(function() {
  clicked2();
  $('#filter input').val("");
  $("#districtName").html("Midwest");
  $(".district").removeClass("selected");
  $('.card, .card div').show();
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
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

}

  mapBuild("#map", "#districtName", "#chart", "minneapolis_neighborhoods.json", "state", "metro", dataCounts, 2, 1);

  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);

});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".chart").hide();
$("#" + selected).show();
}

d3.json('./data/megaregions.json', function(error, dataLoad) {
d3.json('./shapefiles/megaregions.json', function(error, regions) {
d3.json('./data/commuters.json', function(error, dataLoadCommute) {

var data = dataLoad.regions;
var dataCommute = dataLoadCommute.commuters;

d3.select("#listing").selectAll(".row")
  .data(data.sort(function(a,b) { return b.regionName - a.regionName; })).enter().append("div")
  .attr("class","row")
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 
    // return "<div class='col name'>" + d.regionName + "</div><div class='col city'>" + d.primeCity + "</div><div class='col area'>" + d.plosName + "</div>";
     return "<div class='col name'>" + d.regionName + "</div><div class='col city'>" + d.primeCity + "</div>";

  });

d3.select("#commuter_list").selectAll(".row")
  .data(dataCommute.sort(function(a,b) { return b.commuters - a.commuters; })).enter().append("div")
  .attr("class","row")
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d,i){ 
    // return "<div class='col name'>" + d.regionName + "</div><div class='col city'>" + d.primeCity + "</div><div class='col area'>" + d.plosName + "</div>";
     return "<div class='col metro'>" + d.metro + "</div><div class='col state'>" + d.state + "</div><div class='col commuters'>" + d3.format(",")(d.commuters) + "</div>";

  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "name") { 
        if (sorted == "descend") { return d3.descending(a.regionName, b.regionName); }
        if (sorted == "ascend") { return d3.ascending(a.regionName, b.regionName); }
     }
          if (candidate == "city") { 
        if (sorted == "descend") { return d3.descending(a.primeCity, b.primeCity); }
        if (sorted == "ascend") { return d3.ascending(a.primeCity, b.primeCity); }
     }
          if (candidate == "area") { 
        if (sorted == "descend") { return d3.descending(a.plosName, b.plosName); }
        if (sorted == "ascend") { return d3.ascending(a.plosName, b.plosName); }
     }
          if (candidate == "metro") { 
        if (sorted == "descend") { return d3.descending(a.metro, b.metro); }
        if (sorted == "ascend") { return d3.ascending(a.metro, b.metro); }
     }
          if (candidate == "state") { 
        if (sorted == "descend") { return d3.descending(a.state, b.state); }
        if (sorted == "ascend") { return d3.ascending(a.state, b.state); }
     }
          if (candidate == "commuters") { 
        if (sorted == "descend") { return d3.descending(a.commuters, b.commuters); }
        if (sorted == "ascend") { return d3.ascending(a.commuters, b.commuters); }
     }
    })
    .transition().duration(500);
}

$( document ).ready(function() {

    $('.row').hide();
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf("(MPLS)") != -1 || $(this).text().toUpperCase().indexOf("(STP)") != -1){
           $(this).hide();
       }
     });

$('#filter_box').on('keyup search', function(e){
    $('#listing .row').hide();
    var txt = $('#filter_box').val();
    $('#listing .row').each(function(){
       if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)){
           $(this).show();
       }
    });
});

$('#filter_box2').on('keyup search', function(e){
    $('#commuter_list .row').hide();
        var txt = $('#filter_box2').val();
    $('#commuter_list .row').each(function(){
       if(($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)){
           $(this).show();
       }
    });
});

$("#regions .th").click(function() {
  $(".th").removeClass("selected3");
  $(this).addClass("selected3");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected3")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#listing",null,data,$(this).attr("data"),sorted);
});

$("#commutes .th").click(function() {
  $(".th").removeClass("selected3");
  $(this).addClass("selected3");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected3")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#commuter_list",null,dataCommute,$(this).attr("data"),sorted);
});

$("#listing .row").click(function() {
	$("#listing .row").removeClass("selected");
	$(this).addClass("selected");
  $("#district").html($(this).find(".name").text())
  var pitch = 0;
  var bearing = 0;
  var longitude = Number($(this).attr("longitude"));
  var latitude = Number($(this).attr("latitude"));
  map.flyTo({ center: [longitude, latitude], zoom: 5, pitch: pitch, bearing: bearing });
});

$('.num').each(function(i, obj) {
    var value = $(this).text();
    var pct = value * 100;
    var remainder = 100 - pct;
    var pctString = d3.format("+%")(value);

    $(this).css("background","-webkit-linear-gradient(left, white " + remainder + "%, #aaaaaa " + pct + "%)");
    $(this).css("background","-moz-linear-gradient(left, white " + remainder + "%, #aaaaaa " + pct + "%)");
    $(this).css("background","-ms-linear-gradient(left, white " + remainder + "%, #aaaaaa " + pct + "%)");
    $(this).css("background","linear-gradient(left, white " + remainder + "%, #aaaaaa " + pct + "%)");

    $(this).html(pctString);
});

});


//   var cityData = data.filter(function(d){ return d.name == "Richfield"; })

//       var  padding = {
//             top: 40,
//             right: 40,
//             bottom: 30,
//             left: 40,
//         };

//     var chart = c3.generate({
//             bindto: '#chart',
//             padding: padding,
//             data: {
//                 x: 'x',
//                 columns: [
//                     ['x', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'],
//                     ['PPSF', cityData[0].PPSF2003, cityData[0].PPSF2004, cityData[0].PPSF2005, cityData[0].PPSF2006, cityData[0].PPSF2007, cityData[0].PPSF2008, cityData[0].PPSF2009, cityData[0].PPSF2010, cityData[0].PPSF2011, cityData[0].PPSF2012, cityData[0].PPSF2013, cityData[0].PPSF2014, cityData[0].PPSF2015, cityData[0].PPSF2016],
//                 ],
//                 names: {
//                   'PPSF':'Price per sqft'
//                 },
//                 colors: { 'PPSF': '#333333' }
//             },
//             legend: {
//                 show: false
//             },
//             axis: {
//                 y: {
//                     max: 400,
//                     min: 0,
//                     padding: {bottom: 0, top: 0},
//                     tick: {
//                         count: 4,
//                         format: d3.format('$.0f')
//                     }
//                 },
//                 x: {
//                     type: 'timeseries',
//                     // label: {
//                     //   text: 'Price per square foot over time',
//                     //   position: 'inner-center'
//                     // },
//                     tick: {
//                         format: '%Y'
//                     }
//                 }
//             }
//         });

// d3.select("#chart svg").append("text")
//     .attr("x", 50 )
//     .attr("y", 50)
//     .style("text-anchor", "right")
//     .text("Price per square foot over time");
// });

// function regionLoad(region){

// }

function mapBuild(container, boxContainer, chartContainer, shape, race, geo, dataCompare, index) {

var width = 650,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]); }

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

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      .attr("id", function(d) { var str = geo + "_" + d.properties.DISTRICT; return str.replace(new RegExp(" ", "g"),"-"); })
      .attr("precinctName", function(d){ return d.properties.DISTRICT })
      .attr("class", function(d){
         return "gray4"
        })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return d.properties.regionName;
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

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

$(".zoom, .switch, #close, .mapSwitch").click(function() {
  clicked2();
  $("#filter input").val("");
  $(".district").removeClass("selected");
  $("#infobox").hide();
  d3.selectAll(".map rect").classed('faded', false); 
  d3.selectAll(".map rect").classed('active', false); 
  $(".rightSide").show();
});

$(".mapSwitch").click(function() {
  $("#filter input").val("");
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

  d3.selectAll("#mapMetro path, #mapState path")
      .classed("faded", false)
      .classed("active", false);

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function (d) { return d === centered; });
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
      .classed("active", centered && function (d) { return d === centered; });
}

$(window).on("resize", function() {
var aspect = 650 / 400, chart = $("#map svg");
  var targetWidth = chart.parent().width();
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);
  });

var aspect = 650 / 400, chart = $("#map svg");
  var targetWidth = chart.parent().width();
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);

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


// mapBuild("#map", null, null, "megaregions.json", "regions", "us", null, 0);

var aspect = 650 / 400, chart = $("#map svg");
  var targetWidth = chart.parent().width();
  chart.attr("width", targetWidth);
  chart.attr("height", targetWidth / aspect);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/cj0sgqols00br2smpojr2qgjs',
    // style: {
    //     "version": 8,
    //     "sources": {
    //         "simple-tiles": {
    //             "type": "raster",
    //             "tiles": [
    //                 "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
    //                 "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //             ],
    //             "tileSize": 256
    //         }
    //     },
    //     "layers": [{
    //         "id": "simple-tiles",
    //         "type": "raster",
    //         "source": "simple-tiles",
    //         "minzoom": 0,
    //         "maxzoom": 22
    //     }]
    // },
    center: [-98.5795, 39.828175],
    zoom: 2.5,
    minZoom: 2
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {
 map.addSource('regions', {
   type: 'geojson',
   data: regions
 });

   map.addLayer({
        'id': 'regions-layer',
        'interactive': false,
        'source': 'regions',
        'layout': {},
        'type': 'fill',
             'paint': {
            'fill-antialias' : true,
            // 'line-width': 3,
            'fill-opacity': 0.2,
            'fill-color': "#888888",
            'fill-outline-color': 'rgba(255, 255, 255, 1)'
      }
    }, 'place-neighbourhood');
});

});
});
});
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/surveyIsolate.json", function(error, json) {
d3.json("./data/surveyIsolate2012.json", function(error, json2012) {
$.getJSON('shapefiles/minneapolis_groups.json', function(dataMPLS) {

var data = json.surveyIsolate;
var data2012 = json2012.surveyIsolate2012;
var dataSource = data;

$(".switch").click(function() {
  $(".switch").removeClass("selected");
  $(this).addClass("selected");
  map.setView([44.974514,-93.268433], zoomification);
  $('#nbName').html("Minneapolis");
});

$("#y2012").click(function() {
dataSource = data2012;
statesLayer.eachLayer(function (layer) {    
        layer.setStyle({          
          fillColor: getColor(layer.feature.properties.GrpName)
        });  
      }); 
redrawChart(chart,"#chart","tech",dataSource,"Overall",0);
});

$("#y2014").click(function() {
dataSource = data;
statesLayer.eachLayer(function (layer) {    
        layer.setStyle({          
          fillColor: getColor(layer.feature.properties.GrpName)
        });  
      });
redrawChart(chart,"#chart","tech",dataSource,"Overall",0);
});

//CHARTAGGEDON
var chart = [];
var index = 0;
// function chartBuild(container,subject,data,county,index){
  var colorArray = ['#999','#C22A22']; 
  var formatter = d3.format('%');
nv.addGraph(function() {
  chart[index] = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 30, bottom: 20, left: 130})
      .showValues(false)
      .tooltips(true)
      .stacked(false)
      .showLegend(true)
      .color(colorArray)
      // .width($(container).width()).height($(container).height())
      .showControls(false);
  chart[index].forceY([0,1]);
   chart[index].yAxis
      .tickFormat(formatter);
  d3.select('#chart svg')
      .datum(chartData("tech",dataSource,"Overall"))
      .transition().duration(500)
      .call(chart[index]);
  nv.utils.windowResize(chart[index].update);
var rects = d3.selectAll("rect")
              .filter(function(d, i) { return i == 0 || i == 1; })
              .style("fill","#000");
var rects2 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 2 || i == 3 || i == 4; })
              .style("fill","#777");
var rects3 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 5 || i == 6 || i == 7; })
              .style("fill","#333");
var rects4 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 8 || i == 9 || i == 10; })
              .style("fill","#bbb");
var rects5 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 11 || i == 12 || i == 13; })
              .style("fill","#666");
var rects6 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 14; })
              .style("fill","#ddd");
  return chart[index];
});
function redrawChart(chart,container,subject,data,county,index){
  var colorArray = ['#999','#C22A22']; 
  var formatter = d3.format('%');
    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
    // chart[index].yAxistickFormat(formatter);
    nv.utils.windowResize(chart[index].update);
var rects = d3.selectAll("rect")
              .filter(function(d, i) { return i == 0 || i == 1; })
              .style("fill","#000");
var rects2 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 2 || i == 3 || i == 4; })
              .style("fill","#777");
var rects3 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 5 || i == 6 || i == 7; })
              .style("fill","#333");
var rects4 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 8 || i == 9 || i == 10; })
              .style("fill","#bbb");
var rects5 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 11 || i == 12 || i == 13; })
              .style("fill","#666");
var rects6 = d3.selectAll("rect")
              .filter(function(d, i) { return i == 14; })
              .style("fill","#ddd");
// var rects7 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 15 || i == 16; })
//               .style("fill","#2C3942");
// var rects8 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 17 || i == 18 || i == 19; })
//               .style("fill","#7F98AA");
// var rects9 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 20 || i == 21 || i == 22; })
//               .style("fill","#556E7F");
// var rects10 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 23 || i == 24 || i == 25; })
//               .style("fill","#A8B9C5");
// var rects11 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 26 || i == 27 || i == 28; })
//               .style("fill","#3B576B");
// var rects12 = d3.selectAll("rect")
//               .filter(function(d, i) { return i == 29; })
//               .style("fill","#C6D1D9");
}
function chartData(subject,data,county) {
var romney, mccain, huckabee, paul, keyes, guiliani, others, obama, clinton, edwards, kucinich, biden, richardson, dodd, uncommitted;
  
for (var i=0; i < dataSource.length; i++){
    if (dataSource[i].group == county){
      var no_internet = dataSource[i].no_internet;
      var no_mobile = dataSource[i].cell_no_internet + dataSource[i].cell_no;
      var dialup = dataSource[i].dialup;
      var cable = dataSource[i].cable;
      var dsl = dataSource[i].dsl;
      var satellite = dataSource[i].satellite;
      var cellular = dataSource[i].cellular;
      var wifi = dataSource[i].wifi;
      var unsure = dataSource[i].unsure;
      var computer = dataSource[i].computer_no_internet + dataSource[i].computer_internet;
      var tablet = dataSource[i].tablet_internet +  dataSource[i].tablet_no_internet;
      var cell = dataSource[i].cell_internet + dataSource[i].cell_no_internet;
      var gaming = dataSource[i].gaming_internet + dataSource[i].gaming_no_internet;
      var less_highschool = dataSource[i].less_highschool;
      var highschool = dataSource[i].highschool;
      var associates_some = dataSource[i].associates_some;
      var bachelors = dataSource[i].bachelors;
      var graduate = dataSource[i].graduate;
      var i_10k_24k = dataSource[i].i_10k_24k + dataSource[i].i_less_10k;
      var i_25k_50k = dataSource[i].i_25k_50k;
      var i_50k_99k = dataSource[i].i_50k_75k + dataSource[i].i_75k_100k;
      var i_100k = dataSource[i].i_100k_150k + dataSource[i].i_150k_200k + dataSource[i].i_more_200k;
      var native = dataSource[i].native;
      var asian = dataSource[i].asian;
      var black = dataSource[i].black;
      var white = dataSource[i].white;
      var y_18_34 = dataSource[i].y_18_24 + dataSource[i].y_25_34;
      var y_35_54 = dataSource[i].y_35_44 + dataSource[i].y_45_54;
      var y_55_64 = dataSource[i].y_55_64;
      var y_65 = dataSource[i].y_65_74 + dataSource[i].y_75_older;
  }
}
if (county == "Overall"){
      return [{
        "key": "Citywide Percentage",
        "values": [
          { 
            "label" : "No Home Internet" ,
            "value" : no_internet
          },
          { 
            "label" : "No Mobile Internet" ,
            "value" : no_mobile
          },
          // { 
          //   "label" : "Dialup Internet" ,
          //   "value" : dialup
          // },
          // { 
          //   "label" : "Cable Internet" ,
          //   "value" : cable
          // },
          // { 
          //   "label" : "DSL Internet" ,
          //   "value" : dsl
          // },
          // { 
          //   "label" : "Satellite Internet" ,
          //   "value" : satellite
          // },
          // { 
          //   "label" : "Cellular Internet" ,
          //   "value" : cellular
          // },
          // { 
          //   "label" : "WiFi Internet" ,
          //   "value" : wifi
          // },
          { 
            "label" : "Own Computer" ,
            "value" : computer
          },
          { 
            "label" : "Own Tablet" ,
            "value" : tablet
          },
          { 
            "label" : "Own Cellphone" ,
            "value" : cell
          },
          // { 
          //   "label" : "Own Game Console" ,
          //   "value" : gaming
          // },
          { 
            "label" : "High School/Less" ,
            "value" : highschool
          },
          { 
            "label" : "Some/Associates" ,
            "value" : associates_some
          },
          { 
            "label" : "Bachelor's or More" ,
            "value" : bachelors + graduate
          },
          { 
            "label" : "$0-$24k" ,
            "value" : i_10k_24k
          },
          { 
            "label" : "$25k-$49k" ,
            "value" : i_25k_50k
          },
          { 
            "label" : "$50k+" ,
            "value" : i_50k_99k + i_100k
          },
          { 
            "label" : "Other Race" ,
            "value" : asian + native
          },
          { 
            "label" : "Black" ,
            "value" : black
          },
          { 
            "label" : "White" ,
            "value" : white
          },
          // { 
          //   "label" : "Age 18-54" ,
          //   "value" : y_18_34 + y_35_54
          // },
          { 
            "label" : "Age 55+" ,
            "value" : y_55_64 + y_65
          }
        ]
      }]
    } else {
return [{
        "key": "Citywide Percentage",
        "values": [
          { 
            "label" : "No Home Internet" ,
            "value" : .09
          },
          { 
            "label" : "No Mobile Internet" ,
            "value" : .21
          },
          // { 
          //   "label" : "Dialup Internet" ,
          //   "value" : dialup
          // },
          // { 
          //   "label" : "Cable Internet" ,
          //   "value" : cable
          // },
          // { 
          //   "label" : "DSL Internet" ,
          //   "value" : dsl
          // },
          // { 
          //   "label" : "Satellite Internet" ,
          //   "value" : satellite
          // },
          // { 
          //   "label" : "Cellular Internet" ,
          //   "value" : cellular
          // },
          // { 
          //   "label" : "WiFi Internet" ,
          //   "value" : wifi
          // },
          { 
            "label" : "Own Computer" ,
            "value" : .88
          },
          { 
            "label" : "Own Tablet" ,
            "value" : .56
          },
          { 
            "label" : "Own Cellphone" ,
            "value" : .91
          },
          // { 
          //   "label" : "Own Game Console" ,
          //   "value" : gaming
          // },
          { 
            "label" : "High School/Less" ,
            "value" : .04
          },
          { 
            "label" : "Some/Associates" ,
            "value" : .19
          },
          { 
            "label" : "Bachelor's or More" ,
            "value" : .61
          },
          { 
            "label" : "$0-$24k" ,
            "value" : .28
          },
          { 
            "label" : "$25k-$49k" ,
            "value" : .22
          },
          { 
            "label" : "$50k+" ,
            "value" : .5
          },
          { 
            "label" : "Other Race" ,
            "value" : .07
          },
          { 
            "label" : "Black" ,
            "value" : .17
          },
          { 
            "label" : "White" ,
            "value" : .75
          },
          // { 
          //   "label" : "Age 18-54" ,
          //   "value" : y_18_34 + y_35_54
          // },
          { 
            "label" : "Age 55+" ,
            "value" : .20
          }
        ]
      },{
        "key": "Region Percentage",
        "values": [
          { 
            "label" : "No Home Internet" ,
            "value" : no_internet
          },
          { 
            "label" : "No Mobile Internet" ,
            "value" : no_mobile
          },
          { 
            "label" : "Own Computer" ,
            "value" : computer
          },
          { 
            "label" : "Own Tablet" ,
            "value" : tablet
          },
          { 
            "label" : "Own Cellphone" ,
            "value" : cell
          },
          { 
            "label" : "High School/Less" ,
            "value" : highschool
          },
          { 
            "label" : "Some/Associates" ,
            "value" : associates_some
          },
          { 
            "label" : "Bachelor's or More" ,
            "value" : bachelors + graduate
          },
          { 
            "label" : "$0-$24k" ,
            "value" : i_10k_24k
          },
          { 
            "label" : "$25k-$49k" ,
            "value" : i_25k_50k
          },
          { 
            "label" : "$50k+" ,
            "value" : i_50k_99k + i_100k
          },
          { 
            "label" : "Other Race" ,
            "value" : asian + native
          },
          { 
            "label" : "Black" ,
            "value" : black
          },
          { 
            "label" : "White" ,
            "value" : white
          },
          // { 
          //   "label" : "Age 18-54" ,
          //   "value" : y_18_34 + y_35_54
          // },
          { 
            "label" : "Age 55+" ,
            "value" : y_55_64 + y_65
          }]
      }]
    }
}
//MAPOCALYPSE
var zoomification = 11;
if ($(window).width() <= 845) { zoomification = 10; }
else { zoomification = 11; }
$(window).on('load resize', function(){
var width = $(window).width();
if (width <= 845) { zoomification = 10; }
else { zoomification = 11; }
map.setView([44.974514,-93.268433], zoomification);
});
$(".zoom").click(function() {
  map.setView([44.974514,-93.268433], zoomification);
  $('#nbName').html("Minneapolis");
  redrawChart(chart,"#chart","tech",data,"Overall",0);
});
//INITIALIZE MAP
var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));
L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
  var map = L.mapbox.map('map', 'mapbox.light', { maxZoom: 17, minZoom: 11, bounds: mapBounds})
    .setView([44.974514,-93.268433], zoomification);
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
   statesLayer = L.geoJson(dataMPLS,  {
      style: getStyle,
      onEachFeature: onEachFeature
  }).addTo(map);
     function getStyle(feature) {
      return {
          weight: 2,
          opacity: 1,
          color: '#333',
          fillOpacity: 1,
          fillColor: getColor(feature.properties.GrpName)
      };
  }
    function getColor(d) {
        for (var i=0; i < dataSource.length; i++){
          if (d == dataSource[i].group){
           if (dataSource[i].no_internet >= .20) { return "#9C0004"; }
           if (dataSource[i].no_internet >= .15) { return "#C22A22"; }
           if (dataSource[i].no_internet >= .10) { return "#F2614C"; }
           if (dataSource[i].no_internet >= .5) { return "#F28670"; }
           if (dataSource[i].no_internet > 0) { return "#F2AC93"; }
           if (dataSource[i].no_internet == 0) { return "#F2D2A4"; }
        }
      }
  }
    function onEachFeature(feature, layer) {
      layer.on({
          mousemove: mousemove,
          mouseout: mouseout,
          click: zoomToFeature
      });
  }
  var closeTooltip;
  var popup = new L.Popup({ autoPan: false });
  function mousemove(e) {
      var layer = e.target;
      popup.setLatLng(e.latlng);
for (var i=0; i < dataSource.length; i++){
  if (layer.feature.properties.GrpName == dataSource[i].group){
    var stat = '<div class="num" style="color:' + getColor(layer.feature.properties.GrpName) + ';">' + d3.format("%")(dataSource[i].no_internet) + ' without home Internet</div>';
    //<div class="num">' + d3.format("%")(dataSource[i].cell_no_internet + dataSource[i].cell_no) + ' without mobile Internet</div>
    break;
      }
      else { stat = ""; }
    }
    popup.setContent('<div class="marker-title">' + layer.feature.properties.GrpName + '</div>' + stat);
      if (!popup._map) popup.openOn(map);
      window.clearTimeout(closeTooltip);
      // highlight feature
      layer.setStyle({
          color: '#fff'
      });
      if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
      }
  }
  function mouseout(e) {
      var layer = e.target;
       layer.setStyle({
           color: "#333"
       });
      closeTooltip = window.setTimeout(function() {
          map.closePopup();
      }, 100);
  }
  function zoomToFeature(e) {
    var layer = e.target;
      map.fitBounds(layer.getBounds());
      $('#nbName').html(layer.feature.properties.GrpName);
      redrawChart(chart,"#chart","tech",dataSource,layer.feature.properties.GrpName,0);
  }
  });
 });
});
},{}]},{},[1])
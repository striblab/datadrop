<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Minneapolis Digital Divide</title>
  <meta name="description" content="Minneapolis Digital Divide">
  <meta name="author" content="Frey Hargarten - StarTribune">

  <link rel="stylesheet" href="../_common_resources/styles/startribune_dataviz_styles.css" />
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' />
  <link href="../_common_resources/charts/nvd3-master/build/nv.d3.css" rel="stylesheet" type="text/css">
  
  <style>
    #map { width:100%; height:350px; }

    #nbName { text-align:center; font-family:"Poynter Serif RE"; font-size:1.3em; font-weight:900; }

    .zoom { text-align:center; float:none !important; padding:15px; }
    .legends { width:280px; height:auto; text-align:center; margin-right:auto; margin-left:auto; }

    small { font-family:"Benton Sans",Helvetica,Arial,sans-serif; color:#808080; clear:both; display:block; }

    .num { font-weight:900; }

    .source { text-align:center; }

    #chart { height:430px; }
  </style> 
</head>

<body>
  <div id="wrapper">

    <div id="map"></div>

    <div id="infobox">
      <div id="nbName">Minneapolis</div>
      <div class="zoom">Reset View</div>
    </div>

    <div class="legends">
    <div class="legendContainer">
      <span class='legend'>
        <nav class='legend clearfix'>
          <span style='background:#fff;'>Less</span>
          <span class='grayblue1'></span>
          <span class='grayblue2'></span>
          <span class='grayblue3'></span>
          <span class='grayblue4'></span>
          <span class='grayblue5'></span>
          <span class='grayblue6'></span>
          <span style='background:#fff;'>More</span>
        </nav>
      </span>
    </div>
    <small>No Home Internet Connection</small>
  </div>

  <div id="chart"><svg></svg></div>

  <div class="source">Source: City of Minneapolis</div>

<a href="http://www.minneapolismn.gov/it/inclusion/WCMS1P-118865" target="new_"><button class="downloadButton">&nbsp;Download data</button></a>
  </div>


</body>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>
<script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js'></script>
<script src="../_common_resources/charts/nvd3-master/build/nv.d3.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/utils.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/tooltip.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/models/legend.js"></script>
<script src="../_common_resources/charts/nvd3-master/src/models/axis.js"></script>
<script src="../_common_resources/charts/nvd3-master/test/stream_layers.js"></script>

<script>
// $("#headerDiv").sticky({topSpacing:1});

</script>
<script>
//LIVE JSON MAGIC

//https://script.google.com/macros/s/AKfycbwG7mX6qPZaIhkwY2AJ2lU7kNarbm6OWIkWVfnmYZGYruIl40cu/exec?id=1J8ZCg7kqs89l2JDt2052cZsrF2yoA7bYj15n0ma8DhA&sheet=surveyIsolate

<?php

$jsonData = file_get_contents("https://script.googleusercontent.com/macros/echo?user_content_key=S218ArONKeiEz-RTEl53EaGH816h0BB3kYZ0jVrYhx3G0W-toZ_EgLvapvvphJRw-MZjcn2o8wbUygJ6doR4DRmiKO3_m2pgOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUVzd_dgT7OAibyRO9NbpYRtymt8WREOXpG&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX");

?>

var json = <?php echo $jsonData; ?>;

// d3.json("https://script.googleusercontent.com/macros/echo?user_content_key=S218ArONKeiEz-RTEl53EaGH816h0BB3kYZ0jVrYhx3G0W-toZ_EgLvapvvphJRw-MZjcn2o8wbUygJ6doR4DRmiKO3_m2pgOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxCoMjMSmZWLp6XAShvjQj50JtCfh4yP7n1RnEoDeOH7XqmOXgX8RYIyMAhIAtjnF9UDzNXGLr6TDKmXXMxaxxYwQuY5LYBij5AHEx7MO3NlZ2a6-1TkrF_Oz4qafQOPPWDxbiqlNcUVzd_dgT7OAibyRO9NbpYRtymt8WREOXpG&lib=MVcLnEUipyThKZcpmQKyqT_CoSfd4egCX", function(error, json) {

var data = json.surveyIsolate;

//CHARTAGGEDON
var chart = [];
var index = 0;
// function chartBuild(container,subject,data,county,index){
  var colorArray = ['#333']; 
  var formatter = d3.format('%');

nv.addGraph(function() {
  chart[index] = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 30, bottom: 20, left: 130})
      .showValues(false)
      .tooltips(true)
      .stacked(true)
      .showLegend(false)
      .color(colorArray)
      // .width($(container).width()).height($(container).height())
      .showControls(false);

  chart[index].forceY([0,1]);

   chart[index].yAxis
      .tickFormat(formatter);

  d3.select('#chart svg')
      .datum(chartData("tech",data,"Overall"))
      .transition().duration(500)
      .call(chart[index]);

  nv.utils.windowResize(chart[index].update);

  d3.selectAll("rect.nv-bar")
    .style("fill", function(d, i){
        return d.y > 50 ? "red":"blue";
    });

  return chart[index];
});

// }

function redrawChart(chart,container,subject,data,county,index){
  var colorArray = ['#333']; 
  var formatter = d3.format('%');

    d3.select(container + ' svg').datum(chartData(subject,data,county)).transition().duration(300).call(chart[index].color(colorArray));
    // chart[index].yAxistickFormat(formatter);
    nv.utils.windowResize(chart[index].update);
}

function chartData(subject,data,county) {

var romney, mccain, huckabee, paul, keyes, guiliani, others, obama, clinton, edwards, kucinich, biden, richardson, dodd, uncommitted;
  
for (var i=0; i < data.length; i++){
    if (data[i].group == county){
      var no_internet = data[i].no_internet;
      var dialup = data[i].dialup;
      var cable = data[i].cable;
      var dsl = data[i].dsl;
      var satellite = data[i].satellite;
      var cellular = data[i].cellular;
      var wifi = data[i].wifi;
      var unsure = data[i].unsure;
      var computer = data[i].computer_no_internet + data[i].computer_internet;
      var tablet = data[i].tablet_internet +  data[i].tablet_no_internet;
      var cell = data[i].cell_internet + data[i].cell_no_internet;
      var gaming = data[i].gaming_internet + data[i].gaming_no_internet;
      var less_highschool = data[i].less_highschool;
      var highschool = data[i].highschool;
      var associates_some = data[i].associates_some;
      var bachelors = data[i].bachelors;
      var graduate = data[i].graduate;
      var i_10k_24k = data[i].i_10k_24k + data[i].i_less_10k;
      var i_25k_50k = data[i].i_25k_50k;
      var i_50k_99k = data[i].i_50k_75k + data[i].i_75k_100k;
      var i_100k = data[i].i_100k_150k + data[i].i_150k_200k + data[i].i_more_200k;
      var native = data[i].native;
      var asian = data[i].asian;
      var black = data[i].black;
      var white = data[i].white;
      var other = data[i].other;
      var y_18_34 = data[i].y_18_24 + data[i].y_25_34;
      var y_35_54 = data[i].y_35_44 + data[i].y_45_54;
      var y_55_64 = data[i].y_55_64;
      var y_65 = data[i].y_65_74 + data[i].y_75_older;
  }
}

      return [{
        "key": "Prevalence",
        "values": [
          { 
            "label" : "No Internet" ,
            "value" : no_internet
          },
          { 
            "label" : "Dialup Internet" ,
            "value" : dialup
          },
          { 
            "label" : "Cable Internet" ,
            "value" : cable
          },
          { 
            "label" : "DSL Internet" ,
            "value" : dsl
          },
          { 
            "label" : "Satellite Internet" ,
            "value" : satellite
          },
          { 
            "label" : "Cellular Internet" ,
            "value" : cellular
          },
          { 
            "label" : "WiFi Internet" ,
            "value" : wifi
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
            "label" : "Own Game Console" ,
            "value" : gaming
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
            "label" : "Bachelor's Degree" ,
            "value" : bachelors
          },
          { 
            "label" : "Grad/Prof Degree" ,
            "value" : graduate
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
            "label" : "$50k-$99k" ,
            "value" : i_50k_99k
          },
          { 
            "label" : "$100k+" ,
            "value" : i_100k
          },
          { 
            "label" : "Native American" ,
            "value" : native
          },
          { 
            "label" : "Asian" ,
            "value" : asian
          },
          { 
            "label" : "Black" ,
            "value" : black
          },
          { 
            "label" : "White" ,
            "value" : white
          },
          { 
            "label" : "Age 18-34" ,
            "value" : y_18_34
          },
          { 
            "label" : "Age 35-54" ,
            "value" : y_35_54
          },
          { 
            "label" : "Age 55-64" ,
            "value" : y_55_64
          },
          { 
            "label" : "Age 65+" ,
            "value" : y_65
          }
        ]
      }]
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
  redrawChart(chart,"#chart","tech",data,"Overall",0)
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

$.getJSON('shapefiles/minneapolis_groups.json', function(dataMPLS) {

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
        for (var i=0; i < data.length; i++){
          if (d == data[i].group){
           if (data[i].no_internet >= .20) { return "#2C3942"; }
           if (data[i].no_internet >= .15) { return "#556E7F"; }
           if (data[i].no_internet >= .10) { return "#7F98AA"; }
           if (data[i].no_internet >= .5) { return "#A8B9C5"; }
           if (data[i].no_internet > 0) { return "#C6D1D9"; }
           if (data[i].no_internet == 0) { return "#DAE1E7"; }
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

for (var i=0; i < data.length; i++){
  if (layer.feature.properties.GrpName == data[i].group){
    var stat = '<div class="num" style="color:' + getColor(layer.feature.properties.GrpName) + ';">' + d3.format("%")(data[i].no_internet) + ' without home Internet</div>'
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
      redrawChart(chart,"#chart","tech",data,layer.feature.properties.GrpName,0)
  }

  });

// });
</script>

</html>
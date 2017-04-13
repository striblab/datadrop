(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json('./shapefiles/national_parks.json', function(error, parks) {
d3.csv("./data/visitors.csv", function(d) {
  return {
    state: d.STATE,
    name: d.NICKNAME,
    type: d.TYPE,
    fullname: d.FULLPARKNAME,
    code: d.UnitCode,
    year: d.YEAR,
    visitors: d.VISITORS
  };
}, function(error, rows0) {

d3.csv("./data/parks.csv", function(d) {
  return {
    state: d.STATE,
    name: d.NICKNAME,
    type: d.TYPE,
    fullname: d.FULLPARKNAME,
    code: d.UnitCode,
    latitude: d.Latitude,
    longitude: d.Longitude
  };
}, function(error, rows1) {

var dataVisits = rows0;
var dataParks = rows1;

//PARKS LIST
d3.select("#parksList").selectAll(".switch")
  .data(dataParks).enter().append("div")
  .attr("class",function(d) { return "switch"; })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .html(function(d){ 
    return d.name;
  });

     $('#filter_box').keyup(function(i){
        $('.switch').hide();
        var txt = $('#filter_box').val();
        $('.switch').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });

    $(".switch").click(function()  { 
       $(".switch").removeClass("selected");
       $(this).addClass("selected");
       map.flyTo({ center: [$(this).attr("longitude"),$(this).attr("latitude")], zoom: 9 });
       switchChart($(this).text());
    });


//MAPPAGE
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-95.689444, 39.055833],
    zoom: 2,
    minZoom: 2
});

map.scrollZoom.disable();
// map.addControl(new mapboxgl.Navigation());

map.on('load', function() {

$(".zoom").click(function() {
map.flyTo({ center: [-95.689444, 39.055833], zoom: 2 });
$(".switch").removeClass("selected");
$('.switch').show();
$('.switch').first().addClass("selected");
switchChart("Abraham Lincoln Birthplace");
$('#parksList').animate({scrollTop : 0},800);
$("#filter input").val("");
return false;
});

 map.addSource('parks', {
   type: 'geojson',
   data: parks
 });

map.addLayer({
        'id': 'shape-layer',
        'interactive': true,
        'type': 'fill',
        'source': 'parks',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': "#66AF50",
            'fill-outline-color': '#66AF50'
        }
});

});

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['shape-layer'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML(feature.properties.UNIT_NAME)
        .addTo(map);
});


function switchChart(name){

var axis = [];
var dataStream = [];
axis[0] = 'x';
var indexYear = 1;

for (var j=1930; j<2016; j++){
  axis[indexYear] = j;
  dataStream[indexYear] = 0;
  indexYear++;
}

  $("#parkname").html(name);

  var found = false;
  dataStream[0] = "Visitors";
  var index = 0;

  for (var i=0; i < dataVisits.length; i++){
    if (name == dataVisits[i].name){

      found = true;
      index = i;
      for (var k=1; k < dataStream.length; k++){
        if (dataVisits[index].name != name){ break; }
        if (axis[k] == dataVisits[index].year) { 
          dataStream[k] = dataVisits[index].visitors;
          $("#visitors").html(d3.format(",")(dataVisits[index].visitors)); 
          $("#year").html(dataVisits[index].year);
          index++; 
        }
      }

    }
  }

if (found == true){

// console.log(dataStream);

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 80,
    };

var share = "#B0BEC5";

// console.log(axis);

var chart = c3.generate({
        bindto: '#chart',
        padding: padding,
    data: {
        x: 'x',
        columns: [
            axis,
            dataStream
        ],
        type: 'line'
    },
    color:  { pattern: ["#66AF50"] },
    axis: {
      y: {
            min: 0,
            padding: {bottom: 0},
            tick: {
             count: 4,
             format: d3.format(',.0f')
            }
        },
        x: {
            tick: {
                values: ['1930', '1950', '1990', '2015'],
                count: 4,
                multiline: false
            }
          }
        }
  });
}
}
  
switchChart("Abraham Lincoln Birthplace");
$('.switch').first().addClass("selected");

});
});
});
},{}]},{},[1])
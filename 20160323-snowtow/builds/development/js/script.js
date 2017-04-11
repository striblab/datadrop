(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/events.json", function(error, dataLoad) {

var data = dataLoad.events;

d3.json("./data/grant.geojson", function(error, json) {
d3.json("./data/polk.geojson", function(error, json2) {
d3.json("./data/grant_tickets.json", function(error, json3) {
d3.json("./data/polk_tickets.json", function(error, json4) {
d3.json("./data/vehicle_tracts.json", function(error, json5) {
d3.json('./shapefiles/vehicleblocks.json', function(error, mpls) {
d3.json('./shapefiles/minneapolis_shape.json', function(error, shape) {
d3.json('./shapefiles/minneapolis_neighborhoods.json', function(error, nb) {

var dataTowGrant = json;
var dataTowPolk = json2;
var dataTicketsGrant = json3;
var dataTicketsPolk = json4;

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-93.332291, 44.960911],
    zoom: 11,
    minZoom: 10,
    maxBounds: llb
});

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map.addControl(new mapboxgl.NavigationControl());

var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var timer = [];

function playback(index,stream) {
    title.textContent = data[index].title;
    // description.textContent = data[index].description;

    $("#location-description").html(data[index].description);
    $(".stat").html(data[index].stat);

    // highlightBorough(data[index].id ? data[index].id : '');

    $(".trackDot").removeClass("current");
    $("#d" + index).addClass("current");

    if (index == 0){
    map.setLayoutProperty('polk-tows', 'visibility', 'visible');
    map.setLayoutProperty('grant-tows', 'visibility', 'visible');

    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tows").show();
    }
    if (index == 1){
    map.setLayoutProperty('grant-tows', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tows").show();
    }
    if (index == 2){
    map.setLayoutProperty('polk-tows', 'visibility', 'visible');

    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tows").show();
    }
    else if (index == 3){
    map.setLayoutProperty('grant-tickets', 'visibility', 'visible');
    map.setLayoutProperty('polk-tickets', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tickets").show();
    }
    else if (index == 4){
    map.setLayoutProperty('grant-tickets', 'visibility', 'visible');

    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tickets").show();
    }
    else if (index == 5){
    map.setLayoutProperty('polk-tickets', 'visibility', 'visible');

    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#tickets").show();
    }
    else if (index == 6){
    map.setLayoutProperty('states-layer-0', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-1', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-2', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-3', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-4', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');

    $(".legends").hide();
    $("#scale").show();
    }
    else if (index == 7){
    map.setLayoutProperty('states-layer-0', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-1', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-2', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-3', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-4', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');

    $(".legends").hide();
    $("#scale").show();
    }
    else if (index == 8){
    map.setLayoutProperty('states-layer-0', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-1', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-2', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-3', 'visibility', 'visible');
    map.setLayoutProperty('states-layer-4', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'visible');
    map.setLayoutProperty('grant-tows', 'visibility', 'visible');

    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');

    $(".legends").hide();
    $("#scale").show();
    }
    else if (index == 9){
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'visible');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'visible');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'visible');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'visible');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $(".legends").hide();
    $("#scale").show();
    }
    else if (index == 10){
    map.setLayoutProperty('towing-rate-0', 'visibility', 'visible');
    map.setLayoutProperty('towing-rate-1', 'visibility', 'visible');
    map.setLayoutProperty('towing-rate-2', 'visibility', 'visible');
    map.setLayoutProperty('towing-rate-3', 'visibility', 'visible');
    map.setLayoutProperty('towing-rate-4', 'visibility', 'visible');

    map.setLayoutProperty('polk-tows', 'visibility', 'none');
    map.setLayoutProperty('grant-tows', 'visibility', 'none');
    map.setLayoutProperty('polk-tickets', 'visibility', 'none');
    map.setLayoutProperty('grant-tickets', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-0', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-1', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-2', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-3', 'visibility', 'none');
    map.setLayoutProperty('ticketing-rate-4', 'visibility', 'none');
    map.setLayoutProperty('states-layer-0', 'visibility', 'none');
    map.setLayoutProperty('states-layer-1', 'visibility', 'none');
    map.setLayoutProperty('states-layer-2', 'visibility', 'none');
    map.setLayoutProperty('states-layer-3', 'visibility', 'none');
    map.setLayoutProperty('states-layer-4', 'visibility', 'none');

    $("#toggle").attr("class", "play myButton2");
    $("#toggle").html("&#9658;");

    $(".legends").hide();
    $("#scale").show();
    }

    // Animate the map position based on camera properties
   if ($(window).width() > 500) { map.flyTo({center:[data[index].longitude,data[index].latitude],zoom:data[index].zoom,bearing:data[index].bearing,pitch:data[index].pitch}); }

    // map.once('moveend', function() {

    // });
}

function play(j,timeout){
 timer[j] = window.setTimeout(function() { playback(j); }, timeout); 
}

function stop(){
  for (var i=0; i<data.length; i++){
     clearTimeout(timer[i]);
  }
}

// Display the last title/description first
title.textContent = data[data.length - 1].title;
description.textContent = data[data.length - 1].description;


map.on('load', function() {

    map.addSource("mpls", {
        type: "geojson",
        data: mpls
    });

    map.addSource("tracts", {
        type: "geojson",
        data: json5
    });


var layers = [
['#F7F7F7', 0],
['#CCCCCC', 10],
['#969696', 30],
['#636363', 50],
['#252525', 70]
];


layers.forEach(function(layer, i) {
   map.addLayer({
        'id': 'states-layer-' + i,
        'interactive': true,
        'type': 'fill',
        'source': 'mpls',
        "filter": [
        ">=",
        "CarsBlock",
        layer[1]
        ],
        'paint': {
            // 'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': layer[0],
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });


   });




var layers2 = [
['#F7F7F7', 0],
['#CCCCCC', 10],
['#969696', 30],
['#636363', 50],
['#252525', 70]
];


layers2.forEach(function(layer, i) {
   map.addLayer({
        'id': 'ticketing-rate-' + i,
        'interactive': true,
        'type': 'fill',
        'source': 'tracts',
        "filter": [
        ">=",
        "TagsPer1k",
        layer[1]
        ],
        'paint': {
            // 'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': layer[0],
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });
   });

var layers3 = [
['#F7F7F7', 0],
['#CCCCCC', 5],
['#969696', 15],
['#636363', 25],
['#252525', 30]
];


layers3.forEach(function(layer, i) {
   map.addLayer({
        'id': 'towing-rate-' + i,
        'interactive': true,
        'type': 'fill',
        'source': 'tracts',
        "filter": [
        ">=",
        "TowsPer1k",
        layer[1]
        ],
        'paint': {
            // 'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': layer[0],
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });
   });

    map.addSource("grant", {
        type: "geojson",
        data: dataTowGrant
    });

    map.addSource("polk", {
        type: "geojson",
        data: dataTowPolk
    });

    map.addLayer({
                "id": "grant-tows",
                "type": "circle",
                "source": "grant",
                "paint": {
                    "circle-color": 'rgba(37,37,37, 0.45)',
                    "circle-radius": 2.5
                }
    });

    map.addLayer({
                "id": "polk-tows",
                "type": "circle",
                "source": "polk",
                "paint": {
                    "circle-color": 'rgba(37,37,37, 0.45)',
                    "circle-radius": 2.5
                }
    });

    map.addSource("grantTickets", {
        type: "geojson",
        data: dataTicketsGrant
    });

    map.addSource("polkTickets", {
        type: "geojson",
        data: dataTicketsPolk
    });

    map.addLayer({
                "id": "grant-tickets",
                "type": "circle",
                "source": "grantTickets",
                "paint": {
                    "circle-color": 'rgba(194,42,34, 0.45)',
                    "circle-radius": 2.5
                }
    });

    map.addLayer({
                "id": "polk-tickets",
                "type": "circle",
                "source": "polkTickets",
                "paint": {
                    "circle-color": 'rgba(194,42,34, 0.45)',
                    "circle-radius": 2.5
                }
    });


    map.addSource("mplsnb", {
        type: "geojson",
        data: nb
    });

  map.addLayer({
        'id': 'shape-layer',
        'interactive': true,
        'type': 'fill',
        'source': 'mplsnb',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.1,
            'fill-color': "#888",
            'fill-outline-color': 'rgba(51, 51, 51, 1)'
        }
    });

// Create a popup, but don't add it to the map yet.
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
        .setHTML(feature.properties.Name)
        .addTo(map);
});

  playback(0);

  $("#info").show();

var index = 0;
$(document).ready(function() {
        $('#toggle').bind("click", function() {
          if ($(this).attr("class") == "play myButton2") {
             $(this).attr("class", "pause myButton2");
             $(this).html("&#9724;");
             for (var j=0; j<data.length; j++){ play(j,j*5000); if (index < data.length) { index++; } }
         }
          else {
             $(this).attr("class", "play myButton2");
             $(this).html("&#9658;");
             stop();
           }
        });
      });

$(".previous").click(function() {
  if (index > 0) {
  index--;
  stop();
  playback(index);
}
  });

$(".next").click(function() {
  if (index < data.length-1) {
  stop();
  index++;
  playback(index);
}
  });

$(".trackDot").click(function() {
  $("#toggle").attr("class", "play myButton2");
  $("#toggle").html("&#9658;");
  $(".trackDot").removeClass("current");
  $(this).addClass("current");
  stop();
  index = Number($(this).attr("index"));
  playback(Number($(this).attr("index")));
});

    if ($(window).width() <= 500) { map.flyTo({ center: [-93.266667, 44.983333], zoom: 5 }); }
    else { map.flyTo({ center: [-93.332291, 44.960911], zoom: 11 }); }
    $(window).resize(function() {
    if ($(window).width() <= 500) { map.flyTo({ center: [-93.266667, 44.983333], zoom: 5 }); }
    else { map.flyTo({ center: [-93.332291, 44.960911], zoom: 11 }); }
    });

$(".zoom").click(function() {
map.flyTo({ center: [-93.332291, 44.960911], zoom: 11 });
});

$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address");


});
});
});
});
});
});
});
});
});
});
},{}]},{},[1])
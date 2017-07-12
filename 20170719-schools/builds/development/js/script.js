(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

d3.json("./shapefiles/minneapolis_boe.json", function(error, districts) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.266667, 44.983333], 
    zoom: 10,
    minZoom: 3,
    hash: false
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map))

map.on('load', function() {

 map.addSource('districts', {
   type: 'geojson',
   data: districts
 });

  map.addLayer({
       'id': 'district-layer1',
       'interactive': true,
       'source': 'districts',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.7,
           'fill-color': {
            "property": "ac",
            "stops": [
              [70, "#f1eef6"],
              [80, "#bdd7e7"],
              [90, "#6baed6"],
              [100, "#08519c"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['district-layer1'] });
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
        .setHTML("<div>" + feature.properties.Name + "</div><div>" + feature.properties.ac + "% with AC")
        .addTo(map);
});

});

var map2 = new mapboxgl.Map({
    container: 'map2', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.266667, 44.983333], 
    zoom: 10,
    minZoom: 3,
    hash: false
});

map2.addControl(new mapboxgl.NavigationControl());
map2.scrollZoom.disable();

var geocoder2 = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder2').appendChild(geocoder2.onAdd(map2))

map2.on('load', function() {

 map2.addSource('districts', {
   type: 'geojson',
   data: districts
 });

  map2.addLayer({
       'id': 'district-layer2',
       'interactive': true,
       'source': 'districts',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.7,
           'fill-color': {
            "property": "util",
            "stops": [
              [50, "#fee5d9"],
              [60, "#fcae91"],
              [70, "#fb6a4a"],
              [80, "#de2d26"],
              [90, "#a50f15"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

var popup2 = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map2.on('mousemove', function(e) {
    var features = map2.queryRenderedFeatures(e.point, { layers: ['district-layer2'] });
    // Change the cursor style as a UI indicator.
    map2.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup2.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup2.setLngLat(e.lngLat)
        .setHTML("<div>" + feature.properties.Name + "</div><div>" + feature.properties.util + "% of buildings used")
        .addTo(map2);
});

});

var map3 = new mapboxgl.Map({
    container: 'map3', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.266667, 44.983333], 
    zoom: 10,
    minZoom: 3,
    hash: false
});

map3.addControl(new mapboxgl.NavigationControl());
map3.scrollZoom.disable();

var geocoder3 = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder3').appendChild(geocoder3.onAdd(map3))

map3.on('load', function() {

 map3.addSource('districts', {
   type: 'geojson',
   data: districts
 });

  map3.addLayer({
       'id': 'district-layer3',
       'interactive': true,
       'source': 'districts',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.7,
           'fill-color': {
            "property": "since",
            "stops": [
              [30, "#f2f0f7"],
              [50, "#cbc9e2"],
              [60, "#9e9ac8"],
              [70, "#756bb1"],
              [80, "#54278f"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

var popup3 = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map3.on('mousemove', function(e) {
    var features = map3.queryRenderedFeatures(e.point, { layers: ['district-layer3'] });
    // Change the cursor style as a UI indicator.
    map3.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup3.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup3.setLngLat(e.lngLat)
        .setHTML("<div>" + feature.properties.Name + "</div><div>" + feature.properties.since + " average years since built")
        .addTo(map3);
});

});

$("input").attr("placeholder","Search by address, neighborhood or keyword");

$(".geocoder-icon-close").on("click",function(){
   map.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
   map2.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
   map3.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
});

$('input').on('keyup search', function(e){
  var txt = $('#filter_box').val();
    if (txt == null || txt == "") {
     map.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
     map2.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
     map3.flyTo({ center: [-93.266667, 44.983333], zoom: 10 });
    }
});

});
},{}]},{},[1])
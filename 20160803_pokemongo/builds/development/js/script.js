(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/portalsmn.geojson", function(error, portals) {
d3.json('./shapefiles/counties.json', function(error, counties) {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    center: [-93.784790, 46.362093],
    zoom: 5.4,
    minZoom: 5.4
});

$(".zoom").click(function() {
map.flyTo({ center: [-93.773804, 46.187437], zoom: 5.4 });
$(".fly").removeClass("selected");
$("#chatter").html("This map displays a heavy sampling of Ingress portal locations throughout Minnesota, showing the heaviest concentrations of Pokestops in urban areas.");
});

$(".card").click(function() {
map.flyTo({ center: [$(this).attr("long"), $(this).attr("lat")], zoom: 5 });
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address or city");



  map.addSource('counties', {
   type: 'geojson',
   data: counties
 });


map.addLayer({
        'id': 'shape-layer-counties',
        'interactive': true,
        'type': 'fill',
        'source': 'counties',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.09,
            'fill-color': "#333",
            'fill-outline-color': '#ddd'
        }
});

   map.addSource("portals", {
        type: "geojson",
        data: portals
    });

    map.addLayer({
                "id": "portal-points",
                "type": "circle",
                "source": "portals",
                "paint": {
                    "circle-color": 'rgba(0,191,255, 0.45)',
                    // "circle-color": 'rgba(14,121,178, 0.45)',
                    "circle-radius": 3
                }
    });

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

$(".fly").click(function() {
  $(".fly").removeClass("selected");
  $(this).addClass("selected");
  map.flyTo({ center: [$(this).attr("longitude"), $(this).attr("latitude")], zoom: $(this).attr("zoom") });
  $("#chatter").html($(this).attr("chatter"));
});

// map.on('mousemove', function(e) {
//     .addTo(map);
// });

});
});
});
},{}]},{},[1])
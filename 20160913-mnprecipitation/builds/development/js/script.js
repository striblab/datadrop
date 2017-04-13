(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json('./shapefiles/stations.geojson', function(error, spots) {

//MAPPAGE BLOCKS
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map2 = new mapboxgl.Map({
    container: 'map_blocks',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-94.6859, 46.729553],
    zoom: 5.4,
    minZoom: 2
});

$(".zoom").click(function() {
map2.flyTo({ center: [-94.6859, 46.729553], zoom: 5.4 });
});

map2.scrollZoom.disable();

map2.on('load', function() {

    map2.addSource("spots", {
        type: "geojson",
        data: "./shapefiles/stations.geojson"
    });

        map2.addLayer({
            "id": "cluster",
            "type": "circle",
            "source": "spots",
            "paint": {
                "circle-color": {
                property: 'PRECIP',
                stops: [
                [0, '#ADD6F0'],
                [15, '#7FB9DE'],
                [20, '#03253B']]
                },
                "circle-radius": 4,
                "circle-opacity": 1,
                "circle-blur": 0 
            }
        }, 'waterway-label');
});
});
},{}]},{},[1])
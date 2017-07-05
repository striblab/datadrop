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
       'id': 'district-layer',
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
              [80, "#bdc9e1"],
              [90, "#0570b0"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 0.1)'
     }
   }, 'place-neighbourhood');

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
       'id': 'district-layer',
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
       'id': 'district-layer',
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
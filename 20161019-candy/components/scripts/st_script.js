d3.json("./data/candy.json", function(error, dataLoad) {

var data = dataLoad.candy;

d3.json("./shapefiles/metrocandy.json", function(error, blocks) {
d3.json("./shapefiles/metro_cities.json", function(error, metro) {
d3.json("./shapefiles/counties.json", function(error, counties) {

var sw = new mapboxgl.LngLat(-93.716125, 44.643254);
var ne = new mapboxgl.LngLat(-92.763062, 45.350215);
var llb = new mapboxgl.LngLatBounds(sw, ne);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n',
    center: [-93.924866, 44.995883],
    zoom: 8,
    minZoom: 7.5
});

// var geocoder = new mapboxgl.Geocoder({
//     container: 'geocoder-container'
// });

// map.addControl(geocoder);
// map.addControl(new mapboxgl.Navigation());

var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var timer = [];

function playback(index,stream) {
    title.textContent = data[index].title;

    $("#location-description").html(data[index].description);
    $(".stat").html(data[index].stat);

    $(".trackDot").removeClass("current");
    $("#d" + index).addClass("current");

    // Animate the map position based on camera properties
    map.flyTo({center:[data[index].longitude,data[index].latitude],zoom:data[index].zoom,bearing:data[index].bearing,pitch:data[index].pitch});

    console.log(index);

    if (index == 0){
      if ($(window).width() < 700) { 
      map.flyTo({ center: [-93.266667, 44.983333], zoom: 7.3 }); 
      map.setLayoutProperty('counties-layer', 'visibility', 'visible'); 
      }
    } else { map.setLayoutProperty('counties-layer', 'visibility', 'none'); }

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

    //BLOCKS

 map.addSource('blocks', {
   type: 'geojson',
   data: blocks
 });

   map.addLayer({
        'id': 'blocks-layer',
        'interactive': true,
        'source': 'blocks',
        'layout': {},
        'type': 'fill',
        // "filter": [
        // "==",
        // "COUNTYNAME",
        // layer[0]
        // ],
             'paint': {
            'fill-color':{
            // property: 'B19113e1',
            property: 'CandyScore', 
            stops: [
                [0, '#333'],
                [16, '#fdd49e'],
                [20, '#fdbb84'],
                [30, '#FC8D59'],
                [40, '#e34a33'],
                [50, '#b30000']
            ]
        },
             'fill-opacity': 0.6
      }
    }, 'place-neighbourhood');

    //METRO

 map.addSource('metro', {
   type: 'geojson',
   data: metro
 });

   map.addLayer({
        'id': 'metro-layer',
        'interactive': true,
        'source': 'metro',
        'layout': {},
        'type': 'fill',
             'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.2,
            'fill-color': "#888",
            'fill-outline-color': 'rgba(255, 255, 255, 1)'
      }
    }, 'place-neighbourhood');

    //COUNTIES

 map.addSource('counties', {
   type: 'geojson',
   data: counties
 });

   map.addLayer({
        'id': 'counties-layer',
        'interactive': false,
        'source': 'counties',
        'layout': {},
        'type': 'fill',
             'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.1,
            'fill-color': "#888",
            'fill-outline-color': 'rgba(255, 255, 255, 1)'
      }
    }, 'place-neighbourhood');

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['metro-layer'] });
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
        .setHTML(feature.properties.COCTU_DESC)
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

    $( document ).ready(function() {
        if ($(window).width() <= 770) { map.flyTo({ center: [-93.266667, 44.983333], zoom: 7.3 }); }
        else { map.flyTo({ center: [-93.924866, 44.995883], zoom: 8 }); }
    });

    $(window).resize(function() {
    if ($(window).width() <= 770) { map.flyTo({ center: [-93.266667, 44.983333], zoom: 7.3 }); }
    else { map.flyTo({ center: [-93.924866, 44.995883], zoom: 8 }); }
    });

$(".zoom").click(function() {
map.flyTo({ center: [-93.924866, 44.995883], zoom: 8.5 });
});

});
});
});
});
});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json('./shapefiles/beaches.json', function(error, beaches) {
d3.json('./shapefiles/streams.json', function(error, streams) {
d3.json('./shapefiles/wetlands.json', function(error, wetlands) {
d3.json('./shapefiles/lakes.json', function(error, lakes) {
d3.json('./shapefiles/counties.json', function(error, counties) {

//MAPPAGE
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze',
    center: [-94.6859, 46.729553],
    zoom: 5.4,
    minZoom: 5.4
});

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('load', function() {


$(".zoom").click(function() {
map.flyTo({ center: [-94.6859, 46.729553], zoom: 5.4 });
});

    map.addSource("counties", {
        type: "geojson",
        data: counties
    });

map.addLayer({
        'id': 'shape-layer-counties',
        'interactive': true,
        'type': 'fill',
        'source': 'counties',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.3,
            'fill-color': "#ddd",
            'fill-outline-color': '#333'
        }
});

    map.addSource("beaches", {
        type: "geojson",
        data: beaches
    });

map.addLayer({
        'id': 'shape-layer-beaches',
        'interactive': true,
        'type': 'fill',
        'source': 'beaches',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': "#904E55",
            'fill-outline-color': '#904E55'
        }
});

    map.addSource("streams", {
        type: "geojson",
        data: streams
    });

map.addLayer({
        'id': 'shape-layer-streams',
        'interactive': true, 
        'type': 'line',
        'source': 'streams',
        'paint': {
            // 'fill-antialias' : true,
            // 'fill-opacity': 0.1,
            'line-color': "#904E55"
            // 'fill-outline-color': '#904E55'
        }
});

    map.addSource("wetlands", {
        type: "geojson",
        data: wetlands
    });

map.addLayer({
        'id': 'shape-layer-wetlands',
        'interactive': true,
        'type': 'fill',
        'source': 'wetlands',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': "#904E55",
            'fill-outline-color': '#904E55'
        }
});

    map.addSource("lakes", {
        type: "geojson",
        data: lakes
    });

map.addLayer({
        'id': 'shape-layer-lakes',
        'interactive': true,
        'type': 'fill',
        'source': 'lakes',
        'paint': {
            'fill-antialias' : true,
            'fill-opacity': 0.5,
            'fill-color': "#904E55",
            'fill-outline-color': '#904E55'
        }
});

});

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['shape-layer-lakes','shape-layer-streams','shape-layer-beaches','shape-layer-wetlands'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];
    var reason = "";

    if (String(feature.properties.IMPAIR_PAR).search("Hg-F") != -1) { reason += "Mercury in fish tissue; "; }
    if (String(feature.properties.IMPAIR_PAR).search("Hg-W") != -1) { reason += "Mercury in the water column; "; }
    if (String(feature.properties.IMPAIR_PAR).search("CHLORIDE") != -1) { reason += "Chloride; "; }
    if (String(feature.properties.IMPAIR_PAR).search("NUTRIENTS") != -1) { reason += "Nutrient/Eutrophication biological indicators; "; }
    if (String(feature.properties.IMPAIR_PAR).search("PFO-S") != -1) { reason += "Perfluorooctane sulfonate; "; }
    if (String(feature.properties.IMPAIR_PAR).search("FC") != -1) { reason += "FC; "; }
    if (String(feature.properties.IMPAIR_PAR).search("T") != -1) { reason += "Turbidity; "; }
    if (String(feature.properties.IMPAIR_PAR).search("DO") != -1) { reason += "Dissolved oxygen; "; }
    if (String(feature.properties.IMPAIR_PAR).search("ColdWater") != -1) { reason += "ColdWater; "; }
    if (String(feature.properties.IMPAIR_PAR).search("Nitrates") != -1) { reason += "Nitrates; "; }
    if (String(feature.properties.IMPAIR_PAR).search("InvertBio") != -1) { reason += "Aquatic macroinvertebrate bioassessments; "; }
    if (String(feature.properties.IMPAIR_PAR).search("FishesBio") != -1) { reason += "Fishes bioassessments; "; }
    if (String(feature.properties.IMPAIR_PAR).search("E.coli") != -1) { reason += "E.coli; "; }
    if (String(feature.properties.IMPAIR_PAR).search("PCB-F") != -1) { reason += "Polychlorinated biphenyl; "; }
    // if (String(feature.properties.IMPAIR_PAR).search("") != -1) { reason += feature.properties.IMPAIR_PAR; }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML("<div class='head'>" + feature.properties.NAME + "</div><div>Impairment: " + reason + "</div>")
        .addTo(map);
});

});
});
});
});
});
},{}]},{},[1])
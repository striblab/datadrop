/**
 * Main JS file for project.
 */
// Define globals that are added through the config.json file, here like this:
// /* global _ */
'use strict';

// Dependencies
import utilsFn from './utils.js';

// Import local ES6 modules like this:
//import utilsFn from './utils.js';

// Or import libraries installed with npm like this:
// import module from 'module';

// Setup utils function
utilsFn({});

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

if (selected == "sample") 
{
d3.json("./shapefiles/oneday.geojson", function(error, oneday) {
// d3.json("./shapefiles/locations.geojson", function(error, locations) {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
        // style: 'mapbox://styles/shadowflare/cjf30xlkn2h1f2sqn8swyx29g',
        center: [-93.273775, 44.969773],
        zoom: 14,
        minZoom: 2,
        interactive: true
    });

    // map.addControl(new mapboxgl.NavigationControl());
    // map.scrollZoom.disable();
    // map.dragRotate.disable();
    // map.doubleClickZoom.disable();
    // map.touchZoomRotate.disableRotation();

    map.on('load', function() {

        map.addSource('oneday', {
            type: 'geojson',
            data: oneday
        });

        map.addLayer({
            "id": "oneday-layer",
            "type": "circle",
            "source": "oneday",
            "paint": {
                "circle-radius": 3,
                "circle-color": 'rgba(156, 0, 4, .4)',
                "circle-stroke-color": "rgba(156, 0, 4, .4)",
                "circle-stroke-width": 0.2,
            }
        });

        // var popup = new mapboxgl.Popup({
        //     closeButton: false,
        //     closeOnClick: false
        // });

        // map.on('mousemove', function(e) {
        //     var features = map.queryRenderedFeatures(e.point, { layers: ['bloomington-layer'] });
        //     // Change the cursor style as a UI indicator.
        //     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        //     if (!features.length) {
        //         popup.remove();
        //         return;
        //     }

        //     var feature = features[0];

        //     // Populate the popup and set its coordinates
        //     // based on the feature found.
        //     popup.setLngLat(e.lngLat)
        //         .setHTML(feature.properties.Name)
        //         .addTo(map);
        // });

    });
// });
});
} else {

// d3.json("./shapefiles/bloomington-neighborhoods.geojson", function(error, bloomington) {
// d3.json("./shapefiles/locations.geojson", function(error, locations) {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
    var map = new mapboxgl.Map({
        container: 'map',
        // style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
        style: 'mapbox://styles/shadowflare/cjf30xlkn2h1f2sqn8swyx29g',
        center: [-93.270831, 44.971611],
        zoom: 13,
        minZoom: 2,
        interactive: false
    });

    // map.addControl(new mapboxgl.NavigationControl());
    // map.scrollZoom.disable();
    // map.dragRotate.disable();
    // map.doubleClickZoom.disable();
    // map.touchZoomRotate.disableRotation();

    map.on('load', function() {

        // map.addSource('locations', {
        //     type: 'geojson',
        //     data: locations
        // });

        // map.addLayer({
        //     "id": "locations-layer",
        //     "type": "circle",
        //     "source": "locations",
        //     "paint": {
        //         "circle-radius": 1,
        //         "circle-color": 'rgba(156, 0, 4, .4)',
        //         "circle-stroke-color": "rgba(156, 0, 4, .4)",
        //         "circle-stroke-width": 0.2,
        //     }
        // });

        // var popup = new mapboxgl.Popup({
        //     closeButton: false,
        //     closeOnClick: false
        // });

        // map.on('mousemove', function(e) {
        //     var features = map.queryRenderedFeatures(e.point, { layers: ['bloomington-layer'] });
        //     // Change the cursor style as a UI indicator.
        //     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        //     if (!features.length) {
        //         popup.remove();
        //         return;
        //     }

        //     var feature = features[0];

        //     // Populate the popup and set its coordinates
        //     // based on the feature found.
        //     popup.setLngLat(e.lngLat)
        //         .setHTML(feature.properties.Name)
        //         .addTo(map);
        // });

    });
// });
// });

} 
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

d3.json("./shapefiles/minneapolis_nb.json", function(error, nb) {
d3.json("./data/shootings.json", function(error, shootings) {
d3.json("./data/ranking.json", function(error, dataLoad) {

var dataRank = dataLoad.ranking;

function tableBuild(){
d3.select("#chart").selectAll(".row")
  .data(dataRank).enter().append("div")
  .attr("class","row")
  .style('background-color',function(d) { 

    if (d.rate >= 30) { return "#99000d"; }
    if (d.rate >= 20) { return "#cb181d"; }
    if (d.rate >= 10) { return "#ef3b2c"; }
    if (d.rate >= 8) { return "#fb6a4a"; }
    if (d.rate >= 6) { return "#fc9272"; }
    if (d.rate >= 4) { return "#fcbba1"; }
    if (d.rate >= 1) { return "#fee0d2"; }
    if (d.rate >= 0) { return "#dddddd"; }

  })
  .attr("latitude",function(d) { return d.latitude; })
  .attr("longitude",function(d) { return d.longitude; })
  .on("mousedown",function(d) { 
    $(".districtName").html(d.neighborhood);
    map.flyTo({ center: [d.longitude, d.latitude], zoom:13 });
  })
  .html(function(d,i){ 
    return "<div class='cell neighborhood'>" + d.neighborhood + "</div><div class='cell rate'>" + d3.format(".1f")(d.rate) + "</div><div class='cell shootings'>" + d.shooting + "</div>";
  });
}

tableBuild();

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "neighborhood") { 
        if (sorted == "descend") { return d3.descending(a.neighborhood, b.neighborhood); }
        if (sorted == "ascend") { return d3.ascending(a.neighborhood, b.neighborhood); }
     }
          if (candidate == "rate") { 
        if (sorted == "descend") { return d3.descending(a.rate, b.rate); }
        if (sorted == "ascend") { return d3.ascending(a.rate, b.rate); }
     }
           if (candidate == "shooting") { 
        if (sorted == "descend") { return d3.descending(a.shooting, b.shooting); }
        if (sorted == "ascend") { return d3.ascending(a.shooting, b.shooting); }
     }
    })
    .transition().duration(500);
}

$( document ).ready(function() {
 $(".row").click(function() {
   $(".row").removeClass("rowSelect");
   $(this).addClass("rowSelect");
 }); 

 $(".hSort").click(function() {
   $(".hSort").removeClass("selected");
   $(this).addClass("selected");
   if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
   else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
   tableSort("#chart",null,dataRank,$(this).attr("data"),sorted);
 }); 

 $('#filter_box').on('keyup search', function(e){
     $('.row').hide();
     var txt = $('#filter_box').val();
     $('.row').each(function(){
        if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
            $(this).show();
        }
     });
     // var count = $('.card:visible').length;
     // $('#results').html(count);
 });

$('.scrollToTop').click(function(){
    $(".row").show();
    $('#filter_box').val("");
    map.flyTo({ center: [-93.264313, 44.973269], zoom:10 });
    $('#chart').animate({scrollTop : 0},800);
    return false;
  });
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    center: [-93.264313, 44.973269], 
    zoom: 10,
    minZoom: 10,
    hash: false
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.doubleClickZoom.disable();

map.on('load', function() {

 map.addSource('nb', {
   type: 'geojson',
   data: nb
 });

  map.addLayer({
       'id': 'nb-layer',
       'interactive': true,
       'source': 'nb',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': {
            "property": "maindata_rate",
            "stops": [
              [0, "#dddddd"],
              [1, "#fee0d2"],
              [4, "#fcbba1"],
              [6, "#fc9272"],
              [8, "#fb6a4a"],
              [10, "#ef3b2c"],
              [20, "#cb181d"],
              [30, "#99000d"]
           ]
        },
           'fill-outline-color': 'rgba(255, 255, 255, 1)'
     }
   }, 'place-neighbourhood');

 map.addSource('shootings', {
   type: 'geojson',
   data: shootings
 });

         map.addLayer({
                  "id": "shootings-layer",
                  "type": "circle",
                  "source": "shootings",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(150, 150, 150, 0.8)'
                  },
                  "filter": [
                  "==",
                  "WeaponCategory",
                  "UNARMED"]
        });

         map.addLayer({
                  "id": "shootings-layer2",
                  "type": "circle",
                  "source": "shootings",
                  "paint": {
                     "circle-radius": 3,
                     "circle-color": 'rgba(66, 134, 244, 0.8)'
                  },
                  "filter": [
                  "!=",
                  "WeaponCategory",
                  "UNARMED"]
        });


var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['shootings-layer','shootings-layer2'] });
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
        .setHTML("<div>" + feature.properties.FirstName + " " + feature.properties.LastName + "</div><div>died in " + feature.properties.year + "</div><div>" + feature.properties.WeaponCategory + "</div>")
        .addTo(map);
});

});


function raceChart(){
    var chart = c3.generate({
      bindto: '#raceChart',
      padding: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 80,
      },
      data: {
        // x: 'x',
        columns: [
          ["Deaths",0.172,0.62,0.068,0.068,0.068],
          ["Minneapolis",0.64,0.186,0.56,0.02,0.105]
        ],
        type: 'bar'
      },
      legend: {
        show: false
      },
      color: {
        pattern: ['#ef3b2c','#333333']
      },
      axis: {
        // rotated: true,
        y: {
          max: 1,
          min: 0,
          padding: {
            bottom: 0,
            top: 0
          },
          tick: {
            count: 5,
            format: d3.format('%.0f'),
            values: [0,0.25,0.50,0.75,1]
          }
        },
        x: {
          type: 'category',
          tick: {
              rotate: -60,
              multiline: false
          },
          height: 40,
          categories: ["White","Black","Asian","Native","Hispanic"],
          padding: {
            left: 0.25,
            right: 0.25
          }
        }
      },
         regions: [
        {axis: 'x', start: 2007, end: 2009, class: 'hottest'},
    ]
      // tooltip: {
      //   contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      //     return '<div class="chart-tooltip">' +
      //       '<span class="tooltip-label">' + d[0].x + ':</span>' +
      //       '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
      //       '</div>';
      //   }
      // }
    });
}

raceChart();

});
});
});
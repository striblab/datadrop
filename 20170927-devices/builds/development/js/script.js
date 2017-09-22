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


//build charts
  function chartDevices(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 100,
        };

    var chartTrend = c3.generate({
          bindto: "#chartDevices",
          padding: padding,
          data: {
                columns: [
                  ['US',0.774,0.765,0.578,0.030,0.107],
                  ['MN',0.808,0.755,0.603,0.025,0.098]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#aaaaaa','#333333']
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Desktop/Laptop','Smartphone','Tablet','Other Computer','No computer'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartDevices();

  function chartStates(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 100,
        };

    var chartStates = c3.generate({
          bindto: "#chartStates",
          padding: padding,
          data: {
                columns: [
                  ['ND',0.786,0.745,0.577,0.023,0.108],
                  ['SD',0.771,0.713,0.562,0.024,0.124],
                  ['IA',0.764,0.725,0.564,0.022,0.119],
                  ['WI',0.775,0.718,0.566,0.025,0.116],
                  ['MN',0.808,0.755,0.603,0.025,0.098]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#f0f0f0','#bdbdbd','#737373','#525252','#333333']
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Desktop/Laptop','Smartphone','Tablet','Other Computer','No computer'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartStates();

  function chartRace(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 100,
        };

    var chartRace = c3.generate({
          bindto: "#chartRace",
          padding: padding,
          data: {
                columns: [
                  ['Asian',0.901,0.872,0.06],
                  ['White',0.817,0.746,0.12],
                  ['Hispanic',0.683,0.758,0.16],
                  ['Black',0.651,0.702,0.20]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#693c46','#865f67','#a3858b','#C1ACB1']
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Desktop/Laptop','Handheld','No computer'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartRace();

//tech changes over time
  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
                columns: [
                  ['768k Down/200k Up',0.971,0.978,0.980,0.985,0.985,0.988,0.987],
                  ['1.5M Down/200k Up',0.967,0.973,0.975,0.981,0.981,0.986,0.985],
                  ['3M Down/768k Up',0.911,0.930,0.945,0.958,0.960,0.967,0.978],
                  ['6M Down/1.5M Up',0.812,0.851,0.868,0.899,0.909,0.929,0.940],
                  ['10M Down/1.5M Up',0.802,0.841,0.855,0.887,0.894,0.904,0.916],
                  ['25M Down/1.5M Up',0.689,0.715,0.728,0.833,0.843,0.858,0.879],
                  ['50M Down/1.5M Up',0.652,0.684,0.686,0.789,0.798,0.814,0.846],
                  ['100M Down/1.5M Up',0.453,0.677,0.678,0.760,0.762,0.798,0.829],
                  ['1G Down/1.5M Up',0.0,0.0,0.0,0.0,0.0,0.01,0.015]
                ],
            type: 'line'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#DDDDDD','#C1C1C1','#A5A5A5','#8A8A8A','#6E6E6E','#525252','#373737','#1B1B1B','#000000']
                },
            axis: {
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Oct 2011','Apr 2012','Oct 2012','Apr 2013','Oct 2013','Apr 2014','Oct 2014'],
                    tick: {
                         rotate: -75,
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    },
                    height: 40
                 }
            }
    });
}

chartTrend();

//iot adoption chart
  function chartIOT(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chartIOT",
          padding: padding,
          data: {
                columns: [
                  ['768k Down/200k Up',0.971,0.978,0.980,0.985,0.985,0.988,0.987],
                  ['1.5M Down/200k Up',0.967,0.973,0.975,0.981,0.981,0.986,0.985],
                  ['3M Down/768k Up',0.911,0.930,0.945,0.958,0.960,0.967,0.978],
                  ['6M Down/1.5M Up',0.812,0.851,0.868,0.899,0.909,0.929,0.940],
                  ['10M Down/1.5M Up',0.802,0.841,0.855,0.887,0.894,0.904,0.916],
                  ['25M Down/1.5M Up',0.689,0.715,0.728,0.833,0.843,0.858,0.879],
                  ['50M Down/1.5M Up',0.652,0.684,0.686,0.789,0.798,0.814,0.846],
                  ['100M Down/1.5M Up',0.453,0.677,0.678,0.760,0.762,0.798,0.829],
                  ['1G Down/1.5M Up',0.0,0.0,0.0,0.0,0.0,0.01,0.015]
                ],
            type: 'line'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#DDDDDD','#C1C1C1','#A5A5A5','#8A8A8A','#6E6E6E','#525252','#373737','#1B1B1B','#000000']
                },
            axis: {
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Oct 2011','Apr 2012','Oct 2012','Apr 2013','Oct 2013','Apr 2014','Oct 2014'],
                    tick: {
                         rotate: -75,
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    },
                    height: 40
                 }
            }
    });
}

chartIOT();

  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 100,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
                columns: [
                  ['US',0.42,0.48,0.64,0.72,0.36]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#aaaaaa','#333333']
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('+%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['  Smartphone (since 2011)','   Tablet (since 2010)','Social Media (since 2005)','Home Broadband (since 2000)','Internet Use (since 2000)'],
                    tick: {
                        // count: 4,
                        multiline: true,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartTrend();

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';

// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
//     center: [-94.085900, 46.729553], 
//     zoom: 4.8,
//     // minZoom: 10,
//     hash: false
// });

// map.addControl(new mapboxgl.NavigationControl());
// map.scrollZoom.disable();
// map.doubleClickZoom.disable();

// map.on('load', function() {

//  map.addSource('nb', {
//    type: 'geojson',
//    data: nb
//  });

//   map.addLayer({
//        'id': 'nb-layer',
//        'interactive': true,
//        'source': 'nb',
//        'layout': {},
//        'type': 'fill',
//             'paint': {
//            'fill-antialias' : true,
//            'fill-opacity': 0.7,
//            'fill-color': {
//             "property": "maindata_rate",
//             "stops": [
//               [0, "#dddddd"],
//               [1, "#fee0d2"],
//               [4, "#fcbba1"],
//               [6, "#fc9272"],
//               [8, "#fb6a4a"],
//               [10, "#ef3b2c"],
//               [20, "#cb181d"],
//               [30, "#99000d"]
//            ]
//         },
//            'fill-outline-color': 'rgba(255, 255, 255, 1)'
//      }
//    }, 'place-neighbourhood');

//  map.addSource('shootings', {
//    type: 'geojson',
//    data: shootings
//  });

//          map.addLayer({
//                   "id": "shootings-layer",
//                   "type": "circle",
//                   "source": "shootings",
//                   "paint": {
//                      "circle-radius": 3,
//                      "circle-color": 'rgba(150, 150, 150, 0.8)'
//                   },
//                   "filter": [
//                   "==",
//                   "WeaponCategory",
//                   "UNARMED"]
//         });

//          map.addLayer({
//                   "id": "shootings-layer2",
//                   "type": "circle",
//                   "source": "shootings",
//                   "paint": {
//                      "circle-radius": 3,
//                      "circle-color": 'rgba(66, 134, 244, 0.8)'
//                   },
//                   "filter": [
//                   "!=",
//                   "WeaponCategory",
//                   "UNARMED"]
//         });


// var popup = new mapboxgl.Popup({
//     closeButton: false,
//     closeOnClick: false
// });

// map.on('mousemove', function(e) {
//     var features = map.queryRenderedFeatures(e.point, { layers: ['shootings-layer','shootings-layer2'] });
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
//         .setHTML("<div>" + feature.properties.FirstName + " " + feature.properties.LastName + "</div><div>died in " + feature.properties.year + "</div><div>" + feature.properties.WeaponCategory + "</div>")
//         .addTo(map);
// });

// });

d3.json('./shapefiles/counties.json', function(error, counties) {

var data = dataLoad.counties;

function mapTips(d, subject, dataCompare){

if (subject == "percent") {

    var color = "";
    var dcolor = "";
    var broadband = 0;
    var diff = 0;

           for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == String(dataCompare[i].county).toUpperCase()) {
           if (dataCompare[i].broadband_2017 >= 80) { color = "gray5"; }
           else if (dataCompare[i].broadband_2017 >= 60) { color = "gray4"; }
           else if (dataCompare[i].broadband_2017 >= 40) { color = "gray3"; }
           else if (dataCompare[i].broadband_2017 >= 20) { color = "gray2"; }
           else if (dataCompare[i].broadband_2017 > 0) { color = "gray1"; }

           broadband = dataCompare[i].broadband_2017;

           // if (dataCompare[i].diff >= 80) { dcolor = "gray5"; }
           // else if (dataCompare[i].diff >= 60) { dcolor = "gray4"; }
           // else if (dataCompare[i].diff >= 40) { dcolor = "gray3"; }
           // else if (dataCompare[i].diff >= 20) { dcolor = "gray2"; }
           // else if (dataCompare[i].diff >= 0) { dcolor = "gray1"; }
           // else if (dataCompare[i].diff < 0) { dcolor = "red3"; }
           diff = dataCompare[i].diff;
          }
         }

    return "<div class='districtName'>" + d.properties.COUNTYNAME + " County</div><div><span class='legendary chatter " +  color + "'>" + d3.format(".1f")(broadband) + "%</span> broadband access</div><div class='mobilekill'><span class='chatter " +  dcolor + "'>" + d3.format("+.1f")(diff) + "%</span> change since 2012</div>"      

}

}

function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index) {

var width = 320,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .attr("class", function(d){

        if (subject == "percent"){ 
         for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == String(dataCompare[i].county).toUpperCase()) {
           if (dataCompare[i].broadband_2017 >= 90) { return "gray5"; }
           else if (dataCompare[i].broadband_2017 >= 80) { return "gray4"; }
           else if (dataCompare[i].broadband_2017 >= 60) { return "gray3"; }
           else if (dataCompare[i].broadband_2017 >= 40) { return "gray2"; }
           else if (dataCompare[i].broadband_2017 >= 20) { return "gray1"; }
           else if (dataCompare[i].broadband_2017 > 0) { return "none"; }
          }
         }
       }
        })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, subject, dataCompare);
      }));

  g.append("path")
      .attr("id", "state-borders")
      .attr("d", path);

});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .switch, #close, .mapSwitch").click(function() {
  clicked2();
  $("#filter input").val("");
  $(".district").removeClass("selected");
  $("#infobox").hide();
  d3.selectAll(".map rect").classed('faded', false); 
  d3.selectAll(".map rect").classed('active', false); 
  $(".rightSide").show();
});

$(".mapSwitch").click(function() {
  $("#filter input").val("");
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  d3.selectAll("#mapMetro path, #mapState path")
      .classed("faded", false)
      .classed("active", false);

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function (d) { return d === centered; });
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function (d) { return d === centered; });
}

}

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

//POPULATE
  mapBuild("#map", "#infobox", "#chart", "counties.json", "percent", "mn", data, 0);
});
},{}]},{},[1])
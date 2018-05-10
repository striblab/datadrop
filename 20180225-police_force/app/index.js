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

if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
}


//CHARTS
function chartTrend() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartTrend = c3.generate({
        bindto: "#chartTrend",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                ['Rate', 46.15355984, 41.0880911, 36.23073357, 35.51637682, 31.86244299, 24.51238273, 27.52961754, 24.19280834, 27.39899681, 22.24469161, null],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 50,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 6,
                    values: [0, 25, 50],
                    format: d3.format(',.1f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2008, 2011, 2015, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartTrend();


function chartArrests() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartArrests = c3.generate({
        bindto: "#chartArrests",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                ['Rate', 24213, 21123, 21342, 23050, 21866, 23118, 23544, 20179, 21484, 0, null],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 30000,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 6,
                    values: [0, 25, 50],
                    format: d3.format(',.1f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2008, 2011, 2015, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartArrests();


function chartCalls() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartCalls = c3.generate({
        bindto: "#chartCalls",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                ['Rate', 322402, 316150, 314926, 313095, 324520, 351659, 355617, 359611, 347093, 380765, null],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 400000,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 5,
                    values: [0, 100000, 200000, 300000, 400000],
                    format: d3.format(',.0f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2008, 2011, 2015, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartCalls();


function chartInjuries() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartInjuries = c3.generate({
        bindto: "#chartInjuries",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                // ['Rate',100.4956545,92.80404871,79.66950966,79.59245596,74.20189819,54.17179711,66.22293085,56.95042699,63.470021,50.68743188],
                ['Rate', 0.31, 0.29, 0.29, 0.28, 0.35, 0.34, 0.32, 0.29, 0.24, 0.26, null],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
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
                    values: [0, 0.25, 0.50, 0.75, 1],
                    format: d3.format('%.0f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2008, 2011, 2015, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartInjuries();


function chartCrime() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartCrime = c3.generate({
        bindto: "#chartCrime",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                ['Violent Crime', 1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,null,null]
                // ['Property Crime', 5514.8, 4667.6, 4783.1, 4977.6, 4960.8, 4885.8, 4728, null]
                // ['Rate',46.15355984,41.0880911,36.23073357,35.51637682,31.86244299,24.51238273,27.52961754,24.19280834,27.39899681,22.24469161],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2016) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3', '#A7E6E3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 2000,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 7,
                    values: [0, 500, 1000, 1500, 2000],
                    format: d3.format(',.1f')
                }
            },
            x: {
                // type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    count: 4,
                    values: [2008, 2011, 2015, 2018],
                    multiline: false,
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartCrime();


function chartMonths() {
    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

    var chartMonths = c3.generate({
        bindto: "#chartMonths",
        padding: padding,
        data: {
            x: 'x',
            // xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ["x", "2008-01-01", "2008-02-01", "2008-03-01", "2008-04-01", "2008-05-01", "2008-06-01", "2008-07-01", "2008-08-01", "2008-09-01", "2008-10-01", "2008-11-01", "2008-12-01", "2009-01-01", "2009-02-01", "2009-03-01", "2009-04-01", "2009-05-01", "2009-06-01", "2009-07-01", "2009-08-01", "2009-09-01", "2009-10-01", "2009-11-01", "2009-12-01", "2010-01-01", "2010-02-01", "2010-03-01", "2010-04-01", "2010-05-01", "2010-06-01", "2010-07-01", "2010-08-01", "2010-09-01", "2010-10-01", "2010-11-01", "2010-12-01", "2011-01-01", "2011-02-01", "2011-03-01", "2011-04-01", "2011-05-01", "2011-06-01", "2011-07-01", "2011-08-01", "2011-09-01", "2011-10-01", "2011-11-01", "2011-12-01", "2012-01-01", "2012-02-01", "2012-03-01", "2012-04-01", "2012-05-01", "2012-06-01", "2012-07-01", "2012-08-01", "2012-09-01", "2012-10-01", "2012-11-01", "2012-12-01", "2013-01-01", "2013-02-01", "2013-03-01", "2013-04-01", "2013-05-01", "2013-06-01", "2013-07-01", "2013-08-01", "2013-09-01", "2013-10-01", "2013-11-01", "2013-12-01", "2014-01-01", "2014-02-01", "2014-03-01", "2014-04-01", "2014-05-01", "2014-06-01", "2014-07-01", "2014-08-01", "2014-09-01", "2014-10-01", "2014-11-01", "2014-12-01", "2015-01-01", "2015-02-01", "2015-03-01", "2015-04-01", "2015-05-01", "2015-06-01", "2015-07-01", "2015-08-01", "2015-09-01", "2015-10-01", "2015-11-01", "2015-12-01", "2016-01-01", "2016-02-01", "2016-03-01", "2016-04-01", "2016-05-01", "2016-06-01", "2016-07-01", "2016-08-01", "2016-09-01", "2016-10-01", "2016-11-01", "2016-12-01", "2017-01-01", "2017-02-01", "2017-03-01", "2017-04-01", "2017-05-01", "2017-06-01", "2017-07-01", "2017-08-01", "2017-09-01", "2017-10-01", "2017-11-01", "2017-12-01"],
                ["Incidents", 177, 106, 116, 114, 121, 135, 157, 156, 125, 155, 114, 99, 195, 84, 105, 133, 145, 117, 155, 114, 99, 76, 89, 74, 158, 67, 99, 90, 91, 101, 132, 137, 112, 99, 85, 57, 163, 92, 97, 101, 106, 100, 111, 106, 83, 97, 71, 72, 148, 62, 96, 94, 90, 102, 127, 88, 82, 86, 72, 74, 153, 61, 72, 72, 82, 86, 91, 75, 69, 72, 58, 58, 145, 39, 70, 69, 96, 107, 99, 110, 95, 116, 58, 62, 138, 59, 67, 69, 64, 93, 91, 100, 73, 73, 66, 64, 167, 60, 68, 77, 98, 96, 93, 91, 74, 79, 77, 58, 152, 65, 72, 88, 90, 82, 73, 74, 59, 64, 56, 59],
            ],
            type: 'line',
            labels: {
                format: {
                    // 'Rate': d3.format(',.1f')
                }
            }
        },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            // rotated: true,
            y: {
                max: 300,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 4,
                    values: [0, 100, 200, 300],
                    format: d3.format(',.1f')
                }
            },
            x: {
                type: 'timeseries',
                padding: {
                    right: 0,
                    left: 0
                },
                tick: {
                    format: '%Y-%m'
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          return '<div class="chart-tooltip blue4">' +
            '<span class="tooltip-label">' + d[0].x + ':</span>' +
            '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
            '</div>';
        }
      }
    });
}

chartMonths();

function chartType() {

    var padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 120,
    };

    var chartType = c3.generate({
        bindto: "#chartType",
        padding: padding,
        data: {
            x: 'x',
            columns: [
                ['x', "Bodily Force", "Chemical Irritant", "Taser", "Gun Point Display", "Improvised Weapon", "Police K9 Bite", "Baton", "Firearm", "Less Lethal Projectile"],
                ['value', 0.710, 0.149, 0.096, 0.017, 0.013, 0.011, 0.002, 0.002, 0.001]
            ],
            type: 'bar',
            labels: {
                format: {
                    'value': d3.format('%.0f')
                }
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            show: false
        },
        color: {
            pattern: ['#3580A3']
        },
        axis: {
            rotated: true,
            y: {
                max: 1,
                min: 0,
                padding: {
                    bottom: 0,
                    top: 0
                },
                tick: {
                    count: 8,
                    values: [0, 0.25, 0.50, 0.75, 1],
                    format: d3.format('%.0f')
                }
            },
            x: {
                type: 'category',
                tick: {
                    multiline: false
                }
            }
        },
        grid: {
            focus:{
                show:false
              },
          }
    });
}

chartType();


d3.json("./data/counts.json", function(error, dataLoadCounts) {

    var dataCounts = dataLoadCounts.incidents;

    var aspect = 800 / 500,
        chart = $("#country svg");

    $(window).on("resize", function() {
        var targetWidth = chart.parent().width();
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });

    function mapColor(d, subject, dataCompare) {

        var color = "";

        for (var i = 0; i < dataCompare.length; i++) {
            if (d.properties.Name == dataCompare[i].neighborhood) {
                if (dataCompare[i].rate >= 100) {
                    return "#0D4673";
                } else if (dataCompare[i].rate >= 80) {
                    return "#3580A3";
                } else if (dataCompare[i].rate >= 40) {
                    return "#67B4C2";
                } else if (dataCompare[i].rate >= 20) {
                    return "#A7E6E3";
                } else if (dataCompare[i].rate >= 0) {
                    return "#D1E6E1";
                }
            }
        }
    }

    function mapTips(d, subject, dataCompare) {
        var color = "";
        var rate = 0;

        for (var i = 0; i < dataCompare.length; i++) {
            if (d.properties.Name == dataCompare[i].neighborhood) {
                if (dataCompare[i].rate >= 100) {
                    color = "blue5";
                    rate = dataCompare[i].rate;
                } else if (dataCompare[i].rate >= 80) {
                    color = "blue4";
                    rate = dataCompare[i].rate;
                } else if (dataCompare[i].rate >= 40) {
                    color = "blue3";
                    rate = dataCompare[i].rate;
                } else if (dataCompare[i].rate >= 20) {
                    color = "blue2";
                    rate = dataCompare[i].rate;
                } else if (dataCompare[i].rate >= 0) {
                    color = "blue1";
                    rate = dataCompare[i].rate;
                }
            }
        }

        return "<div>" + d.properties.Name + "</div><div><span class='" + color + " legendary'>" + d3.format(",.1f")(rate) + "</span> per 10,000 police calls</div>";

    }

    function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index, visible) {

        if (geo == "country") {
            var width = 800,
                height = 500,
                centered;
            var projection = d3.geo.albersUsa().scale(1000).translate([400, 260]);
        } else if (geo == "us") {
            var width = 800,
                height = 500,
                centered;
            var projection = d3.geo.albersUsa().scale(2000).translate([330, 430]);
        } else if (geo == "mn") {
            var width = 350,
                height = 500,
                centered;
            var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]);
        } else if (geo == "metro") {
            var projection = d3.geo.mercator().scale([80000]).center([-93.070335, 44.930977]);
        }

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
            d3.json("shapefiles/us_states_topo.json", function(error, st) {

                g.append("g")
                    .attr("class", "states")
                    .selectAll("path")
                    .data(us.features)
                    .enter().append("path")
                    .attr("d", path)
                    // .on("click", clicked)
                    .attr("id", function(d) {
                        var str = d.properties.Name + "" + d.properties.GEOID + "_" + geo;
                        return str.replace(new RegExp(" ", "g"), "-");
                    })
                    .style("fill", function(d) {
                        return mapColor(d, subject, dataCompare);
                    })
                    .on("mousedown", function(d, i) {

                    })
                    .style("stroke-width", ".5px")
                    .style("stroke", "#fff")
                    .call(d3.helper.tooltip(function(d, i) {
                        return mapTips(d, subject, dataCompare);
                    }));

                g.append("path")
                    //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
                    .attr("id", "state-borders")
                    .attr("d", path);

                //     if (subject == "national") { var marks = dataUS; var size = "2px"; }
                //     if (subject == "state") { var marks = dataMN; var size = "5px"; }

                // svg.selectAll("circle")
                //   .data(marks)
                //   .enter()
                //   .append("circle")
                //   .attr('class','mark')
                //   .attr('width', 10)
                //   .attr('height', 10)
                //   .style("opacity",0.5)
                //   .attr("r", size)
                //   .attr("fill", "#333")
                //   .attr("transform", function(d) { if(d.longitude != null) { return "translate(" + projection([d.longitude,d.latitude]) + ")";}})
                //   .call(d3.helper.tooltip(function(d, i){
                //       return "<div>" + d3.time.format("%Y-%m-%d")(new Date(d.datetime)) + "</div><div>" + d.comments + "</div>";
                //     }));

                // svg.insert("path", ".graticule")
                //   .datum(topojson.mesh(st, st.objects.us_states, function(a, b) { return a !== b; }))
                //   .attr("class", "state-boundary")
                //   .style("stroke-width", "1.2px")
                //   .attr("d", path);

                // svg.selectAll("text")
                //   .data(marks)
                //   .enter()
                //   .append("text")
                //   .attr('class','city-label')
                //   .attr("transform", function(d) {return "translate(" + projection([d.long+.23,d.lat-.09]) + ")";})
                //   .text(function(d) { return " " + d.name; });



            });
        });

        var zoom = d3.behavior.zoom()
            .on("zoom", function() {
                g.attr("transform", "translate(" +
                    d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
                g.selectAll("circle")
                    .attr("d", path.projection(projection));
                g.selectAll("path")
                    .attr("d", path.projection(projection));

            });

        $(".zoom").click(function() {
            clicked2();
            $('#filter input').val("");
            $("#districtName").html("Midwest");
            $(".district").removeClass("selected");
            $('.card, .card div').show();
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

            g.selectAll("path")
                .classed("faded", true)
                .classed("active", centered && function(d) {
                    return d === centered;
                });

            g.transition()
                .duration(750)
                // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
                .style("stroke-width", 1.5 / k + "px");
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
                .classed("active", centered && function(d) {
                    return d === centered;
                });

            g.transition()
                .duration(750)
                // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
                .style("stroke-width", 1.5 / k + "px");
        }

        d3.helper = {};

        d3.helper.tooltip = function(accessor) {
            return function(selection) {
                var tooltipDiv;
                var bodyNode = d3.select('body').node();
                selection.on("mouseover", function(d, i) {
                        // Clean up lost tooltips
                        d3.select('body').selectAll('div.tooltip').remove();
                        // Append tooltip
                        tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
                        var absoluteMousePos = d3.mouse(bodyNode);
                        tooltipDiv.style('left', (absoluteMousePos[0] + 10) + 'px')
                            .style('top', (absoluteMousePos[1] - 15) + 'px')
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
                        tooltipDiv.style('left', (absoluteMousePos[0] + 10) + 'px')
                            .style('top', (absoluteMousePos[1] - 15) + 'px');
                        var tooltipText = accessor(d, i) || '';
                        tooltipDiv.html(tooltipText);
                    })
                    .on("mouseout", function(d, i) {
                        // Remove tooltip
                        tooltipDiv.remove();
                    });

            };
        };

    }

    mapBuild("#map", "#districtName", "#chart", "minneapolis_neighborhoods.json", "state", "metro", dataCounts, 2, 1);

    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);

});
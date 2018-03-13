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
utilsFn({ });

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
if (selected == "all"){
  $(".slide").show();
} 

function chartTrend(){
var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 60,
    };

var chart = c3.generate({
        bindto: '#chartTrend',
        padding: padding,
    data: {
        // x: 'x',
        columns: [
            // ['x',"50","51","52","1","2","3","4"],
			["2010-11",0.00584334,0.0116119,0.010122,0.0110533,0.0137079,0.0106915,0.0183651,0.0198138,0.0256631],
			["2011-12",0.0126777,0.0132592,0.021711,0.0325009,0.0180741,0.0166667,0.0116015,0.0148064,0.0165403],
			["2012-13",0.00953961,0.0178823,0.0305277,0.0667769,0.0554971,0.040914,0.0307692,0.02864230,0.0267437],
			["2013-14",0.0117106,0.00904621,0.0201371,0.0351852,0.0334739,0.0251268,0.031093,0.0326496,0.0253456],
			["2014-15",0.0170758,0.0453885,0.0572078,0.0785111,0.0364327,0.0323494,0.0362635,0.0274324,0.0277726],
			["2015-16",0.0180049,0.0154377,0.0284483,0.0193642,0.00556836,0.0058096,0.00676788,0.00762547,0.0100438],
			["2016-17",0.0110247,0.0118233,0.0219521,0.0233905,0.0227992,0.0234944,0.0340085,0.033874,0.0344587],
			["2017-18",0.0215039,0.0230408,0.0293532,0.0301329,0.0331529,0.0432925,0.0472961,0.0520347,0.052],
      ["National",0.0249152,0.0320522,0.0444056,0.0542781,0.0538152,0.0557492,0.0637995,0.071214,0.0808548]
        ],
        type: 'line'
    },
    legend: {
        show: false
    },
    color:  { pattern: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#A52129","#00BB00"] },
    axis: {
      y: {
      		max: 0.10,
            min: 0,
            padding: {bottom: 0, top: 0},
            tick: {
             values: [0,0.02,0.040,0.06,0.08,0.10],
             count: 6,
             format: d3.format('%')
            }
        },
        x: {
        	type: "category",
        	categories: ["Week 49","Week 50","Week 51","Week 52","Week 01","Week 02","Week 03","Week 04","Week 05"],
        	padding: {right: 0, left: 0},
        	label: {
                // text: '< 2017 || 2018 >',
                position: 'outer-center'
            },
            tick: {
                rotate: -75,
                count: 9,
                multiline: false
            },
                height:50
          }
        },
    grid: {
        y: {
          lines: [
                // {value: 67, text: '', position: 'start', class:'powerline'}
          ]

        },
        x: {
            lines: [
                {value: "Week 01", text: 'January 2018', position: 'end'}
            ]
        }
    },
    tooltip: {
        format: {
            // title: function (d) { console.log(id); return 'Week ' + d; },
            value: function (value, ratio, id) {
                var format = id === 'data1' ? d3.format(',') : d3.format('%');
                if (id == "2017-18" || id == "National") { return  format(value); }
            },
            name: function (name, ratio, id, index) { if (name == "2017-18") { return "Minnesota"; } else if (name == "National") { return name; } }
//            value: d3.format(',') // apply this format to both y and y2
        }
    }
});

}

chartTrend();


  function chartRank(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartRank = c3.generate({
          bindto: "#chartRank",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x', "Metro","Central","Southeast","South Central","Northeast","Southwest","West Central","Northwest"],
                  ['Flu Hospitalizations', 0.65,0.12,0.07,0.06,0.03,0.03,0.03,0.03]
              ],
              type: 'bar'
          },
            legend: {
                show: false
            },
            color: {
                  pattern: ['#333']
                },
          axis: {
              rotated: true,
                y: {
                      max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 5,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick:{
                    multiline:false
                  }
              }
          }
    });
}

chartRank();

function chartDeaths(){
var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 60,
    };

var chartDeaths = c3.generate({
        bindto: '#chartDeaths',
        padding: padding,
    data: {
        // x: 'x',
        columns: [
            // ['x',"50","51","52","1","2","3","4"],
            ["2010-11",0.071,0.071,0.071,0.078,0.067,0.09,0.08],
            ["2011-12",0.082,0.079,0.076,0.099,0.085,0.09,0.069],
            ["2012-13",0.066,0.07,0.069,0.103,0.111,0.124,0.128],
            ["2013-14",0.069,0.065,0.066,0.085,0.081,0.071,0.087],
            ["2014-15",0.063,0.064,0.086,0.098,0.137,0.127,0.1],
            ["2015-16",0.06,0.064,0.056,0.073,0.079,0.071,0.072],
            ["2016-17",0.069,0.066,0.068,0.051,0.077,0.071,0.068],
            ["2017-18",0.069,0.067,0.069,0.08,0.106,0.114,0.105]
        ],
        type: 'line'
    },
    legend: {
        show: false
    },
    color:  { pattern: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#A52129"] },
    axis: {
      y: {
                      max: 0.20,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                       values: [0,0.05,0.10,0.15,0.20],
                       count: 5,
                         format: d3.format('%.0f')
            }
        },
        x: {
            type: "category",
            categories: ["Week 49","Week 50","Week 51","Week 52","Week 01","Week 02","Week 03"],
            padding: {right: 0, left: 0},
            label: {
                // text: '< 2017  | Week of Year  | 2018 >',
                position: 'outer-center'
            },
            tick: {
                rotate: -75,
                count: 7,
                multiline: false
            },
                height:50
          }
        },
    grid: {
        y: {
          lines: [
                // {value: 67, text: '', position: 'start', class:'powerline'}
          ]

        },
        x: {
            lines: [
                {value: "Week 01", text: 'January 2018', position: 'end'}
            ]
        }
    },
    tooltip: {
        format: {
            // title: function (d) { console.log(id); return 'Week ' + d; },
            value: function (value, ratio, id) {
                var format = id === 'data1' ? d3.format(',') : d3.format('%');
                if (id == "2017-18") { return  format(value); }
            },
            name: function (name, ratio, id, index) { if (name == "2017-18") { return name; } }
//            value: d3.format(',') // apply this format to both y and y2
        }
    }
});

}

chartDeaths();

function chartAge(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartAge = c3.generate({
          bindto: "#chartAge",
          padding: padding,
          data: {
              x: 'x',
              columns:
              [
                  ['x', "Age 0-4","Age 5-24","Age 25-49","Age 50-64","Age 65+"],
                  ['Flu Hospitalizations', 31.2,13.2,21.6,53.5,307.2]
              ],
              type: 'bar',
            labels: {
                format: {
                    'Flu Hospitalizations': d3.format('.0f')
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
                  pattern: ['#333']
                },
          axis: {
              // rotated: true,
                y: {
                      max: 320,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,100,200,320],
                         format: d3.format('.0f')
                        }
                    },
              x: {
                  type: 'category',
                  tick:{
                    multiline:false
                  }
              }
          }
    });
}

chartAge();
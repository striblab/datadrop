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
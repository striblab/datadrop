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

//trend chart
  function chartTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartTrend = c3.generate({
          bindto: "#chartTrend",
          padding: padding,
          data: {
          		x: 'x',
                columns: [
                	['x',1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
                  ['Suicides',442,470,444,443,459,541,546,488,515,546,511,513,498,494,520,491,472,459,437,440,480,497,497,524,547,554,572,596,584,606,683,656,678,686,730]
                ],
            type: 'area',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                        format: d3.format('.0f')
                        }
                    },
                x: {
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        values: [1981,1988,1995,2000,2007,2015],
                        multiline: false,
                        format: d3.format('.0f')
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: 2000, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

//rates chart
  function chartRates(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartRates = c3.generate({
          bindto: "#chartRates",
          padding: padding,
          data: {
              x: 'x',
                columns: [
                  ['x',1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
                  ['MN Rate',10.75,11.38,10.72,10.65,10.97,12.86,12.89,11.36,11.87,12.45,11.51,11.41,10.93,10.72,11.16,10.42,9.91,9.54,8.97,8.92,9.63,9.91,9.85,10.32,10.71,10.76,11.02,11.39,11.09,11.43,12.77,12.19,12.51,12.57,13.3],
                  ['US Rate',12.31,12.44,12.33,12.58,12.51,12.99,12.82,12.48,12.3,12.46,12.28,11.98,12.04,11.89,11.79,11.53,11.24,11.12,10.48,10.4,10.71,10.95,10.76,10.97,10.9,10.98,11.27,11.61,11.77,12.08,12.32,12.53,12.55,12.94,13.26]
                ],
            type: 'line',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#333','#aaa']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                        count: 5,
                        format: d3.format('.1f')
                        }
                    },
                x: {
                    padding: {right: 0, left: 0},
                    tick: {
                                                count: 6,
                        values: [1981,1988,1995,2000,2007,2015],
                        multiline: false,
                        format: d3.format('.0f')
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: 2000, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

//age chart
  function chartAge(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartAge = c3.generate({
          bindto: "#chartAge",
          padding: padding,
            data: {
          		// x: 'x',
                columns: [
                	  // ['x',1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980],
                    ['Suicides', 1317,4813,4890,3486,2333]
                ],
            type: 'bar',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
                color: {
                  pattern: ['#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format(',')
                        }
                    },
                x: {
                    type: 'category',
                    padding: {right: 0, left: 0},
                    tick: {
                        rotate: -60,
                        multiline: false
                    },
                    categories: ['0-19 yrs','20-34 yrs','35-49 yrs','50-64 yrs','65+ yrs'],
                    height: 40
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

//age trend chart
  function chartAgeTrend(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartAgeTrend = c3.generate({
          bindto: "#chartAgeTrend",
          padding: padding,
            data: {
              x: 'x',
                columns: [
                    ["x",1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
                    ["0-19 yrs",2.698006329,2.707171298,2.656063413,2.732422965,3.027276013,3.057666481,3.051409763,3.24466106,3.151860007,3.120594838,2.985572267,2.942091485,2.956933887,2.99952548,2.905576273,2.72982333,2.68713452,2.598330483,2.448399971,2.087226591,2.564847312,2.437137519,2.658863602,2.595469433,3.880245739,2.330947997,2.541181254,1.766000672,2.263490047,2.724965082,3.003947047,3.155793089,3.08864264,4.630207756,2.945720885],
                    ["20-34 yrs",16.07245185,15.73014502,15.37189673,15.56381006,15.32374168,15.74092444,15.35248672,15.25854311,15.08305135,15.15670094,14.99557458,14.50189559,15.04161402,15.35116033,15.22061995,14.0770143,13.59546823,13.17468342,11.21821758,12.23455037,11.78437392,13.26179879,13.05891929,13.40779061,13.1556252,13.93401855,13.29115861,13.95537862,12.39789217,14.1892037,15.60275569,12.34850217,15.75064021,14.20805813,18.34481233],
                    ["35-49 yrs",15.94202336,15.65502954,14.91293404,15.41548966,14.85098309,15.38982439,15.18248376,14.7563839,14.61799556,15.06962113,14.91435665,14.91269915,14.82480199,14.98393535,14.96324434,15.32452653,15.14899685,15.21706363,13.40398421,12.58884578,13.94979744,13.481874,14.13613094,15.55724092,14.37385286,14.45218934,14.73413978,17.29796899,15.56850231,16.64678556,16.97579911,18.6799144,15.51035365,16.12258638,18.77251235],
                    ["50-64 yrs",16.31234664,16.90604336,16.75264282,17.02164261,16.5298736,17.15633987,16.66855286,15.50365993,15.49937094,15.5315904,15.32825888,14.70433822,14.64029489,13.61766729,13.5743941,13.91022874,13.54875166,13.32271843,9.656732425,10.66786446,10.90662315,11.63222022,11.20148357,12.32443661,13.82219361,14.77029416,16.17138671,15.45885299,16.34196617,15.42103798,18.18439536,17.93289786,17.93198886,18.89553367,17.26975807],
                    ["65+ yrs",17.07807617,18.36310416,19.3123354,19.79009585,20.36868158,21.63219328,21.81842975,21.12292427,20.29870979,20.46668131,19.7034889,19.03820297,18.86826115,18.02536776,17.93344471,17.1484377,16.65040529,16.7623911,8.441682326,8.062538423,8.84678044,10.61329946,8.712662951,7.986673665,10.82335,8.262598079,11.38485004,11.10289801,11.02741206,10.10069958,13.69773103,10.82258495,13.50083189,11.03153866,11.41945005]
                ],
            type: 'line',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            // legend: {
            //     show: false
            // },
                color: {
                  pattern: ['#d9d9d9','#cccccc','#969696','#a50f15','#252525']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format(',.1f')
                        }
                    },
                x: {
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        values: [1981,1988,1995,2000,2007,2015],
                        multiline: false
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: 2000, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

//gender chart
  function chartGender(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartPopD = c3.generate({
          bindto: "#chartGender",
          padding: padding,
           data: {
          		x: 'x',
                columns: [
                    ['x',1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
                    ['Female',96,104,97,102,96,121,122,107,106,114,89,96,104,88,88,92,74,77,13,0,26,34,50,50,46,53,58,35,62,61,83,67,93,104,111],
                    ['Male',346,366,347,341,363,420,424,381,409,432,422,417,394,406,432,399,398,382,328,326,343,371,344,379,392,398,433,449,429,425,495,479,473,470,508]
                ],
            type: 'area',
            order:'desc',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#FFA200','#4286f4']
                },
            axis: {
                  // rotated: true,
                  y: {
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         // values: [0,0.03,0.06,0.09,0.12],
                         format: d3.format('.0f')
                        }
                    },
                x: {
                    padding: {right: 0, left: 0},
                    tick: {
                        count: 6,
                        values: [1981,1988,1995,2000,2007,2015],
                        multiline: false
                    }
                }
            },
          grid: {
              x: {
              lines: [
                    {value: 2000, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

//gender chart
  function chartMethod(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 40,
        };

    var chartMethod = c3.generate({
          bindto: "#chartMethod",
          padding: padding,
           data: {
                columns: [
                    ['% of deaths',0.48,0.25,0.20,0.08]
                ],
            type: 'bar',
            order:'desc',
            labels: {
                format: {
                    // '2006': d3.format('%'),
                    // '2017': d3.format('%')
                }
            }
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#333']
                },
            axis: {
                  // rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                         format: d3.format('%.0f')
                        }
                    },
                x: {
                  type: "category",
                  padding: {right: 0, left: 0},
                  categories: ["Firearm","Suffocation","Poisoning","Other"],
                    tick: {
                        // count: 4,
                        multiline: false
                    }
                }
            },
          grid: {
              y: {
              lines: [
                    {value: 0.5, text: '', position: 'start', class:'powerline'}
              ]
              }
          }

    });
}

chartMethod();
chartTrend();
chartRates();
chartAge();
chartAgeTrend();
chartGender();
},{}]},{},[1])
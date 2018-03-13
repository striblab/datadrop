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

var aspect = 550 / 400, chart = $(".map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

$(window).on("load", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

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
                  // ['ND',0.786,0.745,0.577,0.023,0.108],
                  // ['SD',0.771,0.713,0.562,0.024,0.124],
                  // ['IA',0.764,0.725,0.564,0.022,0.119],
                  // ['WI',0.775,0.718,0.566,0.025,0.116],
                  // ['MN',0.808,0.755,0.603,0.025,0.098]
                  ['Smartphone Ownership',0.755,0.745,0.725,0.718,0.713]
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
                  pattern: ['#333333']
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
                    categories: ['Minnesota','North Dakota','Iowa','Wisconsin','South Dakota'],
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

  function chartAge(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 100,
        };

    var chartAge = c3.generate({
          bindto: "#chartAge",
          padding: padding,
          data: {
                columns: [
                  // ['ND',0.786,0.745,0.577,0.023,0.108],
                  // ['SD',0.771,0.713,0.562,0.024,0.124],
                  // ['IA',0.764,0.725,0.564,0.022,0.119],
                  // ['WI',0.775,0.718,0.566,0.025,0.116],
                  // ['MN',0.808,0.755,0.603,0.025,0.098]
                  ['Cellphone Ownership',0.08,0.11,0.23,0.38],
                  ['Smartphone Ownership',0.92,0.88,0.74,0.42]
                  
                ],
            type: 'bar',
            groups: [
                ['Cellphone Ownership', 'Smartphone Ownership']
            ]
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
                    categories: ['Age 18-29','Age 30-49','Age 50-64','Age 65+'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartAge();

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
                x: "x",
                columns: [
                  ["x",2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
                  ['Smartphone',null,null,null,null,null,null,null,null,null,null,null,0.35,null,null,null,null,0.77,null],
                  ['Tablet',null,null,null,null,null,null,null,null,null,null,0.03,null,null,null,null,null,0.51,null],
                  ['Social Media',null,null,null,null,0.05,null,null,null,null,null,null,null,null,null,null,null,0.69,null],
                  ['Home Broadband',0.01,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.73,null],
                  ['Internet Use',0.52,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.88,null]
                ],
            type: 'line'
            },
            line: {
                connectNull: true
            },
            legend: {
                show: false
            },
            point: {
                show: true,
                r: 3.4
            },
                color: {
                  pattern: ['#333333','#E07242','#67B4C2','#5BBF48','#C22A22']
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
                    // type: 'category',
                    // categories: ['Oct 2011','Apr 2012','Oct 2012','Apr 2013','Oct 2013','Apr 2014','Oct 2014'],
                    padding: {left: 0, right: 0},
                    tick: {
                         // rotate: -75,
                        count: 6,
                        multiline: false,
                        format: d3.format('.0f')
                    }
                    // height: 40
                 }
            }
    });
}

chartTrend();

d3.csv("./data/stateRankings.csv", function(d) {
  return {
    state: d.ab,
    rate: +d.share
  };
}, function(error, rows) {

var dataT = rows;

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

var cartogram = {
    margin: {
        top: 40,
        right: 140,
        bottom: 0,
        left: 60
    },

    selector: '#map svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 550 - self.margin.left - self.margin.right;
        self.height = 400 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
              // return d.color;

              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].rate >= 55) { return "gray5"; }
                    else if (dataT[i].rate >= 50) { return "gray4"; }
                    else if (dataT[i].rate >= 45) { return "gray3"; }
                    else if (dataT[i].rate > 0) { return "gray1"; }
                    else if (dataT[i].rate == 0) { return "none"; }
                  }
               }
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .call(d3.helper.tooltip(function(d, i){

             var colorSwatch = "";
                
              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].rate >= 55) { colorSwatch = "gray5"; }
                    else if (dataT[i].rate >= 50) { colorSwatch = "gray4"; }
                    else if (dataT[i].rate >= 45) { colorSwatch = "gray3"; }
                    else if (dataT[i].rate >= 0) { colorSwatch = "gray1"; }
                    return "<h4 class='districtName'>" + d.state_full + "</h4><span class='legendary chatter " + colorSwatch + "'>" + dataT[i].rate + "%</span> iPhone traffic</div>";
                  }
               }
             }));

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return "gray5";
            })
            .style('color', function(d) {
                return "#ffffff";
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .text(function(d) {
                return d.state_postal;
            });
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total_old':'32','state_total_new':'25','state_change':'-63%','color':'gray2'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total_old':'14','state_total_new':'36','state_change':'+36%','color':'gray2'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total_old':'36','state_total_new':'43','state_change':'-33%','color':'gray2'},
        {'state_full':'California','state_postal':'CA','row':3,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-25%','color':'purple3'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total_old':'124','state_total_new':'93','state_change':'-33%','color':'purple3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total_old':'0','state_total_new':'6','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total_old':'3','state_total_new':'3','state_change':'-100%','color':'gray2'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total_old':'150','state_total_new':'136','state_change':'-14%','color':'gray2'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total_old':'77','state_total_new':'59','state_change':'-38%','color':'gray2'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total_old':'71','state_total_new':'68','state_change':'-21%','color':'purple3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total_old':'251','state_total_new':'221','state_change':'-14%','color':'purple3'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total_old':'216','state_total_new':'220','state_change':'0%','color':'gray2'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total_old':'228','state_total_new':'295','state_change':'+29%','color':'purple3'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total_old':'215','state_total_new':'205','state_change':'-6%','color':'gray2'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total_old':'308','state_total_new':'162','state_change':'-49%','color':'gray2'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total_old':'30','state_total_new':'26','state_change':'-53%','color':'gray2'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total_old':'0','state_total_new':'14','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total_old':'26','state_total_new':'27','state_change':'-46%','color':'purple1'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total_old':'102','state_total_new':'179','state_change':'+74%','color':'gray2'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'purple3'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total_old':'65','state_total_new':'46','state_change':'-57%','color':'gray2'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total_old':'264','state_total_new':'288','state_change':'+5%','color':'gray2'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'139','state_change':'-10%','color':'purple3'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total_old':'199','state_total_new':'179','state_change':'-11%','color':'gray2'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total_old':'0','state_total_new':'4','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total_old':'8','state_total_new':'19','state_change':'+50%','color':'gray2'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total_old':'24','state_total_new':'14','state_change':'-100%','color':'gray2'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total_old':'203','state_total_new':'135','state_change':'-38%','color':'gray2'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total_old':'156','state_total_new':'111','state_change':'-35%','color':'purple1'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total_old':'84','state_total_new':'117','state_change':'+36%','color':'purple3'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total_old':'258','state_total_new':'217','state_change':'-18%','color':'gray2'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total_old':'46','state_total_new':'53','state_change':'-30%','color':'gray2'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total_old':'40','state_total_new':'61','state_change':'+20%','color':'purple2'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'gray2'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total_old':'16','state_total_new':'30','state_change':'+38%','color':'gray2'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total_old':'88','state_total_new':'108','state_change':'+17%','color':'gray2'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total_old':'244','state_total_new':'147','state_change':'-42%','color':'gray2'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total_old':'223','state_total_new':'159','state_change':'+29%','color':'gray2'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total_old':'24','state_total_new':'24','state_change':'-67%','color':'gray2'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total_old':'7','state_total_new':'15','state_change':'-57%','color':'purple3'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total_old':'130','state_total_new':'123','state_change':'-10%','color':'gray2'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total_old':'88','state_total_new':'63','state_change':'-39%','color':'gray2'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total_old':'9','state_total_new':'22','state_change':'0%','color':'gray2'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total_old':'279','state_total_new':'242','state_change':'-15%','color':'purple3'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total_old':'33','state_total_new':'37','state_change':'-21%','color':'purple3'}]

};


$(document).ready(function() {
  cartogram.init();
});

});
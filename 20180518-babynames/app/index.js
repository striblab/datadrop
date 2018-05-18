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

$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return null;
    }
}

var selected = $.urlParam('chart');

if (selected == "all"){
    $(".slide").show();
}
else if (selected != null) {
    $(".slide").hide();
    $("#" + selected).show();
}

d3.csv("./data/names.csv", function(d) {
  return {
    gender: d.GENDER,
    year: +d.YEAR,
    name: d.NAME,
    rate: +d.RatePer10k,
    births: +d.NUM_BIRTHS
  };
}, function(error, rows) {

var data = rows;

var axis = [];
var dataStreamM = [];
var dataStreamF = [];
axis[0] = 'x';
var indexYear = 1;
var year = 0;
var year2 = 0;
var rate = 0;
var rate2 = 0;
var birthNum = 0;
var birthNum2 = 0;

for (var j=1910; j<2018; j++){
  axis[indexYear] = j;
  dataStreamM[indexYear] = 0;
  dataStreamF[indexYear] = 0;
  indexYear++;
}

function switchChart(name,gender,colors){

  var found = false;
  dataStreamM[0] = name;
  var index = 0;

  for (var i=0; i < data.length; i++){
    if (name == data[i].name && data[i].gender == "M"){
      found = true;
      index = i;
      for (var k=1; k < dataStreamM.length; k++){
        if (data[index].name != name){ break; }
        if (axis[k] == data[index].year) { 
          dataStreamM[k] = data[index].rate; 
          rate = data[index].rate;
          year = data[index].year;
          birthNum = data[index].births;
          index++; 
        }
      }
      // break;
  }
}

index = 0;

  for (var i=0; i < data.length; i++){
    if (name == data[i].name && data[i].gender == "F"){
      found = true;
      index = i;
      for (var k=1; k < dataStreamF.length; k++){
        if (data[index].name != name){ break; }
        if (axis[k] == data[index].year) { 
          dataStreamF[k] = data[index].rate; 
          rate2 = data[index].rate;
          year2 = data[index].year;
          birthNum2 = data[index].births;
          index++; 
        }
      }
      // break;
  }
}




dataStreamM[dataStreamM.length] = null;
dataStreamM[dataStreamM.length] = null;
dataStreamM[dataStreamM.length] = null;
dataStreamF[dataStreamF.length] = null;
dataStreamF[dataStreamF.length] = null;
dataStreamF[dataStreamF.length] = null;
axis[axis.length] = "2017";
axis[axis.length] = "2018";

if (year != 2017) {
          rate = 0;
          year = 2017;
          birthNum = 0;
}

if (year2 != 2017) {
          rate2 = 0;
          year2 = 2017;
          birthNum2 = 0;
}

$("#infobox").html('<div class="chart-tooltip">' +
  '<div class="tooltip-label">' + year + '</div></div>' +
  '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
  '<div class="tooltip-value" style="color:#E07242;font-weight:900;">' + d3.format(".1f")(rate) + '</div></div>' +
  '<div class="chart-tooltip"><div class="tooltip-label">Births</div>' +
  '<div class="tooltip-value">' + d3.format(",")(birthNum) + '</div>' +
  '</div>');

$("#infobox2").html('<div class="chart-tooltip ">' +
    '<div class="tooltip-label">' + year2 + '</div></div>' +
    '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
    '<div class="tooltip-value" style="color:#857AAA;font-weight:900;">' + d3.format(".1f")(rate2) + '</div></div>' +
    '<div class="chart-tooltip"><div class="tooltip-label">Births</div>' +
    '<div class="tooltip-value">' + d3.format(",")(birthNum2) + '</div>' +
    '</div>');

if (found == true){

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

var share = "#B0BEC5";

var chart = c3.generate({
        bindto: '#chart',
        padding: padding,
    data: {
        x: 'x',
        columns: [
            axis,
            dataStreamM,
            dataStreamF
        ],
        type: 'line'
    },
    color:  {  pattern: ["#E07242","#857AAA"] },
        legend: {
            show: false
        },
        point: {
            show: true,
            r: function(d) { if (d.x == 2017) { return 6;} else { return 2.5; } }
        },
    axis: {
      y: {
            min: 0,
            padding: {bottom: 0},
            tick: {
             count: 4,
             format: d3.format('.1f')
            }
        },
        x: {
        	padding: {right: 0, left: 0},
            tick: {
                values: ['1910', '1930', '1950', '1970', '1990', '2017'],
                count: 4,
                multiline: false
            }
          }
        },
        grid: {
            focus:{
                show:false
              },
          },
    //   tooltip: {
    //   contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
    //       var $$ = this, config = $$.config,
    //           titleFormat = config.tooltip_format_title || defaultTitleFormat,
    //           nameFormat = config.tooltip_format_name || function (name) { return name; },
    //           valueFormat = config.tooltip_format_value || defaultValueFormat,
    //           text, text2, i, title, value, name, bgcolor;
    //       for (i = 0; i < d.length; i++) {
    //           if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

    //           if (! text) {
    //               title = titleFormat ? titleFormat(d[i].x) : d[i].x;
    //               text = "<table class='" + $$.CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
    //           }

              



    //           name = nameFormat(d[i].name);
    //           value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
    //           bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

    //           for (var k=0; k < rows.length; k++){
    //             if (rows[k].name == name && rows[k].year == Number(title) && rows[k].gender == "M"){
    //               birthNum = rows[k].births;
    //               break;
    //             }
    //           }

    //           text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
    //           text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>Rate</td>";
    //           text += "<td class='value'>" + value + "</td>";
    //           text += "</tr><tr>";
    //           text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>Total Births</td>";
    //           text += "<td class='value'>" + birthNum + "</td>";
    //           text += "</tr>";
              
    //       }
    //       $("#infobox").html(text + "</table>");
    //   }
    // },
      tooltip: {
        contents: function(d, defaultTitleFormat, defaultValueFormat, color) {

        var birthNum = 0;
        var birthNum2 = 0;

        for (var k=0; k < rows.length; k++){
          if (rows[k].name == name && rows[k].year == d[0].x && rows[k].gender == "M"){
            birthNum = rows[k].births;
            break;
          }
        }

        for (var k=0; k < rows.length; k++){
          if (rows[k].name == name && rows[k].year == d[0].x && rows[k].gender == "F"){
            birthNum2 = rows[k].births;
            break;
          }
        }
          $("#infobox").html('<div class="chart-tooltip">' +
            '<div class="tooltip-label">' + d[0].x + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
            '<div class="tooltip-value" style="color:#E07242;font-weight:900;">' + defaultValueFormat(d[0].value) + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Births</div>' +
            '<div class="tooltip-value">' + d3.format(",")(birthNum) + '</div>' +
            '</div>');

          $("#infobox2").html('<div class="chart-tooltip ">' +
            '<div class="tooltip-label">' + d[1].x + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
            '<div class="tooltip-value" style="color:#857AAA;font-weight:900;">' + defaultValueFormat(d[1].value) + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Births</div>' +
            '<div class="tooltip-value">' + d3.format(",")(birthNum2) + '</div>' +
            '</div>');

        }
      }
});
}
else { $("#current").html("<div id='notfound'>Name not found</div>"); }

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1]; }
  else { return 0; }
}

if ($.urlParam('name') != 0 ) { 
  var name = toTitleCase($.urlParam('name')); 
  var gender = String($.urlParam('gender')).toUpperCase();
  var genderStatus = gender; 
  $("#" + gender).addClass("selected");
  if (gender == "M") { var colorMe = "#E07242"; var sex = "boy"; var genderfull="male" }
  else  { var colorMe = "#857AAA";  var sex = "girl"; var genderfull = "female"; }
  $("#named, #named2").html(name);
  // $("#gender").html(sex);
  // $(".sex").html(genderfull);
  // $("#named, #rate, #named2, .sex").css("color",colorMe);
  switchChart(name,gender,colorMe);
} 

  $( document ).ready(function() {
    $(".switch").click(function()  { 
       genderStatus = $(this).attr("data");
       $(".switch").removeClass("selected");
       $(this).addClass("selected");
    });

   $('#filter_box').keyup(function(e){
        if(e.keyCode == 13)
        {
          // window.location.href = './?name=' + $('#filter_box').val() + '&gender=' + genderStatus;
          window.location.href = './?chart=lookup&name=' + $('#filter_box').val();
        }
    });
    
});   

});

d3.csv("./data/top20_boys.csv", function(d) {
  return {
    name: d.NAME,
    rank: d.RANK,
    rate: +d.RatePer10k
  };
}, function(error, rows) {

  for (var i=0; i < rows.length; i++){
    $("#namesList").append('<div class="chart-tooltip"><div class="tooltip-label">' + rows[i].name + '</div>' + 
            '<div class="tooltip-value" style="color:#E07242;font-weight:900;">' + d3.format(".1f")(rows[i].rate) + '</div></div>');
  }


  });

d3.csv("./data/top20_girls.csv", function(d) {
  return {
    name: d.NAME,
    rank: +d.RANK,
    rate: +d.RatePer10k
  };
}, function(error, rows) {

  for (var i=0; i < rows.length; i++){
    $("#namesList2").append('<div class="chart-tooltip"><div class="tooltip-label">' + rows[i].name + '</div>' + 
            '<div class="tooltip-value" style="color:#857AAA;font-weight:900;">' + d3.format(".1f")(rows[i].rate) + '</div></div>');
  }

  });

d3.csv("./data/trend_boys.csv", function(d) {
  return {
    name: d.name,
    y2012: +d.y2012,
    y2017: +d.y2017,
    change: +d.change
  };
}, function(error, rows) {

    function chartTypeM() {

        var padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 60,
        };

        var chartType = c3.generate({
            bindto: "#namesGrid",
            padding: padding,
            data: {
                x: 'x',
                columns: [
                    ['x', "Kyrie","Kane","Harvey","Cyrus","Leonard","Maverick","Brooks","Nash","Bodhi","Warren","Knox","Arlo","Theodore","Bilal","Arthur","Finley","Lorenzo","Ali","Izaiah","Lachlan","Luqman","Malakai","Theo","Mateo","Remington"],
                    ['value', 5.1111,4.0000,3.8485,2.8889,2.8889,2.7692,2.4043,2.4043,2.3333,2.3333,2.2558,2.2308,2.2237,2.2000,2.1481,2.0435,1.8000,1.7778,1.7778,1.7778,1.7778,1.7778,1.7660,1.7619,1.7273]
                ],
                type: 'bar',
                labels: {
                    format: {
                        'value': d3.format('+%.0f')
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
                pattern: ['#E07242']
            },
            axis: {
                rotated: true,
                y: {
                    max: 15,
                    min: 0,
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 8,
                        values: [0, 5, 10, 15],
                        format: d3.format('+%.0f')
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

    chartTypeM();

});


d3.csv("./data/trend_girls.csv", function(d) {
  return {
    name: d.name,
    y2012: +d.y2012,
    y2017: +d.y2017,
    change: +d.change
  };
}, function(error, rows) {

    function chartTypeF() {

            var padding = {
                top: 20,
                right: 60,
                bottom: 20,
                left: 60,
            };

            var chartType = c3.generate({
                bindto: "#namesGrid2",
                padding: padding,
                data: {
                    x: 'x',
                    columns: [
                        ['x', "Everly","Nova","Valentina","Margot","Thea","Emersyn","Amina","Haven","Freya","Juniper","Luna","Finley","Wren","Braelynn","Colette","Dorothy","Louise","Asiya","Leilani","Sloane","Zara","Blake","Arya","Hafsa","Zahra"],
                        ['value', 10.6667,4.2000,3.8276,3.8000,3.7368,3.4828,3.4000,3.4000,3.0741,3.0476,2.7349,2.5821,2.4483,2.3333,2.3333,2.3333,2.3333,2.2000,2.2000,2.2000,2.2000,2.0303,1.9310,1.8571,1.8571]
                    ],
                    type: 'bar',
                    labels: {
                        format: {
                            'value': d3.format('+%.0f')
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
                    pattern: ['#857AAA']
                },
                axis: {
                    rotated: true,
                    y: {
                        max: 15,
                        min: 0,
                        padding: {
                            bottom: 0,
                            top: 0
                        },
                        tick: {
                            count: 8,
                            values: [0, 5, 10, 15],
                            format: d3.format('+%.0f')
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

        chartTypeF();

});

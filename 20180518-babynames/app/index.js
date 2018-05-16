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
var rate = 0;
var rate2 = 0;
var birthNum = 0;
var birthNum2 = 0;

for (var j=1910; j<2017; j++){
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
          year = data[index].year;
          birthNum2 = data[index].births;
          index++; 
        }
      }
      // break;
  }
}


$("#infobox").html('<div class="chart-tooltip">' +
  '<div class="tooltip-label">' + year + '</div></div>' +
  '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
  '<div class="tooltip-value" style="color:#E07242;font-weight:900;">' + rate + '</div></div>' +
  '<div class="chart-tooltip"><div class="tooltip-label">Total Births</div>' +
  '<div class="tooltip-value">' + birthNum + '</div>' +
  '</div>');

$("#infobox2").html('<div class="chart-tooltip ">' +
    '<div class="tooltip-label">' + year + '</div></div>' +
    '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
    '<div class="tooltip-value" style="color:#857AAA;font-weight:900;">' + rate2 + '</div></div>' +
    '<div class="chart-tooltip"><div class="tooltip-label">Total Births</div>' +
    '<div class="tooltip-value">' + birthNum2 + '</div>' +
    '</div>');

dataStreamM[dataStreamM.length] = null;
dataStreamM[dataStreamM.length] = null;
axis[axis.length] = "2017";
axis[axis.length] = "2018";

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
            r: function(d) { if (d.x == 2016) { return 6;} else { return 2.5; } }
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
                values: ['1910', '1950', '1990', '2018'],
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
            '<div class="chart-tooltip"><div class="tooltip-label">Total Births</div>' +
            '<div class="tooltip-value">' + birthNum + '</div>' +
            '</div>');

          $("#infobox2").html('<div class="chart-tooltip ">' +
            '<div class="tooltip-label">' + d[1].x + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Rate</div>' + 
            '<div class="tooltip-value" style="color:#857AAA;font-weight:900;">' + defaultValueFormat(d[1].value) + '</div></div>' +
            '<div class="chart-tooltip"><div class="tooltip-label">Total Births</div>' +
            '<div class="tooltip-value">' + birthNum2 + '</div>' +
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
          window.location.href = './?name=' + $('#filter_box').val();
        }
    });
    
});   

});
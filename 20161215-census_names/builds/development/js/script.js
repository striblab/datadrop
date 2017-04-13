(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.csv("./data/surnames.csv", function(d) {
  return {
    name: d.surname,
    rank: +d.rank,
    rank2000: +d.rank2000,
    count: +d.count,
    prop100k: +d.prop100k,
    cum_prop100k: +d.cum_prop100k,
    pctwhite: +d.pctwhite,
    pctblack: +d.pctblack,
    pctapi: +d.pctapi,
    pctaian: +d.pctaian,
    pct2prace: +d.pct2prace,
    pcthispanic: +d.pcthispanic    
  };
}, function(error, rows) {

var data = rows;

// d3.select("#namePick").selectAll(".switch")
//   .data(data).enter().append("div")
//   .attr("class",function(d) { return "switch"; })
//   .attr("id",function(d) { return d.name; })
//   .on("click",function(d){ switchChart(d.rank); })
//   .html(function(d){ return d.name; });

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1]; }
  else { return 0; }
}

if ($.urlParam('name') != 0 ) { 
  var name = $.urlParam('name'); 
  switchChart(name.toUpperCase());
}

function switchChart(name){

var prevalence = [];
var prop100k = 0;
var cum_prop100k = 0;
var count = 0;
var rank = 0;
var index = 0;

prevalence[0] = "Percentage";
// black[0] = "Black";
// pacific[0] = "Pacific Islander";
// asian[0] = "Asian";
// multi[0] = "Multiracial";
// hispanic[0] = "Hispanic";

console.log(name + " " + data[0].name)

for (var i=0; i<data.length; i++){
  if (name == data[i].name){
  prevalence[1] = data[i].pctwhite / 100;
  prevalence[2] = data[i].pctblack / 100;
  prevalence[3] = data[i].pctapi / 100;
  prevalence[4] = data[i].pctaian / 100;
  prevalence[5] = data[i].pcthispanic / 100;
  prevalence[6] = data[i].pct2prace / 100;
  name = data[i].name;
  prop100k = data[i].prop100k;
  cum_prop100k = data[i].cum_prop100k;
  count = data[i].count;
  rank = data[i].rank;
  rank2000 = data[i].rank2000;
  break;   
  }
}

if (prop100k != 0){
$("#rate").html(d3.format(",")(prop100k));
$("#name, #named").html(name);
$("#count").html(d3.format(",")(count));
$("#rank").html("#" + d3.format(",")(rank));

if (!isNaN(rank2000) && rank2000 != 0){ 
  $("#updown").removeClass("pos");
  $("#updown").removeClass("neg");
  $("#rank2000").html("#" + d3.format(",")(rank2000));

  if (rank2000 > rank){
  $("#updown").addClass("pos");
  $("#updown").html("&#x25B2;");
  } else if (rank2000 < rank){
  $("#updown").addClass("neg");
  $("#updown").html("&#x25BC;");
  } else { $("#updown").html(""); }
} else { 
  $("#oldRank").hide();
}

} else { $("#name, #named").html(name); $("#current").html("No data. Surname not found.<div class='chatter'>Note: data only reflects surnames reported 100 or more times. If a name doesn't pop up, it's likely not as common.</div>"); $("#current").addClass("error"); }

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
        columns: [
            prevalence
        ],
        type: 'bar'
    },
    legend: {
        show: false
    },
    color:  {  pattern: ["#7C98B3"] },
    axis: {
      y: {
            max: 1,
            min: 0,
            padding: {bottom: 0, top:0},
            tick: {
             count: 4,
             format: d3.format('%')
            }
        },
        x: {
            type: 'category',
            categories: ['White', 'Black', 'Asian', 'Native', 'Hispanic', 'Other'],
            tick: {
                              rotate: 60,
                multiline: false
            },
        }
      }
});

}

  $( document ).ready(function() {
    $(".switch").click(function()  { 
       $(".switch").removeClass("selected");
       $(this).addClass("selected");
    });

    $('#filter_box').keyup(function(e){
        if(e.keyCode == 13)
        {
          window.location.href = './?name=' + $('#filter_box').val();
        }
    });
});  

});
},{}]},{},[1])
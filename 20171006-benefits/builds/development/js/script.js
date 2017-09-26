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


d3.json('./data/benefits.json', function(error, dataLoad) {

var data = dataLoad.benefits;

//build the scroller
function scrollerBuild(target,type) {
d3.select("#" + target + " .holder").selectAll(".card")
.data(data.filter(function(d) { return d.FiveYearChange == type }).sort(function(a,b) { return d3.descending(a.y2017, b.y2017); })).enter().append("div")
.attr("class",function (d) { return "card"; })
.html(function (d){ 
  var width = "";
  var first = "";
  var markup = "";
  var newValue = "&nbsp;&nbsp;";
  var oldValue = "&nbsp;&nbsp;";
  var pctChange = d.y2017 - d.y2013;

  if (type == "Increase") {
    width = d3.format("%")(d.y2017);
    first = d3.format("%")(d.y2013);
    newValue = d3.format("%")(d.y2017);
    if (d.y2013 > 0.10) { oldValue = d3.format("%")(d.y2013); }

    markup = "<div class='updown'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='width:" + width + ";'><div class='first' style='width:" + first + ";'>" + oldValue + "</div>" + newValue + "</div><div class='pct'></div></div></div>";
  }
  else if (type == "Decrease") {
    first = d3.format("%")(d.y2017);
    width = d3.format("%")(d.y2013);
    if (d.y2017 > 0.10) { newValue = d3.format("%")(d.y2017); }
    oldValue = d3.format("%")(d.y2013);

    markup = "<div class='updown'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='width:" + width + ";'><div class='first' style='width:" + first + ";'>" + newValue + "</div>" + oldValue + "</div><div class='pct'></div></div></div>";
  }
  else {
    width = d3.format("%")(d.y2017);
    first = d3.format("%")(d.y2013);
    newValue = d3.format("%")(d.y2017);
    if (d.y2013 > 0.10) { oldValue = d3.format("%")(d.y2013); }

    markup = "<div class='updown'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='width:" + width + ";'><div class='first' style='width:" + first + ";'>" + oldValue + "</div>" + newValue + "</div><div class='pct'></div></div></div>";
  }
    return markup;
});

//interfact triggers 
  $( document ).ready(function() {
    $('.filter').on('keyup search', function(e){
        $($(this).parent().find('.card')).hide();
        var txt = $(this).find('input').val();
        $($(this).parent().find('.card')).each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $($(this).parent().find('.card:visible')).length;
        if (txt != '') { $('#results').html(count); }
        else { $('#results').html("all"); }
    });

    $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});
}

scrollerBuild("increasing","Increase");
scrollerBuild("decreasing","Decrease");
scrollerBuild("weird","Weird");

});
},{}]},{},[1])
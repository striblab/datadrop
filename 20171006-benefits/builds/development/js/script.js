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
.data(data.filter(function(d) { if (type != "all") { return d.FiveYearChange == type } else { return d.FiveYearChange == "Increase" || d.FiveYearChange == "Decrease" || d.FiveYearChange == "Weird" } }).sort(function(a,b) { if (type == "Decrease") { return d3.ascending(a.diff, b.diff); } else { return d3.descending(a.diff, b.diff); }  })).enter().append("div")
.attr("class",function (d) { return d.slug + " card"; })
.html(function (d){ 
  var width = "";
  var first = "";
  var markup = "";
  var newValue = "&nbsp;";
  var oldValue = "&nbsp;";
  var pctChange = d.y2017 - d.y2013;
  var posneg = "#118241";

  if (d.diff < 0) { posneg = "#9C0004"; }

  if (type == "Increase") {
    width = d3.format("%")(d.y2017);
    first = d3.format("%")(d.y2013);
    newValue = d3.format("%")(d.y2017);
    if (d.y2013 > 0.10) { oldValue = d3.format("%")(d.y2013); }

    markup = "<div class='updown' style='color:" + posneg + "'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='width:" + width + ";'><div class='first' style='width:" + first + ";'>" + oldValue + "</div>" + newValue + "</div><div class='pct'></div></div></div>";
  }
  else if (type == "Decrease") {
    first = d3.format("%")(d.y2017);
    width = d3.format("%")(d.y2013);
    if (d.y2017 > 0.10) { newValue = d3.format("%")(d.y2017); }
    oldValue = d3.format("%")(d.y2013);

    markup = "<div class='updown' style='color:" + posneg + "'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='width:" + width + ";'><div class='first' style='width:" + first + ";'>" + newValue + "</div>" + oldValue + "</div><div class='pct'></div></div></div>";
  }
  else {
    width = d3.format("%")(d.y2017);
    first = d3.format("%")(d.y2013);
    if (d.y2017 > 0.12) { newValue = d3.format("%")(d.y2017); }
    if (d.y2013 > 0.12) { oldValue = d3.format("%")(d.y2013); }

    if (d.diff < 0) { markup = "<div class='updown' style='color:" + posneg + "'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='background-color:#636363;width:" + width + ";'><div class='first' style='background-color:#aaaaaa;width:" + first + ";'>" + newValue + "</div>" + oldValue + "</div><div class='pct'></div></div></div>"; }
    else { markup = "<div class='updown' style='color:" + posneg + "'>" + d3.format("+%")(pctChange) + "</div><div class='barChart'><div class='label'>" + d.description + "<div class='bar' style='background-color:#aaaaaa;width:" + width + ";'><div class='first' style='background-color:#636363;width:" + first + ";'>" + oldValue + "</div>" + newValue + "</div><div class='pct'></div></div></div>"; }

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
scrollerBuild("all","all");

$(".thisSwitch a").click(function()  { 
  $(".card").hide();
  $("." + $(this).attr("data")).show();
  if ($(this).attr("data") == "all") { $(".card").show(); }
});

//dropdown
      function DropDown(el)  { 
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype =  { 
        initEvents : function()  { 
          var obj = this;

          obj.dd.on('click', function(event) { 
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function() { 
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function()  { 
          return this.val;
        },
        getIndex : function()  { 
          return this.index;
        }
      }

      $(function()  { 

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#dd2') );
        var dd3 = new DropDown( $('#dd3') );
        var dd4 = new DropDown( $('#dd4') );

        $(document).click(function()  { 
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });

});
},{}]},{},[1])
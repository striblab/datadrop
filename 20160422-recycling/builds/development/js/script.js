(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/recycling.json", function(error, dataLoad) {

$(".thisSwitch a").click(function() {
  // $(".chatter").hide();
  // $("#" + $(this).attr("data")).show();
  console.log($(this).attr("fields"));
  var chartValue = String($(this).attr("fields")).split(",");
  console.log(chartValue);

  chartR.load({
            json: data,
            keys: {
                x: 'year',
                value: chartValue
            },
            names: {
              'alum_bev':'Aluminum Beverage Containers',
              'film_plastic':'Plastic Film',
              'glass':'Glass',
              'other_alum':'Other Aluminum',
              'paper':'Paper',
              'plastic':'Plastic',
              'steel_cans':'Steel Cans',
              'total':'All Materials',
              'alum_bev_containers':'Aluminum Beverage Containers',
              'glass_bev_containers':'Glass Beverage Containers',
              'other_alum_small':'Other Aluminum',
              'other_glass_containers':'Other Glass Containers',
              'other_metal':'Other Metals',
              'plastic_film_small':'Plastic Film',
              'steel_tin_containers':'Steel Tin Containers',
              'other_plastic_containers':'Other Plastic Containers',
              'polystyrene':'Polystyrene',
              'hdpe':'HDPE',
              'pet':'PET',
              'cartons':'Paper Cartons',
              'magazines':'Magazines',
              'paper_boxboard':'Paper Boxboard',
              'high_grade_office':'High Grade Office Paper',
              'newsprint':'Newsprint',
              'mixed_paper':'Mixed Paper',
              'uncoated_old_corrugated_containers':'Uncoated Old Corrugated Containers'
            },
            types: {
              chartValue: 'bar'
            },
          unload: ['alum_bev','film_plastic','glass','other_alum','paper','plastic','steel_cans','total','alum_bev_containers','cartons','glass_bev_containers','hdpe','high_grade_office','magazines','mixed_paper','newsprint','other_alum_small','other_glass_containers','other_metal','other_plastic_containers','paper_boxboard','pet','plastic_film_small','polystyrene','steel_tin_containers','uncoated_old_corrugated_containers']
    });
});

var data = dataLoad.chart;

var  padding = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 60,
    };

var chartR = c3.generate({
        bindto: '#chart',
        size: { height: 400 },
        padding: padding,
        data: {
            json: data,
            keys: {
                x: 'year',
                value: ['total']
            },
            names: {
              'alum_bev':'Aluminum Beverage Containers',
              'film_plastic':'Plastic Film',
              'glass':'Glass',
              'other_alum':'Other Aluminum',
              'paper':'Paper',
              'plastic':'Plastic',
              'steel_cans':'Steel Cans',
              'total':'All Materials',
              'alum_bev_containers':'Aluminum Beverage Containers',
              'glass_bev_containers':'Glass Beverage Containers',
              'other_alum_small':'Other Aluminum',
              'other_glass_containers':'Other Glass Containers',
              'other_metal':'Other Metals',
              'plastic_film_small':'Plastic Film',
              'steel_tin_containers':'Steel Tin Containers',
              'other_plastic_containers':'Other Plastic Containers',
              'polystyrene':'Polystyrene',
              'hdpe':'HDPE',
              'pet':'PET',
              'cartons':'Paper Cartons',
              'magazines':'Magazines',
              'paper_boxboard':'Paper Boxboard',
              'high_grade_office':'High Grade Office Paper',
              'newsprint':'Newsprint',
              'mixed_paper':'Mixed Paper',
              'uncoated_old_corrugated_containers':'Uncoated Old Corrugated Containers'
            },
        colors: {
              'alum_bev':'#B0BEC5',
              'film_plastic':'#90CAF9',
              'glass':'#80DEEA',
              'other_alum':'#9FA8DA',
              'paper':'#242424',
              'plastic':'#242424',
              'steel_cans':'#B0BEC5',
              'total':'#242424',
              'alum_bev_containers':'#B0BEC5',
              'glass_bev_containers':'#80DEEA',
              'other_alum_small':'#9FA8DA',
              'other_glass_containers':'#26C6DA',
              'other_metal':'#90A4AE',
              'plastic_film_small':'#90CAF9',
              'steel_tin_containers':'#ccc',
              'other_plastic_containers':'#FFCC80',
              'polystyrene':'#FFB74D',
              'pet':'#FF9800',
              'hdpe':'#FFA726',
              'cartons':'#FFE082',
              'magazines':'#FFD54F',
              'paper_boxboard':'#FFC107',
              'high_grade_office':'#FFB300',
              'newsprint':'#FFA000',
              'mixed_paper':'#FF8F00',
              'uncoated_old_corrugated_containers':'#FF6F00'
        },
        },
       bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
        axis: {
          y: {
            min: 0,
            padding: {bottom: 0},
            tick: {
             count: 4,
             format: d3.format('.0f')
            }
        },
        x: {
            // type: 'timeseries',
            tick: {
                values: ['1996', '2001', '2007', '2013'],
                count: 4,
                multiline: false
            }
          }
        },
      subchart: { show: false },
        // color: { pattern: ['#000','#DAE1E7','#C6D1D9','#A8B9C5','#7F98AA','#556E7F','#2C3942'] },
    });

});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#ddY') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });
},{}]},{},[1])
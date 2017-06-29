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

d3.json('./data/incomes.json', function(error, dataLoad) {

//load income data
var dataIncome = dataLoad.incomes;

//map functions
function mapTips(d, subject, dataCompare){

  var pctChange = 0;
  var color = "";

  if (subject == "personal"){
      for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){ 
          if (dataIncome[i].pincomeDIFF >= 15) { color = "gray4"; }
           else if (dataIncome[i].pincomeDIFF >= 10) { color = "gray3"; }
           else if (dataIncome[i].pincomeDIFF >= 5) { color = "gray2"; }
           else if (dataIncome[i].pincomeDIFF  >= 0) { color = "gray1"; }
           pctChange = dataIncome[i].pincomeDIFF / 100; 
           break;
         }
        }
      }
   if (subject == "household"){
      for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){ 
           if (dataIncome[i].mincomeDIFF >= 9) { color = "gray4"; }
           else if (dataIncome[i].mincomeDIFF >= 6) { color = "gray3"; }
           else if (dataIncome[i].mincomeDIFF >= 3) { color = "gray2"; }
           else if (dataIncome[i].mincomeDIFF  >= 0) { color = "gray1"; }
           pctChange = dataIncome[i].mincomeDIFF / 100; 
           break;
         }
        }
      } 
   if (subject == "index"){
      for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){ 
           if (dataIncome[i].FULLINDEX >= 120) { color = "gray4"; }
           else if (dataIncome[i].FULLINDEX >= 80) { color = "gray3"; }
           else if (dataIncome[i].FULLINDEX >= 40) { color = "gray2"; }
           else if (dataIncome[i].FULLINDEX  >= 0) { color = "gray1"; }
           else if (dataIncome[i].FULLINDEX  <= -15) { color = "red4"; }
           else if (dataIncome[i].FULLINDEX  <= -7) { color = "red3"; }
           else if (dataIncome[i].FULLINDEX  <= -3) { color = "red2"; }
           else if (dataIncome[i].FULLINDEX  <= 0) { color = "red1"; }
           pctChange = dataIncome[i].FULLINDEX / 100; 
           break;
         }
        }
      } 
     if (subject == "trump"){
        for (var i=0; i < dataIncome.length; i++){
            if (dataIncome[i].county == d.properties.COUNTYNAME && dataIncome[i].FLIP == "YES"){ 
             if (dataIncome[i].FULLINDEX >= 120) { color = "gray4"; }
             else if (dataIncome[i].FULLINDEX >= 80) { color = "gray3"; }
             else if (dataIncome[i].FULLINDEX >= 40) { color = "gray2"; }
             else if (dataIncome[i].FULLINDEX  >= 0) { color = "gray1"; }
             else if (dataIncome[i].FULLINDEX  <= -15) { color = "red4"; }
             else if (dataIncome[i].FULLINDEX  <= -7) { color = "red3"; }
             else if (dataIncome[i].FULLINDEX  <= -3) { color = "red2"; }
             else if (dataIncome[i].FULLINDEX  <= 0) { color = "red1"; }
             pctChange = dataIncome[i].FULLINDEX / 100; 
             break;
           }
          }
        } 
        if (subject == "taxes"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].taxDIFF >= 100) { color = "gray4"; }
           else if (dataIncome[i].taxDIFF >= 50) { color = "gray3"; }
           else if (dataIncome[i].taxDIFF >= 30) { color = "gray2"; }
           else if (dataIncome[i].taxDIFF  > 0) { color = "gray1"; }
           else if (dataIncome[i].taxDIFF  <= -30) { color = "red4"; }
           else if (dataIncome[i].taxDIFF  <= -20) { color = "red3"; }
           else if (dataIncome[i].taxDIFF  <= -10) { color = "red2"; }
           else if (dataIncome[i].taxDIFF  <= 0) { color = "red1"; }
           pctChange = dataIncome[i].taxDIFF / 100; 
           break;
            }
          }
        }
        if (subject == "aids"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].aidsDIFF >= 100) { color = "gray4"; }
           else if (dataIncome[i].aidsDIFF >= 50) { color = "gray3"; }
           else if (dataIncome[i].aidsDIFF >= 30) { color = "gray2"; }
           else if (dataIncome[i].aidsDIFF  > 0) { color = "gray1"; }
           else if (dataIncome[i].aidsDIFF  <= -30) { color = "red4"; }
           else if (dataIncome[i].aidsDIFF  <= -20) { color = "red3"; }
           else if (dataIncome[i].aidsDIFF  <= -10) { color = "red2"; }
           else if (dataIncome[i].aidsDIFF  <= 0) { color = "red1"; }
           pctChange = dataIncome[i].aidsDIFF / 100; 
           break;
            }
          }
        }
    return "<div class='districtName'>" + d.properties.COUNTYNAME + " County</div><div class='population " + color + "'>" + d3.format("+%")(pctChange) + " change</div>"      
}

function mapBuild(container, boxContainer, chartContainer, shape, race, geo, dataCompare, index) {

var width = 320,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      // .on("click", clicked)
      .attr("id", function(d) { var str = geo + "_" + d.properties.DISTRICT; return str.replace(new RegExp(" ", "g"),"-"); })
      .attr("precinctName", function(d){ return d.properties.DISTRICT })
      .attr("class", function(d){
        if (race == "personal"){
          for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].pincomeDIFF >= 18) { return "gray4"; }
           else if (dataIncome[i].pincomeDIFF >= 12) { return "gray3"; }
           else if (dataIncome[i].pincomeDIFF >= 6) { return "gray2"; }
           else if (dataIncome[i].pincomeDIFF  >= 0) { return "gray1"; }
            }
          }
        }
        if (race == "household"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].mincomeDIFF >= 9) { return "gray4"; }
           else if (dataIncome[i].mincomeDIFF >= 6) { return "gray3"; }
           else if (dataIncome[i].mincomeDIFF >= 3) { return "gray2"; }
           else if (dataIncome[i].mincomeDIFF  >= 0) { return "gray1"; }
           else if (dataIncome[i].mincomeDIFF  <= -9) { return "red4"; }
           else if (dataIncome[i].mincomeDIFF  <= -6) { return "red3"; }
           else if (dataIncome[i].mincomeDIFF  <= -3) { return "red2"; }
           else if (dataIncome[i].mincomeDIFF  <= 0) { return "red1"; }
            }
          }
        }
        if (race == "index"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].FULLINDEX >= 120) { return "gray4"; }
           else if (dataIncome[i].FULLINDEX >= 80) { return "gray3"; }
           else if (dataIncome[i].FULLINDEX >= 40) { return "gray2"; }
           else if (dataIncome[i].FULLINDEX  >= 0) { return "gray1"; }
           else if (dataIncome[i].FULLINDEX  <= -15) { return "red4"; }
           else if (dataIncome[i].FULLINDEX  <= -7) { return "red3"; }
           else if (dataIncome[i].FULLINDEX  <= -3) { return "red2"; }
           else if (dataIncome[i].FULLINDEX  <= 0) { return "red1"; }
            }
          }
        }
        if (race == "trump"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME && dataIncome[i].FLIP == "YES"){
           if (dataIncome[i].FULLINDEX >= 120) { return "gray4"; }
           else if (dataIncome[i].FULLINDEX >= 80) { return "gray3"; }
           else if (dataIncome[i].FULLINDEX >= 40) { return "gray2"; }
           else if (dataIncome[i].FULLINDEX  >= 0) { return "gray1"; }
           else if (dataIncome[i].FULLINDEX  <= -15) { return "red4"; }
           else if (dataIncome[i].FULLINDEX  <= -7) { return "red3"; }
           else if (dataIncome[i].FULLINDEX  <= -3) { return "red2"; }
           else if (dataIncome[i].FULLINDEX  <= 0) { return "red1"; }
            }
          }
         return "none";
        }
        if (race == "taxes"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].taxDIFF >= 100) { return "gray4"; }
           else if (dataIncome[i].taxDIFF >= 50) { return "gray3"; }
           else if (dataIncome[i].taxDIFF >= 30) { return "gray2"; }
           else if (dataIncome[i].taxDIFF  > 0) { return "gray1"; }
           else if (dataIncome[i].taxDIFF  <= -30) { return "red4"; }
           else if (dataIncome[i].taxDIFF  <= -20) { return "red3"; }
           else if (dataIncome[i].taxDIFF  <= -10) { return "red2"; }
           else if (dataIncome[i].taxDIFF  <= 0) { return "red1"; }

            }
          }
        }
        if (race == "aids"){
        for (var i=0; i < dataIncome.length; i++){
          if (dataIncome[i].county == d.properties.COUNTYNAME){
           if (dataIncome[i].aidsDIFF >= 100) { return "gray4"; }
           else if (dataIncome[i].aidsDIFF >= 50) { return "gray3"; }
           else if (dataIncome[i].aidsDIFF >= 30) { return "gray2"; }
           else if (dataIncome[i].aidsDIFF  > 0) { return "gray1"; }
           else if (dataIncome[i].aidsDIFF  <= -30) { return "red4"; }
           else if (dataIncome[i].aidsDIFF  <= -20) { return "red3"; }
           else if (dataIncome[i].aidsDIFF  <= -10) { return "red2"; }
           else if (dataIncome[i].aidsDIFF  <= 0) { return "red1"; }

            }
          }
        }
        })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, race, dataCompare);
      }));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .switch, #close, .mapSwitch").click(function() {
  clicked2();
  $("#filter input").val("");
  $(".district").removeClass("selected");
  $("#infobox").hide();
  d3.selectAll(".map rect").classed('faded', false); 
  d3.selectAll(".map rect").classed('active', false); 
  $(".rightSide").show();
});

$(".mapSwitch").click(function() {
  $("#filter input").val("");
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  d3.selectAll("#mapMetro path, #mapState path")
      .classed("faded", false)
      .classed("active", false);

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function (d) { return d === centered; });
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function (d) { return d === centered; });
}

}

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


//personal income chart
function gapChart(){
    var chart = c3.generate({
      bindto: '#gapChart',
      padding: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 120,
      },
      data: {
        x: 'x',
        columns: [
          ["x",2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
          // ["W CENTRAL",33461,34612,35466,37216,37229,36144,36203,37830,41891,39970,42281,43983,51326,49406,46134,47203],
          // ["VALLEY",32368,33662,34319,34761,37623,38149,37694,38095,41952,41552,43301,46155,51407,52466,48095,51704],
          // ["SW CENTRAL",34904,35304,35783,36700,37718,37438,37492,38293,41518,39497,40817,42047,45254,45299,44198,46312],
          // ["SOUTHWEST",34004,34623,34458,36012,38818,39370,37941,39108,42460,41260,43055,46451,48073,49970,47027,49570],
          // ["SOUTHEAST",36097,37288,37848,38411,39545,38184,38266,38979,40346,39456,40247,41754,43243,42111,42998,44281],
          // ["S CENTRAL",34931,35954,36260,37288,38737,38750,38202,38558,40651,39132,39751,42162,44228,43944,42443,44304],
          // ["NORTHWEST",34982,33016,33467,39311,35606,35664,36132,38089,45122,38368,41597,43654,49533,50677,46229,46431],
          // ["N CENTRAL",30177,30728,31424,32601,33403,32291,32167,33166,34458,34315,35064,35836,36706,36010,37389,38558],
          // ["HEADWATERS",28932,29533,30084,32831,35005,33062,31543,31321,33240,33207,33926,34399,35332,35544,36204,37513],
          // ["E CENTRAL",33006,33458,33890,33661,34132,32728,32734,33237,33720,33450,33803,34566,35096,35222,36164,37821],
          // ["CENTRAL",35745,36696,37105,38374,38894,38048,38250,38942,39043,37301,37530,38583,39592,39446,40268,41631],
          // ["ARROWHEAD",33877,34744,35327,35482,35905,35016,34606,35268,35968,36365,37202,37970,38096,37936,38788,39964],
          // ["STATE",35101,35703,36124,37516,38376,37751,37519,38372,40696,39126,40356,42044,44593,44481,43553,45154],
          ["METRO",49736,50015,49872,50514,51827,51155,51901,52657,52146,49111,49577,50929,52258,51607,53349,55295],
          ["OUTSTATE",33821,34451,34921,36379,37199,36578,36261,37122,39694,38253,39549,41267,43923,43857,42696,44266]
        ],
        type: 'line'
      },
      // legend: {
      //   show: false
      // },
      color: {
        pattern: ['#333333','#888888','#aaaaaa']
      },
      axis: {
        y: {
          min: 0,
          padding: {
            bottom: 0
          },
          tick: {
            count: 4,
            format: d3.format('$,.0f')
          },
          label: {
            text: 'avg personal income',
            position: 'outer-middle'
          }
        },
        x: {
          tick: {
                     values: [2000,2007,2009,2015],
                     count: 5
                },
          padding: {
            left: 0.25,
            right: 0.25
          }
        }
      },
         regions: [
        {axis: 'x', start: 2007, end: 2009, class: 'hottest'},
    ]
      // tooltip: {
      //   contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      //     return '<div class="chart-tooltip">' +
      //       '<span class="tooltip-label">' + d[0].x + ':</span>' +
      //       '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
      //       '</div>';
      //   }
      // }
    });
}

//household income chart
function gapChart2(){
    var chart = c3.generate({
      bindto: '#gapChart2',
      padding: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 120,
      },
      data: {
        x: 'x',
        columns: [
          ["x",2000,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
          ["Metro",85681,80606,80092,78879,76225,74937,73821,74855,75324,75953,78877],
          ["Outstate",54366,52031,52356,52312,51615,50994,50809,51399,52487,52721,53743],
          // ["State",67673,63508,63639,63095,61455,60225,60008,60724,61705,61551,63459]
        ],
        type: 'line'
      },
      // legend: {
      //   show: false
      // },
      color: {
        pattern: ['#333333','#888888','#aaaaaa']
      },
      axis: {
        y: {
          min: 0,
          padding: {
            bottom: 0
          },
          tick: {
            count: 4,
            format: d3.format('$,.0f')
          },
          label: {
            text: 'median household income',
            position: 'outer-middle'
          }
        },
        x: {
          tick: {
                     values: [2000,2007,2009,2015],
                     count: 5
                },
          padding: {
            left: 0.25,
            right: 0.25
          }
        }
      },
         regions: [
        {axis: 'x', start: 2007, end: 2009, class: 'hottest'},
    ]
      // tooltip: {
      //   contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      //     return '<div class="chart-tooltip">' +
      //       '<span class="tooltip-label">' + d[0].x + ':</span>' +
      //       '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
      //       '</div>';
      //   }
      // }
    });
}

//per capita taxes chart
function taxChart(){
    var chart = c3.generate({
      bindto: '#taxChart',
      padding: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 120,
      },
      data: {
        // x: 'x',
        columns: [
          // ["Metro",2914,3280,3540],
          ["Outstate",1920,2218,2368],
          // ["State",67673,63508,63639,63095,61455,60225,60008,60724,61705,61551,63459]
        ],
        type: 'line'
      },
      // legend: {
      //   show: false
      // },
      color: {
        pattern: ['#888888','#333333','#aaaaaa']
      },
      axis: {
        y: {
          min: 0,
          padding: {
            bottom: 0
          },
          tick: {
            count: 4,
            format: d3.format('$,.0f')
          },
          label: {
            text: 'taxes per capita',
            position: 'outer-middle'
          }
        },
        x: {
          type: 'category',
          categories: ['2009-2010', '2011-2012', '2012-2013'],
          padding: {
            left: 0.25,
            right: 0.25
          }
        }
      },
         regions: [
        {axis: 'x', start: 2007, end: 2009, class: 'hottest'},
    ]
      // tooltip: {
      //   contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      //     return '<div class="chart-tooltip">' +
      //       '<span class="tooltip-label">' + d[0].x + ':</span>' +
      //       '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
      //       '</div>';
      //   }
      // }
    });
}

//per capita taxes chart
function aidChart(){
    var chart = c3.generate({
      bindto: '#aidChart',
      padding: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 120,
      },
      data: {
        // x: 'x',
        columns: [
          ["Metro",2611],
          ["Outstate",2637],
          // ["Metro",2163,2519,2611],
          // ["Outstate",2235,2554,2637],
          // ["State",67673,63508,63639,63095,61455,60225,60008,60724,61705,61551,63459]
        ],
        type: 'bar'
      },
      // legend: {
      //   show: false
      // },
      color: {
        pattern: ['#333333','#888888','#aaaaaa']
      },
      axis: {
        y: {
          min: 0,
          padding: {
            bottom: 0
          },
          tick: {
            count: 4,
            format: d3.format('$,.0f')
          },
          label: {
            text: 'taxes per capita',
            position: 'outer-middle'
          }
        },
        x: {
          type: 'category',
          // categories: ['2009-2010', '2011-2012', '2012-2013'],
          categories: ['Major State Aid'],
          padding: {
            left: 0.25,
            right: 0.25
          }
        }
      },
         regions: [
        {axis: 'x', start: 2007, end: 2009, class: 'hottest'},
    ]
      // tooltip: {
      //   contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      //     return '<div class="chart-tooltip">' +
      //       '<span class="tooltip-label">' + d[0].x + ':</span>' +
      //       '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span>' +
      //       '</div>';
      //   }
      // }
    });
}

//populate
  mapBuild("#mapHousehold", "#infobox", "#chart", "counties.json", "household", "mn", null, 0);
  mapBuild("#mapPersonal", "#infobox", "#chart", "counties.json", "personal", "mn", null, 0);
  mapBuild("#mapTaxes", "#infobox", "#chart", "counties.json", "taxes", "mn", null, 0);
  mapBuild("#mapAids", "#infobox", "#chart", "counties.json", "aids", "mn", null, 0);
  mapBuild("#mapTrump", "#infobox", "#chart", "counties.json", "trump", "mn", null, 0);
  mapBuild("#mapIndex", "#infobox", "#chart", "counties.json", "index", "mn", null, 0);
  gapChart();
  gapChart2();
  taxChart();
  aidChart();

});
},{}]},{},[1])
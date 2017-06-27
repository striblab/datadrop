var data2010 = data2010Load.data;
var data2012 = data2012Load.data;
var data2013 = data2013Load.data;

var thisData = data2013;

var metric = 'aid';

var titles = [];
var chatters = [];

titles[0] = "More aid to outstate";
chatters[0] = "0";

titles[1] = "1";
chatters[1] = "1";

titles[2] = "2";
chatters[2] = "2";

titles[3] = "3";
chatters[3] = "3";

titles[4] = "4";
chatters[4] = "4";

titles[5] = "Subsidizing rural roads";
chatters[5] = "Highway aid in oustate is higher per capita the further towards the state's edges.";

titles[6] = "5";
chatters[6] = "5";

titles[7] = "A metro tax base";
chatters[7] = "The Twin Cities metro continues to be Minnesota's economic engine.";

titles[8] = "8";
chatters[8] = "8";

titles[9] = "Metro income recovery";
chatters[9] = "An increasing income tax base in the metro signals more economic recovery.";

titles[10] = "10";
chatters[10] = "10";

titles[11] = "11";
chatters[11] = "11";

titles[12] = "12";
chatters[12] = "12";

titles[13] = "13";
chatters[13] = "13";

var chart;

var  padding = {
        top: 40,
        right: 40,
        bottom: 0,
        left: 50,
    };
    
chart = c3.generate({
        bindto: '#chart',
        size: { height: 250 },
        padding: padding,
    data: {
        x: 'x',
        columns: [
            ['x', 2010, 2012, 2013],
            ["$ per capita",0,0,0]
        ],
        type: 'line'
    },
    legend: {
      show: false
    },
    color:  { pattern: ["#61bd1a"] },
    axis: {
      y: {
            min: 0,
            padding: {bottom: 0, top:0},
            tick: {
             count: 4,
             format: d3.format('$,.0f')
            }
        }
      },
        grid: {
            x: {
              lines: [
                {value: Number(2013), text: '', position: 'start', class: 'yearScrub'}
            ]
          }
        }
});

$( document ).ready(function() {
    $("#aid").css("background-color","#333");
    $("#taxQ").hide();

tabulate("Minnesota",data2013,"aid");

$(".clicker").click(function() {
  $(".chatter").html(chatters[$(this).attr("index")]);
  $(".chartTitle").html(titles[$(this).attr("index")]);
});

$(".myButton").click(function() {
    clicked2();
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $(this).css("background-color","#333");
    $("#taxQ").hide();
    $("#aidQ").show(); 
    $(".category, .amount").removeClass("thisLine");
    $("." + $(this).attr("highlight")).addClass("thisLine");
    metric = $(this).attr("id");

    chart = c3.generate({
            bindto: '#chart',
            size: { height: 250 },
            padding: padding,
        data: {
            x: 'x',
            columns: [
                ['x', 2010, 2012, 2013],
                ["$ per capita",0,0,0]
            ],
            type: 'line'
        },
        legend: {
          show: false
        },
        color:  { pattern: ["#61bd1a"] },
        axis: {
          y: {
                min: 0,
                padding: {bottom: 0, top:0},
                tick: {
                 count: 4,
                 format: d3.format('$,.0f')
                }
            }
          },
            grid: {
                x: {
                  lines: [
                    {value: Number($("#slider").val()), text: '', position: 'start', class: 'yearScrub'}
                ]
              }
            }
    });

    chart.load({
      columns: [
          ['x', 2010, 2012, 2013],
          redrawChart($("#slider").val(),metric,"Minnesota",true)
      ]
    });

    redrawGraph(metric,thisData);
});

$(".myButton_tax").click(function() {
    clicked2();
    $(".myButton").css("background-color","#61bd1a");
    $(".myButton_tax").css("background-color","#8B2219");
    $(this).css("background-color","#333");
    $("#taxQ").show();
    $("#aidQ").hide();
    $(".category, .amount").removeClass("thisLine");
    $("." + $(this).attr("highlight")).addClass("thisLine");
    metric = $(this).attr("id");

    chart = c3.generate({
            bindto: '#chart',
            size: { height: 250 },
            padding: padding,
        data: {
            x: 'x',
            columns: [
                ['x', 2010, 2012, 2013],
                ["$ per capita",0,0,0]
            ],
            type: 'line'
        },
        legend: {
          show: false
        },
        color:  { pattern: ["#8B2219"] },
        axis: {
          y: {
                min: 0,
                padding: {bottom: 0, top:0},
                tick: {
                 count: 4,
                 format: d3.format('$,.0f')
                }
            }
          },
            grid: {
                x: {
                  lines: [
                    {value: Number($("#slider").val()), text: '', position: 'start', class: 'yearScrub'}
                ]
              }
            }
    });

    chart.load({
      columns: [
          ['x', 2010, 2012, 2013],
          redrawChart($("#slider").val(),metric,"Minnesota",true)
      ]
    });

    redrawGraph(metric,thisData);
});

$('#slider').on("change", function() { 
    clicked2();
    if ($(this).val() == 2010) { thisData = data2010; }
    else if ($(this).val() == 2012) { thisData = data2012; }
    else if ($(this).val() == 2013) { thisData = data2013; }

    chart = c3.generate({
            bindto: '#chart',
            size: { height: 250 },
            padding: padding,
        data: {
            x: 'x',
            columns: [
                ['x', 2010, 2012, 2013],
                ["$ per capita",0,0,0]
            ],
            type: 'line'
        },
        legend: {
          show: false
        },
        color:  { pattern: ["#61bd1a"] },
        axis: {
          y: {
                min: 0,
                padding: {bottom: 0, top:0},
                tick: {
                 count: 4,
                 format: d3.format('$,.0f')
                }
            }
          },
            grid: {
                x: {
                  lines: [
                    {value: Number($(this).val()), text: '', position: 'start', class: 'yearScrub'}
                ]
              }
            }
    });

    chart.load({
      columns: [
          ['x', 2010, 2012, 2013],
          redrawChart($(this).val(),metric,"Minnesota",true)
      ]
    });

    redrawGraph(metric,thisData);
});

});

function tabulate(d, csvData, metric){

        // redrawChart($("#slider").val(),metric,d,true);

    chart.load({
      columns: [
          ['x', 2010, 2012, 2013],
          redrawChart($("#slider").val(),metric,d,true)
      ]
    });

    // chart.grid({x:{lines:[{value: Number($("#slider").val()), text: '', position: 'start', class: 'yearScrub'}]}});


        for (var j = 0; j < csvData.length; j++){
          if (d == csvData[j].name){ 
            if (d != "Minnesota") { $("#county_name").html(d + " County"); }
            else { $("#county_name").html("Minnesota"); }
            $("#lg.amount ").html("$" + d3.round(csvData[j].total_lga / csvData[j].population));
            $("#cp.amount ").html("$" + d3.round(csvData[j].co_program_aid / csvData[j].population));
            $("#hs.amount ").html("$" + d3.round(csvData[j].total_hs_aid / csvData[j].population));
            $("#ed.amount ").html("$" + d3.round(csvData[j].education_aid / csvData[j].population));
            $("#hw.amount ").html("$" + d3.round(csvData[j].total_hwy / csvData[j].population));
            $("#cc1.amount ").html("$" + d3.round(csvData[j].community_correction_aid / csvData[j].population));
            $("#cc2.amount ").html("$" + d3.round(csvData[j].reducation_aid / csvData[j].population));
            $("#ta1.amount ").html("$" + d3.round((csvData[j].AIDS + csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population));
            $("#ta2.amount ").html("$" + d3.round((csvData[0].AIDS + csvData[0].reducation_aid + csvData[0].community_correction_aid) / csvData[0].population));

            $("#pt.amount ").html("$" + d3.round(csvData[j].state_prop_tax / csvData[j].population));
            $("#it.amount ").html("$" + d3.round(csvData[j].income_tax / csvData[j].population));
            $("#st.amount ").html("$" + d3.round(csvData[j].sales_tax / csvData[j].population));
            $("#vt.amount ").html("$" + d3.round(csvData[j].vehicle_tax / csvData[j].population));
            $("#gt.amount ").html("$" + d3.round(csvData[j].gas_tax / csvData[j].population));
            $("#corp.amount ").html("$" + d3.round(csvData[j].corp_tax / csvData[j].population));
            $("#tt1.amount ").html("$" + d3.round((csvData[j].taxes + csvData[j].corp_tax) / csvData[j].population));
            $("#tt2.amount ").html("$" + d3.round((csvData[0].taxes + csvData[0].corp_tax) / csvData[0].population));
           }
    }
  }

function redrawGraph(data1, csvData) {

var none = "#f7f7f7";
var q1="#006d2c"; //300%
var q2="#74c476"; //100%
var q3="#c7e9c0"; //10%
var q4 = "#094220";
var t1="#6c0f15"; //300%
var t2="#A45958"; //100%
var t3="#C6A29E"; //10%
var t4 = "#371012";

tabulate("Minnesota", csvData, data1);

var range = [];

if (data1 == "lga"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].total_lga / csvData[j].population;
      }

      var max = d3.min(range); //185+
      var min = d3.max(range); //<85
      var mean = (max + min) / 2; //18-185

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
            var num = csvData[j].total_lga / csvData[j].population;
            return color_scale(num);
            // if ((csvData[j].total_lga / csvData[j].population) >= 200){ return q1; }
            // if ((csvData[j].total_lga / csvData[j].population) >= 100){ return q2; }
            // if ((csvData[j].total_lga / csvData[j].population) >= 0){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "hwy"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].total_hwy / csvData[j].population;
      }

      var max = d3.min(range); //375+
      var min = d3.max(range); //<175
      var mean = (max + min) / 2; //175-375

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
            var num = csvData[j].total_hwy / csvData[j].population;
            return color_scale(num);
          //   if ((csvData[j].total_hwy / csvData[j].population) >= 400){ return q1; }
          //   if ((csvData[j].total_hwy / csvData[j].population) >= 200){ return q2; }
          //   if ((csvData[j].total_hwy / csvData[j].population) >= 50){ return q3; }
          //   else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "hsa"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].total_hs_aid / csvData[j].population;
      }

      var max = d3.min(range); //1100+
      var min = d3.max(range); //<850
      var mean = (max + min) / 2; //850-1100

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
            var num = csvData[j].total_hs_aid / csvData[j].population;
            return color_scale(num);
            // if ((csvData[j].total_hs_aid / csvData[j].population) >= 900){ return q1; }
            // if ((csvData[j].total_hs_aid / csvData[j].population) >= 600){ return q2; }
            // if ((csvData[j].total_hs_aid / csvData[j].population) >= 300){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "cpa"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].co_program_aid / csvData[j].population;
      }

      var max = d3.min(range); //50+
      var min = d3.max(range); //<30
      var mean = (max + min) / 2; //30-50

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
          if (d.properties.COUNTYNAME == csvData[j].name){ 
            var num = csvData[j].co_program_aid / csvData[j].population;
            return color_scale(num);
            // if ((csvData[j].co_program_aid / csvData[j].population) >= 100){ return q1; }
            // if ((csvData[j].co_program_aid / csvData[j].population) >= 50){ return q2; }
            // if ((csvData[j].co_program_aid / csvData[j].population) >= 1){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "eda"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].education_aid / csvData[j].population;
      }

      var max = d3.min(range); //1400+
      var min = d3.max(range); //<1200
      var mean = (max + min) / 2; //1200-1400

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);



        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
           var num = csvData[j].education_aid / csvData[j].population;
           return color_scale(num);

            // if ((csvData[j].education_aid / csvData[j].population) >= 1300){ return q1; }
            // if ((csvData[j].education_aid / csvData[j].population) >= 1000){ return q2; }
            // if ((csvData[j].education_aid / csvData[j].population) >= 700){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "comm"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) })  
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = (csvData[j].reducation_aid + csvData[j].community_correction_aid)/ csvData[j].population;
      }

      var max = d3.min(range); //25+
      var min = d3.max(range); //<15
      var mean = (max + min) / 2; //15-25

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
         var num = (csvData[j].reducation_aid + csvData[j].community_correction_aid)/ csvData[j].population;
         return color_scale(num);

            // if (((csvData[j].reducation_aid + csvData[j].community_correction_aid)/ csvData[j].population) >= 50){ return q1; }
            // if (((csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) >= 20){ return q2; }
            // if (((csvData[j].reducation_aid + csvData[j].community_correction_aid) / csvData[j].population) >= 5){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "pt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].property_levy_total / csvData[j].population;
      }

      var max = d3.min(range); //160+
      var min = d3.max(range); //<90
      var mean = (max + min) / 2; //90-160

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
           var num = csvData[j].property_levy_total / csvData[j].population;
           return color_scale(num);

            // if ((csvData[j].proptax_levy / csvData[j].population) >= 3000){ return t1; }
            // if ((csvData[j].proptax_levy / csvData[j].population) >= 2200){ return t2; }
            // if ((csvData[j].proptax_levy / csvData[j].population) >= 1500){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "it"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].income_tax / csvData[j].population;
      }

      var max = d3.min(range); //1200+
      var min = d3.max(range); //<900
      var mean = (max + min) / 2; //900-1200

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);


        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
          var num = csvData[j].income_tax / csvData[j].population;
          return color_scale(num);

            // if ((csvData[j].income_tax / csvData[j].population) >= 900){ return t1; }
            // if ((csvData[j].income_tax / csvData[j].population) >= 600){ return t2; }
            // if ((csvData[j].income_tax / csvData[j].population) >= 200){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "st"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].sales_tax / csvData[j].population;
      }

      var max = d3.min(range); //700+
      var min = d3.max(range); //<400
      var mean = (max + min) / 2; //400-700

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
          var num = csvData[j].sales_tax / csvData[j].population;
          return color_scale(num);

            // if ((csvData[j].sales_tax / csvData[j].population) >= 700){ return t1; }
            // if ((csvData[j].sales_tax / csvData[j].population) >= 400){ return t2; }
            // if ((csvData[j].sales_tax / csvData[j].population) >= 100){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "gt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].gas_tax / csvData[j].population;
      }

      var max = d3.min(range); //230+
      var min = d3.max(range); //<170
      var mean = (max + min) / 2; //170-230

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);


        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 

          var num = csvData[j].gas_tax / csvData[j].population;
          return color_scale(num);

            // if ((csvData[j].gas_tax / csvData[j].population) >= 250){ return t1; }
            // if ((csvData[j].gas_tax / csvData[j].population) >= 150){ return t2; }
            // if ((csvData[j].gas_tax / csvData[j].population) >= 130){ return t3; }
            // else { return none; }
           }
          }
        })
     .transition()
     .duration(500);
}

if (data1 == "vt"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].vehicle_tax / csvData[j].population;
      }

      var max = d3.min(range); //135+
      var min = d3.max(range); //<115
      var mean = (max + min) / 2; //115-135

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);



        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
           var num = csvData[j].vehicle_tax / csvData[j].population;
           return color_scale(num);

            // if ((csvData[j].vehicle_tax / csvData[j].population) >= 200){ return t1; }
            // if ((csvData[j].vehicle_tax / csvData[j].population) >= 175){ return t2; }
            // if ((csvData[j].vehicle_tax / csvData[j].population) >= 100){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "corp"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) })  
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].corp_tax / csvData[j].population;
      }

      var max = d3.min(range); //175+
      var min = d3.max(range); //<100
      var mean = (max + min) / 2; //100-175

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
        var num = csvData[j].corp_tax / csvData[j].population;
        return color_scale(num);

            // if ((csvData[j].corp_tax / csvData[j].population) >= 100){ return t1; }
            // if ((csvData[j].corp_tax / csvData[j].population) >= 50){ return t2; }
            // if ((csvData[j].corp_tax / csvData[j].population) >= 20){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "aid"){
d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].AIDS / csvData[j].population;
      }

      var max = d3.min(range); 
      var min = d3.max(range);
      var mean = (max + min) / 2; //2623

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
           var num = csvData[j].AIDS / csvData[j].population;
           return color_scale(num);

            // if ((csvData[j].AIDS / csvData[j].population) >= 2600){ return q1; }
            // if ((csvData[j].AIDS / csvData[j].population) >= 2200){ return q2; }
            // if ((csvData[j].AIDS / csvData[j].population) >= 1500){ return q3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}

if (data1 == "tax"){

d3.select('#map svg').selectAll("path")
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, data1) }) 
      .style("fill", function(d, i){

      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].taxes / csvData[j].population;
      }

      var max = d3.min(range);
      var min = d3.max(range);
      var mean = (max + min) / 2; //3006

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#371012', '#A45958', '#C6A29E']);
      
        // var color_scale = d3.scale.linear().domain([-10, 0, 20]).range(['t1', 't2', 't3']);
        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
         var num = csvData[j].taxes / csvData[j].population;
         return color_scale(num);

            // if ((csvData[j].taxes / csvData[j].population) >= 2000){ return t1; }
            // if ((csvData[j].taxes / csvData[j].population) >= 1500){ return t2; }
            // if ((csvData[j].taxes / csvData[j].population) >= 900){ return t3; }
            // else { return none; }
           }
         }
        })
     .transition()
     .duration(500);
}


}


csvData = data2013;

//POPULATE GRID

$(".ta").addClass("thisLine");


var width = 320,
    height = 400,
    centered;

var projection = d3.geo.albersUsa()
    .scale(5070)
    .translate([30, 930]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    //.on("click", clicked2)
    .attr("height", height);

var g = svg.append("g");

var none = "#f7f7f7";
var q1="#006d2c" //300%
var q2="#74c476" //100%
var q3="#c7e9c0" //10%
var q4 = "#094220";

d3.json("shapefiles/counties.json", function(error, us) {

  g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked)
      .style("fill", function(d, i){

      var range = [];
      
      for (var j = 0; j < csvData.length; j++){
        range[j] = csvData[j].AIDS / csvData[j].population;
      }

      var max = d3.min(range); 
      var min = d3.max(range);
      var mean = (max + min) / 2; //2623

      var color_scale = d3.scale.linear().domain([min, mean, max]).range(['#094220', '#74c476', '#c7e9c0']);

        for (var j = 0; j < csvData.length; j++){
        if (d.properties.COUNTYNAME == csvData[j].name){ 
           var num = csvData[j].AIDS / csvData[j].population;
           return color_scale(num);
           }
         }
        })
      .on("mousedown", function(d, i){ tabulate(d.properties.COUNTYNAME, csvData, metric) }) 
      // .style("stroke-width", "1.5px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){return "<b>" + d.properties.COUNTYNAME + "</b>";}));

  g.append("path")
      //.datum(topojson.mesh(us, us.features, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);
});



// zoom and pan
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

//svg.call(zoom);

$(".zoom").click(function() {
  clicked2();
  $("#taxQ").hide();
  $("#aidQ").show();
  $(".myButton").css("background-color","#61bd1a");
  $(".myButton_tax").css("background-color","#8B2219");
  $("#aid").css("background-color","#333");
  $(".category, .amount").removeClass("thisLine");
  $(".ta").addClass("thisLine");
  metric = "aid";
  redrawGraph(metric,thisData);
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function(d) { return d === centered; });

  // g.transition()
  //     .duration(750)
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //     .style("stroke-width", 1.5 / k + "px");
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function(d) { return d === centered; });

  // g.transition()
  //     .duration(750)
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
  //     .style("stroke-width", 1.5 / k + "px");
}
// });

// });

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


function redrawChart(year, metric, county, loaded){

var value = [];
value[0] = "$ per capita";
var color = ["#61bd1a"];


for (var j = 0; j < data2010.length; j++){
    if (county == data2010[j].name){ 
            if (metric == "lga") { value[1] = d3.round(data2010[j].total_lga / data2010[j].population); color = ["#61bd1a"];  }
            if (metric == "cpa") { value[1] = d3.round(data2010[j].co_program_aid / data2010[j].population); color = ["#61bd1a"]; }
            if (metric == "hsa") { value[1] = d3.round(data2010[j].total_hs_aid / data2010[j].population); color = ["#61bd1a"]; }
            if (metric == "eda") { value[1] = d3.round(data2010[j].education_aid / data2010[j].population); }
            if (metric == "hwy") { value[1] = d3.round(data2010[j].total_hwy / data2010[j].population); color = ["#61bd1a"]; }
            if (metric == "comm") { value[1] = d3.round(data2010[j].community_correction_aid / data2010[j].population) + d3.round(data2010[j].reducation_aid / data2010[j].population); color = ["#61bd1a"]; }
            if (metric == "aid") { value[1] = d3.round((data2010[j].AIDS + data2010[j].reducation_aid + data2010[j].community_correction_aid) / data2010[j].population); color = ["#61bd1a"]; }

            if (metric == "pt") { value[1] = d3.round(data2010[j].state_prop_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "it") { value[1] = d3.round(data2010[j].income_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "st") { value[1] = d3.round(data2010[j].sales_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "vt") { value[1] = d3.round(data2010[j].vehicle_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "gt") { value[1] = d3.round(data2010[j].gas_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "corp") { value[1] = d3.round(data2010[j].corp_tax / data2010[j].population); color = ["#8B2219"]; }
            if (metric == "tax") { value[1] = d3.round((data2010[j].taxes + data2010[j].corp_tax) / data2010[j].population); color = ["#8B2219"]; }
      }
}

for (var j = 0; j < data2012.length; j++){
    if (county == data2012[j].name){ 
            if (metric == "lga") { value[2] = d3.round(data2012[j].total_lga / data2012[j].population); color = ["#61bd1a"];  }
            if (metric == "cpa") { value[2] = d3.round(data2012[j].co_program_aid / data2012[j].population); color = ["#61bd1a"]; }
            if (metric == "hsa") { value[2] = d3.round(data2012[j].total_hs_aid / data2012[j].population); color = ["#61bd1a"]; }
            if (metric == "eda") { value[2] = d3.round(data2012[j].education_aid / data2012[j].population); color = ["#61bd1a"]; }
            if (metric == "hwy") { value[2] = d3.round(data2012[j].total_hwy / data2012[j].population); color = ["#61bd1a"]; }
            if (metric == "comm") { value[2] = d3.round(data2012[j].community_correction_aid / data2012[j].population) + d3.round(data2012[j].reducation_aid / data2012[j].population); color = ["#61bd1a"]; }
            if (metric == "aid") { value[2] = d3.round((data2012[j].AIDS + data2012[j].reducation_aid + data2012[j].community_correction_aid) / data2012[j].population); color = ["#61bd1a"]; }

            if (metric == "pt") { value[2] = d3.round(data2012[j].state_prop_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "it") { value[2] = d3.round(data2012[j].income_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "st") { value[2] = d3.round(data2012[j].sales_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "vt") { value[2] = d3.round(data2012[j].vehicle_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "gt") { value[2] = d3.round(data2012[j].gas_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "corp") { value[2] = d3.round(data2012[j].corp_tax / data2012[j].population); color = ["#8B2219"]; }
            if (metric == "tax") { value[2] = d3.round((data2012[j].taxes + data2012[j].corp_tax) / data2012[j].population); color = ["#8B2219"]; }
      }
}

for (var j = 0; j < data2013.length; j++){
    if (county == data2013[j].name){ 
            if (metric == "lga") { value[3] = d3.round(data2013[j].total_lga / data2013[j].population); color = ["#61bd1a"];  }
            if (metric == "cpa") { value[3] = d3.round(data2013[j].co_program_aid / data2013[j].population); color = ["#61bd1a"]; }
            if (metric == "hsa") { value[3] = d3.round(data2013[j].total_hs_aid / data2013[j].population); color = ["#61bd1a"]; }
            if (metric == "eda") { value[3] = d3.round(data2013[j].education_aid / data2010[j].population); color = ["#61bd1a"]; }
            if (metric == "hwy") { value[3] = d3.round(data2013[j].total_hwy / data2013[j].population); color = ["#61bd1a"]; }
            if (metric == "comm") { value[3] = d3.round(data2013[j].community_correction_aid / data2013[j].population) + d3.round(data2013[j].reducation_aid / data2013[j].population); color = ["#61bd1a"]; }
            if (metric == "aid") { value[3] = d3.round((data2013[j].AIDS + data2013[j].reducation_aid + data2013[j].community_correction_aid) / data2013[j].population); color = ["#61bd1a"]; }

            if (metric == "pt") { value[3] = d3.round(data2013[j].state_prop_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "it") { value[3] = d3.round(data2013[j].income_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "st") { value[3] = d3.round(data2013[j].sales_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "vt") { value[3] = d3.round(data2013[j].vehicle_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "gt") { value[3] = d3.round(data2013[j].gas_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "corp") { value[3] = d3.round(data2013[j].corp_tax / data2013[j].population); color = ["#8B2219"]; }
            if (metric == "tax") { value[3] = d3.round((data2013[j].taxes + data2013[j].corp_tax) / data2013[j].population); color = ["#8B2219"]; }
      }
}

return value;

}

chart.load({
  columns: [
      ['x', 2010, 2012, 2013],
      redrawChart($("#slider").val(),"aid","Minnesota",false)
  ],
    color:  { pattern: ["#61bd1a"] },
    grid: {
        x: {
          lines: [
            {value: Number($("#slider").val()), text: '', position: 'start', class: 'yearScrub'}
        ]
      }
    }
});

<div class="slide" id="spending" style="display:none;">
<div class="chartTitle">Title here</div>
<div class="chatter">chatter here</div>

<div style="clear:both;"></div>

<div id="map" class="map"><svg width="320" height="350" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid"></svg></div>

<input id="slider" type="range" min="2010" max="2013" step="1" value="2013" style="display:none;" />

<div class="breaker"></div>

<div id="sidebox" class="adjacent">
<div class="zoom">Reset View</div>

<div style="clear:both;padding:16px;"></div>

<div id="infobox">
    <div id='county_name'></div>
    <div id="chart"></div>
</div>
</div>

<div id="menu" class="adjacent">
<div id="legends">
<h5>Dollars per capita</h5>
<div class='legend' id="aidQ">
    <span style='background:#fff;'>Less</span>
    <span style='background:#c7e9c0;'></span>
    <span style='background:#74c476;'></span>
    <span style='background:#006d2c'></span>
    <span style='background:#002911'></span>
    <span style='background:#fff;'>Most</span>
</div>
<div class='legend' id="taxQ">
    <span style='background:#fff;'>Less</span>
    <span style='background:#C6A29E;'></span>
    <span style='background:#A45958;'></span>
    <span style='background:#9B161F'></span>
    <span style='background:#210507'></span>
    <span style='background:#fff;'>Most</span>
</div>
</div>

<div style="clear:both;padding:10px;"></div>

<button id="aid" class="myButton clicker" highlight="ta" index="0">Total Aid <span class='amount ta' id="ta1"></span></button>
<button id="lga" class="myButton clicker" highlight="lg" index="1">Local Gov <span class='amount lg' id="lg"></span></button>
<button id="cpa" class="myButton clicker" highlight="cp" index="2">County Programs <span class='amount cp' id="cp"></span></button>
<button id="hsa" class="myButton clicker" highlight="hs" index="3">Human Services <span class='amount hs' id="hs"></span></button>
<button id="eda" class="myButton clicker" highlight="ed" index="4">Education <span class='amount ed' id="ed"></span></button>
<button id="hwy" class="myButton clicker" highlight="hw" index="5">Highways <span class='amount hw' id="hw"></span></button>
<button id="comm" class="myButton clicker" highlight="cc" index="6">Community <span class='amount cc' id="cc1"></span></button>

<button id="tax" class="myButton_tax clicker" highlight="tt" index="7">Total Taxes <span class='amount tt' id="tt1"></span></button>
<button id="pt" class="myButton_tax clicker" highlight="pt" index="8">Property <span class='amount pt' id="pt"></span></button>
<button id="it" class="myButton_tax clicker" highlight="it" index="9">Income <span class='amount it' id="it"></span></button>
<button id="st" class="myButton_tax clicker" highlight="st" index="10">Sales <span class='amount st' id="st"></span></button>
<button id="vt" class="myButton_tax clicker" highlight="vt" index="11">Vehicle <span class='amount vt' id="vt"></span></button>
<button id="gt" class="myButton_tax clicker" highlight="gt" index="12">Gas <span class='amount gt' id="gt"></span></button>
<button id="corp" class="myButton_tax clicker" highlight="corp" index="13">Corporate <span class='amount corp' id="corp"></span></button>
<small>Property tax credits not represented.</small>
</div>
</div>

// $( document ).ready(function() {
//     var aspect = 320 / 400,
//     chart = $("#map svg");
//     var targetWidth = chart.parent().width();
//     chart.attr("width", targetWidth);
//     chart.attr("height", targetWidth / aspect);
// });
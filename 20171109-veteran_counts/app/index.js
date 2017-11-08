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

d3.json('./data/cohorts.json', function(error, dataLoad) {

var data = dataLoad.cohorts;

// $( function() {
//     $( document ).tooltip();
//   } );

var year = 2016;

//responsive svg
var aspect = 600 / 500, chart2 = $("#vennSVG"); //, chart2 = $(".carto svg")
  var targetWidth = $("#venn").width();
  chart2.attr("width", targetWidth);
  chart2.attr("height", targetWidth / aspect);
  if ($(window).width() <= 420) { $("#vennSVG").attr("viewBox","0 0 500 400"); }

$(window).on("resize", function() {
  var targetWidth = $("#venn").width();
  chart2.attr("width", targetWidth);
  chart2.attr("height", targetWidth / aspect);
});

//slider event listener and trigger
$('#slider').on('mousemove change', function(){
    $('#year').html($('#slider').val());
    year = $('#slider').val();
    vennChange($('#slider').val());
});

$('#plus').on('click', function(){
    if (year < 2045){
      year++;
      $('#slider').val(year)
      $('#year').html($('#slider').val());
      vennChange($('#slider').val());
    }
});

$('#minus').on('click', function(){
    if (year > 2016){
      year--;
      $('#slider').val(year)
      $('#year').html($('#slider').val());
      vennChange($('#slider').val());
    }
});

//make notes
var notes = [];
notes[2016] = "&nbsp;&nbsp;";
notes[2017] = "&nbsp;&nbsp;";
notes[2018] = "&nbsp;&nbsp;";
notes[2019] = "&nbsp;&nbsp;";
notes[2020] = "&nbsp;&nbsp;";
notes[2021] = "&nbsp;&nbsp;";
notes[2022] = "&nbsp;&nbsp;";
notes[2023] = "&nbsp;&nbsp;";
notes[2024] = "&nbsp;&nbsp;";
notes[2025] = "&nbsp;&nbsp;";
notes[2026] = "&nbsp;&nbsp;";
notes[2027] = "&nbsp;&nbsp;";
notes[2028] = "&nbsp;&nbsp;";
notes[2029] = "&nbsp;&nbsp;";
notes[2030] = "&nbsp;&nbsp;";
notes[2031] = "&nbsp;&nbsp;";
notes[2032] = "&nbsp;&nbsp;";
notes[2033] = "&nbsp;&nbsp;";
notes[2034] = "&nbsp;&nbsp;";
notes[2035] = "&nbsp;&nbsp;";
notes[2036] = "&nbsp;&nbsp;";
notes[2037] = "&nbsp;&nbsp;";
notes[2038] = "&nbsp;&nbsp;";
notes[2039] = "&nbsp;&nbsp;";
notes[2040] = "&nbsp;&nbsp;";
notes[2041] = "&nbsp;&nbsp;";
notes[2042] = "&nbsp;&nbsp;";
notes[2043] = "&nbsp;&nbsp;";
notes[2044] = "&nbsp;&nbsp;";
notes[2045] = "&nbsp;&nbsp;";

function makeSets(year){

  var total;
  var ww2, ww2PCT;
  var kw, kwPCT;
  var vw, vwPCT;
  var gw, gwPCT;
  var p911, p911PCT;
  var pww2, pww2PCT;
  var ww2kwP, ww2kwPPCT;
  var kwvwP, kwvwPPCT;
  var vwgwP, vwgwPPCT;
  var gwp911P, gwp911PCT;
  var pw2k, pw2kPCT;
  var w2pkv, w2pkvPCT;
  var kwvw, kwvwPCT;
  var vwgw, vwgwPCT;
  var vwgw911, vwgw911PCT;
  var gw911, gw911PCT;

  for (var i=0; i < data.length; i++){
    if (year == data[i].Year){
      total = data[i].TotalVets;

      ww2 = data[i].WWII_Total;
      ww2PCT = (data[i].WWII_Total / total) * 100;

      kw = data[i].Korean_Total;
      kwPCT = (data[i].Korean_Total / total) * 100;

      vw = data[i].Vietnam_Total;
      vwPCT = Math.round((data[i].Vietnam_Total / total) * 100);

      gw = data[i].GulfPre_Total;
      gwPCT = (data[i].GulfPre_Total / total) * 100;

      p911 = data[i].GulfPost_Total;
      p911PCT = (data[i].GulfPost_Total / total) * 100;

      pww2 = data[i].Peace_PreWWII;
      pww2PCT = (data[i].Peace_PreWWII / total) * 100;

      ww2kwP = data[i].Peace_WWII_KC;
      ww2kwPPCT = (data[i].Peace_WWII_KC / total) * 100;

      kwvwP = data[i].Peace_KC_Viet;
      kwvwPPCT = (data[i].Peace_KC_Viet / total) * 100;

      vwgwP = data[i].Peace_Viet_Gulf;
      vwgwPPCT = (data[i].Peace_Viet_Gulf / total) * 100;

      gwp911P = data[i].Peace_PostGulf;
      gwp911PCT = (data[i].Peace_PostGulf / total) * 100;

      pw2k = data[i].OL_WWII_KC;
      pw2kPCT = (data[i].OL_WWII_KC / total) * 100;

      w2pkv = data[i].OL_WWII_KC_Viet;
      w2pkvPCT = (data[i].OL_WWII_KC_Viet / total) * 100;

      kwvw = data[i].OL_WWII_KC_Viet;
      kwvwPCT = (data[i].OL_WWII_KC_Viet / total) * 100;

      vwgw = data[i].OL_KC_Viet;
      vwgwPCT = (data[i].OL_KC_Viet / total) * 100;

      vwgw911 = data[i].OL_Viet_GulfPre_GulfPost;
      vwgw911PCT = (data[i].OL_Viet_GulfPre_GulfPost / total) * 100;

      gw911 = data[i].OL_GulfPre_GulfPost;
      gw911PCT = (data[i].OL_GulfPre_GulfPost / total) * 100;

      console.log(vwPCT)
    }

    $("#count").html(d3.format(",")(Math.round(total / 10) * 10));
  }

  var sets = [
   {sets:["Pre-WWII Peace"], figure: pww2, label: "Pre-WWII Peace", size: pww2PCT, type:"peace"},
   {sets:["WWII"], figure: ww2, label: "World War II", size: ww2PCT, type:"blue4"},
   {sets:["WWII-Korea Peace"], figure: ww2kwP, label: "WWII-Korea Peace", size: ww2kwPPCT, type:"peace"},
   {sets:["WWII","Korea"], figure: pw2k, label: "World War II and Korean War", size: pw2kPCT, type:"war"},
   {sets:["WWII","Vietnam"], figure: w2pkv, label: "World War II, Korean War and Vietnam War", size: w2pkvPCT, type:"war"},
   {sets:["Korea"], figure: kw, label: "Korean War", size: kwPCT, type:"green3"},
   {sets:["Korea-Vietnam Peace"], figure: kwvwP, label: "Korea-Vietnam Peace", size: kwvwPPCT, type:"peace"},
   {sets:["Vietnam"], figure: vw, label: "Vietnam War", size: vwPCT, type:"red4"},
   {sets:["Vietnam-Gulf Peace"], figure: vwgwP, label: "Vietnam-Gulf Peace", size: vwgwPPCT, type:"peace"},
   {sets:["Gulf"], figure: gw, label: "Gulf War", size: gwPCT, type:"orange3"},
   {sets:["Post-9/11"], figure: p911, label: "Post 9/11 Wars", size: p911PCT, type:"purple3"},
   {sets:["Korea","Vietnam"], figure: kwvw, label: "Korean War and Vietnam War", size: kwvwPCT, type:"war"},
   {sets:["Vietnam", "Gulf"], figure: vwgw, label: "Vietnam-Gulf Peace and Gulf War", size: vwgwPCT, type:"war"},
   {sets:["Vietnam", "Post-9/11"], figure: vwgw911, label: "Vietnam War, Gulf War and Post 9/11 Wars", size: vwgw911PCT, type:"war"},
   {sets:["Gulf", "Post-9/11"], figure: gw911, label: "Gulf War and Post 9/11 Wars", size: gw911PCT, type:"war"},
   {sets:["Post-9/11 Peace"], figure: gwp911P, label: "Post-9/11 Peace", size: gwp911PCT, type:"peace"},
   ];

  // return sets;

  $("#preww2").css("width",pww2PCT + "%");
  $("#ww2").css("width",ww2PCT + "%");
  $("#peaceww2").css("width",ww2kwPPCT + "%");
  $("#korea").css("width",kwPCT + "%");
  $("#korea_peace").css("width",kwvwPPCT + "%");
  $("#vietnam").css("width",vwPCT + "%");
  $("#vietnam_peace").css("width",vwgwPPCT + "%");
  $("#gulf").css("width",gwPCT + "%");
  $("#post911").css("width",p911PCT + "%");
  $("#post911_peace").css("width",gwp911PCT + "%");

  $("#preww2 .counted").html(" - " + d3.format(".0f")(pww2PCT) + "%");
  $("#ww2 .counted").html(" - " + d3.format(".0f")(ww2PCT) + "%");
  $("#peaceww2 .counted").html(" - " + d3.format(".0f")(ww2kwPPCT) + "%");
  $("#korea .counted").html(" - " + d3.format(".0f")(kwPCT) + "%");
  $("#korea_peace .counted").html(" - " + d3.format(".0f")(kwvwPPCT) + "%");
  $("#vietnam .counted").html(" - " + d3.format(".0f")(vwPCT) + "%");
  $("#vietnam_peace .counted").html(" - " + d3.format(".0f")(vwgwPPCT) + "%");
  $("#gulf .counted").html(" - " + d3.format(".0f")(gwPCT) + "%");
  $("#post911 .counted").html(" - " + d3.format(".0f")(p911PCT) + "%");
  $("#post911_peace .counted").html(" - " + d3.format(".0f")(gwp911PCT) + "%");

}

function vennChange(year){
  makeSets(year);
  $("#notes").html(notes[year]);
}

vennChange(year);


});
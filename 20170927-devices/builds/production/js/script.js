!function t(a,l,e){function o(s,r){if(!l[s]){if(!a[s]){var _="function"==typeof require&&require;if(!r&&_)return _(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=l[s]={exports:{}};a[s][0].call(u.exports,function(t){var l=a[s][1][t];return o(l||t)},u,u.exports,t,a,l,e)}return l[s].exports}for(var n="function"==typeof require&&require,s=0;s<e.length;s++)o(e[s]);return o}({1:[function(t,a,l){$.urlParam=function(t){var a=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=a?a[1]||0:null};var e=$.urlParam("chart");null!=e&&($(".slide").hide(),$("#"+e).show());var o=$(".map svg");$(window).on("resize",function(){var t=o.parent().width();o.attr("width",t),o.attr("height",t/1.375)}),$(window).on("load",function(){var t=o.parent().width();o.attr("width",t),o.attr("height",t/1.375)}),function(){var t={top:20,right:60,bottom:20,left:100};c3.generate({bindto:"#chartDevices",padding:t,data:{columns:[["US",.774,.765,.578,.03,.107],["MN",.808,.755,.603,.025,.098]],type:"bar"},legend:{show:!1},point:{show:!1},color:{pattern:["#aaaaaa","#333333"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.25,.5,.75,1],format:d3.format("%")}},x:{type:"category",categories:["Desktop/Laptop","Smartphone","Tablet","Other Computer","No computer"],tick:{multiline:!1}}}})}(),function(){var t={top:20,right:60,bottom:20,left:100};c3.generate({bindto:"#chartStates",padding:t,data:{columns:[["ND",.786,.745,.577,.023,.108],["SD",.771,.713,.562,.024,.124],["IA",.764,.725,.564,.022,.119],["WI",.775,.718,.566,.025,.116],["MN",.808,.755,.603,.025,.098]],type:"bar"},legend:{show:!1},point:{show:!1},color:{pattern:["#f0f0f0","#bdbdbd","#737373","#525252","#333333"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.25,.5,.75,1],format:d3.format("%")}},x:{type:"category",categories:["Desktop/Laptop","Smartphone","Tablet","Other Computer","No computer"],tick:{multiline:!1}}}})}(),function(){var t={top:20,right:60,bottom:20,left:100};c3.generate({bindto:"#chartRace",padding:t,data:{columns:[["Asian",.901,.872,.06],["White",.817,.746,.12],["Hispanic",.683,.758,.16],["Black",.651,.702,.2]],type:"bar"},legend:{show:!1},point:{show:!1},color:{pattern:["#693c46","#865f67","#a3858b","#C1ACB1"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.25,.5,.75,1],format:d3.format("%")}},x:{type:"category",categories:["Desktop/Laptop","Handheld","No computer"],tick:{multiline:!1}}}})}(),function(){var t={top:20,right:60,bottom:20,left:80};c3.generate({bindto:"#chartTrend",padding:t,data:{x:"x",columns:[["x",2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],["Smartphone",null,null,null,null,null,null,null,null,null,null,.35,null,null,null,null,null,.77,null],["Tablet",null,null,null,null,null,null,null,null,null,null,.03,null,null,null,null,null,.51,null],["Social Media",null,null,null,null,.05,null,null,null,null,null,null,null,null,null,null,null,.69,null],["Home Broadband",.01,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,.73,null],["Internet Use",.52,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,.88,null]],type:"line"},line:{connectNull:!0},legend:{show:!1},point:{show:!0,r:3.4},color:{pattern:["#C22A22","#E07242","#67B4C2","#5BBF48","#969696"]},axis:{y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.25,.5,.75,1],format:d3.format("%")}},x:{padding:{left:0,right:0},tick:{count:6,multiline:!1,format:d3.format(".0f")}}}})}(),d3.csv("./data/stateRankings.csv",function(t){return{state:t.ab,rate:+t.share}},function(t,a){var l=a;d3.helper={},d3.helper.tooltip=function(t){return function(a){var l,e=d3.select("body").node();a.on("mouseover",function(a,o){d3.select("body").selectAll("div.tooltip").remove(),l=d3.select("body").append("div").attr("class","tooltip");var n=d3.mouse(e);l.style("left",n[0]+10+"px").style("top",n[1]-15+"px").style("position","absolute").style("z-index",1001);t(a,o)}).on("mousemove",function(a,o){var n=d3.mouse(e);l.style("left",n[0]+10+"px").style("top",n[1]-15+"px");var s=t(a,o)||"";l.html(s)}).on("mouseout",function(t,a){l.remove()})}};var e={margin:{top:40,right:140,bottom:0,left:60},selector:"#map svg",init:function(){var t=this;t.$el=$(t.selector),t.width=550-t.margin.left-t.margin.right,t.height=400-t.margin.top-t.margin.bottom,t.svg=d3.select(t.selector).attr("height",t.height+t.margin.top+t.margin.bottom).attr("width",t.width+t.margin.left+t.margin.right),t.state_size=t.width/12,t.state_padding=2,t.map=t.svg.append("g").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),t.drawMap()},drawMap:function(){var t=this,a=t.map.selectAll(".states").data(t.state_pos_co2).enter().append("g").attr("class","state-groups");a.append("rect").attr("id",function(t){return t.state_postal+"d"}).attr("class","state").attr("class",function(t){for(var a=0;a<l.length;a++)if(t.state_postal==l[a].state){if(l[a].rate>=55)return"gray5";if(l[a].rate>=50)return"gray4";if(l[a].rate>=45)return"gray3";if(l[a].rate>0)return"gray1";if(0==l[a].rate)return"none"}}).attr("rx",0).attr("ry",0).attr("x",function(a){return a.column*(t.state_size+t.state_padding)}).attr("y",function(a){return a.row*(t.state_size+t.state_padding)}).attr("width",t.state_size).attr("height",t.state_size).call(d3.helper.tooltip(function(t,a){for(var e="",a=0;a<l.length;a++)if(t.state_postal==l[a].state)return l[a].rate>=55?e="gray5":l[a].rate>=50?e="gray4":l[a].rate>=45?e="gray3":l[a].rate>=0&&(e="gray1"),"<h4 class='districtName'>"+t.state_full+"</h4><span class='legendary chatter "+e+"'>"+l[a].rate+"%</span> iPhone traffic</div>"})),a.append("text").attr("class","state-label").attr("class",function(t){return"gray5"}).style("color",function(t){return"#ffffff"}).attr("dominant-baseline","central").attr("x",function(a){return a.column*(t.state_size+t.state_padding)+t.state_size/2}).attr("y",function(a){return a.row*(t.state_size+t.state_padding)+t.state_size/2}).style("text-anchor","middle").text(function(t){return t.state_postal})},state_pos_co2:[{state_full:"Alabama",state_postal:"AL",row:5,column:6,state_total_old:"32",state_total_new:"25",state_change:"-63%",color:"gray2"},{state_full:"Alaska",state_postal:"AK",row:6,column:0,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"gray2"},{state_full:"Arizona",state_postal:"AZ",row:4,column:1,state_total_old:"14",state_total_new:"36",state_change:"+36%",color:"gray2"},{state_full:"Arkansas",state_postal:"AR",row:4,column:4,state_total_old:"36",state_total_new:"43",state_change:"-33%",color:"gray2"},{state_full:"California",state_postal:"CA",row:3,column:0,state_total_old:"358",state_total_new:"267",state_change:"-25%",color:"purple3"},{state_full:"Colorado",state_postal:"CO",row:3,column:2,state_total_old:"124",state_total_new:"93",state_change:"-33%",color:"purple3"},{state_full:"Connecticut",state_postal:"CT",row:2,column:9,state_total_old:"0",state_total_new:"6",state_change:"Insufficient data",color:"purple3"},{state_full:"D.C.",state_postal:"DC",row:4,column:8,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"purple3"},{state_full:"Delaware",state_postal:"DE",row:3,column:9,state_total_old:"3",state_total_new:"3",state_change:"-100%",color:"gray2"},{state_full:"Florida",state_postal:"FL",row:6,column:8,state_total_old:"150",state_total_new:"136",state_change:"-14%",color:"gray2"},{state_full:"Georgia",state_postal:"GA",row:5,column:7,state_total_old:"77",state_total_new:"59",state_change:"-38%",color:"gray2"},{state_full:"Hawaii",state_postal:"HI",row:6,column:-1,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"purple3"},{state_full:"Idaho",state_postal:"ID",row:1,column:1,state_total_old:"71",state_total_new:"68",state_change:"-21%",color:"purple3"},{state_full:"Illinois",state_postal:"IL",row:1,column:6,state_total_old:"251",state_total_new:"221",state_change:"-14%",color:"purple3"},{state_full:"Indiana",state_postal:"IN",row:2,column:5,state_total_old:"216",state_total_new:"220",state_change:"0%",color:"gray2"},{state_full:"Iowa",state_postal:"IA",row:2,column:4,state_total_old:"228",state_total_new:"295",state_change:"+29%",color:"purple3"},{state_full:"Kansas",state_postal:"KS",row:4,column:3,state_total_old:"215",state_total_new:"205",state_change:"-6%",color:"gray2"},{state_full:"Kentucky",state_postal:"KY",row:3,column:5,state_total_old:"308",state_total_new:"162",state_change:"-49%",color:"gray2"},{state_full:"Louisiana",state_postal:"LA",row:5,column:4,state_total_old:"30",state_total_new:"26",state_change:"-53%",color:"gray2"},{state_full:"Maine",state_postal:"ME",row:-1,column:10,state_total_old:"0",state_total_new:"14",state_change:"Insufficient data",color:"purple3"},{state_full:"Maryland",state_postal:"MD",row:3,column:8,state_total_old:"26",state_total_new:"27",state_change:"-46%",color:"purple1"},{state_full:"Massachusetts",state_postal:"MA",row:1,column:9,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"gray2"},{state_full:"Michigan",state_postal:"MI",row:1,column:7,state_total_old:"102",state_total_new:"179",state_change:"+74%",color:"gray2"},{state_full:"Minnesota",state_postal:"MN",row:1,column:4,state_total_old:"153",state_total_new:"210",state_change:"+37%",color:"purple3"},{state_full:"Mississippi",state_postal:"MS",row:5,column:5,state_total_old:"65",state_total_new:"46",state_change:"-57%",color:"gray2"},{state_full:"Missouri",state_postal:"MO",row:3,column:4,state_total_old:"264",state_total_new:"288",state_change:"+5%",color:"gray2"},{state_full:"Montana",state_postal:"MT",row:1,column:2,state_total_old:"145",state_total_new:"139",state_change:"-10%",color:"purple3"},{state_full:"Nebraska",state_postal:"NE",row:3,column:3,state_total_old:"199",state_total_new:"179",state_change:"-11%",color:"gray2"},{state_full:"Nevada",state_postal:"NV",row:2,column:1,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"gray2"},{state_full:"New Hampshire",state_postal:"NH",row:0,column:10,state_total_old:"0",state_total_new:"4",state_change:"Insufficient data",color:"purple3"},{state_full:"New Jersey",state_postal:"NJ",row:2,column:8,state_total_old:"8",state_total_new:"19",state_change:"+50%",color:"gray2"},{state_full:"New Mexico",state_postal:"NM",row:4,column:2,state_total_old:"24",state_total_new:"14",state_change:"-100%",color:"gray2"},{state_full:"New York",state_postal:"NY",row:1,column:8,state_total_old:"203",state_total_new:"135",state_change:"-38%",color:"gray2"},{state_full:"North Carolina",state_postal:"NC",row:4,column:6,state_total_old:"156",state_total_new:"111",state_change:"-35%",color:"purple1"},{state_full:"North Dakota",state_postal:"ND",row:1,column:3,state_total_old:"84",state_total_new:"117",state_change:"+36%",color:"purple3"},{state_full:"Ohio",state_postal:"OH",row:2,column:6,state_total_old:"258",state_total_new:"217",state_change:"-18%",color:"gray2"},{state_full:"Oklahoma",state_postal:"OK",row:5,column:3,state_total_old:"46",state_total_new:"53",state_change:"-30%",color:"gray2"},{state_full:"Oregon",state_postal:"OR",row:2,column:0,state_total_old:"40",state_total_new:"61",state_change:"+20%",color:"purple2"},{state_full:"Pennsylvania",state_postal:"PA",row:2,column:7,state_total_old:"276",state_total_new:"182",state_change:"-34%",color:"gray2"},{state_full:"Rhode Island",state_postal:"RI",row:2,column:10,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"gray2"},{state_full:"South Carolina",state_postal:"SC",row:4,column:7,state_total_old:"16",state_total_new:"30",state_change:"+38%",color:"gray2"},{state_full:"South Dakota",state_postal:"SD",row:2,column:3,state_total_old:"88",state_total_new:"108",state_change:"+17%",color:"gray2"},{state_full:"Tennessee",state_postal:"TN",row:4,column:5,state_total_old:"244",state_total_new:"147",state_change:"-42%",color:"gray2"},{state_full:"Texas",state_postal:"TX",row:6,column:3,state_total_old:"223",state_total_new:"159",state_change:"+29%",color:"gray2"},{state_full:"Utah",state_postal:"UT",row:3,column:1,state_total_old:"24",state_total_new:"24",state_change:"-67%",color:"gray2"},{state_full:"Vermont",state_postal:"VT",row:0,column:9,state_total_old:"7",state_total_new:"15",state_change:"-57%",color:"purple3"},{state_full:"Virginia",state_postal:"VA",row:3,column:7,state_total_old:"130",state_total_new:"123",state_change:"-10%",color:"gray2"},{state_full:"Washington",state_postal:"WA",row:1,column:0,state_total_old:"88",state_total_new:"63",state_change:"-39%",color:"gray2"},{state_full:"West Virginia",state_postal:"WV",row:3,column:6,state_total_old:"9",state_total_new:"22",state_change:"0%",color:"gray2"},{state_full:"Wisconsin",state_postal:"WI",row:1,column:5,state_total_old:"279",state_total_new:"242",state_change:"-15%",color:"purple3"},{state_full:"Wyoming",state_postal:"WY",row:2,column:2,state_total_old:"33",state_total_new:"37",state_change:"-21%",color:"purple3"}]};$(document).ready(function(){e.init()})})},{}]},{},[1]);
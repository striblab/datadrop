!function t(e,r,a){function i(n,s){if(!r[n]){if(!e[n]){var d="function"==typeof require&&require;if(!s&&d)return d(n,!0);if(o)return o(n,!0);throw new Error("Cannot find module '"+n+"'")}var c=r[n]={exports:{}};e[n][0].call(c.exports,function(t){var r=e[n][1][t];return i(r?r:t)},c,c.exports,t,e,r,a)}return r[n].exports}for(var o="function"==typeof require&&require,n=0;n<a.length;n++)i(a[n]);return i}({1:[function(t,e,r){$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var a=$.urlParam("chart");null!=a&&($(".slide").hide(),$("#"+a).show()),d3.json("./data/index.json",function(t,e){function r(t,e,r){var a=0,i="NO",o="NO",n="NO",s="NO",c="NO",l="";if("personal"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){d[p].pincomeDIFF>=15?l="gray4":d[p].pincomeDIFF>=10?l="gray3":d[p].pincomeDIFF>=5?l="gray2":d[p].pincomeDIFF>=0&&(l="gray1"),a=d[p].pincomeDIFF/100;break}if("household"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){d[p].mincomeDIFF>=9?l="gray4":d[p].mincomeDIFF>=6?l="gray3":d[p].mincomeDIFF>=3?l="gray2":d[p].mincomeDIFF>=0&&(l="gray1"),d[p].mincomeDIFF<=-9?l="red4":d[p].mincomeDIFF<=-6?l="red3":d[p].mincomeDIFF<=-3?l="red2":d[p].mincomeDIFF<0&&(l="red1"),a=d[p].mincomeDIFF/100;break}if("trump"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){d[p].pincomeDIFF>=15?l="gray4":d[p].pincomeDIFF>=10?l="gray3":d[p].pincomeDIFF>=5?l="gray2":d[p].pincomeDIFF>=0&&(l="gray1"),a=d[p].pincomeDIFF/100;break}if("taxes"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){d[p].taxDIFF>=100?l="gray4":d[p].taxDIFF>=50?l="gray3":d[p].taxDIFF>=30?l="gray2":d[p].taxDIFF>0?l="gray1":d[p].taxDIFF<=-30?l="red4":d[p].taxDIFF<=-20?l="red3":d[p].taxDIFF<=-10?l="red2":d[p].taxDIFF<=0&&(l="red1"),a=d[p].taxDIFF/100;break}if("aids"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){d[p].aidsDIFF>=100?l="gray4":d[p].aidsDIFF>=50?l="gray3":d[p].aidsDIFF>=30?l="gray2":d[p].aidsDIFF>0?l="gray1":d[p].aidsDIFF<=-30?l="red4":d[p].aidsDIFF<=-20?l="red3":d[p].aidsDIFF<=-10?l="red2":d[p].aidsDIFF<=0&&(l="red1"),a=d[p].aidsDIFF/100;break}if("indexed"==e)for(var p=0;p<d.length;p++)if(d[p].county==t.properties.COUNTYNAME){a=d[p].index,1==d[p].poverty&&(i="YES"),1==d[p].jobs&&(o="YES"),1==d[p].household&&(n="YES"),1==d[p].personal&&(s="YES"),1==d[p].wages&&(c="YES");break}return"indexed"!=e?"<div class='districtName'>"+t.properties.COUNTYNAME+" County</div><div class='population "+l+"'>"+d3.format("+%")(a)+" change</div>":"<div class='districtName'>"+t.properties.COUNTYNAME+" County</div><div class='population "+l+"'>"+a+" indicators above avg</div><div>Poverty: "+i+"</div><div>Jobs: "+o+"</div><div>Household inc: "+n+"</div><div>Personal inc: "+s+"</div><div>Wages: "+c+"</div>"}function a(t,e,a,i,o,n,s,c){function l(t){var e,r,a;if(t&&p!==t){var i=m.centroid(t);e=i[0],r=i[1],a=1,p=t}else e=u/2,r=f/2,a=1,p=null;x.selectAll("path").classed("faded",!1).classed("active",p&&function(t){return t===p})}var p,u=320,f=400;if("us"==n)var F=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==n)var F=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==n)var F=d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]);var m=d3.geo.path().projection(F),g=d3.select(t+" svg").attr("width",u).attr("height",f);g.append("rect").attr("class","background").attr("width",u).attr("height",f);var x=g.append("g");d3.json("shapefiles/"+i,function(t,e){x.append("g").attr("class","states").selectAll("path").data(e.features).enter().append("path").attr("d",m).attr("id",function(t){var e=n+"_"+t.properties.DISTRICT;return e.replace(new RegExp(" ","g"),"-")}).attr("precinctName",function(t){return t.properties.DISTRICT}).attr("class",function(t){if("personal"==o)for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME){if(d[e].pincomeDIFF>=18)return"gray4";if(d[e].pincomeDIFF>=12)return"gray3";if(d[e].pincomeDIFF>=6)return"gray2";if(d[e].pincomeDIFF>=0)return"gray1"}if("household"==o)for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME){if(d[e].mincomeDIFF>=3)return"gray3";if(d[e].mincomeDIFF<3)return"red3"}if("trump"==o){for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME&&"YES"==d[e].FLIP){if("YES"==d[e].RECOVERED)return"gray3";if("NO"==d[e].RECOVERED)return"red3"}return"none"}if("taxes"==o)for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME){if(d[e].taxDIFF>=100)return"gray4";if(d[e].taxDIFF>=50)return"gray3";if(d[e].taxDIFF>=30)return"gray2";if(d[e].taxDIFF>0)return"gray1";if(d[e].taxDIFF<=-30)return"red4";if(d[e].taxDIFF<=-20)return"red3";if(d[e].taxDIFF<=-10)return"red2";if(d[e].taxDIFF<=0)return"red1"}if("aids"==o)for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME){if(d[e].aidsDIFF>=100)return"gray4";if(d[e].aidsDIFF>=50)return"gray3";if(d[e].aidsDIFF>=30)return"gray2";if(d[e].aidsDIFF>0)return"gray1";if(d[e].aidsDIFF<=-30)return"red4";if(d[e].aidsDIFF<=-20)return"red3";if(d[e].aidsDIFF<=-10)return"red2";if(d[e].aidsDIFF<=0)return"red1"}if("indexed"==o)for(var e=0;e<d.length;e++)if(d[e].county==t.properties.COUNTYNAME){if(d[e].index>=5)return"gray5";if(d[e].index>=3)return"gray3";if(d[e].index>=1)return"gray1"}}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(t,e){if("index"!=o)return r(t,o,s)})),x.append("path").attr("id","state-borders").attr("d",m)});d3.behavior.zoom().on("zoom",function(){x.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),x.selectAll("circle").attr("d",m.projection(F)),x.selectAll("path").attr("d",m.projection(F))});$(".zoom, .switch, #close, .mapSwitch").click(function(){l(),$("#filter input").val(""),$(".district").removeClass("selected"),$("#infobox").hide(),d3.selectAll(".map rect").classed("faded",!1),d3.selectAll(".map rect").classed("active",!1),$(".rightSide").show()}),$(".mapSwitch").click(function(){$("#filter input").val("")})}function i(){c3.generate({bindto:"#gapChart",padding:{top:20,right:60,bottom:20,left:120},data:{x:"x",columns:[["x",2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],["METRO",49736,50015,49872,50514,51827,51155,51901,52657,52146,49111,49577,50929,52258,51607,53349,55295],["OUTSTATE",33821,34451,34921,36379,37199,36578,36261,37122,39694,38253,39549,41267,43923,43857,42696,44266]],type:"line"},color:{pattern:["#333333","#888888","#aaaaaa"]},axis:{y:{min:0,padding:{bottom:0},tick:{count:4,format:d3.format("$,.0f")},label:{text:"avg personal income",position:"outer-middle"}},x:{tick:{values:[2e3,2007,2009,2015],count:5},padding:{left:.25,right:.25}}},regions:[{axis:"x",start:2007,end:2009,class:"hottest"}]})}function o(){c3.generate({bindto:"#gapChart2",padding:{top:20,right:60,bottom:20,left:120},data:{x:"x",columns:[["x",2e3,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],["Metro",85681,80606,80092,78879,76225,74937,73821,74855,75324,75953,78877],["Outstate",54366,52031,52356,52312,51615,50994,50809,51399,52487,52721,53743]],type:"line"},color:{pattern:["#333333","#888888","#aaaaaa"]},axis:{y:{min:0,padding:{bottom:0},tick:{count:4,format:d3.format("$,.0f")},label:{text:"median household income",position:"outer-middle"}},x:{tick:{values:[2e3,2007,2009,2015],count:5},padding:{left:.25,right:.25}}},regions:[{axis:"x",start:2007,end:2009,class:"hottest"}]})}function n(){c3.generate({bindto:"#taxChart",padding:{top:20,right:60,bottom:20,left:120},data:{columns:[["METRO",2914,3280,3540],["OUTSTATE",1920,2218,2368]],type:"line"},color:{pattern:["#333333","#888888","#aaaaaa"]},axis:{y:{min:0,padding:{bottom:0},tick:{count:4,format:d3.format("$,.0f")},label:{text:"taxes per capita",position:"outer-middle"}},x:{type:"category",categories:["2009-2010","2011-2012","2012-2013"],padding:{left:.25,right:.25}}},regions:[{axis:"x",start:2007,end:2009,class:"hottest"}]})}function s(){c3.generate({bindto:"#aidChart",padding:{top:20,right:60,bottom:20,left:120},data:{columns:[["Metro",2611],["Outstate",2637]],type:"bar"},color:{pattern:["#333333","#888888","#aaaaaa"]},axis:{y:{min:0,padding:{bottom:0},tick:{count:4,format:d3.format("$,.0f")},label:{text:"taxes per capita",position:"outer-middle"}},x:{type:"category",categories:["Major State Aid"],padding:{left:.25,right:.25}}},regions:[{axis:"x",start:2007,end:2009,class:"hottest"}]})}var d=e.incomes;d3.helper={},d3.helper.tooltip=function(t){return function(e){var r,a=d3.select("body").node();e.on("mouseover",function(e,i){d3.select("body").selectAll("div.tooltip").remove(),r=d3.select("body").append("div").attr("class","tooltip");var o=d3.mouse(a);r.style("left",o[0]+10+"px").style("top",o[1]-15+"px").style("position","absolute").style("z-index",1001);t(e,i)||""}).on("mousemove",function(e,i){var o=d3.mouse(a);r.style("left",o[0]+10+"px").style("top",o[1]-15+"px");var n=t(e,i)||"";r.html(n)}).on("mouseout",function(t,e){r.remove()})}},a("#mapHousehold","#infobox","#chart","counties.json","household","mn",null,0),a("#mapPersonal","#infobox","#chart","counties.json","personal","mn",null,0),a("#mapTaxes","#infobox","#chart","counties.json","taxes","mn",null,0),a("#mapAids","#infobox","#chart","counties.json","aids","mn",null,0),a("#mapIndex","#infobox","#chart","counties.json","indexed","mn",null,0),a("#mapTrump","#infobox","#chart","counties.json","trump","mn",null,0),i(),o(),n(),s()})},{}]},{},[1]);
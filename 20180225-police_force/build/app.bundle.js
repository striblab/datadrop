!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){"use strict";var n=o(1);(0,function(t){return t&&t.__esModule?t:{default:t}}(n).default)({}),$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var r=$.urlParam("chart");"all"==r?$(".slide").show():null!=r&&($(".slide").hide(),$("#"+r).show()),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartTrend",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",46.15355984,41.0880911,36.23073357,35.51637682,31.86244299,24.51238273,27.52961754,24.19280834,27.39899681,22.24469161,null]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{y:{max:50,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,25,50],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartCompare",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",46.15355984,41.0880911,36.23073357,35.51637682,31.86244299,24.51238273,27.52961754,24.19280834,27.39899681,22.24469161,null]],type:"bar",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{type:"category",padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+'</span></div><div class="chart-tooltip gray3"><span class="tooltip-label">'+t[1].x+':</span><span class="tooltip-value">'+o(t[1].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartArrests",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",24213,21123,21342,23050,21866,23118,23544,20179,21484,0,null]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{y:{max:3e4,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,25,50],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartCalls",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",322402,316150,314926,313095,324520,351659,355617,359611,347093,380765,null]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{y:{max:4e5,min:0,padding:{bottom:0,top:0},tick:{count:5,values:[0,1e5,2e5,3e5,4e5],format:d3.format(",.0f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartInjuries",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Rate",.31,.29,.29,.28,.35,.34,.32,.29,.24,.26,null]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:5,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartCrime",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],["Violent Crime",1253.168807,1116.653866,1063.051195,945.6703612,1036.365731,1021.105508,1008.81896,1084.803778,1104.650055,null,null]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2016==t.x?6:2.5}},color:{pattern:["#3580A3","#A7E6E3"]},axis:{y:{max:2e3,min:0,padding:{bottom:0,top:0},tick:{count:7,values:[0,500,1e3,1500,2e3],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2015,2018],multiline:!1}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartMonths",padding:t,data:{x:"x",columns:[["x","2008-01-01","2008-02-01","2008-03-01","2008-04-01","2008-05-01","2008-06-01","2008-07-01","2008-08-01","2008-09-01","2008-10-01","2008-11-01","2008-12-01","2009-01-01","2009-02-01","2009-03-01","2009-04-01","2009-05-01","2009-06-01","2009-07-01","2009-08-01","2009-09-01","2009-10-01","2009-11-01","2009-12-01","2010-01-01","2010-02-01","2010-03-01","2010-04-01","2010-05-01","2010-06-01","2010-07-01","2010-08-01","2010-09-01","2010-10-01","2010-11-01","2010-12-01","2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01","2013-10-01","2013-11-01","2013-12-01","2014-01-01","2014-02-01","2014-03-01","2014-04-01","2014-05-01","2014-06-01","2014-07-01","2014-08-01","2014-09-01","2014-10-01","2014-11-01","2014-12-01","2015-01-01","2015-02-01","2015-03-01","2015-04-01","2015-05-01","2015-06-01","2015-07-01","2015-08-01","2015-09-01","2015-10-01","2015-11-01","2015-12-01","2016-01-01","2016-02-01","2016-03-01","2016-04-01","2016-05-01","2016-06-01","2016-07-01","2016-08-01","2016-09-01","2016-10-01","2016-11-01","2016-12-01","2017-01-01","2017-02-01","2017-03-01","2017-04-01","2017-05-01","2017-06-01","2017-07-01","2017-08-01","2017-09-01","2017-10-01","2017-11-01","2017-12-01"],["Incidents",177,106,116,114,121,135,157,156,125,155,114,99,195,84,105,133,145,117,155,114,99,76,89,74,158,67,99,90,91,101,132,137,112,99,85,57,163,92,97,101,106,100,111,106,83,97,71,72,148,62,96,94,90,102,127,88,82,86,72,74,153,61,72,72,82,86,91,75,69,72,58,58,145,39,70,69,96,107,99,110,95,116,58,62,138,59,67,69,64,93,91,100,73,73,66,64,167,60,68,77,98,96,93,91,74,79,77,58,152,65,72,88,90,82,73,74,59,64,56,59]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0,r:function(t){return 2017==t.x?6:2.5}},color:{pattern:["#3580A3"]},axis:{y:{max:300,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,100,200,300],format:d3.format(",.1f")}},x:{type:"timeseries",padding:{right:0,left:0},tick:{format:"%Y-%m"}}},grid:{focus:{show:!1}},tooltip:{contents:function(t,e,o,n){return'<div class="chart-tooltip blue4"><span class="tooltip-label">'+t[0].x+':</span><span class="tooltip-value">'+o(t[0].value)+"</span></div>"}}})}(),function(){var t={top:20,right:60,bottom:20,left:120};c3.generate({bindto:"#chartType",padding:t,data:{x:"x",columns:[["x","Bodily Force","Chemical Irritant","Taser","Gun Point Display","Improvised Weapon","Police K9 Bite","Baton","Firearm","Less Lethal Projectile"],["value",.71,.149,.096,.017,.013,.011,.002,.002,.001]],type:"bar",labels:{format:{value:d3.format("%.0f")}}},legend:{show:!1},tooltip:{show:!1},color:{pattern:["#3580A3"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:8,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{type:"category",tick:{multiline:!1}}},grid:{focus:{show:!1}}})}(),d3.json("./data/counts.json",function(t,e){function o(t,e,o){for(var n=0;n<o.length;n++)if(t.properties.Name==o[n].neighborhood){if(o[n].rate>=100)return"#0D4673";if(o[n].rate>=80)return"#3580A3";if(o[n].rate>=40)return"#67B4C2";if(o[n].rate>=20)return"#A7E6E3";if(o[n].rate>=0)return"#D1E6E1"}}function n(t,e,o){for(var n="",r=0,a=0;a<o.length;a++)t.properties.Name==o[a].neighborhood&&(o[a].rate>=100?(n="blue5",r=o[a].rate):o[a].rate>=80?(n="blue4",r=o[a].rate):o[a].rate>=40?(n="blue3",r=o[a].rate):o[a].rate>=20?(n="blue2",r=o[a].rate):o[a].rate>=0&&(n="blue1",r=o[a].rate));return"<div>"+t.properties.Name+"</div><div><span class='"+n+" legendary'>"+d3.format(",.1f")(r)+"</span> per 10,000 police calls</div>"}var r=e.incidents,a=$("#country svg");$(window).on("resize",function(){var t=a.parent().width();a.attr("width",t),a.attr("height",t/1.6)}),function(t,e,r,a,i,l,s,c,u){function d(t){var e;if(t&&p!==t){var o=v.centroid(t);o[0],o[1],e=1,p=t}else e=1,p=null;b.selectAll("path").classed("faded",!1).classed("active",p&&function(t){return t===p}),b.transition().duration(750).style("stroke-width",1.5/e+"px")}if("country"==l)var p,f=800,h=500,m=d3.geo.albersUsa().scale(1e3).translate([400,260]);else if("us"==l)var p,f=800,h=500,m=d3.geo.albersUsa().scale(2e3).translate([330,430]);else if("mn"==l)var p,f=350,h=500,m=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==l)var m=d3.geo.mercator().scale([8e4]).center([-93.070335,44.930977]);var v=d3.geo.path().projection(m),g=d3.select(t+" svg").attr("width",f).attr("height",h);g.append("rect").attr("class","background").attr("width",f).attr("height",h);var b=g.append("g");d3.json("shapefiles/"+a,function(t,e){d3.json("shapefiles/us_states_topo.json",function(t,r){b.append("g").attr("class","states").selectAll("path").data(e.features).enter().append("path").attr("d",v).attr("id",function(t){return(t.properties.Name+""+t.properties.GEOID+"_"+l).replace(new RegExp(" ","g"),"-")}).style("fill",function(t){return o(t,i,s)}).on("mousedown",function(t,e){}).style("stroke-width",".5px").style("stroke","#fff").call(d3.helper.tooltip(function(t,e){return n(t,i,s)})),b.append("path").attr("id","state-borders").attr("d",v)})}),d3.behavior.zoom().on("zoom",function(){b.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),b.selectAll("circle").attr("d",v.projection(m)),b.selectAll("path").attr("d",v.projection(m))}),$(".zoom").click(function(){d(),$("#filter input").val(""),$("#districtName").html("Midwest"),$(".district").removeClass("selected"),$(".card, .card div").show()}),d3.helper={},d3.helper.tooltip=function(t){return function(e){var o,n=d3.select("body").node();e.on("mouseover",function(e,r){d3.select("body").selectAll("div.tooltip").remove(),o=d3.select("body").append("div").attr("class","tooltip");var a=d3.mouse(n);o.style("left",a[0]+10+"px").style("top",a[1]-15+"px").style("position","absolute").style("z-index",1001),t(e,r)}).on("mousemove",function(e,r){var a=d3.mouse(n);o.style("left",a[0]+10+"px").style("top",a[1]-15+"px");var i=t(e,r)||"";o.html(i)}).on("mouseout",function(t,e){o.remove()})}}}("#map",0,0,"minneapolis_neighborhoods.json","state","metro",r);var i=a.parent().width();a.attr("width",i),a.attr("height",i/1.6)})},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=o(2),i=function(t){return t&&t.__esModule?t:{default:t}}(a),l=function(){function t(e){n(this,t),this.options=e||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(t,[{key:"setView",value:function(){if(this.options.useView){var t=void 0;if(_.find(this.options.views,function(e,o){return t=o,window.location.href.match(e)?o:void 0}),t){var e=document.createElement("div"),o=document.getElementsByTagName("body")[0];e.className="site-view site-view-"+t,o.insertBefore(e,o.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=i.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(t){return JSON.parse(JSON.stringify(t))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(t){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(t){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(t){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(e){t(null,{lat:e.coords.latitude,lng:e.coords.longitude})},function(){t("Unable to find your position.")}):t("Geolocation not available")}},{key:"goTo",value:function(t){var e=_.isElement(t)?t:t[0]&&_.isElement(t[0])?t[0]:document.getElementById(t);e&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(e):e.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(t){t=t||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",t),window.ga("send","pageview"))}}]),t}();e.default=function(t){return new l(t)}},function(t,e,o){"use strict";function n(t){switch(t.arrayFormat){case"index":return function(e,o,n){return null===o?[a(e,t),"[",n,"]"].join(""):[a(e,t),"[",a(n,t),"]=",a(o,t)].join("")};case"bracket":return function(e,o){return null===o?a(e,t):[a(e,t),"[]=",a(o,t)].join("")};default:return function(e,o){return null===o?a(e,t):[a(e,t),"=",a(o,t)].join("")}}}function r(t){var e;switch(t.arrayFormat){case"index":return function(t,o,n){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(n[t]=o);void 0===n[t]&&(n[t]={}),n[t][e[1]]=o};case"bracket":return function(t,o,n){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===n[t]?void(n[t]=[o]):void(n[t]=[].concat(n[t],o)):void(n[t]=o)};default:return function(t,e,o){if(void 0===o[t])return void(o[t]=e);o[t]=[].concat(o[t],e)}}}function a(t,e){return e.encode?e.strict?l(t):encodeURIComponent(t):t}function i(t){return Array.isArray(t)?t.sort():"object"==typeof t?i(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var l=o(3),s=o(4);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=s({arrayFormat:"none"},e);var o=r(e),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),a=e.length>0?e.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),o(decodeURIComponent(r),a,n)}),Object.keys(n).sort().reduce(function(t,e){var o=n[e];return Boolean(o)&&"object"==typeof o&&!Array.isArray(o)?t[e]=i(o):t[e]=o,t},Object.create(null))):n},e.stringify=function(t,e){e=s({encode:!0,strict:!0,arrayFormat:"none"},e);var o=n(e);return t?Object.keys(t).sort().map(function(n){var r=t[n];if(void 0===r)return"";if(null===r)return a(n,e);if(Array.isArray(r)){var i=[];return r.slice().forEach(function(t){void 0!==t&&i.push(o(n,t,i.length))}),i.join("&")}return a(n,e)+"="+a(r,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,o){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,o){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},o=0;o<10;o++)e["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var o,l,s=n(t),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var u in o)a.call(o,u)&&(s[u]=o[u]);if(r){l=r(o);for(var d=0;d<l.length;d++)i.call(o,l[d])&&(s[l[d]]=o[l[d]])}}return s}}]);
//# sourceMappingURL=app.bundle.js.map
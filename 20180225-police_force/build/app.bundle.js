!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var o=n(1);(0,function(t){return t&&t.__esModule?t:{default:t}}(o).default)({}),$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var r=$.urlParam("chart");null!=r&&($(".slide").hide(),$("#"+r).show()),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartTrend",padding:t,data:{x:"x",columns:[["x",2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],["Rate",48.85205427,43.83994939,38.99328731,38.29508616,34.54332553,26.98637032,29.97606976,26.61208917,29.90552964,24.52956548,42.15568862]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0},color:{pattern:["#3580A3"]},axis:{y:{max:75,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,25,50,75],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:4,values:[2008,2011,2014,2017],multiline:!1}}}})}(),function(){var t={top:20,right:60,bottom:20,left:60};c3.generate({bindto:"#chartMonths",padding:t,data:{x:"x",columns:[["x","2008-01-01","2008-02-01","2008-03-01","2008-04-01","2008-05-01","2008-06-01","2008-07-01","2008-08-01","2008-09-01","2008-10-01","2008-11-01","2008-12-01","2009-01-01","2009-02-01","2009-03-01","2009-04-01","2009-05-01","2009-06-01","2009-07-01","2009-08-01","2009-09-01","2009-10-01","2009-11-01","2009-12-01","2010-01-01","2010-02-01","2010-03-01","2010-04-01","2010-05-01","2010-06-01","2010-07-01","2010-08-01","2010-09-01","2010-10-01","2010-11-01","2010-12-01","2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01","2013-10-01","2013-11-01","2013-12-01","2014-01-01","2014-02-01","2014-03-01","2014-04-01","2014-05-01","2014-06-01","2014-07-01","2014-08-01","2014-09-01","2014-10-01","2014-11-01","2014-12-01","2015-01-01","2015-02-01","2015-03-01","2015-04-01","2015-05-01","2015-06-01","2015-07-01","2015-08-01","2015-09-01","2015-10-01","2015-11-01","2015-12-01","2016-01-01","2016-02-01","2016-03-01","2016-04-01","2016-05-01","2016-06-01","2016-07-01","2016-08-01","2016-09-01","2016-10-01","2016-11-01","2016-12-01","2017-01-01","2017-02-01","2017-03-01","2017-04-01","2017-05-01","2017-06-01","2017-07-01","2017-08-01","2017-09-01","2017-10-01","2017-11-01","2017-12-01"],["Incidents",177,106,116,114,121,135,157,156,125,155,114,99,195,84,105,133,145,117,155,114,99,76,89,74,158,67,99,90,91,101,132,137,112,99,85,57,163,92,97,101,106,100,111,106,83,97,71,72,148,62,96,94,90,102,127,88,82,86,72,74,153,61,72,72,82,86,91,75,69,72,58,58,145,39,70,69,96,107,99,110,95,116,58,62,138,59,67,69,64,93,91,100,73,73,66,64,167,60,68,77,98,96,93,91,74,79,77,58,152,65,72,88,90,82,73,74,59,64,56,59]],type:"line",labels:{format:{}}},legend:{show:!1},point:{show:!0},color:{pattern:["#3580A3"]},axis:{y:{max:300,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,100,200,300],format:d3.format(",.1f")}},x:{type:"timeseries",padding:{right:0,left:0},tick:{format:"%Y-%m"}}}})}(),function(){var t={top:20,right:60,bottom:20,left:120};c3.generate({bindto:"#chartType",padding:t,data:{x:"x",columns:[["x","Bodily Force","Chemical Irritant","Taser","Gun Point Display","Improvised Weapon","Police K9 Bite","Baton","Firearm","Less Lethal Projectile"],["value",.6829,.1425,.0927,.0168,.0123,.0103,.0022,.0017,6e-4]],type:"bar",labels:{format:{value:d3.format("%.0f")}}},legend:{show:!1},tooltip:{show:!1},color:{pattern:["#3580A3"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:8,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{type:"category",tick:{multiline:!1}}}})}(),d3.json("./data/counts.json",function(t,e){function n(t,e,n){for(var o=0;o<n.length;o++)if(t.properties.Name==n[o].neighborhood){if(n[o].rate>=100)return"#0D4673";if(n[o].rate>=80)return"#3580A3";if(n[o].rate>=40)return"#67B4C2";if(n[o].rate>=20)return"#A7E6E3";if(n[o].rate>=0)return"#D1E6E1"}}function o(t,e,n){for(var o="",r=0,i=0;i<n.length;i++)t.properties.Name==n[i].neighborhood&&(n[i].rate>=100?(o="blue5",r=n[i].rate):n[i].rate>=80?(o="blue4",r=n[i].rate):n[i].rate>=40?(o="blue3",r=n[i].rate):n[i].rate>=20?(o="blue2",r=n[i].rate):n[i].rate>=0&&(o="blue1",r=n[i].rate));return"<div>"+t.properties.Name+"</div><div><span class='"+o+" legendary'>"+d3.format(",.1f")(r)+"</span> per 10,000 police incidents</div>"}var r=e.incidents,i=$("#country svg");$(window).on("resize",function(){var t=i.parent().width();i.attr("width",t),i.attr("height",t/1.6)}),function(t,e,r,i,a,s,c,l,u){function d(t){var e;if(t&&f!==t){var n=v.centroid(t);n[0],n[1],e=1,f=t}else e=1,f=null;y.selectAll("path").classed("faded",!1).classed("active",f&&function(t){return t===f}),y.transition().duration(750).style("stroke-width",1.5/e+"px")}if("country"==s)var f,p=800,h=500,m=d3.geo.albersUsa().scale(1e3).translate([400,260]);else if("us"==s)var f,p=800,h=500,m=d3.geo.albersUsa().scale(2e3).translate([330,430]);else if("mn"==s)var f,p=350,h=500,m=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==s)var m=d3.geo.mercator().scale([8e4]).center([-93.070335,44.930977]);var v=d3.geo.path().projection(m),g=d3.select(t+" svg").attr("width",p).attr("height",h);g.append("rect").attr("class","background").attr("width",p).attr("height",h);var y=g.append("g");d3.json("shapefiles/"+i,function(t,e){d3.json("shapefiles/us_states_topo.json",function(t,r){y.append("g").attr("class","states").selectAll("path").data(e.features).enter().append("path").attr("d",v).attr("id",function(t){return(t.properties.Name+""+t.properties.GEOID+"_"+s).replace(new RegExp(" ","g"),"-")}).style("fill",function(t){return n(t,a,c)}).on("mousedown",function(t,e){}).style("stroke-width",".5px").style("stroke","#fff").call(d3.helper.tooltip(function(t,e){return o(t,a,c)})),y.append("path").attr("id","state-borders").attr("d",v)})}),d3.behavior.zoom().on("zoom",function(){y.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),y.selectAll("circle").attr("d",v.projection(m)),y.selectAll("path").attr("d",v.projection(m))}),$(".zoom").click(function(){d(),$("#filter input").val(""),$("#districtName").html("Midwest"),$(".district").removeClass("selected"),$(".card, .card div").show()}),d3.helper={},d3.helper.tooltip=function(t){return function(e){var n,o=d3.select("body").node();e.on("mouseover",function(e,r){d3.select("body").selectAll("div.tooltip").remove(),n=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(o);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001),t(e,r)}).on("mousemove",function(e,r){var i=d3.mouse(o);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var a=t(e,r)||"";n.html(a)}).on("mouseout",function(t,e){n.remove()})}}}("#map",0,0,"minneapolis_neighborhoods.json","state","metro",r);var a=i.parent().width();i.attr("width",a),i.attr("height",a/1.6)})},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(i),s=function(){function t(e){o(this,t),this.options=e||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(t,[{key:"setView",value:function(){if(this.options.useView){var t=void 0;if(_.find(this.options.views,function(e,n){return t=n,window.location.href.match(e)?n:void 0}),t){var e=document.createElement("div"),n=document.getElementsByTagName("body")[0];e.className="site-view site-view-"+t,n.insertBefore(e,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(t){return JSON.parse(JSON.stringify(t))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(t){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(t){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(t){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(e){t(null,{lat:e.coords.latitude,lng:e.coords.longitude})},function(){t("Unable to find your position.")}):t("Geolocation not available")}},{key:"goTo",value:function(t){var e=_.isElement(t)?t:t[0]&&_.isElement(t[0])?t[0]:document.getElementById(t);e&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(e):e.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(t){t=t||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",t),window.ga("send","pageview"))}}]),t}();e.default=function(t){return new s(t)}},function(t,e,n){"use strict";function o(t){switch(t.arrayFormat){case"index":return function(e,n,o){return null===n?[i(e,t),"[",o,"]"].join(""):[i(e,t),"[",i(o,t),"]=",i(n,t)].join("")};case"bracket":return function(e,n){return null===n?i(e,t):[i(e,t),"[]=",i(n,t)].join("")};default:return function(e,n){return null===n?i(e,t):[i(e,t),"=",i(n,t)].join("")}}}function r(t){var e;switch(t.arrayFormat){case"index":return function(t,n,o){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(o[t]=n);void 0===o[t]&&(o[t]={}),o[t][e[1]]=n};case"bracket":return function(t,n,o){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===o[t]?void(o[t]=[n]):void(o[t]=[].concat(o[t],n)):void(o[t]=n)};default:return function(t,e,n){if(void 0===n[t])return void(n[t]=e);n[t]=[].concat(n[t],e)}}}function i(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function a(t){return Array.isArray(t)?t.sort():"object"==typeof t?a(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var s=n(3),c=n(4);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=c({arrayFormat:"none"},e);var n=r(e),o=Object.create(null);return"string"!=typeof t?o:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)}),Object.keys(o).sort().reduce(function(t,e){var n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t},Object.create(null))):o},e.stringify=function(t,e){e=c({encode:!0,strict:!0,arrayFormat:"none"},e);var n=o(e);return t?Object.keys(t).sort().map(function(o){var r=t[o];if(void 0===r)return"";if(null===r)return i(o,e);if(Array.isArray(r)){var a=[];return r.slice().forEach(function(t){void 0!==t&&a.push(n(o,t,a.length))}),a.join("&")}return i(o,e)+"="+i(r,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,n){"use strict";function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,c=o(t),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var u in n)i.call(n,u)&&(c[u]=n[u]);if(r){s=r(n);for(var d=0;d<s.length;d++)a.call(n,s[d])&&(c[s[d]]=n[s[d]])}}return c}}]);
//# sourceMappingURL=app.bundle.js.map
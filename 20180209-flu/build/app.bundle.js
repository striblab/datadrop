!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var o=n(1);(0,function(t){return t&&t.__esModule?t:{default:t}}(o).default)({}),$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var r=$.urlParam("chart");null!=r?($(".slide").hide(),$("#"+r).show()):$(".slide").show(),function(){var t={top:20,right:40,bottom:20,left:60};c3.generate({bindto:"#chartTrend",padding:t,data:{columns:[["2010-11",.00584334,.0116119,.010122,.0110533,.0137079,.0106915,.0183651,.0198138,.0256631],["2011-12",.0126777,.0132592,.021711,.0325009,.0180741,.0166667,.0116015,.0148064,.0165403],["2012-13",.00953961,.0178823,.0305277,.0667769,.0554971,.040914,.0307692,.0286423,.0267437],["2013-14",.0117106,.00904621,.0201371,.0351852,.0334739,.0251268,.031093,.0326496,.0253456],["2014-15",.0170758,.0453885,.0572078,.0785111,.0364327,.0323494,.0362635,.0274324,.0277726],["2015-16",.0180049,.0154377,.0284483,.0193642,.00556836,.0058096,.00676788,.00762547,.0100438],["2016-17",.0110247,.0118233,.0219521,.0233905,.0227992,.0234944,.0340085,.033874,.0344587],["2017-18",.0215039,.0230408,.0293532,.0301329,.0331529,.0432925,.0472961,.0520347,.052],["National",.0249152,.0320522,.0444056,.0542781,.0538152,.0557492,.0637995,.071214,.0808548]],type:"line"},legend:{show:!1},color:{pattern:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#A52129","#00BB00"]},axis:{y:{max:.1,min:0,padding:{bottom:0,top:0},tick:{values:[0,.02,.04,.06,.08,.1],count:6,format:d3.format("%")}},x:{type:"category",categories:["Week 49","Week 50","Week 51","Week 52","Week 01","Week 02","Week 03","Week 04","Week 05"],padding:{right:0,left:0},label:{position:"outer-center"},tick:{rotate:-75,count:9,multiline:!1},height:50}},grid:{y:{lines:[]},x:{lines:[{value:"Week 01",text:"January 2018",position:"end"}]}},tooltip:{format:{value:function(t,e,n){var o="data1"===n?d3.format(","):d3.format("%");if("2017-18"==n||"National"==n)return o(t)},name:function(t,e,n,o){return"2017-18"==t?"Minnesota":"National"==t?t:void 0}}}})}(),function(){var t={top:20,right:60,bottom:20,left:80};c3.generate({bindto:"#chartRank",padding:t,data:{x:"x",columns:[["x","Metro","Central","Southeast","South Central","Northeast","Southwest","West Central","Northwest"],["Flu Hospitalizations",.65,.12,.07,.06,.03,.03,.03,.03]],type:"bar"},legend:{show:!1},color:{pattern:["#333"]},axis:{rotated:!0,y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:5,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{type:"category",tick:{multiline:!1}}}})}(),function(){var t={top:20,right:40,bottom:20,left:60};c3.generate({bindto:"#chartDeaths",padding:t,data:{columns:[["2010-11",.071,.071,.071,.078,.067,.09,.08],["2011-12",.082,.079,.076,.099,.085,.09,.069],["2012-13",.066,.07,.069,.103,.111,.124,.128],["2013-14",.069,.065,.066,.085,.081,.071,.087],["2014-15",.063,.064,.086,.098,.137,.127,.1],["2015-16",.06,.064,.056,.073,.079,.071,.072],["2016-17",.069,.066,.068,.051,.077,.071,.068],["2017-18",.069,.067,.069,.08,.106,.114,.105]],type:"line"},legend:{show:!1},color:{pattern:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#A52129"]},axis:{y:{max:.2,min:0,padding:{bottom:0,top:0},tick:{values:[0,.05,.1,.15,.2],count:5,format:d3.format("%.0f")}},x:{type:"category",categories:["Week 49","Week 50","Week 51","Week 52","Week 01","Week 02","Week 03"],padding:{right:0,left:0},label:{position:"outer-center"},tick:{rotate:-75,count:7,multiline:!1},height:50}},grid:{y:{lines:[]},x:{lines:[{value:"Week 01",text:"January 2018",position:"end"}]}},tooltip:{format:{value:function(t,e,n){var o="data1"===n?d3.format(","):d3.format("%");if("2017-18"==n)return o(t)},name:function(t,e,n,o){if("2017-18"==t)return t}}}})}(),function(){var t={top:20,right:60,bottom:20,left:80};c3.generate({bindto:"#chartAge",padding:t,data:{x:"x",columns:[["x","Age 0-4","Age 5-24","Age 25-49","Age 50-64","Age 65+"],["Flu Hospitalizations",31.2,13.2,21.6,53.5,307.2]],type:"bar",labels:{format:{"Flu Hospitalizations":d3.format(".0f")}}},legend:{show:!1},tooltip:{show:!1},color:{pattern:["#333"]},axis:{y:{max:320,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,100,200,320],format:d3.format(".0f")}},x:{type:"category",tick:{multiline:!1}}}})}()},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(i),u=function(){function t(e){o(this,t),this.options=e||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return r(t,[{key:"setView",value:function(){if(this.options.useView){var t=void 0;if(_.find(this.options.views,function(e,n){return t=n,window.location.href.match(e)?n:void 0}),t){var e=document.createElement("div"),n=document.getElementsByTagName("body")[0];e.className="site-view site-view-"+t,n.insertBefore(e,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(t){return JSON.parse(JSON.stringify(t))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(t){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(t){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(t){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(e){t(null,{lat:e.coords.latitude,lng:e.coords.longitude})},function(){t("Unable to find your position.")}):t("Geolocation not available")}},{key:"goTo",value:function(t){var e=_.isElement(t)?t:t[0]&&_.isElement(t[0])?t[0]:document.getElementById(t);e&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(e):e.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(t){t=t||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",t),window.ga("send","pageview"))}}]),t}();e.default=function(t){return new u(t)}},function(t,e,n){"use strict";function o(t){switch(t.arrayFormat){case"index":return function(e,n,o){return null===n?[i(e,t),"[",o,"]"].join(""):[i(e,t),"[",i(o,t),"]=",i(n,t)].join("")};case"bracket":return function(e,n){return null===n?i(e,t):[i(e,t),"[]=",i(n,t)].join("")};default:return function(e,n){return null===n?i(e,t):[i(e,t),"=",i(n,t)].join("")}}}function r(t){var e;switch(t.arrayFormat){case"index":return function(t,n,o){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(o[t]=n);void 0===o[t]&&(o[t]={}),o[t][e[1]]=n};case"bracket":return function(t,n,o){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===o[t]?void(o[t]=[n]):void(o[t]=[].concat(o[t],n)):void(o[t]=n)};default:return function(t,e,n){if(void 0===n[t])return void(n[t]=e);n[t]=[].concat(n[t],e)}}}function i(t,e){return e.encode?e.strict?u(t):encodeURIComponent(t):t}function a(t){return Array.isArray(t)?t.sort():"object"==typeof t?a(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var u=n(3),c=n(4);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=c({arrayFormat:"none"},e);var n=r(e),o=Object.create(null);return"string"!=typeof t?o:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),r=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)}),Object.keys(o).sort().reduce(function(t,e){var n=o[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t},Object.create(null))):o},e.stringify=function(t,e){e=c({encode:!0,strict:!0,arrayFormat:"none"},e);var n=o(e);return t?Object.keys(t).sort().map(function(o){var r=t[o];if(void 0===r)return"";if(null===r)return i(o,e);if(Array.isArray(r)){var a=[];return r.slice().forEach(function(t){void 0!==t&&a.push(n(o,t,a.length))}),a.join("&")}return i(o,e)+"="+i(r,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,n){"use strict";function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,c=o(t),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var l in n)i.call(n,l)&&(c[l]=n[l]);if(r){u=r(n);for(var d=0;d<u.length;d++)a.call(n,u[d])&&(c[u[d]]=n[u[d]])}}return c}}]);
//# sourceMappingURL=app.bundle.js.map
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ArcGISTiledMapServiceSource = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var SphericalMercator=function(){function t(t){if(t=t||{},this.size=t.size||256,!i[this.size]){var h=this.size,a=i[this.size]={};a.Bc=[],a.Cc=[],a.zc=[],a.Ac=[];for(var s=0;s<30;s++)a.Bc.push(h/360),a.Cc.push(h/(2*Math.PI)),a.zc.push(h/2),a.Ac.push(h),h*=2}this.Bc=i[this.size].Bc,this.Cc=i[this.size].Cc,this.zc=i[this.size].zc,this.Ac=i[this.size].Ac}var i={},h=Math.PI/180,a=180/Math.PI,s=6378137,e=20037508.342789244;return t.prototype.px=function(t,i){var a=this.zc[i],s=Math.min(Math.max(Math.sin(h*t[1]),-.9999),.9999),e=Math.round(a+t[0]*this.Bc[i]),r=Math.round(a+.5*Math.log((1+s)/(1-s))*-this.Cc[i]);return e>this.Ac[i]&&(e=this.Ac[i]),r>this.Ac[i]&&(r=this.Ac[i]),[e,r]},t.prototype.ll=function(t,i){var h=(t[1]-this.zc[i])/-this.Cc[i];return[(t[0]-this.zc[i])/this.Bc[i],a*(2*Math.atan(Math.exp(h))-.5*Math.PI)]},t.prototype.bbox=function(t,i,h,a,s){a&&(i=Math.pow(2,h)-1-i);var e=[t*this.size,(+i+1)*this.size],r=[(+t+1)*this.size,i*this.size],o=this.ll(e,h).concat(this.ll(r,h));return"900913"===s?this.convert(o,"900913"):o},t.prototype.xyz=function(t,i,h,a){"900913"===a&&(t=this.convert(t,"WGS84"));var s=[t[0],t[1]],e=[t[2],t[3]],r=this.px(s,i),o=this.px(e,i),n=[Math.floor(r[0]/this.size),Math.floor((o[0]-1)/this.size)],c=[Math.floor(o[1]/this.size),Math.floor((r[1]-1)/this.size)],p={minX:Math.min.apply(Math,n)<0?0:Math.min.apply(Math,n),minY:Math.min.apply(Math,c)<0?0:Math.min.apply(Math,c),maxX:Math.max.apply(Math,n),maxY:Math.max.apply(Math,c)};if(h){var M={minY:Math.pow(2,i)-1-p.maxY,maxY:Math.pow(2,i)-1-p.minY};p.minY=M.minY,p.maxY=M.maxY}return p},t.prototype.convert=function(t,i){return"900913"===i?this.forward(t.slice(0,2)).concat(this.forward(t.slice(2,4))):this.inverse(t.slice(0,2)).concat(this.inverse(t.slice(2,4)))},t.prototype.forward=function(t){var i=[s*t[0]*h,s*Math.log(Math.tan(.25*Math.PI+.5*t[1]*h))];return i[0]>e&&(i[0]=e),i[0]<-e&&(i[0]=-e),i[1]>e&&(i[1]=e),i[1]<-e&&(i[1]=-e),i},t.prototype.inverse=function(t){return[t[0]*a/s,(.5*Math.PI-2*Math.atan(Math.exp(-t[1]/s)))*a]},t}();"undefined"!=typeof module&&"undefined"!=typeof exports&&(module.exports=exports=SphericalMercator);
},{}],2:[function(_dereq_,module,exports){
function UnitBezier(t,i,e,r){this.cx=3*t,this.bx=3*(e-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*i,this.by=3*(r-i)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=r,this.p2x=e,this.p2y=r}module.exports=UnitBezier,UnitBezier.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},UnitBezier.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},UnitBezier.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},UnitBezier.prototype.solveCurveX=function(t,i){void 0===i&&(i=1e-6);var e,r,s,h,n;for(s=t,n=0;n<8;n++){if(h=this.sampleCurveX(s)-t,Math.abs(h)<i)return s;var u=this.sampleCurveDerivativeX(s);if(Math.abs(u)<1e-6)break;s-=h/u}if(e=0,r=1,(s=t)<e)return e;if(s>r)return r;for(;e<r;){if(h=this.sampleCurveX(s),Math.abs(h-t)<i)return s;t>h?e=s:r=s,s=.5*(r-e)+e}return s},UnitBezier.prototype.solve=function(t,i){return this.sampleCurveY(this.solveCurveX(t,i))};
},{}],3:[function(_dereq_,module,exports){
"use strict";function isSupported(e){return!!(isBrowser()&&isArraySupported()&&isFunctionSupported()&&isObjectSupported()&&isJSONSupported()&&isWorkerSupported()&&isUint8ClampedArraySupported()&&isWebGLSupportedCached(e&&e.failIfMajorPerformanceCaveat))}function isBrowser(){return"undefined"!=typeof window&&"undefined"!=typeof document}function isArraySupported(){return Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray}function isFunctionSupported(){return Function.prototype&&Function.prototype.bind}function isObjectSupported(){return Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions}function isJSONSupported(){return"JSON"in window&&"parse"in JSON&&"stringify"in JSON}function isWorkerSupported(){return"Worker"in window}function isUint8ClampedArraySupported(){return"Uint8ClampedArray"in window}function isWebGLSupportedCached(e){return void 0===isWebGLSupportedCache[e]&&(isWebGLSupportedCache[e]=isWebGLSupported(e)),isWebGLSupportedCache[e]}function isWebGLSupported(e){var t=document.createElement("canvas"),r=Object.create(isSupported.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",r)||t.probablySupportsContext("experimental-webgl",r):t.supportsContext?t.supportsContext("webgl",r)||t.supportsContext("experimental-webgl",r):t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}"undefined"!=typeof module&&module.exports?module.exports=isSupported:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=isSupported);var isWebGLSupportedCache={};isSupported.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};
},{}],4:[function(_dereq_,module,exports){
"use strict";var Coordinate=function(o,t,n){this.column=o,this.row=t,this.zoom=n};Coordinate.prototype.clone=function(){return new Coordinate(this.column,this.row,this.zoom)},Coordinate.prototype.zoomTo=function(o){return this.clone()._zoomTo(o)},Coordinate.prototype.sub=function(o){return this.clone()._sub(o)},Coordinate.prototype._zoomTo=function(o){var t=Math.pow(2,o-this.zoom);return this.column*=t,this.row*=t,this.zoom=o,this},Coordinate.prototype._sub=function(o){return o=o.zoomTo(this.zoom),this.column-=o.column,this.row-=o.row,this},module.exports=Coordinate;
},{}],5:[function(_dereq_,module,exports){
"use strict";var wrap=_dereq_("../util/util").wrap,LngLat=function(t,n){if(isNaN(t)||isNaN(n))throw new Error("Invalid LngLat object: ("+t+", "+n+")");if(this.lng=+t,this.lat=+n,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};LngLat.prototype.wrap=function(){return new LngLat(wrap(this.lng,-180,180),this.lat)},LngLat.prototype.wrapToBestWorld=function(t){var n=new LngLat(this.lng,this.lat);return Math.abs(this.lng-t.lng)>180&&(t.lng<0?n.lng-=360:n.lng+=360),n},LngLat.prototype.toArray=function(){return[this.lng,this.lat]},LngLat.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},LngLat.convert=function(t){if(t instanceof LngLat)return t;if(t&&t.hasOwnProperty("lng")&&t.hasOwnProperty("lat"))return new LngLat(t.lng,t.lat);if(Array.isArray(t)&&2===t.length)return new LngLat(t[0],t[1]);throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")},module.exports=LngLat;
},{"../util/util":12}],6:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("./lng_lat"),LngLatBounds=function(t,n){t&&(n?this.setSouthWest(t).setNorthEast(n):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))};LngLatBounds.prototype.setNorthEast=function(t){return this._ne=LngLat.convert(t),this},LngLatBounds.prototype.setSouthWest=function(t){return this._sw=LngLat.convert(t),this},LngLatBounds.prototype.extend=function(t){var n,e,s=this._sw,o=this._ne;if(t instanceof LngLat)n=t,e=t;else{if(!(t instanceof LngLatBounds))return Array.isArray(t)?t.every(Array.isArray)?this.extend(LngLatBounds.convert(t)):this.extend(LngLat.convert(t)):this;if(n=t._sw,e=t._ne,!n||!e)return this}return s||o?(s.lng=Math.min(n.lng,s.lng),s.lat=Math.min(n.lat,s.lat),o.lng=Math.max(e.lng,o.lng),o.lat=Math.max(e.lat,o.lat)):(this._sw=new LngLat(n.lng,n.lat),this._ne=new LngLat(e.lng,e.lat)),this},LngLatBounds.prototype.getCenter=function(){return new LngLat((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},LngLatBounds.prototype.getSouthWest=function(){return this._sw},LngLatBounds.prototype.getNorthEast=function(){return this._ne},LngLatBounds.prototype.getNorthWest=function(){return new LngLat(this.getWest(),this.getNorth())},LngLatBounds.prototype.getSouthEast=function(){return new LngLat(this.getEast(),this.getSouth())},LngLatBounds.prototype.getWest=function(){return this._sw.lng},LngLatBounds.prototype.getSouth=function(){return this._sw.lat},LngLatBounds.prototype.getEast=function(){return this._ne.lng},LngLatBounds.prototype.getNorth=function(){return this._ne.lat},LngLatBounds.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},LngLatBounds.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},LngLatBounds.convert=function(t){return!t||t instanceof LngLatBounds?t:new LngLatBounds(t)},module.exports=LngLatBounds;
},{"./lng_lat":5}],7:[function(_dereq_,module,exports){
"use strict";var LngLatBounds=_dereq_("../geo/lng_lat_bounds"),clamp=_dereq_("../util/util").clamp,TileBounds=function(t,o,n){this.bounds=LngLatBounds.convert(t),this.minzoom=o||0,this.maxzoom=n||24};TileBounds.prototype.contains=function(t,o){var n=o?Math.min(t.z,o):t.z,i={minX:Math.floor(this.lngX(this.bounds.getWest(),n)),minY:Math.floor(this.latY(this.bounds.getNorth(),n)),maxX:Math.ceil(this.lngX(this.bounds.getEast(),n)),maxY:Math.ceil(this.latY(this.bounds.getSouth(),n))};return t.x>=i.minX&&t.x<i.maxX&&t.y>=i.minY&&t.y<i.maxY},TileBounds.prototype.lngX=function(t,o){return(t+180)*(Math.pow(2,o)/360)},TileBounds.prototype.latY=function(t,o){var n=clamp(Math.sin(Math.PI/180*t),-.9999,.9999),i=Math.pow(2,o)/(2*Math.PI);return Math.pow(2,o-1)+.5*Math.log((1+n)/(1-n))*-i},module.exports=TileBounds;
},{"../geo/lng_lat_bounds":6,"../util/util":12}],8:[function(_dereq_,module,exports){
"use strict";function sameOrigin(e){var t=window.document.createElement("a");return t.href=e,t.protocol===window.document.location.protocol&&t.host===window.document.location.host}var window=_dereq_("./window"),AJAXError=function(e){function t(t,r){e.call(this,t),this.status=r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(Error);exports.getJSON=function(e,t){var r=new window.XMLHttpRequest;return r.open("GET",e,!0),r.setRequestHeader("Accept","application/json"),r.onerror=function(e){t(e)},r.onload=function(){if(r.status>=200&&r.status<300&&r.response){var e;try{e=JSON.parse(r.response)}catch(e){return t(e)}t(null,e)}else t(new AJAXError(r.statusText,r.status))},r.send(),r},exports.getArrayBuffer=function(e,t){var r=new window.XMLHttpRequest;return r.open("GET",e,!0),r.responseType="arraybuffer",r.onerror=function(e){t(e)},r.onload=function(){if(0===r.response.byteLength&&200===r.status)return t(new Error("http status 200 returned without content."));r.status>=200&&r.status<300&&r.response?t(null,{data:r.response,cacheControl:r.getResponseHeader("Cache-Control"),expires:r.getResponseHeader("Expires")}):t(new AJAXError(r.statusText,r.status))},r.send(),r};var transparentPngUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";exports.getImage=function(e,t){return exports.getArrayBuffer(e,function(e,r){if(e)return t(e);var n=new window.Image,o=window.URL||window.webkitURL;n.onload=function(){t(null,n),o.revokeObjectURL(n.src)};var s=new window.Blob([new Uint8Array(r.data)],{type:"image/png"});n.cacheControl=r.cacheControl,n.expires=r.expires,n.src=r.data.byteLength?o.createObjectURL(s):transparentPngUrl})},exports.getVideo=function(e,t){var r=window.document.createElement("video");r.onloadstart=function(){t(null,r)};for(var n=0;n<e.length;n++){var o=window.document.createElement("source");sameOrigin(e[n])||(r.crossOrigin="Anonymous"),o.src=e[n],r.appendChild(o)}return r};
},{"./window":10}],9:[function(_dereq_,module,exports){
"use strict";var window=_dereq_("./window");module.exports.now=function(){return window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date)}();var frame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;exports.frame=function(e){return frame(e)};var cancel=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame;exports.cancelFrame=function(e){cancel(e)},exports.timed=function(e,n,t){function o(i){r||(i=module.exports.now(),i>=a+n?e.call(t,1):(e.call(t,(i-a)/n),exports.frame(o)))}if(!n)return e.call(t,1),null;var r=!1,a=module.exports.now();return exports.frame(o),function(){r=!0}},exports.getImageData=function(e){var n=window.document.createElement("canvas"),t=n.getContext("2d");return n.width=e.width,n.height=e.height,t.drawImage(e,0,0,e.width,e.height),t.getImageData(0,0,e.width,e.height).data},exports.supported=_dereq_("mapbox-gl-supported"),exports.hardwareConcurrency=window.navigator.hardwareConcurrency||4,Object.defineProperty(exports,"devicePixelRatio",{get:function(){return window.devicePixelRatio}}),exports.supportsWebp=!1;var webpImgTest=window.document.createElement("img");webpImgTest.onload=function(){exports.supportsWebp=!0},webpImgTest.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";
},{"./window":10,"mapbox-gl-supported":3}],10:[function(_dereq_,module,exports){
"use strict";module.exports=self;
},{}],11:[function(_dereq_,module,exports){
"use strict";function _addEventListener(e,t,n){n[e]=n[e]||[],n[e].push(t)}function _removeEventListener(e,t,n){if(n&&n[e]){var i=n[e].indexOf(t);-1!==i&&n[e].splice(i,1)}}var util=_dereq_("./util"),Evented=function(){};Evented.prototype.on=function(e,t){return this._listeners=this._listeners||{},_addEventListener(e,t,this._listeners),this},Evented.prototype.off=function(e,t){return _removeEventListener(e,t,this._listeners),_removeEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.once=function(e,t){return this._oneTimeListeners=this._oneTimeListeners||{},_addEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.fire=function(e,t){var n=this;if(this.listens(e)){t=util.extend({},t,{type:e,target:this});for(var i=this._listeners&&this._listeners[e]?this._listeners[e].slice():[],s=0;s<i.length;s++)i[s].call(n,t);for(var r=this._oneTimeListeners&&this._oneTimeListeners[e]?this._oneTimeListeners[e].slice():[],o=0;o<r.length;o++)r[o].call(n,t),_removeEventListener(e,r[o],n._oneTimeListeners);this._eventedParent&&this._eventedParent.fire(e,util.extend({},t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData))}else util.endsWith(e,"error")&&console.error(t&&t.error||t||"Empty error event");return this},Evented.prototype.listens=function(e){return this._listeners&&this._listeners[e]&&this._listeners[e].length>0||this._oneTimeListeners&&this._oneTimeListeners[e]&&this._oneTimeListeners[e].length>0||this._eventedParent&&this._eventedParent.listens(e)},Evented.prototype.setEventedParent=function(e,t){return this._eventedParent=e,this._eventedParentData=t,this},module.exports=Evented;
},{"./util":12}],12:[function(_dereq_,module,exports){
"use strict";var UnitBezier=_dereq_("@mapbox/unitbezier"),Coordinate=_dereq_("../geo/coordinate"),Point=_dereq_("point-geometry");exports.easeCubicInOut=function(r){if(r<=0)return 0;if(r>=1)return 1;var e=r*r,t=e*r;return 4*(r<.5?t:3*(r-e)+t-.75)},exports.bezier=function(r,e,t,n){var o=new UnitBezier(r,e,t,n);return function(r){return o.solve(r)}},exports.ease=exports.bezier(.25,.1,.25,1),exports.clamp=function(r,e,t){return Math.min(t,Math.max(e,r))},exports.wrap=function(r,e,t){var n=t-e,o=((r-e)%n+n)%n+e;return o===e?t:o},exports.asyncAll=function(r,e,t){if(!r.length)return t(null,[]);var n=r.length,o=new Array(r.length),a=null;r.forEach(function(r,i){e(r,function(r,e){r&&(a=r),o[i]=e,0==--n&&t(a,o)})})},exports.values=function(r){var e=[];for(var t in r)e.push(r[t]);return e},exports.keysDifference=function(r,e){var t=[];for(var n in r)n in e||t.push(n);return t},exports.extend=function(r,e,t,n){for(var o=arguments,a=1;a<arguments.length;a++){var i=o[a];for(var u in i)r[u]=i[u]}return r},exports.pick=function(r,e){for(var t={},n=0;n<e.length;n++){var o=e[n];o in r&&(t[o]=r[o])}return t};var id=1;exports.uniqueId=function(){return id++},exports.bindAll=function(r,e){r.forEach(function(r){e[r]&&(e[r]=e[r].bind(e))})},exports.getCoordinatesCenter=function(r){for(var e=1/0,t=1/0,n=-1/0,o=-1/0,a=0;a<r.length;a++)e=Math.min(e,r[a].column),t=Math.min(t,r[a].row),n=Math.max(n,r[a].column),o=Math.max(o,r[a].row);var i=n-e,u=o-t,s=Math.max(i,u),c=Math.max(0,Math.floor(-Math.log(s)/Math.LN2));return new Coordinate((e+n)/2,(t+o)/2,0).zoomTo(c)},exports.endsWith=function(r,e){return-1!==r.indexOf(e,r.length-e.length)},exports.mapObject=function(r,e,t){var n=this,o={};for(var a in r)o[a]=e.call(t||n,r[a],a,r);return o},exports.filterObject=function(r,e,t){var n=this,o={};for(var a in r)e.call(t||n,r[a],a,r)&&(o[a]=r[a]);return o},exports.deepEqual=function(r,e){if(Array.isArray(r)){if(!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!exports.deepEqual(r[t],e[t]))return!1;return!0}if("object"==typeof r&&null!==r&&null!==e){if("object"!=typeof e)return!1;if(Object.keys(r).length!==Object.keys(e).length)return!1;for(var n in r)if(!exports.deepEqual(r[n],e[n]))return!1;return!0}return r===e},exports.clone=function(r){return Array.isArray(r)?r.map(exports.clone):"object"==typeof r&&r?exports.mapObject(r,exports.clone):r},exports.arraysIntersect=function(r,e){for(var t=0;t<r.length;t++)if(e.indexOf(r[t])>=0)return!0;return!1};var warnOnceHistory={};exports.warnOnce=function(r){warnOnceHistory[r]||("undefined"!=typeof console&&console.warn(r),warnOnceHistory[r]=!0)},exports.isCounterClockwise=function(r,e,t){return(t.y-r.y)*(e.x-r.x)>(e.y-r.y)*(t.x-r.x)},exports.calculateSignedArea=function(r){for(var e=0,t=0,n=r.length,o=n-1,a=void 0,i=void 0;t<n;o=t++)a=r[t],i=r[o],e+=(i.x-a.x)*(a.y+i.y);return e},exports.isClosedPolygon=function(r){if(r.length<4)return!1;var e=r[0],t=r[r.length-1];return!(Math.abs(e.x-t.x)>0||Math.abs(e.y-t.y)>0)&&Math.abs(exports.calculateSignedArea(r))>.01},exports.sphericalToCartesian=function(r){var e=r[0],t=r[1],n=r[2];return t+=90,t*=Math.PI/180,n*=Math.PI/180,[e*Math.cos(t)*Math.sin(n),e*Math.sin(t)*Math.sin(n),e*Math.cos(n)]},exports.parseCacheControl=function(r){var e={};if(r.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,function(r,t,n,o){var a=n||o;return e[t]=!a||a.toLowerCase(),""}),e["max-age"]){var t=parseInt(e["max-age"],10);isNaN(t)?delete e["max-age"]:e["max-age"]=t}return e};
},{"../geo/coordinate":4,"@mapbox/unitbezier":2,"point-geometry":13}],13:[function(_dereq_,module,exports){
"use strict";function Point(t,n){this.x=t,this.y=n}module.exports=Point,Point.prototype={clone:function(){return new Point(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,n){return Math.atan2(this.x*n-this.y*t,this.x*t+this.y*n)},_matMult:function(t){var n=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y;return this.x=n,this.y=i,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var n=Math.cos(t),i=Math.sin(t),s=n*this.x-i*this.y,r=i*this.x+n*this.y;return this.x=s,this.y=r,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},Point.convert=function(t){return t instanceof Point?t:Array.isArray(t)?new Point(t[0],t[1]):t};
},{}],14:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("mapbox-gl/src/util/util"),ajax=_dereq_("mapbox-gl/src/util/ajax"),Evented=_dereq_("mapbox-gl/src/util/evented"),loadArcGISMapServer=_dereq_("./load_arcgis_mapserver"),TileBounds=_dereq_("mapbox-gl/src/source/tile_bounds"),_templateRe=/\{ *([\w_]+) *\}/g,_template=function(e,t){return e.replace(_templateRe,function(e,i){var r=t[i];if(void 0===r)throw new Error("No value provided for variable "+e);return"function"==typeof r&&(r=r(t)),r})},_getSubdomain=function(e,t){if(t){return t[Math.abs(e.x+e.y)%t.length]}return null},ArcGISTiledMapServiceSource=function(e){function t(t,i,r,o){e.call(this),this.id=t,this.dispatcher=r,this.setEventedParent(o),this.type="arcgisraster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.tileSize=512,this._loaded=!1,this.options=i,util.extend(this,util.pick(i,["url","scheme","tileSize"]))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),loadArcGISMapServer(this.options,function(t,i){if(t)return e.fire("error",t);util.extend(e,i),e.setBounds(i.bounds),e.fire("data",{dataType:"source",sourceDataType:"metadata"}),e.fire("data",{dataType:"source",sourceDataType:"content"})})},t.prototype.onAdd=function(e){var t=this.url.split("?")[0];this.tileUrl=t+" /tile/{z}/{y}/{x}",new RegExp(/tiles.arcgis(online)?\.com/g).test(this.url)&&(this.tileUrl=this.tileUrl.replace("://tiles","://tiles{s}"),this.subdomains=["1","2","3","4"]),this.token&&(this.tileUrl+="?token="+this.token),this.load(),this.map=e},t.prototype.setBounds=function(e){this.bounds=e,e&&(this.tileBounds=new TileBounds(e,this.minzoom,this.maxzoom))},t.prototype.serialize=function(){return{type:"arcgisraster",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds}},t.prototype.hasTile=function(e){return!this.tileBounds||this.tileBounds.contains(e,this.maxzoom)},t.prototype.loadTile=function(e,t){function i(i,r){if(delete e.request,e.aborted)return this.state="unloaded",t(null);if(i)return this.state="errored",t(i);this.map._refreshExpiredTiles&&e.setExpiryData(r),delete r.cacheControl,delete r.expires;var o=this.map.painter.gl;e.texture=this.map.painter.getTileTexture(r.width),e.texture?(o.bindTexture(o.TEXTURE_2D,e.texture),o.texSubImage2D(o.TEXTURE_2D,0,0,0,o.RGBA,o.UNSIGNED_BYTE,r)):(e.texture=o.createTexture(),o.bindTexture(o.TEXTURE_2D,e.texture),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.map.painter.extTextureFilterAnisotropic&&o.texParameterf(o.TEXTURE_2D,this.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,this.map.painter.extTextureFilterAnisotropicMax),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,r),e.texture.size=r.width),o.generateMipmap(o.TEXTURE_2D),e.state="loaded",t(null)}var r=e.coord,o=_template(this.tileUrl,util.extend({s:_getSubdomain(r,this.subdomains),z:this._lodMap&&this._lodMap[r.z]?this._lodMap[r.z]:r.z,x:r.x,y:r.y},this.options));e.request=ajax.getImage(o,i.bind(this))},t.prototype.abortTile=function(e){e.request&&(e.request.abort(),delete e.request)},t.prototype.unloadTile=function(e){e.texture&&this.map.painter.saveTileTexture(e.texture)},t}(Evented);module.exports=ArcGISTiledMapServiceSource;
},{"./load_arcgis_mapserver":16,"mapbox-gl/src/source/tile_bounds":7,"mapbox-gl/src/util/ajax":8,"mapbox-gl/src/util/evented":11,"mapbox-gl/src/util/util":12}],15:[function(_dereq_,module,exports){
var ArcGISTiledMapServiceSource=_dereq_("./arcgis_tiled_map_service_source");module.exports=ArcGISTiledMapServiceSource;
},{"./arcgis_tiled_map_service_source":14}],16:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("mapbox-gl/src/util/util"),ajax=_dereq_("mapbox-gl/src/util/ajax"),browser=_dereq_("mapbox-gl/src/util/browser"),SphericalMercator=_dereq_("@mapbox/sphericalmercator"),MercatorZoomLevels={0:156543.033928,1:78271.5169639999,2:39135.7584820001,3:19567.8792409999,4:9783.93962049996,5:4891.96981024998,6:2445.98490512499,7:1222.99245256249,8:611.49622628138,9:305.748113140558,10:152.874056570411,11:76.4370282850732,12:38.2185141425366,13:19.1092570712683,14:9.55462853563415,15:4.77731426794937,16:2.38865713397468,17:1.19432856685505,18:.597164283559817,19:.298582141647617,20:.14929107082381,21:.07464553541191,22:.0373227677059525,23:.0186613838529763},_withinPercentage=function(e,r,a){return Math.abs(e/r-1)<a};module.exports=function(e,r){var a=function(e,a){if(e)return r(e);var l=util.pick(a,["tileInfo","initialExtent","fullExtent","spatialReference","tileServers","documentInfo"]);l._lodMap={};var t=a.spatialReference.latestWkid||a.spatialReference.wkid;if(102100===t||3857===t){var i=a.fullExtent;if(i&&i.spatialReference&&102100===i.spatialReference.wkid){var n=[i.xmin,i.ymin,i.xmax,i.ymax],o=new SphericalMercator({size:256}),c=o.convert(n);l.bounds=c}var u=a.tileInfo.lods,s=MercatorZoomLevels;l.minzoom=u[0].level,l.maxzoom=u[u.length-1].level;for(var f=0;f<u.length;f++){var m=u[f];for(var v in s){var p=s[v];if(_withinPercentage(m.resolution,p,.1)){l._lodMap[v]=m.level;break}}}}else r(new Error("non-mercator spatial reference"));r(null,l)};e.url?ajax.getJSON(e.url,a):browser.frame(a.bind(null,null,e))};
},{"@mapbox/sphericalmercator":1,"mapbox-gl/src/util/ajax":8,"mapbox-gl/src/util/browser":9,"mapbox-gl/src/util/util":12}]},{},[15])(15)
});


//# sourceMappingURL=mapbox-gl-arcgis-tiled-map-service.js.map
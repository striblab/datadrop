!function e(o,r,t){function a(i,l){if(!r[i]){if(!o[i]){var c="function"==typeof require&&require;if(!l&&c)return c(i,!0);if(n)return n(i,!0);throw new Error("Cannot find module '"+i+"'")}var s=r[i]={exports:{}};o[i][0].call(s.exports,function(e){var r=o[i][1][e];return a(r||e)},s,s.exports,e,o,r,t)}return r[i].exports}for(var n="function"==typeof require&&require,i=0;i<t.length;i++)a(t[i]);return a}({1:[function(e,o,r){$.urlParam=function(e){var o=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=o?o[1]||0:null};var t=$.urlParam("chart");null!=t&&($(".slide").hide(),$("#"+t).show()),d3.json("./shapefiles/minneapolis_boe.json",function(e,o){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var r=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.266667,44.983333],zoom:10,minZoom:3,hash:!1});r.addControl(new mapboxgl.NavigationControl),r.scrollZoom.disable();var t=new MapboxGeocoder({accessToken:mapboxgl.accessToken});document.getElementById("geocoder").appendChild(t.onAdd(r)),r.on("load",function(){r.addSource("districts",{type:"geojson",data:o}),r.addLayer({id:"district-layer1",interactive:!0,source:"districts",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.7,"fill-color":{property:"ac",stops:[[70,"#f1eef6"],[80,"#bdd7e7"],[90,"#6baed6"],[100,"#08519c"]]},"fill-outline-color":"rgba(255, 255, 255, 0.1)"}},"place-neighbourhood");var e=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});r.on("mousemove",function(o){var t=r.queryRenderedFeatures(o.point,{layers:["district-layer1"]});if(r.getCanvas().style.cursor=t.length?"pointer":"",!t.length)return void e.remove();var a=t[0];e.setLngLat(o.lngLat).setHTML("<div>"+a.properties.Name+"</div><div>"+a.properties.ac+"% with AC").addTo(r)})});var a=new mapboxgl.Map({container:"map2",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.266667,44.983333],zoom:10,minZoom:3,hash:!1});a.addControl(new mapboxgl.NavigationControl),a.scrollZoom.disable();var n=new MapboxGeocoder({accessToken:mapboxgl.accessToken});document.getElementById("geocoder2").appendChild(n.onAdd(a)),a.on("load",function(){a.addSource("districts",{type:"geojson",data:o}),a.addLayer({id:"district-layer2",interactive:!0,source:"districts",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.7,"fill-color":{property:"util",stops:[[50,"#fee5d9"],[60,"#fcae91"],[70,"#fb6a4a"],[80,"#de2d26"],[90,"#a50f15"]]},"fill-outline-color":"rgba(255, 255, 255, 0.1)"}},"place-neighbourhood");var e=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});a.on("mousemove",function(o){var r=a.queryRenderedFeatures(o.point,{layers:["district-layer2"]});if(a.getCanvas().style.cursor=r.length?"pointer":"",!r.length)return void e.remove();var t=r[0];e.setLngLat(o.lngLat).setHTML("<div>"+t.properties.Name+"</div><div>"+t.properties.util+"% of buildings used").addTo(a)})});var i=new mapboxgl.Map({container:"map3",style:"mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf",center:[-93.266667,44.983333],zoom:10,minZoom:3,hash:!1});i.addControl(new mapboxgl.NavigationControl),i.scrollZoom.disable();var l=new MapboxGeocoder({accessToken:mapboxgl.accessToken});document.getElementById("geocoder3").appendChild(l.onAdd(i)),i.on("load",function(){i.addSource("districts",{type:"geojson",data:o}),i.addLayer({id:"district-layer3",interactive:!0,source:"districts",layout:{},type:"fill",paint:{"fill-antialias":!0,"fill-opacity":.7,"fill-color":{property:"since",stops:[[30,"#f2f0f7"],[50,"#cbc9e2"],[60,"#9e9ac8"],[70,"#756bb1"],[80,"#54278f"]]},"fill-outline-color":"rgba(255, 255, 255, 0.1)"}},"place-neighbourhood");var e=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});i.on("mousemove",function(o){var r=i.queryRenderedFeatures(o.point,{layers:["district-layer3"]});if(i.getCanvas().style.cursor=r.length?"pointer":"",!r.length)return void e.remove();var t=r[0];e.setLngLat(o.lngLat).setHTML("<div>"+t.properties.Name+"</div><div>"+t.properties.since+" average years since built").addTo(i)})}),$("input").attr("placeholder","Search by address, neighborhood or keyword"),$(".geocoder-icon-close").on("click",function(){r.flyTo({center:[-93.266667,44.983333],zoom:10}),a.flyTo({center:[-93.266667,44.983333],zoom:10}),i.flyTo({center:[-93.266667,44.983333],zoom:10})}),$("input").on("keyup search",function(e){var o=$("#filter_box").val();null!=o&&""!=o||(r.flyTo({center:[-93.266667,44.983333],zoom:10}),a.flyTo({center:[-93.266667,44.983333],zoom:10}),i.flyTo({center:[-93.266667,44.983333],zoom:10}))})})},{}]},{},[1]);
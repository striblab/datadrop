!function t(i,e,o){function r(y,n){if(!e[y]){if(!i[y]){var a="function"==typeof require&&require;if(!n&&a)return a(y,!0);if(s)return s(y,!0);throw new Error("Cannot find module '"+y+"'")}var l=e[y]={exports:{}};i[y][0].call(l.exports,function(t){var e=i[y][1][t];return r(e||t)},l,l.exports,t,i,e,o)}return e[y].exports}for(var s="function"==typeof require&&require,y=0;y<o.length;y++)r(o[y]);return r}({1:[function(t,i,e){d3.json("./data/events.json",function(t,i){var e=i.events;d3.json("./data/grant.geojson",function(t,i){d3.json("./data/polk.geojson",function(t,o){d3.json("./data/grant_tickets.json",function(t,r){d3.json("./data/polk_tickets.json",function(t,s){d3.json("./data/vehicle_tracts.json",function(t,y){d3.json("./shapefiles/vehicleblocks.json",function(t,n){d3.json("./shapefiles/minneapolis_shape.json",function(t,a){d3.json("./shapefiles/minneapolis_neighborhoods.json",function(t,a){function l(t,i){w.textContent=e[t].title,$("#location-description").html(e[t].description),$(".stat").html(e[t].stat),$(".trackDot").removeClass("current"),$("#d"+t).addClass("current"),0==t&&(d.setLayoutProperty("polk-tows","visibility","visible"),d.setLayoutProperty("grant-tows","visibility","visible"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tows").show()),1==t&&(d.setLayoutProperty("grant-tows","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tows").show()),2==t?(d.setLayoutProperty("polk-tows","visibility","visible"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tows").show()):3==t?(d.setLayoutProperty("grant-tickets","visibility","visible"),d.setLayoutProperty("polk-tickets","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tickets").show()):4==t?(d.setLayoutProperty("grant-tickets","visibility","visible"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tickets").show()):5==t?(d.setLayoutProperty("polk-tickets","visibility","visible"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#tickets").show()):6==t?(d.setLayoutProperty("states-layer-0","visibility","visible"),d.setLayoutProperty("states-layer-1","visibility","visible"),d.setLayoutProperty("states-layer-2","visibility","visible"),d.setLayoutProperty("states-layer-3","visibility","visible"),d.setLayoutProperty("states-layer-4","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),$(".legends").hide(),$("#scale").show()):7==t?(d.setLayoutProperty("states-layer-0","visibility","visible"),d.setLayoutProperty("states-layer-1","visibility","visible"),d.setLayoutProperty("states-layer-2","visibility","visible"),d.setLayoutProperty("states-layer-3","visibility","visible"),d.setLayoutProperty("states-layer-4","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),$(".legends").hide(),$("#scale").show()):8==t?(d.setLayoutProperty("states-layer-0","visibility","visible"),d.setLayoutProperty("states-layer-1","visibility","visible"),d.setLayoutProperty("states-layer-2","visibility","visible"),d.setLayoutProperty("states-layer-3","visibility","visible"),d.setLayoutProperty("states-layer-4","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","visible"),d.setLayoutProperty("grant-tows","visibility","visible"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),$(".legends").hide(),$("#scale").show()):9==t?(d.setLayoutProperty("ticketing-rate-0","visibility","visible"),d.setLayoutProperty("ticketing-rate-1","visibility","visible"),d.setLayoutProperty("ticketing-rate-2","visibility","visible"),d.setLayoutProperty("ticketing-rate-3","visibility","visible"),d.setLayoutProperty("ticketing-rate-4","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("towing-rate-0","visibility","none"),d.setLayoutProperty("towing-rate-1","visibility","none"),d.setLayoutProperty("towing-rate-2","visibility","none"),d.setLayoutProperty("towing-rate-3","visibility","none"),d.setLayoutProperty("towing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$(".legends").hide(),$("#scale").show()):10==t&&(d.setLayoutProperty("towing-rate-0","visibility","visible"),d.setLayoutProperty("towing-rate-1","visibility","visible"),d.setLayoutProperty("towing-rate-2","visibility","visible"),d.setLayoutProperty("towing-rate-3","visibility","visible"),d.setLayoutProperty("towing-rate-4","visibility","visible"),d.setLayoutProperty("polk-tows","visibility","none"),d.setLayoutProperty("grant-tows","visibility","none"),d.setLayoutProperty("polk-tickets","visibility","none"),d.setLayoutProperty("grant-tickets","visibility","none"),d.setLayoutProperty("ticketing-rate-0","visibility","none"),d.setLayoutProperty("ticketing-rate-1","visibility","none"),d.setLayoutProperty("ticketing-rate-2","visibility","none"),d.setLayoutProperty("ticketing-rate-3","visibility","none"),d.setLayoutProperty("ticketing-rate-4","visibility","none"),d.setLayoutProperty("states-layer-0","visibility","none"),d.setLayoutProperty("states-layer-1","visibility","none"),d.setLayoutProperty("states-layer-2","visibility","none"),d.setLayoutProperty("states-layer-3","visibility","none"),d.setLayoutProperty("states-layer-4","visibility","none"),$("#toggle").attr("class","play myButton2"),$("#toggle").html("&#9658;"),$(".legends").hide(),$("#scale").show()),$(window).width()>500&&d.flyTo({center:[e[t].longitude,e[t].latitude],zoom:e[t].zoom,bearing:e[t].bearing,pitch:e[t].pitch})}function p(t,i){h[t]=window.setTimeout(function(){l(t)},i)}function u(){for(var t=0;t<e.length;t++)clearTimeout(h[t])}var v=i,b=o,c=r,L=s,g=new mapboxgl.LngLat(-93.716125,44.643254),P=new mapboxgl.LngLat(-92.763062,45.350215),k=new mapboxgl.LngLatBounds(g,P);mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var d=new mapboxgl.Map({container:"map",style:"mapbox://styles/shadowflare/cilea5110001ra8ktm7409xze",center:[-93.332291,44.960911],zoom:11,minZoom:10,maxBounds:k});d.addControl(new MapboxGeocoder({accessToken:mapboxgl.accessToken})),d.addControl(new mapboxgl.NavigationControl);var w=document.getElementById("location-title"),f=document.getElementById("location-description"),h=[];w.textContent=e[e.length-1].title,f.textContent=e[e.length-1].description,d.on("load",function(){d.addSource("mpls",{type:"geojson",data:n}),d.addSource("tracts",{type:"geojson",data:y}),[["#F7F7F7",0],["#CCCCCC",10],["#969696",30],["#636363",50],["#252525",70]].forEach(function(t,i){d.addLayer({id:"states-layer-"+i,interactive:!0,type:"fill",source:"mpls",filter:[">=","CarsBlock",t[1]],paint:{"fill-opacity":.5,"fill-color":t[0],"fill-outline-color":"rgba(51, 51, 51, 1)"}})}),[["#F7F7F7",0],["#CCCCCC",10],["#969696",30],["#636363",50],["#252525",70]].forEach(function(t,i){d.addLayer({id:"ticketing-rate-"+i,interactive:!0,type:"fill",source:"tracts",filter:[">=","TagsPer1k",t[1]],paint:{"fill-opacity":.5,"fill-color":t[0],"fill-outline-color":"rgba(51, 51, 51, 1)"}})}),[["#F7F7F7",0],["#CCCCCC",5],["#969696",15],["#636363",25],["#252525",30]].forEach(function(t,i){d.addLayer({id:"towing-rate-"+i,interactive:!0,type:"fill",source:"tracts",filter:[">=","TowsPer1k",t[1]],paint:{"fill-opacity":.5,"fill-color":t[0],"fill-outline-color":"rgba(51, 51, 51, 1)"}})}),d.addSource("grant",{type:"geojson",data:v}),d.addSource("polk",{type:"geojson",data:b}),d.addLayer({id:"grant-tows",type:"circle",source:"grant",paint:{"circle-color":"rgba(37,37,37, 0.45)","circle-radius":2.5}}),d.addLayer({id:"polk-tows",type:"circle",source:"polk",paint:{"circle-color":"rgba(37,37,37, 0.45)","circle-radius":2.5}}),d.addSource("grantTickets",{type:"geojson",data:c}),d.addSource("polkTickets",{type:"geojson",data:L}),d.addLayer({id:"grant-tickets",type:"circle",source:"grantTickets",paint:{"circle-color":"rgba(194,42,34, 0.45)","circle-radius":2.5}}),d.addLayer({id:"polk-tickets",type:"circle",source:"polkTickets",paint:{"circle-color":"rgba(194,42,34, 0.45)","circle-radius":2.5}}),d.addSource("mplsnb",{type:"geojson",data:a}),d.addLayer({id:"shape-layer",interactive:!0,type:"fill",source:"mplsnb",paint:{"fill-antialias":!0,"fill-opacity":.1,"fill-color":"#888","fill-outline-color":"rgba(51, 51, 51, 1)"}});var t=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});d.on("mousemove",function(i){var e=d.queryRenderedFeatures(i.point,{layers:["shape-layer"]});if(d.getCanvas().style.cursor=e.length?"pointer":"",!e.length)return void t.remove();var o=e[0];t.setLngLat(i.lngLat).setHTML(o.properties.Name).addTo(d)}),l(0),$("#info").show();var i=0;$(document).ready(function(){$("#toggle").bind("click",function(){if("play myButton2"==$(this).attr("class")){$(this).attr("class","pause myButton2"),$(this).html("&#9724;");for(var t=0;t<e.length;t++)p(t,5e3*t),i<e.length&&i++}else $(this).attr("class","play myButton2"),$(this).html("&#9658;"),u()})}),$(".previous").click(function(){i>0&&(i--,u(),l(i))}),$(".next").click(function(){i<e.length-1&&(u(),i++,l(i))}),$(".trackDot").click(function(){$("#toggle").attr("class","play myButton2"),$("#toggle").html("&#9658;"),$(".trackDot").removeClass("current"),$(this).addClass("current"),u(),i=Number($(this).attr("index")),l(Number($(this).attr("index")))}),$(window).width()<=500?d.flyTo({center:[-93.266667,44.983333],zoom:5}):d.flyTo({center:[-93.332291,44.960911],zoom:11}),$(window).resize(function(){$(window).width()<=500?d.flyTo({center:[-93.266667,44.983333],zoom:5}):d.flyTo({center:[-93.332291,44.960911],zoom:11})}),$(".zoom").click(function(){d.flyTo({center:[-93.332291,44.960911],zoom:11})}),$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by address")})})})})})})})})})})},{}]},{},[1]);
!function t(e,n,o){function r(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return r(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){d3.json("./data/rsr.json",function(t,e){var n=e.rsr,o="";d3.select("#deviceList").selectAll(".list").data(n).enter().append("div").attr("class","list").attr("data",function(t){return t.id}).on("click",function(t,e){$("#manufName").html(t.manuf),$("#device").html(t.deviceName),$("#reports").html(d3.format(",")(t.numEvents)),$("#lag").html(d3.format(",")(t.lag)),$("#date").html(d3.time.format("%B %e, %Y")(new Date(t.receiveDate))),$("#FDA").attr("href",t.maudeLink)}).html(function(t){return o!=t.combinedName?(o=t.combinedName,"<button class='button'>"+t.combinedName+"</button>"):null}),$(".button:first").click(),$(".button:first").addClass("selected"),$(".button").click(function(){$(".button").removeClass("selected"),$(this).addClass("selected")}),$(document).ready(function(){$("#filter_box").keyup(function(t){$(".button").hide(),$(".button").removeClass("selected");var e=String($("#filter_box").val());$(".button").each(function(){$(this).text().toUpperCase().indexOf(e.toUpperCase())!=-1&&$(this).show()})}),$(".company").click(function(t){$(".button").hide(),$(".button").removeClass("selected"),$(".company").removeClass("selected"),$(this).addClass("selected");var e=String($(this).attr("company"));$(".button").each(function(){$(this).text().toUpperCase().indexOf(e.toUpperCase())!=-1&&$(this).show()})}),$(".reset").click(function(){$(".button").show(),$(".company").removeClass("selected")})})})},{}]},{},[1]);
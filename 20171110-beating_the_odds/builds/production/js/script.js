!function t(e,r,i){function c(a,s){if(!r[a]){if(!e[a]){var n="function"==typeof require&&require;if(!s&&n)return n(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var d=r[a]={exports:{}};e[a][0].call(d.exports,function(t){var r=e[a][1][t];return c(r||t)},d,d.exports,t,e,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)c(i[a]);return c}({1:[function(t,e,r){function i(t){this.dd=t,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}d3.csv("./data/scores.csv",function(t){return{id:t.SchoolID,district:t.districtname_new,school:t.SCHOOLNAME_NEW,type:t.grds,metro:t.Metro7county,region:t.Location,location:t.SchoolLocationCountyName,county:t.SchoolLocationCountyName,year:String(t.datayr),subject:t.subject,profpct:+t.PctProf,freelunch:+t.FreeLunch,povertypct:+t.PctPoverty,povertycat:t.PovertyCategory,minoritypct:+t.pctminority,overallcat:t.Overall,predicted:+t.Predicted,residual:+t.residual,category:t.CategoryName,enrollment:t.K12Enr}},function(t,e){function r(t,e){var r=0,i=0,c=0,o=0;if(1==e)for(var s=0;s<a.length;s++)"M"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"Medium"==a[s].povertycat&&c++,"High"==a[s].povertycat&&i++,"Low"==a[s].povertycat&&o++);else for(var s=0;s<a.length;s++)a[s].district==t&&"M"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"Medium"==a[s].povertycat&&c++,"High"==a[s].povertycat&&i++,"Low"==a[s].povertycat&&o++);$("#failP").html(d3.format("%")(i/r)),$("#metP").html(d3.format("%")(c/r)),$("#betterP").html(d3.format("%")(o/r))}function i(t,e){var r=0,i=0,c=0,o=0;if(1==e)for(var s=0;s<a.length;s++)"M"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"About as expected"==a[s].category&&c++,"Falling short"==a[s].category&&i++,"Better than expected"==a[s].category&&o++);else for(var s=0;s<a.length;s++)a[s].district==t&&"M"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"About as expected"==a[s].category&&c++,"Falling short"==a[s].category&&i++,"Better than expected"==a[s].category&&o++);$("#failM").html(d3.format("%")(i/r)),$("#metM").html(d3.format("%")(c/r)),$("#betterM").html(d3.format("%")(o/r))}function c(t,e){var r=0,i=0,c=0,o=0;if(1==e)for(var s=0;s<a.length;s++)"R"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"About as expected"==a[s].category&&c++,"Falling short"==a[s].category&&i++,"Better than expected"==a[s].category&&o++);else for(var s=0;s<a.length;s++)a[s].district==t&&"R"==a[s].subject&&"16 to 17"==a[s].year&&(r++,"About as expected"==a[s].category&&c++,"Falling short"==a[s].category&&i++,"Better than expected"==a[s].category&&o++);$("#failR").html(d3.format("%")(i/r)),$("#metR").html(d3.format("%")(c/r)),$("#betterR").html(d3.format("%")(o/r))}function o(t,e){var r=[];r[0]="x";var i=1,c=[],o=[];c[0]="Reading",o[0]="Math",dataRP=0,dataMP=0;for(var s=["M Score",null,null,null,null],n=["M Predicted",null,null,null,null],d=["R Score",null,null,null,null],l=["R Predicted",null,null,null,null],h=0;h<a.length;h++)t==a[h].school&&e==a[h].district&&(!0,"R"==a[h].subject&&(c[i]=a[h].profpct,r[i]=a[h].year,i++,dataRP=a[h].predicted));d[1]=c[c.length-1],l[1]=dataRP,i=1;for(var h=0;h<a.length;h++)t==a[h].school&&e==a[h].district&&(!0,"M"==a[h].subject&&(o[i]=a[h].profpct,i++,dataMP=a[h].predicted));return s[1]=o[o.length-1],n[1]=dataMP,c.length>o.length?o[o.length]=0:c.length<o.length&&(c[c.length]=0),[d,l,s,n]}var a=e,s="",n="All Districts";d3.select("#listedSchools").selectAll(".district").data(a.filter(function(t){return"16 to 17"==t.year&&"R"==t.subject})).enter().append("div").attr("class",function(t){for(var e,r=0;r<a.length;r++)a[r].school==t.school&&a[r].district==t.district&&"M"==a[r].subject&&"16 to 17"==a[r].year&&(e=a[r].category);return"switch district "+("Better than expected"==e&&"Better than expected"==t.category?"bothScores":"Better than expected"==t.category?"readingScores":"mathScores")}).attr("categoryr",function(t){return"About as expected"==t.category?"expected":"Better than expected"==t.category?"better":"Falling short"==t.category&&"worse",t.category}).attr("categoryo",function(t){var e;return"About as expected"==t.categoryO?e="expected":"Better than expected"==t.categoryO?e="better":"Falling short"==t.categoryO&&(e="worse"),e}).attr("categoryp",function(t){var e;return"High"==t.povertycat?e="High":"Medium"==t.povertycat?e="Medium":"Low"==t.povertycat&&(e="Low"),e}).attr("categorym",function(t){for(var e,r=0;r<a.length;r++)a[r].school==t.school&&a[r].district==t.district&&"M"==a[r].subject&&"16 to 17"==a[r].year&&(e=a[r].category);return e}).attr("district",function(t){return t.district}).attr("id",function(t){return"s"+t.id}).attr("latitude",function(t){return t.latitude}).attr("longitude",function(t){return t.longitude}).on("click",function(t){}).html(function(t){s!=t.district&&(s=t.district);for(var e,r=0;r<a.length;r++)a[r].school==t.school&&a[r].district==t.district&&"M"==a[r].subject&&"16 to 17"==a[r].year&&(e=a[r].category);return"<div class='schoolName "+("Better than expected"==e&&"Better than expected"==t.category?"both":"Better than expected"==t.category?"reading":"math")+"''>"+t.school+"</div><div class='districtName'>"+s+" ("+t.county+")</div><div class='bigPCT'>READING</div><div class='bigPCT'>MATH</div><div class='category' id='categoryR'>"+t.category+"</div><div class='category' id='categoryM'>"+e+"</div><div class='bigPCT' id='rPCT'>"+d3.format("%")(o(t.school,t.district)[1][1])+" proficiency</div><div class='bigPCT' id='mPCT'>"+d3.format("%")(o(t.school,t.district)[2][1])+" proficiency</div><div class='bigPCT' id='rPCTP'>"+d3.format("%")(o(t.school,t.district)[0][1])+" predicted</div><div class='bigPCT' id='mPCTP'>"+d3.format("%")(o(t.school,t.district)[3][1])+" predicted</div>"}),$("#districtSelect").click(function(){}),$(".district").click(function(){$("li.district").removeClass("selected"),$(".cell").removeClass("selected2"),$(this).addClass("selected"),$("#thisDistrict").html($(this).text()),r($(this).text(),!1),i($(this).text(),!1),c($(this).text(),!1),n=$(this).text()}),$(".cell").click(function(){$(".cell").removeClass("selected2"),$(this).addClass("selected2"),$(".switch").hide(),"All Districts"==n?"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"']").show():"M"==$(this).attr("type")?$(".switch[categorym='"+$(this).attr("data")+"']").show():"O"==$(this).attr("type")?$(".switch[categoryo='"+$(this).attr("data")+"']").show():"P"==$(this).attr("type")&&$(".switch[categoryp='"+$(this).attr("data")+"']").show():"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"'][district='"+n+"']").show():"M"==$(this).attr("type")?$(".switch[categorym='"+$(this).attr("data")+"'][district='"+n+"']").show():"O"==$(this).attr("type")?$(".switch[categoryo='"+$(this).attr("data")+"'][district='"+n+"']").show():"P"==$(this).attr("type")&&$(".switch[categoryp='"+$(this).attr("data")+"'][district='"+n+"']").show()}),$("#filter_box").on("keyup search",function(t){$(".switch").hide();var e=$("#filter_box").val();$(".switch").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})}),$("#filter2 input").on("keyup search",function(t){$(".district").hide();var e=$("#filter2 input").val();$(".district").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})}),$(".zoom").on("click keyup search",function(){return $(".switch").show(),$("li.district").show(),$("#listedSchools").animate({scrollTop:0},800),!1}),$(".legendary").on("click",function(){$(".switch").hide(),$("li.district").hide(),$("."+$(this).attr("data")).show()})}),i.prototype={initEvents:function(){var t=this;t.dd.on("click",function(t){return $(this).toggleClass("active"),!1}),t.opts.on("click",function(){var e=$(this);t.val=e.text(),t.index=e.index(),t.placeholder.text(t.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new i($("#dd")),new i($("#ddY"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})})},{}]},{},[1]);
!function t(e,o,a){function r(n,l){if(!o[n]){if(!e[n]){var s="function"==typeof require&&require;if(!l&&s)return s(n,!0);if(i)return i(n,!0);throw new Error("Cannot find module '"+n+"'")}var d=o[n]={exports:{}};e[n][0].call(d.exports,function(t){var o=e[n][1][t];return r(o||t)},d,d.exports,t,e,o,a)}return o[n].exports}for(var i="function"==typeof require&&require,n=0;n<a.length;n++)r(a[n]);return r}({1:[function(t,e,o){$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var a=$.urlParam("chart");null!=a&&($(".slide").hide(),$("#"+a).show()),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartMethod",padding:t,data:{columns:[["% of deaths",.48,.25,.2,.08]],type:"bar",order:"desc",labels:{format:{}}},legend:{show:!1},point:{show:!1},color:{pattern:["#333"]},axis:{y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.25,.5,.75,1],format:d3.format("%.0f")}},x:{type:"category",padding:{right:0,left:0},categories:["Firearm","Suffocation","Poisoning","Other"],tick:{multiline:!1}}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}(),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartTrend",padding:t,data:{x:"x",columns:[["x",1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],["Suicides",442,470,444,443,459,541,546,488,515,546,511,513,498,494,520,491,472,459,437,440,480,497,497,524,547,554,572,596,584,606,683,656,678,686,730,745]],type:"area",labels:{format:{}}},legend:{show:!1},point:{show:!1},color:{pattern:["#333"]},axis:{y:{min:0,padding:{bottom:0,top:0},tick:{count:5,values:[0,150,300,450,600,750],format:d3.format(".0f")}},x:{padding:{right:0,left:0},tick:{count:6,values:[1981,1988,1995,2e3,2007,2016],multiline:!1,format:d3.format(".0f")}}},grid:{x:{lines:[{value:2e3,text:"",position:"start",class:"powerline"}]}}})}(),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartRates",padding:t,data:{x:"x",columns:[["x",1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],["MN Rate",10.75,11.38,10.72,10.65,10.97,12.86,12.89,11.36,11.87,12.45,11.51,11.41,10.93,10.72,11.16,10.42,9.91,9.54,8.97,8.92,9.63,9.91,9.85,10.32,10.71,10.76,11.02,11.39,11.09,11.43,12.77,12.19,12.51,12.57,13.3,13.5],["US Rate",12.31,12.44,12.33,12.58,12.51,12.99,12.82,12.48,12.3,12.46,12.28,11.98,12.04,11.89,11.79,11.53,11.24,11.12,10.48,10.4,10.71,10.95,10.76,10.97,10.9,10.98,11.27,11.61,11.77,12.08,12.32,12.53,12.55,12.94,13.26,13.3]],type:"line",labels:{format:{}}},legend:{show:!1},color:{pattern:["#333","#aaa"]},axis:{y:{max:15,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,5,10,15],format:d3.format(".1f")}},x:{padding:{right:0,left:0},tick:{count:6,values:[1981,1988,1995,2e3,2007,2016],multiline:!1,format:d3.format(".0f")}}},grid:{x:{lines:[{value:2e3,text:"",position:"start",class:"powerline"}]}}})}(),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartAge",padding:t,data:{columns:[["Suicides",1317,4813,4890,3486,2333]],type:"bar",labels:{format:{}}},legend:{show:!1},color:{pattern:["#333"]},axis:{y:{max:5e3,min:0,padding:{bottom:0,top:0},tick:{count:6,values:[0,1e3,2e3,3e3,4e3,5e3],format:d3.format(",")}},x:{type:"category",padding:{right:0,left:0},tick:{rotate:-60,multiline:!1},categories:["0-19 yrs","20-34 yrs","35-49 yrs","50-64 yrs","65+ yrs"],height:40}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}(),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartAgeTrend",padding:t,data:{x:"x",columns:[["x",1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],["0-19 yrs",3.347629232,3.615509768,2.573972458,2.291607895,4.132300364,6.786768516,5.262209522,4.409414099,4.831147499,3.454167799,3.667061385,3.916854224,2.901192092,2.426909573,3.502749658,2.964852755,3.072506143,2.891486055,2.448399971,2.087226591,2.564847312,2.437137519,2.658863602,2.595469433,3.880245739,2.330947997,2.541181254,1.766000672,2.263490047,2.724965082,3.003947047,3.155793089,3.08864264,4.630207756,2.945720885,3.344509569],["20-34 yrs",16.32781195,14.01564361,12.42341501,16.09239345,13.37107933,14.22687599,17.47629721,14.89715132,15.13184184,16.74339962,16.97598128,14.69978025,15.92181166,15.98425694,15.07123834,14.19590547,11.29871195,13.84958942,11.21821758,12.23455037,11.78437392,13.26179879,13.05891929,13.40779061,13.1556252,13.93401855,13.29115861,13.95537862,12.39789217,14.1892037,15.60275569,12.34850217,15.75064021,14.20805813,18.34481233,18.02595918],["35-49 yrs",12.83651385,16.1934418,14.24417392,12.36753536,11.39929727,14.84401522,13.88069542,15.41707334,13.37379764,16.09038831,14.19055587,13.55865853,14.56780378,13.674006,13.92698959,13.79787354,14.48349754,13.34323889,13.40398421,12.58884578,13.94979744,13.481874,14.13613094,15.55724092,14.37385286,14.45218934,14.73413978,17.29796899,15.56850231,16.64678556,16.97579911,18.6799144,15.51035365,16.12258638,18.77251235,18.11609998],["50-64 yrs",12.5169841,15.37051167,16.50743484,12.33453502,17.05109708,17.16019514,14.38541168,13.13710256,17.58883296,15.66573791,12.72213024,15.29113224,9.916980704,12.46938938,13.91172164,13.15386357,11.89894464,9.166056869,9.656732425,10.66786446,10.90662315,11.63222022,11.20148357,12.32443661,13.82219361,14.77029416,16.17138671,15.45885299,16.34196617,15.42103798,18.18439536,17.93289786,17.93198886,18.89553367,17.26975807,18.65153839],["65+ yrs",13.2403656,14.83477271,16.5892174,15.21203233,15.27266541,17.20436685,18.30437342,12.31832799,13.8426953,16.05941985,13.50178764,15.27886595,15.097864,13.55776651,14.29698454,12.14944155,12.76971772,11.18585295,8.441682326,8.062538423,8.84678044,10.61329946,8.712662951,7.986673665,10.82335,8.262598079,11.38485004,11.10289801,11.02741206,10.10069958,13.69773103,10.82258495,13.50083189,11.03153866,11.41945005,12.11738749]],type:"line",labels:{format:{}}},legend:{show:!1},color:{pattern:["#d9d9d9","#cccccc","#969696","#a50f15","#252525"]},axis:{y:{max:20,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,5,10,15,20],format:d3.format(",.1f")}},x:{padding:{right:0,left:0},tick:{count:6,values:[1981,1988,1995,2e3,2007,2016],multiline:!1}}},grid:{x:{lines:[{value:2e3,text:"",position:"start",class:"powerline"}]}}})}(),function(){var t={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#chartGender",padding:t,data:{x:"x",columns:[["x",1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],["Female",96,104,97,102,96,121,122,107,106,114,89,96,104,88,88,92,74,77,13,0,26,34,50,50,46,53,58,35,62,61,83,67,93,104,111,164],["Male",346,366,347,341,363,420,424,381,409,432,422,417,394,406,432,399,398,382,328,326,343,371,344,379,392,398,433,449,429,425,495,479,473,470,508,581]],type:"area",order:"desc",labels:{format:{}}},legend:{show:!1},point:{show:!1},color:{pattern:["#FFA200","#4286f4"]},axis:{y:{max:600,min:0,padding:{bottom:0,top:0},tick:{count:5,values:[0,150,300,450,600],format:d3.format(".0f")}},x:{padding:{right:0,left:0},tick:{count:6,values:[1981,1988,1995,2e3,2007,2016],multiline:!1}}},grid:{x:{lines:[{value:2e3,text:"",position:"start",class:"powerline"}]}}})}()},{}]},{},[1]);
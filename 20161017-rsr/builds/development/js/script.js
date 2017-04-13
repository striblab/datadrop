(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
d3.json("./data/rsr.json", function(error, dataLoad) {

var data = dataLoad.rsr;

var currentDevice = "";

 d3.select("#deviceList").selectAll(".list")
  .data(data).enter().append("div")
  .attr("class","list")
  .attr("data",function(d){ return d.id; })
  .on("click", function(d, i){
    $("#manufName").html(d.manuf);
    $("#device").html(d.deviceName);
    $("#reports").html(d3.format(",")(d.numEvents));
    $("#lag").html(d3.format(",")(d.lag));
    $("#date").html(d3.time.format("%B %e, %Y")(new Date(d.receiveDate)));
    $("#FDA").attr("href",d.maudeLink);
    })
  .html(function(d){ 
    if (currentDevice != d.combinedName){
      currentDevice=d.combinedName;
      return "<button class='button'>" + d.combinedName + "</button>";
    } else {
      return null;
    }
    });

  $( ".button:first" ).click();

  $(".button:first").addClass("selected");

  $(".button").click(function() {
  $(".button").removeClass("selected");
  $(this).addClass("selected");
  });


   $( document ).ready(function() {

    $('#filter_box').keyup(function(i){
       $('.button').hide();
       $(".button").removeClass("selected");
       var txt = String($('#filter_box').val());
       $('.button').each(function(){
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
              $(this).show();
          }
       });
    });

       $('.company').click(function(i){
       $('.button').hide();
       $(".button").removeClass("selected");
       $(".company").removeClass("selected");
        $(this).addClass("selected");
       var txt = String($(this).attr("company"));
       $('.button').each(function(){
          if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
              $(this).show();
          }
       });
    });

   $('.reset').click(function(){
    $('.button').show();
    // $(this).addClass("selected");
    $(".company").removeClass("selected");
   });

});

});
},{}]},{},[1])
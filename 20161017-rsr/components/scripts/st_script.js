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
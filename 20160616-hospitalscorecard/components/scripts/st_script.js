d3.json("./data/hospitals.json", function(error, dataLoad) {

var data = dataLoad.allhosp;

var currentHospital = "";

 d3.select("#hospitalsList").selectAll(".list")
  .data(data).enter().append("div")
  .attr("class","list")
  .attr("data",function(d){ return d.id; })
  .on("click", function(d, i){
    $("#name").html(d.hospital);
    // $("#readpay").html(d3.format("$,")(d.readmImpact));

    $("#readpay").html( function (){
      if (d.readmImpact > 0){
        return "<span class='red'>" + (d3.format("$,")(d.readmImpact)) + "</span>";
      } else {
        return "<span class='green'>" + (d3.format("$,")(d.readmImpact)) + "</span>";
      }
    });

    $("#readscore").html( function (){
      if (d.readmScore > 0){
        return "<span class='red'>" + (d3.format(".2f")(d.readmScore)) + "</span>";
      } else {
        return "<span class='green'>" + (d3.format(".2f")(d.readmScore)) + "</span>";
      }
    });

    $("#percent").html( function (){
      $(this).removeClass("green");
      $(this).removeClass("red");
      if (d.readmScore > 0){
        $(this).addClass("red");
      } else {
        $(this).addClass("green");
      }
    });

    $("#readscAvg").html( function (){
      if (d.readmScore > 0.0029){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });
    
    $("#readComp").html( function (){
      if (d.readComp == true){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });

    $("#hacPay").html( function (){
      if (d.hacImpact > 0){
        return "<span class='red'>" + (d3.format("$,")(d.hacImpact)) + "</span>";
      } else {
        return "<span class='green'>" + (d3.format("$,")(d.hacImpact)) + "</span>";
      }
    });

    $("#hacSc").html(d.hacScore);

    $("#hacSc").html( function (){
      if (d.hacScore <= 7){
        return "<span class='green'>" + d.hacScore + "</span>";
      } else {
        return "<span class='red'>" + d.hacScore + "</span>";
      }
    });

    $("#hacAvg").html( function (){
      if (d.hacScore > 6.072){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });
    $("#hacComp").html( function (){
      if (d.hacComp == true){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });

    $("#valReward").html( function (){
      if (d.vbReward == true){
        return "will be rewarded";
      } else {
        return "is expected to lose";
      }
    });

    $("#valPay").html( function (){
      if (d.vbReward == true){
        return "<span class='green'>" + (d3.format("$,")(d.vbImpact)) + "</span>";
      } else {
        return "<span class='red'>" + (d3.format("$,")(d.vbImpact)) + "</span>"
      }
    });

    $("#vbAvg").html( function (){
      if (d.valueBasedScoreRaw < 0.0063){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });
    $("#vbComp").html( function (){
      if (d.vbComp == false){
        return "<span class='red'>worse</span>";
      } else {
        return "<span class='green'>better</span>";
      }
    });

    $("#vbSc").html( function (){
      if (d.vbReward == true){
        return "<span class='green'>" + (d3.format(".2f")(d.valueBasedScore)) + "</span>";
      } else {
        return "<span class='red'>" + (d3.format(".2f")(d.valueBasedScore)) + "</span>";
      }
    });

    $("#vbScPct").html( function (){
      $(this).removeClass("green");
      $(this).removeClass("red");
      if (d.vbReward == true){
        $(this).addClass("green");
      } else {
        $(this).addClass("red");
      }
    });

    })
  .html(function(d){ 
    if (currentHospital != d.hospital){
      currentHospital=d.hospital;
      return "<button class='button'>" + d.hospital + "</button>";
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


  $(".more").click(function() {
    $(".catMore").hide();
    $("#" + $(this).attr("data")).show();
  });

  $(".close").click(function() {
    $(".catMore").hide();
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
});

});
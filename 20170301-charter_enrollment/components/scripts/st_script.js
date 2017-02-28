d3.json("./data/schools.json", function(error, dataLoad) {

var data = dataLoad.schools;

d3.select("#schools").selectAll(".row")
  .data(data.sort(function(a,b) { return b.EnrollChange - a.EnrollChange; })).enter().append("div")
  .attr("class",function(d) { 
    if (d.schoolname == "NORTH ACADEMY ARTS/COMMUNICATION") { return "row selected" } 
    else { return "row"; } 
  })
  .style("background-color",function(d) { 

    if (d.Enr1213 == null){
      return "#999999";
    }

    var color_scale = d3.scale.linear().domain([-1, 0, 5]).range(['#F21919', '#F1D9CB', '#57B857']);
    return color_scale(d.EnrollChange);

  })
  .on("mousedown",function(d) { 

    if (d.Enr1213 == null){
      color = "#999999";
    }
    else {
      var color_scale = d3.scale.linear().domain([-1, 0, 5]).range(['#F21919', '#F1D9CB', '#57B857']);
      color = color_scale(d.EnrollChange);
    }

  	$("#districtName").html(d.schoolname);
  	$("#districtName").css('background-color',color);
  	$("#district").html("District: " + d.districtname);
  	$("#grades").html("Grades: " + d.grades);

     chart.load({
                columns: [
                    ['Enrolled', d.Enr1213, d.Enr1314, d.Enr1415, d.Enr1516, d.Enr1617],
                ]
    })

  })
  .html(function(d,i){ 
    var change = d3.format("+%")(d.EnrollChange);

    if (d.Enr1213 == null){
      change = "--";
    }

    return "<div class='col type mobilekill'>" + d.DistrictType + "</div><div class='col district mobilekill'>" + d.districtname + "</div><div class='col name'>" + d.schoolname + "</div><div class='col score'>" + change + "</div>";
  });

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".row").sort(function(a, b) {
          if (candidate == "name") { 
        if (sorted == "descend") { return d3.descending(a.districtname, b.districtname); }
        if (sorted == "ascend") { return d3.ascending(a.districtname, b.districtname); }
     }
          if (candidate == "change") { 
        if (sorted == "descend") { return d3.descending(a.EnrollChange, b.EnrollChange); }
        if (sorted == "ascend") { return d3.ascending(a.EnrollChange, b.EnrollChange); }
     }
          if (candidate == "type") { 
        if (sorted == "descend") { return d3.descending(a.DistrictType, b.DistrictType); }
        if (sorted == "ascend") { return d3.ascending(a.DistrictType, b.DistrictType); }
     }
          if (candidate == "district") { 
        if (sorted == "descend") { return d3.descending(a.districtname, b.districtname); }
        if (sorted == "ascend") { return d3.ascending(a.districtname, b.districtname); }
     }
    })
    .transition().duration(500);
}

$( document ).ready(function() {

$(".zoom").click(function() {
    $('#schools').animate({scrollTop : 0},800);
    return false;
});

$('#filter_box').on('keyup search', function(e){
    $('.row').hide();
    var txt = $('#filter_box').val();
    $('.row').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
    var count = $('.row:visible').length;
    $('#results').html(d3.format(",")(count));
});

$(".row").click(function() {
	$(".row").removeClass("selected");
	$(this).addClass("selected");
});


$(".th").click(function() {
  $(".th").removeClass("selected3");
  $(this).addClass("selected3");
  if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
  else if ($(this).hasClass("selected3")) { $(this).addClass("toggled"); var sorted ="descend"; } 
  tableSort("#schools",null,data,$(this).attr("data"),sorted);
});

});

   var schoolData = data.filter(function(d){ return d.schoolname == "NORTH ACADEMY ARTS/COMMUNICATION"; })

  	$("#districtName").html(schoolData[0].schoolname);
    $("#districtName").css('background-color','rgb(84, 183, 85)');

  	$("#district").html("District: " + schoolData[0].districtname);
  	$("#grades").html("Grades: " + schoolData[0].grades);

      var  padding = {
            top: 40,
            right: 40,
            bottom: 30,
            left: 40,
        };

    var chart = c3.generate({
            bindto: '#chart',
            padding: padding,
            data: {
                columns: [
					['Enrolled', schoolData[0].Enr1213, schoolData[0].Enr1314, schoolData[0].Enr1415, schoolData[0].Enr1516, schoolData[0].Enr1617]
                ],
                colors: { 'Enrolled': '#333333' }
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    // max: 3000,
                    min: 0,
                    padding: {bottom: 0, top: 10},
                    tick: {
                        count: 4,
                        format: d3.format(',.0f')
                    }
                },
                x: {
                    type: 'category',
                    categories: ['12-13', '13-14', '14-15', '15-16', '16-17'],
                    label: 'Enrollment over time'
                    // tick: {
                    //     format: '%Y'
                    // }
                }
            }
        });

});
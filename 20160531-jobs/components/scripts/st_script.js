$('.scrollToTop').click(function(){
    $('#jobsList').animate({scrollTop : 0},800);
    return false;
  });

d3.json("./data/growth.json", function(error, dataLoad) {

var data = dataLoad.growth;

$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
$(".zoom").click(function() {
  $(".card").show();
  $(".switch").removeClass("selected");
});

function tableSort(container,party,data,candidate,sorted){
   
  d3.select(container).selectAll(".card").sort(function(a, b) {
          if (candidate == "group") { 
        if (sorted == "descend") { return d3.descending(a.OccupationGroup, b.OccupationGroup); }
        if (sorted == "ascend") { return d3.ascending(a.OccupationGroup, b.OccupationGroup); }
     }
          if (candidate == "skill") { 
        if (sorted == "descend") { return d3.descending(a.Education, b.Education); }
        if (sorted == "ascend") { return d3.ascending(a.Education, b.Education); }
     }
           if (candidate == "pct") { 
        if (sorted == "descend") { return d3.descending(a.PercentChange, b.PercentChange); }
        if (sorted == "ascend") { return d3.ascending(a.PercentChange, b.PercentChange); }
     }
           if (candidate == "title") { 
        if (sorted == "descend") { return d3.ascending(a.Title, b.Title); }
        if (sorted == "ascend") { return d3.descending(a.Title, b.Title); }
     }
    })
    .transition().duration(500);
}

function tableBuild() {
d3.select("#jobsList").selectAll(".card")
.data(data.sort(function (a,b) { return d3.descending(a.PercentChange, b.PercentChange); })).enter().append("div")
.attr("class",function (d) { return "card " + d.SkillLevel; })
.html(function (d){ 
  var color_scale = d3.scale.linear().domain([-32, 0, 46]).range(['#CC4C02', '#ECF9B9', '#31A354']);
  var color = color_scale(d.PercentChange);

  if (d.SkillLevel == "high") { var skillswatch = "highSwatch"; }
  else if (d.SkillLevel == "middle") { var skillswatch = "middleSwatch"; }
  else if (d.SkillLevel == "low") { var skillswatch = "lowSwatch"; }

    return "<div class='tableCell title'>" + d.Title + "</div><div class='tableCell group'>" + d.OccupationGroup + "</div><div class='tableCell skill " + skillswatch + "'>" + d.Education + "</div><div class='tableCell pct' style='background-color:" + color + "'>" + d3.format("+")(d.PercentChange) + "%</div>";
});


//SEARCH FILTER TABLE
  $( document ).ready(function() {
    $('#filter_box').on('keyup search', function(e){
        $('.card').hide();
        var txt = $('#filter_box').val();
        $('.card').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
        var count = $('.card:visible').length;
        $('#results').html(count);
    });

      $(".switch").click(function() {
        $(".switch").removeClass("selected");
        $(this).addClass("selected");
        $('.card').hide();
        $('.' + $(this).attr("data")).show();
      });

      });
    $(".hSort").click(function() {
      $(".hSort").removeClass("selected");
      $(this).addClass("selected");
      if ($(this).hasClass("toggled")) { $(this).removeClass("toggled"); var sorted = "ascend"; }
      else if ($(this).hasClass("selected")) { $(this).addClass("toggled"); var sorted ="descend"; } 
      tableSort("#jobsList",null,data,$(this).attr("data"),sorted);
    });

// });

}

tableBuild();

// switchChart("tech","#ff0000")

});
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );
        var dd2 = new DropDown( $('#dd2') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });
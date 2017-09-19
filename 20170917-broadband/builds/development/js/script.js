(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results != null) { return results[1] || 0; }
  else { return null; }
}

var selected = $.urlParam('chart');

if (selected != null){
$(".slide").hide();
$("#" + selected).show();
}

var aspect = 550 / 400, chart = $(".map svg");
$(window).on("resize", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

$(window).on("load", function() {   
  var targetWidth = chart.parent().width();   
  chart.attr("width", targetWidth);   
  chart.attr("height", targetWidth / aspect);
});

//U.S. INTERNET USAGE CARTOGRAM
d3.csv("./data/stateRankings.csv", function(d) {
  return {
    state: d.ab,
    rate: +d.internet_pct,
    diff: +d.internet_diff
  };
}, function(error, rows) {

var dataT = rows;

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

var cartogram2 = {
    margin: {
        top: 40,
        right: 140,
        bottom: 0,
        left: 60
    },

    selector: '#map svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 550 - self.margin.left - self.margin.right;
        self.height = 400 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
              // return d.color;

              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].rate >= 0.80) { return "gray5"; }
                    else if (dataT[i].rate >= 0.75) { return "gray4"; }
                    else if (dataT[i].rate >= 0.70) { return "gray3"; }
                    else if (dataT[i].rate >= 0.65) { return "gray2"; }
                    else if (dataT[i].rate >= 0) { return "gray1"; }
                  }
               }
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size)
            .call(d3.helper.tooltip(function(d, i){

             var colorSwatch = "";
                
              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].rate >= 0.80) { colorSwatch = "gray5"; }
                    else if (dataT[i].rate >= 0.75) { colorSwatch = "gray4"; }
                    else if (dataT[i].rate >= 0.70) { colorSwatch = "gray3"; }
                    else if (dataT[i].rate >= 0.65) { colorSwatch = "gray2"; }
                    else if (dataT[i].rate >= 0) { colorSwatch = "gray1"; }
                    return "<h4 class='districtName'>" + d.state_full + "</h4><span class='legendary chatter " + colorSwatch + "'>" + d3.format("%")(dataT[i].rate) + "</span> broadband adoption</div>";
                  }
               }
             }));

        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return "gray5";
            })
            .style('color', function(d) {
                return "#ffffff";
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .text(function(d) {
                return d.state_postal;
            });
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total_old':'32','state_total_new':'25','state_change':'-63%','color':'gray2'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total_old':'14','state_total_new':'36','state_change':'+36%','color':'gray2'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total_old':'36','state_total_new':'43','state_change':'-33%','color':'gray2'},
        {'state_full':'California','state_postal':'CA','row':3,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-25%','color':'purple3'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total_old':'124','state_total_new':'93','state_change':'-33%','color':'purple3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total_old':'0','state_total_new':'6','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total_old':'3','state_total_new':'3','state_change':'-100%','color':'gray2'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total_old':'150','state_total_new':'136','state_change':'-14%','color':'gray2'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total_old':'77','state_total_new':'59','state_change':'-38%','color':'gray2'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total_old':'71','state_total_new':'68','state_change':'-21%','color':'purple3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total_old':'251','state_total_new':'221','state_change':'-14%','color':'purple3'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total_old':'216','state_total_new':'220','state_change':'0%','color':'gray2'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total_old':'228','state_total_new':'295','state_change':'+29%','color':'purple3'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total_old':'215','state_total_new':'205','state_change':'-6%','color':'gray2'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total_old':'308','state_total_new':'162','state_change':'-49%','color':'gray2'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total_old':'30','state_total_new':'26','state_change':'-53%','color':'gray2'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total_old':'0','state_total_new':'14','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total_old':'26','state_total_new':'27','state_change':'-46%','color':'purple1'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total_old':'102','state_total_new':'179','state_change':'+74%','color':'gray2'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'purple3'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total_old':'65','state_total_new':'46','state_change':'-57%','color':'gray2'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total_old':'264','state_total_new':'288','state_change':'+5%','color':'gray2'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'139','state_change':'-10%','color':'purple3'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total_old':'199','state_total_new':'179','state_change':'-11%','color':'gray2'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total_old':'0','state_total_new':'4','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total_old':'8','state_total_new':'19','state_change':'+50%','color':'gray2'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total_old':'24','state_total_new':'14','state_change':'-100%','color':'gray2'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total_old':'203','state_total_new':'135','state_change':'-38%','color':'gray2'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total_old':'156','state_total_new':'111','state_change':'-35%','color':'purple1'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total_old':'84','state_total_new':'117','state_change':'+36%','color':'purple3'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total_old':'258','state_total_new':'217','state_change':'-18%','color':'gray2'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total_old':'46','state_total_new':'53','state_change':'-30%','color':'gray2'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total_old':'40','state_total_new':'61','state_change':'+20%','color':'purple2'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'gray2'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total_old':'16','state_total_new':'30','state_change':'+38%','color':'gray2'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total_old':'88','state_total_new':'108','state_change':'+17%','color':'gray2'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total_old':'244','state_total_new':'147','state_change':'-42%','color':'gray2'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total_old':'223','state_total_new':'159','state_change':'+29%','color':'gray2'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total_old':'24','state_total_new':'24','state_change':'-67%','color':'gray2'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total_old':'7','state_total_new':'15','state_change':'-57%','color':'purple3'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total_old':'130','state_total_new':'123','state_change':'-10%','color':'gray2'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total_old':'88','state_total_new':'63','state_change':'-39%','color':'gray2'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total_old':'9','state_total_new':'22','state_change':'0%','color':'gray2'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total_old':'279','state_total_new':'242','state_change':'-15%','color':'purple3'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total_old':'33','state_total_new':'37','state_change':'-21%','color':'purple3'}]

};

//U.S. INTERNET CHANGE CARTOGRAM
var cartogram = {
    margin: {
        top: 40,
        right: 140,
        bottom: 0,
        left: 60
    },

    selector: '#mapChange svg',

    init: function() {
        var self = this;

        self.$el = $(self.selector);

        self.width = 550 - self.margin.left - self.margin.right;
        self.height = 400 - self.margin.top - self.margin.bottom;

        self.svg = d3.select(self.selector)
            .attr('height', self.height + self.margin.top + self.margin.bottom)
            .attr('width', self.width + self.margin.left + self.margin.right)

        self.state_size = self.width / 12;
        self.state_padding = 2;

        self.map = self.svg.append('g')
            .attr('transform', 'translate(' + self.margin.left + ','
                  + self.margin.top + ')')

        self.drawMap();
    },

    drawMap: function() {
        var self = this;

        var states = self.map.selectAll('.states')
            .data(self.state_pos_co2)
            .enter().append('g')
            .attr('class', 'state-groups');

        var state = states.append('rect')
            .attr('id', function(d) {
                return d.state_postal + "d";
            })
            .attr('class', 'state')
            .attr('class', function(d) {
              // return d.color;

              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].diff > 0) { return "gray3"; }
                    else if (dataT[i].diff == 0) { return "gray1"; }
                    else if (dataT[i].diff <= -0.04) { return "red5"; }
                    else if (dataT[i].diff <= -0.03) { return "red4"; }
                    else if (dataT[i].diff <= -0.02) { return "red2"; }
                    else if (dataT[i].diff <= -0) { return "red1"; }
                  }
               }
            })
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('x', function(d) {
                return d.column * (self.state_size + self.state_padding);
            })
            .attr('y', function(d) {
                return d.row * (self.state_size + self.state_padding);
            })
            .attr('width', self.state_size)
            .attr('height', self.state_size) 
            .call(d3.helper.tooltip(function(d, i){

             var colorSwatch = "";
                
              for (var i=0; i < dataT.length; i++){
                  if (d.state_postal == dataT[i].state) {
                    if (dataT[i].diff > 0) { colorSwatch = "gray3"; }
                    else if (dataT[i].diff == 0) { colorSwatch = "gray1"; }
                    else if (dataT[i].diff <= -0.04) { colorSwatch = "red5"; }
                    else if (dataT[i].diff <= -0.03) { colorSwatch = "red4"; }
                    else if (dataT[i].diff <= -0.02) { colorSwatch = "red2"; }
                    else if (dataT[i].diff <= -0) { colorSwatch = "red1"; }
                    return "<h4 class='districtName'>" + d.state_full + "</h4><span class='legendary chatter " + colorSwatch + "'>" + d3.format("+%")(dataT[i].diff) + "</span> change</div>";
                  }
               }
             }))     


        var text = states.append('text')
            .attr('class', 'state-label')
            .attr('class', function(d) {
                return "gray5";
            })
            .attr('dominant-baseline', 'central')
            .attr('x', function(d) {
                return (d.column * (self.state_size + self.state_padding))
                        + self.state_size / 2; })
            .attr('y', function(d) {
                return (d.row * (self.state_size + self.state_padding))
                    + self.state_size / 2; })
            .style('text-anchor', 'middle')
            .text(function(d) {
                return d.state_postal;
            })             
    },

    state_pos_co2: [{'state_full':'Alabama','state_postal':'AL','row':5,'column':6,'state_total_old':'32','state_total_new':'25','state_change':'-63%','color':'gray2'},
        {'state_full':'Alaska','state_postal':'AK','row':6,'column':0,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Arizona','state_postal':'AZ','row':4,'column':1,'state_total_old':'14','state_total_new':'36','state_change':'+36%','color':'gray2'},
        {'state_full':'Arkansas','state_postal':'AR','row':4,'column':4,'state_total_old':'36','state_total_new':'43','state_change':'-33%','color':'gray2'},
        {'state_full':'California','state_postal':'CA','row':3,'column':0,'state_total_old':'358','state_total_new':'267','state_change':'-25%','color':'purple3'},
        {'state_full':'Colorado','state_postal':'CO','row':3,'column':2,'state_total_old':'124','state_total_new':'93','state_change':'-33%','color':'purple3'},
        {'state_full':'Connecticut','state_postal':'CT','row':2,'column':9,'state_total_old':'0','state_total_new':'6','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'D.C.','state_postal':'DC','row':4,'column':8,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Delaware','state_postal':'DE','row':3,'column':9,'state_total_old':'3','state_total_new':'3','state_change':'-100%','color':'gray2'},
        {'state_full':'Florida','state_postal':'FL','row':6,'column':8,'state_total_old':'150','state_total_new':'136','state_change':'-14%','color':'gray2'},
        {'state_full':'Georgia','state_postal':'GA','row':5,'column':7,'state_total_old':'77','state_total_new':'59','state_change':'-38%','color':'gray2'},
        {'state_full':'Hawaii','state_postal':'HI','row':6,'column':-1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Idaho','state_postal':'ID','row':1,'column':1,'state_total_old':'71','state_total_new':'68','state_change':'-21%','color':'purple3'},
        {'state_full':'Illinois','state_postal':'IL','row':1,'column':6,'state_total_old':'251','state_total_new':'221','state_change':'-14%','color':'purple3'},
        {'state_full':'Indiana','state_postal':'IN','row':2,'column':5,'state_total_old':'216','state_total_new':'220','state_change':'0%','color':'gray2'},
        {'state_full':'Iowa','state_postal':'IA','row':2,'column':4,'state_total_old':'228','state_total_new':'295','state_change':'+29%','color':'purple3'},
        {'state_full':'Kansas','state_postal':'KS','row':4,'column':3,'state_total_old':'215','state_total_new':'205','state_change':'-6%','color':'gray2'},
        {'state_full':'Kentucky','state_postal':'KY','row':3,'column':5,'state_total_old':'308','state_total_new':'162','state_change':'-49%','color':'gray2'},
        {'state_full':'Louisiana','state_postal':'LA','row':5,'column':4,'state_total_old':'30','state_total_new':'26','state_change':'-53%','color':'gray2'},
        {'state_full':'Maine','state_postal':'ME','row':-1,'column':10,'state_total_old':'0','state_total_new':'14','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'Maryland','state_postal':'MD','row':3,'column':8,'state_total_old':'26','state_total_new':'27','state_change':'-46%','color':'purple1'},
        {'state_full':'Massachusetts','state_postal':'MA','row':1,'column':9,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'Michigan','state_postal':'MI','row':1,'column':7,'state_total_old':'102','state_total_new':'179','state_change':'+74%','color':'gray2'},
        {'state_full':'Minnesota','state_postal':'MN','row':1,'column':4,'state_total_old':'153','state_total_new':'210','state_change':'+37%','color':'purple3'},
        {'state_full':'Mississippi','state_postal':'MS','row':5,'column':5,'state_total_old':'65','state_total_new':'46','state_change':'-57%','color':'gray2'},
        {'state_full':'Missouri','state_postal':'MO','row':3,'column':4,'state_total_old':'264','state_total_new':'288','state_change':'+5%','color':'gray2'},
        {'state_full':'Montana','state_postal':'MT','row':1,'column':2,'state_total_old':'145','state_total_new':'139','state_change':'-10%','color':'purple3'},
        {'state_full':'Nebraska','state_postal':'NE','row':3,'column':3,'state_total_old':'199','state_total_new':'179','state_change':'-11%','color':'gray2'},
        {'state_full':'Nevada','state_postal':'NV','row':2,'column':1,'state_total_old':'0','state_total_new':'11','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'New Hampshire','state_postal':'NH','row':0,'column':10,'state_total_old':'0','state_total_new':'4','state_change':'Insufficient data','color':'purple3'},
        {'state_full':'New Jersey','state_postal':'NJ','row':2,'column':8,'state_total_old':'8','state_total_new':'19','state_change':'+50%','color':'gray2'},
        {'state_full':'New Mexico','state_postal':'NM','row':4,'column':2,'state_total_old':'24','state_total_new':'14','state_change':'-100%','color':'gray2'},
        {'state_full':'New York','state_postal':'NY','row':1,'column':8,'state_total_old':'203','state_total_new':'135','state_change':'-38%','color':'gray2'},
        {'state_full':'North Carolina','state_postal':'NC','row':4,'column':6,'state_total_old':'156','state_total_new':'111','state_change':'-35%','color':'purple1'},
        {'state_full':'North Dakota','state_postal':'ND','row':1,'column':3,'state_total_old':'84','state_total_new':'117','state_change':'+36%','color':'purple3'},
        {'state_full':'Ohio','state_postal':'OH','row':2,'column':6,'state_total_old':'258','state_total_new':'217','state_change':'-18%','color':'gray2'},
        {'state_full':'Oklahoma','state_postal':'OK','row':5,'column':3,'state_total_old':'46','state_total_new':'53','state_change':'-30%','color':'gray2'},
        {'state_full':'Oregon','state_postal':'OR','row':2,'column':0,'state_total_old':'40','state_total_new':'61','state_change':'+20%','color':'purple2'},
        {'state_full':'Pennsylvania','state_postal':'PA','row':2,'column':7,'state_total_old':'276','state_total_new':'182','state_change':'-34%','color':'gray2'},
        {'state_full':'Rhode Island','state_postal':'RI','row':2,'column':10,'state_total_old':'0','state_total_new':'0','state_change':'Insufficient data','color':'gray2'},
        {'state_full':'South Carolina','state_postal':'SC','row':4,'column':7,'state_total_old':'16','state_total_new':'30','state_change':'+38%','color':'gray2'},
        {'state_full':'South Dakota','state_postal':'SD','row':2,'column':3,'state_total_old':'88','state_total_new':'108','state_change':'+17%','color':'gray2'},
        {'state_full':'Tennessee','state_postal':'TN','row':4,'column':5,'state_total_old':'244','state_total_new':'147','state_change':'-42%','color':'gray2'},
        {'state_full':'Texas','state_postal':'TX','row':6,'column':3,'state_total_old':'223','state_total_new':'159','state_change':'+29%','color':'gray2'},
        {'state_full':'Utah','state_postal':'UT','row':3,'column':1,'state_total_old':'24','state_total_new':'24','state_change':'-67%','color':'gray2'},
        {'state_full':'Vermont','state_postal':'VT','row':0,'column':9,'state_total_old':'7','state_total_new':'15','state_change':'-57%','color':'purple3'},
        {'state_full':'Virginia','state_postal':'VA','row':3,'column':7,'state_total_old':'130','state_total_new':'123','state_change':'-10%','color':'gray2'},
        {'state_full':'Washington','state_postal':'WA','row':1,'column':0,'state_total_old':'88','state_total_new':'63','state_change':'-39%','color':'gray2'},
        {'state_full':'West Virginia','state_postal':'WV','row':3,'column':6,'state_total_old':'9','state_total_new':'22','state_change':'0%','color':'gray2'},
        {'state_full':'Wisconsin','state_postal':'WI','row':1,'column':5,'state_total_old':'279','state_total_new':'242','state_change':'-15%','color':'purple3'},
        {'state_full':'Wyoming','state_postal':'WY','row':2,'column':2,'state_total_old':'33','state_total_new':'37','state_change':'-21%','color':'purple3'}]

};

$(document).ready(function() {
  cartogram2.init();
  cartogram.init();
});



});

function chartStates(){

d3.csv("./data/stateRankings.csv", function(d) {
  return {
    state: d.ab,
    rate: +d.internet_pct
  };
}, function(error, rows) {

var dataT = rows;

var x = [];
var rate = [];

x[0] = "x";
rate[0] = "Broadband Access";

for (var i=1; i <= dataT.length; i++){
  x[i] = dataT[i-1].state;
  rate[i] = dataT[i-1].rate;
}

var  padding = {
        top: 20,
        right: 60,
        bottom: 20,
        left: 60,
    };

var chartT = c3.generate({
      bindto: "#chartStates",
      padding: padding,
      data: {
            x: 'x',
            columns: [
                x,
                rate
            ],
        types: {
          'Broadband Access':'bar'
         },
         colors: {
              'Broadband Access': function(d) { 
              if (d.index == 12) { return "#333333"; }
              else if (d.index == 27) { return "#666666"; }
              else { return "#aaaaaa"; }
          }
            }
        },
        legend: {
            show: false
        },
        color:{
          pattern: ["#aaa"]
        },
        axis: {
              rotated: true,
              y: {
                    max: 1,
                    min: 0,
                    padding: {bottom: 0, top: 0},
                    tick: {
                     count: 4,
                     format: d3.format('%')
                    }
                },
            x: {
                type: 'category'
                //  tick: {
                //      values: [1950,1965,1980,1996,2012],
                //      count: 5
                // }
            }
        }
});

});

}

chartStates();

//TECHNOLOGY BY RACE
  function chartRace(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chartRace",
          padding: padding,
          data: {
              // x: 'x',
                columns: [
                  ['US Broadband Access',0.895,0.793,0.705,0.645],
                  ['MN Broadband Access',0.874,0.858,0.769,0.754]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#aaaaaa',"#333333"]
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                x: {
                    type: 'category',
                    categories: ['Asian','White','Hispanic','Black'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                }
            }
    });
}

chartRace();


//TECHNOLOGY BY RACE
  function chartIncome(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chartIncome",
          padding: padding,
          data: {
                columns: [
                  ['US Broadband Access',0.56,0.80,0.94],
                  ['MN Broadband Access',0.56,0.80,0.95]
                ],
            type: 'bar'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#aaaaaa','#333333']
                },
            axis: {
                  rotated: true,
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['< $20k','$20k-$75k','$75k+'],
                    tick: {
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    }
                 }
            }
    });
}

chartIncome();

//TECHNOLOGY BY RACE
  function chartSpeed(){

    var  padding = {
            top: 20,
            right: 60,
            bottom: 20,
            left: 80,
        };

    var chartTrend = c3.generate({
          bindto: "#chartSpeed",
          padding: padding,
          data: {
                columns: [
                  ['768k Down/200k Up',0.971,0.978,0.980,0.985,0.985,0.988,0.987],
                  ['1.5M Down/200k Up',0.967,0.973,0.975,0.981,0.981,0.986,0.985],
                  ['3M Down/768k Up',0.911,0.930,0.945,0.958,0.960,0.967,0.978],
                  ['6M Down/1.5M Up',0.812,0.851,0.868,0.899,0.909,0.929,0.940],
                  ['10M Down/1.5M Up',0.802,0.841,0.855,0.887,0.894,0.904,0.916],
                  ['25M Down/1.5M Up',0.689,0.715,0.728,0.833,0.843,0.858,0.879],
                  ['50M Down/1.5M Up',0.652,0.684,0.686,0.789,0.798,0.814,0.846],
                  ['100M Down/1.5M Up',0.453,0.677,0.678,0.760,0.762,0.798,0.829],
                  ['1G Down/1.5M Up',0.0,0.0,0.0,0.0,0.0,0.01,0.015]
                ],
            type: 'line'
            },
            legend: {
                show: false
            },
            point: {
                show: false
            },
                color: {
                  pattern: ['#DDDDDD','#C1C1C1','#A5A5A5','#8A8A8A','#6E6E6E','#525252','#373737','#1B1B1B','#000000']
                },
            axis: {
                  y: {
                        max: 1,
                        min: 0,
                        padding: {bottom: 0, top: 0},
                        tick: {
                         count: 4,
                         values: [0,0.25,0.50,0.75,1],
                        format: d3.format('%')
                        }
                    },
                 x: {
                    type: 'category',
                    categories: ['Oct 2011','Apr 2012','Oct 2012','Apr 2013','Oct 2013','Apr 2014','Oct 2014'],
                    tick: {
                         rotate: -75,
                        // count: 4,
                        multiline: false,
                        // format: d3.format('.0f')
                    },
                    height: 40
                 }
            }
    });
}

chartSpeed();

d3.json('./data/diff.json', function(error, dataLoad) {

d3.json('./shapefiles/counties.json', function(error, counties) {

var data = dataLoad.counties;

function mapTips(d, subject, dataCompare){

if (subject == "percent") {

    var color = "";
    var dcolor = "";
    var broadband = 0;
    var diff = 0;

           for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == String(dataCompare[i].county).toUpperCase()) {
           if (dataCompare[i].broadband_2017 >= 80) { color = "gray5"; }
           else if (dataCompare[i].broadband_2017 >= 60) { color = "gray4"; }
           else if (dataCompare[i].broadband_2017 >= 40) { color = "gray3"; }
           else if (dataCompare[i].broadband_2017 >= 20) { color = "gray2"; }
           else if (dataCompare[i].broadband_2017 > 0) { color = "gray1"; }

           broadband = dataCompare[i].broadband_2017;

           // if (dataCompare[i].diff >= 80) { dcolor = "gray5"; }
           // else if (dataCompare[i].diff >= 60) { dcolor = "gray4"; }
           // else if (dataCompare[i].diff >= 40) { dcolor = "gray3"; }
           // else if (dataCompare[i].diff >= 20) { dcolor = "gray2"; }
           // else if (dataCompare[i].diff >= 0) { dcolor = "gray1"; }
           // else if (dataCompare[i].diff < 0) { dcolor = "red3"; }
           diff = dataCompare[i].diff;
          }
         }

    return "<div class='districtName'>" + d.properties.COUNTYNAME + " County</div><div><span class='legendary chatter " +  color + "'>" + d3.format(".1f")(broadband) + "%</span> broadband access</div><div class='mobilekill'><span class='chatter " +  dcolor + "'>" + d3.format("+.1f")(diff) + "%</span> change since 2012</div>"      

}

}

function mapBuild(container, boxContainer, chartContainer, shape, subject, geo, dataCompare, index) {

var width = 320,
    height = 400,
    centered;

if (geo=="us") { var projection = d3.geo.albersUsa().scale(700).translate([330, 200]); }
else if (geo=="mn") { var projection = d3.geo.albersUsa().scale(5037).translate([50, 970]); }
else if (geo=="metro") { var projection = d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]); }

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(container + " svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

d3.json("shapefiles/" + shape, function(error, us) {

  g.append("g")
      .attr("class", "states")
    .selectAll("path")
      .data(us.features)
    .enter().append("path")
      .attr("d", path)
      .attr("class", function(d){

        if (subject == "percent"){ 
         for (var i=0; i < dataCompare.length; i++){
          if (String(d.properties.COUNTYNAME).toUpperCase() == String(dataCompare[i].county).toUpperCase()) {
           if (dataCompare[i].broadband_2017 >= 90) { return "gray5"; }
           else if (dataCompare[i].broadband_2017 >= 80) { return "gray4"; }
           else if (dataCompare[i].broadband_2017 >= 60) { return "gray3"; }
           else if (dataCompare[i].broadband_2017 >= 40) { return "gray2"; }
           else if (dataCompare[i].broadband_2017 >= 20) { return "gray1"; }
           else if (dataCompare[i].broadband_2017 > 0) { return "none"; }
          }
         }
       }
        })
      .style("stroke-width", "1px")
      .style("stroke", "#fff")
      .call(d3.helper.tooltip(function(d, i){
        return mapTips(d, subject, dataCompare);
      }));

  g.append("path")
      .attr("id", "state-borders")
      .attr("d", path);

});

var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        g.selectAll("circle")
            .attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

$(".zoom, .switch, #close, .mapSwitch").click(function() {
  clicked2();
  $("#filter input").val("");
  $(".district").removeClass("selected");
  $("#infobox").hide();
  d3.selectAll(".map rect").classed('faded', false); 
  d3.selectAll(".map rect").classed('active', false); 
  $(".rightSide").show();
});

$(".mapSwitch").click(function() {
  $("#filter input").val("");
});

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 6;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 3;
    centered = null;
  }

  d3.selectAll("#mapMetro path, #mapState path")
      .classed("faded", false)
      .classed("active", false);

  g.selectAll("path")
      .classed("faded", true)
      .classed("active", centered && function (d) { return d === centered; });
}

function clicked2(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 1;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("faded", false)
      .classed("active", centered && function (d) { return d === centered; });
}

}

d3.helper = {};

d3.helper.tooltip = function(accessor){
    return function(selection){
        var tooltipDiv;
        var bodyNode = d3.select('body').node();
        selection.on("mouseover", function(d, i){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px')
                .style('position', 'absolute') 
                .style('z-index', 1001);
            // Add text using the accessor function
            var tooltipText = accessor(d, i) || '';
            // Crop text arbitrarily
            //tooltipDiv.style('width', function(d, i){return (tooltipText.length > 80) ? '300px' : null;})
            //    .html(tooltipText);
        })
        .on('mousemove', function(d, i) {
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10)+'px')
                .style('top', (absoluteMousePos[1] - 15)+'px');
            var tooltipText = accessor(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
        .on("mouseout", function(d, i){
            // Remove tooltip
            tooltipDiv.remove();
        });

    };
};

//POPULATE
  mapBuild("#mapCounties", "#infobox", "#chart", "counties.json", "percent", "mn", data, 0);
});
});


//PROVIDERS MAP
d3.json('./shapefiles/counties.json', function(error, counties) {
d3.json('./shapefiles/mnblocks.json', function(error, blocks) {
//MAPPAGE BLOCKS
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA';
var map = new mapboxgl.Map({
    container: 'mapProviders',
    style: 'mapbox://styles/shadowflare/ciqzo0bu20004bknkbrhrm6wf',
    // center: [-93.179770, 44.877039],
    center: [-93.985900, 46.429553], 
    zoom: 4.9,
    minZoom: 3
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
$(".mapboxgl-ctrl-geocoder input").attr("placeholder","Search by city or address");

// geocoder2.on('result', function(ev) {
//   map2.flyTo({ center: ev.result.geometry.coordinates, zoom: 14 });
//     });

    map.addSource("counties", {
        type: "geojson",
        data: counties
    });

    map.addSource("blocks", {
        type: "geojson",
        data: blocks
    });


      map.addLayer({
       'id': 'blocks-layer',
       'interactive': true,
       'source': 'blocks',
       'layout': {},
       'type': 'fill',
            'paint': {
           // 'fill-antialias' : true,
           'fill-opacity': 1,
           'fill-color': {
            "type": "categorical",
            "property": "p",
            "stops": [
              [0, "#fee5d9"],
              [1, "#fb6a4a"],
              [2, "#de2d26"],
              [3, "#a50f15"]
           ]
        },
           'fill-outline-color': 'rgba(0, 0, 0, 1)'
     }
   }, 'place-neighbourhood');

      map.addLayer({
       'id': 'counties-layer',
       'interactive': true,
       'source': 'counties',
       'layout': {},
       'type': 'fill',
            'paint': {
           'fill-antialias' : true,
           'fill-opacity': 0.3,
           'fill-color': "#dddddd",
           'fill-outline-color': 'rgba(0, 0, 0, 1)'
     }
   }, 'place-neighbourhood');

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['counties-layer'] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.lngLat)
        .setHTML("<div>" + feature.properties.COUNTYNAME + " County</div>")
        .addTo(map);
});



});
});
});
},{}]},{},[1])